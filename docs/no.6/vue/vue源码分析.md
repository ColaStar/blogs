# Vue源码浅析

## Vue源码架构分析
3年前的vue
![](vue-star.png)
现在的vue2019.8
![](vue-star1.png)
### Vue 目录结构
来一张源码截图：
![](vue-core目录.png)

![](vue-core目录1.png)

我们再来看一下，core 文件夹下的目录：

![](vue-core目录2.png)

结论：Vue.js 的组成是由 core + 对应的 "平台" 补充代码构成（独立构建和运行时构建
只是 platforms 下 web 平台的两种选择）。

> Vue2.0 在保持实现‘响应的数据绑定’的同时又引入了 ‘virtual-dom’,那么它是怎么实现的呢？

### 数据双向绑定



数据双向绑定（响应式原理）所涉及到的技术

- 1.Object.defineProperty 
- 2.Observer 
- 3.Watcher 
- 4.Dep 
- 5.Directive
![](vue-数据双向绑定.png)











数据双向绑定的原理

vue实现数据绑定是用了发布者-订阅者模式。
mvvm.js入口文件
observe.js
watcher.js //数据更新视图
Dep.js     //发布订阅主要靠的就是数组关系，订阅就是放入函数，发布就是让数组里的函数执行
Compile.js //
Batcher.js




Vdom实现

获取datta上的所有属性

页面首次加载流程：

调用MVVM.js与Observe.js 进行遍历vm的每个key，使用object.difinePropty为vm设置getter和setter，当获取的时候首先判断是否加入了订阅者subs的队列中，如果加入了直接返回，未加入的话，进行

自动调用watcher.js





