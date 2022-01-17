# Promise、

> 实现步骤

- 实现简单的同步Promise
- 增加异步功能
- 增加链式调用then
- 增加catch finally方法
- 增加all race 等方法
- 实现一个promise的延迟对象defer
- 最终测试

## 实现简单的同步Promise

首先要知道：

- Promise内部维护着三种状态：pending（进行中）、resolved（任务执行成功）、reject（任务失败结果），⚠️切记：三种状态，只要改变就不能再被改成其他状态；即pending->resolve后是不能再转变成别的状态。

- Promise 内部有一个value 属性，value值即任务执行成功返回的结果；⚠️如果在value可以是任何值但是如果想要执行异步任务是必须返回一个promise对象，当然这个说的是在then函数中了，

- Promise 内部有一个 reason 属性，用来存放 Promise 状态变为 rejected 的原因

- 简述：内部有个 state，doneList，failList，方法 resolve，reject，返回 fn(resolve, reject)。原型链有个 then，里面做的事情就是把函数参数推入 doneList 和 failList。然后 resolve 里执行的逻辑就是拿出 doneList 顺序执行下去，reject 执行 failList。

接下来让我实现一下同步的Promise函数
注意1.2.3.4.5

```
function Promise(executor) {
    let _this = this;
    /** 2 定义初始的一些变量 */
    this.value = null;
    this.status = 'pending';
    this.reason = null

    /** 3 定义初始的成功和失败函数 */
    function resolve(value) {
        /** 4 判断状态是不是初始状态pending 
         *    是就转换状态 否则不转换 
         *    确保状态的变化后的不可变性 */
        if (_this.status == 'pending') {
            this.status = 'resloved';
            this.value = value
        }
    }

    function reject(reason) {
        /** 5 同上 */
        if (_this.status === 'pending') {
            that.status = 'rejected';
            that.reason = reason;
        }
    }
    /**
     * 1 Promise中首先传了一个executor，它是一个函数
     *   executor函数中又传了两个函数，分别是resolve和reject
     *   很显然 resolve是成功回调，reject是失败的回调
     */
    executor(resolve, reject);
}
/**定义promise的then方法
    then方法上面有两个回调 一个是成功后的方法 另一个是失败后的方法
 *    根据成功或失败的状态去执行相关成功onFilfulled()或者失败onRejected()的回调方法*/
Promise.prototype.then = function (onFilfulled, onRejected) {
    let _this = this;
    /** 7 如果状态已经变更为resolved 
     *    说明resolve方法已经被调用
     *    那么此时就执行成功的回调函数onFilfulled
     *    并传入参数 that.value
     * */
    console.log(_this.status)
    if (_this.status === 'resloved') {
        onFilfulled(_this.value)
    }
    /** 8 如果状态已经变更为reject
     *    说明resolve方法已经被调用
     *    那么此时就执行成功的回调函数onRejected
     *    并传入参数 that.reason
     * */
    if (_this.status === 'rejected') {
        onRejected(_this.reason)
    }
}

// module.exports = Promise;
```

## 增加异步功能

```
function Promise(executor) {
    let _this = this;
    this.value = null;
    this.status = 'pending';
    this.reason = null;
     /** 1 因为异步不是立即执行 状态不会变更 成功或失败的回调函数也不会执行
     *    所以先定义好存放成功或失败回调函数的数组 
     *    以便将成功或失败的回调函数先保存起来
     * */
    this.onFilFulledCallbacks = [];
    this.onRejectedCallbacks = [];

    function resolve(value) {
        if (_this.status == 'pending') {
            this.status = 'resloved';
            this.value = value;
            /** 3 成功发布
             *    等待状态发生变更
             *    状态变更后 立即执行之前存放在相应数组中所有的成功的回调函数
             *    即 发布
             */
             this.onFilFulledCallbacks.foEach(fn=>{
                 fn();
             })
        }
    }

    function reject(reason) {
        if (_this.status === 'pending') {
            that.status = 'rejected';
            that.reason = reason;
            /** 4失败 发布
             *    等待状态发生变更
             *    状态变更后 立即执行之前存放在相应数组中所有的失败的回调函数
             *    即 发布
             */
             this.onFilFulledCallbacks.foEach(fn=>{
                 fn();
             })
        }
    }
    executor(resolve, reject);
}
Promise.prototype.then = function (onFilfulled, onRejected) {
    let _this = this;
    if (_this.status === 'resloved') {
        onFilfulled(_this.value)
    }
    if (_this.status === 'rejected') {
        onRejected(_this.reason)
    }
    /** 2 订阅
     *    因为是异步 状态当时并没有立即变更 所以状态还是pending
     *    此时需要把成功或者失败的回调函数存放到对应的数组中
     *    等待状态变更时 再从数组中拿出来去执行
     *    即 订阅
     *    *存放数组时 为了执行时方便 需要把回调函数的外层包裹一层空函数
     */
    if(_this.status === 'pending'){
        _this.onFilFulledCallbacks.push(function(){
            onFilfulled(_this.value);
        });
    }
    if(_this.status === 'pending'){
        _this.onRejectedCallbacks.push(function(){
            onRejected(_this.reason);
        });
    }
}

module.exports = Promise;
```

至此，我们实现了异步的Promise.其实这里的实现异步的思想就是发布订阅.

en～ok.高能预警🐯.接下来就稍稍复杂了 因为我们要实现链式调用then。 要实现这个功能那我们就要重写then方法，并在then方法中重新返回一个Promise,只有这样，才可以实现多次调用then.而且要新增一个解析返回值是否为promise的函数.

稍微捋一下逻辑

- 如果一个then方法返回的是一个普通值的话，这个值会传递给下一个then中做resolve的返回值；
- 如果then方法返回的是一个promise的话，我们要根据上一个then的状态（成功与失败）来决定下一个then的成功与失败

## 增加链式调用then

```
function Promise(executor) {
    let that = this;
    that.status = 'pending';
    that.value = null;
    that.reason = null;
    that.onFilFulledCallbacks = [];
    that.onRejectedCallbacks = [];
   
    function resolve(value) {
        if (that.status === 'pending') {
            that.status = 'resolved';
            that.value = value;
            that.onFilFulledCallbacks.forEach((fn) = & gt; {
                fn();
            });
        }
    }

    function reject(reason) {
        if (that.status === 'pending') {
            that.status = 'rejected';
            that.reason = reason;
            that.onRejectedCallbacks.forEach((fn) = & gt; {
                fn();
            });
        }
    }
    executor(resolve, reject);
}

Promise.prototype.then = function (onFilfulled, onRejected) {
    let that = this;
    /** 1 让promise2等于一个新的Promise 并将promise2返回 */
    let promise2 = new Promise((resolve, reject) = & gt; {
        if (that.status === 'resolved') {
            /** 2 因为返回了promise2 
             *  并且第3步resolvePromiseRelation函数中传递了promise2
             *  而目前promise2并没有拿到
             *  所以加一个定时器 异步执行 等到promise2拿到后 
             *  再去执行 resolvePromiseRelation()方法 并将promise2传递进去*/
            setTimeout(() = & gt; {
                try {
                    let promise3 = onFilfulled(that.value);
                    /** 3 判断新返回值是什么类型的函数
                     *  并将当前的promise：promise2  新的返回值：promise3 
                     *  和 成功时回调：esolve  失败时回调：reject 作为参数传进去 */
                    resolvePromiseRelation(promise2, promise3, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        }
        if (that.status === 'rejected') {
            /** 同2 */
            setTimeout(() = & gt; {
                try {
                    let promise3 = onRejected(that.reason);
                    /** 同3*/
                    resolvePromiseRelation(promise2, promise3, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        }
        if (that.status === 'pending') {
            that.onFilFulledCallbacks.push(function () {
                /** 同2 */
                setTimeout(() = & gt; {
                    try {
                        let promise3 = onFilfulled(that.value);
                        /** 同3*/
                        resolvePromiseRelation(promise2, promise3, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            });
        }
        if (that.status === 'pending') {
            that.onRejectedCallbacks.push(function () {
                /** 同2 */
                setTimeout(() = & gt; {
                    try {
                        let promise3 = onRejected(that.reason);
                        /** 同3*/
                        resolvePromiseRelation(promise2, promise3, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            });
        }
    });
    /** 同1 */
    return promise2;
}

function resolvePromiseRelation(promise2, promise3, resolve, reject) {
    /** 4 防止自己等待自己 一直循环等待 */
    if (promise2 === promise3) {
        return reject(new TypeError('循环引用了!'));
    }
    /**  8 一个标示 表示当前没有被调用过 
     *   确保resolve或者reject后的状态不会再次发生变更
     */
    let called;
    /** 5 保证promise3是一个引用类型
     *  判断新返回值promise3的类型 
     *  如果是普通值常量 就直接resolve导出 */
    if (promise3 !== null & amp; & amp;
        (typeof promise3 === 'object' || typeof promise3 === 'function')) {
        try {
            let then = promise3.then;
            /** 6 确保promise3是一个Promise
             *  判断promise3的then方法
             *  如果存在 并且是一个function类型 
             *  就表示promise3是一个Promise */
            if (typeof then === 'function') {
                /** 9 执行promise3的then方法
                 *  因为promise3也是一个Promise
                 *  需要再次解析promise3的then方法
                 *  直到解析到最后的返回值不是一个Promise类型为止
                 */
                then(promise3, (promise4) = & gt; {
                    /** 同8 */
                    if (called) return;
                    called = true;
                    /** 10 递归解析新的返回值的类型
                     *  解析到返回值不是一个Promise类型为止
                     */
                    resolvePromiseRelation(promise3, promise4, resolve, reject);
                }, (r) = & gt; {
                    /** 同8 */
                    if (called) return;
                    called = true;
                    reject(r);
                });
            } else {
                /** 7 此时promise3是一个普通对象 直接resolve() */
                resolve(promise3);
            }
        } catch (e) {
            /** 同8 */
            if (called) return;
            called = true;
            reject(e);
        };
    } else {
        //常量
        /** 同5 普通值直接resolve()*/
        resolve(promise3);
    }
}

module.exports = Promise;
```

ok. 至此 我们已经实现了Promsie的异步和链式调用. Promise中比较复杂的部分我们已经搞定了 接下来就是添加一些方法，其实这部分反而没那么复杂了.

## catch|finally方法增加
- catch : catch方法本质上就是一个then方法的变形，只有失败时的回调 没有成功时的回调
- catch : finally方法的作用是不管 Promise 对象最后状态如何，都会执行操作.其实说白了就是在then方法的成功和失败的回调函数中都执行该方法就行了.

```

/** 1 直接返回this的then方法
 *  因为catch只捕获错误 所以resolve直接为null
 *  返回reject就好*/
Promise.prototype.catch = function(errFn){
    return this.then(null,errFn);
}

/** 3 finally实现起来也很简单 
 *  分别在resolve和reject中执行fn就好 
 *  最后再把this返回出去就好
*/
Promise.prototype.finally = function(fn){
    this.then(()=&gt;{
        fn();
    },()=&gt;{
        fn();
    });
    return this;
}

module.exports = Promise;
```

## all race resolve reject等方法

```
//类方法，多个 Promise 任务同时执行。
//如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。

/** 1 直接在构造函数上增加all方法
 *  它返回的也是一个Promise
 *  等待参数数组中所有的promise都执行完毕后
 *  再返回结果
 */
Promise.all = function(values){
    return new Promise((resolve,reject)=&gt;{
        /** 2 定义一个存放最终结果的数组result和一个index */ 
        let results = [];
        let index = 0;
        /** 3 定义一个方法addToArr()  
         *  让index每次执行增加results数组元素的函数的时候都+1
         *  当index === values的长度的时候 说明此时所有promsie都执行完毕并放到的数组中
         *  然后直接resolve(results)就行了
        */
        function addToArr(key,value){
            index++;
            results[key] = value;
            /** 6 当满足条件时 说明所有的promise都执行完毕 直接resolve(results) */
            if(index === values.length){
                resolve(results);
            }
        }
        /** 4 循环values中的每一项promsie */
        for(let i = 0; i &lt; values.length; i++){
            let current = values[i];
            /** 5 判断每一项promise的返回值是不是一个Promsie
             *  是的话就执行该Promise的then方法 拿到返回值 并放到数组results中
             *  是一个普通值的话就直接将该值放到数组results中
             */
            if(current &amp;&amp; current.then &amp;&amp; typeof current.then === 'function'){
                current.then((value)=&gt;{
                    /** 同5 把返回值放到数组results中*/
                    addToArr(i,value);
                },reject);
            }else{
                /** 同5 把返回值放到数组results中*/
                addToArr(i,current);
            }
        }
    });
}

//类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。 
。
/** race方法相比较于all方法简单很多
 *  因为race中的promsie成功resolve一个 
 *  整个race就resolve */
Promise.race = function(values){
    return new Promise((resolve,reject)=&gt;{
        /** 同4 */
        for(let i = 0; i &lt; values.length; i++){
            let current = values[i];
            /** 同5 */
            if(current&amp;&amp;current.then&amp;&amp;typeof current.then === 'function'){
                /** 7 直接执行then就好 */
                current.then(resolve,reject);
            }else{
                /** 8 普通值直接resolve */
                resolve(current);
            }
        }
    });
}


// resolve方法
Promise.resolve = function(value){
    return new Promise((resolve,reject)=&gt;{
        resolve(value);
    });
}
// reject方法
Promise.reject = function(reason){
    return new Promise((resolve,reject)=&gt;{
        reject(reason);
    });
}

module.exports = Promise;
```

## 实现一个promise的延迟对象defer

```
// 实现一个promise的延迟对象 defer
Promise.defer = Promise.deferred = function(){
    let dfd = {};
    dfd.promise = new Promise((resolve, reject)=&gt;{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
```

## 最终测试

- 测试当前代码是否符合Promise/A+规范
- 全局安装 npm i -g promises-aplus-tests
- 文件所在目录运行以下命令 (例如你的文件名为:MyPrommise.js)
- promise-aplus-tests MyPrommise.js
- 等待
- ok.


## 一些 Promise 的面试题

> 第一题
```
const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
})
promise.then(() => {
    console.log(3)
})
console.log(4)

// 1 2 4 3
```

记住 new Promise 里的参数函数，是同步被执行的，故而先输出 1，2.

resolve 后还需要等待进入下一个事件循环。then 把参数函数推入微任务队列，并不直接执行。

输出 4，接着事件循环进入下一轮，输出 3.

> 第二题 **

```
var promise = new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 3000)
})

请问这三种有何不同？

promise.then(() => {
  return Promise.resolve(2);
}).then((n) => {
  console.log(n)
});

promise.then(() => {
  return 2
}).then((n) => {
  console.log(n)
});

promise.then(2).then((n) => {
  console.log(n)
});

// 2 2 1

```
1.输出2。Promise.resolve 就是一个 Promise 对象就相当于返回了一个新的 Promise 对象。然后在下一个事件循环里才会去执行 then

2.输出2。和上一点不一样的是，它不用等下一个事件循环。

3.输出1。then 和 catch 期望接收函数做参数，如果非函数就会发生 Promise 穿透现象，打印的是上一个 Promise 的返回。


> 第三题 


```
let a;
const b = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
}).then(() => {
  console.log('promise4');
});

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a); //已经进入事件循环了
  console.log('after1');
  await a
  resolve(true);
  console.log('after2');
});

console.log('end');

// promise1 undefined  promise2 promise3 promise4  Promise { pending } after1
```

第一个输出 promise1，是因为 Promise 里的方法立即执行。接着调用 resolve，只不过 then 里的方法等下一个周期

第二个输出 undefined，是因为立即执行执行 a 内部的方法，先 console.log(a)，但此时的 a 还没赋值给左边的变量，所以只能是 undefined。然后 await b 就得等下一个周期执行了。

第三个输出 end，自然不意外。

接着输出 promise2，promise3，promise4，是因为 await b 等待他执行完了，才轮到 a 内部继续执行。

输出 Promise { pending }，，事件都进入了循环了，a 肯定已经被赋值成了 Promise 对象。所以第二遍 console.log(a)，自然就输出这个了。

输出 after1 不奇怪。

await a 时，a 是必须等待 Promise 的状态从 pending 到 fullfilled 才会继续往下执行，可 a 的状态是一直得不到更改的，所以无法执行下面的逻辑。只要在 await a 上面加一行 resolve() 就能让后面的 after 2 得到输出。


> 第四题

```
const promise = new Promise((resolve, reject) => {
  resolve('success1');
  reject('error');
  resolve('success2');
});

promise
  .then((res) => {
    console.log('then: ', res);
  })
  .catch((err) => {
    console.log('catch: ', err);
  });

//'then: success1'
```
 Promise 对象的状态只能被转移一次，resolve('success1') 时状态转移到了 fullfilled 。后面 reject 就调用无效了，因为状态已经不是 pending。

 > 第五题

```
Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
  // then:  Error: error!!!
```

没有抛出错误和异常，只是 return 了一个对象，哪怕他是 Error 对象，那自然也是正常走 then 的链式调用下去了，不会触发 catch。




      