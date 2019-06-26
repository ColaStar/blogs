# webpack

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

