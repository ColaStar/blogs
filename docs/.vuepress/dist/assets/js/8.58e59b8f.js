(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(e,n,t){"use strict";t.r(n);var a=t(0),r=Object(a.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"jq技术内幕"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jq技术内幕","aria-hidden":"true"}},[e._v("#")]),e._v(" jq技术内幕")]),e._v(" "),t("h4",{attrs:{id:"工厂模式形成的闭包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式形成的闭包","aria-hidden":"true"}},[e._v("#")]),e._v(" 工厂模式形成的闭包")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("(function(window, undefined) {\n  // undefined 在外面是关键字，在里面就是undefined变量\n  undefined = 42; //闭包，保护内部的变量。\n  alert(42)\t// 42\n})(window);\nundefined = 42;\nalert(undefined);\t// undefined;\n")])])]),t("h4",{attrs:{id:"jquery-jquery-fn-init-why"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery-jquery-fn-init-why","aria-hidden":"true"}},[e._v("#")]),e._v(" jquery = jquery.fn.init?    why?")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("(function(window, undefined) {\n  var jQuery = function(selector, context) {\n    // 默默的给做了一个 new\n    return jQuery.fn.init(selector, context); // 这段代码被传为佳话\n  };\n  jQuery.fn = jQuery.prototype = {\n    init: function(select, context){\n      \n    }\n  };\n  // jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype ???\n  // 为什么绕？ 有什么好处?\n  // 绝妙的地方\n  // 要把 jQuery.fn.init.prototype 给绕出来\n  jQuery.fn.init.prototype = jQuery.fn\n  \n  // 1. 构造函数 2. prototype的方法\n  // new 第一步 返回一个 init 的函数，原型链上挂载了一个init的函数 没有主动执行\n  // init没调用，被搁置了\n  // 构造函数内部的 return new\n  // jQuery\n  \n  // jQuery.fn.init.prototype = jQuery.fn = jQuery\n  // 把各自的原型链去掉\n  // jQuery.fn.init = jQuery\n  // new jQuery.fn.init 相当于 new 自己\n  \n  // new 自己就好了，为什么就要绕？\n  // 为了得到 jQuery 原型链的方法。jQuery.fn上拥有原型链上的所有方法\n})(window)\n")])])]),t("p",[e._v("可以在$.fn()上挂载方法写插件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$.fn.a=function(){console.log(2)}\n$.fn.a()\n或用jQuery.fn.extend(object)来扩展方法\njQuery.extend(object)  //用一个或多个其他对象来扩展一个对象，返回被扩展的对象\n")])])]),t("h4",{attrs:{id:"隐式循环和链式调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐式循环和链式调用","aria-hidden":"true"}},[e._v("#")]),e._v(" 隐式循环和链式调用")]),e._v(" "),t("ul",[t("li",[e._v("链式调用")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var a = {\n  a: function(argument) {\n    console.log("first");\n    return this\n  },\n  b: function(argument) {\n    console.log("two");\n    return this\n  },\n  c: function(argument) {\n    console.log("three");\n    return this\n  }\n};\n\ns.a().b().c();\n')])])]),t("ul",[t("li",[e._v("隐式循环"),t("br"),e._v("\n内部存在隐式迭代，它会对匹配到的所有元素进行循环遍历，执行相应的方法；无需我们再手动地进行循，方便我们使用。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 设置 .primary 元素的文字颜色为 #188eee\n \n// 原生 JS\nvar primary = document.getElementsByClassName('primary');\nfor(var i = 0, len = primary.length; i < len; i++) {\n    primary[i].style.color = '#188eee';\n}\n \n// jQuery\n$('.primary').css('color', '#188eee');\n")])])]),t("h4",{attrs:{id:"jquery里的on，live方法实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery里的on，live方法实现原理","aria-hidden":"true"}},[e._v("#")]),e._v(" jQuery里的on，live方法实现原理")]),e._v(" "),t("p",[e._v("主要是运用了事件代理")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function live(targetObject, type, fn) {\n  document.onclick = function(event) {\n    var e = event ? event : window.event;\n    addRow();\n    alert(1);\n    // 解决浏览器兼容的问题，e.srcElement IE, e.target FF\n    var target = e.srcElement || e.target;\n    if (e.type == type && target.tagName.toLocaleLowerCase() == targetObject) {\n      alert(3);\n      fn();\t// 如果元素类型和事件类型同时匹配，则执行函数\n    }\n  }\n}\n")])])]),t("h4",{attrs:{id:"jquery里的val-方法实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery里的val-方法实现原理","aria-hidden":"true"}},[e._v("#")]),e._v(" jQuery里的val()方法实现原理")]),e._v(" "),t("p",[e._v("函数的重载：同样的函数传递不同的参数产生不同的结果。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$('.test').val();\t// 不传参数， 取值\n$('.test').val(\"test\");\t// 传了参数，赋值\n// $() -> 函数 函数的重载\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function addMethod(obj, name, f) {\n  var old = obj[name];\n  obj[name] = function() {\n    if (f.length === arguments.length) {\n      return f.apply(this, arguments)\n    } else {\n      return old.apply(this, arguments)\n    }\n  }\n}\n\nvar people = {\n  name: ['张三', '李四', '王二麻']\n};\n\nvar find0 = function() {\n  return this.name;\n};\n\nvar find1 = function(name) {\n  return name+'在这';\n};\n\nvar find2 = function(a,b) {\n  return a+b;\n};\naddMethod(people, 'find', find0);\naddMethod(people, 'find', find1);\npeople.find();\npeople.find('张三');\npeople.find('张三','家在哪？');\n")])])]),t("h4",{attrs:{id:"短路表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路表达式","aria-hidden":"true"}},[e._v("#")]),e._v(" 短路表达式")]),e._v(" "),t("p",[e._v("&& ||")]),e._v(" "),t("p",[e._v("1、逻辑与 && 的运算方式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var a = 1 && 2;\n\nconsole.log(a); //返回的结果为 2\n")])])]),t("p",[e._v("如果逻辑与运算符左边的值布尔转换后为true，那么返回右边的值（不管右边的值是真还是假）。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var a = false && 2;\n\nconsole.log(a); //返回的结果为 false\n")])])]),t("p",[e._v("如果逻辑与运算符左边的值布尔转换后为false，那么返回左边的值，但是当逻辑与的左边为 null/NaN/undefined ，结果就会得到null/NaN/undefined。")]),e._v(" "),t("p",[e._v("2、逻辑或 || 的运算方式")]),e._v(" "),t("p",[e._v("如果逻辑或运算符左边的值布尔转换后为false，那么返回右边的值（不管右边的值是真还是假）。")]),e._v(" "),t("p",[e._v("如果逻辑或运算符左边的值布尔转换后为true，那么返回左边的值，如果两个操作数都是是null（NaN/undefined），返回null（NaN/undefined）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var a = false || 2;\n\nconsole.log(a); //返回的结果为2\n\nvar a = true || 2;\n\nconsole.log(a); //返回的结果为 true\n")])])]),t("h4",{attrs:{id:"钩子机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#钩子机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 钩子机制")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {\n    class2type["[object " + name + "]"] = name.toLocaleLowerCase();\n  })\n')])])]),t("h4",{attrs:{id:"ready"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ready","aria-hidden":"true"}},[e._v("#")]),e._v(" ready")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 实现 ready\n1.标准浏览器下的触发 \n\n当浏览器是基于标准浏览器时，会在加载完DOM结构后触发“DOMContentLoaded”事件，jquery内部就用此事件作为ready的触发源。\n\ndocument.addEventListener( "DOMContentLoaded", completed, false );\n\n\n2.IE浏览器下的触发\n\n当浏览器是IE浏览器时，因为IE浏览器（蛋疼并强大着）不支持“DOMContentLoaded”事件，所以只能另谋它法，\n\nE下的做法是用“document.documentElement.doScroll("left")”的方法去滚动页面，如果没加载完就等个50毫秒后继续滚，直到滚的动后就触发ready。\n')])])])])},[],!1,null,null,null);n.default=r.exports}}]);