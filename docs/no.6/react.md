# react

## 介绍与发展

- react是Feckbook开发的一款用来构建用户见面的js库，他只是做一个views，专门是用来用户界面的库。
- Virtual DOM 是一个模拟DOM树的Javascript对象。React使用 Virtual DOM来渲染UI，同时监听Virtual DOM上的数据变化并自动前一这些变化到UI上

<!-- 什么是Virtual，就是用js构建DOm，然后js做分析，转换为真正要插入页面的html。
react有一个叫state，只要state变，views就变， -->

- 传入属性 构建Virtual DOM，状态对应一个内容。

- JSX 是React定义的一种Javascript语法扩展，类似与XML。JSX是可选的，我们完全可以使用Javascript来编写React应用，不过JSX提供了一套更为简单的方式；来写react的应用。

![](react发展.png)

19年已经更新到了16.8的版本

## React开发环境与EcmaScript6

## JSX使用与介绍

> ES5写法
![](reactes5.png)

> ES6写法
![](reactes6.png)

![](react组件怎么用呢.png)

> Dom diff

比较算法
![](reactdomdiff.png)

![](reactdomdiff例子1.png)

domdiff是为渲染的性能，最小化的一个渲染机制

> JSX注意事项
![](JSX注意事项.png)

## 非Dom属性介绍
ref与key
![](非Dom属性介绍.png)
![](非Dom属性介绍1.png)

## webApp缺点与优点

缺点：
- 1.Web基于DOM，而DOM很慢
- 2.DOM拖慢JavaScript。
- 3。网页是单线程的
- 网页没有硬件加速

优点：
- 1.跨平台：所有系统都能使用
- 2.免安装：打开浏览器就能使用
- 3.快速部署：升级只需在服务器更新代码
- 4.超链接：可以与其他网站互联，可以被搜索引擎检索

react-canvas这个包是基于canvas和react的把jsx语法化成canvas

## 属性、状态的介绍与用法以及对比

> 属性（props）的介绍与用法

属性 是一个事物的性质与关系往往是与生俱来的，无法改变的

属性的用法
可以传入变量、number、string、数组、等

![](reactprops用法.png)

数组形式用法（需要加key防止整体重新渲染）

![](reactprops数组用法.png)

```
//属性与状态
class HelloMessage extend React.Component{
    render(){
        retun <h1 onClick={this.handle} className="h1">{this.props.name}</h1>
        )
    }
}
ReactDOM.reder(<HelloMessage name="吕鉴" name:{吕鉴} name={123} name={this.data}/>,
document.getElementById('exampdayle'))
```

> 状态state

事物所处的状态
状态是由事物自行处理的，不断变化的，
对于React来讲一切变化全部基于状态，
通过React来讲一切变换全部基于状态
通过setState进行gaibian
每次执行setState时render进行domdiff算法进行重新计算，发生变化后进行更新,

缺点：即每次state改变都会进行重排

如何优化呢？

![](reactstate.png)
 

> 属性状态对比？
都是纯js对象
都会触发render更新
但是props只有一次触发render只传递一次 ，state一直在触发，即实时修改
都具有确定性
组件在运行时需要修改的数据就是状态

![](react属性与状态对比.png)

状态是自己的属性是组件之间的


## 生命周期

> 生命周期介绍与初始化阶段
组件本质上是状态机，输入确定，输出确定。状态发生转换时会触发不同的钩子函数，从而让开发者有机会做出响应。可以用事件的思路来理解状态。
初始化-> 运行中-> 销毁
![](react初始化生命周期.png)
getDeaultProps
getInitalState
componentWill
> 运行中阶段
运行中拿到上拿到下

componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。

componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

render

componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
> 销毁阶段








、










