// // 判断变量否为function
// const isFunction = variable => typeof variable === 'function'
// // 定义Promise的三种状态常量
// const PENDING = 'PENDING'
// const FULFILLED = 'FULFILLED'
// const REJECTED = 'REJECTED'


// class MyPromise {
//     constructor(handle) {
//         if (!isFunction(handle)) {
//             throw new Error('MyPromise must accept a function as a parameter')
//         }
//         // 添加状态
//         this._status = PENDING;
//         // 添加值
//         this._value = undefined
//         // 添加成功回调函数队列
//         this._fulfilledQueues = []
//         // 添加失败回调函数队列
//         this._rejectedQueues = []
//         // 执行handle
//         try {
//             // 执行handle
//             //硬绑定当前promise对象到_resolve方法上改变当前promise状态与执行内容
//             //硬绑定当前promise对象到_reject方法上改变当前promise状态与执行内容
//             handle(this._resolve.bind(this), this._reject.bind(this))
//         } catch (err) {
//             this._reject(err)
//         }
//     }
//     // 添加resovle时执行的函数
//     _resolve(val) {
//         const run = () => {
//             if (this._status !== PENDING) return
//             this._status = FULFILLED
//             // 依次执行成功队列中的函数，并清空队列
//            console.log(this._fulfilledQueues, '_resolve--function🐎.....')
//             const runFulfilled = (value) => {
//                 let cb;
//                 // console.log(this._fulfilledQueues.toString(),'执行队列值')
//                 while (cb = this._fulfilledQueues.shift()) {
//                     cb(value)
//                 }
//             }
//             // 依次执行失败队列中的函数，并清空队列
//             const runRejected = (error) => {
//                 let cb;
//                 while (cb = this._rejectedQueues.shift()) {
//                     cb(error)
//                 }
//             }
//             /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
//               当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
//             */
//             if (val instanceof MyPromise) {
//                 console.log(val,'promise22')
//                 val.then(value => {
//                     this._value = value
//                     runFulfilled(value)
//                 }, err => {
//                     this._value = err
//                     runRejected(err)
//                 })
//             } else {
//                 this._value = val
//                 console.log('🐂🐂')
//                 runFulfilled(val)
//             }
//         }
//         // 为了支持同步的Promise，这里采用异步调用
//         setTimeout(run, 0)
//     }
//     // 添加reject时执行的函数
//     _reject(err) {
//         if (this._status !== PENDING) return
//         // 依次执行失败队列中的函数，并清空队列
//         const run = () => {
//             this._status = REJECTED
//             this._value = err
//             let cb;
//             while (cb = this._rejectedQueues.shift()) {
//                 cb(err)
//             }
//         }
//         // 为了支持同步的Promise，这里采用异步调用
//         setTimeout(run, 0)
//     }
//     then(onFulfilled, onRejected) {
//         // console.log(this._fulfilledQueues,'then队列')
//         const {
//             _value,
//             _status
//         } = this;
//         // 返回一个新的Promise对象
//         return new MyPromise((onFulfilledNext, onRejectedNext) => {
//             // console.log(onFulfilledNext.toString(),onRejectedNext)
//             // 封装一个成功时执行的函数
//             let fulfilled = value => {
//                 try {
//                     if (!isFunction(onFulfilled)) {
//                         onFulfilledNext(value)
//                     } else { //如果是函数
//                         let res = onFulfilled(value);
//                         if (res instanceof MyPromise) {
//                             // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
//                             res.then(onFulfilledNext, onRejectedNext)
//                         } else {
//                             //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
//                             onFulfilledNext(res)
//                         }
//                     }
//                 } catch (err) {
//                     // 如果函数执行出错，新的Promise对象的状态为失败
//                     onRejectedNext(err)
//                 }
//             }
//             // 封装一个失败时执行的函数
//             let rejected = error => {
//                 try {
//                     if (!isFunction(onRejected)) {
//                         onRejectedNext(error)
//                     } else {
//                         let res = onRejected(error);
//                         if (res instanceof MyPromise) {
//                             // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
//                             res.then(onFulfilledNext, onRejectedNext)
//                         } else {
//                             //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
//                             onFulfilledNext(res)
//                         }
//                     }
//                 } catch (err) {
//                     // 如果函数执行出错，新的Promise对象的状态为失败
//                     onRejectedNext(err)
//                 }
//             }
//             // console.log(_status, '状态')
//             switch (_status) {
//                 // 当状态为pending时，将then方法回调函数加入执行队列等待执行
//                 case PENDING:
//                     this._fulfilledQueues.push(fulfilled)
//                     console.log(this._fulfilledQueues,'😭')
//                     this._rejectedQueues.push(rejected)
//                     break
//                     // 当状态已经改变时，立即执行对应的回调函数
//                 case FULFILLED:
//                     console.log(this._fulfilledQueues,'执行成功回调😀')
//                     onFulfilled(_value)
//                     break
//                 case REJECTED:
//                     console.log(this._fulfilledQueues,'××执行错误回调😔××')
//                     onRejected(_value)
//                     break
//             }
//         })

//     }
// }

// new MyPromise((resolve, reject) => {
//     var s = new MyPromise((resolve1, reject1) => {
//         resolve1('包含的promise🥚🥚')
//     })
//     resolve('FULFILLED---000000')
//     console.log('第一次🍎')
// })


// new MyPromise((resolve, reject) => {
//     // setTimeout(() => {
//     resolve('FULFILLED---000000')
//     console.log('第一次🍎')
//     // reject('REJECTED')
//     // }, 1000)
// }).then(res => [
//     console.log(res, 'then1🍌')
// ]).then(res => {
//     console.log(res, 'then2🚀')
// })
// console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')










// var s = 1
// var obj = new Promise(function(resolve,reject){
//     if(s == 2){
//         resolve('相等')
//     }else{
//         reject('不相等')
//     }
// })
// obj.then(res=>{
//    console.log(res)
// },err=>{
//     console.log(err)
// })


var arr = [1,2,3,4,5,6,7,8];
var obj = {a:1,b:2,c:3,d:4}

for(let i of arr){
  console.log(i + '  in')
}