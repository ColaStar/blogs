# ES6在企业中的应用
------------------------------------------------------------------------------------------------
#### 1.1 js的发展历史

<a data-fancybox title="js的发展历史" href="https://raw.githubusercontent.com/ColaStar/static/master/images/01-js的发展历史.png">![js的发展历史](https://raw.githubusercontent.com/ColaStar/static/master/images/01-js的发展历史.png)</a>

#### 1.2 TC39
推进 JavaScript 发展的委员会

- 会员都是公司
- 定期召开会议
- 会议由会员公司的代表与特邀专家出席
TC39 实行的是协商一致的原则：通过一项决议必须得到每一位会员（公司代表）的赞成

<a data-fancybox title="02-TC39历史" href="https://raw.githubusercontent.com/ColaStar/static/master/images/02-TC39历史.png">![02-TC39历史](https://raw.githubusercontent.com/ColaStar/static/master/images/02-TC39历史.png)</a>

### 2. 新特性

#### 2.1 模块化
- AMD -> require.js
- CMD -> sea.js
- commonjs
- UMD -> 兼容上面东西

ES6 来了，这个过时了。
##### 2.1.1 模块特色

- 静态模块（模块变量不能是变量）
- 声明式语法
```
// 模块语法

import { $ } from 'jquery.js';	// es6

var $ = require('jquery.js')[$];	// amd

export { $ };		// es6

exports.$ = $;		// amd
```

##### 2.1.2 不一样的理念

- 按需引入 vs 全局引入
- 多点暴露 vs 全局暴露

```
// 模块思想
import { each } from 'underscore'; // es6 按需引入

var _ = require('underscore.js'); // amd 全局引入

export { each };	// es6 多点暴露

module.exports = _;	// amd 全局暴露
```

##### 2.1.3 转码
浏览器目前还不支持 ES6 模块
- SystemJS
- transpiler(转换器)，如 ES6 module transpiler, - babel, Traceur
- Webpack

#### 2.1.4 为何 ES Module 姗姗来迟

### 2.2 字符串
```
// 字符串
`weisuoke ${abc}`;	// es6
'weisuoke' + abc;

`weisuoke
.
com`; // es6

'weisuoke' +
'.' + 
'com'; // es5

多行字符串
字符串插值（不能代替前端模板）
Unicode 的支持（node.js） 
```
### 2.3 解构

- 数组解构
```
var arr = [1, 2, 3, 4];
var [first, second] = arr;	// es6

var first = arr[0];	// es5
var second = arr[1];	// es5
```
- 对象解构
```
var obj = {a: 1, b: 2};
var {a, b} = obj;	// es6

var a = obj.a;	// es5
var b = obj.b;	// es5
```
- 字符串解构
- 数值和布尔值的解构赋值
- 函数参数的解构赋值
```
function add([x, y]) {
  return x + y;
}

add([1, 2]);	// 3
```

### 2.4 对象
```
var a = 1;
var obj = {
  a,
  [a + 1]: 3,
  add() {}
};  // es6

obj[a+1] = 3;		// es5
```
### 2.5 数组 - Spread

```
var arr1 = [1, 2, 3];
var arr2 = [...arr1];	// es6 浅拷贝

var arr2 = [].concat(arr1);	// es5
var arr2 = arr1.slice(0);

min(...arr2);
```
### 2.6 函数
- 箭头函数
```
[1, 2, 3].map(x => x + 1);	// es6

[1, 2, 3].map(function(x) {
  return x + 1;
}.bind(this));	// es5
```
- rest参数
```
// rest 参数
function aaa(...args) {
  return args.join(',');
}  // es6

function aaa() {
  return [].slice.call(arguments, 0).join(',');
} // es5

function bbb(x, y, ...args) {
  
}

bbb(1, 2, ...[3, 4, 5]);
```
- 默认值
```
function b(a=1){
    console.log(a)
}
b() //1
```
### 2.7 Class

- new构造函数
- 公有共享属性/方法
- 公有静态属性/方法
- 公有特权方法（访问私有成员）
- 公有成员
- 私有静态成员/方法
- 私有成员/方法
```
class Child extends Parent {
  constructor() {
    super();
    this.value = 1;
  }
  get() {
    return this.value;
  }
}
```
```
function inherit(C, P) {
  var F = function() {};
  F.prototype = P.prototype;
  C.prototype = new F();	// 临时构造函数
  
  C.prototype.constructor = C;	// 修复constructor
  C.super = P; // 存储超类
}

function Student(age, num) {
  Student.super.call(this. age);
  this.num = num;
}

inherit(Student, People);	// 继承父构造函数
```

### 2.8 Promise

<a data-fancybox title="promises" href="https://raw.githubusercontent.com/ColaStar/static/master/images/promises.png">![promises](https://raw.githubusercontent.com/ColaStar/static/master/images/promises.png)</a>

思想的转变
es6promise
```
function async() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => { resolve(123); }, 1000)
  })
}

await().then(function() {
  // xxx
});
```
<a data-fancybox title="promises" href="https://raw.githubusercontent.com/ColaStar/static/master/images/04-Promise.png">![promises](https://raw.githubusercontent.com/ColaStar/static/master/images/04-Promise.png)</a>
<a data-fancybox title="promises" href="https://raw.githubusercontent.com/ColaStar/static/master/images/05-promise.png">![promises](https://raw.githubusercontent.com/ColaStar/static/master/images/05-promise.png)</a>
### 3. 其他新特性
```
generators
unicode
module loaders
map + set + weakmap + weakset
proxies
symbols
subclassable built-ins
math + number + string + array + object APIs
binary and octal literals
reflect api
tail calls
```
### 4. 无处不在的编译器
- masm
- gcc
- javac
- coffeescript/typescript
- less/sass
### 4.1 转换器
> babel    原名：6to5  很优秀的编译器
- 如何使用
```
在线编译器
grunt、gulp、webpack
fis
```
- 兼容老代码

```
不能编译 .js  
.es  
.es.js    
xxx.js  
```
> Traceur(Google)
### 5.fis
#### 4.1 fis3 base
基于fis3的纯前端解决方案，拿来即用的fis3脚手架
#### 5.5 未来 - 浏览器

- chrome firefox ie safari
- 每6周一个版本，（ie 4周）
- 无限演进
我们需要怎么做
- 我们指前端 FE
- babel
- 按需定制
- 按浏览器原生支持后下掉插件
#### 6 为什么要学习 ES6
- 迟早要学（区别ts cs）
- 向标准靠拢（趋势）
- 可维护性（高）
- 学习成本（小）
- 编程激情（黑客）
- 我不要加班（效率）
- 面试中的加分项
