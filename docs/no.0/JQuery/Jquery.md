jq技术内幕
---
#### 工厂模式形成的闭包
```
(function(window, undefined) {
  // undefined 在外面是关键字，在里面就是undefined变量
  undefined = 42; //闭包，保护内部的变量。
  alert(42)	// 42
})(window);
undefined = 42;
alert(undefined);	// undefined;
```




#### jquery = jquery.fn.init?    why?
```
(function(window, undefined) {
  var jQuery = function(selector, context) {
    // 默默的给做了一个 new
    return jQuery.fn.init(selector, context); // 这段代码被传为佳话
  };
  jQuery.fn = jQuery.prototype = {
    init: function(select, context){
      
    }
  };
  // jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype ???
  // 为什么绕？ 有什么好处?
  // 绝妙的地方
  // 要把 jQuery.fn.init.prototype 给绕出来
  jQuery.fn.init.prototype = jQuery.fn
  
  // 1. 构造函数 2. prototype的方法
  // new 第一步 返回一个 init 的函数，原型链上挂载了一个init的函数 没有主动执行
  // init没调用，被搁置了
  // 构造函数内部的 return new
  // jQuery
  
  // jQuery.fn.init.prototype = jQuery.fn = jQuery
  // 把各自的原型链去掉
  // jQuery.fn.init = jQuery
  // new jQuery.fn.init 相当于 new 自己
  
  // new 自己就好了，为什么就要绕？
  // 为了得到 jQuery 原型链的方法。jQuery.fn上拥有原型链上的所有方法
})(window)
```

可以在$.fn()上挂载方法写插件
```
$.fn.a=function(){console.log(2)}
$.fn.a()
或用jQuery.fn.extend(object)来扩展方法
jQuery.extend(object)  //用一个或多个其他对象来扩展一个对象，返回被扩展的对象
```
#### 隐式循环和链式调用
- 链式调用
```
var a = {
  a: function(argument) {
    console.log("first");
    return this
  },
  b: function(argument) {
    console.log("two");
    return this
  },
  c: function(argument) {
    console.log("three");
    return this
  }
};

s.a().b().c();
```
- 隐式循环  
内部存在隐式迭代，它会对匹配到的所有元素进行循环遍历，执行相应的方法；无需我们再手动地进行循，方便我们使用。
```
// 设置 .primary 元素的文字颜色为 #188eee
 
// 原生 JS
var primary = document.getElementsByClassName('primary');
for(var i = 0, len = primary.length; i < len; i++) {
    primary[i].style.color = '#188eee';
}
 
// jQuery
$('.primary').css('color', '#188eee');
```
#### jQuery里的on，live方法实现原理

主要是运用了事件代理
```
function live(targetObject, type, fn) {
  document.onclick = function(event) {
    var e = event ? event : window.event;
    addRow();
    alert(1);
    // 解决浏览器兼容的问题，e.srcElement IE, e.target FF
    var target = e.srcElement || e.target;
    if (e.type == type && target.tagName.toLocaleLowerCase() == targetObject) {
      alert(3);
      fn();	// 如果元素类型和事件类型同时匹配，则执行函数
    }
  }
}
```
#### jQuery里的val()方法实现原理
函数的重载：同样的函数传递不同的参数产生不同的结果。
```
$('.test').val();	// 不传参数， 取值
$('.test').val("test");	// 传了参数，赋值
// $() -> 函数 函数的重载

```
```
function addMethod(obj, name, f) {
  var old = obj[name];
  obj[name] = function() {
    if (f.length === arguments.length) {
      return f.apply(this, arguments)
    } else {
      return old.apply(this, arguments)
    }
  }
}

var people = {
  name: ['张三', '李四', '王二麻']
};

var find0 = function() {
  return this.name;
};

var find1 = function(name) {
  return name+'在这';
};

var find2 = function(a,b) {
  return a+b;
};
addMethod(people, 'find', find0);
addMethod(people, 'find', find1);
people.find();
people.find('张三');
people.find('张三','家在哪？');
```

#### 短路表达式
&& ||

1、逻辑与 && 的运算方式
```
var a = 1 && 2;

console.log(a); //返回的结果为 2
```
如果逻辑与运算符左边的值布尔转换后为true，那么返回右边的值（不管右边的值是真还是假）。

```
var a = false && 2;

console.log(a); //返回的结果为 false
```
如果逻辑与运算符左边的值布尔转换后为false，那么返回左边的值，但是当逻辑与的左边为 null/NaN/undefined ，结果就会得到null/NaN/undefined。

2、逻辑或 || 的运算方式

如果逻辑或运算符左边的值布尔转换后为false，那么返回右边的值（不管右边的值是真还是假）。

如果逻辑或运算符左边的值布尔转换后为true，那么返回左边的值，如果两个操作数都是是null（NaN/undefined），返回null（NaN/undefined）
```
var a = false || 2;

console.log(a); //返回的结果为2

var a = true || 2;

console.log(a); //返回的结果为 true
```
#### 钩子机制
```
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLocaleLowerCase();
  })
```
#### ready
```
// 实现 ready
1.标准浏览器下的触发 

当浏览器是基于标准浏览器时，会在加载完DOM结构后触发“DOMContentLoaded”事件，jquery内部就用此事件作为ready的触发源。

document.addEventListener( "DOMContentLoaded", completed, false );


2.IE浏览器下的触发

当浏览器是IE浏览器时，因为IE浏览器（蛋疼并强大着）不支持“DOMContentLoaded”事件，所以只能另谋它法，

E下的做法是用“document.documentElement.doScroll("left")”的方法去滚动页面，如果没加载完就等个50毫秒后继续滚，直到滚的动后就触发ready。
```