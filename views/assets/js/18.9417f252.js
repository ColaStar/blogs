(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{230:function(n,s,a){"use strict";a.r(s);var t=a(0),e=Object(t.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("blockquote",[a("p",[n._v("1.undefined与is not defined区别")])]),n._v(" "),a("p",[n._v("undefined：声明了但是未被赋值，"),a("br"),n._v("\nis not defiened 变量未被声明")]),n._v(" "),a("blockquote",[a("p",[n._v("立即执行函数")])]),n._v(" "),a("ul",[a("li",[a("p",[n._v("为了避免变量污染（命名冲突）")])]),n._v(" "),a("li",[a("p",[n._v("1、Javascript引擎在解析javascript代码时会‘函数声明提升'（Function declaration Hoisting）当前执行环境（作用域）上的函数声明，\n而函数表达式必须等到Javascirtp引擎执行到它所在行时，才会从上而下一行一行地解析函数表达式")])]),n._v(" "),a("li",[a("p",[n._v("2、函数表达式后面可以加括号立即调用该函数，函数声明不可以")])])]),n._v(" "),a("blockquote",[a("p",[n._v("闭包")])]),n._v(" "),a("ul",[a("li",[n._v("简介：函数定义和函数表达式位于另一个函数的函数体内。而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包。。")]),n._v(" "),a("li",[a("strong",[n._v("特点")]),n._v("：")])]),n._v(" "),a("ol",[a("li",[n._v("作为一个函数变量的一个引用，当函数返回时，其处于激活状态。")]),n._v(" "),a("li",[n._v("一个闭包就是当一个函数返回时，一个没有释放资源的栈区。"),a("br"),n._v("\n3.避免全局变量的污染。")])]),n._v(" "),a("ul",[a("li",[a("strong",[n._v("注意")]),n._v("："),a("br"),n._v("\n1.内部函数可以访问外部函数变量，在函数外部自然无法读取函数内的局部变量；而外部函数想要访问内部函数的变量时，就需要把内部函数返回出去。"),a("br"),n._v("\n2.闭包会使得函数中的变量都被保存在内存中，内存消耗很大，可以通过把变量设置为null，这样可以防止内存泄露。）")])]),n._v(" "),a("blockquote",[a("p",[n._v("闭包为什么会造成内存泄露")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function f1() {\n  var N = 0;\n  function f2() {\n    N += 1;\n    console.log(N)\n  }\n  return f2;\t// 在f2的内部得到了N\n}\nvar result = f1();\nresult();\nresult();\nresult();\nresult = null; // 使用完以后对result赋值为null， 这样就不会造成内存泄露了\n// 不仅仅能拿到变量，变量还一直在内存中\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Product() {\n  var name;\n  this.setName = function(value) {\n    name = value;\n  };\n  this.getName = function() {\n    return name;\n  }\n}\n\nvar s = new Product();\ns.setName('hello');\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("blockquote",[a("p",[n._v("原型链")])]),n._v(" "),a("p",[n._v("面向对象编程是什么? 怎么实现面向对象编程？")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('var Car = function(color) {\n  // Car.prototype.constructor = Car\n  // 构造函数和初始化这个类就是一个东西了\n  this.color = color;\n  this.sail = function() {\n    console.log(this.color + "卖13W");\n  }\n};\n\nCar.prototype.sail = function() {\n  console.log(this.color + "卖13W");\n};\n\n// Todo 构造函数中的方法 和 构造函数原型上方法的区别\n\nvar BMW = function(color) {\n  Car.call(this.color)\n};\n\n// 面试 必问\n// 子类\n// 1. 拿到父类原型类上的方法\n// 2. 不能让构造函数执行两次\n// 3. 引用的原型链不能是按值引用\n// 4. 修正子类的 constructor\nvar __pro = Object.create(Car.prototype);\n__pro.constructor = BMW;\nBMW.prototype = __pro;\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 函数提升\n(function() {\n  var a = 20;\n  function a() {};\n  console.log(a);\n  \n  // 函数提升的优先级更高。所以这段代码是这样的\n  function a() {}\n  var a;\n  a = 20;\n  console.log(a);\t// 20\n})();\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("(function() {\n  var a = 20;\n  var b = c = a;\n  console.log(c);\n})();\n\nalert(c);\n\n// 上述代码相当于\n(function() {\n  var a = 20;\n  var b = a;\n  c = a;\n})();\n\nconsole.log(c);\t// 20\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function test() {\n  this.a = 20;\n}\nthis.prototype.a = 30;\nvar q = new test;\nalert(q.a)\n// 构造函数内的优先级要比原型链内的优先级要高。\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var user = {\n  age: 20,\n  init: function() {\n    console.log(this.age);\n  }\n};\n\nvar data = { age: 40 };\n// bind 以后返回的是一个新函数\nvar s = user.init.bind(data);\ns(); // 40\nuser.init();\t// 20\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("p",[n._v("es5知识点")]),n._v(" "),a("ol",[a("li",[n._v("立即执行函数")]),n._v(" "),a("li",[n._v("闭包 -> 拿到你不该拿到的东西 -> 内部函数可以访问外部函数的变量，把函数返回出去\n-> 闭包可以保护内部变量，闭包造成内存泄露 == null（等着垃圾回收去收集）")]),n._v(" "),a("li",[n._v("原型链\n1）构造函数例的属性的优先级比原型链的要高。\n2)在实现面向对象编程的时候，JS没有类的概念，要用函数替代。\n3）constructor实际上对应的就是那个函数本身\nprototype  按引用传递的  可以用Object.create创建原型链的副本。")]),n._v(" "),a("li",[n._v("数值 字符串  布尔值  按值传递，\n按引用传递：对象，数组")]),n._v(" "),a("li",[n._v("改变this的方法  call  apply  bind")]),n._v(" "),a("li",[n._v("函数提升与变量提升，函数提升的级别要比变量高；")]),n._v(" "),a("li",[n._v("js异步循环机制  先执行执行同步队列里的后执行异步队列里的\n什么在异步队列里->settimeout，事件等")]),n._v(" "),a("li",[n._v("通过立即执行函数与闭包实现模块化编程")])])])},[],!1,null,null,null);s.default=e.exports}}]);