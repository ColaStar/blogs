(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{180:function(n,s,a){"use strict";a.r(s);var t=a(0),e=Object(t.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"javascript面向切面编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript面向切面编程","aria-hidden":"true"}},[n._v("#")]),n._v(" JavaScript面向切面编程")]),n._v(" "),a("p",[n._v("Aspect Oriented Programming(AOP)，面向切面编程，是一个比较热门的话题。AOP主要实现的"),a("strong",[n._v("目的")]),n._v("是针对业务处理过程中的切面进行提取，它所面对的是处理过程中的某个步骤或阶段，以获得逻辑过程中各部分之间低耦合性的隔离效果,其中“通知”是切面的具体实现，分为before（前置通知）、after（后置通知）、around（环绕通知）。")]),n._v(" "),a("p",[n._v("在前端的常见需求中，有以下一些业务可以使用 AOP 将其从核心关注点中分离出来")]),n._v(" "),a("ul",[a("li",[n._v("Node.js 日志log")]),n._v(" "),a("li",[n._v("埋点、数据上报")]),n._v(" "),a("li",[n._v("性能分析、无侵入的统计函数执行时间")]),n._v(" "),a("li",[n._v("给ajax请求动态添加参数、动态改变函数参数")]),n._v(" "),a("li",[n._v("分离表单请求和验证")]),n._v(" "),a("li",[n._v("防抖与节流")]),n._v(" "),a("li",[n._v("防止window.onload被二次覆盖.")])]),n._v(" "),a("p",[n._v("举个例子，我们现在提供一个查询学生信息的服务，但是我们希望记录有谁进行了这个查询。如果按照传统的OOP的实现的话，那我们实现了一个查询学生信息的服务接口(StudentInfoService)和其实现 类 （StudentInfoServiceImpl.java），同时为了要进行记录的话，那我们在实现类(StudentInfoServiceImpl.java)中要添加其实现记录的过程。这样的话，假如我们要实现的服务有多个呢？那就要在每个实现的类都添加这些记录过程。这样做的话就会有点繁琐，而且每个实现类都与记录服务日志的行为紧耦合，违反了面向对象的规则。那么怎样才能把记录服务的行为与业务处理过程中分离出来呢？看起来好像就是查询学生的服务自己在进行，但却是背后日志记录对这些行为进行记录，并且查询学生的服务不知道存在这些记录过程，这就是我们要讨论AOP的目的所在。AOP的编程，好像就是把我们在某个方面的功能提出来与一批对象进行隔离，这样与一批对象之间降低了耦合性，可以就某个功能进行编程。")]),n._v(" "),a("p",[n._v("例子:")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('Function.prototype.before=function(fn){\n    //保存原函数的引用\n    var __self=this;\n    //返回包含了原函数和新函数的"代理"函数\n    return function(){\n    //执行新函数,且保证this不被劫持,新函数接受的参数\n    //也会被原封不动地传入原函数,新函数在原函数之前执行\n        if(fn.apply(this,arguments) == false){\n            return false\n        };\n    //执行原函数并返回原函数的执行结果\n    //并且保证this不被劫持\n        return __self.apply(this,arguments);\n    }\n}\nFunction.prototype.after=function(fn){\n    var __self=this;\n    return function(){\n        var result=__self.apply(this,arguments);\n        if(result == false){\n            return false\n        }\n        fn.apply(this,arguments);\n        return result;\n    }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br")])]),a("p",[a("code",[n._v("Function.prototype.before")]),n._v("接受一个函数当作参数,这个函数即为新添加的函数,它装载了新添加的功能代码")]),n._v(" "),a("p",[n._v('接下来把当前的this保存起来,这个this指向原函数,然后返回一个"代理"函数,这个""代理"函数只是结构上像代理而已,并不承当代理的职责(比如控制对象的访问等).它的工作是把请求分别转发给新添加的函数和原函数,且负责保证它们的执行顺序,让新添加的函数在原函数之前执行(前置装饰),这样就实现了动态装饰的效果')]),n._v(" "),a("p",[n._v("我们注意到,通过"),a("code",[n._v("Function.prototype.apply")]),n._v("来动态传入正确的this,保证了函数在被装饰之后,this不会被劫持\n"),a("code",[n._v("Function.prototype.after")]),n._v("的原理跟"),a("code",[n._v("Function.prototype.before")]),n._v("一样,唯一不同的地方在于让新添加的函数在原函数执行之后再执行")]),n._v(" "),a("h2",{attrs:{id:"aop的应用实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop的应用实例","aria-hidden":"true"}},[n._v("#")]),n._v(" AOP的应用实例")]),n._v(" "),a("p",[n._v("用AOP装饰函数的技巧在实际开发中非常有用.不论是业务代码的编写,还是在框架层面,我们都可以把行为依照职责分成粒度更细的函数,随后通过装饰把它们合并在一起,这有助于我们编写一个松耦合和高复用性的系统.")]),n._v(" "),a("h3",{attrs:{id:"数据统计上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据统计上报","aria-hidden":"true"}},[n._v("#")]),n._v(" 数据统计上报")]),n._v(" "),a("p",[n._v("分离业务代码和数据统计代码,无论在什么语言中,都是AOP的经典应用之一.在项目开发的结尾阶段难免要加上很多统计数据的代码,这些过程很可能让我们被迫改动早已封装好的函数.")]),n._v(" "),a("p",[n._v("比如页面中有一个登录button,点击这个button会弹出登录浮层,与此同时要进行数据上报,来统计有多少用户点击了这个登录button")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<html>\n<button id="button" tag="login">点击打开登录浮层</button>\n<script>\nvar showLogin = function() {\n    console.log("打开登录浮层");\n    log(this.getAttribute(\'tag\'));\n}\nvar log = function(tag) {\n    console.log("上传标签为:" + tag);\n    //(new Image).src="http://xxx.com/report?tag="+tag; //真正的上传代码略\n}\ndocument.getElementById(\'button\').onclick = showLogin;\n<\/script>\n</html>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("p",[n._v("我们看到在showLogin函数里,既要负责打开登录浮层,又要负责数据上传,这是两个层面的功能,在此处却被耦合进一个函数里.使用AOP分离之后,代码如下:")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<html>\n<button id="button" tag="login">点击打开登录浮层</button>\n<script>\nFunction.prototype.after = function(afterfn) {\n    var __self = this;\n    return function() {\n        var ret = __self.apply(this, arguments);\n        afterfn.apply(this, arguments);\n        return ret;\n    }\n}\nvar showLogin=function(){\n  console.log("打开登录浮层");\n}\nvar log=function(){\n  console.log("上传标签为:"+this.getAttribute(\'tag\'));\n}\nshowLogin=showLogin.after(log);\ndocument.getElementById(\'button\').onclick=showLogin;\n<\/script>\n</html>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("h2",{attrs:{id:"用aop动态改变函数的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用aop动态改变函数的参数","aria-hidden":"true"}},[n._v("#")]),n._v(" 用AOP动态改变函数的参数")]),n._v(" "),a("p",[n._v("观察"),a("code",[n._v("Function.prototype.before")]),n._v("方法:")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('Function.prototype.before=function(beforefn){\n    var __self=this;\n    //保存原函数的引用\n    return function(){\n    //返回包含了原函数和新函数的"代理"函数\n        beforefn.apply(this,arguments);//(1)\n    //执行新函数,且保证this不被劫持,新函数接受的参数\n    //也会被原封不动地传入原函数,新函数在原函数之前执行\n        return __self.apply(this,arguments);//(2)\n    //执行原函数并返回原函数的执行结果\n    //并且保证this不被劫持\n    }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("p",[n._v("从这段代码的(1)处和(2)处可以看到,"),a("code",[n._v("beforefn")]),n._v("和原函数"),a("code",[n._v("__self")]),n._v("共用一组参数列表"),a("code",[n._v("arguments")]),n._v(",当我们在"),a("code",[n._v("beforefn")]),n._v("的函数体内改变"),a("code",[n._v("arguments")]),n._v("的时候,原函数__self接收的参数列表自然也会变化.")]),n._v(" "),a("p",[n._v("下面的例子展示了如何通过Function.prototype.before方法给函数func的参数param动态地添加属性b:")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('Function.prototype.before = function(beforefn) {\n    var __self = this;\n    //保存原函数的引用\n    return function() {\n        //返回包含了原函数和新函数的"代理"函数\n        beforefn.apply(this, arguments); //(1)\n        //执行新函数,且保证this不被劫持,新函数接受的参数\n        //也会被原封不动地传入原函数,新函数在原函数之前执行\n        return __self.apply(this, arguments); //(2)\n        //执行原函数并返回原函数的执行结果\n        //并且保证this不被劫持\n    }\n}\nvar func = function(param) {\n    console.log(param);\n}\nfunc = func.before(function(param) {\n    param.b = \'b\';\n})\nfunc({a: "a"}); //{a:"a",b:"b"}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br")])]),a("h2",{attrs:{id:"aop-实现ajax回调函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop-实现ajax回调函数","aria-hidden":"true"}},[n._v("#")]),n._v(" AOP 实现ajax回调函数")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\nfunction actsAsDecorator(object) { \nobject.setupDecoratorFor = function(method) { \nif (! ('original_' + method in object) ) { \nobject['original_' + method] = object[method]; \nobject['before_' + method] = [ ]; \nobject['after_' + method] = [ ]; \nobject[method] = function() { \nvar i; \nvar b = this['before_' + method]; \nvar a = this['after_' + method]; \nvar rv; \nfor (i = 0; i < b.length; i++) { \nb[i].call(this, arguments); \n} \nrv = this['original_' + method].apply(this, arguments); \nfor (i = 0; i < a.length; i++) { \na[i].call(this, arguments); \n} \nreturn rv; \n} \n} \n}; \nobject.before = function(method, f) { \nobject.setupDecoratorFor(method); \nobject['before_' + method].unshift(f); \n}; \nobject.after = function(method, f) { \nobject.setupDecoratorFor(method); \nobject['after_' + method].push(f); \n}; \n} \n/** \nInvoking \n*/ \nfunction Test(){ \nthis.say1 = function(s){ \nalert(s); \n} \nthis.say2 = function(s){ \nalert(s); \n} \n} \nvar t = new Test(); \nactsAsDecorator(t); \nt.before(\"say1\",beforeHander); \nt.after(\"say2\",afterHander); \ntest(); \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br")])]),a("h2",{attrs:{id:"分离表单请求和校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分离表单请求和校验","aria-hidden":"true"}},[n._v("#")]),n._v(" 分离表单请求和校验")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var validata_rules = {\n    no_empty: function(value){\n            return value.length !== '';\n    },\n    max_length:function(value){\n         return value.length > length;\n    }\n}\n\nvar validata = function(){\n    for(var i in validata_rules){\n        if(validata_rules[i].apply(this,arguments === false)){\n            return false\n        }\n    }\n}\n\nvar send = function(value){\n    if(validata(value) == false){\n        return ;\n    }\n    from.send()\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);