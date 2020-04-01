// var a = 20;

// (function(){
//     console.log(a)
//     var a = 30
// })()
// // 变量提升
// // this指向
// //谁调用直谁
// console.log(this)
// this.a = 20;
// var test = {
//     a: 40,
//     // test:function(){
//     //   console.log(this.a)
//     // },
//     init: () => {
//         // console.log(this)
//         console.log(this.a); //window
//         function go() {
//             // console.log(this)
//             this.a = 60; //go
//             console.log(this.a)
//         }
//         go.prototype.a = 50;
//         return go;
//     }
// }

// var p = test.init();
// p();
// // console.log(new(test.init()))
// new(test.init())()
// (test.init())()   //  闭包 自执行函数

// 什么叫闭包？
// 拿到你本来拿不到的东西
// 函数套函数，内部能够取到外部变量，外部取不到内部变量
// 写闭包会造成内存泄漏(解决内存泄漏，把当前函数变成null)
// 因为return了，，，声明的变量永驻内存里比如 n+=1;
// 例:

// function a(){
//     var N = 0;
//     return function c(){
//             N+=1
//             console.log(N)
//     }
// }
// var result = a();
// result()
// result()
// result()

// function a() {
//     var c;
//     return function b() {
//         console.log(c)
//     }
// }


// 原型链

// 什么叫面向对象
// var Car = function(==[ , ,m{

// }
// var s = new Car();
// console.log(s)
// s的constructor == Car 构造函数和初始化的类是一个东西

// class f{
//     constructor{
//         this.a = 20
//     }
// }
// 1.按引用传递
// function v(color){
//    this.color = color;
//    this.sail = function(){
//      console.log(this.color)
//    }
// }
// var d = new v('red')
// console.log(d. ())
// (function(){
// var a = 20;
// function a(){}
// console.log(a)
// })()
// (function(){
//     var a  =10;
//     var b = c =a  //=>var b, c = a;
//     console.log(c)
// })()
// function test(){
//     console.log(this)
//     this.a = 20;  //this -> test
// }
// test.prototype.a = 30;   
// var q = new test;  
// console.log(q.a)

// var user = {
//     age:10,
//     init:function(){
//         console.log(this.age)
//     }
// }
// var data = {age:30}
// var s = user.init.bind(data)
// s()

// es5知识点
// 1.立即执行函数
// 2.闭包 -> 拿到你不该拿到的东西 -> 内部函数可以访问外部函数的变量，把函数返回出去
// -》 闭包可以保护内部变量，闭包造成内存泄露 == null（等着垃圾回收去收集）
// 3. 原型链
// 1）构造函数例的属性的优先级比原型链的要高。
// 2)在实现面向对象编程的时候，JS没有类的概念，要用函数替代。
// 3）constructor实际上对应的就是那个函数本身
// prototype  按引用传递的  可以用Object.create创建原型链的副本。
// 4数值 字符串  布尔值  按值传递，
// 按引用传递：对象，数组
// 5.改变this的方法  call  apply  bind
// 6.函数提升与变量提升，函数提升的级别要比变量高；
// 7.js异步循环机制  先执行执行同步队列里的后执行异步队列里的
// 什么在异步队列里->settimeout，事件等
// 8。通过立即执行函数与闭包实现模块化编程
// a()
// function a(){}
// var a;
// console.log(a);
// a = 20;
// (function (){
//     var a = 20;
//     var b =c =a ;
// })()
// console.log(c)//20

// var test = function(){
//     this.a = 20
// }
// console.log(test.a)

// test.prototype.a = 30
// var q = new test()
// console.log(q.a)



//
// function test(m){
// m.v = 20;
// //重写了就不行了   var m = {v:20}
// }
// var m ={age:30};
// test(m)
// console.log(m)
// console.log(m.v)  

// js异步循环机制  先执行执行同步队列里的后执行异步队列里的
// 什么在异步队列里->settimeout，事件等


// 通过立即执行函数与闭包实现模块化编程

// var module = (function () {
//     var N = 5;

//     function print() {
//         console.log(N)
//     }

//     function add(x) {
//         var q = x + N
//         console.log(q)
//     }
//     return {
//         des: "这里是个模块",
//         add: add
//     }
// })()
//  调用module.add(3)
// 静态的模块化
// var  index = {
//     data:{
//         age:10,
//     },
//     init:function(){
//         console.log(2)
//     }
// }
// console.log(index.init())

// var num = 10;
// var obj = {
//     num: 8,
//     inner: {
//         num: 6,
//         print: function () {
//             console.log(this.num);
//         }
//     }
// }
// num = 888;
// obj.inner.print(); // 6
// var fn = obj.inner.print;
// fn(); //888
// (obj.inner.print)(); //6
// (obj.inner.print = obj.inner.print)(); //888 这个点没有太理解，虽然答对了
// 函数提升与变量提升
// console.log(l);   //undefied
// var l = 0;
// console.log(s); //undefined
// var s =function(){};
// console.log(d) //[function: d]
// function d(){}
// (function(){
//     var a= 1;
//     function test(){
//         console.log(a)  //undefined  函数体内的声明的变量都会提升到函数顶部只声明不赋值，发生变量重新声明，局部变量覆盖全局变量
//         var a =2;
//         console.log(a)
//     }
//     test()
// })()


// 每日一题
// function fn(num){
// console.log(this)
// console.log(this.length)
// }
// var a = {
//     length:5,
//     method:function(){
//         fn('井村雅代')   //指向window
//         arguments[0]()   //指向arguments对象
//     }
// }
// a.method(fn,1)   //
// var c = 1 && 0 || 2;
// console.log(c)
// var s = [1,2,3,4,5].map(item=>{return item!=1 && item || false})
// console.log(s)
// var d = [1,2,3,4,5].filter(item=>{return item >2})
// console.log(d)
// var r = 'abcde'.slice(-2) === 'abcde'.substring(-2)
// console.log('abcde'.slice(-2))

// var v1 =1;
// var v2 = (function(){
//     var v1
//     return v1 = 2
// })()
// var v3 = +!v2
// console.log(v1,v2,v3)

// for(let i = 0;i<5;i++){
//     setTimeout(_=>{
//         console.log(i)
//     },50)
// }
// //0 1 2 3 4


// for(var i = 0;i<5;i++){
//     setTimeout(_=>{
//         console.log(i)
//     },50)
// }
// //5 5 5 5 5

// for(var i = 0;i<5;i++){
//     (function(){
//         console.log(i)
//     })()
// }
// // 0 1 2 3 4

// for(let i = 0;i<5;i++){
//         console.log(i)
// }
// console.log(i)
// //0 1 2 3 4 5

// for(var i = 0;i<5;i++){
//     console.log(i)
// }
// console.log(i)
// //0 1 2 3 4 5

// function Foo(){
//     getName = function(){
//         console.log(1)
//     }
//     return this
// }
// Foo.getName = function(){
//     console.log(2)
// }
// Foo.prototype.getName = function(){
//     console.log(3)
// }
// var getName =function(){
//     console.log(4)
// }
// function getName(){
//     console.log(5)
// }
// Foo.getName();//2
// getName();//4
// Foo().getName();//1
// getName();//1


// var num = 60;
// function numFn(){
//     (function(){
//         setTimeout(function(){
//             num--;
//             console.log(num)
//             if(num>0){
//                 numFn()
//             }
//         },1000)
//     })()
// }
// numFn()
// function add() {
//     // 第一次执行时，定义一个数组专门用来存储所有的参数
//     var _args = [].slice.call(arguments);

//     // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//     var adder = function () {
//         var _adder = function() {
//             [].push.apply(_args, [].slice.call(arguments));
//             return _adder;
//         };

//         // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//         _adder.toString = function () {
//             return _args.reduce(function (a, b) {
//                 return a + b;
//             });
//         }

//         return _adder;
//     }
//     return adder.apply(null, [].slice.call(arguments));
// }

// console.log(add(1)(2))
// console.log(add(1,2,3)(10))
// console.log(add(1)(2)(3)(4)(5))