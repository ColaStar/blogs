# koa学习记录
## 前言
Koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。 使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套， 并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件， 它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。

本教程旨在介绍Koa框架的相关基础知识，能够帮助你快速的上手。

## 环境
Koa基于node.js,想要使用Koa的话，需要先行下载node.js并且版本需要大于7.6，如果还未下载node.js，直接点击这里下载对应的版本。node下载地址

> 开始

下载完成之后，检查对应node版本大于7.6之后就可以开始学习Koa了，这里建议使用阮一峰老师的Koa示例库，需要事先安装git。

git clone https://github.com/ruanyf/koa-demos.git

接着进入示例库，安装相应的依赖
```
cd koa-demos
npm install
```
基本用法
创建一个HTTP服务:\
```
const Koa = require('koa');
const app = new Koa();

app.listen(3000);
```
运行这个脚本
```
node demos/01.js
```
打开浏览器访问,访问127.0.0.1:3000。页面显示Not Found,这是由于我们没有告诉Koa需要显示什么内容。

## Context对象
Koa提供一个Context对象，表示一次对话的上下文，(`包括HTTP请求和HTTP响应`)。编写这个对象我们可以返回输出的内容。

- Context.response.body 属性代表发送给用户的内容
```
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);
const Koa = require('koa');
```

运行这段代码，打开http://127.0.0.1:3000/发现页面输出了Hello World

其中，main函数定义了一个设置输出内容的方法，然后我们使用app.use()调用了main函数。

**ctx.response代表了HTTP的Response
ctx.requset代表了HTTP的Request**

HTTP Response类型
Koa默认返回的数据类型是text/plain,如果想返回其他类型，可以使用ctx.request.accepts类型判断一下，根据客户端希望接受的字段，使用ctx.response.type返回指定的类型。
```
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);
```

## 网页模板
实际开发中，返回给用户的网页常常写成模板文件，我们可以让Koa先读取文件，然后将这个模板返回给用户。
```
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./demos/template.html');
};

app.use(main);
app.listen(3000);
```

打开http://127.0.0.1:3000/可以看到输出Hello World

## 路由
一个应用由多个页面构成，通过ctx.request.path可以获取用户请求的路径。
```
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);
```

我们打开http://127.0.0.1:3000/aa就可以发现出现了一个跳转到首页的链接。

## koa-route模块
我们可以使用koa-route模块进行路由的跳转。
```
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body ='<a href="/">to About</a>';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000);
```

这里返回了两个页面，我们可以从index页面跳转到about页面。

## 静态资源
koa-static模块封装了(图片，字体，样式表等静态资源)。
```
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));
//__dirname 表示的是当前你所在文件的目录
app.use(main);
app.listen(3000);
```

## 重定向
某些场合，服务器需要重定向访问请求，比如用户登录以后，将他重定向到之前的页面，ctx.requset.redirect()方法可以发送一个302跳转。
```
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx => {
  ctx.response.redirect('/');
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));

app.use(main);
app.listen(3000);
```

本例相当于我们从redirect页面发出了请求，然后页面重定向回了index页面。

## 中间件
Koa最大的特色，也是重要的一个设计就是中间价(middleWare),我们先通过Looger日志了解下打印日志的功能。
```
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);
```
我们运行这段代码，就可以发现控制台输出

类似这样的代码 1526392654243 GET /

> 中间件的概念

上一个例子的Looger功能，可以拆分成一个独立的函数。
```
const Koa = require('koa');
const app = new Koa();

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(logger);
app.use(main);
app.listen(3000);
```

上述例子的Logger函数就是"中间件"的概念，因为它处在HTTP Request和HTTP Response之间，用来实现某种功能，app.use()用来加载中间件。

基本上koa所有的功能都是通过中间件实现的，前面例子里面的main也是中间件。

每个中间件默认接受**两个参数**，第一个参数是`Context`对象，第二个参数是`next`参数，只要调用next函数，就可以把执行权交给下一个中间件。

> 中间件栈

多个中间件会形成一个栈的结构，以 先进后出，" first-in-last-out"的顺序执行。

1.最外层的中间件首先执行。

2.调用next函数，把执行权交给下一个中间件。

3…

4.最内层的中间件最后执行。

5.执行结束后，把执行权教回上一层的中间件。

6…

7.最外层的中间件收回执行权后，执行next函数后面的代码。
![](/images/koa.png)
我们直接看下面的例子：
```
const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
  console.log('>> one-step1');
  next();
  console.log('<< one-step2');
}

const two = (ctx, next) => {
  console.log('>> two-step1');
  next();
  console.log('<< two-step2');
}

const three = (ctx, next) => {
  console.log('>> three-step1');
  next();
  console.log('<< three-step2');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);
```
控制台输出结果：
```
>> one-step1
>> two-step1
>> three-step1
<< three-step2
<< two-step2
<< one-step2
```

分析：

我们编写了三个中间件，one，two，three，每个中间件内部都分为两个步骤。

当我们先执行app.use(one)后先执行one-step1，然后调用了next函数，此时将执行权交给了下一个中间件two，two执行two-step1后将执行权交给了three，three执行后调用next发现已经没有中间件了，所以先执行内部的three-step2后将执行权返回给two，因此输出了上述结果。

【注】当中间件内部没有next函数的时候，执行权就不会移交到下一个中间件中，比如我们可以删除two步骤的next方法，发现three中间件并没有执行了。
```
>> one-step1
>> two-step1
<< two-step2
<< one-step2
```

> 异步中间件

我们如何在中间件里面进行异步操作(比如读取数据库等)，那么我们需要将中间件改写成async函数，这是一个ES6的语法糖。

这里我们尝试去读取一个本地的模板文件。读取完成之后将它返回：
```
const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./demos/template.html', 'utf8');
};

app.use(main);
app.listen(3000);


//template.html

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="HTML5 Template">
  <meta name="author" content="xxx">
</head>

<body>
  <h1>我是模板文件的内容</h1>
</body>
</html>
```


执行这段代码后，打开127.0.0.1:3000可以看到输出的文本 —— 我是模板文件的内容

> 中间件的合成

koa-compose模块可以将多个中间件合成为一个
```
const Koa = require('koa');
const compose = require('koa-compose');
const app = new Koa();

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);

app.use(middlewares);
app.listen(3000);
```
输出结果：

1526469081713 GET /
Hello World

## 错误处理
如果代码运行出错的话，我们需要把错误信息返回给用户。HTTP协议约定了许多状态码，类似500和404等。我们可以调用Koa的ctx.throw()方法将错误抛出。
```
//500

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.throw(500);
};

app.use(main);
app.listen(3000);

//404

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.status = 404;
  ctx.response.body = 'Page Not Found';
};

app.use(main);
app.listen(3000);
```

> **处理错误的中间件**

为了方便处理错误，我们最好使用try-catch将其捕获。但是为每个中间件都使用try-catch太过麻烦了，我们可以编写一个中间件，将它放置在最外层，负责所有中间件的错误处理。
```
const Koa = require('koa');
const app = new Koa();

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};

const main = ctx => {
  ctx.throw(500);
};

app.use(handler);
app.use(main);
app.listen(3000);
```

> **error监听事件**

程序运行过程中一旦出错，Koa会触发一个error事件。监听完这个事件，也可以处理错误。
```
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.throw(500);
};

app.on('error', (err, ctx) => {
  console.error('server error', err);
});

app.use(main);
app.listen(3000);
```

在app实例里面注册error方法，那么每次错误就会抛出。

> **释放error事件**
需要注意的是如果错误已经被try…catch捕获到了，那么就不会再触发error事件了，这时必须要手动调用ctx.app.emit()释放。
```
const Koa = require('koa');
const app = new Koa();

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html';
    ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
    ctx.app.emit('error', err, ctx);
  }
};

const main = ctx => {
  ctx.throw(500);
};

app.on('error', function(err) {
  console.log('logging error ', err.message);
  console.log(err);
});

app.use(handler);
app.use(main);
app.listen(3000);
```

## Web App的功能
### Cookies
ctx.cookies用来读写Cookie。
```
const Koa = require('koa');
const app = new Koa();

const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}

app.use(main);
app.listen(3000);
```

运行结果：

打开 http://127.0.0.1:3000 我们发现页面输出了 1 views 当我们每次刷新页面的时候，cookie的值就会加1。

### 表单
Web应用离不开表单的处理，本质上，表单就是POST方法发送到服务器上的键值对。

koa-body模块可以用来从POST请求的数据体里面提取键值对。
```
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

const main = async function(ctx) {
  const body = ctx.request.body;
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = { name: body.name };
};

app.use(koaBody());
app.use(main);
app.listen(3000);

//打开另外一个终端 运行下面的命令

curl -X POST --data "name=Jack" 127.0.0.1:3000 {"name":"Jack"}

curl -X POST --data "name" 127.0.0.1:3000 name required
```

如果POST成功数据会被正常解析，如果发送数据不正确，就会收到错误提示。

### 文件上传

`Koa-body`还可以用来处理文件上传
```
const os = require('os');
const path = require('path');
const Koa = require('koa');
const fs = require('fs');
const koaBody = require('koa-body');

const app = new Koa();

const main = async function(ctx) {
  const tmpdir = os.tmpdir();
  const filePaths = [];
  const files = ctx.request.body.files || {};

  for (let key in files) {
    const file = files[key];
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }

  ctx.body = filePaths;
};

app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(3000);
```

打开另一各终端 运行下列代码，注意，路径要使用真实的文件路径
```
curl --form upload=@/path/to/file http://127.0.0.1:3000 ["/tmp/file"]
```

[文献参考](http://www.ruanyifeng.com/blog/2017/08/koa.html)

## 进阶用法
### 命名路由
```
router.get('test', '/test/:id', async (ctx, next) => {
	 ctx.response.body = `<h1>hello world</h1>`
	 // 访问 test路由 Not Found
	 // 访问 test/2  hello world
});

router.url('user', 3);
// => 生成路由 "/users/3" 
 
router.url('user', { id: 3 });
// => 生成路由 "/users/3" 
 
router.use(function (ctx, next) {
  // 重定向到路由名称为 “sign-in” 的页面 
  ctx.redirect(ctx.router.url('sign-in'));
})

router.url 方法方便我们在代码中根据路由名称和参数(可选)去生成具体的 URL，而不用采用字符串拼接的方式去生成 URL 了
```

### 多中间件
`koa-router` 也支持单个路由多中间件的处理。通过这个特性，我们能够为一个路由添加特殊的中间件处理。也可以把一个路由要做的事情拆分成多个步骤去实现，当路由处理函数中有异步操作时，这种写法的可读性和可维护性更高。
```
router.get(
  '/users/:id',
   async (ctx, next)=>  {
    return User.findOne(ctx.params.id).then(function(user) {
      // 首先读取用户的信息，异步操作
      ctx.user = user;
      next();
    });
  },
   async (ctx, next)=>  {
    console.log(ctx.user);
    // 在这个中间件中再对用户信息做一些处理
    // => { id: 17, name: "Alex" }
  }
);
```
### 路由前缀
通过 `prefix` 这个参数，我们可以为一组路由添加统一的前缀，和嵌套路由类似，也方便我们管理路由和简化路由的写法。不同的是，前缀是一个固定的字符串，不能添加动态参数。
```
const router = new Router({
  prefix: '/users'
});
 
router.get('/', ...); // 匹配路由 "/users" 
router.get('/:id', ...); // 匹配路由 "/users/:id" 
```
### URL 参数
koa-router 也支持参数，参数会被添加到 ctx.params 中。参数可以是一个正则表达式，这个功能的实现是通过 `path-to-regexp` 来实现的。原理是把 URL 字符串转化成正则对象，然后再进行正则匹配，之前的例子中的 * 通配符就是一种正则表达式。
```
router.get('/:category/:title', async (ctx, next) => {
  console.log(ctx.params);
  // => { category: 'programming', title: 'how-to-node' } 
});
```

通过上面的例子可以看出，我们可以通过 `ctx.params` 去访问`路由中的参数`，使得我们能够对参数做一些处理后再执行后续的代码。

## Http 请求参数传递方式

- 请求参数放在 URL 后面
```
http://localhost:3000/home?id=12&name=ikcamp
```
`koa-router `封装的 `request` 对象，里面的 `query `方法或 `querystring` 方法可以直接获取到 Get 请求的数据，唯一不同的是 query 返回的是对象，而 `querystring` 返回的是字符串。
```
  const Koa = require('koa')
  const router = require('koa-router')()
  const app = new Koa()

  router.get('/home', async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  })
  
  // add router middleware:
  app.use(router.routes())

  app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
  })
```

运行代码，并打开上述网址发现控制台输出为：
```
//类似post方法传递的表单数据格式
{ id: '12', name: 'ikcamp' }
//类似get方法传递的数据格式
id=12&name=ikcamp
```
- 请求参数放在 URL 中间
http://localhost:3000/home/12/ikcamp
1
这种情况下，解析方式肯定与上面的不一样了，koa-router 会把请求参数解析在 params 对象上，我们修改 app.js 文件，增加新的路由来测试下：
```
  // 增加如下代码
  router.get('/home/:id/:name', async(ctx, next)=>{
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  })
```

运行代码，并通过浏览器访问 http://localhost:3000/home/12/ikcamp，然后查看下控制台显示的日志信息：
```
{ id: '12', name: 'ikcamp' }
```
- 请求参数放在 body 中
当用 post 方式请求时，我们会遇到一个问题：post 请求通常都会通过表单或 JSON 形式发送，而无论是 Node 还是 Koa，都 没有提供 解析 post 请求参数的功能。

这是我们将使用`koa-bodyparser`插件。

安装
```
npm i koa-bodyparser -S
```
安装完成后引入
```
const Koa = require('koa')
  const router = require('koa-router')()
  const bodyParser = require('koa-bodyparser')
  const app = new Koa()

  app.use(bodyParser())

  router.get('/home', async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  })
  
  router.get('/home/:id/:name', async(ctx, next)=>{
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  })

  app.use(router.routes())

  app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
  })
```

然后我们来试着写一个简单的表单提交实例。修改 app.js 增加如下代码，实现增加表单页面的路由：
```
// 增加返回表单页面的路由
  router.get('/user', async(ctx, next)=>{
    ctx.response.body = 
    `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `
  })
```
继续修改 app.js 增加如下代码，实现 post 表单提交对应的路由：
```
// 增加响应表单请求的路由
  router.post('/user/register',async(ctx, next)=>{
    let {name, password} = ctx.request.body
    if( name === 'ikcamp' && password === '123456' ){
      ctx.response.body = `Hello， ${name}！`
    }else{
      ctx.response.body = '账号信息错误'
    }
  })
```

## [koa 例子地址](https://github.com/koajs/examples)

