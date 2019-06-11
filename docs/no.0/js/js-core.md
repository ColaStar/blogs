es5简介
----

#### 对象的一些方法
**Object.assign()**    

> 复制对象
```
const obj = {a:1};
const copy = Object.assign({},obj)
console.log(copy)   //{a:1}
```
> 深拷贝问题
针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。

```
var a1 = {a:0,b:{c:0}};
var a2 = Object.assign({},a1) //{a:0,b:{c:0}}

a1.a = 1
//a1 => {a:1,b:{c:0}};
//a2 => {a:0,b:{c:0}};
a2.a = 2
//a1 => {a:1,b:{c:0}};
//a2 => {a:2,b:{c:0}};
a1.b.c = 10
//a1 => {a:1,b:{c:10}};
//a2 => {a:1,b:{c:10}};
a2.b.c = 20;
//a1 => {a:1,b:{c:20}};
//a2 => {a:1,b:{c:20}};
所以assign是浅拷贝，因为他拷贝的只有第一层的属性值，如果想要深拷贝需要换别的方法
var a2 = JSON.parse.(JSON.stringify(a1))
```
> 合并对象
合并后目标对象自身也会改变
如果具有相同属性，前边的属性会被后续参数中具有相同属性的其他对象覆盖。

> 拷贝 symbol 类型的属性
```
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```
> 继承属性和不可枚举属性是不能拷贝的
```
const obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```
**Object.create()**    
创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
```
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```
> 使用 Object.create 的 propertyObject参数
```
var o;

// 创建一个原型为null的空对象
o = Object.create(null);


o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { 
    writable:true,
    configurable:true,
    value: "hello" 
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});


function Constructor(){}
o = new Constructor();
// 上面的一句就相当于:
o = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码


// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"

delete o.p
//false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42, 
    writable: true,
    enumerable: true,
    configurable: true 
  } 
});
```
Object.defineProperty(obj, prop, descriptor)
---
**描述**：该方法允许精确添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，能够在属性枚举期间呈现出来（for...in 或 Object.keys 方法）， 这些属性的值可以被改变，也可以被删除。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。



#### 额外的数组
> **Array.isArray()**  

判断是不是数组
```
//语法
Array.isArray(obj)

Array.isArray([1, 2, 3]);  
// true
Array.isArray(new Array());
// 鲜为人知的事实：其实 true
Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 
// true
```
**注意**：当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.  
**原生方法写**：
```
function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
function isArray (obj) {
  return obj instanceof Array;
}
```
> Array.form

从一个类似数组或可迭代对象中创建一个新的数组实例

```
//语法
Array.from(arrayLike[, mapFn[, thisArg]])

返回值是一个新的数组实例
参数：
arratLike：想要转换为数组的伪数组（拥有一个 length 属性和若干索引属性的任意对象，如字符串等）和可迭代对象（可以获取对象中的元素,如 Map和 Set 等）
mapFn（可选）如果指定了这个参数，新数组的每个元素都会执行该回调函数。
thisArg（可选）执行回调函数是的this对象
```
用法：数组去重
```
const newarr = Array.from(new Set([1,2,3,5,6,7,8,2,1]))
```
在Array.from中使用箭头函数
```
Array.from('123456',x=>x+1)     ==>['11','21','31','41','51','61']
相当于
Array.from('123456').map(ele=>{
  return ele+1
})
```
> Array.of() 

创建一个具有可变数量参数的新数组实例，而不考虑参数的数量和类型
返回一个新的Array实例
```
//语法
Array.of(arr[0],arr[1],arr[2])
//与Array()的区别
Array(7)  //[,,,,,,]   7个空位元素数组不是undefined
Array(1,2,3)   //[1,2,3]

Array.of(7)   //[7]
Array.of(1,2,3)   //7
Array.of() 和 Array 构造函数之间的区别在于处理整数参
```
**原生js实现**
```
Array.prototype.of = function() {
    return Array.prototype.slice.call(arguments);
  };
```

> Array.concat()

合并俩个或多个数组，不会改变现有数组，会返回一个新的数组

```
//语法
const newarr = oldArr.concat(arr1,arr2,arr3,···)
```

**注意**：  
如果用concat方法创建一个数组,返回数组是一个浅拷贝
[].concat(arr)
**实例**
```
//链接n个数组
arr.concat(arr1,arr2,arr3···)

//链接值到数组中
arr.concat(1,[2,3,4])

//合并嵌套数组并保留引用浅拷贝
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]]
```
> Array.copyWithin()

浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。

```
//语法
arr.copyWithin(target[, start[, end]])

target
0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
start
0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
如果 start 被忽略，copyWithin 将会从0开始复制。
end
0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）。

返回值：改变后的数组
```

**例**
```
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(-2);
//[1,2,3,1,2]
numbers.copyWithin(0, 3);
//[4,5,3,4,5]
numbers.copyWithin(0, 3, 4);
//[4,2,3,4,5]
numbers.copyWithin(-2, -3, -1);
//[1,2,3,3,4]
[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}？？？
// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant: 
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

> Array.entries()

返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

```
//语法
arr.entries()
返回值：返回一个新的Array迭代器对象，Array Iterator对象的原型上有一个next()方法可用于遍历迭代器取得原数组的[key:value]

//next()方法
var arr = ["a", "b", "c"]; 
var iterator = arr.entries();
console.log(iterator.next());

/*{value: Array(2), done: false}
          done:false
          value:(2) [0, "a"]
           __proto__: Object
*/
// iterator.next()返回一个对象，对于有元素的数组，
// 是next{ value: Array(2), done: false }；
// next.done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false，
// 直到迭代器结束done才是true。
// next.value是一个["key":"value"]的数组，是返回的迭代器中的元素值。
```
**例**
```
const arr = [1,2,3]
arr.entries().next().value  //[0,1] 
arr.entries().next().value  //[1,2] 
arr.entries().next().value  //[2,3] 
```
**二维数组按行排序**
```
function sortArr(arr) {
    var goNext = true;
    var entries = arr.entries();
    while (goNext) {
        var result = entries.next();
        if (result.done !== true) {
            result.value[1].sort((a, b) => a - b);
            goNext = true;
        } else {
            goNext = false;
        }
    }
    return arr;
}

var arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
sortArr(arr);
```
> Array.prototype.fill()

```
//语法
arr.fill(value[, start[, end]])
value:用来填充数组的值
star:t起始索引默认为0
end:结束索引默认为this.length
```
**例**
```
[1, 2, 3].fill(4);               //[4,4,4]
[1, 2, 3].fill(4, 1);            //[1,4,4]
[1, 2, 3].fill(4, 1, 2);         //[1,4,3]
[1, 2, 3].fill(4, 1, 1);         // [1,2,3]
[1, 2, 3].fill(4, 3, 3);         // [1,2,3]
[1, 2, 3].fill(4, -3, -2);       // [4,2,3]
[1, 2, 3].fill(4, NaN, NaN);     // [1,2,3]
[1, 2, 3].fill(4, 3, 5);         // [1,2,3]
Array(3).fill(4);                // [4,4,4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
> Array.prototype.find() 

**ie浏览器不兼容**

返回数组中满足测试函数的第一个元素的值，否则返回undefined
```
//语法
arr.find(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值数组中第一个满足测试函数的元素的值，否则返回undefined
```
**例**
```
//用对象的属性查找数组里的对象
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));
//寻找数组中的质数
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```
> Array.prototype.findIndex

返回数组中中第一个满足测试函数的元素的索引值，否则返回-1

**ie浏览器不兼容**
```
//语法
arr.find(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值数组中第一个满足测试函数的元素的索引值，否则返回-1

```
**例**
```
//查找数组中首个质数元素的索引
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```
> Array.prototype.flat()

会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

//不兼容ie，Samsung Internet
```
//语法
var newArray = arr.flat(depth)
//参数
指定要提取嵌套数组的结构深度，默认值为 1
//返回值
一个包含将数组与子数组中所有元素的新数组。
```
**例**
```
//扁平化嵌套数组
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]


//扁平化与空项
flat() 方法会移除数组中的空项:
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```
**代替方案**
```
var arr1 = [1, 2, [3, 4]];
arr1.flat();

// 反嵌套一层数组
arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]

// 或使用 ...
const flatSingle = arr => [].concat(...arr);
```
```
// 使用 reduce、concat 和递归无限反嵌套多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```
```
// 不使用递归，使用 stack 无限反嵌套多层嵌套数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

```

> Array.prototype.some

判断是否至少有一个元素通过由提供的函数实现的测试。不会改变原数组
```
//语法
arr.some(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值:至少有一个元素通过指定函数的测试，返回true，否则false
```
**例**
```
//测试数组元素的值
//使用箭头函数测试数组元素的值
//判断数组元素中是否存在某个值
//使用箭头函数判断数组元素中是否存在某个值
```
> Array.prototype.every()

判断是否所有元素通过指定函数的测试,不会改变原数组
```
//语法
arr.every(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值:如果所有元素通过指定函数的测试，返回true，否则false
```

**例**
```
//检测所有数组元素的大小---->数组中的所有元素是否都大于 10
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
//原生js实现
if (!Array.prototype.every)
{
  Array.prototype.every = function(fun /*, thisArg */)
  {
    'use strict';

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function')
        throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t && !fun.call(thisArg, t[i], i, t))
        return false;
    }

    return true;
  };
}
```

> Array.prototype.filter()

filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素，不会改变原素组

```
//语法
arr.every(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组
```

**例**

```
//筛选排除所有较小的值
//过滤 JSON 中的无效条目
//在数组中搜索
//ES方法实现
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```



> Array.prototype.includes()

**兼容性**：
不兼容IE

includes方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
```
//语法
arr.includes(valueToFind[, fromIndex])
//参数
valueToFind：需要查找的元素值。
fromIndex 可选：
从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
//返回值
如果包含则返回 true，否则返回false。

```

**例**
```
//fromIndex 大于等于数组长度
//计算出的索引小于 0
//在函数的 arguments 对象上调用的 includes() 方法。
```
**Polfill**
```
待补充
```

>  Array.forEach()

对数组的每个元素执行一次提供的函数

**兼容**：IE9

```
//语法
arr.forEach(callback[, thisArg]);

//参数
callback为数组每个元素执行的函数，该函数接收3个参数
    item数组中正在处理的当前元素
    index数组中正在处理的当前元素的索引值
    arr：正在操作的数组

//返回值：undefined

Array.forEach((item,index,arr)=>{

})
```

**例**
```
//for 循环转换为 forEach
//打印出数组的内容
//使用 thisArg
//对象复制函数
```

> Array.indexOf()

返回数组中可以找到一个给定元素的第一个索引，如果不存在，返回-1；

**兼容IE9**
```
//语法
arr.indexOf(searchEle,formIndex)
//参数
searchEle要查询的元素
formIndex开始查找的位置，如果大于数组长度就不会在该数组中寻找返回-1，如果是负数，从后往前查找。如果大于数组的长度，从整个数组中查找，默认为0
//返回值:返回数组中可以找到一个给定元素的第一个索引，如果不存在则返回-1
```
**例**
```
//找出指定元素出现的所有位置
const newarr = [];
const index = arr.indexOf(ele);
while(index != -1){
  newarr.push(index)
  index = (index > 0 ? array.indexOf(ele, index + 1) : -1);
}
```

> Array.lastIndexOf()

返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

**语法**
```
arr.lastIndexOf(ele,index)
//参数
ele:要查找的元素
index:从此位置开始逆向查找。默认为数组的长度减 1，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。
//返回值
数组中最后一个元素的索引，如未找到返回-1
```

> Array.map()
创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

**语法**
  ```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array }[, 
thisArg])
//参数
callback回调函数
    value数组中正在处理的当前元素
    index 数组中正在处理的当前元素的索引值
    array 当前数组
thisArg:执行 callback 函数时使用的this 值。
//返回一个新数组，每个元素都是回调函数的结果。不修改原数组
  ```

  **例**
  ```
  [1,2,3,4,5,6,7,8].map(parseInt)
  parseInt可传2个参数第二值是进制，所以把索引值传入后得到以下结果
  //1,NaN,NaN,NaN,NaN,NaN,NaN,NaN
  [1,2,3,4,5,6,7,8].map(Number)
  //1,2,3,4,5,6,7,8

  ```

> Array.reduceRight()

接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

**语法**
```
arr.reduceRight(callback[, initialValue])
//参数
  callback
       prev:上一次调用回调的结果
       cur：当前被处理的元素
       index：当前处理元素的索引
       array：调用reduceRight的数组
  initialValue：可作为第一次调用回调 callback 的第一个参数
  返回值：函数累计执行之后的返回值
```
**例**
```
//扁平化一个元素为数组的数组
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

//与reduce的区别
var a = ['1', '2', '3', '4', '5']; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

console.log(left);  // "12345"
console.log(right); // "54321"
```

> Array.reduce()

**兼容到IE9**

接受一个函数作为累加器（accumulator）和数组的每个值（从左到右）将其减少为单个值。

**语法**

```
arr.reduce(callback[, initialValue])
//参数
  callback
       prev:上一次调用回调的结果
       cur：当前被处理的元素
       index：当前处理元素的索引
       array：调用reduceRight的数组
  initialValue：可作为第一次调用回调 callback 的第一个参数
  返回值：函数累计执行之后的结果
```

**例**
```
//数组去重
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current)=>{
    if(init.length===0 || init[init.length-1]!==current){
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]

//用map实现一个reduce
var initItem = []
function mapReduce(arr,fn,initItem){
    var sum = initItem ? initItem : 0;  
    arr.map((item,index,arr)=>{
        sum = fn(sum,item)
        console.log(sum)
    })
    return sum
}
function fn(a,b){
  return a+b
}
mapReduce(arr,initItem)
```

> arr.join

**兼容IE5**
将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

**语法**

```
arr.join([separator])
//参数：指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略()，数组元素用逗号分隔。默认为 ","。如果separator是空字符串("")，则所有元素之间都没有任何字符。
//返回值：一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串。如果其中一个元素是null或undefined返回空字符串
```
**例**
```
//通过不同连接符连接数组元素（为空默认使用，''转换为'1256'）
//连接类数组
Array.prototype.join.call(arguments)
```

> Array.keys()
**不兼容IE**

返回一个包含数组中每个索引键的Array Iterator对象。

**示例**
```
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

> Array.shift()
**兼容到IE5**


从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

**注意**
**返回值**：从数组中**删除的元素**; 如果数组为空则返回undefined 。

> Array.pop

**兼容到IE5**
删除数组中最后一个元素并返回该元素的值，此方法改变原数组

**注意**  
从数组中删除的元素(当数组为空时返回undefined)。

> Array.push()

**兼容到IE5**   

一个或多个元素添加到数组的末尾，并返回该数组的新长度

> Array.unshift()
**兼容到IE5**   

将一个或多个元素添加到数组的开头，并返回该数组的新长度

> Array.slice()
返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组**不会被改变**

**语法**

```
arr.slice();
// [0, end]

arr.slice(begin);
// [begin, end]

arr.slice(begin, end);
// [begin, end)

参数
begin
1.从该索引处开始提取原数组中的元素（从0开始）。
2.如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2)表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
3.如果省略 begin，则 slice 从索引 0 开始。
end
1.在该索引处结束提取原数组元素（从0开始）。slice会提取原数组中索引从 begin 到 end 的所有元素（包含begin，但不包含end）。
slice(1,4) 提取原数组中的第二个元素开始直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
2.如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1)表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
3.如果 end 被省略，则slice 会一直提取到原数组末尾。
4.如果 end 大于数组长度，slice 也会一直提取到原数组末尾。
```

> Array.splice()
通过删除或替换现有元素来修改数组,并以数组形式返回被修改的内容。此方法会**改变原数组**。
**语法**
```
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

//参数
start​
  指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。
deleteCount 可选
  整数，表示要移除的数组元素的个数。
  如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
  如果 deleteCount 被省略，则其相当于 array.length - start。
  如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
  如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
  item1, item2, ... 可选
  要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
返回值
  由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
```

> Array.reverse()

**兼容到IE5**

将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。

> Array.sort()
用原地算法对数组的元素进行排序，并返回数组。排序算法现在是稳定的。默认排序顺序是根据字符串Unicode码点。



```
语法：arr.sort([compareFunction])
compareFunction 可选
用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
firstEl
第一个用于比较的元素。
secondEl
第二个用于比较的元素。
返回值：
排序后的数组。请注意，数组已原地排序，并且不进行复制。
```
**注意**：1.由于它取决于具体实现，因此无法保证排序的时间和空间复杂性
2.如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。例如 "Banana" 会被排列到 "cherry" 之前。当数字按由小到大排序时，9 出现在 80 之前，但因为（没有指明 compareFunction），比较的数字会先被转换为字符串，所以在Unicode顺序上 "80" 要比 "9" 要靠前。

如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

> Array.toLocaleString() 
返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

**语法**   
```
//参数
locales 可选
带有BCP 47语言标记的字符串或字符串数组，关于locales参数的形式与解释，请看Intl页面。
options 可选
一个可配置属性的对象，对于数字 Number.prototype.toLocaleString()，对于日期Date.prototype.toLocaleString().

数组中的元素将会使用各自的 toLocaleString 方法

var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```

> Array.toString

返回一个字符串，表示指定的数组及其元素。

```
[1, 2, 'a', '1a'].toString()   //1,2,a,1a