(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{525:function(t,n,s){"use strict";s.r(n);var a=s(63),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"原型与原型链概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链概念"}},[t._v("#")]),t._v(" 原型与原型链概念")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),s("blockquote",[s("p",[t._v("概念：每一个javascript对象（除null）在创建的时候都有一个与之相关对象，关联的这个对象就是原型。")])]),t._v(" "),s("p",[s("strong",[t._v("函数（Function）才有prototype属性，对象（除Object）拥有__proto__。")])]),t._v(" "),s("p",[t._v("每个对象都有一个prototype属性，这个prototype属性指向的就是原型对象，通过构造函数创建的时候将这个新创建的对象与这个原型对象相关联。原型对象上有共享属性和方法。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function Penson(name){\n    this.name = name\n}\n\nPenson.prototype.name = 'zhangsan'\n这里的俩个name在创建的时候属于什么样的情况\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"实例后的Person",href:"http://blog.colastar.club:9527/static/images/newPerson.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/newPerson.png",alt:"实例后的Person"}})])]),t._v(" "),s("h4",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("由构造函数创建出来的对象称为构造函数的一个实例。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function Person() {}\n\nlet p1 = new Person()\n// p1是构造函数 Person 的一个实例。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h4",{attrs:{id:"实例与原型对象的关系是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例与原型对象的关系是什么"}},[t._v("#")]),t._v(" 实例与原型对象的关系是什么？")]),t._v(" "),s("p",[t._v("原型对象就是Penson.prototype"),s("br"),t._v("\n实例就是p1"),s("br"),t._v("\n这里引入一个新的概念就是_proto_\n"),s("em",[t._v("proto")]),t._v(":每个对象都有一个_proto_属性。_proto_属性指向的是构造函数的原型对象。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Person.prototype == p1._proto_ ;  true\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"指向关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指向关系"}},[t._v("#")]),t._v(" 指向关系")]),t._v(" "),s("p",[t._v("构造函数指向原型对象：通过prototype属性Person.prototype")]),t._v(" "),s("p",[t._v("实例指向原型对象：通过__proto__属性 p1."),s("strong",[t._v("proto")])]),t._v(" "),s("blockquote",[s("p",[t._v("？ 原型对象是否能够指向 构造函数 或者 实例 呢？")])]),t._v(" "),s("p",[t._v("不能，原型对象无法指向实例，因为原型对象会与多个实例关联，原型对象可以指向构造函数。原型对象有一个constructor的属性指向构造函数。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Penson.prototype.constructor = Person\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("JS中原型链，说简单也简单。")]),t._v(" "),s("p",[t._v("首先明确： 函数（Function）才有prototype属性，对象（除Object）拥有__proto__。")]),t._v(" "),s("p",[t._v("首先，我画了一张图。")]),t._v(" "),s("p",[t._v('<a data-fancybox title="原型链" href="http://blog.colastar.club:9527/static/images/proto.png "原型链"">'),s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/proto.png",alt:"原型链",title:"原型链"}})]),t._v(" "),s("p",[t._v("所谓原型链，指的就是图中的"),s("strong",[t._v("proto")]),t._v("这一条指针链！")]),t._v(" "),s("p",[t._v("原型链的顶层就是Object.prototype，而这个对象的是没有原型对象的。")]),t._v(" "),s("p",[t._v("可在chrome的控制台里面输入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("    Object.__proto__\n")])])]),s("p",[t._v("输出是:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("    function Empty() {}\n")])])]),s("p",[t._v("原型链，如此而已。")]),t._v(" "),s("p",[t._v("对于新人来说，JavaScript的原型是一个很让人头疼的事情，一来prototype容易与__proto__混淆，二来它们之间的各种指向实在有些复杂，其实市面上已经有非常多的文章在尝试说清楚，有一张所谓很经典的图，上面画了各种线条，一会连接这个一会连接那个，说实话我自己看得就非常头晕，更谈不上完全理解了。所以我自己也想尝试一下，看看能不能把原型中的重要知识点拆分出来，用最简单的图表形式说清楚。")]),t._v(" "),s("p",[t._v("我们知道原型是一个对象，其他对象可以通过它实现属性继承。但是尼玛除了prototype，又有一个__proto__是用来干嘛的？长那么像，让人怎么区分呢？它们都指向谁，那么混乱怎么记啊？原型链又是什么鬼？相信不少初学者甚至有一定经验的老鸟都不一定能完全说清楚，下面用三张简单的图，配合一些示例代码来理解一下。")]),t._v(" "),s("p",[s("strong",[t._v("一、prototype和__proto__的区别")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/prototype_proto_.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/prototype_proto_.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var a = {};\nconsole.log(a.prototype);  //undefined\nconsole.log(a.\\_\\_proto\\_\\_);  //Object {}\n\nvar b = function(){}\nconsole.log(b.prototype);  //b {}\nconsole.log(b.\\_\\_proto\\_\\_);  //function() {}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"_prototype属性指向谁_",href:"http://blog.colastar.club:9527/static/images/_prroto_.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/_prroto_.png",alt:"prototype属性指向谁"}})])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/\\*1、字面量方式\\*/\nvar a = {};\nconsole.log(a.\\_\\_proto\\_\\_);  //Object {}\n\nconsole.log(a.\\_\\_proto\\_\\_ === a.constructor.prototype); //true\n\n/\\*2、构造器方式\\*/\nvar A = function(){};\nvar a = new A();\nconsole.log(a.\\_\\_proto\\_\\_); //A {}\n\nconsole.log(a.\\_\\_proto\\_\\_ === a.constructor.prototype); //true\n\n/\\*3、Object.create()方式\\*/\nvar a1 = {a:1}\nvar a2 = Object.create(a1);\nconsole.log(a2.\\_\\_proto\\_\\_); //Object {a: 1}\n\nconsole.log(a.\\_\\_proto\\_\\_ === a.constructor.prototype); //false（此处即为图1中的例外情况）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"什么是原型链？",href:"http://blog.colastar.club:9527/static/images/原型链.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/%E5%8E%9F%E5%9E%8B%E9%93%BE.png",alt:"什么是原型链？"}})])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var A = function(){};\nvar a = new A();\nconsole.log(a.\\_\\_proto\\_\\_); //A {}（即构造器function A 的原型对象）\nconsole.log(a.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_); //Object {}（即构造器function Object 的原型对象）\nconsole.log(a.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_); //null\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("我在写一篇图解prototype和__proto__的区别时，搜资料搜到了一个有意思的现象，下面这两个运算返回的结果是一样的：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Function instanceof Object;//true\nObject instanceof Function;//true\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("这个是怎么一回事呢？要从运算符instanceof说起。")]),t._v(" "),s("p",[s("strong",[t._v("一、instanceof究竟是运算什么的？")])]),t._v(" "),s("p",[t._v("我曾经简单理解instanceof只是检测一个对象是否是另个对象new出来的实例（例如var a = new Object()，a instanceof Object返回true），但实际instanceof的运算规则上比这个更复杂。")]),t._v(" "),s("p",[t._v("首先w3c上有官方解释（"),s("a",{attrs:{href:"https://www.w3.org/html/ig/zh/wiki/ES5/%E8%A1%A8%E8%BE%BE%E5%BC%8F#instanceof_.E8.BF.90.E7.AE.97.E7.AC.A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1),t._v("，有兴趣的同学可以去看看），但是一如既往地让人无法一目了然地看懂……")]),t._v(" "),s("p",[t._v("知乎上有同学把这个解释翻译成人能读懂的语言（"),s("a",{attrs:{href:"https://www.zhihu.com/question/34183746/answer/59043879",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1),t._v("），看起来似乎明白一些了：")]),t._v(" "),s("p",[t._v("//假设instanceof运算符左边是L，右边是R\n"),s("code",[t._v("L instanceof R")]),t._v("\n//instanceof运算时，通过判断L的原型链上是否存在R.prototype")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("L.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_ ..... === R.prototype ？\n//如果存在返回true 否则返回false\n\n注意：instanceof运算时会递归查找L的原型链，即L.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_...直到找到了或者找到顶层为止。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("所以一句话理解instanceof的运算规则为：")]),t._v(" "),s("p",[s("strong",[t._v("instanceof****检测左侧的__proto__原型链上，是否存在右侧的prototype原型。")])]),t._v(" "),s("p",[s("strong",[t._v("二、图解构造器Function和Object的关系")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"图解构造器Function和Object的关系",href:"http://blog.colastar.club:9527/static/images/function_obj.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/function_obj.png",alt:"图解构造器Function和Object的关系"}})])]),t._v(" "),s("p",[t._v("我们再配合代码来看一下就明白了：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//①构造器Function的构造器是它自身\nFunction.constructor=== Function;//true\n\n//②构造器Object的构造器是Function（由此可知所有构造器的constructor都指向Function）\nObject.constructor === Function;//true\n\n\n\n//③构造器Function的\\_\\_proto\\_\\_是一个特殊的匿名函数function() {}\nconsole.log(Function.\\_\\_proto\\_\\_);//function() {}\n\n//④这个特殊的匿名函数的\\_\\_proto\\_\\_指向Object的prototype原型。\nFunction.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_ === Object.prototype//true\n\n//⑤Object的\\_\\_proto\\_\\_指向Function的prototype，也就是上面③中所述的特殊匿名函数\nObject.\\_\\_proto\\_\\_ === Function.prototype;//true\nFunction.prototype === Function.\\_\\_proto\\_\\_;//true\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[s("strong",[t._v("三、当构造器Object和Function遇到instanceof")])]),t._v(" "),s("p",[t._v("我们回过头来看第一部分那个“奇怪的现象”，从上面那个图中我们可以看到：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Function.\\_\\_proto\\_\\_.\\_\\_proto\\_\\_ === Object.prototype;//true\nObject.\\_\\_proto\\_\\_ === Function.prototype;//true\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("所以再看回第一点中我们说的instanceof的运算规则，Function instanceof Object 和 Object instanceof Function运算的结果当然都是true啦！")]),t._v(" "),s("p",[t._v("如果看完以上，你还觉得上面的关系看晕了的话，只需要记住下面两个最重要的关系，其他关系就可以推导出来了：")]),t._v(" "),s("p",[s("strong",[t._v("1、所有的构造器的constructor都指向Function")])]),t._v(" "),s("p",[s("strong",[t._v("2、Function的prototype指向一个特殊匿名函数，而这个特殊匿名函数的__proto__指向Object.prototype")])]),t._v(" "),s("p",[t._v("我们知道，在Js中一切皆为对象（Object），但是Js中并没有类（class）；Js是基于原型（prototype-based）来实现的面向对象（OOP）的编程范式的，但并不是所有的对象都拥有"),s("code",[t._v("prototype")]),t._v("这一属性：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" var a = {}; \n\nconsole.log(a.prototype);  //=> undefined\n\nvar b = function(){}; \n\nconsole.log(b.prototype);  //=> {} constrcutor\n\nvar c = 'Hello'; \n\nconsole.log(c.prototype);  //=> undefined\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[s("code",[t._v("prototype")]),t._v("是每个"),s("code",[t._v("function")]),t._v("定义时自带的属性，但是Js中"),s("code",[t._v("function")]),t._v("本身也是对象，我们先来看一下下面几个概念的差别：")]),t._v(" "),s("h2",{attrs:{id:"_1-function、function、object和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-function、function、object和"}},[t._v("#")]),t._v(" 1. "),s("code",[t._v("function")]),t._v("、"),s("code",[t._v("Function")]),t._v("、"),s("code",[t._v("Object")]),t._v("和"),s("code",[t._v("{}")])]),t._v(" "),s("p",[s("code",[t._v("function")]),t._v("是Js的一个关键词，用于定义函数类型的变量，有两种语法形式：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function f1(){ \n\nconsole.log('This is function f1!');\n\n}\n\ntypeof(f1);  //=> 'function'\n\nvar f2 = function(){ \n\nconsole.log('This is function f2!');\n\n}\n\ntypeof(f2);  //=> 'function'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[t._v("如果用更加面向对象的方法来定义函数，可以用"),s("code",[t._v("Function")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nvar f3 = new Function(\"console.log('This is function f3!');\"); \n\nf3();        //=> 'This is function f3!' \n\ntypeof(f3);  //=> 'function'\n\ntypeof(Function); //=> 'function'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("实际上"),s("code",[t._v("Function")]),t._v("就是一个用于构造函数类型变量的类，或者说是函数类型实例的构造函数（constructor）；与之相似有的"),s("code",[t._v("Object")]),t._v("或"),s("code",[t._v("String")]),t._v("、"),s("code",[t._v("Number")]),t._v("等，都是Js内置类型实例的"),s("strong",[t._v("构造函数")]),t._v("。比较特殊的是"),s("code",[t._v("Object")]),t._v("，它用于生成对象类型，其简写形式为"),s("code",[t._v("{}")]),t._v("：\n7")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nvar o1 = new Object(); \n\ntypeof(o1);      //=> 'object'\n\nvar o2 = {}; \n\ntypeof(o2);     //=> 'object'\n\ntypeof(Object); //=> 'function'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"_2-prototype-vs-proto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-prototype-vs-proto"}},[t._v("#")]),t._v(" 2. "),s("code",[t._v("prototype")]),t._v(" VS "),s("code",[t._v("__proto__")])]),t._v(" "),s("p",[t._v("清楚了上面的概念之后再来看"),s("code",[t._v("prototype")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("Each function has two properties: "),s("code",[t._v("length")]),t._v(" and "),s("code",[t._v("prototype")])])]),t._v(" "),s("p",[s("code",[t._v("prototype")]),t._v("和"),s("code",[t._v("length")]),t._v("是每一个函数类型自带的两个属性，而其它非函数类型并没有（开头的例子已经说明），这一点之所以比较容易被忽略或误解，是因为所有类型的构造函数本身也是函数，所以它们自带了"),s("code",[t._v("prototype")]),t._v("属性：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Node\nconsole.log(Object.prototype);  //=> {} \n\nconsole.log(Function.prototype);//=> [Function: Empty] \n\nconsole.log(String.prototype);  //=> [String: '']\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("除了"),s("code",[t._v("prototype")]),t._v("之外，Js中的所有对象（"),s("code",[t._v("undefined")]),t._v("、"),s("code",[t._v("null")]),t._v("等特殊情况除外）都有一个内置的"),s("code",[t._v("[[Prototype]]")]),t._v("属性，指向它“父类”的"),s("code",[t._v("prototype")]),t._v("，这个内置属性在ECMA标准中并没有给出明确的获取方式，但是许多Js的实现（如Node、大部分浏览器等）都提供了一个"),s("code",[t._v("__proto__")]),t._v("属性来指代这一"),s("code",[t._v("[[Prototype]]")]),t._v("，我们通过下面的例子来说明实例中的"),s("code",[t._v("__proto__")]),t._v("是如何指向构造函数的"),s("code",[t._v("prototype")]),t._v("的：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nvar Person = function(){}; \n\nPerson.prototype.type = 'Person'; \n\nPerson.prototype.maxAge = 100;\n\nvar p = new Person(); \n\nconsole.log(p.maxAge); \n\np.name = 'rainy';\n\nPerson.prototype.constructor === Person;  //=> true \n\np.__proto__ === Person.prototype;         //=> true \n\nconsole.log(p.prototype);                 //=> undefined\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("上面的代码示例可以用下图解释：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/Person例子.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/Person%E4%BE%8B%E5%AD%90.png",alt:""}})])]),t._v(" "),s("p",[s("code",[t._v("Person")]),t._v("是一个函数类型的变量，因此自带了"),s("code",[t._v("prototype")]),t._v("属性，"),s("code",[t._v("prototype")]),t._v("属性中的"),s("code",[t._v("constructor")]),t._v("又指向"),s("code",[t._v("Person")]),t._v("本身；通过"),s("code",[t._v("new")]),t._v("关键字生成的"),s("code",[t._v("Person")]),t._v("类的实例"),s("code",[t._v("p1")]),t._v("，通过"),s("code",[t._v("__proto__")]),t._v("属性指向了"),s("code",[t._v("Person")]),t._v("的原型。这里的"),s("code",[t._v("__proto__")]),t._v("只是为了说明实例"),s("code",[t._v("p1")]),t._v("在内部实现的时候与父类之间存在的关联（指向父类的原型），在实际操作过程中实例可以直接通过"),s("code",[t._v(".")]),t._v("获取父类原型中的属性，从而实现了继承的功能。")]),t._v(" "),s("h2",{attrs:{id:"_3-原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-原型链"}},[t._v("#")]),t._v(" 3. 原型链")]),t._v(" "),s("p",[t._v("清楚了"),s("code",[t._v("prototype")]),t._v("与"),s("code",[t._v("__proto__")]),t._v("的概念与关系之后我们会对“Js中一切皆为对象”这句话有更加深刻的理解。进而我们会想到，既然"),s("code",[t._v("__proto__")]),t._v("是（几乎）所有对象都内置的属性，而且指向父类的原型，那是不是意味着我们可以“逆流而上”一直找到源头呢？我们来看下面的例子：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Node\n\nvar Obj = function(){}; \n\nvar o = new Obj(); \n\no.__proto__ === Obj.prototype;  //=> true \n\no.__proto__.constructor === Obj; //=> true\n\nObj.__proto__ === Function.prototype; //=> true \n\nObj.__proto__.constructor === Function; //=> true\n\nFunction.__proto__ === Function.prototype; //=> true \n\nObject.__proto__ === Object.prototype;     //=> false \n\nObject.__proto__ === Function.prototype;   //=> true\n\nFunction.__proto__.constructor === Function;//=> true \n\nFunction.__proto__.__proto__;               //=> {} \n\nFunction.__proto__.__proto__ === o.__proto__.__proto__; //=> true \n\no.__proto__.__proto__.__proto__ === null;   //=> true\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/function_obj_person.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/function_obj_person.png",alt:""}})])]),t._v(" "),s("p",[t._v("从上面的例子和图解可以看出，"),s("code",[t._v("prototype")]),t._v("对象也有"),s("code",[t._v("__proto__")]),t._v("属性，向上追溯一直到"),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("new")]),t._v("关键词的作用就是完成上图所示实例与父类原型之间关系的串接，并创建一个新的对象；"),s("code",[t._v("instanceof")]),t._v("关键词的作用也可以从上图中看出，实际上就是判断"),s("code",[t._v("__proto__")]),t._v("（以及"),s("code",[t._v("__proto__.__proto__")]),t._v("...）所指向是否父类的原型：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var Obj = function(){}; \n\nvar o = new Obj();\n\no instanceof Obj; //=> true \n\no instanceof Object; //=> true \n\no instanceof Function; //=> false\n\no.__proto__ === Obj.prototype; //=> true \n\no.__proto__.__proto__ === Object.prototype; //=> true \n\no.__proto__.__proto__ === Function;  //=> false\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h1",{attrs:{id:"js-面向对象之原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-面向对象之原型链"}},[t._v("#")]),t._v(" JS 面向对象之原型链")]),t._v(" "),s("h1",{attrs:{id:"对象的原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象的原型链"}},[t._v("#")]),t._v(" 对象的原型链")]),t._v(" "),s("ol",[s("li",[t._v("只要是对象就有原型")]),t._v(" "),s("li",[t._v("原型也是对象")]),t._v(" "),s("li",[t._v("只要是对象就有原型, 并且原型也是对象, 因此只要定义了一个对象, 那么就可以找到他的原型, 如此反复, 就可以构成一个对象的序列, 这个结构就被成为"),s("strong",[t._v("原型链")])]),t._v(" "),s("li",[t._v("原型链到哪里是一个头? //null")]),t._v(" "),s("li",[t._v("一个默认的原型链结构是什么样子的?")]),t._v(" "),s("li",[t._v("原型链结构对已知语法结构有什么修正?")])]),t._v(" "),s("h2",{attrs:{id:"原型链的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链的结构"}},[t._v("#")]),t._v(" 原型链的结构")]),t._v(" "),s("ol",[s("li",[t._v("原型链继承就是利用就是修改"),s("strong",[t._v("原型链结构")]),t._v("( 增加、删除、修改节点中的成员 ), 从而让实例对象可以使用整个原型链中的所有成员( 属性和方法 )")]),t._v(" "),s("li",[t._v("使用原型链继承必须满足属性搜索原则")])]),t._v(" "),s("h3",{attrs:{id:"属性搜索原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性搜索原则"}},[t._v("#")]),t._v(" 属性搜索原则")]),t._v(" "),s("ol",[s("li",[t._v("所谓的属性搜索原则, 就是对象在访问属性与方法的时候, 首先在当前对象中查找")]),t._v(" "),s("li",[t._v("如果当前对象中存储在属性或方法, 停止查找, 直接使用该属性与方法")]),t._v(" "),s("li",[t._v("如果对象没有改成员, 那么再其原型对象中查找")]),t._v(" "),s("li",[t._v("如果原型对象含有该成员, 那么停止查找, 直接使用")]),t._v(" "),s("li",[t._v("如果原型还没有, 就到原型的原型中查找")]),t._v(" "),s("li",[t._v("如此往复, 直到直到 Object.prototype 还没有, 那么就返回 undefind.")]),t._v(" "),s("li",[t._v("如果是调用方法就包错, 该 xxxx 不是一个函数")])]),t._v(" "),s("h1",{attrs:{id:"原型链结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链结构图"}},[t._v("#")]),t._v(" 原型链结构图")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("构造函数 对象原型链结构图")]),t._v(" "),s("p",[s("code",[t._v("function Person (){}; var p = new Person();")])])])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/对象原型链结构图.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/%E5%AF%B9%E8%B1%A1%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%93%E6%9E%84%E5%9B%BE.png",alt:""}})])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("{} 对象原型链结构图")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/{}对象原型链结构图.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/%7B%7D%E5%AF%B9%E8%B1%A1%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%93%E6%9E%84%E5%9B%BE.png",alt:""}})])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("[] 数组原型链结构图")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/数组原型链结构图.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/%E6%95%B0%E7%BB%84%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%93%E6%9E%84%E5%9B%BE.png",alt:""}})])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("code",[t._v("Object.prototype")]),t._v(" 对应的构造函数")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/构造函数原型对象原型链结构图.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%93%E6%9E%84%E5%9B%BE.png",alt:""}})])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("div 对应的构造函数")]),t._v(" "),s("li",[t._v("div -> DivTag.prototype( 就是 o ) -> Object.prototype -> null")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var o = {\n    appendTo: function ( dom ) {\n    }\n};\nfunction DivTag() {}\nDivTag.prototype = o;\n\nvar div = new DivTag();\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/div构造函数原型链结构图.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/div%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%93%E6%9E%84%E5%9B%BE.png",alt:""}})])]),t._v(" "),s("h1",{attrs:{id:"函数的构造函数-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数的构造函数-function"}},[t._v("#")]),t._v(" 函数的构造函数 Function")]),t._v(" "),s("p",[t._v("在 js 中 使用 Function 可以实例化函数对象. 也就是说在 js 中函数与普通对象一样, 也是一个对象类型( 非常特殊 )")]),t._v(" "),s("ol",[s("li",[t._v("函数是对象, 就可以使用对象的动态特性")]),t._v(" "),s("li",[t._v("函数是对象, 就有构造函数创建函数")]),t._v(" "),s("li",[t._v("函数是函数, 可以创建其他对象(函数的构造函数也是函数)")]),t._v(" "),s("li",[t._v("函数是唯一可以限定变量作用域的结构")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/Function原型链结构图.png"}},[s("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/Function%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%93%E6%9E%84%E5%9B%BE.png",alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"函数是-function-的实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数是-function-的实例"}},[t._v("#")]),t._v(" 函数是 Function 的实例")]),t._v(" "),s("p",[t._v("new Function( arg0, arg1, arg2, ..., argN, body );")]),t._v(" "),s("ol",[s("li",[t._v("Function 中的参数全部是字符串")]),t._v(" "),s("li",[t._v("该构造函数的作用是将 参数链接起来组成函数")])]),t._v(" "),s("ul",[s("li",[t._v("如果参数只有一个, 那么表示函数体")]),t._v(" "),s("li",[t._v("如果参数有多个, 那么最后一个参数表示新函数体, 前面的所有参数表示新函数的参数")]),t._v(" "),s("li",[t._v("如果没有参数, 表示创建一个空函数")])]),t._v(" "),s("h3",{attrs:{id:"创建一个打印一句话的函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个打印一句话的函数"}},[t._v("#")]),t._v(" 创建一个打印一句话的函数")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("// 传统的\nfunction foo () {\n    console.log( '你好' );\n}\n// Function\nvar func = new Function( 'console.log( \"你好\" );' );\n// 功能上, 这里 foo 与 func 等价\n")])])]),s("h3",{attrs:{id:"创建一个空函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个空函数"}},[t._v("#")]),t._v(" 创建一个空函数")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("// 传统\nfunction foo () {}\n// Function\nvar func = new Function();\n")])])]),s("h3",{attrs:{id:"传入函数内一个数字-打印该数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传入函数内一个数字-打印该数字"}},[t._v("#")]),t._v(" 传入函数内一个数字, 打印该数字")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('// 传统\nfunction foo ( num ) {\n    console.log( num );\n}\n// Function\nvar func = new Function ( "num" ,"console.log( num );" );\nfunc();\n')])])]),s("h3",{attrs:{id:"利用-function-创建一个函数-要求传入两个数字-打印其和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-function-创建一个函数-要求传入两个数字-打印其和"}},[t._v("#")]),t._v(" 利用 Function 创建一个函数, 要求传入两个数字, 打印其和")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("var func = new Function( 'num1', 'num2', 'console.log( num1 + num2 );' );\n")])])]),s("p",[t._v("练习: 利用 Function 创建一个函数, 要求允许函数调用时传入任意个数参数, 并且函数返回这些数字中最大的数字."),s("br"),t._v("\n练习: 利用 Function 创建一个求三个数中最大数的函数.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("// 传统\nfunction foo ( a, b, c ) {\n    var res = a > b ? a : b;\n    res = res > c ? res : c;\n    return res;\n}\n// Function\nvar func = new Function( 'a', 'b', 'c', 'var res = a > b ? a : b;res = res > c ? res : c;return res;' )\n")])])]),s("p",[t._v("解决代码太长的办法:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("利用 加法 连接字符串")]),t._v(" "),s("p",[t._v("var func = new Function( 'a', 'b', 'c',\n'var res = a > b ? a : b;' +\n'res = res > c ? res : c;' +\n'return res;' );")])]),t._v(" "),s("li",[s("p",[t._v("利用字符串特性( 刚学 )")]),t._v(" "),s("p",[t._v("function foo ( a, b, c ) {\nvar res = a > b ? a : b;\nres = res > c ? res : c;\nreturn res;\n}\nvar func = new Function( 'a', 'b', 'c', 'return foo( a, b, c );' );")])]),t._v(" "),s("li",[s("p",[t._v("ES6 的语法")]),t._v(" "),s("ul",[s("li",[t._v("使用模板字符串")])])]),t._v(" "),s("li",[s("p",[t._v("(最终)利用 DOM 的特性完成该方法")])])]),t._v(" "),s("h2",{attrs:{id:"arguments-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments-对象"}},[t._v("#")]),t._v(" arguments 对象")]),t._v(" "),s("p",[t._v("arguments 是一个伪数组对象. 它表示在函数调用的过程中传入的所有参数的集合."),s("br"),t._v("\n在函数调用过程中没有规定参数的个数与类型, 因此函数调用就具有灵活的特性, 那么为了方便使用,"),s("br"),t._v("\n在 每一个函数调用的过程中, 函数代码体内有一个默认的对象 arguments, 它存储着实际传入的所有参数.")]),t._v(" "),s("p",[t._v("js 中函数并没有规定必须如何传参")]),t._v(" "),s("ol",[s("li",[t._v("定义函数的时候不写参数, 一样可以调用时传递参数")]),t._v(" "),s("li",[t._v("定义的时候写了参数, 调用的时候可以不传参")]),t._v(" "),s("li",[t._v("定义的时候写了一参数, 调用的时候可以随意的传递多个而参数")])]),t._v(" "),s("p",[t._v("在代码设计中, 如果需要函数带有任意个参数的时候, 一般就不带任何参数, 所有的 参数利用 arguments 来获取."),s("br"),t._v("\n一般的函数定义语法, 可以写成:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("function foo ( /* ... */ ) {\n}\n")])])]),s("h3",{attrs:{id:"利用-function-创建一个函数-要求允许函数调用时传入任意个数参数-并且函数返回这些数字中最大的数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-function-创建一个函数-要求允许函数调用时传入任意个数参数-并且函数返回这些数字中最大的数字"}},[t._v("#")]),t._v(" 利用 Function 创建一个函数, 要求允许函数调用时传入任意个数参数, 并且函数返回这些数字中最大的数字.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("function foo ( ) {\n    // 所有的参数都在 arguments 中. 将其当做数组使用\n    // 问题而已转换成在有一个数组中求最大值\n    var args = arguments;\n    var max = args\\[ 0 \\];\n    for ( var i = 1; i < args.length; i++ ) {\n        if ( max < args\\[ i \\] ) {\n            max = args\\[ i \\];\n        }\n    }\n    return max;\n}\n")])])]),s("p",[t._v("练习: 利用 Function 写一个函数, 要求传入任意个数字 求和")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function a(){\n    \x3c!-- var args = [...arguments]; --\x3e\n    var args = Array.prototype.slice.call(arguments)\n    var result = arr.reduce((prv,cur)=>{\n        return prv+cur\n    })\n    return result\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"intanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intanceof"}},[t._v("#")]),t._v(" intanceof")]),t._v(" "),s("p",[s("code",[t._v("array instanceof Array")]),s("br"),t._v("\n判断 构造函数 Array 的原型 是否在 实例对象 array 的原型链存在")])])}),[],!1,null,null,null);n.default=e.exports}}]);