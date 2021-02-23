(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{408:function(s,a,n){"use strict";n.r(a);var e=n(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"parcel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parcel","aria-hidden":"true"}},[s._v("#")]),s._v(" parcel")]),s._v(" "),n("h2",{attrs:{id:"parcel特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parcel特点","aria-hidden":"true"}},[s._v("#")]),s._v(" parcel特点")]),s._v(" "),n("p",[s._v("官网说的很详细")]),s._v(" "),n("ul",[n("li",[s._v("1.极速打包")])]),s._v(" "),n("p",[s._v("Parcel "),n("code",[s._v("使用 worker 进程去启用多核编译")]),s._v("。同时有"),n("code",[s._v("文件系统缓存")]),s._v("，即使在重启构建后也能快速再编译。")]),s._v(" "),n("p",[s._v("亲测有效：\n以下代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" index.html\n\n<html>\n<body>\n  <script src=\"./index.js\"><\/script>\n</body>\n</html>\n🛠 index.js\n\n// 导入另一个组件\nimport main from './main';\n\nmain();\n🛠 main.js\n\n// 导入一个 CSS 模块\nimport classes from './main.css';\n\nexport default () => {\n  console.log(classes.main);\n};\n💅 main.css\n\n.main {\n  /* 引用一张图片 */\n  background: url('./images/background.png');\n  color: red;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("各个打包工具运行时")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n打包工具\t时间\nbrowserify\t22.98s\nwebpack\t20.71s\nparcel\t9.98s\nparcel - with cache\t2.64s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("真的是好快啊")]),s._v(" "),n("ul",[n("li",[s._v("2.将你所有的资源打包")])]),s._v(" "),n("p",[s._v("Parcel 具备开箱即用的对 JS, CSS, HTML, 文件 及更多的支持，而且不需要插件。\n个人测试如果引用less文件，执行parcel后自动创建package.json 并 安装less插件，好嗨呦")]),s._v(" "),n("ul",[n("li",[s._v("3.自动转换")])]),s._v(" "),n("p",[s._v("如若有需要，Babel, PostCSS, 和PostHTML甚至 node_modules 包会被用于自动转换代码.")]),s._v(" "),n("ul",[n("li",[s._v("4.零配置代码分拆")])]),s._v(" "),n("p",[s._v("使用动态 import() 语法, Parcel 将你的输出文件束(bundles)分拆，因此你只需要在初次加载时加载你所需要的代码。")]),s._v(" "),n("ul",[n("li",[s._v("热模块替换")])]),s._v(" "),n("p",[s._v("Parcel 无需配置，在开发环境的时候会自动在浏览器内随着你的代码更改而去更新模块。")]),s._v(" "),n("ul",[n("li",[s._v("友好的错误日志")])]),s._v(" "),n("p",[s._v("当遇到错误时，Parcel 会输出 语法高亮的代码片段，帮助你定位问题。")]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install -g parcel-bundler\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[s._v("#")]),s._v(" 应用")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://parceljs.org/code_splitting.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);