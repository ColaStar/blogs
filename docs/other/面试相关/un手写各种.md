# 手写bind

```
Function.prototype.bind = function(context){
    if(typeof this !== function){
        throw Error('this is not a function')
    }
    var argus = Array.prototype.slice.call(arguments,1);//拿回绑定bind时用户传入的参数
    var truFn = function(){}//创建一个空的函数做周转，防止用户改变原函数方法。
    var _this = this
    var returnFn = function() {
        var bindArgs = Array.prototype.slice.call(arguments)
      _this.apply(this in truFn ? this : context,argus.concat(bindArgs))
    }
    truFn.prototype = this.prototype;
    returnFn.prototype = new truFn()
    return returnFn
}
```
