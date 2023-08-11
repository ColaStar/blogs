# vue 中的NextTick的实现原理

## 前言

根据数据的响应式原理，在数据变化之后会触发dom更新。但是如果一个数据更新就引起dom的重新渲染，这样显然会导致大大降低性能。因此vuve采用一步更新，更新数据后不能立刻拿到最新的节点，但是可以通过nextTick等待页面更新好之后再获取最终的dom。

## 数据更新

在vue中，数据更新通过调用watcher上的update方法实现。而每一次调用update就可以把需要更新的watcher暂存起来，形成watcher队列。

```
update(){
    //this.get() 渲染更新
    //不要每次都调用get方法
    queueWatcher(); // 暂存的概念
}
```

## watcher 队列

通过wueueWatcher函数，将需要批量更新的watcher存在一个队列最终，并做去重操作。flushScheduleQueue将队列中的watch而执行。这里的关键就是nextTick，它将watcher执行的操作变成了异步。

```
let queue = []; // 将需要批量更新的watcher存在一个队列中，稍后让watcher执行
let has = {};
let padding = false;
function flushScheduleQueue(){
    queue.forEach(watcher => {watcher.run,watcher.cb()})
    queue = [];
    has = {};
    pending = false;
} 
function queueWatcher (watcher){
    const id = watcher.id();
    if(has[id] == null){
        queue.push(watcher);
        has[id] = true
    }
    if(!pending){
        nextTick(flushScheduleQueue)
        pending = true
    }
}
```

# nextTick

nextTick 这个异步函数，不单是给watcher做内部调用，用户也可以通过$nextTick调用，但是整个异步的过程只会调用一次，因此需要把这些异步的操作暂存起来。

```
let callbacks = [];
let pending = false
function flushCallback(){
    while(callbacks.length){
        let cb = callbacks.shift()
        cb()
    }
    pending = false
}
export function nextTick(cb){
    callbacks.push(cb)
    if(!pending){
        timerFunc();// 这个是异步方法，做了兼容性处理
        pending = true
    }
}
```

根据上面的代码，我们只要通过函数timerFunc异步调用flushCallbacks函数就可以实现nextTick的异常更新，但是这个异步方法需要做兼容性处理。

## nextTick的兼容性处理

```
let timerFunc;
if(Promise){
    timerFunc = () => {
        Promise.resolve.then(flushCallbacks)
    }
}else if(MutationObserver){
    let observer = new MutationObserver(flushCallbacks);
    let textNode  = document.createTextNode(1)
    observe.observe(textNode,{characterData:true})
    timerFunc = () => {
        textNode.textContent = 2
    }
}else if (setImmediate){
  timerFunc = () => {
      setImmediate(flushCallbacks) // 这是一个只有高版本IE和Edge浏览器才可能拥有的API, 其主要是用于计算大量数据的时候使用
  }
}else{
    timerFunc = () => {
        setTimeout(flushCallbacks)
    }
}
```
## 源码
![](ttp://blog.colastar.club/static/images/nexttick.png)
## 总结

**nextTick 实现的几个重点**

- 1、将异步操作暂存起来
- 2、通过pending防止重复调用异步函数
- 3、对异步函数做兼容操作
- 4、nextTick并不是用来监听DOM变更，因为DOM变更是能够实时获取到的，它的作用是一次性更改数据，并且渲染DOM
