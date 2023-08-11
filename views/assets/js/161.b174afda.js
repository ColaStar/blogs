(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{643:function(n,t,e){"use strict";e.r(t);var r=e(63),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"前端路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[n._v("#")]),n._v(" 前端路由")]),n._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),e("p",[n._v("现代前端项目多为单页Web应用(SPA)，在单页Web应用中路由是其中的重要环节。")]),n._v(" "),e("p",[n._v("每个现代前端框架都有与之对应的路由实现，例如 "),e("code",[n._v("vue-router")]),n._v("、"),e("code",[n._v("react-router")]),n._v(" 等。")]),n._v(" "),e("p",[n._v("本文并不涉及 "),e("code",[n._v("vue-router")]),n._v("、"),e("code",[n._v("react-router")]),n._v(" 的实现方式，而是介绍前端路由的基本实现原理及实现方式。")]),n._v(" "),e("p",[e("code",[n._v("vue-router")]),n._v("、"),e("code",[n._v("react-router")]),n._v(" 的源码解析，会在以后的文章中逐步推出。")]),n._v(" "),e("h2",{attrs:{id:"什么是-spa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-spa"}},[n._v("#")]),n._v(" 什么是 SPA")]),n._v(" "),e("p",[n._v("SPA 是 single page web application 的简称，译为单页Web应用。")]),n._v(" "),e("p",[n._v("简单的说 SPA 就是一个WEB项目只有一个 HTML 页面，一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转。 取而代之的是利用 JS 动态的变换 HTML 的内容，从而来模拟多个视图间跳转。")]),n._v(" "),e("p",[n._v("从传统页面到视图")]),n._v(" "),e("p",[n._v("对于初学者来说，理解传统页面与 SPA 视图间的差异是困难的。")]),n._v(" "),e("p",[n._v("在这里，用两张图，来分别表明传统页面与 SPA 视图间的区别：")]),n._v(" "),e("p",[n._v("上图表明了，在传统的网站设计中，每个HTML文件都是一个完成的HTML页面，涵盖了完整的HTML结构。")]),n._v(" "),e("p",[n._v("上图表明了，在 SPA 的应用设计中，一个应用只有一个HTML文件，在HTML文件中包含一个占位符（即图中的 container），占位符对应的内容由每个视图来决定，对于 SPA 来说，页面的切换就是视图之间的切换。")]),n._v(" "),e("p",[n._v("前端路由的由来\n最开始的网页是多页面的，直到 Ajax 的出现，才慢慢有了 SPA。")]),n._v(" "),e("p",[n._v("SPA 的出现大大提高了 WEB 应用的交互体验。在与用户的交互过程中，不再需要重新刷新页面，获取数据也是通过 Ajax 异步获取，页面显示变的更加流畅。")]),n._v(" "),e("p",[n._v("但由于 SPA 中用户的交互是通过 JS 改变 HTML 内容来实现的，页面本身的 url 并没有变化，这导致了两个问题：")]),n._v(" "),e("p",[n._v("SPA 无法记住用户的操作记录，无论是刷新、前进还是后退，都无法展示用户真实的期望内容。\nSPA 中虽然由于业务的不同会有多种页面展示形式，但只有一个 url，对 SEO 不友好，不方便搜索引擎进行收录。\n前端路由就是为了解决上述问题而出现的。")]),n._v(" "),e("p",[n._v("什么是前端路由\n简单的说，就是在保证只有一个 HTML 页面，且与用户交互时不刷新和跳转页面的同时，为 SPA 中的每个视图展示形式匹配一个特殊的 url。在刷新、前进、后退和SEO时均通过这个特殊的 url 来实现。")]),n._v(" "),e("p",[n._v("为实现这一目标，我们需要做到以下二点：")]),n._v(" "),e("p",[n._v("改变 url 且不让浏览器像服务器发送请求。\n可以监听到 url 的变化\n接下来要介绍的 hash 模式和 history 模式，就是实现了上面的功能")]),n._v(" "),e("p",[n._v('hash 模式\n这里的 hash 就是指 url 后的 # 号以及后面的字符。比如说 "www.baidu.com/#hashhash" ，其中 "#hashhash" 就是我们期望的 hash 值。')]),n._v(" "),e("p",[n._v("由于 hash 值的变化不会导致浏览器像服务器发送请求，而且 hash 的改变会触发 hashchange 事件，浏览器的前进后退也能对其进行控制，所以在 H5 的 history 模式出现之前，基本都是使用 hash 模式来实现前端路由。")]),n._v(" "),e("p",[n._v("使用到的API:")]),n._v(" "),e("p",[n._v("window.location.hash = 'hash字符串'; // 用于设置 hash 值")]),n._v(" "),e("p",[n._v("let hash = window.location.hash; // 获取当前 hash 值")]),n._v(" "),e("p",[n._v("// 监听hash变化，点击浏览器的前进后退会触发\nwindow.addEventListener('hashchange', function(event){\nlet newURL = event.newURL; // hash 改变后的新 url\nlet oldURL = event.oldURL; // hash 改变前的旧 url\n},false)\n复制代码\n接下来我们来实现一个路由对象")]),n._v(" "),e("p",[n._v("创建一个路由对象, 实现 register 方法用于注册每个 hash 值对应的回调函数")]),n._v(" "),e("p",[n._v("class HashRouter{\nconstructor(){\n//用于存储不同hash值对应的回调函数\nthis.routers = {};\n}\n//用于注册每个视图\nregister(hash,callback = function(){}){\nthis.routers[hash] = callback;\n}\n}\n复制代码\n不存在hash值时，认为是首页，所以实现 registerIndex 方法用于注册首页时的回调函数")]),n._v(" "),e("p",[n._v("class HashRouter{\nconstructor(){\n//用于存储不同hash值对应的回调函数\nthis.routers = {};\n}\n//用于注册每个视图\nregister(hash,callback = function(){}){\nthis.routers[hash] = callback;\n}\n//用于注册首页\nregisterIndex(callback = function(){}){\nthis.routers['index'] = callback;\n}\n}\n复制代码\n通过 hashchange 监听 hash 变化，并定义 hash 变化时的回调函数")]),n._v(" "),e("p",[n._v("class HashRouter{\nconstructor(){\n//用于存储不同hash值对应的回调函数\nthis.routers = {};\nwindow.addEventListener('hashchange',this.load.bind(this),false)\n}\n//用于注册每个视图\nregister(hash,callback = function(){}){\nthis.routers[hash] = callback;\n}\n//用于注册首页\nregisterIndex(callback = function(){}){\nthis.routers['index'] = callback;\n}\n//用于调用不同视图的回调函数\nload(){\nlet hash = location.hash.slice(1),\nhandler;\n//没有hash 默认为首页\nif(!hash){\nhandler = this.routers.index;\n}else{\nhandler = this.routers[hash];\n}\n//执行注册的回调函数\nhandler.call(this);\n}\n}\n复制代码\n我们做一个例子来演示一下我们刚刚完成的 HashRouter")]),n._v(" "),e("body",[e("div",{attrs:{id:"nav"}},[e("a",{attrs:{href:"#/page1"}},[n._v("page1")]),n._v(" "),e("a",{attrs:{href:"#/page2"}},[n._v("page2")]),n._v(" "),e("a",{attrs:{href:"#/page3"}},[n._v("page3")])]),n._v(" "),e("div",{attrs:{id:"container"}})]),n._v("\n复制代码\nlet router = new HashRouter();\nlet container = document.getElementById('container');\n"),e("p",[n._v("//注册首页回调函数\nrouter.registerIndex(()=> container.innerHTML = '我是首页');")]),n._v(" "),e("p",[n._v("//注册其他视图回到函数\nrouter.register('/page1',()=> container.innerHTML = '我是page1');\nrouter.register('/page2',()=> container.innerHTML = '我是page2');\nrouter.register('/page3',()=> container.innerHTML = '我是page3');")]),n._v(" "),e("p",[n._v("//加载视图\nrouter.load();\n复制代码\n来看一下效果：")]),n._v(" "),e("p",[n._v("基本的路由功能我们已经实现了，但依然有点小问题")]),n._v(" "),e("p",[n._v("缺少对未在路由中注册的 hash 值的处理\nhash 值对应的回调函数在执行过程中抛出异常\n对应的解决办法如下：")]),n._v(" "),e("p",[n._v("我们追加 registerNotFound 方法，用于注册 hash 值未找到时的默认回调函数；\n修改 load 方法，追加 try/catch 用于捕获异常，追加 registerError 方法，用于处理异常\n代码修改后：")]),n._v(" "),e("p",[n._v("class HashRouter{\nconstructor(){\n//用于存储不同hash值对应的回调函数\nthis.routers = {};\nwindow.addEventListener('hashchange',this.load.bind(this),false)\n}\n//用于注册每个视图\nregister(hash,callback = function(){}){\nthis.routers[hash] = callback;\n}\n//用于注册首页\nregisterIndex(callback = function(){}){\nthis.routers['index'] = callback;\n}\n//用于处理视图未找到的情况\nregisterNotFound(callback = function(){}){\nthis.routers['404'] = callback;\n}\n//用于处理异常情况\nregisterError(callback = function(){}){\nthis.routers['error'] = callback;\n}\n//用于调用不同视图的回调函数\nload(){\nlet hash = location.hash.slice(1),\nhandler;\n//没有hash 默认为首页\nif(!hash){\nhandler = this.routers.index;\n}\n//未找到对应hash值\nelse if(!this.routers.hasOwnProperty(hash)){\nhandler = this.routers['404'] || function(){};\n}\nelse{\nhandler = this.routers[hash]\n}\n//执行注册的回调函数\ntry{\nhandler.apply(this);\n}catch(e){\nconsole.error(e);\n(this.routers['error'] || function(){}).call(this,e);\n}\n}\n}\n复制代码\n再来一个例子，演示一下：")]),n._v(" "),e("body",[e("div",{attrs:{id:"nav"}},[e("a",{attrs:{href:"#/page1"}},[n._v("page1")]),n._v(" "),e("a",{attrs:{href:"#/page2"}},[n._v("page2")]),n._v(" "),e("a",{attrs:{href:"#/page3"}},[n._v("page3")]),n._v(" "),e("a",{attrs:{href:"#/page4"}},[n._v("page4")]),n._v(" "),e("a",{attrs:{href:"#/page5"}},[n._v("page5")])]),n._v(" "),e("div",{attrs:{id:"container"}})]),n._v("\n复制代码\nlet router = new HashRouter();\nlet container = document.getElementById('container');\n"),e("p",[n._v("//注册首页回调函数\nrouter.registerIndex(()=> container.innerHTML = '我是首页');")]),n._v(" "),e("p",[n._v("//注册其他视图回到函数\nrouter.register('/page1',()=> container.innerHTML = '我是page1');\nrouter.register('/page2',()=> container.innerHTML = '我是page2');\nrouter.register('/page3',()=> container.innerHTML = '我是page3');\nrouter.register('/page4',()=> {throw new Error('抛出一个异常')});")]),n._v(" "),e("p",[n._v("//加载视图\nrouter.load();\n//注册未找到对应hash值时的回调\nrouter.registerNotFound(()=>container.innerHTML = '页面未找到');\n//注册出现异常时的回调\nrouter.registerError((e)=>container.innerHTML = '页面异常，错误消息："),e("br"),n._v("' + e.message);\n复制代码\n来看一下效果：")]),n._v(" "),e("p",[n._v("至此，基于 hash 方式实现的前端路由，我们已经将基本雏形实现完成了。")]),n._v(" "),e("p",[n._v("接下来我们来介绍前端路由的另一种模式：history 模式。")]),n._v(" "),e("p",[n._v("history 模式\n在 HTML5 之前，浏览器就已经有了 history 对象。但在早期的 history 中只能用于多页面的跳转：")]),n._v(" "),e("p",[n._v("history.go(-1);       // 后退一页\nhistory.go(2);        // 前进两页\nhistory.forward();     // 前进一页\nhistory.back();      // 后退一页\n复制代码\n在 HTML5 的规范中，history 新增了以下几个 API：")]),n._v(" "),e("p",[n._v("history.pushState();         // 添加新的状态到历史状态栈\nhistory.replaceState();      // 用新的状态代替当前状态\nhistory.state                // 返回当前状态对象\n复制代码\n来自MDN的解释：")]),n._v(" "),e("p",[n._v("HTML5引入了 history.pushState() 和 history.replaceState() 方法，它们分别可以添加和修改历史记录条目。这些方法通常与window.onpopstate 配合使用。")]),n._v(" "),e("p",[n._v("history.pushState() 和 history.replaceState() 均接收三个参数（state, title, url）")]),n._v(" "),e("p",[n._v("参数说明如下：")]),n._v(" "),e("p",[n._v("state：合法的 Javascript 对象，可以用在 popstate 事件中\ntitle：现在大多浏览器忽略这个参数，可以直接用 null 代替\nurl：任意有效的 URL，用于更新浏览器的地址栏\nhistory.pushState() 和 history.replaceState() 的区别在于：")]),n._v(" "),e("p",[n._v("history.pushState() 在保留现有历史记录的同时，将 url 加入到历史记录中。\nhistory.replaceState() 会将历史记录中的当前页面历史替换为 url。\n由于 history.pushState() 和 history.replaceState() 可以改变 url 同时，不会刷新页面，所以在 HTML5 中的 histroy 具备了实现前端路由的能力。")]),n._v(" "),e("p",[n._v("回想我们之前完成的 hash 模式，当 hash 变化时，可以通过 hashchange 进行监听。 而 history 的改变并不会触发任何事件，所以我们无法直接监听 history 的改变而做出相应的改变。")]),n._v(" "),e("p",[n._v("所以，我们需要换个思路，我们可以罗列出所有可能触发 history 改变的情况，并且将这些方式一一进行拦截，变相地监听 history 的改变。")]),n._v(" "),e("p",[n._v("对于单页应用的 history 模式而言，url 的改变只能由下面四种方式引起：")]),n._v(" "),e("p",[n._v("点击浏览器的前进或后退按钮\n点击 a 标签\n在 JS 代码中触发 history.pushState 函数\n在 JS 代码中触发 history.replaceState 函数\n思路已经有了，接下来我们来实现一个路由对象")]),n._v(" "),e("p",[n._v("创建一个路由对象, 实现 register 方法用于注册每个 location.pathname 值对应的回调函数\n当 location.pathname === '/' 时，认为是首页，所以实现 registerIndex 方法用于注册首页时的回调函数\n解决 location.path 没有对应的匹配，增加方法 registerNotFound 用于注册默认回调函数\n解决注册的回到函数执行时出现异常，增加方法 registerError 用于处理异常情况\nclass HistoryRouter{\nconstructor(){\n//用于存储不同path值对应的回调函数\nthis.routers = {};\n}\n//用于注册每个视图\nregister(path,callback = function(){}){\nthis.routers[path] = callback;\n}\n//用于注册首页\nregisterIndex(callback = function(){}){\nthis.routers['/'] = callback;\n}\n//用于处视图未找到的情况\nregisterNotFound(callback = function(){}){\nthis.routers['404'] = callback;\n}\n//用于处理异常情况\nregisterError(callback = function(){}){\nthis.routers['error'] = callback;\n}\n}\n复制代码\n定义 assign 方法，用于通过 JS 触发 history.pushState 函数\n定义 replace 方法，用于通过 JS 触发 history.replaceState 函数\nclass HistoryRouter{\nconstructor(){\n//用于存储不同path值对应的回调函数\nthis.routers = {};\n}\n//用于注册每个视图\nregister(path,callback = function(){}){\nthis.routers[path] = callback;\n}\n//用于注册首页\nregisterIndex(callback = function(){}){\nthis.routers['/'] = callback;\n}\n//用于处理视图未找到的情况\nregisterNotFound(callback = function(){}){\nthis.routers['404'] = callback;\n}\n//用于处理异常情况\nregisterError(callback = function(){}){\nthis.routers['error'] = callback;\n}\n//跳转到path\nassign(path){\nhistory.pushState({path},null,path);\nthis.dealPathHandler(path)\n}\n//替换为path\nreplace(path){\nhistory.replaceState({path},null,path);\nthis.dealPathHandler(path)\n}\n//通用处理 path 调用回调函数\ndealPathHandler(path){\nlet handler;\n//没有对应path\nif(!this.routers.hasOwnProperty(path)){\nhandler = this.routers['404'] || function(){};\n}\n//有对应path\nelse{\nhandler = this.routers[path];\n}\ntry{\nhandler.call(this)\n}catch(e){\nconsole.error(e);\n(this.routers['error'] || function(){}).call(this,e);\n}\n}\n}\n复制代码\n监听 popstate 用于处理前进后退时调用对应的回调函数\n全局阻止A链接的默认事件，获取A链接的href属性，并调用 history.pushState 方法\n定义 load 方法，用于首次进入页面时 根据 location.pathname 调用对应的回调函数\n最终代码如下：")]),n._v(" "),e("p",[n._v("class HistoryRouter{\nconstructor(){\n//用于存储不同path值对应的回调函数\nthis.routers = {};\nthis.listenPopState();\nthis.listenLink();\n}\n//监听popstate\nlistenPopState(){\nwindow.addEventListener('popstate',(e)=>{\nlet state = e.state || {},\npath = state.path || '';\nthis.dealPathHandler(path)\n},false)\n}\n//全局监听A链接\nlistenLink(){\nwindow.addEventListener('click',(e)=>{\nlet dom = e.target;\nif(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){\ne.preventDefault()\nthis.assign(dom.getAttribute('href'));\n}\n},false)\n}\n//用于首次进入页面时调用\nload(){\nlet path = location.pathname;\nthis.dealPathHandler(path)\n}\n//用于注册每个视图\nregister(path,callback = function(){}){\nthis.routers[path] = callback;\n}\n//用于注册首页\nregisterIndex(callback = function(){}){\nthis.routers['/'] = callback;\n}\n//用于处理视图未找到的情况\nregisterNotFound(callback = function(){}){\nthis.routers['404'] = callback;\n}\n//用于处理异常情况\nregisterError(callback = function(){}){\nthis.routers['error'] = callback;\n}\n//跳转到path\nassign(path){\nhistory.pushState({path},null,path);\nthis.dealPathHandler(path)\n}\n//替换为path\nreplace(path){\nhistory.replaceState({path},null,path);\nthis.dealPathHandler(path)\n}\n//通用处理 path 调用回调函数\ndealPathHandler(path){\nlet handler;\n//没有对应path\nif(!this.routers.hasOwnProperty(path)){\nhandler = this.routers['404'] || function(){};\n}\n//有对应path\nelse{\nhandler = this.routers[path];\n}\ntry{\nhandler.call(this)\n}catch(e){\nconsole.error(e);\n(this.routers['error'] || function(){}).call(this,e);\n}\n}\n}\n复制代码\n再做一个例子来演示一下我们刚刚完成的 HistoryRouter")]),n._v(" "),e("body",[e("div",{attrs:{id:"nav"}},[e("a",{attrs:{href:"/page1"}},[n._v("page1")]),n._v(" "),e("a",{attrs:{href:"/page2"}},[n._v("page2")]),n._v(" "),e("a",{attrs:{href:"/page3"}},[n._v("page3")]),n._v(" "),e("a",{attrs:{href:"/page4"}},[n._v("page4")]),n._v(" "),e("a",{attrs:{href:"/page5"}},[n._v("page5")]),n._v(" "),e("button",{attrs:{id:"btn"}},[n._v("page2")])]),n._v(" "),e("div",{attrs:{id:"container"}},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("</div>\n")])])])])]),n._v("\n复制代码\nlet router = new HistoryRouter();\nlet container = document.getElementById('container');\n"),e("p",[n._v("//注册首页回调函数\nrouter.registerIndex(() => container.innerHTML = '我是首页');")]),n._v(" "),e("p",[n._v("//注册其他视图回到函数\nrouter.register('/page1', () => container.innerHTML = '我是page1');\nrouter.register('/page2', () => container.innerHTML = '我是page2');\nrouter.register('/page3', () => container.innerHTML = '我是page3');\nrouter.register('/page4', () => {\nthrow new Error('抛出一个异常')\n});")]),n._v(" "),e("p",[n._v("document.getElementById('btn').onclick = () => router.assign('/page2')")]),n._v(" "),e("p",[n._v("//注册未找到对应path值时的回调\nrouter.registerNotFound(() => container.innerHTML = '页面未找到');\n//注册出现异常时的回调\nrouter.registerError((e) => container.innerHTML = '页面异常，错误消息："),e("br"),n._v("' + e.message);\n//加载页面\nrouter.load();\n复制代码\n来看一下效果：")]),n._v(" "),e("p",[n._v("至此，基于 history 方式实现的前端路由，我们已经将基本雏形实现完成了。")]),n._v(" "),e("p",[n._v("但需要注意的是，history 在修改 url 后，虽然页面并不会刷新，但我们在手动刷新，或通过 url 直接进入应用的时候， 服务端是无法识别这个 url 的。因为我们是单页应用，只有一个 html 文件，服务端在处理其他路径的 url 的时候，就会出现404的情况。 所以，如果要应用 history 模式，需要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回单页应用的 html 文件。")]),n._v(" "),e("p",[n._v("接下来，我们来探究一下，何时使用 hash 模式，何时使用 history 模式。")]),n._v(" "),e("p",[n._v("hash、history 如何抉择\nhash 模式相比于 history 模式的优点：")]),n._v(" "),e("p",[n._v("兼容性更好，可以兼容到IE8\n无需服务端配合处理非单页的url地址\nhash 模式相比于 history 模式的缺点：")]),n._v(" "),e("p",[n._v("看起来更丑。\n会导致锚点功能失效。\n相同 hash 值不会触发动作将记录加入到历史栈中，而 pushState 则可以。\n综上所述，当我们不需要兼容老版本IE浏览器，并且可以控制服务端覆盖所有情况的候选资源时，我们可以愉快的使用 history 模式了。")]),n._v(" "),e("p",[n._v("反之，很遗憾，只能使用丑陋的 hash 模式~")]),n._v(" "),e("p",[n._v("尾声\n本文简单分析并实现了单页路由中的 hash 模式和 history 模式，当然，它与 vue-router、react-router 相比还太过简陋，关于 vue-router、react-router 的源码解析，会在以后的文章中逐步推出")])])}),[],!1,null,null,null);t.default=a.exports}}]);