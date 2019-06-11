JS里的this
---
this本身很简单，总是指向当前类的实例，即谁调用它指向谁

- js里的this是在function内部被创建
- 指向调用时所在函数绑定的对象，
- this不能赋值，但可以被call，apply，bind改变
- 构造函数内的优先级要比原型链内的优先级要高

this 和构造器
```
function Tab(nav, content) {
    this.nav = nav
    this.content = content
}
 
Tab.prototype.getNav = function() {
    return this.nav;
};
Tab.prototype.setNav = function(nav) {
    this.nav = nav;
};
```
this 和对象
var tab = {
    nav: '',
    content: '',
    getNav: function() {
        return this.nav;
    },
    setNav: function(n) {
        this.nav = n;
    }
}
this 和函数
```
function showMsg() {
    alert(this.message)
}
 
var m1 = {
    message: '输入的电话号码不正确'
}
var m2 = {
    message: '输入的身份证号不正确'
}
 
showMsg.call(m1) // '输入的电话号码不正确'
showMsg.call(m2) // '输入的身份证号不正确'
```
全局环境的 this
```
(function() {
    // ...
     
})(this);
```

this 和 DOM/事件
```
<div id="nav"></div>
<script>
    nav.onclick = function() {
        alert(this) // 指向div#nav
    }
</script>

<div id="nav" onclick="getId()">ddd</div>
<script>
    function getId() {
        alert(this.id)
    }
</script>
为啥this.id是undefined

判断 this 指向谁，看执行时而非定义时，只要函数(function)没有绑定在对象上调用，它的 this 就是 window
```

this 可以被 call/apply 改变
```
var m1 = {
    message: 'This is A'
} 
var m2 = {
    message: 'This is B'
}  
 
function showMsg() {
    alert(this.message)
}
 
showMsg() // undefined
showMsg.call(m1) // 'This is A'
showMsg.call(m2) // 'This is B'
```

me/self/that/_this 暂存 this  
ES5 中新增的 bind 和 this
```
var modal = {
    message: 'This is A'
}
 
function showMsg() {
    alert(this.message)
}
 
var otherShowMsg = showMsg.bind(modal)
otherShowMsg() // 'This is A'
```

ES6 箭头函数(arrow function) 和 this
```
。箭头函数的特征就是，定义在哪，this 就指向那。即箭头函数定义在一个对象里，那箭头函数里的 this 就指向该对象。

var book = {
    author: 'John Resig',
    init:  function() {
        document.onclick = ev => {
            alert(this.author) ; // 这里的 this 不是 document 了
        }
    }
};
book.init()
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
function test() {
  this.a = 20;
}
this.prototype.a = 30;
var q = new test;
alert(q.a)  //20
// 构造函数内的优先级要比原型链内的优先级要高
```
