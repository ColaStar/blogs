(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{180:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"作用域链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域链","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),e("h4",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),e("p",[t._v("当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级（词法层面上的父级）执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。")]),t._v(" "),e("h4",{attrs:{id:"函数创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数创建")]),t._v(" "),e("p",[t._v("函数的作用域在函数定义的时候就决定了。这是因为函数有一个内部属性[[scope]]属性，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解[[scope]]就是所有父变量对象的层级链。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function foo() {\n  function bar() {\n    // ...\n  }\n}\n")])])]),e("p",[t._v("函数创建时，各自的 [[scope]] 为:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("foo.[[scope]] = [\n  globalContext.VO\n];\n\nbar.[[scope]] = [\n\t\tfooContext.AO,\n\t\tglobalContext.VO\t\n]\n")])])]),e("h4",{attrs:{id:"函数激活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数激活","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数激活")]),t._v(" "),e("p",[t._v("当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用域链的前端。")]),t._v(" "),e("p",[t._v("这时候执行上下文的作用域链，我们命名为 Scope：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Scope = [AO].concat([[Scope]])\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);