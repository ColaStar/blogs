数据双向绑定的原理

vue实现数据绑定是用了发布者-订阅者模式。
mvvm.js入口文件
observe.js
watcher.js //数据更新视图
Dep.js     //发布订阅主要靠的就是数组关系，订阅就是放入函数，发布就是让数组里的函数执行
Compile.js //
Batcher.js




Vdom实现


