(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{205:function(e,s,a){"use strict";a.r(s);var n=a(0),t=Object(n.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"localforage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localforage","aria-hidden":"true"}},[e._v("#")]),e._v(" localForage")]),e._v(" "),a("p",[e._v("localStorage 能够让你实现基本的数据存储，但它的速度慢，而且不能处理二进制数据。")]),e._v(" "),a("p",[e._v("IndexedDB 和 WebSQL 是异步的，速度快，支持大数据集，但他们的API 使用起来有点复杂。不仅如此，IndexedDB 和 WebSQL 没有被所有的主流的浏览器厂商支持，这种情况最近也不太可能改变。")]),e._v(" "),a("p",[a("code",[e._v("localForage")]),e._v("库是由Mozilla 开发javascript 的库 ，使得离线数据存储在任何浏览器都是一项容易的任务。")]),e._v(" "),a("p",[a("code",[e._v("localForage")]),e._v(" 是一个使用非常简单的 JavaScript 库的，提供了 "),a("code",[e._v("get，set，remove，clear")]),e._v(" 和 length 等等 API，还具有以下特点：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("支持回调的异步 API；")])]),e._v(" "),a("li",[a("p",[e._v("支持 IndexedDB，WebSQL 和 localStorage 三种存储模式（自动为你加载最佳的驱动程序）；")])]),e._v(" "),a("li",[a("p",[e._v("支持 BLOB 和任意类型的数据，让您可以存储图片，文件等等。")])]),e._v(" "),a("li",[a("p",[e._v("支持 ES6 Promises；\n　\n　对 IndexedDB 和 WebSQL 的支持使您可以为您的 Web 应用程序存储更多的数据，要比 localStorage 允许存储的多很多。其 API 的无阻塞性质使得您的应用程序更快，不会因为 Get/Set 调用而挂起主线程。")])])]),e._v(" "),a("blockquote",[a("p",[e._v("localStorage\n　　传统的  API 在许多方面其实是很不错的，使用简单，没有复杂的数据结构。如果你在你的应用程序有一个配置信息需要保持，可以这样写：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 需要离线保存的配置数据\nvar config = {\n    fullName: document.getElementById('name').getAttribute('value'),\n    userId: document.getElementById('id').getAttribute('value')\n};\n  \n// 保存起来，供下次使用\nlocalStorage.setItem('config', JSON.stringify(config));\n  \n// 从离线存储中读取出来\nvar config = JSON.parse(localStorage.getItem('config'));\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("请注意，使用 localStorage 存储的数据需要保存为字符串，所以我们在保存和读取时需要进行 JSON 序列化和反序列化。")]),e._v(" "),a("p",[e._v("看起来好像使用很简单，但你很快会发现 "),a("strong",[e._v("localStorage 的几个问题")]),e._v("：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("它是"),a("strong",[e._v("同步")]),e._v("的。不管数据多大，我们需要等待数据从"),a("strong",[e._v("磁盘")]),e._v("读取和解析，这会"),a("strong",[e._v("减慢我们的应用程序的响应速度")]),e._v("。这在移动设备上是特别糟糕的，主线程被挂起，直到数据被取出，会使你的应用程序看起来慢，甚至没有反应。")])]),e._v(" "),a("li",[a("p",[e._v("它仅支持字符串。需要使用 JSON.parse 与 JSON.stringify 进行序列号和反序列化。这是因为 localStorage 中仅支持 JavaScript 字符串值。不支持数值，布尔值，Blob 类型的数据。")])])]),e._v(" "),a("blockquote",[a("p",[e._v("localForage\n　　"),a("code",[e._v("localForage")]),e._v(" 可以解决上面的问题，下面我们对比一下 "),a("code",[e._v("IndexedDB")]),e._v(" 和 "),a("code",[e._v("localForage")]),e._v(" 存储相同数据的差异：")])]),e._v(" "),a("p",[e._v("IndexedDB 代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// IndexedDB.\nvar db;\nvar dbName = "dataspace";\nvar users = [ {id: 1, fullName: \'Matt\'}, {id: 2, fullName: \'Bob\'} ];\nvar request = indexedDB.open(dbName, 2);\nrequest.onerror = function(event) {\n    // 错误处理\n};\nrequest.onupgradeneeded = function(event) {\n    db = event.target.result;\n    var objectStore = db.createObjectStore("users", { keyPath: "id" });\n    objectStore.createIndex("fullName", "fullName", { unique: false });\n    objectStore.transaction.oncomplete = function(event) {\n        var userObjectStore = db.transaction("users", "readwrite").objectStore("users");\n    }\n};\n  \nvar transaction = db.transaction(["users"], "readwrite");\n// 所有数据都添加到数据后调用\ntransaction.oncomplete = function(event) {\n    console.log("All done!");\n};\ntransaction.onerror = function(event) {\n    // 错误处理\n};\n  \nvar objectStore = transaction.objectStore("users");\nfor (var i in users) {\n    var request = objectStore.add(users[i]);\n    request.onsuccess = function(event) {\n        // 里面包含我们需要的用户信息\n        console.log(event.target.result);\n    };\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br")])]),a("p",[e._v("使用 WebSQL 实现可能不会那么太冗长，但也是有点复杂。使用 localForage，可以这样写：")]),e._v(" "),a("p",[e._v("localForage 代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 保存用户信息\nvar users = [ {id: 1, fullName: 'Matt'}, {id: 2, fullName: 'Bob'} ];\nlocalForage.setItem('users', users, function(result) {\n    console.log(result);\n});\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("是不是简单了很多？")]),e._v(" "),a("blockquote",[a("p",[e._v("支持非字符串数据\n　　比方说，你要下载一个用户的个人资料图片，并对其进行缓存以供离线使用。使用 localForage 很容易保存二进制数据：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 使用 AJAX 下载图片\nvar request = new XMLHttpRequest();\n  \n// 以获取第一个用户的资料图片为例\nrequest.open('GET', \"/users/1/profile_picture.jpg\", true);\nrequest.responseType = 'arraybuffer';\n  \n// 当 AJAX 调用完成，把图片保存到本地\nrequest.addEventListener('readystatechange', function() {\n    if (request.readyState === 4) { // readyState DONE\n        // 保存的是二进制数据，如果用 localStorage 就无法实现\n        localForage.setItem('user_1_photo', request.response, function() {\n            // 图片已保存，想怎么用都可以\n        });\n    }\n});\n  \nrequest.send()\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br")])]),a("p",[e._v("下次，只用三行代码就可以从缓存中把照片读取出来：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("localForage.getItem('user_1_photo', function(photo) {\n    // 获取到图片数据后，可以通过创建 data URI 或者其它方法来显示\n    console.log(photo);\n});\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("blockquote",[a("p",[e._v("Callbacks & Promises")])]),e._v(" "),a("p",[e._v("如果你不喜欢在你的代码中使用回调，你可以使用 ES6 Promises，来替换 localForage 的回调参数。让我们使用上面的照片例子，看下使用 Promises 的代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("localForage.getItem('user_1_photo').then(function(photo) {\n    // 获取到图片数据后，可以通过创建 data URI 或者其它方法来显示\n    console.log(photo);\n});\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("blockquote",[a("p",[e._v("跨浏览器支持")])]),e._v(" "),a("p",[e._v("localForage 支持所有现代浏览器（包括 IE8 及更高版本）。支持的浏览器和平台如下：")]),e._v(" "),a("ul",[a("li",[e._v("Android Browser 2.1")]),e._v(" "),a("li",[e._v("Blackberry 7")]),e._v(" "),a("li",[e._v("Chrome 23 (Chrome 4.0 with localStorage)\n= Chrome for Android 32")]),e._v(" "),a("li",[e._v("Firefox 10 (Firefox 3.5 with localStorage)")]),e._v(" "),a("li",[e._v("Firefox for Android 25")]),e._v(" "),a("li",[e._v("Firefox OS 1.0")]),e._v(" "),a("li",[e._v("IE 10 (IE 8 with localStorage)")]),e._v(" "),a("li",[e._v("IE Mobile 10")]),e._v(" "),a("li",[e._v("Opera 15 (Opera 10.5 with localStorage)")]),e._v(" "),a("li",[e._v("Opera Mobile 11")]),e._v(" "),a("li",[e._v("Phonegap/Apache Cordova 1.2.0")]),e._v(" "),a("li",[e._v("Safari 3.1 (includes Mobile Safari)")])])])},[],!1,null,null,null);s.default=t.exports}}]);