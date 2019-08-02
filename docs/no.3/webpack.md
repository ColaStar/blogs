# webpack

站在巨人的肩膀
 
## Webpack是什么?

Webpack是一个模块打包工具，在Webpack里一切文件皆模块。通过loader转换文件，通过plugin注入钩子，最后输出由多个模块组合的文件。Webpack专注构建模块化项目。
Webpack可以看作是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其他一些不能被浏览器直接运行的扩展语音(如：Scss,TypeScript等)，并将其打包为合适的格式以供浏览器使用。

## Webpack与Grunt、Gulp的不同？

Grunt/Gulp是一种能够优化前端开发流程的工具，而Webpack是一种模块化的解决方案。

### 工作方式不同

- Grunt/Gulp的工作方式是：在一个配置文件中，指明某些文件进行类似编译/组合/压缩等任务的具体步骤，之后工具可以自动帮你完成这些任务

- Webpack的工作方式是：把项目当作是一个整体，通过指定的入口文件，Webpack会从这个入口文件开始找到项目所有的依赖文件，然后使用loader处理它们，最后打包成一个或多个浏览器能够识别的JavaScript文件

### 构建思路不同

- Grunt/Gulp需要将整个前端构建过程拆分成多个task，合理控制所有task的调用关系

- Webpack需要定义好入/出口，并需要清楚对于不同类型资源应该用什么loader解析编译

Grunt/Gulp是基于任务和流(task和stream)的。类似jQuery,找到一个(或一类)文件，对其做一系列的链式操作，更新流上的数据，整条链式操作构成了一个任务，多个任务就构成了整个Web的构建流程。

Webpack是基于入口的。Webpack会自动的递归解析入口所需要加载的所有资源文件，然后用不同的loader来处理不同的文件，用pulgin扩展Webpack功能。

### 背景知识不同

Grunt/Gulp更像是后端开发者的思路，需要对整个流程了如指掌。Webpack更倾向于前端开发者的思路。

## webpack编译过程或构建流程是什么？

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程，

- 1、初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
- 2、开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
- 3、确定入口：根据配置中的 entry 找出所有的入口文件；
- 4、编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
- 5、完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
- 6、输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
- 7、输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

## 分别介绍bundle，chunk，module是什么？

- bundle：由Webpack打包出来的文件
- chunk：代码块，webpack在进行模块的依赖分析的时候，代码分割出来的代码块
- module：是开发中的单个模块，在Webpack中，一切皆模块，一个模块对应一个文件

## 什么是Loader?什么是Plugin?

- loader: 模块转换器，用于对模块的源代码进行转换
- plugin: 自定义webpack打包过程的方式，插件含有apply属性的JavaScript对象，apply属性会被webpack compiler调用，并且compiler对象可以在整个编译生命周期内访问

## loader和plugin有哪些不同？

### 不同的作用

- loader直译为“加载器"，Webpack将一切文件视为模块，但是Webpack原生只能解析JavaScript和JSON类型文件。如果想加载解析其他类型文件，就会用到loader。所以loader是让Webpack拥有加载和解析非JavaScript文件的能力
- plugin直译为”插件“，plugin可以扩展Webpack的功能，让Webpack具有更多的灵活性。在Webpack运行的生命周期中会广播许多事件，plugin可以监听这些事件，在合适的时机通过Webpack提供的API改变输出结果

### 不同的用法

- loader在module rules中配置，也就说它作为模块解析规则存在。类型为Array，每一项都是一个Object，里面描述了什么类型的文件(test)，使用什么加载(loader)和使用的参数(options)

- plugin单独在plugins中单独配置。类型为Array，每项都是一个plugin的实例，参数是通过构造函数传入

## 有哪些常见的Loader？

- file-loader: 将文件输出到一个文件夹中，在代码中通过相对路径(url)去引用输出的文件
- url-loader: 和file-loader类似，但是能在文件很小的情况下，以base64的方式将内容注入到代码中
- image-loader: 加载并压缩图片文件
- babel-lodader: 将ES6转成ES5
- css-loader: 加载CSS，支持模块化/压缩/文件导入等特性
- style-loader：把CSS代码注入到JavaScript中，通过DOM操作去加载CSS
- eslint-loader: 通过ESlint检查JavaScript代码

## 有哪些常见的Plugin？

- define-plugin: 定义环境变量
- html-webpack-pulgin: 生成创建html入口文件，并引用对应的外部资源
- uglifyjs-plugin: 通过Uglifyjs压缩JavaScript代码
- mini-css-extract-plugin: 分离CSS文件
- clean-webpack-plugin: 删除打包文件
- happypack: 实现多线程加速编译

## Tree Shaking

为了使用tree shaking，需要满足以下条件：

- 使用ES2015语法(即import和export)
- 在项目package.json文件中，添加sideEffects入口
- 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)(例如：UglifyJSPlugin)

### 将文件标记为无副作用(side-effect-free)

这种方式是通过`package.json`的`sideEffects`属性来实现的。

```
{
  "sideEffects": false
}
```

「副作用」的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个`export`或多个`export`。举例说明，例如`polyfill`，它影响全局作用域，并且通常不提供export。

注意，任何导入的文件都会受到`tree shaking`的影响。这意味着，如果在项目中使用类似`css-loader`并导入`CSS`文件，则需要将其添加到 `side effect` 列表中，以免在生产模式中无意中将它删除：

```
{
  "sideEffects": ['*.css']
}
```

### 压缩输出
从 `webpack 4` 开始，也可以通过 "`mode`" 配置选项轻松切换到压缩输出，只需设置为 "`production`"。

也可以在命令行接口中使用`--optimize-minimize`标记，来使用`UglifyjsPlugin`。

## Code Splitting

`code splitting`的必要性

- 不进行`code splitting`，打包后单文件提交较大，加载时长较长，影响用户体验
- 不进行`code splitting`，经常修改业务代码，重新打包后，浏览器不能进行缓存，导致性能较差，影响用户体验

### 同步代码

```
import _ from 'lodash';
```

webpack.config.js配置如下：

```
....
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
....
```

配置后，会将公用类库进行打包，生成一个vendors~main.js文件。

### 异步代码

```
function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Clear', 'love'], '');
    return element;
  })
}

getComponent().then(element => {
  document.body.appendChild(element);
})
```

## 什么 是模块热更新？
模块热更新是Webpack是的一个功能，它可以使得代码修改以后不需刷新浏览器就可以更新，是高级版的自动刷新浏览器。devServer通过hot属性可以控制模块热更替。

> 通过配置文件

```
const webpack = require('webpack');
const path = require('path');
let env = process.env.NODE_ENV == "development" ? "development" : "production";
const config = {
  mode: env,
  devServer: {
     hot:true
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(), //热加载插件
  ]
}
module.exports = config;
```

> 通过命令行

```
"script": {
  "start": "NODE_EVN=development webpack-dev-server --config webpack-devlop-config.js --hot"
}
```

## Webpack的热更新是如何做到的？说明其原理？

Webpack的热更新有称为热替换(Hot Module Replacement)，缩写为HMR。这个机制可以实现不刷新浏览器而将新变更的模块替换旧的模块。原来如下：

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/webpack热更新.jpeg">![](https://raw.githubusercontent.com/ColaStar/static/master/images/webpack热更新.jpeg)</a>

> server端和client端都做了哪些具体工作：

- 1.第一步，在`Webpack`的`watch`模式下，文件系统中某一个文件发生修改，`Webpack`监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的JavaScript对象保存在内存中。
- 2.第二步是`Webpack-dev-server`和`Webpack`之间的接口交互，而在这一步，主要是`dev-server`的中间件`Webpack-dev-middleware`和`Webpack`之间的交互，`Webpack-dev-middleware`调用`Webpack`暴露的API对代码变化进行监控，并且告诉webpack，将代码打包到内存中。
- 3.第三步是`Webpack-dev-server`对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了`devServer.watchContentBase`为`true`的时候，`Server`会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行`live reload`。注意，这儿是**浏览器刷新**，和`HMR`是两个概念。
- 4.第四步也是`webpack-dev-server`代码的工作，该步骤主要是通过`sockjs`（`webpack-dev-server` 的依赖）在浏览器端和服务端之间建立一个`websocket`长连接，将`Webpack`编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中`Server`监听静态文件变化的信息。浏览器端根据这些`socket`消息进行不同的操作。当然服务端传递的最主要信息还是新模块的`hash` 值，后面的步骤根据这一`hash`值来进行模块热替换。
- 5.`webpack-dev-server/client`端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了`Webpack`，`webpack/hot/dev-server`的工作就是根据`webpack-dev-server/client`传给它的信息以及`dev-server`的配置决定是**刷新浏览器**呢还是进行**模块热更新**。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。
- 6.`HotModuleReplacement.runtime`是客户端`HMR`的中枢，它接收到上一步传递给他的新模块的`hash`值，它通过`JsonpMainTemplate.runtime`向`server`端发送`Ajax`请求，服务端返回一个`json`，该`json`包含了所有要更新的模块的`hash`值，获取到更新列表后，该模块再次通过`jsonp`请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。
- 7.而第 10 步是决定`HMR`成功与否的关键步骤，在该步骤中，`HotModulePlugin`将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
- 8.最后一步，当`HMR失`败后，回退到`live reload`操作，也就是进行浏览器刷新来获取最新打包代码。

## webpack-dev-server和http服务器如nginx有什么区别？

webpack-dev-server使用内存来存储Webpack开发环境下打包的文件，并且可以使用模块热更新，它比传统的http服务对开发更加简单高效。

##  如何提高webpack的构建速度?

### 常规

> 保持版本最新
使用最新稳定版本的webpack、node、npm等，较新的版本更够建立更高效的模块树以及提高解析速度。
> 优化loaders配置

由于loader对文件的转换操作很耗时，所以需要让尽可能少的文件被loader处理。我们可以通过以下3方面优化loader配置：

- 优化正则匹配
- 通过cacheDirectory选项开启缓存
- 通过include、exclude来减少被处理的文件

```
// webpack.common.js

module: {
    rules: [
        {
            test:/\.js$/,
            //babel-loader支持缓存转换出的结果，通过cacheDirectory选项开启
            loader:'babel-loader?cacheDirectory',
            //只对项目根目录下的src 目录中的文件采用 babel-loader
            include: [path.resolve('src')],
            //排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
            exclude: path.resolve(__dirname, 'node_modules')
        }
    ]
}
```
> 优化最小化css代码
它是专门对css做压缩、去重的专门为cssnano做的一款插件用来提取用的
```
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
  ]
};
```

>  optimization.splitChunks 提取公共代码

`Webpack 4`移除了`CommonsChunkPlugin`取而代之的是两个新的配置项`optimization.splitChunks`和`optimization.runtimeChunk`来简化代码分割的配置。
通过设置 `optimization.splitChunks.chunks: "all"` 来启动默认的代码分割配置项。
当满足如下条件时，`webpack` 会自动打包 `chunks`:

- 当前模块是公共模块（多处引用）或者模块来自node_modules
- 当前模块大小大于30kb, 如果此模块是按需加载，并行请求的最大数量小于等于5
- 如果此模块在初始页面加载，并行请求的最大数量小于等于 3

`runtimeChunk`的作用是将包含`chunks `映射关系的 `list`单独从 `app.js`里提取出来，因为每一个 `chunk` 的 `id` 基本都是基于内容 `hash` 出来的，所以你每次改动都会影响它，如果不将它提取出来的话，等于`app.js`每次都会改变。缓存就失效了。

```
optimization: {
    runTimeChunk:{
      name:'runtime'
    },
    splitChunks: {
        chunks: 'async', 是否对异步代码进行的代码分割
        //默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为gaichunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
        minSize: 30000,  // 引入模块大于30kb才进行代码分割  //默认值是30kb
        maxSize: 0, // 引入模块大于Xkb时，尝试对引入模块二次拆分引入
        minChunks: 2, // 引入模块至被使用2次后才进行代码分割  //被多少模块共享
        maxAsyncRequests: 5, //  //所有异步请求不得超过5个，最大请求数
        maxInitialRequests: 3,  //初始话并行请求不得超过3个
        automaticNameDelimiter: '~', // 模块间的连接符，默认为"~"
        name: true,//打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
        cacheGroups: {//对缓存的文件生效//设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
            common: {
              name: 'common',  //抽取的chunk的名字
              chunks(chunk) { //同外层的参数配置，覆盖外层的chunks，以chunk为维度进行抽取
              },
              test(module, chunks) {  //可以为字符串，正则表达式，函数，以module为维度进行抽取，只要是满足条件的module都会被抽取到该common的chunk中，为函数时第一个参数是遍历到的每一个模块，第二个参数是每一个引用到该模块的chunks数组。自己尝试过程中发现不能提取出css，待进一步验证。
              },
              priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
              minChunks: 2,  //最少被几个chunk引用
              reuseExistingChunk: true，//	如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
              enforce: true  // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
            }

            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10  // 优先级，越小优先级越高
            },
            default: {  // 默认设置，可被重写
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true  // 如果本来已经把代码提取出来，则重用存在的而不是重新产生
            }
        }
    }
}
```

为啥移除呢？
CommonsChunkPlugin存在以下三个问题：

- 1:产出的chunk在引入的时候，会包含重复的代码；

- 2: 无法优化异步chunk；
- 3:高优的chunk产出需要的minchunks配置比较复杂。

为了解决这些问题，webpack4中用splitchunks替代了CommonsChunkPlugin。

> Smaller = false

减少编译的整体大小，以提高构建性能。尽量保持`chunks`小巧。

- 使用更小/更少的库
- 移除不需要的代码
- 只编译你在开发的代码

> Worker Pool

`thread-loader`可以将非常耗性能的`loaders`转存到`worker pool`中。
不要使用太多的`workers`，因为`Node.js`的`runtime`和`loader`有一定的启动开销。最小化`workers`和主进程间的模块传输。进程间通讯(`IPC`)是非常消耗资源的。

其实就是在多个线程上做计算
**注意：**这个一般是在大项目上使用，在小项目上使用反而会加长构建时间。

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve("src"),
        use: [
          "thread-loader",
          // your expensive loader (e.g babel-loader)
        ]
      }
    ]
  }
}
//with option
{
    loader: "thread-loader",
    // loaders with equal options will share worker pools
    options: {
      // the number of spawned workers, defaults to (number of cpus - 1) or
      // fallback to 1 when require('os').cpus() is undefined
      workers: 2,或者require('os').cpus - 1
 
      // number of jobs a worker processes in parallel
      // defaults to 20
      workerParallelJobs: 50,
 
      // additional node.js arguments
      workerNodeArgs: ['--max-old-space-size=1024'],
 
      // Allow to respawn a dead worker pool
      // respawning slows down the entire compilation
      // and should be set to false for development
      poolRespawn: false,
 
      // timeout for killing the worker processes when idle
      // defaults to 500 (ms)
      // can be set to Infinity for watching builds to keep workers alive
      poolTimeout: 2000,
 
      // number of jobs the poll distributes to the workers
      // defaults to 200
      // decrease of less efficient but more fair distribution
      poolParallelJobs: 50,
 
      // name of the pool
      // can be used to create different pools with elsewise identical options
      name: "my-pool"
    }
  },
  // your expensive loader (e.g babel-loader)
  babel-loader
  }
```

> 持久化缓存

对于一些性能开销较大的`loader`之前可以添加`cache-loader`，启用持久化缓存。
使用`package.json`中的`postinstall`清楚缓存目录。
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.ext$/,
        use: ['cache-loader', ...loaders],
        include: path.resolve('src'),
      },
    ],
  },
};
```

> Dlls

使用`DllPlugin`将更新不频繁的代码进行单独编译。这将改善引用程序的编译速度。即使它增加了构建过程的复杂度。
利用`DllPlugin`和`DllReferencePlugin`预编译资源模块， 通过`DllPlugin`来对那些我们引用但是绝对不会修改的`npm`包来进行预编译，再通过`DllReferencePlugin`将预编译的模块加载进来。

> 解析(resolve)

以下几步可以提高解析速度：

- 通过externals踢出去一部分文件，防止打俩份，或者可以直接使用cdn
- 尽量减少`resolve.modules`、`resolve.extensions`、`resolve.mainFiles`、`resolve.desciriptionsFiles`中类目的数量，因为它们会增加文件系统的调用次数。
- 如果你不使用`symlinks`，可以设置`resolve.symlinks: false`
- 如果你使用自定义解析`plugins`，并且没有指定`context`信息，可以设置`resolve.cacheWithContext: false`

### 开发环境 Development

> 在内存中编译

以下几个实用的工具通过在内存中进行代码的编译和资源的提供，但并不写入磁盘来提高性能：

- webpack-dev-server
- webpack-hot-middleware
- webpack-dev-middleware

>  Devtool

需要注意在不同的`devtool`的设置，会导致不同的性能差异。

- `eval`具有最好的性能，但不能帮你转义代码
- 如果你能接受稍微差一些的`mapping`质量，你可以使用`cheap-source-map`选择来提高性能
- 使用`eval-source-map`配置进行增量编译 

在大多数情况下，`cheap-module-eval-source-map`是最好的选择。

> 避免在生产环境在才会用到的工具

某些实用工具，`plugins`和`loaders`都只能在构建生产环境时才使用。例如，在开发时使用`UglifyJsPlugin`来压缩和修改代码是没有意义的。以下这些工具在开发中通常被排除在外：

- UglifyJsPlugin
- ExtractTextPlugin
- `[hash]/[chunkhash]`
- AggressiveSplittingPlugin
- AggressiveMergingPlugin
- ModuleConcatenationPlugin

> 最小化入口chunk

webpack只会在文件系统中生成已更新的chunk。应当在生成入口chunk时，尽量减少入口chunk的体积，以提高性能。

### 生产环境 Production

不要为了非常小的性能增益，牺牲了你应用程序的质量！！请注意，在大多数情况下优化代码质量，比构建性能更重要。

> 多个编译时
当进行多个编译时，以下工具可以帮助到你：

- `parallel-webpack`: 它允许编译工作在woker池中进行。
- `cache-loader`: 缓存可以在多个编译之间共享。

### 工具相关问题

> Babel
项目中的`preset/plugins`数量最小化
> TypeScript

- 在单独的进程中使用`fork-ts-checker-webpack-plugin`进行类型检查
- 配置`loaders`时跳过类型检查
- 使用`ts-loader`时，设置`happyPackMode: true`以及 `transpileOnly: true`

>Saas
`node-sass`中有个来自`Node.js`线程池的阻塞线程的`bug`。当使用`thread-loader`时，需要设置`workParallelJobs: 2`

##  如何利用Webpack来优化前端性能？（提高性能和体验）

用`Webpack`优化前端性能是指优化`Webpack`输出结果，让打包的结果在浏览器运行快速高效。

- 压缩代码。删除多余的代码/注释，简化代码的写法等等方式。可以利用`Webpack`的`UglifyJsPlugin`和`ParallelUglifyPlugin`来压缩`JavaScript`代码。利用`css-loader?minimize`来压缩CSS
- 压缩图片。利用`imagemin-webpack-plugin`等图片资源压缩插件，对引用的图片资源进行压缩处理
- 合理的图片资源引用。使用`url-loader`加载解析图片资源时，可以通过配置`options limit`参数，将较小的图片资源转换成`base64`格式，减少`http`请求
- 利用`CDN`加速。在构建过程中，将引用的静态资源路径修改为`CDN`上对应的路径。可以利用`Webpack`对于`output`参数和各个`loader`的`publicPath`参数来修改资源路径
- 删除死代码(`Tree Shaking`)。将代码中没有引用的代码片段删除掉。可以通过在启动`Webpack`时追加参数`--optimize-minimize`来实现
- 提取公共代码

##  npm打包时需要注意哪些？如何利用Webpack来更好的构建？

> npm模块需要注意以下问题：

- 要支持CommonJS模块化规范，所以打包后的最后结果也要支持该规则
- npm模块使用者的环境是不确定的，很有可能并不支持ES6，所以打包的最后结果应该是采用ES5编写的。并且如果ES5是经过转换的，请最好连同SourceMap一同上传
- npm包大小应该是尽量小（有些仓库会限制包大小）
- 发布的模块不能将依赖的模块也一同打包，应该让用户选择性的去自行安装。这样可以避免模块应用者再次打包时出现底层模块被重复打包的情况
- UI组件类的模块应该将依赖的其它资源文件，例如.css文件也需要包含在发布的模块里

## 基于以上需要注意的问题，我们可以对于Webpack配置做以下扩展和优化：

- `CommonJS`模块化规范的解决方案： 设置`output.libraryTarget='commonjs2'`使输出的代码符合`CommonJS2`模块化规范，以供给其它模块导入使用
- 输出ES5代码的解决方案：使用`babel-loader`把ES6代码转换成`ES5`的代码。再通过开启`devtool: 'cheap-module-eval-source-map'`输出`SourceMap`以发布调试
- `npm`包大小尽量小的解决方案：`Babel`在把`ES6`代码转换成`ES5`代码时会注入一些辅助函数，最终导致每个输出的文件中都包含这段辅助函数的代码，造成了代码的冗余。解决方法是修改`.babelrc`文件，为其加入`transform-runtime`插件
- 不能将依赖模块打包到`npm`模块中的解决方案：使用`externals`配置项来告诉`Webpack`哪些模块不需要打包
- 对于依赖的资源文件打包的解决方案：通过`css-loade`r和`extract-text-webpack-plugin`来实现，配置如下：

```
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: ['css-loader'] })  // 提取出chunk中的css到单独的文件中
      }
    ]  
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'index.css' })
  ]
}
```

## 分析工具
> webpack-bundle-awalyzer
会把所有打包后的文件生成一份文档
> webpack-jarvis
这个比上一个
叫美观和详细

## 编写过webpack插件

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/编写过webpack插件.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/编写过webpack插件.png)</a>

- 1、Webpack 通过 Plugin 机制让其更加灵活，以适应各种应用场景。在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
- 2、Webpack 启动后，在读取配置的过程中会先执行 new BasicPlugin(options) 初始化一个 BasicPlugin 获得其实例。在初始化 compiler 对象后，再调用 basicPlugin.apply(compiler) 给插件实例传入 compiler 对象。插件实例在获取到 compiler 对象后，就可以通过 compiler.plugin(事件名称, 回调函数) 监听到 Webpack 广播出来的事件。并且可以通过 compiler 对象去操作 Webpack。
- 3、在开发 Plugin 时最常用的两个对象就是 Compiler 和 Compilation，它们是 Plugin 和 Webpack 之间的桥梁。Compiler 和 Compilation 的含义如下：Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。
- 4、Compiler 和 Compilation 的区别在于：Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。
- 5、开发插件时需要注意：只要能拿到 Compiler 或 Compilation 对象，就能广播出新的事件，所以在新开发的插件中也能广播出事件，给其它插件监听使用、传给每个插件的 Compiler 和 Compilation 对象都是同一个引用。也就是说在一个插件中修改了 Compiler 或 Compilation 对象上的属性，会影响到后面的插件、有些事件是异步的，这些异步的事件会附带两个参数，第二个参数为回调函数，在插件处理完任务时需要调用回调函数通知 Webpack，才会进入下一处理流程。

## 开发webpack loader

- 1、一个 Loader 的职责是单一的，只需要完成一种转换。如果一个源文件需要经历多步转换才能正常使用，就通过多个 Loader 去转换。在调用多个 Loader 去转换一个文件时，每个 Loader 会链式的顺序执行， 第一个 Loader 将会拿到需处理的原内容，上一个 Loader 处理后的结果会传给下一个接着处理，最后的 Loader 将处理后的最终结果返回给 Webpack。
- 2、所以，在你开发一个 Loader 时，请保持其职责的单一性，你只需关心输入和输出。

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/手写loader.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/手写loader.png)</a>

webpack的1版本和2版本都以及过时了,为了遇到一些老得项目时可用
后期补webpack1 2 3 4 的不同
