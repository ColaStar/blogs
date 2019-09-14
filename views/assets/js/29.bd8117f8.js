(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{313:function(n,s,a){"use strict";a.r(s);var e=a(0),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"call-和-apply-的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-和-apply-的模拟实现","aria-hidden":"true"}},[n._v("#")]),n._v(" call 和 apply 的模拟实现")]),n._v(" "),a("hr"),n._v(" "),a("blockquote",[a("p",[n._v("call: 在使用一个指定的 this 值和若干个指定的参数的前提下调用某个函数或方法。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var foo = {\n  value: 1\n};\n\nfunction bar() {\n  console.log(this.value);\n}\n\nbar.call(foo);\t// 1\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("p",[n._v("注意有俩点：")]),n._v(" "),a("ul",[a("li",[n._v("call 改变了 this 的指向，指向到 foo")]),n._v(" "),a("li",[n._v("bar 函数执行了")])]),n._v(" "),a("h4",{attrs:{id:"version-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-1","aria-hidden":"true"}},[n._v("#")]),n._v(" Version 1")]),n._v(" "),a("p",[n._v("1.将函数设为对象的属性\n2.执行该函数\n3.删除该属性")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("第一步：\nfoo.fn = bar\nfoo.fn();\ndelete foo.fn;\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("bar.call(foo);\t// 1\nFunction.prototype.call2 = function(context){\ncontext.fn = this;\ncontext.fn();\ndelete context.fn();\n}\n\n// 测试一下\nvar foo = {\n  value: 1\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n\nbar.call2(foo); // 1\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br")])]),a("h4",{attrs:{id:"version-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-2","aria-hidden":"true"}},[n._v("#")]),n._v(" Version 2")]),n._v(" "),a("p",[n._v("加入不定长参数。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Function.prototype.call2(context){\n    context.fn = this;\n    var args = [];\n    for(var i = 1;i<arguments.length;i++){\n        args.push('arguments[' + i + ']');//执行的是arguments字符串方便下边eval\n    }\n    eval('context.fn(' + args    + ')');\n    delete context.fn\n}\n\n// 测试一下\nvar foo = {\n  value: 1\n};\n\n\nfunction bar(name, age) {\n  console.log(name);\n  console.log(age);\n  console.log(this.value);\n}\n\nbar.call2(foo, 'kevin', 18);\n\n// kevin\n// 18\n// 1\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("h4",{attrs:{id:"version-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-3","aria-hidden":"true"}},[n._v("#")]),n._v(" Version 3")]),n._v(" "),a("p",[n._v("1.this参数可以传null, 当为null的时候，视为指向window\n2.函数是可以由返回值的")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Function.prototype.call2 = function(context){\n   var context = context || window;\n   context.fn = this;\n   var args = [];\n   for(var i = 1;i<arguments.length;i++){\n      args.push('arguments[' + i + ']');\n   }\n    var result = eval('context.fn(' + args + ')');\n   delete context.fn\n   return result\n}\n\n// 测试一下\nvar value = 2;\n\nvar obj = {\n  value: 1\n};\n\nfunction bar(name, age) {\n  console.log(this.value);\n  return {\n    value: this.value,\n    name: name,\n    age: age\n  }\n}\n\nbar.call2(null);\t// 2\n\nconsole.log(bar.call2(obj, 'kevin', 18));\n// 1\n// Object {\n//    value: 1,\n//    name: 'kevin',\n//    age: 18\n// }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br")])]),a("h4",{attrs:{id:"模拟call总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟call总结","aria-hidden":"true"}},[n._v("#")]),n._v(" 模拟call总结")]),n._v(" "),a("ul",[a("li",[n._v("将函数设为对象的方法")]),n._v(" "),a("li",[n._v("执行该方法")]),n._v(" "),a("li",[n._v("删除该方法")]),n._v(" "),a("li",[n._v("加入不定长的参数")]),n._v(" "),a("li",[n._v("考虑null参数情况：this参数可以传null, 当为null的时候，视为指向window")]),n._v(" "),a("li",[n._v("返回函数返回值")])]),n._v(" "),a("h2",{attrs:{id:"apply的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply的模拟实现","aria-hidden":"true"}},[n._v("#")]),n._v(" apply的模拟实现")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Function.prototype.apply = function(context,arr){\n\n    var context = context || window;\n    context.fn = this;\n    var result;\n    if(!arr){\n        context.fn();\n    }else{\n    var args = [];\n    for(var i = 0;i<arr.length;i++){\n        args.push('arr['+i+']')\n    }    \n    //'' + [1,2,3] => '1,2,3'\n    result = eval('context.fn(' + args + ')');\n    }\n    delete context.fn;                                                                 \n    return result\n}\n```p;.")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);