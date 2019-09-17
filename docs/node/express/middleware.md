# express中间件
Express是一个路由和中间件Web框架，它具有自己的最小功能：Express应用程序本质上是一系列中间件函数调用。

中间件函数是可以访问请求对象 （req），响应对象（res）以及应用程序的请求 - 响应周期中的下一个中间件函数的函数。下一个中间件函数通常由名为的变量表示next。

中间件功能可以执行以下任务：

- 执行任何代码。
- 更改请求和响应对象。
- 结束请求 - 响应周期。
- 调用堆栈中的下一个中间件函数。

如果当前的中间件函数没有结束请求 - 响应周期，它必须调用next()将控制权传递给下一个中间件函数。否则，请求将被挂起。

Express应用程序可以使用以下类型的中间件：

- 应用程序级中间件
- 路由器级中间件
- 错误处理中间件
- 内置中间件
- 第三方中间件

您可以使用可选的装载路径加载应用程序级和路由器级中间件。您还可以将一系列中间件功能加载在一起，从而在安装点创建中间件系统的子堆栈。

## 应用程序级中间件
通过使用和函数将应用程序级中间件绑定到app对象的实例，其中是`中间件函数以小写形式处理的请求的HTTP方法`（例如GET，PUT或POST）、app.use()app.METHOD()METHOD

此示例显示了没有装载路径的中间件功能。每次应用程序收到请求时都会执行该功能。
```
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
```
此示例显示了/user/:id路径上安装的中间件功能。对/user/:id路径上的任何类型的HTTP请求执行该功能。
```
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```
此示例显示了路由及其处理函数（中间件系统）。该函数处理对/user/:id路径的GET请求。
```
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
```
下面是一个使用挂载路径在挂载点加载一系列中间件函数的示例。它说明了一个中间件子堆栈，它将任何类型的HTTP请求的请求信息打印到/user/:id路径。
```
app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```
路径处理程序使您可以为路径定义多个路径。下面的示例为/user/:id路径的GET请求定义了两个路由。第二个路由不会引起任何问题，但它永远不会被调用，因为第一个路由结束了请求 - 响应周期。

此示例显示了一个中间件子堆栈，用于处理对/user/:id路径的GET请求。
```
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
})
```
要从路由器中间件堆栈中跳过其余的中间件功能，请调用next('route')将控制权传递给下一个路由。 注意：next('route')仅适用于使用app.METHOD()或router.METHOD()函数加载的中间件函数。

此示例显示了一个中间件子堆栈，用于处理对/user/:id路径的GET请求。
```
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})
```
## 路由器级中间件
路由器级中间件的工作方式与应用程序级中间件的工作方式相同，只不过它被绑定到一个实例`express.Router()。`
```
var router = express.Router()
```
使用`router.use()`和`router.METHOD()`函数加载路由器级中间件。

以下示例代码通过使用路由器级中间件复制上面显示的应用程序级中间件的中间件系统：
```
var app = express()
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router)
```
要跳过路由器中间件的其余功能，请调用next('router') 将控制权交还给路由器实例。

此示例显示了一个中间件子堆栈，用于处理对/user/:id路径的GET请求。
```
var app = express()
var router = express.Router()

// predicate the router with a check and bail out when needed
router.use(function (req, res, next) {
  if (!req.headers['x-auth']) return next('router')
  next()
})

router.get('/', function (req, res) {
  res.send('hello, user!')
})

// use the router and 401 anything falling through
app.use('/admin', router, function (req, res) {
  res.sendStatus(401)
})
```
## 错误处理中间件
错误处理中间件总是需要**四个参数**。您必须提供四个参数以将其标识为错误处理中间件函数。即使您不需要使用该next对象，也必须指定它以维护签名。否则，该next对象将被解释为常规中间件，并且将无法处理错误。

以与其他中间件函数相同的方式定义错误处理中间件函数，除了四个参数而不是三个，特别是签名(err, req, res, next)）：
```
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```
有关错误处理中间件的详细信息，请参阅：错误处理。

## 内置中间件
从版本4.x开始，Express不再依赖于Connect。之前包含在Express中的中间件功能现在位于不同的模块中; 查看中间件功能列表。

Express具有以下内置中间件功能：

- express.static提供静态资产，如HTML文件，图像等。
- express.json使用JSON有效负载解析传入的请求。注意：适用于Express 4.16.0+
- express.urlencoded使用URL编码的有效负载解析传入的请求。 注意：适用于Express 4.16.0+
## 第三方中间件
使用第三方中间件为Express应用程序添加功能。

[官网第三方中间件](http://www.expressjs.com.cn/resources/middleware.html)

安装Node.js模块以获得所需的功能，然后在应用程序级别或路由器级别将其加载到您的应用程序中。

以下示例说明了安装和加载cookie解析中间件功能cookie-parser。
```
$ npm install cookie-parser
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
```