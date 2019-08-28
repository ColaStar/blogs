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

最浅显易懂的话：**数据变化更新视图，视图变化更新数据**

什么是数据双向绑定？
即数据变化更新视图，视图变化更新数据，那么它是实现的呢？
首先获取到data上的所有属性，通过H5的新属性Object.definePropty设置getter，和setter方法，当数据发生改变时更新视图，这样说也许也比较浅显，我们可以分析一下他的源码实现，实现数据双向绑定我们需要有这么几个过程，初始化时会主动触发一次get方法，把订阅者添加到订阅器内，
- 1.Oberver.js 它主要是去遍历data上的所有属性，并且通过Object.definePropty添加get和set方法，get方法就是获取当前属性值，并且判断是否把当前的watcher加入订阅者队列里，而当更改数据的时候调用setter方法对更改数据，并且通知订阅器有数据更新。
- 2.Watcher.js 它主要是连接数据与视图的一个枢纽，视图的更新与添加批处理，它其实就是订阅者。
- 3.Dep.js 订阅器，添加订阅者方法，与通知订阅者更新方法；
- Compile.js 编译器 数据改变或初始化时，创建代码片段，插入app内，主要实现就是穿件代码片段，通过判断节点类型，去执行watcher
- Batcher.js 批处理器，通过判断当前watcher的id去判断执行，防止执行无意义的事情，一次刷新只能调用一次函数，当掉用完后清除任务队列

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





