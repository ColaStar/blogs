(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{173:function(n,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"手写bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手写bind","aria-hidden":"true"}},[n._v("#")]),n._v(" 手写bind")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Function.prototype.bind = function(context){\n    if(typeof this !== function){\n        throw Error('this is not a function')\n    }\n    var argus = Array.prototype.slice.call(arguments,1);//拿回绑定bind时用户传入的参数\n    var truFn = function(){}//创建一个空的函数做周转，防止用户改变原函数方法。\n    var _this = this\n    var returnFn = function() {\n        var bindArgs = Array.prototype.slice.call(arguments)\n      _this.apply(this in truFn ? this : context,argus.concat(bindArgs))\n    }\n    truFn.prototype = this.prototype;\n    returnFn.prototype = new truFn()\n    return returnFn\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br")])])])},[],!1,null,null,null);t.default=a.exports}}]);