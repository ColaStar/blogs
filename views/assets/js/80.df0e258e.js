(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{173:function(s,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"使用中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用中间件","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用中间件")]),s._v(" "),n("p",[s._v("Express是一个路由和中间件Web框架，它具有自己的最小功能：Express应用程序本质上是一系列中间件函数调用。")]),s._v(" "),n("p",[s._v("中间件函数是可以访问请求对象 （req），响应对象（res）以及应用程序的请求 - 响应周期中的下一个中间件函数的函数。下一个中间件函数通常由名为的变量表示next。")]),s._v(" "),n("p",[s._v("中间件功能可以执行以下任务：")]),s._v(" "),n("ul",[n("li",[s._v("执行任何代码。")]),s._v(" "),n("li",[s._v("更改请求和响应对象。")]),s._v(" "),n("li",[s._v("结束请求 - 响应周期。")]),s._v(" "),n("li",[s._v("调用堆栈中的下一个中间件函数。")])]),s._v(" "),n("p",[s._v("如果当前的中间件函数没有结束请求 - 响应周期，它必须调用next()将控制权传递给下一个中间件函数。否则，请求将被挂起。")]),s._v(" "),n("p",[s._v("Express应用程序可以使用以下类型的中间件：")]),s._v(" "),n("ul",[n("li",[s._v("应用程序级中间件")]),s._v(" "),n("li",[s._v("路由器级中间件")]),s._v(" "),n("li",[s._v("错误处理中间件")]),s._v(" "),n("li",[s._v("内置中间件")]),s._v(" "),n("li",[s._v("第三方中间件")])]),s._v(" "),n("p",[s._v("您可以使用可选的装载路径加载应用程序级和路由器级中间件。您还可以将一系列中间件功能加载在一起，从而在安装点创建中间件系统的子堆栈。")]),s._v(" "),n("h2",{attrs:{id:"应用程序级中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用程序级中间件","aria-hidden":"true"}},[s._v("#")]),s._v(" 应用程序级中间件")]),s._v(" "),n("p",[s._v("通过使用和函数将应用程序级中间件绑定到app对象的实例，其中是"),n("code",[s._v("中间件函数以小写形式处理的请求的HTTP方法")]),s._v("（例如GET，PUT或POST）、app.use()app.METHOD()METHOD")]),s._v(" "),n("p",[s._v("此示例显示了没有装载路径的中间件功能。每次应用程序收到请求时都会执行该功能。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var app = express()\n\napp.use(function (req, res, next) {\n  console.log('Time:', Date.now())\n  next()\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("此示例显示了/user/:id路径上安装的中间件功能。对/user/:id路径上的任何类型的HTTP请求执行该功能。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("app.use('/user/:id', function (req, res, next) {\n  console.log('Request Type:', req.method)\n  next()\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("此示例显示了路由及其处理函数（中间件系统）。该函数处理对/user/:id路径的GET请求。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("app.get('/user/:id', function (req, res, next) {\n  res.send('USER')\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("下面是一个使用挂载路径在挂载点加载一系列中间件函数的示例。它说明了一个中间件子堆栈，它将任何类型的HTTP请求的请求信息打印到/user/:id路径。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("app.use('/user/:id', function (req, res, next) {\n  console.log('Request URL:', req.originalUrl)\n  next()\n}, function (req, res, next) {\n  console.log('Request Type:', req.method)\n  next()\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("路径处理程序使您可以为路径定义多个路径。下面的示例为/user/:id路径的GET请求定义了两个路由。第二个路由不会引起任何问题，但它永远不会被调用，因为第一个路由结束了请求 - 响应周期。")]),s._v(" "),n("p",[s._v("此示例显示了一个中间件子堆栈，用于处理对/user/:id路径的GET请求。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("app.get('/user/:id', function (req, res, next) {\n  console.log('ID:', req.params.id)\n  next()\n}, function (req, res, next) {\n  res.send('User Info')\n})\n\n// handler for the /user/:id path, which prints the user ID\napp.get('/user/:id', function (req, res, next) {\n  res.end(req.params.id)\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("要从路由器中间件堆栈中跳过其余的中间件功能，请调用next('route')将控制权传递给下一个路由。 注意：next('route')仅适用于使用app.METHOD()或router.METHOD()函数加载的中间件函数。")]),s._v(" "),n("p",[s._v("此示例显示了一个中间件子堆栈，用于处理对/user/:id路径的GET请求。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("app.get('/user/:id', function (req, res, next) {\n  // if the user ID is 0, skip to the next route\n  if (req.params.id === '0') next('route')\n  // otherwise pass the control to the next middleware function in this stack\n  else next()\n}, function (req, res, next) {\n  // send a regular response\n  res.send('regular')\n})\n\n// handler for the /user/:id path, which sends a special response\napp.get('/user/:id', function (req, res, next) {\n  res.send('special')\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"路由器级中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由器级中间件","aria-hidden":"true"}},[s._v("#")]),s._v(" 路由器级中间件")]),s._v(" "),n("p",[s._v("路由器级中间件的工作方式与应用程序级中间件的工作方式相同，只不过它被绑定到一个实例"),n("code",[s._v("express.Router()。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var router = express.Router()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("使用"),n("code",[s._v("router.use()")]),s._v("和"),n("code",[s._v("router.METHOD()")]),s._v("函数加载路由器级中间件。")]),s._v(" "),n("p",[s._v("以下示例代码通过使用路由器级中间件复制上面显示的应用程序级中间件的中间件系统：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var app = express()\nvar router = express.Router()\n\n// a middleware function with no mount path. This code is executed for every request to the router\nrouter.use(function (req, res, next) {\n  console.log('Time:', Date.now())\n  next()\n})\n\n// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path\nrouter.use('/user/:id', function (req, res, next) {\n  console.log('Request URL:', req.originalUrl)\n  next()\n}, function (req, res, next) {\n  console.log('Request Type:', req.method)\n  next()\n})\n\n// a middleware sub-stack that handles GET requests to the /user/:id path\nrouter.get('/user/:id', function (req, res, next) {\n  // if the user ID is 0, skip to the next router\n  if (req.params.id === '0') next('route')\n  // otherwise pass control to the next middleware function in this stack\n  else next()\n}, function (req, res, next) {\n  // render a regular page\n  res.render('regular')\n})\n\n// handler for the /user/:id path, which renders a special page\nrouter.get('/user/:id', function (req, res, next) {\n  console.log(req.params.id)\n  res.render('special')\n})\n\n// mount the router on the app\napp.use('/', router)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("p",[s._v("要跳过路由器中间件的其余功能，请调用next('router') 将控制权交还给路由器实例。")]),s._v(" "),n("p",[s._v("此示例显示了一个中间件子堆栈，用于处理对/user/:id路径的GET请求。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var app = express()\nvar router = express.Router()\n\n// predicate the router with a check and bail out when needed\nrouter.use(function (req, res, next) {\n  if (!req.headers['x-auth']) return next('router')\n  next()\n})\n\nrouter.get('/', function (req, res) {\n  res.send('hello, user!')\n})\n\n// use the router and 401 anything falling through\napp.use('/admin', router, function (req, res) {\n  res.sendStatus(401)\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"错误处理中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错误处理中间件","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误处理中间件")]),s._v(" "),n("p",[s._v("错误处理中间件总是需要"),n("strong",[s._v("四个参数")]),s._v("。您必须提供四个参数以将其标识为错误处理中间件函数。即使您不需要使用该next对象，也必须指定它以维护签名。否则，该next对象将被解释为常规中间件，并且将无法处理错误。")]),s._v(" "),n("p",[s._v("以与其他中间件函数相同的方式定义错误处理中间件函数，除了四个参数而不是三个，特别是签名(err, req, res, next)）：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("app.use(function (err, req, res, next) {\n  console.error(err.stack)\n  res.status(500).send('Something broke!')\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("有关错误处理中间件的详细信息，请参阅：错误处理。")]),s._v(" "),n("h2",{attrs:{id:"内置中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内置中间件","aria-hidden":"true"}},[s._v("#")]),s._v(" 内置中间件")]),s._v(" "),n("p",[s._v("从版本4.x开始，Express不再依赖于Connect。之前包含在Express中的中间件功能现在位于不同的模块中; 查看中间件功能列表。")]),s._v(" "),n("p",[s._v("Express具有以下内置中间件功能：")]),s._v(" "),n("ul",[n("li",[s._v("express.static提供静态资产，如HTML文件，图像等。")]),s._v(" "),n("li",[s._v("express.json使用JSON有效负载解析传入的请求。注意：适用于Express 4.16.0+")]),s._v(" "),n("li",[s._v("express.urlencoded使用URL编码的有效负载解析传入的请求。 注意：适用于Express 4.16.0+")])]),s._v(" "),n("h2",{attrs:{id:"第三方中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方中间件","aria-hidden":"true"}},[s._v("#")]),s._v(" 第三方中间件")]),s._v(" "),n("p",[s._v("使用第三方中间件为Express应用程序添加功能。")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://www.expressjs.com.cn/resources/middleware.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网第三方中间件"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("安装Node.js模块以获得所需的功能，然后在应用程序级别或路由器级别将其加载到您的应用程序中。")]),s._v(" "),n("p",[s._v("以下示例说明了安装和加载cookie解析中间件功能cookie-parser。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm install cookie-parser\nvar express = require('express')\nvar app = express()\nvar cookieParser = require('cookie-parser')\n\n// load the cookie-parsing middleware\napp.use(cookieParser())\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])},[],!1,null,null,null);e.default=r.exports}}]);