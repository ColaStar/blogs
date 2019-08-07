# react

## 介绍与发展

- react是Feckbook开发的一款用来构建用户见面的js库，他只是做一个views，专门是用来用户界面的库,所以react本身只涉及UI层，。
- Virtual DOM 是一个模拟DOM树的Javascript对象。React使用 Virtual DOM来渲染UI，同时监听Virtual DOM上的数据变化并自动前一这些变化到UI上

<!-- 什么是Virtual DOM，就是用js构建DOm，然后js做分析，转换为真正要插入页面的html。
react有一个叫state，只要state变，views就变， -->

- 传入属性 构建Virtual DOM，状态对应一个内容。

- JSX 是React定义的一种Javascript语法扩展，类似与XML。JSX是可选的，我们完全可以使用Javascript来编写React应用，不过JSX提供了一套更为简单的方式；来写react的应用。

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/react发展.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/react发展.png)</a>

19年已经更新到了16.8的版本

## React开发环境与EcmaScript6

## JSX使用与介绍
### 优点

- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。

```
const element = <h1>Hello, world!</h1>;
```

这种看起来可能有些奇怪的标签语法既不是字符串也不是 `HTML`。

它被称为 `JSX，` 一种 `JavaScript` 的语法扩展。 我们推荐在 `React` 中使用 `JSX` 来描述用户界面。

`JSX` 是在 `JavaScript` 内部实现的。

我们知道元素是构成 `React` 应用的最小单位，`JSX` 就是用来声明 `React` 当中的元素。

与浏览器的 `DOM` 元素不同，`React` 当中的元素事实上是普通的对象，`React DOM` 可以确保 浏览器 `DOM` 的数据内容与 `React` 元素保持一致。

要将 `React` 元素渲染到根 `DOM` 节点中，我们通过把它们都传递给 `ReactDOM.render()` 的方法来将其渲染到页面上：

> ES5写法
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/reactes5.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/reactes5.png)</a>

> ES6写法
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/reactes6.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/reactes6.png)</a>

> react组件怎么用呢
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/react组件怎么用呢.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/react组件怎么用呢.png)</a>

> Dom diff

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/reactdomdiff.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/reactdomdiff.png)</a>

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/reactdomdiff例子1.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/reactdomdiff例子1.png)</a>

Dom diff是为渲染的性能，最小化的一个渲染机制

> JSX注意事项
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/JSX注意事项.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/JSX注意事项.png)</a>

## 非Dom属性介绍

ref与key

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/非Dom属性介绍.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/非Dom属性介绍.png)</a>

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

**属性的用法**

- 可以传入变量、number、string、数组、等
- 数组形式用法（需要加key防止整体重新渲染）

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/reactprops用法.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/reactprops用法.png)</a>

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/reactprops数组用法.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/reactprops数组用法.png)</a>

**默认 Props**

通过组件类的 defaultProps 属性为 props 设置默认值，

```
//属性与状态
class HelloMessage extend React.Component{
    render(){
        retun <h1 onClick={this.handle} className="h1">{this.props.name}</h1>
        )
    }
}
HelloMessage.defaultProps = {
  name: 'Runoob'
};
ReactDOM.reder(<HelloMessage name="吕鉴" name:{吕鉴} name={123} name={this.data}/>,
document.getElementById('exampdayle'))
```

> 状态state

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

- 事物所处的状态
- 状态是由事物自行处理的，不断变化的，
- 对于React来讲一切变化全部基于状态，
- 通过setState进行改变
- 每次执行`setState`时`render`进行`Dom diff`算法进行重新计算，发生变化后进行更新,

缺点：即每次state改变都会进行重排

如何优化呢？

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/reactstate.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/reactstate.png)</a>
 
> 属性状态对比？

- 都是纯js对象
- 都会触发render更新
- props 是不可变的,如果需要改变就需要把state放到props上边，而 state 可以根据与用户交互来改变。
- 但是props只有一次触发render只传递一次 ，state一直在触发，即实时修改
- 都具有确定性
- 组件在运行时需要修改的数据就是状态

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/react属性与状态对比.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/react属性与状态对比.png)</a>

状态是自己的属性是组件之间的

> 单向数据流

任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。

如果你想象一个组件树作为属性的瀑布，每个组件的状态就像一个额外的水源，它连接在一个任意点，但也流下来。




## 生命周期
**React v16.3之前生命周期**
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/react16.3之前生命周期.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/react16.3之前生命周期.png)</a>
**React v16.3生命周期**
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/react16.3生命周期.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/react16.3生命周期.png)</a>

**React v16.4生命周期**
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/react16.4生命周期.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/react16.4生命周期.png)</a>

> 生命周期介绍与初始化阶段
组件本质上是状态机，输入确定，输出确定。状态发生转换时会触发不同的钩子函数，从而让开发者有机会做出响应。可以用事件的思路来理解状态。
初始化-> 运行中-> 销毁
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/react初始化生命周期.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/react初始化生命周期.png)</a>
getDeaultProps
getInitalState
componentWill
> 运行中阶段
运行中拿到上拿到下

componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。
默认return true

componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

render

componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
> 销毁阶段

componentDidUnmount

## 组件介绍

- 普通组件component
- 纯组件PureComponent
`PureComponent`的自动为我们添加的`shouldComponentUpate`函数
- 纯函数组件
没有自身的状态，相同的props输入必然会获得完全相同的组件展示。不需要关心组件的一些生命周期函数和渲染的钩子更简洁。

```
const Button = ({ day }) => {
  return (
    <div>
      <button className="btn btn-warning">我是 {day.name}</button>
    </div>
  );
};
const message = {
  name:'纯函数组件'
}
class Greeting extends Component {
  render() {
    return <Button day={message}></Button>;
  }
}
```

- 高阶组件

```
//注值 localStorage.username = "老袁"
const wrapWithUsername = WrappedComponent => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        username: ""
      };
    }
    componentWillMount() {
      let username = localStorage.getItem("username");
      this.setState({
        username: username
      });
    }

    render() {
      return <WrappedComponent username={this.state.username} />;
    }
  }

  return NewComponent;
};
class Welcome extends Component {
  render() {
    return <div className="text-warning">welcome {this.props.username}</div>;
  }
}
//升级高阶组件
Welcome = wrapWithUsername(Welcome);

class Goodbye extends Component {
  render() {
    return <div className="text-info">goodbye {this.props.username}</div>;
  }
}
//升级高阶组件
Goodbye = wrapWithUsername(Goodbye);
class Greeting extends Component {
  render() {
    return (
      <>
        <Welcome /> <Goodbye />
      </>
    );
  }
}
```
- 组件插槽
提供了一个顶级的方法，使得我们有能力把一个子组件渲染到父组件 DOM 层级以外的 DOM 节点上。

```
//组件插槽
const portalElm = document.createElement('div');
portalElm.className="txtcenter"
document.body.appendChild(portalElm)

class App extends React.Component {
  state = {
    show: true,
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>动态展现Portal组件</button>
        {this.state.show ? (
          <div>{ReactDOM.createPortal(<span>Portal组件</span>, portalElm)}</div>
        ) : null}
      </div>
    )
  }
}
```





React可控与不可控控件
```
//不可控控件
<input defaultvalue={'aaa'}/>
通过refs或者findDOMNode去获取值
//可控空间
<input value={this.state.name}/>
直接取this.state获取
```
可控控件的好处
- 符合react的数据流
- 数据存储在state中便于取用
- 便于对数据进行处理

React不同表单元素的使用
label  HtmlFor

事件处理函数以及this
驼峰
this处理使用bind或箭头函数




## react性能调优

循环渲染的组件，你改变一个组件所有的组件都跟着重新渲染，
解决方法

- 1.可以通过`shouldComponentUpdate`去判断上一个与现在这个状态判断解决，

- 2.通过插件解决：`mixins：[React.addons.PureRenderMixin]`

当对象里边套对象，这俩个东西就都挂了。

终极解决方法：

在`constructor`做一些操作

```
constructor(props){
     super(props);
     this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
}
```

子组件更新触发父组件。父组件更新所有的子组件要Diff，一旦更改了state类型，上边全部办法歇菜，相当于直接生成一颗新的树🌲可以使用IMMUTABLE库

- IMMUTABLE库
![](immuable1.png)
通过fromjs方法包一下目标对象，后边用一个get和set方法去更改对象。
![](immuable.png)
从上图可以看出immuable库相当于生成俩个不一样的对象，不是在引用传递，相当于生成一个对象。
![](immuable使用.png)
使用



React 16.8的新特性

函数式组件与hooks

函数式组件其实就是对函数式编程的践行。











