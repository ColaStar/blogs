bind、call、apply
---
> 区别

- 1、用法不同与传入参数不同
 call是与bind传入参数是用逗号分开
 apply传入参数必须一个数组
- 2、返回值不同
 call、apply直接返回计算值或函数直接被调用
 bind返回的是一个新的函数，需要重新调用
- 3.在Es6中箭头函数call、apply会失效，因为箭头函数中this指向定义时所在的函数体，而不是使用时所在的对象

 ```
 var user = { 
     age: 20, 
     init:function(){
          console.log(this.age)
           } 
    } 
    var data = {age:40} 
    var s = user.init.bind(data); 
    s()//40
```

> 相同值
- 1、都是用来重新定义this这个对象的
- 2、第一个参数都是用来改变this的指向对象的


> 实现一个bind函数
```
if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
        var self = this,                        // 保存原函数
            context = [].shift.call(arguments), // 保存需要绑定的this上下文
            args = [].slice.call(arguments);    // 剩余的参数转为数组
        return function () {                    // 返回一个新函数
            self.apply(context, [].concat.call(args, [].slice.call(arguments)));
        }
    }
}
```

> 应用场景

```
//最数组的最大值最小值

Math.Max.apply(null,arr)
Math.Min.apply(null,arr)

//将类数组转化为数组
var a = Array.prototype.slice.call(arr)

//数组追加
[].push.apply(arr1,arr2)

//判断变量类型
function isArray(){
    return Object.prototype.toString.call(obj)=='[Object Array  ]'
}

//利用call与apply做继承

function Person(name,age){
    // 这里的this都指向实例
    this.name = name
    this.age = age
    this.sayAge = function(){
        console.log(this.age)
    }
}
function Female(){
    Person.apply(this,arguments)//将父元素所有方法在这里执行一遍就继承了
}
var dot = new Female('Dot',2)


```