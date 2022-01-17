(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{462:function(s,n,e){"use strict";e.r(n);var a=e(56),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"browserify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browserify"}},[s._v("#")]),s._v(" Browserify")]),s._v(" "),e("p",[s._v("Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过 预编译 让前端 Javascript 可以直接使用 Node NPM 安装的一些库。")]),s._v(" "),e("p",[s._v("参考链接：https://baike.baidu.com/item/browserify/16823990?fr=aladdin")]),s._v(" "),e("p",[s._v("参考链接： http://browserify.org/ 官网")]),s._v(" "),e("p",[s._v("1.项目初始化\nnpm init\n2.我们的主要目的是本地的 js 文件可以引用 server 的 js 文件\n3.安装包 uniq\ncnpm install uniq --save\n4.在项目中新建文件 index.js test.js index.html\n编辑文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//index.js\n\nvar unique = require(\'uniq\');\nvar test = require(\'./test.js\');\ntest(unique);\n//test.js\n\nmodule.exports = function(cheerio) {\n    console.log(\'我是服务端的人\', cheerio);\n};\n//index.html\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n    <script type="text/javascript" src="./bundle.js\n    "><\/script>\n</head>\n<body>\n    \n</body>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("5.在全局安装 Browserify 这个库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install -g browserify\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("6.把 index.js 文件编译成一个 bundle.js 文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("browserify index.js -o bundle.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("7.编译成功之后 项目中会多一个 bundle.js 文件\nbundle.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module \'"+o+"\'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\nvar unique = require(\'uniq\');\nvar test = require(\'./test.js\');\ntest(unique);\n},{"./test.js":3,"uniq":2}],2:[function(require,module,exports){\n"use strict"\n\nfunction unique_pred(list, compare) {\n  var ptr = 1\n    , len = list.length\n    , a=list[0], b=list[0]\n  for(var i=1; i<len; ++i) {\n    b = a\n    a = list[i]\n    if(compare(a, b)) {\n      if(i === ptr) {\n        ptr++\n        continue\n      }\n      list[ptr++] = a\n    }\n  }\n  list.length = ptr\n  return list\n}\n\nfunction unique_eq(list) {\n  var ptr = 1\n    , len = list.length\n    , a=list[0], b = list[0]\n  for(var i=1; i<len; ++i, b=a) {\n    b = a\n    a = list[i]\n    if(a !== b) {\n      if(i === ptr) {\n        ptr++\n        continue\n      }\n      list[ptr++] = a\n    }\n  }\n  list.length = ptr\n  return list\n}\n\nfunction unique(list, compare, sorted) {\n  if(list.length === 0) {\n    return list\n  }\n  if(compare) {\n    if(!sorted) {\n      list.sort(compare)\n    }\n    return unique_pred(list, compare)\n  }\n  if(!sorted) {\n    list.sort()\n  }\n  return unique_eq(list)\n}\n\nmodule.exports = unique\n\n},{}],3:[function(require,module,exports){\nmodule.exports = function(cheerio) {\n    console.log(\'我是服务端的人\', cheerio);\n};\n},{}]},{},[1]);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br")])]),e("p",[s._v("然后再把 index.html 文件在浏览器中打开，查看控制台输出如下，便证明引用成功了\n"),e("img",{attrs:{src:"https://colastar.github.io/static/images/Browserify.jpg",alt:""}})]),s._v(" "),e("h1",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结：")]),s._v(" "),e("ul",[e("li",[s._v("webpack 包管理器 核心基于 loader/plugin ，编译 时 会生成很多无用的代码")]),s._v(" "),e("li",[s._v("gulp 基于文件流，更快，可以用它去编译 Node")]),s._v(" "),e("li",[s._v("grunt  基于文件 I/O")]),s._v(" "),e("li",[s._v("yo 发布一些自己的模块")]),s._v(" "),e("li",[s._v("bower 安装依赖\n-browserify 能够让本地的 js 应用服务端的 js，让 js 直接就具有 require 的能力")])])])}),[],!1,null,null,null);n.default=t.exports}}]);