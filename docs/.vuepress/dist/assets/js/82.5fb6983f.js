(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{140:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"node-js-文件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-js-文件系统","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js 文件系统")]),t._v(" "),r("p",[t._v("Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：")]),t._v(" "),r("p",[t._v('var fs =  require("fs")')]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"异步和同步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步和同步","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步和同步")]),t._v(" "),r("p",[t._v("Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。")]),t._v(" "),r("p",[t._v("异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。")]),t._v(" "),r("p",[r("strong",[t._v("建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。")])]),t._v(" "),r("h3",{attrs:{id:"实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("创建 input.txt 文件，内容如下：\n读取文件")]),t._v(" "),r("p",[t._v("创建 file.js 文件, 代码如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs =  require("fs");  // 异步读取\n\nfs.readFile(\'input.txt\',  function  (err, data)  {\n      if  (err)  {\n            return console.error(err);  \n         }\n     console.log("异步读取: "  + data.toString());  });  // 同步读取\nvar data = fs.readFileSync(\'input.txt\');   console.log("同步读取: "  + data.toString());   console.log("程序执行完毕。");\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("p",[t._v("$ node file.js 同步读取:  读取文件  程序执行完毕。  异步读取:  读取文件")]),t._v(" "),r("p",[t._v("接下来，让我们来具体了解下 Node.js 文件系统的方法。")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"打开文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打开文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 打开文件")]),t._v(" "),r("h3",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为在异步模式下打开文件的语法格式：")]),t._v(" "),r("p",[t._v("fs.open(path, flags[, mode], callback)")]),t._v(" "),r("h3",{attrs:{id:"参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("path")]),t._v(" - 文件的路径。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("flags")]),t._v(" - 文件打开的行为。具体值详见下文。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("mode")]),t._v(" - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，带有两个参数如：callback(err, fd)。")])])]),t._v(" "),r("p",[t._v("flags 参数可以是以下值：")]),t._v(" "),r("p",[t._v("描述")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("r 以读取模式打开文件。如果文件不存在抛出异常。")])]),t._v(" "),r("li",[r("p",[t._v("r+ 以读写模式打开文件。如果文件不存在抛出异常。")])]),t._v(" "),r("li",[r("p",[t._v("rs  以同步的方式读取文件。")])]),t._v(" "),r("li",[r("p",[t._v("rs+ 以同步的方式读取和写入文件。")])]),t._v(" "),r("li",[r("p",[t._v("w 以写入模式打开文件，如果文件不存在则创建。")])]),t._v(" "),r("li",[r("p",[t._v("wx 类似 'w'，但是如果文件路径存在，则文件写入失败。")])]),t._v(" "),r("li",[r("p",[t._v("w+ 以读写模式打开文件，如果文件不存在则创建。")])]),t._v(" "),r("li",[r("p",[t._v("wx+ 类似 'w+'， 但是如果文件路径存在，则文件读写失败。")])]),t._v(" "),r("li",[r("p",[t._v("a 以追加模式打开文件，如果文件不存在则创建。")])]),t._v(" "),r("li",[r("p",[t._v("ax 类似 'a'， 但是如果文件路径存在，则文件追加失败。")])]),t._v(" "),r("li",[r("p",[t._v("a+ 以读取追加模式打开文件，如果文件不存在则创建。")])]),t._v(" "),r("li",[r("p",[t._v("ax+ 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，并打开 input.txt 文件进行读写，代码如下所示：")]),t._v(" "),r("p",[t._v('var fs =  require("fs");  // 异步打开文件 console.log("准备打开文件！"); fs.open(\'input.txt\',  \'r+\',  function(err, fd)  {  if  (err)  {  return console.error(err);  } console.log("文件打开成功！");  });')]),t._v(" "),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("p",[t._v("$ node file.js 准备打开文件！  文件打开成功！")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"获取文件信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取文件信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取文件信息")]),t._v(" "),r("h3",{attrs:{id:"语法-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为通过异步模式获取文件信息的语法格式：")]),t._v(" "),r("p",[t._v("fs.stat(path, callback)")]),t._v(" "),r("h3",{attrs:{id:"参数-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("path")]),t._v(" - 文件路径。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，带有两个参数如：(err, stats), "),r("strong",[t._v("stats")]),t._v(" 是 fs.Stats 对象。")])])]),t._v(" "),r("p",[t._v("fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("var fs =  require('fs');\nfs.stat('/Users/liuht/code/itbilu/demo/fs.js',  function  (err, stats)  { \n    console.log(stats.isFile()); //true\n      })\n")])])]),r("blockquote",[r("p",[t._v("stats类中的方法有：")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("stats.isFile() 如果是文件返回 true，否则返回 false。")])]),t._v(" "),r("li",[r("p",[t._v("stats.isDirectory() 如果是目录返回 true，否则返回 false。")])]),t._v(" "),r("li",[r("p",[t._v("stats.isBlockDevice() 如果是块设备返回 true，否则返回 false。")])]),t._v(" "),r("li",[r("p",[t._v("stats.isCharacterDevice() 如果是字符设备返回 true，否则返回 false。")])]),t._v(" "),r("li",[r("p",[t._v("stats.isSymbolicLink() 如果是软链接返回 true，否则返回 false。")])]),t._v(" "),r("li",[r("p",[t._v("stats.isFIFO() 如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。")])]),t._v(" "),r("li",[r("p",[t._v("stats.isSocket() 如果是 Socket 返回 true，否则返回 false。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs =  require("fs"); \nconsole.log("准备打开文件！"); \nfs.stat(\'input.txt\',  function  (err, stats)  {     \n    if  (err)  { \n         return console.error(err); \n        } \n    console.log(stats); \n    console.log("读取文件信息成功！");  // 检测文件类型 \n    console.log("是否为文件(isFile) ? "  + stats.isFile()); \n    console.log("是否为目录(isDirectory) ? "  + stats.isDirectory());  });\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n准备打开文件！\n{ dev: 16777220,\n  mode: 33188,\n  nlink: 1,\n  uid: 501,\n  gid: 20,\n  rdev: 0,\n  blksize: 4096,\n  ino: 40333161,\n  size: 61,\n  blocks: 8,\n  atime: Mon Sep 07 2015 17:43:55 GMT+0800 (CST),\n  mtime: Mon Sep 07 2015 17:22:35 GMT+0800 (CST),\n  ctime: Mon Sep 07 2015 17:22:35 GMT+0800 (CST) }\n读取文件信息成功！\n是否为文件(isFile) ? true\n是否为目录(isDirectory) ? false\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"写入文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写入文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 写入文件")]),t._v(" "),r("h3",{attrs:{id:"语法-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为异步模式下写入文件的语法格式：")]),t._v(" "),r("p",[t._v("fs.writeFile(file, data[, options], callback)")]),t._v(" "),r("p",[t._v("writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。")]),t._v(" "),r("h3",{attrs:{id:"参数-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("file")]),t._v(" - 文件名或文件描述符。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("data")]),t._v(" - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("options")]),t._v(" - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\n\nconsole.log("准备写入文件");\nfs.writeFile(\'input.txt\', \'我是通 过fs.writeFile 写入文件的内容\',  function(err) {\n   if (err) {\n       return console.error(err);\n   }\n   console.log("数据写入成功！");\n   console.log("--------我是分割线-------------")\n   console.log("读取写入的数据！");\n   fs.readFile(\'input.txt\', function (err, data) {\n      if (err) {\n         return console.error(err);\n      }\n      console.log("异步读取文件数据: " + data.toString());\n   });\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n准备写入文件\n数据写入成功！\n--------我是分割线-------------\n读取写入的数据！\n异步读取文件数据: 我是通 过fs.writeFile 写入文件的内容\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"读取文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读取文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 读取文件")]),t._v(" "),r("h3",{attrs:{id:"语法-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为异步模式下读取文件的语法格式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.read(fd, buffer, offset, length, position, callback)\n")])])]),r("p",[t._v("该方法使用了文件描述符来读取文件。")]),t._v(" "),r("h3",{attrs:{id:"参数-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("fd")]),t._v(" - 通过 fs.open() 方法返回的文件描述符。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("buffer")]),t._v(" - 数据写入的缓冲区。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("offset")]),t._v(" - 缓冲区写入的写入偏移量。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("length")]),t._v(" - 要从文件中读取的字节数。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("position")]),t._v(" - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("input.txt 文件内容为：")]),t._v(" "),r("p",[t._v("菜鸟教程官网地址：www.runoob.com")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\nvar buf = new Buffer.alloc(1024);\n\nconsole.log("准备打开已存在的文件！");\nfs.open(\'input.txt\', \'r+\', function(err, fd) {\n   if (err) {\n       return console.error(err);\n   }\n   console.log("文件打开成功！");\n   console.log("准备读取文件：");\n   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){\n      if (err){\n         console.log(err);\n      }\n      console.log(bytes + "  字节被读取");\n      \n      // 仅输出读取的字节\n      if(bytes > 0){\n         console.log(buf.slice(0, bytes).toString());\n      }\n   });\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n准备打开已存在的文件！\n文件打开成功！\n准备读取文件：\n42  字节被读取\n菜鸟教程官网地址：www.runoob.com\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"关闭文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关闭文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 关闭文件")]),t._v(" "),r("h3",{attrs:{id:"语法-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为异步模式下关闭文件的语法格式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.close(fd, callback)\n")])])]),r("p",[t._v("该方法使用了文件描述符来读取文件。")]),t._v(" "),r("h3",{attrs:{id:"参数-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("fd")]),t._v(" - 通过 fs.open() 方法返回的文件描述符。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，没有参数。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-6","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("input.txt 文件内容为：")]),t._v(" "),r("p",[t._v("菜鸟教程官网地址：www.runoob.com")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\nvar buf = new Buffer.alloc(1024);\n\nconsole.log("准备打开文件！");\nfs.open(\'input.txt\', \'r+\', function(err, fd) {\n   if (err) {\n       return console.error(err);\n   }\n   console.log("文件打开成功！");\n   console.log("准备读取文件！");\n   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){\n      if (err){\n         console.log(err);\n      }\n\n      // 仅输出读取的字节\n      if(bytes > 0){\n         console.log(buf.slice(0, bytes).toString());\n      }\n\n      // 关闭文件\n      fs.close(fd, function(err){\n         if (err){\n            console.log(err);\n         } \n         console.log("文件关闭成功");\n      });\n   });\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language-$ node file.js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("准备打开文件！\n文件打开成功！\n准备读取文件！\n菜鸟教程官网地址：www.runoob.com\n文件关闭成功\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"截取文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#截取文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 截取文件")]),t._v(" "),r("h3",{attrs:{id:"语法-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-6","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为异步模式下截取文件的语法格式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.ftruncate(fd, len, callback)\n")])])]),r("p",[t._v("该方法使用了文件描述符来读取文件。")]),t._v(" "),r("h3",{attrs:{id:"参数-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-6","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("fd")]),t._v(" - 通过 fs.open() 方法返回的文件描述符。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("len")]),t._v(" - 文件内容截取的长度。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，没有参数。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("input.txt 文件内容为：")]),t._v(" "),r("p",[t._v("site:www.runoob.com")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\nvar buf = new Buffer.alloc(1024);\n\nconsole.log("准备打开文件！");\nfs.open(\'input.txt\', \'r+\', function(err, fd) {\n   if (err) {\n       return console.error(err);\n   }\n   console.log("文件打开成功！");\n   console.log("截取10字节内的文件内容，超出部分将被去除。");\n   \n   // 截取文件\n   fs.ftruncate(fd, 10, function(err){\n      if (err){\n         console.log(err);\n      } \n      console.log("文件截取成功。");\n      console.log("读取相同的文件"); \n      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){\n         if (err){\n            console.log(err);\n         }\n\n         // 仅输出读取的字节\n         if(bytes > 0){\n            console.log(buf.slice(0, bytes).toString());\n         }\n\n         // 关闭文件\n         fs.close(fd, function(err){\n            if (err){\n               console.log(err);\n            } \n            console.log("文件关闭成功！");\n         });\n      });\n   });\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n准备打开文件！\n文件打开成功！\n截取10字节内的文件内容，超出部分将被去除。\n文件截取成功。\n读取相同的文件\nsite:www.r\n文件关闭成功\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"删除文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除文件")]),t._v(" "),r("h3",{attrs:{id:"语法-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为删除文件的语法格式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.unlink(path, callback)\n")])])]),r("h3",{attrs:{id:"参数-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("path")]),t._v(" - 文件路径。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，没有参数。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-8","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("input.txt 文件内容为：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("site:www.runoob.com\n")])])]),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\n\nconsole.log("准备删除文件！");\nfs.unlink(\'input.txt\', function(err) {\n   if (err) {\n       return console.error(err);\n   }\n   console.log("文件删除成功！");\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n准备删除文件！\n文件删除成功！\n")])])]),r("p",[t._v("再去查看 input.txt 文件，发现已经不存在了。")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"创建目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建目录")]),t._v(" "),r("h3",{attrs:{id:"语法-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-8","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为创建目录的语法格式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.mkdir(path\\[, options\\], callback)\n")])])]),r("h3",{attrs:{id:"参数-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-8","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("path")]),t._v(" - 文件路径。")])]),t._v(" "),r("li",[r("p",[t._v("options 参数可以是：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("recursive")]),t._v(" - 是否以递归的方式创建目录，默认为 false。")]),t._v(" "),r("li",[r("strong",[t._v("mode")]),t._v(" - 设置目录权限，默认为 0777。")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，没有参数。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-9","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\n// tmp 目录必须存在\nconsole.log("创建目录 /tmp/test/");\nfs.mkdir("/tmp/test/",function(err){\n   if (err) {\n       return console.error(err);\n   }\n   console.log("目录创建成功。");\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n创建目录 /tmp/test/\n目录创建成功。\n")])])]),r("p",[t._v("可以添加 recursive: true 参数，不管创建的目录 /tmp 和 /tmp/a 是否存在：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {\n  if (err) throw err;\n});\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"读取目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读取目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 读取目录")]),t._v(" "),r("h3",{attrs:{id:"语法-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-9","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为读取目录的语法格式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.readdir(path, callback)\n")])])]),r("h3",{attrs:{id:"参数-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-9","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("path")]),t._v(" - 文件路径。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-10","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\n\nconsole.log("查看 /tmp 目录");\nfs.readdir("/tmp/",function(err, files){\n   if (err) {\n       return console.error(err);\n   }\n   files.forEach( function (file){\n       console.log( file );\n   });\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n查看 /tmp 目录\ninput.out\noutput.out\ntest\ntest.txt\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"删除目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除目录")]),t._v(" "),r("h3",{attrs:{id:"语法-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-10","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("以下为删除目录的语法格式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fs.rmdir(path, callback)\n")])])]),r("h3",{attrs:{id:"参数-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-10","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数使用说明如下：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("path")]),t._v(" - 文件路径。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("callback")]),t._v(" - 回调函数，没有参数。")])])]),t._v(" "),r("h3",{attrs:{id:"实例-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例-11","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("接下来我们创建 file.js 文件，代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var fs = require("fs");\n// 执行前创建一个空的 /tmp/test 目录\nconsole.log("准备删除目录 /tmp/test");\nfs.rmdir("/tmp/test",function(err){\n   if (err) {\n       return console.error(err);\n   }\n   console.log("读取 /tmp 目录");\n   fs.readdir("/tmp/",function(err, files){\n      if (err) {\n          return console.error(err);\n      }\n      files.forEach( function (file){\n          console.log( file );\n      });\n   });\n});\n')])])]),r("p",[t._v("以上代码执行结果如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ node file.js \n准备删除目录 /tmp/test\n读取 /tmp 目录\n……\n")])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"文件模块方法参考手册"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件模块方法参考手册","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件模块方法参考手册")]),t._v(" "),r("p",[t._v("以下为 Node.js 文件模块相同的方法列表：")]),t._v(" "),r("p",[t._v("序号")]),t._v(" "),r("p",[t._v("方法 & 描述")]),t._v(" "),r("p",[r("strong",[t._v("fs.rename(oldPath, newPath, callback)")]),t._v("  文件重命名")]),t._v(" "),r("p",[t._v("异步 rename().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.ftruncate(fd, len, callback)")]),t._v("  文件描述符")]),t._v(" "),r("p",[t._v("异步 ftruncate().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.ftruncateSync(fd, len)")]),t._v("   文件描述符")]),t._v(" "),r("p",[t._v("同步 ftruncate()")]),t._v(" "),r("p",[r("strong",[t._v("fs.truncate(path, len, callback)")]),t._v("  文件描述符")]),t._v(" "),r("p",[t._v("异步 truncate().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.truncateSync(path, len)")]),t._v("  文件描述符")]),t._v(" "),r("p",[t._v("同步 truncate()")]),t._v(" "),r("p",[r("strong",[t._v("fs.chown(path, uid, gid, callback)")])]),t._v(" "),r("p",[t._v("异步 chown().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.chownSync(path, uid, gid)")])]),t._v(" "),r("p",[t._v("同步 chown()")]),t._v(" "),r("p",[r("strong",[t._v("fs.fchown(fd, uid, gid, callback)")]),r("br"),t._v("\n异步 fchown().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.fchownSync(fd, uid, gid)")]),r("br"),t._v("\n同步 fchown()")]),t._v(" "),r("p",[r("strong",[t._v("fs.lchown(path, uid, gid, callback)")]),r("br"),t._v("\n异步 lchown().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.lchownSync(path, uid, gid)")]),r("br"),t._v("\n同步 lchown()")]),t._v(" "),r("p",[r("strong",[t._v("fs.chmod(path, mode, callback)")]),r("br"),t._v("\n异步 chmod().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.chmodSync(path, mode)")]),r("br"),t._v("\n同步 chmod().")]),t._v(" "),r("p",[r("strong",[t._v("fs.fchmod(fd, mode, callback)")]),r("br"),t._v("\n异步 fchmod().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.fchmodSync(fd, mode)")]),r("br"),t._v("\n同步 fchmod().")]),t._v(" "),r("p",[r("strong",[t._v("fs.lchmod(path, mode, callback)")]),r("br"),t._v("\n异步 lchmod().回调函数没有参数，但可能抛出异常。Only available on Mac OS X.")]),t._v(" "),r("p",[r("strong",[t._v("fs.lchmodSync(path, mode)")]),r("br"),t._v("\n同步 lchmod().")]),t._v(" "),r("p",[r("strong",[t._v("fs.stat(path, callback)")]),r("br"),t._v("\n异步 stat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象，提供有关文件的信息。")]),t._v(" "),r("p",[r("strong",[t._v("fs.lstat(path, callback)")]),r("br"),t._v("\n异步 lstat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象，提供有关文件的信息。")]),t._v(" "),r("p",[r("strong",[t._v("fs.fstat(fd, callback)")]),r("br"),t._v("\n异步 fstat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象。")]),t._v(" "),r("p",[r("strong",[t._v("fs.statSync(path)")]),r("br"),t._v("\n同步 stat(). 返回 fs.Stats 的实例。")]),t._v(" "),r("p",[r("strong",[t._v("fs.lstatSync(path)")]),r("br"),t._v("\n同步 lstat(). 返回 fs.Stats 的实例。")]),t._v(" "),r("p",[r("strong",[t._v("fs.fstatSync(fd)")]),r("br"),t._v("\n同步 fstat(). 返回 fs.Stats 的实例。")]),t._v(" "),r("p",[r("strong",[t._v("fs.link(srcpath, dstpath, callback)")]),r("br"),t._v("\n异步 link().回调函数没有参数，但可能抛出异常，文件或符号链接。")]),t._v(" "),r("p",[r("strong",[t._v("fs.linkSync(srcpath, dstpath)")]),r("br"),t._v("\n同步 link().")]),t._v(" "),r("p",[r("strong",[t._v("fs.symlink(srcpath, dstpath[, type], callback)")]),r("br"),t._v("\n异步 symlink().回调函数没有参数，但可能抛出异常。 type 参数可以设置为 'dir', 'file', 或 'junction' (默认为 'file') 。")]),t._v(" "),r("p",[r("strong",[t._v("fs.symlinkSync(srcpath, dstpath[, type])")]),r("br"),t._v("\n同步 symlink().")]),t._v(" "),r("p",[r("strong",[t._v("fs.readlink(path, callback)")]),r("br"),t._v("\n异步 readlink(). 回调函数有两个参数 err, linkString。")]),t._v(" "),r("p",[r("strong",[t._v("fs.realpath(path[, cache], callback)")]),r("br"),t._v("\n异步 realpath(). 回调函数有两个参数 err, resolvedPath。\n通过解析 .、 .. 和符号链接异步地计算规范路径名")]),t._v(" "),r("p",[r("strong",[t._v("fs.realpathSync(path[, cache])")]),r("br"),t._v("\n同步 realpath()。返回绝对路径。")]),t._v(" "),r("p",[t._v("31")]),t._v(" "),r("p",[r("strong",[t._v("fs.unlink(path, callback)")]),r("br"),t._v("\n异步 unlink().回调函数没有参数，但可能抛出异常。\n异步地删除文件或符号链接")]),t._v(" "),r("p",[r("strong",[t._v("fs.unlinkSync(path)")]),r("br"),t._v("\n同步 unlink().")]),t._v(" "),r("p",[r("strong",[t._v("fs.rmdir(path, callback)")]),r("br"),t._v("\n异步 rmdir().回调函数没有参数，但可能抛出异常。\n删除目录")]),t._v(" "),r("p",[r("strong",[t._v("fs.rmdirSync(path)")]),r("br"),t._v("\n同步 rmdir().")]),t._v(" "),r("p",[r("strong",[t._v("fs.mkdir(path[, mode], callback)")]),r("br"),t._v("\n异步 mkdir(2).回调函数没有参数，但可能抛出异常。 访问权限默认为 0777。\n创建目录")]),t._v(" "),r("p",[r("strong",[t._v("fs.mkdirSync(path[, mode])")]),r("br"),t._v("\n同步 mkdir().")]),t._v(" "),r("p",[r("strong",[t._v("fs.readdir(path, callback)")]),r("br"),t._v("\n异步 readdir(3). 读取目录的内容。")]),t._v(" "),r("p",[r("strong",[t._v("fs.readdirSync(path)")]),r("br"),t._v("\n同步 readdir().返回文件数组列表。")]),t._v(" "),r("p",[r("strong",[t._v("fs.close(fd, callback)")]),r("br"),t._v("\n异步 close().回调函数没有参数，但可能抛出异常。\n关闭文件")]),t._v(" "),r("p",[r("strong",[t._v("fs.closeSync(fd)")]),r("br"),t._v("\n同步 close().")]),t._v(" "),r("p",[r("strong",[t._v("fs.open(path, flags[, mode], callback)")]),r("br"),t._v("\n异步打开文件。")]),t._v(" "),r("p",[r("strong",[t._v("fs.openSync(path, flags[, mode])")]),r("br"),t._v("\n同步 version of fs.open().")]),t._v(" "),r("p",[r("strong",[t._v("fs.utimes(path, atime, mtime, callback)")]),r("br"),t._v("\n修改文件时间戳，文件通过指定的文件路径。")]),t._v(" "),r("p",[r("strong",[t._v("fs.utimesSync(path, atime, mtime)")]),r("br"),t._v("\n修改文件时间戳，文件通过指定的文件路径。")]),t._v(" "),r("p",[r("strong",[t._v("fs.futimes(fd, atime, mtime, callback)")]),r("br"),t._v("\n修改文件时间戳，通过文件描述符指定。")]),t._v(" "),r("p",[r("strong",[t._v("fs.futimesSync(fd, atime, mtime)")]),r("br"),t._v("\n修改文件时间戳，通过文件描述符指定。")]),t._v(" "),r("p",[r("strong",[t._v("fs.fsync(fd, callback)")]),r("br"),t._v("\n异步 fsync.回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[r("strong",[t._v("fs.fsyncSync(fd)")]),r("br"),t._v("\n同步 fsync.")]),t._v(" "),r("p",[r("strong",[t._v("fs.write(fd, buffer, offset, length[, position], callback)")]),r("br"),t._v("\n将缓冲区内容写入到通过文件描述符指定的文件。")]),t._v(" "),r("p",[r("strong",[t._v("fs.write(fd, data[, position[, encoding]], callback)")]),r("br"),t._v("\n通过文件描述符 fd 写入文件内容。")]),t._v(" "),r("p",[r("strong",[t._v("fs.writeSync(fd, buffer, offset, length[, position])")]),r("br"),t._v("\n同步版的 fs.write()。")]),t._v(" "),r("p",[r("strong",[t._v("fs.writeSync(fd, data[, position[, encoding]])")]),r("br"),t._v("\n同步版的 fs.write().")]),t._v(" "),r("p",[r("strong",[t._v("fs.read(fd, buffer, offset, length, position, callback)")]),r("br"),t._v("\n通过文件描述符 fd 读取文件内容。")]),t._v(" "),r("p",[r("strong",[t._v("fs.readSync(fd, buffer, offset, length, position)")]),r("br"),t._v("\n同步版的 fs.read.")]),t._v(" "),r("p",[r("strong",[t._v("fs.readFile(filename[, options], callback)")]),r("br"),t._v("\n异步读取文件内容。")]),t._v(" "),r("p",[r("strong",[t._v("fs.readFileSync(filename[, options])")])]),t._v(" "),r("p",[r("strong",[t._v("fs.writeFile(filename, data[, options], callback)")]),r("br"),t._v("\n异步写入文件内容。")]),t._v(" "),r("p",[r("strong",[t._v("fs.writeFileSync(filename, data[, options])")]),r("br"),t._v("\n同步版的 fs.writeFile。")]),t._v(" "),r("p",[r("strong",[t._v("fs.appendFile(filename, data[, options], callback)")]),r("br"),t._v("\n异步追加文件内容。")]),t._v(" "),r("p",[r("strong",[t._v("fs.appendFileSync(filename, data[, options])")]),r("br"),t._v("\nThe 同步 version of fs.appendFile.")]),t._v(" "),r("p",[r("strong",[t._v("fs.watchFile(filename[, options], listener)")]),r("br"),t._v("\n查看文件的修改。")]),t._v(" "),r("p",[r("strong",[t._v("fs.unwatchFile(filename[, listener])")]),r("br"),t._v("\n停止查看 filename 的修改。")]),t._v(" "),r("p",[r("strong",[t._v("fs.watch(filename[, options][, listener])")]),r("br"),t._v("\n查看 filename 的修改，filename 可以是文件或目录。返回 fs.FSWatcher 对象。")]),t._v(" "),r("p",[r("strong",[t._v("fs.exists(path, callback)")]),r("br"),t._v("\n检测给定的路径是否存在。")]),t._v(" "),r("p",[r("strong",[t._v("fs.existsSync(path)")]),r("br"),t._v("\n同步版的 fs.exists.")]),t._v(" "),r("p",[r("strong",[t._v("fs.access(path[, mode], callback)")]),r("br"),t._v("\n测试指定路径用户权限。")]),t._v(" "),r("p",[r("strong",[t._v("fs.accessSync(path[, mode])")]),r("br"),t._v("\n同步版的 fs.access。")]),t._v(" "),r("p",[r("strong",[t._v("fs.createReadStream(path[, options])")]),r("br"),t._v("\n返回ReadStream 对象。")]),t._v(" "),r("p",[r("strong",[t._v("fs.createWriteStream(path[, options])")]),r("br"),t._v("\n返回 WriteStream 对象。")]),t._v(" "),r("p",[r("strong",[t._v("fs.symlink(srcpath, dstpath[, type], callback)")]),r("br"),t._v("\n异步 symlink().回调函数没有参数，但可能抛出异常。")]),t._v(" "),r("p",[t._v("更多内容，请查看官网文件模块描述："),r("a",{attrs:{href:"https://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback",target:"_blank",rel:"noopener noreferrer"}},[t._v("File System"),r("OutboundLink")],1),t._v("。")])])},[],!1,null,null,null);a.default=e.exports}}]);