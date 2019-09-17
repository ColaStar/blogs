> 1.undefined与is not defined区别

undefined：声明了但是未被赋值，  
is not defiened 变量未被声明
> 立即执行函数
- 为了避免变量污染（命名冲突）
- 1、Javascript引擎在解析javascript代码时会‘函数声明提升'（Function declaration Hoisting）当前执行环境（作用域）上的函数声明，
而函数表达式必须等到Javascirtp引擎执行到它所在行时，才会从上而下一行一行地解析函数表达式

- 2、函数表达式后面可以加括号立即调用该函数，函数声明不可以
>  闭包
- 简介：函数定义和函数表达式位于另一个函数的函数体内。而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包。。
- **特点**：
1. 作为一个函数变量的一个引用，当函数返回时，其处于激活状态。  
2. 一个闭包就是当一个函数返回时，一个没有释放资源的栈区。   
3.避免全局变量的污染。
- **注意**：  
1.内部函数可以访问外部函数变量，在函数外部自然无法读取函数内的局部变量；而外部函数想要访问内部函数的变量时，就需要把内部函数返回出去。  
2.闭包会使得函数中的变量都被保存在内存中，内存消耗很大，可以通过把变量设置为null，这样可以防止内存泄露。）
> 闭包为什么会造成内存泄露
```
function f1() {
  var N = 0;
  function f2() {
    N += 1;
    console.log(N)
  }
  return f2;	// 在f2的内部得到了N
}
var result = f1();
result();
result();
result();
result = null; // 使用完以后对result赋值为null， 这样就不会造成内存泄露了
// 不仅仅能拿到变量，变量还一直在内存中
```
```
function Product() {
  var name;
  this.setName = function(value) {
    name = value;
  };
  this.getName = function() {
    return name;
  }
}

var s = new Product();
s.setName('hello');
```
> 原型链

面向对象编程是什么? 怎么实现面向对象编程？
```
var Car = function(color) {
  // Car.prototype.constructor = Car
  // 构造函数和初始化这个类就是一个东西了
  this.color = color;
  this.sail = function() {
    console.log(this.color + "卖13W");
  }
};

Car.prototype.sail = function() {
  console.log(this.color + "卖13W");
};

// Todo 构造函数中的方法 和 构造函数原型上方法的区别

var BMW = function(color) {
  Car.call(this.color)
};

// 面试 必问
// 子类
// 1. 拿到父类原型类上的方法
// 2. 不能让构造函数执行两次
// 3. 引用的原型链不能是按值引用
// 4. 修正子类的 constructor
var __pro = Object.create(Car.prototype);
__pro.constructor = BMW;
BMW.prototype = __pro;
```

```
// 函数提升
(function() {
  var a = 20;
  function a() {};
  console.log(a);
  
  // 函数提升的优先级更高。所以这段代码是这样的
  function a() {}
  var a;
  a = 20;
  console.log(a);	// 20
})();

```
```
(function() {
  var a = 20;
  var b = c = a;
  console.log(c);
})();

alert(c);

// 上述代码相当于
(function() {
  var a = 20;
  var b = a;
  c = a;
})();

console.log(c);	// 20
```

```
function test() {
  this.a = 20;
}
this.prototype.a = 30;
var q = new test;
alert(q.a)
// 构造函数内的优先级要比原型链内的优先级要高。
```

```
var user = {
  age: 20,
  init: function() {
    console.log(this.age);
  }
};

var data = { age: 40 };
// bind 以后返回的是一个新函数
var s = user.init.bind(data);
s(); // 40
user.init();	// 20
``` 
es5知识点

1. 立即执行函数
2. 闭包 -> 拿到你不该拿到的东西 -> 内部函数可以访问外部函数的变量，把函数返回出去
-> 闭包可以保护内部变量，闭包造成内存泄露 == null（等着垃圾回收去收集）
3. 原型链
1）构造函数例的属性的优先级比原型链的要高。
2)在实现面向对象编程的时候，JS没有类的概念，要用函数替代。
3）constructor实际上对应的就是那个函数本身
prototype  按引用传递的  可以用Object.create创建原型链的副本。
4. 数值 字符串  布尔值  按值传递，
按引用传递：对象，数组
5. 改变this的方法  call  apply  bind
6. 函数提升与变量提升，函数提升的级别要比变量高；
7. js异步循环机制  先执行执行同步队列里的后执行异步队列里的
什么在异步队列里->settimeout，事件等
8. 通过立即执行函数与闭包实现模块化编程



