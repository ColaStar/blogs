# Event Loop 总结

## 前言

`Event Loop`即事件循环机制，是指浏览器或 `Node` 的一种解决`javaScript` 单线程运行不会阻塞的一种机制，也就是我们经常使用异步的原理。



## 浏览器的 Event Loop

![](http://blog.colastar.club:9527/static/images/eventloop_browser.jpg)

由上图我们可以看出`Javascript `有一个 `main thread` **主线程**和 `call-stack` **调用栈(执行栈)**，所有的任务都会被放到调用栈等待主线程执行。而JS调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。

`Javascript`单线程任务被分为**同步任务**和**异步任务**，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。

在 `JavaScript` 中，任务被分为两种，一种宏任务（`MacroTask`）也叫Task，一种叫微任务（`MicroTask`）。

### 流程
执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去执行Task（宏任务），每次宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。

其实我们可以 `Event Loop` 当作是银行取钱，宏任务可以看成是一个客户要办理的主要任务（办卡），微任务就可以看成是存钱

|宏任务|微任务|
|:--:|:--:|
|script|promise|
|setTineout|async/await|
|setInterval|MutationObserver|
|requestAnimationFrame||

### 例子

```
console.log('script start')

async function async1() {
  await async2()
  //new Promise(reslove=>{
  //    console.log('async2 end') 
  //    resolve()
  //}).then(res=>{
  //console.log('async1 end')
  //})
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

```
### 几道坑题

#### 如果 promise 没有 resolve 或 reject
```
// async function async1(){
//     console.log(1);
//     await new Promise(res=>{
//         console.log(2)
//     })
//     console.log(3)
//     return '4'
// }
// console.log(5)
// async1().then(res=>{
//     console.log(res)
// })
// console.log(7)
// 5 1 2 7 原因 await 要等待promise的状态变更
```

#### resolve 处理 thenable，也会包裹一个promise
```
async function async1(){
    console.log(1);
    return new Promise(res=>{
        res(async2())
    }).then(()=>{
        console.log(5)
    }).then(()=>{
        console.log(10)
    })
}
function async2(){
    console.log(2)
    //return {then(r){r()}}
    //return 1
}
setTimeout(()=>{
    console.log(9)
},0)
async1()

new Promise(res=>{
    console.log(3)
    res()
}).then(()=>{
    console.log(6)
}).then(()=>{
    console.log(7)
}).then(()=>{
    console.log(8)
})

console.log(4)
//1 2 3 4 5 6 10 7 8 9
```

```


async function async1(){
    console.log(1);
    return new Promise(res=>{
        //resolve 处理 thenable，也会包裹一个promise
        res(async2())
    }).then(()=>{
        console.log(5)
    }).then(()=>{
        console.log(10)
    })
}
async function async2(){
    //自己也是一个promise
    console.log(2)
}
setTimeout(()=>{
    console.log(9)
},0)
async1()

new Promise(res=>{
    console.log(3)
    res()
}).then(()=>{
    console.log(6)
}).then(()=>{
    console.log(7)
}).then(()=>{
    console.log(8)
})

console.log(4)

// 1 2 3 4 6 7 5 8 10 9

//与上边的代码不同 ，更改async2 为async结果不一样，因为resolve本身会包裹一层promise ，async本身也是promise，所以会延后俩步执行.then函数
```

## Node的 Event Loop

Node中的Event Loop是基于libuv实现的，而libuv是 Node 的新跨平台抽象层，libuv使用异步，事件驱动的编程方式，核心是提供i/o的事件循环和异步回调。libuv的API包含有时间，非阻塞的网络，异步文件操作，子进程等等。 Event Loop就是在libuv中实现的。

![](http://blog.colastar.club:9527/static/images/node_eventloop.jpg)

![](http://blog.colastar.club:9527/static/images/node_async_eventloop.jpg)
|宏任务|微任务|
|:--:|:--:|
|script|promise|
|setTimeout|async/await|
|setInterval|process.nextTick|
|setImmediate||


`Node`的`Event loop`一共分为6个阶段，每个细节具体如下：

- `timers`: 执行`setTimeout`和`setInterval`中到期的`callback`。
- `pending callback`: 上一轮循环中少数的`callback`会放在这一阶段执行。
- `idle`, `prepare`: 仅在内部使用。
- `poll`: 最重要的阶段，执行`pending callback`，在适当的情况下回阻塞在这个阶段。
- `check`: 执行`setImmediate`(`setImmediate()`是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行`setImmediate`指定的回调函数)的`callback`。
- `close callbacks`: 执行`close`事件的`callback`，例如`socket.on('close'[,fn])`或者`http.server.on('close, fn)`。

具体细节如下：

#### timers

执行`setTimeout`和`setInterval`中到期的callback，执行这两者回调需要设置一个毫秒数，理论上来说，应该是时间一到就立即执行callback回调，但是由于system的调度可能会延时，达不到预期时间。

以下是官网文档解释的例子：

```
const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);


// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
```

当进入事件循环时，它有一个空队列（fs.readFile()尚未完成），因此定时器将等待剩余毫秒数，当到达95ms时，fs.readFile()完成读取文件并且其完成需要10毫秒的回调被添加到轮询队列并执行。

当回调结束时，队列中不再有回调，因此事件循环将看到已达到最快定时器的阈值，然后回到timers阶段以执行定时器的回调。
在此示例中，您将看到正在调度的计时器与正在执行的回调之间的总延迟将为105毫秒。

以下是我测试时间：
![](http://blog.colastar.club:9527/static/images/node_test_setTime.jpg)

#### pending callbacks


此阶段执行某些系统操作（例如TCP错误类型）的回调。 例如，如果TCP socket ECONNREFUSED在尝试connect时receives，则某些* nix系统希望等待报告错误。 这将在pending callbacks阶段执行。

#### poll

**该poll阶段有两个主要功能：**

- 执行I/O回调。
- 处理轮询队列中的事件。


**当事件循环进入poll阶段并且在timers中没有可以执行定时器时，将发生以下两种情况之一**

- 如果poll队列不为空，则事件循环将遍历其同步执行它们的callback队列，直到队列为空，或者达到system-dependent（系统相关限制）。

**如果poll队列为空，则会发生以下两种情况之一**

- 如果有setImmediate()回调需要执行，则会立即停止执行poll阶段并进入执行check阶段以执行回调。
- 如果没有setImmediate()回到需要执行，poll阶段将等待callback被添加到队列中，然后立即执行。

**当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。**

#### check

**此阶段允许人员在poll阶段完成后立即执行回调。**

如果`poll`阶段闲置并且`script`已排队`setImmediate()`，则事件循环到达`check阶`段执行而不是继续等待。


`setImmediate()`实际上是一个特殊的计时器，它在事件循环的一个单独阶段运行。它使用`libuv API`来调度在`poll`阶段完成后执行的回调。
通常，当代码被执行时，事件循环最终将达到`poll`阶段，它将等待传入连接，请求等。
但是，如果已经调度了回调`setImmediate()`，并且轮询阶段变为空闲，则它将结束并且到达`check`阶段，而不是等待`poll`事件。

```
console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')
```
如果node版本为v11.x， 其结果与浏览器一致。

```
start end promise3 timer1 promise1 timer2 promise2
```

如果node版本11以下，结果大不相同

```
start end promise3 timer1 timer2 promise1 promise2
```

**总结可以看出**

![](http://blog.colastar.club:9527/static/images/node_eventLoop_version_diff.jpg)

[具体详情可以查看《又被node的eventloop坑了，这次是node的锅》。](https://link.zhihu.com/?target=https%3A//juejin.im/post/5c3e8d90f265da614274218a)


#### setImmediate() 的setTimeout()的区别

- `setImmediate和setTimeout()`是相似的，但根据它们被调用的时间以不同的方式表现。
- `setImmediate()`设计用于在当前poll阶段完成后check阶段执行脚本 。
- `setTimeout()` 安排在经过最小（ms）后运行的脚本，在timers阶段执行。

```
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
```
![](http://blog.colastar.club:9527/static/images/node_eventloop_1.jpg)
从上图可以看出，其结果不一致，为什么呢？

执行定时器的顺序将根据调用它们的上下文而有所不同。 如果从主模块中调用两者，那么时间将受到进程性能的限制。


**那么如果在I/O周期内调用，则始终首先执行setImmediate**

**因为俩者都是在I/O阶段注册的，所以先执行check，再执行timer。**
```
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

//immediate timeout
```
其结果可以确定一定是immediate => timeout。

**主要原因**是在I/O阶段读取文件后，事件循环会先进入poll阶段，发现有setImmediate需要执行，会立即进入check阶段执行setImmediate的回调。

然后再进入timers阶段，执行setTimeout，打印timeout。

#### Process.nextTick()


`process.nextTick()`虽然它是异步API的一部分，但未在图中显示。这是因为`process.nextTick()`从技术上讲，它不是事件循环的一部分。

`process.nextTick()`方法将 `callback` 添加到`next tick`队列。 一旦当前事件轮询队列的任务全部完成，在`next tick`队列中的所有`callbacks`会被依次调用。


换种理解方式：

当每个阶段完成后，如果存在 `nextTick` 队列，就会清空队列中的所有回调函数，并且优先于其他 `microtask` 执行。

**例子**
```
let bar;

setTimeout(() => {
  console.log('setTimeout');
}, 0)

setImmediate(() => {
  console.log('setImmediate');
})
function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

bar = 1;
// bar 1,  setImmediate , setTimeout 或 bar 1, setTimeout, setImmediate 

无论哪种，始终都是先执行process.nextTick(callback)，打印bar 1。

```

**案例：常见的nodejs回调函数第一个参数，都是抛出错误**

每个阶段执行完后，在当前阶段的尾部触发 nextick

```
fs.readFile(__filename, (err,data) => {

}
//怎么传的呢
function apiCall(arg,callback){
  if(typeof arg !=== string){
    return process.nextTick(
      callback,//正常执行，抛一个error对象出去，不让主线程崩掉
      new TypeError("argument should be string") //传回去做第一个参数，
    )
  }
}

```

参考文章
[《promise, async, await, execution order》](https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252Fxianshenglu%252Fblog%252Fissues%252F60)
[《Normative: Reduce the number of ticks in async/await》](https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252Ftc39%252Fecma262%252Fpull%252F1250)
[《async/await 在chrome 环境和 node 环境的 执行结果不一致，求解？》](https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fwww.zhihu.com%252Fquestion%252F268007969)
[《更快的异步函数和 Promise》](https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fv8.js.cn%252Fblog%252Ffast-async%252F)
[一次弄懂Event Loop](https://zhuanlan.zhihu.com/p/55511602)












