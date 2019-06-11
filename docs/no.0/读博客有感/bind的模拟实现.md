bind函数模拟实现
------------------------------------------------------------------------------------------------


> bind()方法会创建一个新函数。当这个新函数被调用时，bind()的第一个参数将作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数。
#### bind函数有俩个特点：
- 1.返回一个新的函数
- 2.可以传入参数，以逗号隔开

#### 返回函数的模拟实现
```
var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

// 返回了一个函数
var bindFoo = bar.bind(foo);

bindFoo();
```

#### 关于指定 this 的指向，我们可以使用call或者apply实现。

```
Function.prototype.bind2 = function(context) {
  var self = this;
  return function() {
    return self.apply(context);
  }
}
```
此外，之所以 return self.apply(context)，是考虑到绑定函数可能是有返回值的

#### 传参的模拟实现

```
Function.prototype.bind2 = function (context) {
  var _self = this;
  
  // 获取 bind2 函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);
  
  return function() {
    // 这个时候的 arguments 是指bind返回的函数传入的参数。
    var bindArgs = Array.prototype.slice.call(arguments);
    return _self.apply(context, args.concat(bindArgs));
  }
}
```
> 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

也就是说当 bind 返回的函数作为构造函数的时候，bind时指定的this值会失效，但传入的参数依然生效。
```
var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
```
尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。

```
// 第三版
Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  
  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fBound ? this : context, args,concat(bindArgs));
  };
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fBound.prototype = this.prototype;
  return fBound;
}
}
```
#### 构造函数效果的优化实现
但是在这个写法中，我们直接将**fBound.prototype = this.prototype**，我们直接修改 **fBound.prototype 的时候，也会直接修改绑定函数的 prototype**。这个时候，我们可以通过一个**空函数来进行中转**：

```
// Version 4
Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  
  var fNOP = function () {};
  
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
  }
  
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}
```
#### 总结----最终版本
> 处理返回函数
1.指定 this 的指向，我们可以使用call或者apply实现
2.考虑返回函数是有返回值的；
2.返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值，可以通过一个空函数来进行中转;即空函数的prototype = 返回函数的prototype、绑定函数等于空函数的实例
> 处理传入参数
1.bind函数中第二个参数到最后一个参数；
2.bind函数返回函数传入的参数
```
Function.prototype.bind2 = function(context){
    if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
     var _self = this;
     var args = Array.prototype.slice.call(1,arguments);
     var trfn = function(){}
     var returnFn = function(){
         var bindArgs = Array,prototype.slice.call(arguments);
         return _self.apply(this in trfn ? this : context,args.concat(bindargs))
     }
     trfn.prototype = this.prototype;
     returnFn.prototype = new trfn()
     return returnFn
}
```



