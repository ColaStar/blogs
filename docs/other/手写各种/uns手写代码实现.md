# 面试

## 手写new

```
function new (fun){
  if(typeof fun !== 'function'){
     throw Error(`${fun} is not a function` )
  }
  var obj = {}
  obj.__proto__ = fun.prototype;
  var result = fun.apply(obj,Array.prototype.slice(arguments,1))
  return result
}
```
## 手写JSON.stringify

```
function stringify(context){
 switch(typeof context){
   case 'number'
   case 'boolean'
    return String(jsonObj)
   case 'string'
    return '"' + jsonObj + '"';
   case 'undefined':
   case 'function':
    return undefined;

 }
}
```
## 手写JSON.parse

## 手写一个call或 apply

- call

a.call(obj,'1')

```
Function.prototype.call = function(context){
   if(typeof this !== 'function'){
     Throw new Error('this is not a function')
   }
   context = context | window
   context.fn = this;
   var argus = [...arguments].slice(1)
   var result = context.fn(...argus)
   delete context.fn
   return result
}
```

- apply 

```
Function.prototype.apply = function(context,arr){
  if(typeof this !== 'function'){
    Throw new Error('this is not a function')
  }
  context = context | window
  context.fn = this;
  if(arr){
  var result = context.fn(arr)
  }else{
   var result = context.fn(arr)
  }
  delete context.fn;
  return result;
}
```

## 手写一个Function.bind
var b = a.bind(obj,1)
b(2)
```
Function.prototype.bind(context){
if(typeof this !== 'function'){
  Throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
}
var _self = this;
var augus = Array.prototype.slice.call(arguments,1);
var trFn = function(){}
var returnFn = function(){
var bindArgus = Array.prototype.slice.call(arguments);
return _self.apply(this in trFn ? this : context,argus.concat(bindArgus))
}
trFn.prototype = this.prototype;
returnFn.prototype = new trFn()
return returnFn;
}
```

## 手写一个继承
寄生组合式继承

一般只建议写这种，因为其它方式的继承会在一次实例中调用两次父类的构造函数或有其它缺点。

核心实现是：用一个 F 空的构造函数去取代执行了 Parent 这个构造函数。

```
function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
function Child(name, parentName) {
    Parent.call(this, parentName);  
    this.name = name;    
}
function create(proto) {
    function F(){}
    F.prototype = proto;
    return new F();
}
Child.prototype = create(Parent.prototype);
Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}
Child.prototype.constructor = Child;

var parent = new Parent('father');
parent.sayName();    // parent name: father

var child = new Child('son', 'father');

```

## 手写一个JS函数柯里化和反柯里化

```
function curry(fn,args){
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);

//ES6


const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])

let curryTest=curry((a,b,c,d)=>a+b+c+d)
curryTest(1,2,3)(4) //返回10
curryTest(1,2)(4)(3) //返回10
curryTest(1,2)(3,4) //返回10

作者：前端劝退师
链接：https://juejin.im/post/5c9c3989e51d454e3a3902b6
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## 手写一个Promise


## .手写防抖(Debouncing)和节流(Throttling)

## 手写一个JS深拷贝(由浅入深多种解法)

## 手写一个instanceOf原理

## 手写一个map和reduce

## 手写实现拖拽

## 使用setTimeout模拟setInterval

## 手写实现Object.create的基本原理

## 手写实现一个基本的Event Bus 