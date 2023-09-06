function Promise(exector){
    var _this = this;
    this.value =null;
    this.reason = null;
    this.status = 'pending'
    this.onFilFulledCallbacks = [];
    this.onRejectdCallbacks = [];
    
    function resolve(value){
      if(_this.status === 'pending'){
          _this.status = 'resolved';
          _this.value = value;
          this.onFilFulledCallbacks.forEach(fn=>{
              fn()
          })
      }
    }
    function reject(reason){
  if(_this.status === 'pending'){
      _this.status = 'rejected';
      _this.reason = reason;
      this.onRejectCallBack.forEach(fn(){
          fn();
      })
  }
    }
    exector(resolve,reject)
}

Promise.prototype.then = function(onfillFull,onReject){
    var _this = this;
    let promise2 = new Promise((resolve,reject)=>{
        if(this.statsu === 'resolved' ){
            try{
            //异步执行 等到promise2
           setTimeout(()=>{
              var promise3 = onfillFull(_this.value)
              resolvePromiseRelation(promise2,promise3,resolve,reject)
           },0)
            }catch(e){
            reject(e)
            }
         
        }
        if(this.statsu === 'rejected' ){
            //异步执行 等到promise2
           setTimeout(()=>{
             try{
                  var promise3 = onReject(_this.season)
              resolvePromiseRelation(promise2,promise3,resolve,reject)
             }catch(e){
                 reject(e)
             }
           },0)
        }
        if(_this.status === 'pending'){
        _this.onFilFullCallBack.push(()=>{
            setTimeout(()=>{
              var promise3 = onFilFull(_this.value);
              resolvePromiseRelation(promise2,promise3,resolve,reject)
             },0)
        })
    }
    if(_this.status === 'pending'){
     _this.onRejectdCallbacks.push(()=>{
            setTimeout(()=>{
                var promise3 = onreject(_this.reason);
                resolvePromiseRelation(promise2,promise3,resolve,reject)
            },0)         
     })
    }
    })
    return promise2
    }
    function resolvePromiseRelation(promise2,promise3,resolve,reject){
        if(promise2 === promise3){
            return reject(new TypeError('循环引用了!'));
        }
        let called; //判断是否被调用过，如果调用过会有状态状态不能更改】
        if(promise3 !== null || (typeof promise3 === 'object' || typeof promise3 === 'function')){
            try{
               var then = promise3.then;
               if(typeof then == 'function'){
                   then(promise3,(promise4)=>{
                       if(called)return;
                       called = true;
                        resolvePromiseRelation(promise3,promise4,resolve,reject)
                   },(e)=>{
                       if(called) return ;
                       called = true;
                       reject(r);
                   })
               }else{
                   //是普通对象
                   resolve(promise3)
               }
            }cacth(e){
              reject(e)
            }
        }else{
             resolve(promise3)

        }

    }