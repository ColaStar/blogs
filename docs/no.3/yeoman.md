
# yeoman
## 特性

Yeoman 是 Google 官方推荐的一款 AngularJS 开发工具。
闪电般的初始化：项目开始阶段，可以基于现有的末班框架（例如：HTML5 Bolierplate、Twitter Bootstrap）进行项目初始化的快速构建。
了不起的构建流程：不仅仅包括JS、CSS代码的压缩、合并，还可以对图片和HTML文件进行优化，同时对CoffeScript和Compass的文件进行编译。
自动编译CoffeScript和Compass：通过LiveReload进程可以对源文件发生的改动自动编译，完成后刷新浏览器。
自动Lint代码：对于JS代码会自动进行JSLint测试，确保代码符合最佳编程实践。
内置的预览服务器：不再需要自己配置服务器了，使用内置的就可以快速预览。
惊人的图片优化：通过使用OptiPNG和JPEGTran来优化图片，减少下载损耗。
杀手级包管理：通过bower search jQuery，可以快速安装和更新相关的文件，不再需要打开浏览器自己搜索了。
PhantomJS单元测试：可以非常方便的使用PhantomJS进行单元测试，一切在项目初始的时候都准备好了。

## 安装

```
npm install -g yo
```
## 创建应用

输入yo命令

1.提示选择要安装的generators
或者

2.先安装generator-webapp
```
npm install -g generator-webapp
```
然后执行yo webapp自定义你要安装的文件（编译测试css，html，js的一些插件或库）
- 1.选择css 预编译器或HTML5/CSS3 特性检测库Modernizr
- 2.选择测试规范TDD（敏捷开发测试）还是BDD

