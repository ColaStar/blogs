# vscode操作指南

## vscode 常用插件

- 1、chinese 修改为中文版 1、Auto Rename Tag 修改html标签，自动帮你完成尾部闭合标签的同步修改，和webstorm一样。

- 2、Auto Close Tag 自动闭合HTML标签

- 3、Beautiful 格式化代码的工具

- 4、Dash Dash是MacOS的API文档浏览器和代码段管理器

- 5、Markdown Image 方便的markdown 图片插入工具

- 6、Ejs Snippets ejs 代码提示

- 7、ESLint 检查javascript语法错误与提示 (只支持高亮显示js文件)

- 8、File Navigator 快速查找文件

- 9、Git History(git log) 查看git log

- 10 .git blame 安装git后， git blame可以基于git去审查每一行的代码最近一次修改的作者

- 11、Gulp Snippets 写gulp时用到，gulp语法提示。

- 12、HTML CSS Support 在HTML标签上写class智能提示当前项目所支持的样式

- 13、HTML Snippets 超级好用且初级的H5代码片段以及提示

- 14、Debug for Chrome 让vs code映射chrome的debug功能，静态页面都可以用vscode来打断点调试、配饰稍微复杂一点

- 15、Document this Js的注释模板

- 16、jQuery Code Snippets jquery提示工具

- 17、JS-CSS-HTML Formatter 格式化

- 18、Npm intellisense require 时的包提示工具

- 19、Open in browser 打开默认浏览器

- 20、One Dark Theme 一个vs code的主题

- 21、Path Intellisense 自动路径补全、默认不带这个功能

- 22、Project Manager 多个项目之间快速切换的工具

- 23、Pug(Jade) snippets pug语法提示

- 24.Path Autocomplete 路径提示功能

- 24、React Components 根据文件名创建反应组件代码。

- 25、React Native Tools reactNative工具类为React Native项目提供了开发环境。

- 26、Stylelint css/sass代码审查

- 27、Typings auto installer 安装vscode 的代码提示依赖库，基于typtings的

- 28、View In Browser 　默认浏览器查看HTML文件（快捷键Ctrl+F1可以修改）

- 29、Vscode-icons 让vscode资源目录加上图标、必备

- 30、VueHelper Vue2代码段（包括Vue2 api、vue-router2、vuex2）

- 31、Vue 2 Snippets vue必备vue代码提示

- 32、Vue-color vue语法高亮主题

- 33、Auto-Open Markdown Preview markdown文件自动开启预览

- 34、EverMonkey 印象笔记

- 35、atom one dark atom的一个高亮主题(个人推荐)

> react常用

- 36.Reactjs code snippets jsx代码提示

- 37.React Redux ES6 Snippets(es6快捷创建component)

- 38.JavaScript (ES6) code snippets(es6代码片段)

- 39.Typescript React code snippets(这是tsx的react组件片段)

- 40.ES7 React/Redux/GraphQL/React-Native snippets(es7代码片段)

- 41、Html2jade html模板转pug模板

## vscode常用快捷键

- 单行注释：[ctrl+k,ctrl+c] 或 ctrl+/
- 取消单行注释：[ctrl+k,ctrl+u] (按下ctrl不放，再按k + u)
- 多行注释：[alt+shift+A]
- 多行注释：/**

### 同时打开多个窗口（查看多个项目）

- 切换窗口 : ctrl + shift + left/right
- 打开一个新窗口： Ctrl+Shift+N
- 关闭窗口： Ctrl+Shift+W
- 关闭所有窗口 : ctrl + k + w
- 同时打开多个编辑器（查看多个文件）

- 新建文件 Ctrl+N
- 历史打开文件之间切换 Ctrl+Tab，Alt+Left，Alt+Right
- 切出一个新的编辑器（最多3个）Ctrl+\，也可以按住Ctrl鼠标点击Explorer里的文件名
- 左中右3个编辑器的快捷键Ctrl+1 Ctrl+2 Ctrl+3
- 3个编辑器之间循环切换 Ctrl+`
- 编辑器换位置，Ctrl+k然后按Left或Right

### 格式调整

- 代码行缩进Ctrl+[， Ctrl+]
- 折叠打开代码块 Ctrl+Shift+[， Ctrl+Shift+]
- Ctrl+C Ctrl+V如果不选中，默认复制或剪切一整行
- 代码格式化：Shift+Alt+F，或Ctrl+Shift+P后输入format code
- 修剪空格Ctrl+Shift+X
- 上下移动一行： Alt+Up 或 Alt+Down
- 向上向下复制一行： Shift+Alt+Up或Shift+Alt+Down
- 在当前行下边插入一行Ctrl+Enter
- 在当前行上方插入一行Ctrl+Shift+Enter

### 光标相关

- 移动到行首：Home
- 移动到行尾：End
- 移动到文件结尾：Ctrl+End
- 移动到文件开头：Ctrl+Home
- 移动到后半个括号 Ctrl+Shift+]
- 选中当前行Ctrl+i（双击）
- 选择从光标到行尾Shift+End
- 选择从行首到光标处Shift+Home
- 删除光标右侧的所有字Ctrl+Delete
- Shrink/expand selection： Shift+Alt+Left和Shift+Alt+Right
- Multi-Cursor：可以连续选择多处，然后一起修改，Alt+Click添加cursor或者Ctrl+Alt+Down 或 Ctrl+Alt+Up
- 同时选中所有匹配的Ctrl+Shift+L
- Ctrl+D下一个匹配的也被选中(被我自定义成删除当前行了，见下边Ctrl+Shift+K)
- 回退上一个光标操作Ctrl+U

### 重构代码

- 跳转到定义处：F12
- 定义处缩略图：只看一眼而不跳转过去Alt+F12
- 列出所有的引用：Shift+F12
- 同时修改本文件中所有匹配的：Ctrl+F12
- 重命名：比如要修改一个方法名，可以选中后按F2，输入新的名字，回车，会发现所有的文件都修改过了。
- 跳转到下一个Error或Warning：当有多个错误时可以按F8逐个跳转
- 查看diff 在explorer里选择文件右键 Set file to compare，然后需要对比的文件上右键选择Compare with 'file_name_you_chose'.

### 快捷操作代码

- 移动行：alt+up/down

- 显示/隐藏左侧目录栏 ctrl + b

- 复制当前行：shift + alt +up/down

- 删除当前行：shift + ctrl + 
- 选中文字：shift + left / right / up / downk

### 查找替换

- 查找 Ctrl+F
- 当前文件替换：Ctrl+H
- 整个文件夹中查找 Ctrl+Shift+F
- 全局替换：ctrl + shift + h

### 显示相关

- 显示git : ctrl + shift + g
- 控制台终端显示与隐藏：ctrl + ~
- 字体放大/缩小: ctrl + ( + 或 - )
- 查找文件/安装vs code 插件地址：ctrl + p
- 全屏：F11
zoomIn/zoomOut：Ctrl + =/Ctrl + -
- 侧边栏显/隐：Ctrl+B
- 预览markdown Ctrl+Shift+V

### 其他

- 自动保存：File -> AutoSave ，或者Ctrl+Shift+P，输入 auto