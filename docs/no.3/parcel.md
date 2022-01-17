# parcel 
## parcel特点

官网说的很详细
- 1.极速打包

Parcel `使用 worker 进程去启用多核编译`。同时有`文件系统缓存`，即使在重启构建后也能快速再编译。

亲测有效：
以下代码：
```
 index.html

<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
🛠 index.js

// 导入另一个组件
import main from './main';

main();
🛠 main.js

// 导入一个 CSS 模块
import classes from './main.css';

export default () => {
  console.log(classes.main);
};
💅 main.css

.main {
  /* 引用一张图片 */
  background: url('./images/background.png');
  color: red;
}
```
各个打包工具运行时
```

打包工具	时间
browserify	22.98s
webpack	20.71s
parcel	9.98s
parcel - with cache	2.64s
```
真的是好快啊

- 2.将你所有的资源打包

Parcel 具备开箱即用的对 JS, CSS, HTML, 文件 及更多的支持，而且不需要插件。
个人测试如果引用less文件，执行parcel后自动创建package.json 并 安装less插件，好嗨呦

- 3.自动转换

如若有需要，Babel, PostCSS, 和PostHTML甚至 node_modules 包会被用于自动转换代码.

- 4.零配置代码分拆

使用动态 import() 语法, Parcel 将你的输出文件束(bundles)分拆，因此你只需要在初次加载时加载你所需要的代码。

- 热模块替换

Parcel 无需配置，在开发环境的时候会自动在浏览器内随着你的代码更改而去更新模块。

- 友好的错误日志

当遇到错误时，Parcel 会输出 语法高亮的代码片段，帮助你定位问题。

## 安装

```
npm install -g parcel-bundler
```
## 应用

[官方文档](https://parceljs.org/code_splitting.html)