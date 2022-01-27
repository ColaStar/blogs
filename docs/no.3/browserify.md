# Browserify

Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过 预编译 让前端 Javascript 可以直接使用 Node NPM 安装的一些库。 

参考链接：https://baike.baidu.com/item/browserify/16823990?fr=aladdin

参考链接： http://browserify.org/ 官网


1.项目初始化
npm init
2.我们的主要目的是本地的 js 文件可以引用 server 的 js 文件
3.安装包 uniq
cnpm install uniq --save
4.在项目中新建文件 index.js test.js index.html
编辑文件
```
//index.js

var unique = require('uniq');
var test = require('./test.js');
test(unique);
//test.js

module.exports = function(cheerio) {
    console.log('我是服务端的人', cheerio);
};
//index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="./bundle.js
    "></script>
</head>
<body>
    
</body>
</html>
```
5.在全局安装 Browserify 这个库
```
npm install -g browserify
```

6.把 index.js 文件编译成一个 bundle.js 文件
```
browserify index.js -o bundle.js
```
7.编译成功之后 项目中会多一个 bundle.js 文件
bundle.js
```
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var unique = require('uniq');
var test = require('./test.js');
test(unique);
},{"./test.js":3,"uniq":2}],2:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],3:[function(require,module,exports){
module.exports = function(cheerio) {
    console.log('我是服务端的人', cheerio);
};
},{}]},{},[1]);
```
然后再把 index.html 文件在浏览器中打开，查看控制台输出如下，便证明引用成功了
![](http://blog.colastar.club/static/images/Browserify.jpg)

# 总结：

- webpack 包管理器 核心基于 loader/plugin ，编译 时 会生成很多无用的代码
- gulp 基于文件流，更快，可以用它去编译 Node 
- grunt  基于文件 I/O
- yo 发布一些自己的模块
- bower 安装依赖
-browserify 能够让本地的 js 应用服务端的 js，让 js 直接就具有 require 的能力