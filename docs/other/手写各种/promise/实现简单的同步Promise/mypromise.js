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
