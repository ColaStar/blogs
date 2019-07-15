(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{188:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"闭包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[s._v("#")]),s._v(" 闭包")]),s._v(" "),n("p",[s._v("MDN 对闭包的定义为")]),s._v(" "),n("blockquote",[n("p",[s._v("那些能够访问自由变量的函数。\n那什么是自由变量呢？\n自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量\n闭包 = 函数 + 函数能够访问的自由变量")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var a = 1;\n\nfunction foo() {\n  console.log(a);\n}\n\nfoo();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("foo 函数可以访问变量 a，但是 a 既不是 foo 函数的局部变量，也不是 foo 函数的参数，所以 a 就是自由变量。")]),s._v(" "),n("p",[s._v("那么，函数 foo + foo 函数访问的自由变量 a 不就是构成了一个闭包嘛……然而不是的。")]),s._v(" "),n("p",[s._v("ECMAScript中，闭包指的是：")]),s._v(" "),n("p",[s._v("1.从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。")]),s._v(" "),n("p",[s._v("2.从实践角度：以下函数才算是闭包：")]),s._v(" "),n("ul",[n("li",[s._v("即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）")]),s._v(" "),n("li",[s._v("在代码中引用了自由变量")])]),s._v(" "),n("p",[s._v("实例分析")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var scope = "global scope";\nfunction checkscope() {\n  var scope = "local scope";\n  function f() {\n    return scope;\n  }\n  return f;\n}\n\nvar foo = checkscope();\nfoo();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("首先我们要分析一下这段代码中执行上下文栈和执行上下文的变化情况。")]),s._v(" "),n("p",[s._v("简要的执行过程：")]),s._v(" "),n("ul",[n("li",[s._v("1、进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈")]),s._v(" "),n("li",[s._v("2、全局执行上下文初始化")]),s._v(" "),n("li",[s._v("3、执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈")]),s._v(" "),n("li",[s._v("4、checkscope 执行上下文初始化，创建变量对象、作用域链、this等")]),s._v(" "),n("li",[s._v("5、checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出")]),s._v(" "),n("li",[s._v("6、执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈")]),s._v(" "),n("li",[s._v("7、f 执行上下文初始化，创建变量对象、作用域链、this等")]),s._v(" "),n("li",[s._v("f 函数执行完毕，f 函数上下文从执行上下文栈中弹出")])]),s._v(" "),n("p",[s._v("当 f 函数执行的时候，checkscope 函数上下文已经被销毁了啊(即从执行上下文栈中被弹出)，怎么还会读取到 checkscope 作用域下的 scope 值呢？")]),s._v(" "),n("p",[s._v("当我们了解了具体的执行过程后，我们知道 f 执行上下文维护了一个作用域链：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("fContext = {\n  Scope: [AO, checkscopeContext.AO, globalContext.VO]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("对的，就是因为这个作用域链，f 函数依然可以读取到 checkscopeContext.AO 的值，说明当 f 函数引用了 checkscopeContext.AO 中的值的时候，即使 checkscopeContext 被销毁了，但是 JavaScript 依然会让 checkscopeContext.AO 活在内存中，f 函数依然可以通过 f 函数的作用域链找到它，正是因为 JavaScript 做到了这一点，从而实现了闭包这个概念。")]),s._v(" "),n("h2",{attrs:{id:"必刷题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#必刷题","aria-hidden":"true"}},[s._v("#")]),s._v(" 必刷题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var data = [];\n\nfor (var i = 0; i < 3; i++) {\n  data[i] = function() {\n    console.log(i);\n  };\n}\n\ndata[0]();\t// 3\ndata[1]();\t// 3\ndata[2](); // 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("当执行到 data[0]函数之前，此时全局上下文的 VO 为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("globalContext = {\n  VO: {\n    data: [...],\n    i: 3\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("当执行到data[0]函数之前，此时全局上下文的VO为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data[0].Context = {\n  Scope: [AO, globalContext.VO]\n}\ndata[0]Context 的 AO 并没有 i 值，所以会从 globalContext.VO 中查找，i 为 3，所以打印的结果就是 3。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("data[1] 和 data[2] 是一样的道理。")]),s._v(" "),n("p",[s._v("所以让我们改成闭包看看：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var data = [];\n\nfor (var i = 0; i < 3; i++) {\n  data[i] = (function(i) {\n    return function() {\n      console.log(i);\n    }\n  })(i);\n}\n\ndata[0]();\ndata[1]();\ndata[2]();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("当执行到 data[0] 函数之前，此时全局上下文的 VO 为:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("globalContext = {\n    VO: {\n        data: [...],\n        i: 3\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("当执行 data[0] 函数的时候，data[0] 函数的作用域链发生了改变：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data[0]Context = {\n  Scope: [AO, 匿名函数Context.AO, globalContext.VO]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("匿名函数执行上下文的AO为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("匿名函数Context = {\n  AO: {\n    arguments: {\n      0: 0,\n      length: 1\n    },\n    i: 0\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("data[0]Context 的 AO 并没有 i 值，所以会沿着作用域链从匿名函数 Context.AO 中查找，这时候就会找 i 为 0，找到了就不会往 globalContext.VO 中查找了，即使 globalContext.VO 也有 i 的值(值为3)，所以打印的结果就是0。")])])},[],!1,null,null,null);a.default=t.exports}}]);