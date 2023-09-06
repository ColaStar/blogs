function Promise1(executor){
    let that = this;
    that.status = 'pending';
    that.value = null;
    that.reason = null;
    that.onFilFulledCallbacks = [];
    that.onRejectedCallbacks = [];

    function resolve(value){
        if(that.status === 'pending'){
            that.status = 'resolved';
            that.value = value;
            that.onFilFulledCallbacks.forEach((fn)=&gt;{
                fn();
            });
        }
    }
    function reject(reason){
        if(that.status === 'pending'){
            that.status = 'rejected';
            that.reason = reason;
            that.onRejectedCallbacks.forEach((fn)=&gt;{
                fn();
            });
        }
    }
    executor(resolve,reject);
}

Promise1.prototype.then = function(onFilfulled,onRejected){
    /** 2 此处有个坑 如果只写1 不写2的话
     *  会报一个TypeError ：onRejected is not a function
     *  在此处给它一个默认的成功和失败的回调函数就好 */
    onFilfulled = typeof onFilfulled === 'function'?onFilfulled:value=&gt;value;
    onRejected = typeof onRejected ===  'function'?onRejected:err=&gt;{throw err};
    let that = this;
    let promise2 = new Promise1((resolve,reject)=&gt;{
        if(that.status === 'resolved'){
            setTimeout(()=&gt;{
                try{
                    let promise3 = onFilfulled(that.value);
                    resolvePromise1Relation(promise2,promise3,resolve,reject);
                }catch(e){
                    reject(e);
                }
            },0);
        }
        if(that.status === 'rejected'){
            setTimeout(()=&gt;{
                try{
                    let promise3 = onRejected(that.reason);
                    resolvePromise1Relation(promise2,promise3,resolve,reject);
                }catch(e){
                    reject(e);
                }
            },0);
        }
        if(that.status === 'pending'){
            that.onFilFulledCallbacks.push(function(){
                setTimeout(()=&gt;{
                    try{
                        let promise3 = onFilfulled(that.value);
                        resolvePromise1Relation(promise2,promise3,resolve,reject);
                    }catch(e){
                        reject(e);
                    }
                },0);
            });
        }
        if(that.status === 'pending'){
            that.onRejectedCallbacks.push(function(){
                 setTimeout(()=&gt;{
                    try{
                        let promise3 = onRejected(that.reason);
                        resolvePromise1Relation(promise2,promise3,resolve,reject);
                    }catch(e){
                        reject(e);
                    }
                },0);
            });
        }
    });
    return promise2;
}

function resolvePromise1Relation(promise2,promise3,resolve,reject){
    if(promise2 === promise3){
        return reject(new TypeError('循环引用了!'));
    }
    let called;
    if(promise3!==null&amp;&amp;(typeof promise3 === 'object'||typeof promise3 === 'function')){
        try{
            let then = promise3.then;
            if(typeof then === 'function'){
                then(promise3, (promise4)=&gt;{
                    if(called) return;
                    called = true;
                    resolvePromise1Relation(promise3,promise4,resolve,reject);
                },(r)=&gt;{
                    if(called) return;
                    called = true;
                    reject(r);
                });
            }else{
                resolve(promise3);
            }
        }catch(e){
            if(called) return;
            called = true;
            reject(e);
        };
    }else{
        resolve(promise3);
    }
}

/** 1 直接返回this的then方法
 *  因为catch只捕获错误 所以resolve直接为null
 *  返回reject就好*/
Promise1.prototype.catch = function(errFn){
    return this.then(null,errFn);
}

/** 3 finally实现起来也很简单 
 *  分别在resolve和reject中执行fn就好 
 *  最后再把this返回出去就好
*/
Promise1.prototype.finally = function(fn){
    console.log('ssss')
    this.then(()=&gt;{
        fn();
    },()=&gt;{
        fn();
    });
    return this;
}

// module.exports = Promise1;