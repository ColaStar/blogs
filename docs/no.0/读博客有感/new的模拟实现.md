new 的模拟实现
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