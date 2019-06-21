(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{158:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"作用域链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域链","aria-hidden":"true"}},[s._v("#")]),s._v(" 作用域链")]),s._v(" "),t("h4",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("p",[s._v("当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级（词法层面上的父级）执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。")]),s._v(" "),t("h4",{attrs:{id:"函数创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数创建","aria-hidden":"true"}},[s._v("#")]),s._v(" 函数创建")]),s._v(" "),t("p",[s._v("函数的作用域在函数定义的时候就决定了。这是因为函数有一个内部属性[[scope]]属性，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解[[scope]]就是所有父变量对象的层级链。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function foo() {\n  function bar() {\n    // ...\n  }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("函数创建时，各自的 [[scope]] 为:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("foo.[[scope]] = [\n  globalContext.VO\n];\n\nbar.[[scope]] = [\n\t\tfooContext.AO,\n\t\tglobalContext.VO\t\n]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"函数激活"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数激活","aria-hidden":"true"}},[s._v("#")]),s._v(" 函数激活")]),s._v(" "),t("p",[s._v("当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用域链的前端。")]),s._v(" "),t("p",[s._v("这时候执行上下文的作用域链，我们命名为 Scope：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Scope = [AO].concat([[Scope]])\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);