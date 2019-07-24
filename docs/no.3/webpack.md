webpack.md# webpack

webpack的1版本和2版本都以及过时了,为了遇到一些老得项目时可用

- webpack 1
- webpack 2
- webpack 3
- webpack 4

站在巨人的肩膀（抄的各种第三方）

就是一个配置工具

## webpack 入门的基础必备

他是一个前端模块化的打包工具
> 什么是模块化？

模块化是一种将系统分离成独立功能部分的方法，严格定义模块接口、模块间具有透明性（传递参数）。

> 模块化历史

- 无模块时代
- 模块萌芽时代
- 现代模块时代

无模块时代
```
//a.js
var a = function(){

}
//b.js
var b = function(){

}
```
会造成的问题：
1.全局变量泛滥
2.命名冲突
3.依赖关系的管理不是很好。

模块萌芽时代
立即执行函数(IIFE)
```
var modileA = function(){
    var a,b;
    return {
        messages:function(){
            alert(a+b+c)
        }
    }
}()

z最经典的就是Jquery

(function(window){
window.jQuery = window.$ = jQuery;
})(window)
```
现代模块时代
1.CommonJS
2.RequireKS(AMD)/SeaJS(CMD)
3.ES6 Module

CommonJS  
module.exports导出
直接require引入

AMD与cmd的区别：
知乎：https://www.zhihu.com/question/20351507/answer/14859415

ES6 Module


高内聚、低耦合

编译过的文件又一个sourcemap

webpack万物都是模块
everything is module

特点
- 拆分依赖到代码块按需加载
- 快速初始化项目
- 所有静态资源都可以当作模块
- 第三方库模块化
- 自定义模块打包
- 适合大型项目


entry :配置入口文件
output：配置编译后的资源
loader(module) ：资源的处理
resolve：配置资源的别名/扩展名等
plugins：插件、biloader更加强大


围绕上边这些玩

webpack1.0总结

1，loader怎么用
- 1.通过requir的直接加进去（在require 的时候把loader加进去）
```
require('./loader!./dir/file.txt')
require('jade!./template.jade')
require('!style!css!less!bootstrap/less/bootstrap.less')
```
- 2.z在配置文件里配
- 通过命令行

常见的loader
```
css样式：css-loader/style-loader/less-loader/sass-loader

脚本js：bebel-loader

图片/字体：file-loader  url-loader
```
webpack使用优化
```
1.b别名alias
2.忽略对已知模块的解析 noParse
3.将模块暴露到全局；不需要在html中引入文件了expose-loader
4.通过providePlugin将模块暴露到全局
5.提取公共代码COmmonsChunkplugin
6. 配置全局开关debug
7.单独打包css

{
    module:{
        alias:{
            '@':'/src'
        },   
        noParse:['/nodemodules']
        loaders:{
            {
                test:/jquery\.js$/,
                loader:'export?$!exporse?jQuery'
            }
        }
    }
    plugin：[
        new webpack.optimize.CommonsChunkplugin({
            name:'vendor',
            filename:'[name].[hash].js',
            minChunks:3,
            chunks:['jquery',underscore]
        }),
        new webpack.DefinePlugin({
            DEBUG:true
        })
        new ExtractTextPlugin('[name].[hash:8].css',{
            allChunks:true
        })
    ]
}
require('exporse?$!exporse?jQuery!jquery')

//全局开关别的js
const constant = {
    API_HOST = DEBUG ? 'http://.....' : ''
}
```


webpack2新变化




webpack4

不要纠结语法

过程非常艰辛，配置工程师
特点：
tree shcking
提高webpack性能

没有向下兼容，一些很老的插件是不能用了
 



## webpack编译过程吗？

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程，

- 1、初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
- 2、开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
- 3、确定入口：根据配置中的 entry 找出所有的入口文件；
- 4、编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
- 5、完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
- 6、输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
- 7、输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。
var a = function b(){
    return 3
}

console.log(a)

## 编写过webpack插件

![](./编写过webpack插件.png)

- 1、Webpack 通过 Plugin 机制让其更加灵活，以适应各种应用场景。在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
- 2、Webpack 启动后，在读取配置的过程中会先执行 new BasicPlugin(options) 初始化一个 BasicPlugin 获得其实例。在初始化 compiler 对象后，再调用 basicPlugin.apply(compiler) 给插件实例传入 compiler 对象。插件实例在获取到 compiler 对象后，就可以通过 compiler.plugin(事件名称, 回调函数) 监听到 Webpack 广播出来的事件。并且可以通过 compiler 对象去操作 Webpack。
- 3、在开发 Plugin 时最常用的两个对象就是 Compiler 和 Compilation，它们是 Plugin 和 Webpack 之间的桥梁。Compiler 和 Compilation 的含义如下：Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。
- 4、Compiler 和 Compilation 的区别在于：Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。
- 5、开发插件时需要注意：只要能拿到 Compiler 或 Compilation 对象，就能广播出新的事件，所以在新开发的插件中也能广播出事件，给其它插件监听使用、传给每个插件的 Compiler 和 Compilation 对象都是同一个引用。也就是说在一个插件中修改了 Compiler 或 Compilation 对象上的属性，会影响到后面的插件、有些事件是异步的，这些异步的事件会附带两个参数，第二个参数为回调函数，在插件处理完任务时需要调用回调函数通知 Webpack，才会进入下一处理流程。

## 开发webpack loader

- 1、一个 Loader 的职责是单一的，只需要完成一种转换。如果一个源文件需要经历多步转换才能正常使用，就通过多个 Loader 去转换。在调用多个 Loader 去转换一个文件时，每个 Loader 会链式的顺序执行， 第一个 Loader 将会拿到需处理的原内容，上一个 Loader 处理后的结果会传给下一个接着处理，最后的 Loader 将处理后的最终结果返回给 Webpack。
- 2、所以，在你开发一个 Loader 时，请保持其职责的单一性，你只需关心输入和输出。

![](手写loader.png)

