// function a(){
//     return arguments
// }
// console.log(a(1,2,3,4,5,6))
// console.log(a(1,2,3,4,5,6)[0])
// console.log([...a(1,2,3,4,5,6)])

// function b(name){
//     this.name = name
//     return this.name
// }

// a.prototype.s=function(){
//     console.log(this.name)
// }
// var p1 = new b('we')
// var p2 = new b('eqwdsa')

// console.log(p1)
// console.log(p2.s)

// var obj = {
//     user:'zhangsan.zx',
//     getName:function(){
//         return user;
//     }
// }
// var getNameFn = obj.getName;
// console.log(getNameFn)
// console.log(getNameFn());  //user is not defined
// console.log(obj.getName) //user is not defined


// function fun(n,o){
//     console.log(o);
//     return {
//         fun:function(m){
//             return fun(m,n)
//         }
//     }
// }
// var a = fun(0)   //undefined    fun函数
// a.fun(1)  //0  fun函数
// a.fun(2)  //0
// var b = fun(0).fun(1).fun(2).fun(3)
// var c = fun(0).fun(1)
// c.fun(2)
// c.fun(3)


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//         console.log(name,age)
//     }
//     getname(name){
//         console.log(this.name)
//         console.log(name)
//     }
// }
// function test(){
//     this.name = 'lvjian'
// }
// test.prototype.eat= function(){
//     console.log(this.name)
// }

// var penson1 = new Person('lvjian','12')
// // penson1.getname('zhangsan')
// var test1= new test()
// test1.prototype = Person1.prototype
// console.log(test1)
// test1.eat()
// console.log(test1)


// function a (){
//     d = function(){
//         console.log(1)
//     }
//     return this
// }
// a.d =function(){
//     console.log(2)
// }
// a.prototype.d =function(){
//     console.log(3)
// }
// var d =function(){
//     console.log(4)
// }
// function d(){
//     console.log(4)
// }
// a.d()
var path = require('path')

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));
