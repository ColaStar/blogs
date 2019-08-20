(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{262:function(n,s,a){"use strict";a.r(s);var t=a(0),e=Object(t.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"执行上下文栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈","aria-hidden":"true"}},[n._v("#")]),n._v(" 执行上下文栈")]),n._v(" "),a("p",[n._v("个人觉得很有意思这个东西。。。")]),n._v(" "),a("p",[n._v("JavaScript的可执行代码（executable code）的类型有哪些？")]),n._v(" "),a("ul",[a("li",[n._v("全局代码")]),n._v(" "),a("li",[n._v("函数代码")]),n._v(" "),a("li",[n._v("eval代码")])]),n._v(" "),a("p",[n._v('当执行到一个函数的时候，就会进行准备工作，这里的"准备工作"，就叫做"执行上下文"（execution context）。')]),n._v(" "),a("h4",{attrs:{id:"猪脚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#猪脚","aria-hidden":"true"}},[n._v("#")]),n._v(" 猪脚")]),n._v(" "),a("p",[n._v("函数太多，为了管理执行上下文。JavaScript引擎创建了执行上下文栈（Execution context stack, ECS）来管理上下文。")]),n._v(" "),a("p",[n._v("为了模拟执行上下文栈的行为，让我们定义执行上下文栈是一个数组：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("ECtack = []\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("h4",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例","aria-hidden":"true"}},[n._v("#")]),n._v(" 案例")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function fun3() {\n  console.log('fun3');\n}\n\nfunction fun2() {\n  fun3();\n}\n\nfunction fun1() {\n  fun2();\n}\n\nfun1();\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("blockquote",[a("p",[n._v("当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 伪代码\n\n// fun1()\nECStack.push(<fun1> functionContext);\n\n// fun1中竟然调用了fun2，还要创建fun2的执行上下文\nECStack.push(<fun2> functionContext);\n\n// 擦，fun2还调用了fun3！\nECStack.push(<fun3> functionContext);\n\n/ fun3执行完毕\nECStack.pop();\n\n// fun2执行完毕\nECStack.pop();\n\n// fun1执行完毕\nECStack.pop();\n\n// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);