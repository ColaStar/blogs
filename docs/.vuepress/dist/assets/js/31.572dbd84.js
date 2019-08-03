(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{182:function(t,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"变量对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),e("blockquote",[e("p",[t._v("变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。")])]),t._v(" "),e("h4",{attrs:{id:"全局上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局上下文")]),t._v(" "),e("p",[t._v("全局上下文的变量对象就是全局对象。")]),t._v(" "),e("h4",{attrs:{id:"函数上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数上下文")]),t._v(" "),e("p",[t._v("在函数上下文中，我们用活动对象（activation object, AO）来表示变量对象。")]),t._v(" "),e("p",[t._v("活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。")]),t._v(" "),e("p",[t._v("活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments属性值是 Arguments 对象")]),t._v(" "),e("h4",{attrs:{id:"执行过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行过程")]),t._v(" "),e("blockquote",[e("p",[t._v("执行上下文的代码会分成两个阶段进行处理：分析和执行。")])]),t._v(" "),e("h5",{attrs:{id:"进入执行上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入执行上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 进入执行上下文")]),t._v(" "),e("p",[t._v("当进入执行上下文时，这时候还没有执行代码，")]),t._v(" "),e("p",[t._v("变量对象会包括：")]),t._v(" "),e("blockquote",[e("p",[t._v("函数的所有形参 (如果是函数上下文)")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("由名称和对应值组成的一个变量对象的属性被创建")])]),t._v(" "),e("li",[e("p",[t._v("没有实参，属性值设为 undefined")])])]),t._v(" "),e("blockquote",[e("p",[t._v("函数声明")])]),t._v(" "),e("ul",[e("li",[t._v("由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建")]),t._v(" "),e("li",[t._v("如果变量对象已经存在相同名称的属性，则完全替换这个属性")])]),t._v(" "),e("blockquote",[e("p",[t._v("变量声明")])]),t._v(" "),e("ul",[e("li",[t._v("由名称和对应值（undefined）组成一个变量对象的属性被创建；")]),t._v(" "),e("li",[t._v("如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" function foo(a) {\n  var b = 2;\n  function c() {}\n  var d = function() {};\n  \n  b = 3;\n }\n \n foo(1);\n")])])]),e("p",[t._v("在进入执行上下文后，这时候的AO是：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("AO = {\n arguments: {\n   0: 1,\n   length: 1\n },\n a: 1,\n b: undefined,\n c: reference to function c() {},\n d: undefined\n}\n")])])]),e("h5",{attrs:{id:"代码执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码执行","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码执行")]),t._v(" "),e("p",[t._v("在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值")]),t._v(" "),e("p",[t._v("还是上面的例子，当代码执行完后，这时候的 AO 是")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('AO = {\n    arguments: {\n        0: 1,\n        length: 1\n    },\n    a: 1,\n    b: 3,\n    c: reference to function c(){},\n    d: reference to FunctionExpression "d"\n}\n')])])]),e("h5",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("全局上下文的变量对象初始化是全局对象")]),t._v(" "),e("p",[t._v("函数上下文的变量对象初始化只包括 Arguments 对象")]),t._v(" "),e("p",[t._v("在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值")]),t._v(" "),e("p",[t._v("在代码执行阶段，会再次修改变量对象的属性值")])])},[],!1,null,null,null);a.default=r.exports}}]);