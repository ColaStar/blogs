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