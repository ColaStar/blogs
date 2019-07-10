# node.js
---------------------------
## 走进node.js
--------------------------------------------------------------
- 1.什么是nodejs？
- 2.为什么要用Nodejs?
- 3.Nodejs的优势?
- 4.学习node.js的前置知识?
- 5.相关的资源与学习资料?
>1.什么是nodejs？

**Node.js是一个基于Chrome JavaScript运行时建立的平台。用于方便地搭建响应速度快、易于扩展的网络应用。Node.js使用事件驱动，非阻塞I/O模型而得以轻量和高效。非常适合在分布式设备上运行的数据密集型的实时应用。**
- Node.js本质是javascript的一个解析器
- Node.js是JavaScript的一个运行环境
- Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台
- Node.js是一个服务器的程序,就是运行在服务端的 JavaScript
- Node.js本身使用的是v8引擎
- Node不是web服务器
> 2.为什么要用Nodejs?
- 为了提供高性能的Web服务
- IO性能强大（输入输出强大，就是为了强大的IO而创建的）
- 事件处理机制完善
- 天然能够处理dom
- 社区非常活跃，生态圈日趋完善
> 3.Nodejs的优势?
- 处理大流量数据
- 适合实时交互的应用
- 完美的支持对象型的数据库（像mogodb）
- 异步处理大量的并发连接
> 4.学习node.js的前置知识?
- Javascript
- ES6
- 一些服务器方面的知识（http等）
- 最好在Linux系统下进行开发
> 5.相关的资源与学习资料?
- 官方网站
- 中文社区
- 手册
- 开源代码 issues
## Node.js入门
----
#### 安装  Node.js
```
LFS 长期支持的版本
//安装后检测是否安装成功
node -v
```
#### Npm包管理器
- 1.允许用户从NPM服务器上下载别人写好的三方包到本地使用
- 2.允许用户从NPM服务器上下载并安装别人编写的命令行程序到本地使用
- 3.允许用户将自己编写好的包或命令行程序上传到NPM服务器供别人使用。

CNPM是NPM在中国的NPM服务器  
跟npm一样   
通过npm i cnpm
```
 npm install -g cnpm --registry=https://registry.npm.taobao.org

//使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm


淘宝 NPM 镜像   http://npm.taobao.org/
```

```
var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.send('Hello World\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/')
```

#### Node.js REPL(交互式解释器)

**Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。**
- 常用的一些REPL的命令
```

node - 启动 Node 的终端

//简单的表达式运算

//可以使用变量

//多行表达式会出现...符号，... 三个点的符号是系统自动生成的，你回车换行后即可。Node 会自动检测是否为连续的表达式。

ctrl + c - 退出当前终端。

ctrl + c 按下两次 - 退出 Node REPL。

ctrl + d - 退出 Node REPL.

向上/向下 键 - 查看输入的历史命令

tab 键 - 列出当前命令

.help - 列出使用命令

.break - 退出多行表达式

.clear - 退出多行表达式

.save filename - 保存当前的 Node REPL 会话到指定文件

.load filename - 载入当前 Node REPL 会话的文件内容。
```

#### NPM的使用
- 查看
```
npm -v  # 查看NPM的版本

npm install <Module Name> # 安装模块

npm list -g  # 查看所有全局安装的模块

npm list grunt # 查看某个模块的版本号

npm ls  # 查看所有安装到 /node_modules/ 目录下的模块包

npm search express # 搜索模块

npm outdated # 检查包是否已经过时

npm view 模块名 dependencies # 查看某个包对于各种包的依赖关系

npm view 模块名 repository.url # 查看包的源文件地址

npm view 模块名 engines # 查看当前模块依赖的node最低版本号

npm view webpack version # 查看模块当前包版本

npm view 模块名 versions # 查看模块的历史版本和当前版本

npm view 模块名 # 查看一个模块的所有信息

npm list # 查看当前已经安装的模块

npm list --depth=0  //限制输入的模块层级

npm root -g # 查看全局的包的安装路径

npm info webpack  # 查看模块包信息
```
- 安装更新与卸载模块
```
npm install express          # 本地安装

npm install express -g   # 全局安装

npm install express@latest  # 安装最新版本的npm包

npm install 模块名 模块名	 # 一次性安装多个
 
npm install 模块名 --save-dev # - 安装开发时依赖包

npm install 模块名 --save  # 安装运行时依赖包

npm uninstall express #卸载npm模块包

npm update 模块名 # 更新模块

npm update 模块名 # @版本号 更新到指定版本

npm update 模块名 # @latest
```
- 发布
```
npm init # 创建package.json文件

npm adduser # npm 资源库中注册用户（使用邮箱注册）

npm publish # 发布模块到NPM官网

npm cache clear # 可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

使用npm unpublish <package>@<version> # 可以撤销发布自己发布过的某个版本代码。

```
- 其他
``` 
npm rebuild 模块名 # 更改包内容后进行重建
 
npm help json # 访问package.json的字段文档
 
npm bugs 模块名 # 查看某个模块的bugs列表界面
 
npm repo 模块名 # 打开某个模块的仓库界面
 
npm docs 模块名 # 打开某个模块的文档
  
npm home 模块名 # 打开某个模块的主页
 
npm prune # 清除未被使用到的模块

npm help # 可查看所有命令

```

#### Package.json 属性说明
```
name - 包名。

version - 包的版本号。

description - 包的描述。

homepage - 包的官网 url 。

author - 包的作者姓名。

contributors - 包的其他贡献者姓名。

dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

keywords - 关键字
```

## Node.js 回调函数
-------

#### 什么是回调？  
- 函数调用方式分为三类：同步调用、回调函数、异步调用。  
- 回调是双向调用的  
- 可以通过回调函数来实现回调

#### 简介
Node.js 异步编程的直接体现就是回调。

异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

#### 阻塞与非阻塞

- 阻塞与非阻塞关注的是程序在等待调用结果（消息，返回值）时的状态。
- 阻塞就是做不完不准回来
- 非阻塞就是你先做，我先看看有其他事情没有，完了告诉我。
- 阻塞是按顺序执行的，而非阻塞是不需要按顺序的

> 阻塞代码
```
//做完一件事情才能做别的
var fs = require("fs")

var data = fs.readFileSync('data.text');

console.log(data.toString())//同步调用
console.log("程序执行结束!")
//输出  文件内容 程序执行结束
```
> 非阻塞代码
```
//一边读取文件，一边做其他事情
var fs = require("fs")

var data = fs.readFile('data.text'，function(err,data){
    if(err){
        console.error('err')
    }
    console.log(data.toString())
});//异步调用
console.log('程序执行完毕')

//输出
//程序执行完毕   文件内容
```

## Node.js 事件循环
-------
- Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

- Node.js 几乎每一个 API 都是支持回调函数的。

- Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

- Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
#### 事件驱动模型
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

<a data-fancybox title="事件驱动模型" href="https://raw.githubusercontent.com/ColaStar/static/master/images/event_loop.jpg">![事件驱动模型](https://raw.githubusercontent.com/ColaStar/static/master/images/event_loop.jpg)</a>
> 事件处理代码流程
- 2.引入events对象，创建eventEmitter对象
- 2.绑定事件处理程序
- 3.触发事件

#### 事件与事件的绑定
```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
```

## Node.js模块化
--------------------------------------------------------------
> 模块化的概念与意义
- 1.Node.js的文件可以相互调用,Node.js提供了一个简单的模块系统
- 2.模块是Node.js应用程序的基本组成部分
- 3.文件和模块是一一对应的。一个Node.js文件就是一个模块。
- 4.这个文件可能是JavaScript代码，JSON代码或者编译后的C/C++的扩展
- 5.Node.js存在4类模块（原生模块和3种文件模块）
<a data-fancybox title="模块" href="https://raw.githubusercontent.com/ColaStar/static/master/images/nodejs-require.jpg">![模块](https://raw.githubusercontent.com/ColaStar/static/master/images/nodejs-require.jpg)</a>
>从文件模块缓存中加载

尽管原生模块与文件模块的优先级不同，但是都会优先从文件模块的缓存中加载已经存在的模块。即各种的node_modules中查找查找顺序是从当前文件夹到根目录的node_modules
> 从原生模块加载

原生模块的优先级仅次于文件模块缓存的优先级。require 方法在解析文件名之后，优先检查模块是否在原生模块列表中。以http模块为例，尽管在目录下存在一个 http/http.js/http.node/http.json 文件，require("http") 都不会从这些文件中加载，而是从原生模块中加载。

原生模块也有一个缓存区，同样也是优先从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。
> 从文件加载

当文件模块缓存中不存在，而且不是原生模块的时候，Node.js 会解析 require 方法传入的参数，并从文件系统中加载实际的文件。
- http、fs、path等，原生模块。
- ./mod或../mod，相对路径的文件模块。
- /pathtomodule/mod，绝对路径的文件模块。
- mod，非原生模块的文件模块。

> exports 和 module.exports 的使用

如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。

## Node.js函数
-----------
```
//回调方式传递
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

通过匿名函数传递
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
```
## Node.js路由
----------------
我们要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码。

因此，我们需要查看 HTTP 请求，从中提取出请求的 URL 以及 GET/POST 参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。

我们需要的所有数据都会包含在 request 对象中，该对象作为 onRequest() 回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的 Node.JS 模块，它们分别是 url 和 querystring 模块。
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/router.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/router.png)</a>
我们也可以用 querystring 模块来解析 POST 请求体中的参数

> 获取GET请求内容

由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。

node.js 中 url 模块中的 parse 函数提供了这个功能。

```
var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
```
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/getget.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/getget.png)</a>
> 获取 POST 请求内容

POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。

比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。
```
var http = require('http');
var querystring = require('querystring');
var util = require('util');
 
http.createServer(function(req, res){
    // 定义了一个post变量，用于暂存请求体的信息
    var post = '';     
 
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){    
        post += chunk;
    });
 
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){    
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);
```
## Node.js 全局对象
--------------------------------------------------------------------------------

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

-------------------------------------------------
#### 全局对象与全局变量
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：

- 在最外层定义的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）。

当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。

注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。

---------------------------------------------------

#### __filename

```__filename``` 表示**当前正在执行的脚本**的**文件名**。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在**模块中**，返回的值是**模块文件的路径**。

---------------------------------------------------
#### __dirname

```__dirname``` 表示当前执行脚本所在的**目录**

---------------------------------------------------

#### setTimeout(cb, ms)

```setTimeout(cb, ms)``` 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。

返回一个代表定时器的句柄值。

---------------------------------------------------

#### clearTimeout(t)

```clearTimeout( t )``` 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。


--------------------------------------------------

### setInterval(cb, ms)
```setInterval(cb, ms)``` 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。

返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。

setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

---------------------------------------------------

#### console

console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的实施标准。

Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

console 方法
- ```console.log```

  向标准输出流打印字符并以换行符结束。该方法接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。

- ```console.info```

  该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。
- ```console.error([data][, ...])```

  输出错误消息的。控制台在出现错误时会显示是红色的叉子。

- ```	console.warn([data][, ...])```

  输出警告消息。控制台出现有黄色的惊叹号。

- ```console.dir(obj[, options])```

  用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。

- ```console.time(label)```

  输出时间，表示计时开始。
- ```console.time(label)```

  结束时间，表示计时结束。
- ```console.trace(message[, ...])```

  当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
- ```console.assert(value[, message][, ...])```

  用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

--------------------------------------------------
#### process

process是用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。

下面将会介绍 process 对象的一些最常用的成员方法。

- ```exit```   当进程准备退出时触发。
- ```beforeExit```   当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。
- ```uncaughtException```   当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
- ```Signal```   当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。

```
process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});
console.log("程序执行结束");


$ node main.js
程序执行结束
退出码为: 0
```

#### 退出状态码

- 	Uncaught Fatal Exception

    有未捕获异常，并且没有被域或 uncaughtException 处理函数处理。

- Unused  保留
- Internal JavaScript Parse Error  	 
  
  JavaScript的源码启动 Node 进程时引起解析错误。非常罕见，仅会在开发 Node 时才会有。
- 	Internal JavaScript Evaluation Failure
 
    JavaScript 的源码启动 Node 进程，评估时返回函数失败。非常罕见，仅会在开发 Node 时才会有。
- 	Fatal Error  

    V8 里致命的不可恢复的错误。通常会打印到 stderr ，内容为： FATAL ERROR
- Non-function Internal Exception Handler  

  未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用。
- Internal Exception Handler Run-Time Failure  

  未捕获的异常， 并且异常处理函数处理时自己抛出了异常。例如，如果 process.on('uncaughtException') 或 domain.on('error') 抛出了异常。
- Invalid Argument  

可能是给了未知的参数，或者给的参数没有值
- Internal JavaScript Run-Time Failure
  
  JavaScript的源码启动 Node 进程时抛出错误，非常罕见，仅会在开发 Node 时才会有。
- Invalid Debug Argument 

  设置了参数--debug 和/或 --debug-brk，但是选择了错误端口。
- Signal Exits

  如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP，那么退出代码就是128 加信号代码。这是标准的 Unix 做法，退出信号代码放在高位。
-------------------------------------------------
#### Process 属性

- ```stdout```  标准输出流
- ```stderr```  标准错误流
- ```stdin```  标准输入流。
- ```	argv```  argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
- ```execPath```  返回执行当前脚本的 Node 二进制文件的绝对路径。
- ```execArgv```  返回一个数组，成员是命令行下执行脚本时，在Node可执行文件与脚本文件之间的命令行参数。
- ```env```  返回一个对象，成员为当前 shell 的环境变量
- ```	exitCode```  进程退出时的代码，如果进程优通过 process.exit() 退出，不需要指定退出码。
- ```	version```  Node 的版本，比如v8.10.0。
- ```versions```  一个属性，包含了 node 的版本和依赖.
- ```	config```  一个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。它与运行 ./configure 脚本生成的 "config.gypi" 文件相同。
- ```pid```  当前进程的进程号
- ```title```  进程名，默认值为"node"，可以自定义该值。

- ```arch```  当前 CPU 的架构：'arm'、'ia32' 或者 'x64'。
- ```	platform```  运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
- ```	mainModule```  require.main 的备选方法。不同点，如果主模块在运行时改变，require.main可能会继续返回老的模块。可以认为，这两者引用了同一个模块。
 
 ```
 // 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);



$ node main.js
Hello World!
0: node
1: /web/www/node/main.js
/usr/local/node/0.10.36/bin/node
darwin
```
---------------------------------------------------
#### 方法参考手册

- ```abort()``` 这将导致 node 触发 abort 事件。会让 node 退出并生成一个核心文件。
- ```chdir(directory)``` 改变当前工作进程的目录，如果操作失败抛出异常。
- ```cwd()```  返回当前进程的工作目录
- ```exit([code])```  使用指定的 code 结束进程。如果忽略，将会使用 code 0。
- ```getgid()``` 获取进程的群组标识（参见 getgid(2)）。获取到得时群组的数字 id，而不是名字。
注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
- ```	setgid(id)``` 设置进程的群组标识（参见 setgid(2)）。可以接收数字 ID 或者群组名。如果指定了群组名，会阻塞等待解析为数字 ID 。
注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
- ```getuid()```  获取进程的用户标识(参见 getuid(2))。这是数字的用户 id，不是用户名。
注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
- ```setuid(id)``` 设置进程的用户标识（参见setuid(2)）。接收数字 ID或字符串名字。果指定了群组名，会阻塞等待解析为数字 ID 。
注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
- ```getgroups()```  返回进程的群组 iD 数组。POSIX 系统没有保证一定有，但是 node.js 保证有。
注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
- ```setgroups(groups)``` 设置进程的群组 ID。这是授权操作，所以你需要有 root 权限，或者有 CAP_SETGID 能力。
注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
- ```initgroups(user, extra_group)```读取 /etc/group ，并初始化群组访问列表，使用成员所在的所有群组。这是授权操作，所以你需要有 root 权限，或者有 CAP_SETGID 能力。
注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
- ```	kill(pid[, signal])```发送信号给进程. pid 是进程id，并且 signal 是发送的信号的字符串描述。信号名是字符串，比如 'SIGINT' 或 'SIGHUP'。如果忽略，信号会是 'SIGTERM'。
- ```memoryUsage()```返回一个对象，描述了 Node 进程所用的内存状况，单位为字节
- ```	nextTick(callback)```一旦当前事件循环结束，调用回调函数。

- ```umask([mask])``` 设置或读取进程文件的掩码。子进程从父进程继承掩码。如果mask 参数有效，返回旧的掩码。否则，返回当前掩码。
- ```uptime()``` 返回 Node 已经运行的秒数。
- ```hrtime()```返回当前进程的高分辨时间，形式为 [seconds, nanoseconds]数组。它是相对于过去的任意事件。该值与日期无关，因此不受时钟漂移的影响。主要用途是可以通过精确的时间间隔，来衡量程序的性能。
你可以将之前的结果传递给当前的 process.hrtime() ，会返回两者间的时间差，用来基准和测量时间间隔。

```
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());


$ node main.js
当前目录: /web/com/runoob/nodejs
当前版本: v0.10.36
{ rss: 12541952, heapTotal: 4083456, heapUsed: 2157056 }
```

--------------------------------------------------

## Node.js常用工具

推荐使用underscode.js/loadsh.js（源码很有意思）

util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。

------------------------------------------------------------------------------------------------------

## Node.js 工具模块

#### Path 模块

- path.normalize(p)    规范化路径，注意'..' 和 '.'。
- path.join([path1][, path2][, ...])

  用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
- path.resolve([from ...], to)

  将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

```
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

- path.isAbsolute(path)
判断参数 path 是否是绝对路径。

- 	path.relative(from, to)

  用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。

  在 Linux 上：
```
  path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'
```

在 Windows 上：
```
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// 返回: '..\\..\\impl\\bbb'
```
> 方法
- path.dirname(p)

  返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。
- path.basename(p[, ext])

  返回路径中的最后一部分。同 Unix 命令 bashname 类似。
- path.extname(p)

  返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
- path.parse(pathString)

  返回路径字符串的对象。
- path.format(pathObject)

  从对象中返回路径字符串，和 path.parse 相反。
> 属性
- path.sep

  平台的文件路径分隔符，'\\' 或 '/'。
- path.delimiter

  平台的分隔符, ; or ':'.
- path.posix

  提供上述 path 的方法，不过总是以 posix 兼容的方式交互。
- path.win32

  提供上述 path 的方法，不过总是以 win32 兼容的方式交互。

```
var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

//normalization : \test\test1\2slashes\1slash

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

//joint path : \test\test1\2slashes\1slash

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

resolve : e:\study\yd-note\main.js

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));

//ext name : .js


```
---------------------------------------------------
## Node.js 文件系统
#### 异步与同步

Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

**建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。**

```
var fs = require("fs");

// 异步读取
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。")
```

方法太多，具体详见[文件系统模块](/fs.md)

#### Node.js Stream(流)

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

Node.js，Stream 有四种流类型：

*   **Readable** \- 可读操作。
    
*   **Writable** \- 可写操作。
    
*   **Duplex** \- 可读可写操作.
    
*   **Transform** \- 操作被写入数据，然后读出结果。
    

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

*   **data** \- 当有数据可读时触发。
    
*   **end** \- 没有更多的数据可读时触发。
    
*   **error** \- 在接收和写入过程中发生错误时触发。
    
*   **finish** \- 所有数据已被写入到底层系统时触发。
    
* * *

从流中读取数据
-------

创建 input.txt 文件，内容如下：

```
zhhansan
```

创建 main.js 文件, 代码如下：

```
var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
```

以上代码执行结果如下：
```
程序执行完毕  zhhansan
```
* * *

写入流
---

创建 main.js 文件, 代码如下：

```
var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

```

以上程序会将 data 变量的数据写入到 output.txt 文件中。代码执行结果如下：

```
$ node main.js 
程序执行完毕
写入完成。
```

查看 output.txt 文件的内容：
```
$ cat output.txt 
zhhansan
```
* * *

管道流
---

管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/stream.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images//stream.png)</a>

如上面的图片所示，我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。

设置 input.txt 文件内容如下：

管道流操作实例

创建 main.js 文件, 代码如下：

```
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
```

代码执行结果如下：
```
$ node main.js 程序执行完毕
```
查看 output.txt 文件的内容：
```
$ cat output.txt 
管道流操作实例
```
* * *

链式流
---

链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

接下来我们就是用管道和链式来压缩和解压文件。

创建 compress.js 文件, 代码如下：

```
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
```

代码执行结果如下：
```
$ node compress.js 文件压缩完成。
```
执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。

接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：

```
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("文件解压完成。");
```

代码执行结果如下：
```
$ node decompress.js
文件解压完成。
```

