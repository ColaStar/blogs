(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{206:function(t,n,v){"use strict";v.r(n);var e=v(0),_=Object(e.a)({},function(){var t=this,n=t.$createElement,v=t._self._c||n;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"隐式转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#隐式转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐式转换")]),t._v(" "),v("blockquote",[v("p",[t._v("toString 和 valueOf")])]),t._v(" "),v("p",[t._v("toString：toString()函数的作用是返回object的字符串表示")]),t._v(" "),v("p",[t._v("Array 返回数组元素的字符串，默认以逗号链接。\nBoolean 布尔值的字符串值\nDate 日期UTC标准格式\nFunction 函数的字符串值\nNumber 数字值的字符串值\nObject [Object Object]\nString 字符串值\nReg 正则的字符串值")]),t._v(" "),v("blockquote",[v("p",[t._v("valueOf：valueOf()函数将对象转换为原始值")])]),t._v(" "),v("p",[t._v("Array 返回数组对象本身\nBoolean 布尔值\nDate 返回时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC\nFunction 函数本身\nNumber 数字值\nObject 对象本身，这是默认情况。\nString 字符串值\nReg 正则本身")]),t._v(" "),v("blockquote",[v("p",[t._v("隐式转换介绍")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("在js中，当运算符在运算时，如果两边数据不统一，CPU就无法计算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成一样的数据类型再计算")])]),t._v(" "),v("li",[v("p",[t._v("这种无需程序员手动转换，而由编译器自动转换的方式就称为隐式转换")])]),t._v(" "),v("li",[v("p",[t._v('例如1 > "0"这行代码在js中并不会报错，编译器在运算符时会先把右边的"0"转成数字0`然后在比较大小')])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("值")]),t._v(" "),v("th",[t._v("转换为字符串")]),t._v(" "),v("th",[t._v("转换为数字")]),t._v(" "),v("th",[t._v("转换为布尔值")]),t._v(" "),v("th",[t._v("转换为对象")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("undefined")]),t._v(" "),v("td",[t._v("'undefined'")]),t._v(" "),v("td",[v("div",{staticStyle:{color:"red"}},[t._v("NaN")])]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("throws TypeError")])]),t._v(" "),v("tr",[v("td",[t._v("null")]),t._v(" "),v("td",[t._v("'null'")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("throws TypeError")])]),t._v(" "),v("tr",[v("td",[t._v("true")]),t._v(" "),v("td",[t._v("'true'")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("new blean(true)")])]),t._v(" "),v("tr",[v("td",[t._v("fasle")]),t._v(" "),v("td",[t._v("'flase'")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("new blean(false)")])]),t._v(" "),v("tr",[v("td",[t._v("''(空字符串)")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("new String('')")])]),t._v(" "),v("tr",[v("td",[t._v("'1.2'(非空，数字)")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1.2")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("new String('1.2')")])]),t._v(" "),v("tr",[v("td",[t._v("'one'(非空，非数字)")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("new String('one')")])]),t._v(" "),v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("'0'")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("new Number(0)")])]),t._v(" "),v("tr",[v("td",[t._v("-0")]),t._v(" "),v("td",[v("div",{staticStyle:{color:"red"}},[t._v("'0'")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("new Number(-0)")])]),t._v(" "),v("tr",[v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("'NaN")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("new Number(NaN)")])]),t._v(" "),v("tr",[v("td",[t._v("Infinty")]),t._v(" "),v("td",[t._v("'Infinty'")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("new Number(Infinty)")])]),t._v(" "),v("tr",[v("td",[t._v("-Infinty")]),t._v(" "),v("td",[t._v("'-Infinty'")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("new Number(-Infinty)")])]),t._v(" "),v("tr",[v("td",[t._v("1(无穷大，非零)")]),t._v(" "),v("td",[t._v("'1'")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("new Number(1)")])]),t._v(" "),v("tr",[v("td",[t._v("{}")]),t._v(" "),v("td",[t._v("[Onject object]")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("[]")]),t._v(" "),v("td",[t._v("''")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("[9]")]),t._v("(一个数字元素数组)")]),t._v(" "),v("td",[t._v("'9'")]),t._v(" "),v("td",[t._v("9")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("['a']")]),t._v("(其他数组)")]),t._v(" "),v("td",[t._v("使用join方法")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("function(){}(任意函数)")]),t._v(" "),v("td",[t._v("函数的字符串值")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("toString()函数的作用是返回object的字符串表示")]),t._v(" "),v("p",[t._v("Array 返回数组元素的字符串，默认以逗号链接。\nBoolean 布尔值的字符串值\nDate 日期UTC标准格式\nFunction 函数的字符串值\nNumber 数字值的字符串值\nObject [Object Object]\nString 字符串值\nReg 正则的字符串值")]),t._v(" "),v("blockquote",[v("p",[t._v("隐式转换规则")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("1.转成string类型： +（字符串连接符）")])]),t._v(" "),v("li",[v("p",[t._v("2..转成number类型：++/--(自增自减运算符) + - * / %(算术运算符) > < >= <= == != === !=== (关系运算符)")])]),t._v(" "),v("li",[v("p",[t._v("3.转成boolean类型：!（逻辑非运算符）")])])]),t._v(" "),v("p",[t._v("6种假值 ：null、undefined、‘’、0、NaN 、false")]),t._v(" "),v("blockquote",[v("p",[t._v("字符串连接符与算术运算符隐式转换规则混淆")])]),t._v(" "),v("p",[t._v("· 常见面试题如下")]),t._v(" "),v("p",[v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换1.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A21.jpeg",alt:""}})])]),t._v(" "),v("p",[t._v("· 原理分析")]),t._v(" "),v("p",[v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换11.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A211.jpeg",alt:""}})])]),t._v(" "),v("blockquote",[v("p",[t._v("关系运算符：会把其他数据类型转换成number之后再比较关系")])]),t._v(" "),v("p",[t._v("常见面试题如下")]),t._v(" "),v("p",[v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换2.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A22.jpeg",alt:""}})])]),t._v(" "),v("p",[t._v("· 原理分析\n"),v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换21.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A221.jpeg",alt:""}})])]),t._v(" "),v("blockquote",[v("p",[t._v("复杂数据类型在隐式转换时会先转成String，然后再转成Number运算")])]),t._v(" "),v("p",[v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换3.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A23.jpeg",alt:""}})])]),t._v(" "),v("p",[v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换31.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A231.jpeg",alt:""}})])]),t._v(" "),v("p",[t._v("· 原理分析")]),t._v(" "),v("p",[v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换32.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A232.jpeg",alt:""}})])]),t._v(" "),v("blockquote",[v("p",[t._v("逻辑非隐式转换与关系运算符隐式转换搞混淆")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("对象转换为字符串和对象到数字的转换是调用带转换对象的一个方法来完成的。 toString与valueOf toString返回一个反应这个对象的字符串 ->：[object object] 特殊场合：[1,2,3].toString()-> 1,2,3 (function a(){ f(x); }).toString()->function(x){\\n f(x); \\n} /\\d/g.toString() -> /\\d/g new Date(2010,0,1).toString() -> 国际化时间\nvalueOf()他默认将对象转换为表示它的原始值，因为对象是复合值，所以简单返回对象本身，，日期对象会返回 太平洋时间。")])]),t._v(" "),v("li",[v("p",[t._v("对象转数字首先找valueOf 如果没有->toString 没有->抛出异常 对象转字符串 toString->valueOf->抛出异常")])])]),t._v(" "),v("p",[t._v("· 前方高能，请注意~")]),t._v(" "),v("p",[t._v("空数组的toString()方法会得到空字符串，而空对象的toString()方法会得到字符串"),v("code",[t._v("[object Object]")]),t._v(" （注意第一个小写o，第二个大写O哟）")]),t._v(" "),v("p",[t._v("· 常见面试题")]),t._v(" "),v("p",[v("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/隐式转换4.jpeg"}},[v("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A24.jpeg",alt:""}})])]),t._v(" "),v("p",[t._v("· 原理分析\n"),v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换41.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A241.jpeg",alt:""}})]),t._v(" "),v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换42.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A242.jpeg",alt:""}})]),t._v(" "),v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换43.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A243.jpeg",alt:""}})]),t._v(" "),v("a",{attrs:{"data-fancybox":"",title:"",href:"隐式转换44.jpeg"}},[v("img",{attrs:{src:"%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A244.jpeg",alt:""}})])]),t._v(" "),v("p",[t._v("见过的一些面试题")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('console.log(1+ "true")\nconsole.log(1+ true)\nconsole.log(1+ undefined)\nconsole.log(1 + null)\nconsole.log(1+ [])\nconsole.log(1+ {})\nconsole.log(1+ new Date())\nconsole.log(1+ new ArrayBuffer())\nconsole.log(1+NaN)\nconsole.log(1+ false)\nconsole.log(1+function(){})\nconsole.log(1+/w/g)\n\nvar a = {},b={},c=[],d=[]\nconsole.log(a==b)\nconsole.log(c==d)\nconsole.log("2">3)\nconsole.log("2">"3")\nconsole.log(NaN == NaN)\nconsole.log(null == null)\nconsole.log(undefined ==undefined)\nconsole.log(NaN == null)\nconsole.log(null ==undefined)\nconsole.log([] == 0)\nconsole.log([] == ![])\nconsole.log({} == !{})\n\n\n')])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br"),v("span",{staticClass:"line-number"},[t._v("17")]),v("br"),v("span",{staticClass:"line-number"},[t._v("18")]),v("br"),v("span",{staticClass:"line-number"},[t._v("19")]),v("br"),v("span",{staticClass:"line-number"},[t._v("20")]),v("br"),v("span",{staticClass:"line-number"},[t._v("21")]),v("br"),v("span",{staticClass:"line-number"},[t._v("22")]),v("br"),v("span",{staticClass:"line-number"},[t._v("23")]),v("br"),v("span",{staticClass:"line-number"},[t._v("24")]),v("br"),v("span",{staticClass:"line-number"},[t._v("25")]),v("br"),v("span",{staticClass:"line-number"},[t._v("26")]),v("br"),v("span",{staticClass:"line-number"},[t._v("27")]),v("br"),v("span",{staticClass:"line-number"},[t._v("28")]),v("br")])])])},[],!1,null,null,null);n.default=_.exports}}]);