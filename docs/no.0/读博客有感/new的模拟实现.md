# new 的模拟实现
------------------------------------------------------------------------------------------------
> new运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一。
```
function Otaku(name, age) {
  this.name = name;
  this.age = age;
  
  this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function() {
  console.log('I am' + this.name);
};

var person = new Otaku('Kevin', '18');

console.log(person.name);	// Kevin
console.log(person.habit);	// Games
console.log(person.strength);	// 60

person.sayYourName();	// I am Kevin
```

从这个例子中，我们可以看到，实例 person 可以：

- 访问到 Otaku 构造函数里的属性
- 访问到 Otaku.prototype 中的属性

```
function objectFactory(){
   var obj = new Object(), // new返回的是一个对象，所以定义一个对象，最后返回该对象
            Constructor = [].shift.call(arguments); // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。并且会改变原来数组的长度，  Constructor = Otaku构造函数
            Constructor.apply(obj, arguments); // obj 有 Constructor（即Otaku构造函数）的属性， obj有了Otaku的执行环境， 此行并不能去掉
            console.log(obj instanceof Constructor); // false 此时还不是它的实例
            obj.__proto__ = Constructor.prototype; // obj 就继承了 Constructor.prototype（即Otaku构造函数）
            console.log(obj instanceof Constructor); // true  
           //  return obj; // 最后返回该对象：1. obj访问到Otaku构造函数里的属性; 2. obj访问到Otaku.prototype中的属性  实现了new功能

return (typeof ret === 'object' ? ret : obj); // 如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么。
}
```