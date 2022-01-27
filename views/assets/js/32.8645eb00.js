(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{432:function(s,n,a){"use strict";a.r(n);var e=a(56),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"理解javascript的编译过程与运行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解javascript的编译过程与运行机制"}},[s._v("#")]),s._v(" 理解Javascript的编译过程与运行机制")]),s._v(" "),a("p",[s._v("JavaScript运行四部曲")]),s._v(" "),a("ul",[a("li",[s._v("1.词法分析（把输入的字符串分解为一些对编程语言有意义的代码块（词法单元）。）")]),s._v(" "),a("li",[s._v("2.语法分析（将上一步的词法单元集合分析并最终转换为一个有元素逐级嵌套所组成的代表了程序语法结构的树，称为抽象语法树（AST））")]),s._v(" "),a("li",[s._v("3.代码生成（将AST转换为可执行代码的过程称被称为代码生成）")]),s._v(" "),a("li",[s._v("4.预编译（预编译简单理解就是在内存中开辟一些空间，存放一些变量与函数；遇到函数的时候其实只有在执行函数的时候才会预编译那一部分）")]),s._v(" "),a("li",[s._v("5.解析执行（执行代码）（作用域LSH、RHS）")])]),s._v(" "),a("h2",{attrs:{id:"词法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[s._v("#")]),s._v(" 词法分析")]),s._v(" "),a("p",[s._v("这一步可以叫做分词/词法分析：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var a = 2;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个过程会讲字符串分割为一个个词法单元如上"),a("code",[s._v("var")]),s._v("、"),a("code",[s._v("a")]),s._v("、"),a("code",[s._v("=")]),s._v("、"),a("code",[s._v("2")]),s._v("(空格算不算词法单元取决于空格对于该编程语言是否有意义)；这些零散的词法单元会组成一个词法单元流（数组）进行解析。")]),s._v(" "),a("h2",{attrs:{id:"解析-语法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析-语法分析"}},[s._v("#")]),s._v(" 解析/语法分析：")]),s._v(" "),a("p",[s._v("这个过程是把各个词法单元转换为AST语法树，"),a("a",{attrs:{href:"https://link.jianshu.com/?t=http%3A%2F%2Fesprima.org%2Fdemo%2Fparse.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在线解析工具"),a("OutboundLink")],1),s._v('\n"'),a("code",[s._v("var a = 2;")]),s._v('" 的词法单元流就会被解析为下边的AST树')]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club/static/images/语法分析AST.png"}},[a("img",{attrs:{src:"http://blog.colastar.club/static/images/%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90AST.png",alt:""}})])]),s._v(" "),a("p",[s._v("来个复杂点的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' if(typeof a == "undefined" ){ a = 0; } else { a = a; } alert(a);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("生成的AST语法树")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "type": "Program",\n    "body": [\n        {\n            "type": "IfStatement",\n            "test": {\n                "type": "BinaryExpression",\n                "operator": "==",\n                "left": {\n                    "type": "UnaryExpression",\n                    "operator": "typeof",\n                    "argument": {\n                        "type": "Identifier",\n                        "name": "a"\n                    },\n                    "prefix": true\n                },\n                "right": {\n                    "type": "Literal",\n                    "value": "undefined",\n                    "raw": "\\"undefined\\""\n                }\n            },\n            "consequent": {\n                "type": "BlockStatement",\n                "body": [\n                    {\n                        "type": "ExpressionStatement",\n                        "expression": {\n                            "type": "AssignmentExpression",\n                            "operator": "=",\n                            "left": {\n                                "type": "Identifier",\n                                "name": "a"\n                            },\n                            "right": {\n                                "type": "Literal",\n                                "value": 0,\n                                "raw": "0"\n                            }\n                        }\n                    }\n                ]\n            },\n            "alternate": {\n                "type": "BlockStatement",\n                "body": [\n                    {\n                        "type": "ExpressionStatement",\n                        "expression": {\n                            "type": "AssignmentExpression",\n                            "operator": "=",\n                            "left": {\n                                "type": "Identifier",\n                                "name": "a"\n                            },\n                            "right": {\n                                "type": "Literal",\n                                "value": 2,\n                                "raw": "2"\n                            }\n                        }\n                    }\n                ]\n            }\n        },\n        {\n            "type": "ExpressionStatement",\n            "expression": {\n                "type": "CallExpression",\n                "callee": {\n                    "type": "Identifier",\n                    "name": "alert"\n                },\n                "arguments": [\n                    {\n                        "type": "Identifier",\n                        "name": "a"\n                    }\n                ]\n            }\n        }\n    ],\n    "sourceType": "script"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br")])]),a("h2",{attrs:{id:"代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码生成"}},[s._v("#")]),s._v(" 代码生成：")]),s._v(" "),a("p",[s._v("将 AST 代码转换为可执行代码。简单来说，就是将 AST 转化为一组机器指令，用来创建一个叫做 a 的变量（包括分配内存等），并将一个值 10 存储在 a 中。")]),s._v(" "),a("h2",{attrs:{id:"预编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预编译"}},[s._v("#")]),s._v(" 预编译")]),s._v(" "),a("p",[s._v("‘function函数’是一等公民！在进行预编译的时候会预先声明变量，再预定义函数声明（这就是为什么函数声明优先于变量声明）。")]),s._v(" "),a("p",[s._v("预编译一般发生在script脚本和函数执行之前，")]),s._v(" "),a("blockquote",[a("p",[s._v("在script脚本执行前\n举个例子：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var a = 1; // 变量声明\n    var b = 2  // 变量声明\n    function b(y){ // 函数声明\n         var y;\n        var s = 2;\n        function s(){};//这个是函数声明\n        var e = 0;\n        console.log(x,y,e);\n    };\n    var c = function(){ // 是变量声明而不是函数声明！！\n        // ...\n    }\n    b(100);\n<\/script>\n<script>\n    var d = 0;\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("1.首先会创建一个全局对象GO（Global Object）")]),s._v(" "),a("li",[s._v("2.第一个脚本文件加载")]),s._v(" "),a("li",[s._v("3.脚本加载完毕后，分析语法是否合法（语法分析）")]),s._v(" "),a("li",[s._v("4.开始 预编译\n"),a("ul",[a("li",[s._v("a、查找变量声明，作为GO属性，值赋予undefined")]),s._v(" "),a("li",[s._v("b、查找函数声明，作为GO属性，值赋予函数体")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//第四步a动作 伪代码\nGO/window/Golbal = {\n    a:undefined,\n    b:undefined,\n    c:undefined\n}\n//第四步b动作 伪代码\nGO/window/Golbal = {\n    a:undefined,\n    b:function(){\n        var y;\n        var s = 2;\n        function s(){};//这个是函数声明\n        var e = 0;\n       console.log(x,y,e);\n    },\n    c:undefined\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("解析执行代码（直到执行b函数）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 伪代码\nGO/window = {\n    // 变量随着执行流得到初始化\n    a: 1,\n    c: function(){\n        // ...\n    },\n    b: function(x,y){\n        var y;\n        var x = 2;\n        function x(){};//这个是函数声明\n        var e = 0;\n        console.log(x,y,e);\n    }\n}\nwindow.b(20,10)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("执行b函数之前发生了预编译")]),s._v(" "),a("ul",[a("li",[s._v("创建AO活动对象（Active Object）")]),s._v(" "),a("li",[s._v("将函数内所有的形参和变量声明（的名）储存到ao对象中，value为undifined")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("AO{\ny:undefined,\nx:undefined,\ne:undefined\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("实参值赋给型参")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("AO{\ny:10,\nx:undefined,\ne:undefined\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("将所有的函数声明的函数名作为ao对象中的key,函数整体内容为value储存到ao对象中")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("AO{\ny:10,\nx:function(){},\ne:undefined\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("最后函数执行输出结果为")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function x(){}  10 0 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("总结：")])]),s._v(" "),a("ul",[a("li",[s._v("预编译(函数执行前)")])]),s._v(" "),a("ol",[a("li",[s._v("创建AO对象（Active Object）")]),s._v(" "),a("li",[s._v("查找函数形参及函数内变量声明，形参名及变量名作为AO对象的属性，值为undefined")]),s._v(" "),a("li",[s._v("实参形参相统一，实参值赋给形参")]),s._v(" "),a("li",[s._v("查找函数声明，函数名作为AO对象的属性，值为函数引用")])]),s._v(" "),a("ul",[a("li",[s._v("预编译(脚本代码块script执行前)")])]),s._v(" "),a("ol",[a("li",[s._v("查找全局变量声明（包括隐式全局变量声明，省略var声明），变量名作全局对象的属性，值为undefined")]),s._v(" "),a("li",[s._v("查找函数声明，函数名作为全局对象的属性，值为函数引用")])]),s._v(" "),a("h2",{attrs:{id:"代码执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码执行"}},[s._v("#")]),s._v(" 代码执行")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/lark-/p/7954047.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("js的解析与执行过程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);