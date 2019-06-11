ECMAScript6简介
---

> ES6转ES5编码器：babel与谷歌的Traceur

- babel
```
1.安装babel
2.创建配置文件.babelrc
3.安装插件
```
- Traceur
```
不推荐使用
方式一、直接引用三个js
方式二、安装包traceur
```


let和const命令
---
- 1.let 声明变量可以更改，const声明常量不可以修改（对于对象来说可以更改值，不能修改对象的引用地址）
```
let a = 1;
a =2;

const a = 2;
a = 3  //报错
const b = {a:1}
b.a=2  //   b = {a:2}
b = {a:2}  //报错 
```
- 2.块级作用域

```
var arr = [];
for(var i = 0;i<arr.length;i++){
    arr.push(function(){console.log(i)})
}
arr.forEach(function(fn){
    fn()
})//输出10次10

//es6
var arr = [];
for(let i = 0;i<arr.length;i++){
    arr.push(function(){console.log(i)})
}
arr.forEach(fn=>fn())//输出0-9
```

- 3.暂时性死区
解释：如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错（比如赋值，typeof等)
```
var tmp = 123
if(true){
    tmp ='dad'  //报错
    let tmp
}
```
- 4.不存在变量提升；
- 5.不允许重复声明


模板字符串
---

字符串的格式化，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量（将变量名写入${}中，{}中可以放入任意javascript的表达式）。

展开运算符...
---

**内部使用for of遍历**  

- 1.组装对象或数组
```
//数组
const a = [1,2,3,4]
const b = [...a,5,6]  //[1,2,3,4,,5,6]

//对象
const obj = {a:1}
const obj1 = {...obj,b:2}  //{a:1,b:2} 

```
- 2.获取数组或者对象除了前几项或者除了某几项的其他项。

```
const a = [1,2,3,4];
[first,second,...s] = a
console.log(s)   //[3,4]

const b = {a:1,b:2}
const {a,...d} = b
console.log(d)//{b:2} 

```
- 3.对于 Object 而言，还可以用于组合成新的 Object 。(ES2017 stage-2 proposal) 当然如果有重复的属性名，右边覆盖左边。

```
const a = {a:1,b:2}
const b = {b:5,c:6}
const c = {...a,...b}
console.log(c)   //{a:1,b:5,c:6}
 ```

解构
---
 **在ES6之前我们就是这样获取对象信息的，一个一个获取。现在，解构能让我们从对象或者数组里取出数据存为变量**
 ```
 //对象
 const a = {c:'sa',b:2};
 const {c,b} = a;
 console.log(`${c}----${b}`)//sa----2

 //数组
const a = [1,2,3,4,5,6];
const [s,d,f,g,h,...j] = a;
console.log(s,d,f,g,h,j)//1 2 3 4 5 [6]

//字符串的解构赋值
const [a,b,c] = '123'
console.log(a,b,c)  //1 2 3
const {length:len} = '123a'
console.log(len)   //4

//函数参数的解构赋值
function add([x,y]){
    return x+y
}
add([1,2]) //3

 ```

 例题：
 ```
 var jsonParse = require('body-parser').jsonParse
 var body = request.body;
 var username = body.username;
 var password = body.password

 var {body,body:{username,password}} = request
 e5->e6
 import { jsonParse } from 'body-parser'

 ```

对象
---

```
var obj = {};
Object.assgin(obj)//复制一个对象

//动态设置对象的key值
var i = 'arr'
obj = {
   [i+1]:2
}//obj:{arr1:2}

NaN == NaN
Object.is(NaN ,NaN)   //判断俩个值是不是相同的值
Obiect.create()   //创建对象
Object.getSrotoytpeOf() //获取原型
Object.setSrotoytpeOf() //设置原型(对象，原型)
可以直接设置__proto__
对象重写父类的方法  用super重新执行,```super```，指向当前对象的原型对象。
const drink = {
    getDrink(){
        return '啤酒';
    }
}
let sunday = {
    __proto__: drink,
    getDink(){
        return super.getDrink()+'daskd'
    }
}
```

- 属性的赋值器（setter）和取值器（getter）

```
const cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}
cart.wheels   //4
```


函数
---
- name属性
```
var fn = function (){}
console.log(fn.name)   //fn
```

- 箭头函数

```
注意：
1.改变this指向所属对象的顶级作用域，而不是使用的函数;

this.lives = 6
const cat = {
   lives: 9,
   jumps: () => {
     this.lives--;
     console.log(this.lives)
   }
 }

cat.jumps()

2.不可以当做构造函数，也就是说不可以使用new命令，否则抛出错误；
3.不可以使用arguments对象，该参数不存在，可以使用rest参数代替（...扩展运算符）
4.不可以使用yield命令，因此箭头函数不能用作Generator函数
5.不能使用call、apply、bind改变this指向

(()=>{
    console.log('1')
})()

[1,2,3,4,5,6,7,8,9,10].map(parseInt)   //[1,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,10]

```

- 双冒号运算符::

```
函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。用于代替call,apply,bind
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return obj::hasOwnProperty(key);
}
var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;

let log = ::console.log;
// 等同于
var log = console.log.bind(console);
```
- 给函数默认参数
```
function test(a=1,{option=true}={}){
   console.log(a,option)
}
test()
```
- 用...扩展运算符代替arguments
```
function test(...result){
    console.log(result)
}
```
Iterator
---
**是个遍历器、是一个数据结构、保证每次执行都有一个next()**
```
let a = function*(){
    yield '1'
    yield '2'
}
const b = a()
b.next()  // 1
b.next()  // 2
```

- for of遍历数组的值
遍历对象的时候可以使用Object.keys
```
const arr = [1,2,3]
for(let i of arr){
    console.log(i)//1 2 3
}
for in遍历的是索引
```
Generator
---

Class
---
- 1.Class可以看做是构造函数的另一种写法  
```
class Point {

}

typeof Point //function类的数据类型是函数  
Point ===Point.prototype.constructor  //true  
prototype对象上的constructor属性直接指向类的本身  
```
- 2.类的所有方法都定义在构造函数的prototype上  
在类的实例上调用方法其实就是调用原型上的方法  
- 3.类内部的方法都是不可以枚举的不能使用es6的keys枚举，可以使用es5的getOwnPropertyNames()枚举  
- 4.类必须使用new调用，生成类的实例也需要new  
- 5.constructor方法  
**constructor方法默认返回实例对象（即this），完全可以指定返回另一个对象**
```
class a{
    constructor(){
        return Object.create(null)
    }
}
new Foo() instanceof Foo  //false
```
- 6.类的所有实例共享一个原型,所以可以通过实例的__proto__属性为类添加方法（但是不推荐，因为这会改变类的原始定义，影响到所有实例）

```
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__
//true
```
- 7.取值函数与存值函数
与ES5一样，在类的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
```
class Point{
    constructor(food){
        this.food = food
    }
    get eat(){
        return this.food
    }
    set eat(value){
        this.food = value
    }
}
const p1 = new Point('馒头')
console.log(p1.eat) //馒头
p1.eat = '花卷'
console.log(p1.eat)// 花卷

```

- 8.属性表达式
类的属性名，可以采用表达式
```
let a = 'eat'

class index{
    constrcutor(){}
    [a](){
        //...
    }
}
```

- 9.Class表达式
与函数一样，类也可以使用表达式的形式定义
```
const MyClass = class Me{
    getClassName(){
        return Me.name
    }
}
//注意类的名字Me只能在函数内部使用，在函数外部只能使用Myclass引用

const MyClass = new class {
    constrcutor(name){
        this.name = name
    }
    getClassName(){
        console.log(name)
    }
}('张三')
```
- 10。静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
1）.静态方法中的this指向的不是实例对象而是指向的类；
2）父类的静态方法可以被子类继承
3）静态方法也可以从super对象调用。

```
class Foo {
  static classMethod(){return 'hello'}
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function


class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

Bar.classMethod() // "hello, too"
```

- 11.静态属性

静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

```
class Foo {
     static myStaticProp = 42;
     constructor() {
         console.log(MyClass.myStaticProp); // 42
     }
}

Foo.prop = 1;
Foo.prop // 1
```
- 12.私有方法和私有属性

私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。 


```
将私有方法移出模块，因为模块内部的所有方法都是对外可见的。

class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz) {
  return this.snaf = baz;
}


利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值

const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};

私有属性的提案方法是在属性或方法名前加#表示
```

- 13.new.target属性

1).确保构造函数必须使用new命令调用
2).子类继承父类时，new.target会返回子类
```
利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
```
3).在函数外部，使用new.target会报错

14.注意：
1）类不存在变量提升
2）在类内部默认的就是严格模式.
3）name属性   
class a{} 
a.name   //a
4）Generator方法
在某个方法前边之前加上*就表示这个方法是一个Generator函数
5）this指向
this默认指向类的实例  如果想要把类中的方法单独提出来使用，需要this指向到window，可以使用bind，箭头函数等,可以使用 

Class继承
---
- 1.简介
1).ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。  

2).如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。  
```
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```
3)在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。  
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
4).子类的实例对象同时也是父类的实例对象  
5).父类的静态方法，也会被子类继承  


- 2.Object.getPrototypeof()
Object.getPrototypeOf方法可以用来从子类上获取父类。
```
Object.getPrototypeOf(ManPoint) === Point
// true
可以使用此方法判断一个类是否继承了另一个类
```

- 3.super关键字
1).第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。  
super作为函数只能在子类的构造函数中使用，在其他地方使用会报错。  
super虽然代表父类的构造函数，但是返回的是子类的实例，即super内部的this指向的子类的实例，相当于父类.prototype.constructor.call(this)  

```
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B

```
2).super作为对象时在普通方法中指向父类的原型对象，在静态方法中指向父类。由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。如果定义在父类的原型上就可以取得到。  
```
class A {
  constructor() {
    this.p = 2;
  }
}

class B extends A {
  get m() {
    return super.p;
  }
}

let b = new B();
b.m // undefined



class A {}
A.prototype.x = 2;

class B extends A {
  constructor() {
    super();
    console.log(super.x) // 2
  }
}

let b = new B();
```
在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。  

```
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined            A.prototype.x
    console.log(this.x); // 3
  }
}

let b = new B();
```
如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。

```
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```
在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例。

```
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

B.x = 3;
B.m() // 3
```
使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。  

由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。  



- 4.类的prototype属性和__proto__属性

1）子类的__proto__属性，表示构造函数的继承，总是指向父类。   

2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。  

```
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();

Object.setPrototypeOf方法的实现
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。



- 5.原生构造函数的继承

ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。下面是一个继承Array的例子。  
```
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0] // undefined

所以，extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数

```

```
class Person{
   constructor(age){
this.age = age
   }
   test(){
       console.log(`年龄是${this.age}`)
   }
}
class Man extends Person{
    constructor(age){
        super(age)
        this.arr = []
    }
    set menu(data){
this.arr.push(data)
    }
    get menu(){
return this.arr
    }
    tell(){
        super.tell();
        console.log('xiaolv')
    }
}
const xiaolv = new Person(30)
//console.log(xiaolv.age) //30
//console.log(xiaolv.tell()) //30
xiaolv.menu = 44;
console.log(xiaolv.menu)
```

    

Set
---

**简介ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。**  
**Set本身是一个构造函数，用来生成 Set 数据结构**  

- 创建set数据结构
**注意**
1)创建set函数可以接受数组（或者其他可迭代的数据结构即类数组）作为参数
```
//数组去重
[...new Set(array)]
//字符串去重
[...new set('abcabc')].join('')   //abc
```


- Set实例的属性和方法
**属性**
1）、Set.prototype.constructor：构造函数，默认就是Set函数。  
2）、Set.prototype.size：返回Set实例的成员总数。  

**操作方法（用于操作数据）**
1）、add(value)：添加某个值，返回 Set 结构本身。  
2）、delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。  
3）、has(value)：返回一个布尔值，表示该值是否为Set的成员。  
4）、clear()：清除所有成员，没有返回值。    
5）、Array.from与...可以把Set结构转换为数组  

**遍历方法（用于遍历成员）**
1）、keys()：返回键名的遍历器  
2）、values()：返回键值的遍历器  
3）、entries()：返回键值对的遍历器  
4）、forEach()：使用回调函数遍历每个成员  当前元素的key、value都是当前元素的值
可以直接使用for of 遍历keys()、value()、new set返回值

**注意**

1) set结构不会加入重复的成员
2) 向数组加入值时不会发生类型转换，多次加入NaN也只会加入一个NaN

Map
---
**ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。**

- Map实例的属性和方法

1)size属性返回 Map 结构的成员总数。  
2)set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。  
3)get方法读取key对应的键值，如果找不到key，返回undefined。  
4)has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。  
5)delete方法删除某个键，返回true。如果删除失败，返回false。    
6)clear方法清除所有成员，没有返回值。  
**遍历方法**
1)keys()：返回键名的遍历器。  key  
2)values()：返回键值的遍历器。   value  
3)entries()：返回所有成员的遍历器。   key：value  
4)forEach()：遍历 Map 的所有成员   
5)直接遍历map对象，相当于遍历map.entries()  
6)结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）



**注意**  
1)如果对同一个键多次赋值，后面的值将覆盖前面的值  
2)如果读取一个未知的键，则返回undefined  
3)只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。即===，同样的值的两个实例，在 Map 结构中被视为两个键。  
4)Map的键是与内存地址绑定的  
5)set方法返回的是当前的Map对象，因此可以采用链式写法,  
6)Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。  
```
[...map.keys()]
// [1, 2, 3]
```
7)数组为Map  
将数组传入 Map 构造函数，就可以转为Map  
8)Map转换为对象  
如果所有 Map 的键都是字符串，它可以无损地转为对象  
9)对象转换为Map  
```
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}
```
10)Map转换为JSON   
```
方法一、先转换为对象在使用JSON.stringify()
```
11)JSON转换为Map  
使用JSON.parse把JSON转换为对象，再转换为Map


Module
---
**export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。**
- export 命令
  1)export命令除了可以输出变量也可以输出函数或类
  
  2)通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名
  使用as关键字，重命名了函数的对外接口俩次。重命名后，v2可以用不同的名字输出两次
```
// 写法一
  export var m = 1;

// 写法二
  var m = 1;
  export {m};

// 写法三
  var n = 1;
  export {n as m};
  ```
  3) export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
  4)export命令可以出现在模块的任何位置，只要处于模块顶层就可以。 不能放到块级作用域和条件代码块，函数代码块里

- import 命令
**使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。**
1)import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
2)如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
3)import命令输入的变量都是只读的，因为它的本质是输入接口,这个变量跟对象一样，可以更改对象内的属性，其他模块也可以读到改写后的值，但是报错后很难查错，因此不要轻易更改
4)import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件。
5)import命令具有提升效果，会提升到整个模块的头部，首先执行,所以可以在import的执行前调用
6)因为import是静态执行所以不可以使用变量和表达式，或if结构
7)多次重复执行同一个import语句只执行一次
```
surname();
import { lastName as surname } from './profile.js';
```
- 整体模块加载
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

但是是不可以更改的不管是变量还是属性
```
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}


import * as circle from './circle';
```
- export default

1)使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。如果使用export default 可以用任意名称指向export-default.js输出的方法，这时在import后不需要使用大括号
2)export default 可以用在匿名函数和命名函数或{}，导出的文件名在模块外部是无效的加载时
3)一个模块export default命令只能使用一次
4)export default它后面不能跟变量声明语句。
```
// 错误
export default var a = 1;
```
5)如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样
```
import _, { each, forEach } from 'lodash';
```

- export 与import的复合写法
```
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

export * from 'my_module'
//可以理解为
export { default } from 'foo';
```
- 模块的继承
```
// circleplus.js

export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}

// main.js

import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));
```
- import()
动态加载  
按需加载  
```
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});
```
条件加载  
动态的模块路径  

- 注意 
1)ES6的模块化自动采用严格模式，不管你有没有在头部加没加"use strict";
2)ES6的模块加载可以叫做“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，而不是直接把整个模块的所有方法都加载回来。require加载模块时是把整个模块都会加载回来。

Module 的加载实现
---
- 浏览器加载

```
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>

<script>标签打开defer或async属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。
```
defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
- 加载规则

1)浏览器加载 ES6 模块，也使用 < script >标签，但是要加入type="module"属性。  
2)浏览器对于带有type="module"的< script >，都是异步加载,不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了< script >标签的defer属性。  
3)代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。  
4)模块脚本自动采用严格模式，不管有没有声明use strict。  
5)模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。   
6)模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。  
7)同一个模块如果加载多次，将只执行一次   

- ES6模块与CommonJS的差异
> CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS加载模块时调用模块内部的变量会把模块内部的变量缓存下来，ES6模块不会，
ES6模块加载时输入的变量是只读的的
ES6模块加载中，不同的脚本加载这个模块，得到的都是同一个实例。

> CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。  
而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

<!-- - ES6 模块加载 CommonJS 模块  -->

Promise
---

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

> Promise对象的特点：
- 对象的状态不受外界影响。promise对象代表异步操作，有三种状态：pending（进行中），fulfilled(已成功)，rejected（已失败）。
只有异步操作的结果，可以决定当前是哪种状态，任何其他操作都无法改变这个状态。
- 一旦状态改变，就不会再变，（从pending变为fulfilled和从pending变为rejected）任何时候都可以得到这个结果。
- 将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
- 无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
- Promise 新建后就会立即执行，执行顺序：首先输出的是Promise----->将在当前脚本所有同步任务执行完才会执行，----->然后，then方法指定的回调函数。
-  resolved 的 Promise 是在本轮事件循环的末尾执行（注意return的妙用，加return后resolved后的代码就不会执行了）

> Promise.prototype.then()

- Promise.then()方法可以传递俩个值一个是成功回调一个是失败回调(可选)
- 返回一个新的Promise实例所以可以采用链式调用

> Promise.prototype.catch()

- 用于指定发生错误时的回调函数,另外then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。
- 如果 Promise 状态已经变成resolved，再抛出错误是无效的
- Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。
```
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```
- 一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
- 第二个catch方法用来捕获前一个catch方法抛出的错误

> Promise.prototype.finally()

```
promise
.finally(() => {
  // 语句
});

// 等同于
promise
.then(
  result => {
    // 语句
    return result;
  },
  error => {
    // 语句
    throw error;
  }
);
```
- finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的
- 不接收任何参数
```
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```
> Promise.all()

- 用于将多个 Promise 实例，包装成一个新的 Promise 实例
```
const p = Promise.all([p1, p2, p3]);

p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
```

```
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // posts --> 结果的数组
}).catch(function(reason){
  // ...  如果每个promise没有自己的catch方法，就会调用Promise.all()的catch方法。
});
```
- 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
> Promise.race()
**Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例**
- 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

> Promise.resolve()

**Promise.resolve方法将现有对象转为 Promise 对象，**
- （1）参数是一个 Promise 实例

如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

- （2）参数是一个thenable对象

thenable对象指的是具有then方法的对象，比如下面这个对象。
```
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
```
Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
```
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});
```
- （3）参数不是具有then方法的对象，或根本就不是对象
如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
```
const p = Promise.resolve('Hello');

p.then(function (s){
  console.log(s)
});
// Hello
```
- （4）不带有任何参数
立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
```
setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');

// one
// two
// three
```

> Promise.reject()
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
```
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```
注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致

> Promise.try()

不管函数f是同步函数还是异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。
```
Promise.resolve().then(f)
```

  