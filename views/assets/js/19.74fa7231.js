(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{201:function(n,s,a){"use strict";a.r(s);var t=a(0),e=Object(t.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"bind、call、apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bind、call、apply","aria-hidden":"true"}},[n._v("#")]),n._v(" bind、call、apply")]),n._v(" "),a("blockquote",[a("p",[n._v("区别")])]),n._v(" "),a("ul",[a("li",[n._v("1、用法不同与传入参数不同\ncall是与bind传入参数是用逗号分开\napply传入参数必须一个数组")]),n._v(" "),a("li",[n._v("2、返回值不同\ncall、apply直接返回计算值或函数直接被调用\nbind返回的是一个新的函数，需要重新调用")]),n._v(" "),a("li",[n._v("3.在Es6中箭头函数call、apply会失效，因为箭头函数中this指向定义时所在的函数体，而不是使用时所在的对象")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var user = { \n    age: 20, \n    init:function(){\n         console.log(this.age)\n          } \n   } \n   var data = {age:40} \n   var s = user.init.bind(data); \n   s()//40\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("blockquote",[a("p",[n._v("相同值")])]),n._v(" "),a("ul",[a("li",[n._v("1、都是用来重新定义this这个对象的")]),n._v(" "),a("li",[n._v("2、第一个参数都是用来改变this的指向对象的")])]),n._v(" "),a("blockquote",[a("p",[n._v("实现一个bind函数")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("if (!Function.prototype.bind) {\n    Function.prototype.bind = function () {\n        var self = this,                        // 保存原函数\n            context = [].shift.call(arguments), // 保存需要绑定的this上下文\n            args = [].slice.call(arguments);    // 剩余的参数转为数组\n        return function () {                    // 返回一个新函数\n            self.apply(context, [].concat.call(args, [].slice.call(arguments)));\n        }\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("blockquote",[a("p",[n._v("应用场景")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//最数组的最大值最小值\n\nMath.Max.apply(null,arr)\nMath.Min.apply(null,arr)\n\n//将类数组转化为数组\nvar a = Array.prototype.slice.call(arr)\n\n//数组追加\n[].push.apply(arr1,arr2)\n\n//判断变量类型\nfunction isArray(){\n    return Object.prototype.toString.call(obj)=='[Object Array  ]'\n}\n\n//利用call与apply做继承\n\nfunction Person(name,age){\n    // 这里的this都指向实例\n    this.name = name\n    this.age = age\n    this.sayAge = function(){\n        console.log(this.age)\n    }\n}\nfunction Female(){\n    Person.apply(this,arguments)//将父元素所有方法在这里执行一遍就继承了\n}\nvar dot = new Female('Dot',2)\n\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);