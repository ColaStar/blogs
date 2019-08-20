(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{253:function(n,s,a){"use strict";a.r(s);var t=a(0),e=Object(t.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"bind函数模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bind函数模拟实现","aria-hidden":"true"}},[n._v("#")]),n._v(" bind函数模拟实现")]),n._v(" "),a("blockquote",[a("p",[n._v("bind()方法会创建一个新函数。当这个新函数被调用时，bind()的第一个参数将作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数。")])]),n._v(" "),a("h4",{attrs:{id:"bind函数有俩个特点："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bind函数有俩个特点：","aria-hidden":"true"}},[n._v("#")]),n._v(" bind函数有俩个特点：")]),n._v(" "),a("ul",[a("li",[n._v("1.返回一个新的函数")]),n._v(" "),a("li",[n._v("2.可以传入参数，以逗号隔开")])]),n._v(" "),a("h4",{attrs:{id:"返回函数的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回函数的模拟实现","aria-hidden":"true"}},[n._v("#")]),n._v(" 返回函数的模拟实现")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var foo = {\n  value: 1\n};\n\nfunction bar() {\n  console.log(this.value);\n}\n\n// 返回了一个函数\nvar bindFoo = bar.bind(foo);\n\nbindFoo();\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("h4",{attrs:{id:"关于指定-this-的指向，我们可以使用call或者apply实现。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于指定-this-的指向，我们可以使用call或者apply实现。","aria-hidden":"true"}},[n._v("#")]),n._v(" 关于指定 this 的指向，我们可以使用call或者apply实现。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Function.prototype.bind2 = function(context) {\n  var self = this;\n  return function() {\n    return self.apply(context);\n  }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("p",[n._v("此外，之所以 return self.apply(context)，是考虑到绑定函数可能是有返回值的")]),n._v(" "),a("h4",{attrs:{id:"传参的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传参的模拟实现","aria-hidden":"true"}},[n._v("#")]),n._v(" 传参的模拟实现")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Function.prototype.bind2 = function (context) {\n  var _self = this;\n  \n  // 获取 bind2 函数从第二个参数到最后一个参数\n  var args = Array.prototype.slice.call(arguments, 1);\n  \n  return function() {\n    // 这个时候的 arguments 是指bind返回的函数传入的参数。\n    var bindArgs = Array.prototype.slice.call(arguments);\n    return _self.apply(context, args.concat(bindArgs));\n  }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("blockquote",[a("p",[n._v("一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。")])]),n._v(" "),a("p",[n._v("也就是说当 bind 返回的函数作为构造函数的时候，bind时指定的this值会失效，但传入的参数依然生效。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var value = 2;\n\nvar foo = {\n  value: 1\n};\n\nfunction bar(name, age) {\n  this.habit = 'shopping';\n  console.log(this.value);\n  console.log(name);\n  console.log(age);\n}\n\nbar.prototype.friend = 'kevin';\n\nvar bindFoo = bar.bind(foo, 'daisy');\n\nvar obj = new bindFoo('18');\n// undefined\n// daisy\n// 18\nconsole.log(obj.habit);\nconsole.log(obj.friend);\n// shopping\n// kevin\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br")])]),a("p",[n._v("尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 第三版\nFunction.prototype.bind2 = function (context) {\n  var self = this;\n  var args = Array.prototype.slice.call(arguments, 1);\n  \n  var fBound = function() {\n    var bindArgs = Array.prototype.slice.call(arguments);\n    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值\n    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性\n    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context\n    return self.apply(this instanceof fBound ? this : context, args,concat(bindArgs));\n  };\n  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值\n  fBound.prototype = this.prototype;\n  return fBound;\n}\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br")])]),a("h4",{attrs:{id:"构造函数效果的优化实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数效果的优化实现","aria-hidden":"true"}},[n._v("#")]),n._v(" 构造函数效果的优化实现")]),n._v(" "),a("p",[n._v("但是在这个写法中，我们直接将"),a("strong",[n._v("fBound.prototype = this.prototype")]),n._v("，我们直接修改 "),a("strong",[n._v("fBound.prototype 的时候，也会直接修改绑定函数的 prototype")]),n._v("。这个时候，我们可以通过一个"),a("strong",[n._v("空函数来进行中转")]),n._v("：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// Version 4\nFunction.prototype.bind2 = function (context) {\n  var self = this;\n  var args = Array.prototype.slice.call(arguments, 1);\n  \n  var fNOP = function () {};\n  \n  var fBound = function () {\n    var bindArgs = Array.prototype.slice.call(arguments);\n    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))\n  }\n  \n  fNOP.prototype = this.prototype;\n  fBound.prototype = new fNOP();\n  return fBound;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br")])]),a("h4",{attrs:{id:"总结-最终版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结-最终版本","aria-hidden":"true"}},[n._v("#")]),n._v(" 总结----最终版本")]),n._v(" "),a("blockquote",[a("p",[n._v("处理返回函数\n1.指定 this 的指向，我们可以使用call或者apply实现\n2.考虑返回函数是有返回值的；\n2.返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值，可以通过一个空函数来进行中转;即空函数的prototype = 返回函数的prototype、绑定函数等于空函数的实例\n处理传入参数\n1.bind函数中第二个参数到最后一个参数；\n2.bind函数返回函数传入的参数")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('Function.prototype.bind2 = function(context){\n    if (typeof this !== "function") {\n    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");\n  }\n     var _self = this;\n     var args = Array.prototype.slice.call(arguments,1);\n     var trfn = function(){}\n     var returnFn = function(){\n         var bindArgs = Array,prototype.slice.call(arguments);\n         return _self.apply(this in trfn ? this : context,args.concat(bindargs))\n     }\n     trfn.prototype = this.prototype;\n     returnFn.prototype = new trfn()\n     return returnFn\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);