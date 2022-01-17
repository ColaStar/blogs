# react

## 介绍与发展

- `react`是Feckbook开发的一款用来构建用户见面的js库，他只是做一个views，专门是用来用户界面的库,所以react本身只涉及UI层，React结合自己庞大的组件库，形成了MVVM框架。
- **Virtual DOM** 是一个模拟DOM树的Javascript对象。React使用 Virtual DOM来渲染UI，同时监听Virtual DOM上的数据变化并自动迁移这些变化到UI上

<!-- 什么是Virtual DOM，就是用js构建DOm，然后js做分析，转换为真正要插入页面的html。
react有一个叫state，只要state变，views就变， -->

- `state` 是状态，整个`React`都是通过状态来驱动的，只要状态变换，`React`就会驱动`View`变化，`View`变化就会启动`VirtualDOM`的`diff`算法，通过`diff`算法找到`DOM`元素最小的变化，从而实现最小的操作DOM元素。

- `props` 是react中的属性，通过属性可以做到父子组件的通信。
<!-- - 传入属性`props `构建`Virtual DOM`，状态`state`对应一个内容。 -->

- **JSX语法** 是React定义的一种Javascript语法扩展，类似与XML。JSX是可选的，我们完全可以使用Javascript来编写React应用，不过JSX提供了一套更为简单的方式；来写react的应用。

- `components`：React是专注于View层开发的，View是基于组件的，每一个JSX是一个组件。组件化开发可以创建可复用的UI组件，提高开发效率。 

<a data-fancybox title="" href="https://colastar.github.io/static/images/react发展史.png">![](https://colastar.github.io/static/images/react发展史.png)</a>

19年已经更新到了16.8的版本，就在8.10号更新到了16.9，表示学不动了。

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
<a data-fancybox title="" href="https://colastar.github.io/static/images/reactes5.png">![](https://colastar.github.io/static/images/reactes5.png)</a>

> ES6写法
<a data-fancybox title="" href="https://colastar.github.io/static/images/reactes6.png">![](https://colastar.github.io/static/images/reactes6.png)</a>

> react组件怎么用呢
<a data-fancybox title="" href="https://colastar.github.io/static/images/react组件怎么用.jpg">![](https://colastar.github.io/static/images/react组件怎么用.jpg)</a>

> Dom diff

DOM diff是DOM比较算法。用于找到最小变化的DOM元素进行渲染，平行化比较，把重绘和重排做到最小化。因为`react`中`View`层的变化是基于`state`的，如果状态发生变化，组件中`render`函数就会重新执行。

<a data-fancybox title="" href="https://colastar.github.io/static/images/reactdomdiff.png">![](https://colastar.github.io/static/images/reactdomdiff.png)</a>

<a data-fancybox title="" href="https://colastar.github.io/static/images/reactdomdiff例子1.png">![](https://colastar.github.io/static/images/reactdomdiff例子1.png)</a>

**Dom diff**是为渲染的性能，最小化的一个渲染机制.

**DOM diff算法流程**

- 1.开始判断节点是否相同，如果节点不相同，就相当于修改了节点，React会重新创建一个节点；
- 2.如果节点相同，判断是否是自定义节点;
- 3.如果不是自定义节点(ReactDOM.render也可以渲染html标签)，比较属性是否发生变化，如果属性变更新属性然后结束；
- 4.如果是自定义节点，或者说是我们自己写的组件，然后重新渲染，会渲染出一段VirtualDOM（虚拟DOM）,然后和以存在的Virtual DOM进行比较区别，最终渲染到页面。


> JSX注意事项

<a data-fancybox title="" href="https://colastar.github.io/static/images/JSX注意事项.png">![](https://colastar.github.io/static/images/JSX注意事项.png)</a>

## 非Dom属性介绍

<a data-fancybox title="" href="https://colastar.github.io/static/images/非Dom属性介绍.png">![](https://colastar.github.io/static/images/非Dom属性介绍.png)</a>

- 1.**dangerouslySetInnerHTML警告**

dangerouslySetInnerHTML用于净化数据，预防XSS的攻击

```
var rawHTML = {
    //通过__html来构造出来，
    __html : "<h2>非dom属性：dangerouslySetInnerHTML标签</h2>"
}
ReactDOM.render(
    //通过dangerouslySetInnerHTML属性来定义
    <div dangerouslySetInnerHTML = {rawHTML}></div>,
    document.getElementById("app")
)
```

- 2.`ref`

如果在JSX中获取真正的DOM元素，可以使用ref这个属性。

在html元素中添加ref属性
```
<input type="text" ref= 'input'/>
```
如果想要取得这个DOM元素可以通过ReactDOM.findDOMNode()来获取,并且需要在React生命周期的componentDidMount阶段

```
ReactDOM.findDOMNode(this.refs.input)   //获取到input元素
```
- 3.**key**提高渲染的性能

当在列表渲染的时候，如果不加k的情况下，会把所有的dom全部都干掉，然后在最后插如一个节点，如果加上了k，则会在下一次去更新节点的时候把li一一对应上，可以达到最小化的更新。

**例子：手动删除表格第一条数据**

如果使用 数组下标 index 作为 key值或者不加的情况下：
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-key1.png">![](https://colastar.github.io/static/images/react-key1.png)</a>

可以见到使用数组下标作为 index 的时候，React 会先更新表格内前9条数据，并且删除表格内最后一条数据，此时一共操作了 18 次 DOM

加key(使用 id 作为 key)的情况下

```
<tr key={item.id}>...<tr>
```

<a data-fancybox title="" href="https://colastar.github.io/static/images/react-key2.png">![](https://colastar.github.io/static/images/react-key2.png)</a>

可以看出，此时 React 仅仅更删除了第一行数据，操作了 1次 DOM 元素

`注意`：因为`react` 要求 `key` 值必须是稳定的（在当前列表项不变即可）,所以在书写key时一定要写一个稳定的key。




## 属性、状态的介绍与用法以及对比

### 属性（props）的介绍与用法

> **属性props介绍**

- `props`是一个事物的性质与关系往往是与生俱来的，无法改变的,
- 可以说组件是React的核心了，如果把组件比喻成一个管道，那么props就相当于输入。
- props可以定义在注册组件的地方，也可以在组件内部定义默认属性，无论在哪里定义，props都是只读的。
- props可以应用于JSX中html的元素上，自定义组件的元素上(相当于给子组件传值)，也可以应用于值。

> **属性的用法**



<a data-fancybox title="" href="https://colastar.github.io/static/images/reactprops用法.png">![](https://colastar.github.io/static/images/reactprops用法.png)</a>

<a data-fancybox title="" href="https://colastar.github.io/static/images/reactprops数组用法.png">![](https://colastar.github.io/static/images/reactprops数组用法.png)</a>

> **默认 Props**

通过组件类的 `defaultProps` 属性为 `props` 设置默认值，

ES5和ES6定义默认的props是不相同的

- ES5

```
var Hello = React.createClass({
    getDefaultProps : function(){   //设置默认属性
         return { title : '133'};
    }
    propTypes : { //属性校验器，表示必须是string
        title : React.PropTypes.string,
    }  
}) 
```

上面使用getDefauktProps定义属性，propTypes用于属性的类型检查。

- ES6

ES6同样有两种方法，由于ES6是使用class类来定义组件的，因此，这两种方法必须是静态。

```
方法一：

//属性
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

方法二：

export default class Hello extends React.Component{
    static defaultProps ={
        title : "Hello React",
    }
    static propTypes = {
        title : React.PropTypes.string,
    }
}

```

运行方法二的代码会发现报错。报错原因在`React.PropTypes.string`，这是因为在`React15.5`之前类型检查是集成在`React`里面的，`React15.5`之后被抽离了出来。所以需要下载p`rop-types`包来解决这个问题。
```
npm install prop-types –save
```
再修改一下代码。
```
import propTypes from "prop-types";
export default class Hello extends React.Component{
    static defaultProps ={
        title : "Hello React",
    }
    static propTypes = {
        title :propTypes.string,
    }
}
```

> 组件属性传值
- 通过组件属性进行传值,可以传入变量、number、string、数组、js表达式等
``` 
“text” | {123} | {“string”} | {[1,2,3]} | {variable} | js函数表达式
```
- 通过setProps传值

在组件render完之后，通过setProps()也可以把属性传进来.

- 通过扩展运算符传值
这种方式可以归纳到第一种，在父组件建立一个对象，通过扩展运算符传值。当然在子组件需要加key，防止组件整体重新渲染。

```
var props = {
    one : "123",
    two : 321,
}
ReactDOM.render(
    <List {...props} /> ,
    document.getElementById('app')
)
```
这种方式经常用于列表渲染。在子组件中获取
```
export default class List extends React.Component{
    render(){
        let list = this.props.map((value，key) => <li key = {key}> {value} </li>)
        return (
            <ul> {list }</ul>
        )
    }
}
```
### 状态(state）的介绍与用法
> **状态(state）介绍**
`React` 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同-状态，然后渲染 UI，让用户界面和数据保持一致。即在`React` 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

它有如下特点：

- 事物所处的状态;
- 状态是由事物自行处理的，不断变化的;
- 对于React来讲一切变化全部基于状态;
- 通过setState进行改变;


> setState

`React`如果想改变一个状态，那么必须通过`setStat`e切换撞他，每一次`setState`之后，`Reader`就会重新渲染执行一次`render`，就会触发`diff`算法进行计算，通过计算生出新的`Virtual Dom`和现在的`Virtual DOM`进行比较，发生变化之后执行一次更新

> 使用state
state在ES5和ES6上都是不同的。

- ES5

通过getInitialState方法来初始化状态。
```
var Hello = React.crateClass({
    getInitialState : function(){
        return {
            isloading : false,
        }
    }
})
```

- ES6

ES6中使用class来定义组件，规定state要注册到constructor中。

```
export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloading : false,
        }
    }
}
```
上面两种方式同样是通过`this.setState()`改变状态。

以ES6为例
```
export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloading : false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({
            isloading : !this.state.isloading,
        })
    }
    render(){
        return (
            <div
                onClick = {this.handleClick}
            >
                {this.state.isloading ? <h1> Hello</h1> : <h2> World </h2>} 
            </div>
        )
    }
}
```

> 使用 `setState` 的时候，需要注意:

使用 `setState` 是一件很复杂的事情。即使是熟练的 `React` 开发，也很有可能因为 `React` 的一些机制而产生一些`bug`，比如下面这个例子：
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-setstate.gif">![](https://colastar.github.io/static/images/react-setstate.gif)</a>

**注意：**
绝对不要 直接改变 `this.state` ，因为之后调用 `setState()` 可能会替换掉你做的改

变。把 `this.state` 当做是不可变的。

`setState() `不会立刻改变 this.state ，而是创建一个即将处理的 state 转变。在调用该方法之后访问 this.state 可能会返回现有的值。

对 `setState` 的调用没有任何同步性的保证，并且调用可能会为了性能收益批量执行。

`setState() `将总是触发一次重绘，除非在 shouldComponentUpdate() 中实现了条件渲染逻辑。如果可变对象被使用了，但又不能在 shouldComponentUpdate() 中实现这种逻辑，仅在新 state 和之前的 state 存在差异的时候调用 setState() 可以避免不必要的重新渲染。

总结出来，当使用 `setState` 的时候，有三个问题需要注意:

- 1.setState是同步的

很多开发以为 setState 是异步的。如果你修改一些 state ，然后直接查看它，你会看到之前的 state 。这是 setState 中最容易出错的地方。 setState 这个词看起来并不像是异步的，所以如果你不假思索的用它，可能会造成 bugs 。其实 `setState` 是同步执行的，但是不会立马更新，因为他在批量处理中会等待组件render才真正触发,不在批处理中的任务可能会立马更新。到底更新不更新要取决于setState是否在Async的渲染过程中，因为他会进入到异步调度过程。如果setState处于我们某个生命周期中，暂时不会BatchUpdate参与，因为组件要尽早的提前渲染。下面这个例子很好的展示了这个问题：


```
class Select extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selection: props.values[0]
    };
  }
  
  render() {
    return (
      <ul onKeyDown={this.onKeyDown} tabIndex={0}>
        {this.props.values.map(value =>
          <li
            className={value === this.state.selection ? 'selected' : ''}
            key={value}
            onClick={() => this.onSelect(value)}
          >
            {value}
          </li> 
        )}  
      </ul>
    )
  }
  
  onSelect(value) {
    this.setState({
      selection: value
    })
    this.fireOnSelect()
  }

  onKeyDown = (e) => {
    const {values} = this.props
    const idx = values.indexOf(this.state.selection)
    if (e.keyCode === 38 && idx > 0) { /* up */
      this.setState({
        selection: values[idx - 1]
      })
    } else if (e.keyCode === 40 && idx < values.length -1) { /* down */
      this.setState({
        selection: values[idx + 1]
      })  
    }
    this.fireOnSelect()
  }
   
  fireOnSelect() {
    if (typeof this.props.onSelect === "function")
      this.props.onSelect(this.state.selection) /* not what you expected..*/
  }
}

ReactDOM.render(
  <Select 
    values={["State.", "Should.", "Be.", "Synchronous."]} 
    onSelect={value => console.log(value)}
  />,
  document.getElementById("app")
)
```
第一眼看上去，这个代码似乎没有什么问题。两个事件处理中调用 onSelect 方法。但是，这个 Select 组件中有一个 bug 很好的展现了之前的 GIF 图。 onSelect 方法永远传递的是之前的 state.selection 值，因为当 fireOnSelect 调用的时候， setState 还没有完成它的工作。我认为 React 至少要把 setState 改名为 scheduleState 或者把回掉函数设为必须参数。

这个bug很容易修改，最难的地方在于你要知道有这个问题。

- 2.setState会造成不必要的渲染

`setState` 造成的第二个问题是：每次调用都会造成重新渲染。很多时候，这些重新渲染是不必要的。你可以用 `React performance tools` 中的 `printWasted` 来查看什么时候会发生不必要渲染。但是，大概的说，不必要的渲染有以下几个原因：

新的 `state` 其实和之前的是一样的。这个问题通常可以通过 `shouldComponentUpdate` 来解决。也可以用 `pure render` 或者其他的库赖解决这个问题。

通常发生改变的 `state` 是和渲染有关的，但是也有例外。比如，有些数据是根据某些状态来显示的。

第三，有些 `state` 和渲染一点关系都没有。有一些 `state` 可能是和事件、 timer ID 有关的。

- 3.setState并不能很有效的管理所有的组件状态

并不是所有的组件状态都应该用 `setState` 来进行保存和更新的。复杂的组件可能会有各种各样的状态需要管理。用 `setState` 来管理这些状态不但会造成很多不需要的重新渲染，也会造成相关的生命周期钩子一直被调用，从而造成很多奇怪的问题。

> 使用 setState 的时候的建议：

如果需要在 `setState` 后直接获取修改后的值，那么有几个方案：

- 1.传入对应的参数，不通过 this.state 获取
- 2.使用回调函数

`setState` 方法接收一个 function 作为回调函数。这个回掉函数会在 `setState` 完成以后直接调用，这样就可以获取最新的 state 。对于之前的例子，就可以这样：

```
this.setState({
  selection: value
}, this.fireOnSelect)
```

- 3.使用setTimeout

在 `setState` 使用 `setTimeout` 来让 `setState` 先完成以后再执行里面内容。这样子：
```
this.setState({
  selection: value
});
setTimeout(this.fireOnSelect, 0);
```
- 4.和渲染无关的状态尽量不要放在 `state` 中来管理

通常 `state` 中只来管理和渲染有关的状态 ，从而保证 `setState` 改变的状态都是和渲染有关的状态。这样子就可以避免不必要的重复渲染。其他和渲染无关的状态，可以直接以属性的形式保存在组件中，在需要的时候调用和改变，不会造成渲染。

避免不必要的修改，当 state 的值没有发生改变的时候，尽量不要使用 setState 。虽然 shouldComponentUpdate 和 PureComponent 可以避免不必要的重复渲染，但是还是增加了一层 shallowEqual 的调用，造成多余的浪费

> 属性状态对比？

**相同点**

- 都是纯js对象
- 都会触发render更新，属性是开始渲染一次性触发render，状态是每次状态改变都会触发render
- 都具有确定性，渲染前初始化完成。

**区别**

- props 是不可变的,如果需要改变就需要把state放到props上边，而 state 可以根据与用户交互来改变。
- 但是props只有一次触发render只传递一次 ，state一直在触发，即实时修改
- 组件在运行时需要修改的数据就是状态
- 状态是自己的，属性是组件之间的
**比较**
<a data-fancybox title="" href="https://colastar.github.io/static/images/react属性与状态对比.png">![](https://colastar.github.io/static/images/react属性与状态对比.png)</a>

## 生命周期

`React`的核心是基于组件的，`React`的组件也是有声明周期的，和大部分软件相同，它同样具有从开始创建到运行再到最终销毁的这段路程。

组件本质上是状态机，输入确定，输出确定。状态发生转换时会触发不同的钩子函数，从而让开发者有机会做出响应。可以用事件的思路来理解状态。

> React组件的生命周期分为三个阶段：挂载（初始化） -> 更新（运行中） -> 卸载。

每个阶段有与之相对应的钩子函数。

如下几张图是react生命周期的 变更图，学的好幸苦。。。

**React v16.3之前生命周期**
<a data-fancybox title="" href="https://colastar.github.io/static/images/react16.3之前生命周期.png">![](https://colastar.github.io/static/images/react16.3之前生命周期.png)</a>

**React v16.3生命周期**
<a data-fancybox title="" href="https://colastar.github.io/static/images/react16.3生命周期.png">![](https://colastar.github.io/static/images/react16.3生命周期.png)</a>

**React v16.4生命周期**
<a data-fancybox title="" href="https://colastar.github.io/static/images/react16.41生命周期.png">![](https://colastar.github.io/static/images/react16.41生命周期.png)</a>

### React v16.0前的生命周期

其实大部分团队不见得会跟进升到16版本，所以16前的生命周期还是很有必要掌握的，何况16也是基于之前的修改

<a data-fancybox title="" href="https://colastar.github.io/static/images/react16.3之前生命周期.png">![](https://colastar.github.io/static/images/react16.3之前生命周期.png)</a>

> 初始化阶段

<a data-fancybox title="" href="https://colastar.github.io/static/images/react初始化生命周期.png">![](https://colastar.github.io/static/images/react初始化生命周期.png)</a>

> 运行中阶段

在讲述此阶段前需要先明确下`react`组件更新机制。`setState`引起的`state`更新或父组件重新`render`引起的`props`更新，更新后的`state`和`props`相对之前无论是否有变化，都将引起子组件的重新`render`

造成组件更新有两类（三种）情况:

- 1.父组件重新render

父组件重新render引起子组件重新render的情况有两种:

a：直接使用,每当父组件重新`render`导致的重传`props`，子组件将直接跟着重新渲染，无论`props`是否有变化。可通过`shouldComponentUpdate`方法优化。

```
class Child extends Component {
   shouldComponentUpdate(nextProps){ // 应该使用这个方法，否则无论props是否有变化都将会导致组件跟着重新渲染
        if(nextProps.someThings === this.props.someThings){
          return false
        }
    }
    render() {
        return <div>{this.props.someThings}</div>
    }
}
```

b.在`componentWillReceiveProps`方法中，将`props`转换成自己的`state`
```
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someThings: props.someThings
        };
    }
    componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
        this.setState({someThings: nextProps.someThings});
    }
    render() {
        return <div>{this.state.someThings}</div>
    }
}
```
根据官网描述：在该函数(`componentWillReceiveProps`)中调用 `this.setState() `将不会引起第二次渲染。

是因为`componentWillReceiveProps`中判断`props`是否变化了，若变化了，`this.setState`将引起`state`变化，从而引起`render`，此时就没必要再做第二次因重传`props`引起的`render`了，不然重复做一样的渲染了。

- 2.组件本身调用setState，无论state有没有变化。可通过shouldComponentUpdate方法优化。

```
class Child extends Component {
   constructor(props) {
        super(props);
        this.state = {
          someThings:1
        }
   }
   shouldComponentUpdate(nextStates){ // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
        if(nextStates.someThings === this.state.someThings){
          return false
        }
    }

   handleClick = () => { // 虽然调用了setState ，但state并无变化
        const preSomeThings = this.state.someThings
         this.setState({
            someThings: preSomeThings
         })
   }

    render() {
        return <div onClick = {this.handleClick}>{this.state.someThings}</div>
    }
}

```

> 此阶段分为一下几个钩子

- `componentWillReceiveProps(nextProps)` 在组件接收到一个新的 `prop` (更新后)时被调用。这个方法在初始化`render`时不会被调用。

- `shouldComponentUpdate(nextProps, nextState)` 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用`forceUpdat`e时不被调用。此方法通过比较`nextProps`，`nextState`及当前组件的`this.props`，`this.state`，返回true时当前组件将继续执行更新过程，返回false则当前组件更新停止，以此可用来减少组件的不必要渲染，优化组件性能。默认`return true`

- `componentWillUpdate` 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

- `render` : 根据组件的props和state（无两者的重传递和重赋值，论值是否有变化，都可以引起组件重新render） ，return 一个React元素（描述组件，即UI），不负责组件实际渲染工作，之后由React自身根据此元素去渲染出页面DOM。render是纯函数（Pure function：函数的返回结果只依赖于它的参数；函数执行过程里面没有副作用），不能在里面执行this.setState，会有改变组件状态的副作用。

`componentDidUpdate(prevProps, prevState)` 在组件完成更新后立即调用,可以操作组件更新的DOM。在初始化时不会被调用。 `prevProps` 和`prevState`这两个参数指的是组件更新前的`props`和`state`

> 销毁阶段

`componentDidUnmount` 此方法在组件被卸载前调用，可以在这里执行一些清理工作，比如清楚组件中使用的定时器，清除`componentDidMount`中手动创建的`DOM`元素等，以避免引起内存泄漏。

### React v16.4 的生命周期

<a data-fancybox title="" href="https://colastar.github.io/static/images/react16.41生命周期.png">![](https://colastar.github.io/static/images/react16.41生命周期.png)</a>

> 变更缘由

原来（React v16.0前）的生命周期在React v16推出的`Fiber`之后就不合适了，因为如果要开启`async rendering`，在`render`函数之前的所有函数，都有可能被执行多次。

原来**React v16.0前**的生命周期有哪些是在`render`前执行的呢？

- componentWillMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate

如果开发者开了`async rendering`，而且又在以上这些`render`前执行的生命周期方法做AJAX请求的话，那AJAX将被无谓地多次调用。。。明显不是我们期望的结果。而且在`componentWillMount`里发起AJAX，不管多快得到结果也赶不上首次`render`，而且`componentWillMount`在服务器端渲染也会被调用到（当然，也许这是预期的结果），这样的IO操作放在`componentDidMount`里更合适。

禁止不能用比劝导开发者不要这样用的效果更好，所以除了`shouldComponentUpdate`，其他在`render`函数之前的所有函数`（componentWillMount，componentWillReceiveProps，componentWillUpdate）`都被`getDerivedStateFromProps`替代。

也就是用一个静态函数`getDerivedStateFromProps`来取代被deprecate的几个生命周期函数，就是强制开发者在`render`之前只做无副作用的操作，而且能做的操作局限在根据`props`和`state`决定新的`state`

React v16.0刚推出的时候，是增加了一个`componentDidCatch`生命周期函数，这只是一个增量式修改，完全不影响原有生命周期函数；但是，到了React v16.3，大改动来了，引入了两个新的生命周期函数。

> getDerivedStateFromProps

`getDerivedStateFromProps`本来（React v16.3中）是只在创建和更新（由父组件引发部分），也就是不是不由父组件引发，那么`getDerivedStateFromProps`也不会被调用，如自身`setState`引发或者`forceUpdate`引发。

<a data-fancybox title="" href="https://colastar.github.io/static/images/react16.3生命周期.png">![](https://colastar.github.io/static/images/react16.3生命周期.png)</a>

这样的话理解起来有点乱，在React v16.4中改正了这一点，让`getDerivedStateFromProps`无论是`Mounting`还是`Updating`，也无论是因为什么引起的`Updating`，全部都会被调用，具体可看React v16.4 的生命周期图。

`static getDerivedStateFromProps(props, state)` 在组件创建时和更新时的`render`方法之前调用，它应该返回一个对象来更新状态，或者返回`null`来不更新任何内容。


> getSnapshotBeforeUpdate

`getSnapshotBeforeUpdate() `被调用于`render`之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给`componentDidUpdate（）`

官网例子：
```
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //我们是否要添加新的 items 到列表?
    // 捕捉滚动位置，以便我们可以稍后调整滚动.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //如果我们有snapshot值, 我们已经添加了 新的items.
    // 调整滚动以至于这些新的items 不会将旧items推出视图。
    // (这边的snapshot是 getSnapshotBeforeUpdate方法的返回值)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```







> 单向数据流

任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。

如果你想象一个组件树作为属性的瀑布，每个组件的状态就像一个额外的水源，它连接在一个任意点，但也流下来。





## React可控与不可控控件

### 不可控控件

当一个表单元素设置了`defaultValue`属性的时候，那么这个组件就变成了不可控组件。

为什么这么说呢？

`defaultValue`属性设置的值大多数情况下是不允许更改的，由于`React`的所有的`View`是基于状态的改变而动态渲染的，而设置了`defaultValue`是不允许更改，所以就可以称组件为不可控组件。

```
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "hello React",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.setState({
            value : "hello world"
        })
        console.log(this.state.value);
    }
    render(){
        return (
            <input 
                onMouseEnter = {this.handleChange}
                defaultValue = {this.state.value}
            />
        )
    }
}
```
上面代码是：在`input`元素上设置`defaultValue`并监听`onMouseEnter`事件，当鼠标移入的时候，状态改变。可以从图上看出，状态改变但是`input`中的值并没有改变。

我们在书写代码的时候无法通过状态去控制组件，这就是**不可控组件**。

但是不可控组件并不是非不可控，通过`React.findDOMNode(this.refs.input).value`直接取到DOM元素就可以改变。修改一下上面代码。

```
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "hello React",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        
        this.setState({
            value : "hello world"
        })
        console.log(this.state.value);
        ReactDOM.findDOMNode(this.refs.input).value = this.state.value;
    }
    render(){
        return (
            <input 
                onMouseEnter = {this.handleChange}
                defaultValue = {this.state.value}
                ref = "input"
            />
        )
    }
}
```
这时你发现input被改掉了。
### 可控控件
当我们在表单元素上不使用defaultValue而使用value的使用，组件就变成了可控的了。

上面代码修改一下。
```
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "hello React",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        
        this.setState({
            value : "hello world"
        })
        console.log(this.state.value);
    }
    render(){
        return (
            <input 
                onMouseEnter = {this.handleChange}
                value = {this.state.value}
            />
        )
    }
}
```
状态改变，值也改变了，我们发现报了个错。 这个错是因为使用`vlaue`必须配合一个事件来使用，要么用`onChange`要么把值设置成readOnly。

把原来的代码onMouseEnter改成onChange：
```
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "hello React",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            value : e.target.value
        })
        
        console.log(this.state.value);
    }
    render(){
        return (
            <input 
                onChange = {this.handleChange}
                value = {this.state.value}
            />
        )
    }
}
```
这样就可以了，通过value值的改变动态的改变状态。

>可控控件的好处

- 符合react的数据流
- 数据存储在state中便于取用
- 便于对数据进行处理

## React事件处理与表单元素

React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:

- React 事件绑定属性的命名采用驼峰式写法，而不是小写。
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)
- 在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为， 你必须明确的使用 preventDefault

```
//html

<button onclick="activateLasers()">
  激活按钮
</button>

//react

 <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '激活按钮' : '注销按钮'}
 </button>
```
### 向事件处理程序传递参数

通常我们会为事件处理程序传递额外的参数。例如，若是 id 是你要删除那一行的 id，以下两种方式都可以向事件处理程序传递参数：
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
### React事件表

> 触摸事件

- onTouchCancel
- onTouchEnd
- onTouchMove
- onTouchStart

> 键盘事件

- onKeyDown
- onKeyPress
- onKeyUp

> 剪切事件
- onCopy
- onCut
- onPaste
> 焦点事件
- onFocus
- onBlur
> UI元素
- onScroll
> 滚动事件
- onWheel
> 鼠标事件
- onClick
- onC- ontextMenu
- onDoubleClick
- onMouseDown
- onMouseEnter
- onMouseLeave
- onMouseMove
- onMouseOut
- onMouseOver
- onMouseUp
> 拖拽事件
- onDrop
- onDrag
- onDragEnd
- onDragEnter
- onDragExit
- onDragLeave
- onDragOver
- onDragStar

### 表单元素

HTML 表单元素与 React 中的其他 DOM 元素有所不同,因为表单元素生来就保留一些内部状态。

在 HTML 当中，像 `<input>`, `<textarea>`, 和 `<select>` 这类表单元素会维持自身状态，并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 `setState()` 方法进行更新。

- 1.lable中的for使用HtmlFor
- 2.input、textarea，我们可以使用 onChange 事件来监听 input 的变化，通过修改 state来修改表单的value
- 3.在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。
- 4.当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么。

## render函数的多种返回值

在`React16`之前，类组件的`render`函数和函数组件的返回值是有限制的，只能返回`html`和自定义组件,并且如果返回多行`Dom`的话必须在外层加入一个根元素包裹起来。React16出现之后在`render`函数返回值上发生了很大的变化，让我们在写React代码过程中更顺滑。

> string
`React16`问世之后，`render`函数可以返回一串`String`，渲染的时候直接渲染到视图中。

```
render(){
    return "Hello React";
}
```
> null
React16之后如果组件不需要在视图上渲染的时候，可以直接返回一个null。
```
render(){
    return null;
}
```
> array

React16出现之后`render`函数支持返回值中返回一个数组，在渲染过程中会把数组中的东西，依次渲染出来。这可以作为多行元素输出而不是用外层包裹元素的一种解决方案，但是不怎么好。
```
render(){
    return [
        <li>1</li>,
        <li>2</li>,
        <li>3</li>,
        <li>4</li>
    ]
}
```
> fragments
我认为`render`支持返回值为`fragments`才是这次`React16`在返回值上的重头戏。

以前在写`多行DOM`元素输出的时候会在最外层加一层根元素，这样才不会报错。一个多行`DOM`添加一个根元素不算什么，那如果一个项目很大，这得多渲染多少个`div，`这要浪费多少渲染资源。可能React开发者也遇到了这个问题，所以才新增了这个返回值—`fragment`s。
```
    render(){
        return (
            //这两个标签在渲染的时候不会渲染成DOM元
            <>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </>
        )
    }
```


## 数据的不可变性

不可变性：当数据改变后是一新的对象和原本的对象没有关系，不就可以比较了。这种方式有两种实现方式。

> 方法一：Clone

克隆分为**浅克隆**和**深克隆**：

- 浅克隆：只是把对象的第一层属性克隆下来，如果内部有对象或者数组的话则不会再继续克隆。
- 深克隆：深度克隆一个对象，如果一个对象内部还有一个对象的话，则继续克隆。深度克隆除了值相同其他没有任何联系。

对于`PureComponent`我们需要使用深克隆。但是你有没有想过，当我只是改变对象的一个属性的时候，需要把所有的属性全部都克隆一遍，会浪费很多内存，并且深度克隆的时间更长。因为优化这一点，反而浪费更多的空间和时间，这是得不偿失的

> 方法二：IMMUTABLE库
那么，如果我在改变一个对象的时候，只是改变需要改变的值，把没有改变的值全部都共享下来，是不是就可以解决克隆所带来的问题？Immutable就是为这而生。

Immutable是一个基于函数式编程的库，Facebook致力于3年时间把这个库打造出来。

Immutable采用一种共享引用的方式，只会改变改变节点数据的那个分支的节点，其他分支节点空想引用。


<a data-fancybox title="" href="https://colastar.github.io/static/images/react-immutable.gif">![](https://colastar.github.io/static/images/react-immutable.gif)</a>

> 使用方式
安装Immutable包
```
npm install immutable –save
```
在项目中引入
```
import { List } from “immutable”;
```

<a data-fancybox title="" href="https://colastar.github.io/static/images/immuable.png">![](https://colastar.github.io/static/images/immuable.png)</a>

从上图可以看出immuable库相当于生成俩个不一样的对象，不是在引用传递，相当于生成一个对象，深拷贝过了。

<a data-fancybox title="使用" href="https://colastar.github.io/static/images/immuable使用.png">![使用](https://colastar.github.io/static/images/immuable使用.png)</a>

通过fromjs方法包一下目标对象，后边用一个get和set方法去更改对象。
详情可以查看[immuable官网](http://immutables.github.io/)



## 组件介绍

### 普通组件component
```
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  static defaultProps = {
    name: "普通Component组件"
  };
  render() {
    //return <h4 className="text-warning">Hello, {this.props.name}</h4>
    // return '我是一个字符串组件 🚀!';
    return [
      // 不要忘记 key :)
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }
}
```
React16新增了`render` 新的返回类型：`fragments` 和 `strings`、`null`、`Array`

### 纯组件PureComponent

`PureComponent`的自动为我们添加的`shouldComponentUpate`函数

```
import React, { PureComponent } from "react";
class CounterButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  render() {
    return (
      <button
        className="btn btn-info"
        onClick={() => this.setState(state => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
export default CounterButton;
```

### 纯函数组件

函数式组件其实就是对函数式编程的践行。

没有自身的状态，相同的`props`输入必然会获得完全相同的组件展示。不需要关心组件的一些生命周期函数和渲染的钩子更简洁。

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

### 高阶组件

高阶组件可以说也是高阶函数,就是一个没有副作用的纯函数,只是增强剂是一个组件，被增强的也组件，返回的也是组件。。

> 高阶组件的作用

- 当一个组件不具有某些功能的时候，可以通过HOC组件把相应的功能加持在当前组件上。相当于对组件的一种增强。

- 同时还可以抽离组件中公共的部分，通过高阶组件把所需要的东西附加上去。

> 高阶组件工厂模式

在构建高阶组件的时候，如果需要一起其他的配置或者参数等，可以封装成高阶组件的工厂模式。

```
const HOCFactor = (...params) => {
    //这里返回函数为什么要有函数名？
    //为了函数调试错误，函数执行有一个函数的执行堆栈，写上函数名而不是用匿名函数，是为了能够更好的定位错误。
    return  HOCFactorer = (WrapperComponent) => {
        return class HOC extends Component{
            render(){
                return <WrapperComponent {...this.props} />
            }
        }
    } 
}
```

> 高阶组件的两种使用方式

从上文知道，高阶组件其实就是一个函数接受一个组件作为参数，再返回一个新的组件出来。自从ES6盛行之后，调用方式也有两种：

- 一种是类的装饰其方式

**Decorator方式**

ES6中类的装饰器可以修改类的行为，并且在编译阶段就会修改。其实装饰其就是一个函数，只不过加上了修饰就变成了再编译时期执行的函数。
```
@Test
class A{}
//等同于
A = Test(A) || A
```
接下来就是Test这个函数了，Test函数会指定第一个参数为对哪一个类进行装饰，也可以说成是目标类。
```
function Test(target){
    target.name="Decorator";
    return target;
}
```

如果想在装饰的时候传入一些参数，可以采用这样的写法
```
@Test("Hello Class")
class A{}
function Test(...args){
    return function test(target){
        target.name = args;
    }
}
//等同于
A = Test(A) || A;
```

使用装饰器构建高阶函数。使用上面工厂模式中的高阶函数。
```
@HOCFactor({})
class WrappedComponent extends Component{
    render(){
        return <p>普通组件</p>
    }
}
```
就这么简单。

- 还有一种是函数的调用方式。
函数调用方式就很平常。平时写代码的时候调用函数的写法相同。
```
class WrappedComponent extends Component{
    render(){
        return <p>普通组件</p>
    }
};
WrappedComponent = HOCFactor({})(WrappedComponent);
```
- 多种高阶函数组合调用
当需要多种高阶函数组合调用的时候。两种高阶函数同样有两种办法。

**`Decorator` 装饰器方式**：如果对一个类定义多个装饰器，对于工厂模式来说是由外向内触发，而对于装饰器来说是由内向外触发。
```
import React,{Component} from "react";

const HOCFactor = (...params) => {
    console.log("工厂1")
    return  function HOCFactorer(WrapperComponent){
        console.log("Decorator1")
        return class HOC extends Component{
            render(){
                return (
                    <div>
                        高阶组件
                        <WrapperComponent {...this.props} />
                    </div>
                )
            }
        }
    } 
}

const HOCFactor1 = (...params) => {
    console.log("工厂2")
    return function (WrapperComponent){
        console.log("Decorator2")
        return class HOC extends Component {
            render(){
                return (
                    <div>
                        高阶组件1
                        <WrapperComponent {...this.props}/>
                    </div>
                )
            }
        }
    }
}

@HOCFactor({})
@HOCFactor1()
class WrappedComponent extends Component{
    render(){
        return <p>普通组件</p>
    }
}
```

**函数调用方式**

函数调用方式调用多个高阶函数，需要使用一个组合函数。

```
const compose = (...fns) => fns.reduce((f,g) => (...args) => f(g(...args)));
```

还是使用上面两个高阶函数和组件。
```
const composeComponent = compose(HOCFactor(),HOCFactor1())
WrappedComponent = composeComponent(WrappedComponent)
```

- 总结

高阶函数的奇妙可以解决我们很多问题，给组件添加功能，抽离公共能力等等，但是高阶组件的出现明显的增加了组件间的复杂程度，让组件嵌套的更深了。还是需要在业务中按需选择吧。

## 组件插槽

> 什么是插槽???
插槽就是事先定一个容器，当组件渲染的时候把子组件渲染到事先定义的容器里面。

`React`提供了一个顶级方法`ReactDom.createPortal()`，使我们有能力把一个子组件渲染到父组件 `DOM` 层级以外的 `DOM` 节点上。


> 使用插槽
首先要创建一个插槽容器，容器是单纯的html。

```
const portalElm = document.createElement("div");
document.body.appendChild(portalElm);
```

创建完插槽之后要定义一个插槽组件,插槽组件使用React顶级API `ReactDom.createPortal()`方法把所需要渲染的DOM元素中。

**注意：**这里的DOM元素是已存在的DOM元素，不可以是Vdom，不能是ref取到的元素。

> ReactDom.createPortal API

这个API接受两个参数：

- 第一个参数是所要插入的子组件。
- 第二个参数是插槽容器DOM元素。

> 定义插槽组件
```
const Tip = ({children,container}) => ReactDom.createPortal(children,container);
```

插槽组件保持纯度，组件接受一个`container`属性，并把所有的子组件渲染到指定`container`指定的DOM中去。

> 在组件中使用
```
class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [
                "react",
                "react-dom",
                "react-redux"
            ]
        }
    }
    render(){
        return(
            <>
                <Tip container={portalElm}>
                    {this.state.todos.map((todo,index)=> <li key={index}>{todo}</li> )}
                </Tip>
                //如果只有一个的话
                //<div>{ReactDOM.createPortal(<span>Portal组件</span>, portalElm)}</div>
            </>
        )
    }
}
```
> 应用场景
在开发过程中，有时候我们需要类似于模态，Tips中的信息，还有如果有错误信息，需要把错误在一个固定的位置显示，这样的场景下可以使用插槽。

## 按需加载和异步组件

> 按需加载

随着前端工程化的发展，我们更倾向于使用自动化构建工具构建项目，构建工具可以完全使用模块化的方式完成项目的构建，便于维护和开发。我们在使用自动化构建工具通常会把代码打包到一个文件中去`main.js`，这样的好处在与当请求网页只需要加载这一个文件就可以展示整个应用。但是，随着网页功能的不断扩展和项目的不断增大，这反而带来了网页加载速度慢、交互卡顿的问题。原因是整个应用都在一个文件里面导致文件很大，从而加载很慢。于是就必须把代码分割开来，按需加载。

> Webpack的按需加载

在使用Webpack构建项目的时候可以采用webpack的按需加载功能，Webpack采用动态`import`的方式按需加载模块。
```
import(/* webpackChunkName: 'module'*/"module").then(() => {
        //todo
}).catch(_ => console.log('It is an error'))
```

> React16之前的按需加载

React16之前也可以使用Webpack的方式进行按需加载，但当时最流行的一种方式是`React-loadable`库提供的按需加载React组件，它利用动态`import`的语法，使用Promise语法加载React组件。同时，`React-loadable`支持React的服务端渲染。

例如：一个按需加载组件
```
export default  function DemoComponent() {

return (
        <div>
            <p>demo component</p>

        </div>
    )
}
```

在加载的时候我们想让上面的代码不显示，同时把它单独打包到一个文件中，我们来看一个`React-loadable`官网的例子：
```
import Loadavle from "react-loadable";
import Loading from "./my-loading-component";
const LoadableComponent = Loadable({
    loader: () => import('./my-component'),
    loading: Loading
})
export default class extends React.Component{
    render(){
        return <LoadableComponent/>
    }
}
```

上面代码中react-loadable使用动态import()方法，并将导入的组件分配给loader属性。同时，react-loadable提供了一个loading属性，以设置在加载组件时将展示的组件。

> React16：Lazy组件

React16中Lazy组件使用动态import的方式加载组件，首先需要在`.babelrc`里面配置动态`import`的插件。

**注意**：只有lazy组件才能在suspense组件中支持。什么是Suspense组件继续往下读。

```
{
    "presets": ["@babel/preset-env","@babel/preset-react"],
    "plugins":[
        "@babel/plugin-syntax-dynamic-import"
    ]
}
```

> Lazy按需加载组件很简单

首先定义一个简单的组件
```
import React from "react";
export default ()=> <p className="text-success">Lazy Component</p>
```
使用lazy组件的方式引入。
```
import React, {lazy} from "react";
const LazyComp = lazy(() => import("./lazy.jsx"));
```
使用
```
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello World"
        }
    }
    render() {
        return (
           <Suspense fallback={"fdas"}>
                <LazyComp />
                
            </Suspense>
        )
    }
}
```
使用控制台检查一下 我们发现，多了一个`0.js`文件，这个文件就是那个按需加载的组件。代码拆分成功了，但是并没有到按需加载，反而是直接加载了。

> 变量控制加载
采用在状态中定义一个boolean类型的变量，使用这个变量来控制否加载。
```
export default class Suspenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isload: false
        }
    }
    render() {
        return (
            <Suspense fallback={"fdas"}>
                <button onClick={() => { this.setState({ isload: !this.state.isload }) }}>click</button>
                {this.state.isload ? <LazyComp /> : void 0}
            </Suspense>

        )
    }
}
```
这时候发现并没有加载`0.js`，点击以下click试试。 点击之后发现，组件加载出来了，同时js文件也加载出来了。

> 异步组件`Suspense`

在Lazy组件中使用到了这个Suspense组件，这个组件是什么？

Suspense组件React16提供的一种支持异步组件的方式。

Suspense组件调用异步数据必使用一个fetcher，这个是必须的，这个是必须的，这个是必须的。

创建一个fetcher
```
const createFetcher = promiseTask => {
    var cached = {};
    let ref = cached;
    return ()=> {
        const task = promiseTask();
        task.then(res=>{
            ref = res;
        });
        console.log("-----".ref);
        console.log("=====",cached);
        //当ref!=== cached 就表示加载完成了,
        //如果 ref === cached 也就是没有加载完,throw一个task,就相当于报错。内部使用轮训的方式
        if(ref === cached){
            throw task; 
        }
        //得到结果输出
        console.log("++++++",ref);
        return ref;
    }
}
```
首先模拟一异步数据
```
const fetchApi = ()=> {
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            resolve('Data resolved');
        },3000)
    })
    return promise;
}
```

创建一个Suspenseomp组件，用于获取显示异步信息。
```
const requestData = createFetcher(fetchApi);

const SuspenseComp = () => {
    const data = requestData();
    return <p className ="text-warngin"> {data} </p>
}
```

创建一个组件，并使用Suspense组件
```
export default () => (
    <Suspense fallback={ <div>替换的数据</div> }>
        <SuspenseComp />
        <LazyComp />
    </Suspense>
)
```

Suspense组件必须接受一个`fallback`作为一个属性。当数据还未请求过来使用`fallback`中的数据来作为dom渲染，请求完成后会数据替换掉`fallback`的内容。



> 需要注意的地方

`Suspense`组件中可以写多个异步组件，它相当于`Promise.all`方法，**必须等所有的组件数据都请求过来之后才会渲染**，也可以说成渲染时间为请求时间最长的那个异步组件的时间。

上面这种方式开发起来真的挺不舒服的，还需要写`fetcher`之类的东西，很麻烦，还有官方提供了一个小的`hook`，让开发变得非常简单。

> 官方的库–react-hooks-fetch

引入

```
import {useFetch } from "react-hooks-fetch";
```

这个库提供了一个`useFetch`方法用于网络请求，我以一个网上的请求接口为例：
```
const SuspenseComp = () => {
    const {error,data} = useFetch('http://jsonplaceholder.typicode.com/posts');
    console.log(data);
    //如果error存在，返回出错。
    if(error){
        return "出错了";
    }
    //如果data不存在返回null
    if(!data){
        return null;
    }
    //最后返回信息。
    return <p>{data}</p>
}
```
`useFetch`方返回值有两个属性，一个`error`，一个是`data`。`error`用来判断请求过程中是否出错，`data`是请求的数据。就这么简单就ok了。

使用和使用普通方式相同。
```
export default () => (
    <Suspense fallback={ <div>替换的数据</div> }>
        <SuspenseComp />
        <LazyComp />
    </Suspense>
)
```

## Memo组件

memo组件，为函数式组件锦上添花,Memo组件是一个高阶函数，它可以将函数组件转换成类似于PureCmponent组件。

我们都知道`PureComponent`是一个带有`shouldComponentUpdate`优化的组件，纯函数组件是无法写生命周期的，对于一些相应的优化无法左右，比如就是`shouldComponentUpdate`钩子函数优化，`Memo`可以提供这种方式，把纯函数组件改成带有优化的类似`Pureomponent`组件，让性能更好。

`Memo`必须显示的指定以什么样的规则执行`shouldComponentUpdate`，也就是说需要传入一个方法作为`shouldComponentUpdate`来执行。

实战-todoList
首先写一个函数组件,让其在渲染的时候打印一行文字。
```
import React, {memo, Component} from "react";
const Child = ({todo}) => {
    console.log("I am rendering");
    return <li>{todo}</li>
}
然后写一个todoList组件，用于渲染函数组件。

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                'hello1',
                'hello2',
                'hello3']
        }
    }
    clickHandle(){
        this.setState({todos:this.state.todos.concat(['hello4'])})
    }
    render(){
        return (
            <>
                <button onClick={()=>{this.clickHandle()}}>click</button>
                <ul>
                    {this.state.todos.map((todo,index) => (
                        <Child todo={todo} key={index}/>
                    ))}
                </ul>
            </>
        )
    }
}
```
> 没有memo组件的情况下

上面代码是没有memo组件的情况，使用按钮往todos中添加一个数据，观察渲染情况。 可以发现所有的函数组件全部都渲染了，这同样也是函数组件的一个痛处。

> 有mome组件的情况下

`memo`组件需要手动指定以什么样的规则执行`shouldComponentUpdat`。
```
const areEqual = (prevProps, nextProps) => {
    if(prevProps.todo === nextProps.todo){
        return true;
    } else {
        return false;
    }
}
```
改造组件
```
const MemoComp = memo(Child,areEqual);
```
使用新的组件渲染。
```
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                'hello1',
                'hello2',
                'hello3'
            ]
        }
    }
    clickHandle(){
        this.setState({todos:this.state.todos.concat(['hello4'])})
    }
    render(){
        return (
            <>
                <button onClick={()=>{this.clickHandle()}}>click</button>
                <ul>
                    {this.state.todos.map((todo,index) => (
                        <MemoComp todo={todo} key={index}/>
                    ))}
                </ul>
            </>
        )
    }
}
```
观察一下情况。 完美。

可以看出来这个组件的出现，可以说把函数式组件又推上了一个地位。

## ContextAPI
<span id="ContextAPI"></span>
`Context API` 主要解决`props`向对层嵌套的子组件传递的问题(爷孙组件props传递)，原理是定义一个全局对象，通过订阅发布的方式进行数据的传递。

> `React.crateContext`
Context Api使用`React.crateContext`方法构建，并且定义一个默认值。
```
const {Provider, Consumer} = React.createContext("default");
```
返回的对象中有两个组件。这两个组件组合成订阅发布模式

- Provider 提供者(发布者)
- Consumer 消费者(订阅者)

在爷孙组件传值的场景中，爷爷组件负责数据的提供，孙子组件负责数据的消费。

> Provider组件

`Provide`是提供者，在爷孙组件中，`provide`就相当于爷爷组件向孙子组件提供数据的组件。

所有需要传递的数据放在Provider中，所有的在子组件都可以接受的到。形成子孙节点传递的扁平化。

> 使用Provider
```
<Provider
          value={{ newContext: this.state.newContext, yideng: "普通字符串🍌" }}
        >
          {this.props.children}
        </Provider>
```

**注意**：value不是传值中的属性，而是必须要这样写。

> 使用Consumer
Consumer是消费者，也就是说，在爷孙组件中，爷爷组件提供资源，孙子组件来消费。

Consumer同样也是一个组件。接受到的是爷爷组件中Provider组件发送过来的值。
```
const Child = (props,context) => {
    return (
        <Consumer>
            {value => (
                <p className="text-warning">子节点=》newContext :{value.newContext}</p>
            )}
        </Consumer>
``` 
由于`Provider`组件中所传递的对象是`this.props.children`,所以必须这样写：
```
export default class Context extends React.Component {
    render(){
        return (
            <Parent>
                <Child/>
            </Parent>
        )
    }
}
```

总结

Context API提供了一套订阅发布者机制，这套机制出现，在爷孙组件传值上方便了很多。同时，我认为这个机制的出现，在一定程度上是可以尝试取代react-redux的Provider。

## 新Ref的使用

> 曾经的两种Ref的创建方式
```
render(){
    return (
        <>
            //第一种：第一种是指定指定一个string，通过this.refs.stringRef取到相应的dom元素
            <p ref="stringRef">span1</p>
            //第二种：第二种是使用箭头函数的方式把dom元素挂在到类的实例属性上，
            <p ref={ele=> (this.methodRef = ele)}>span2</p>
        </>
    )
}
```
> 新Ref的创建方式–React.createRef()
react16中的`ref`创建采用`React的createRef()`方法构建，创建一个`ref`，react内部采用每一个`ref`创建即创建一个`Symbol`，目的是为了所有的ref不重复。
```
import React, {Component} from "react";

class Greeting extends Component {
    constructor(props){
        super(props);
        this.objRef = React.createRef();
    }
    render(){
        return (
            <p ref={this.objRef}></p>
        )
    }
}
```

创建的this.objRef是一个对象，对象中只有一个属性`current`，`current`属性就是`ref`所值的Dom元素。

> React.forwardRef

`forwardRef`是一个**高阶组件**，**参数传递一个函数组件，并返回一个组件**，函数组件中有两个参数，props和ref，**ref就是父组件传递过来的ref，把返回的组件在父组件中使用。**

`forwardRef`可以让`ref`进行传递，向其他的组件传递。让`ref`更好的复用。传递方式为：由父组件创建`ref`，再把`ref传`递给子组件，方便父组件使用子组件的DOM元素和更好的管理`ref`。
```
import React, {forwardRef} from "react";

const TargetComponent = forwardRef((props,ref) => (
    <input type="text" ref={ref}/>
))

export default class Comp extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount(){
        this.ref.current.value = "父组件向子组件转发ref成功";
    }
    render(){
        return <TargetComponent ref={this.ref} />
    }
}
```

## 错误边界组件

React16出现一个错误边界组件，它可以捕捉到子组件树中任何位置捕获到错误，并记录这个错误，展示降级的UI而不是让整个组件树崩溃。错误边界组件的捕获错误是渲染期间，在整个生命周期方法以其整个树的构造函数中发生的错误。

React16中错误组件一共除了两个生命周期，两个生命周期都可以捕获错误，只是作用有些不同。

> 错误捕获生命周期的特点

先说一下错误组件生命周期的特点：

- 错误组件的生命周期只能在渲染中捕获，但在事件处理程序中不会捕获。
- 也就是说生命周期只在render渲染阶才会触发。

> 错误组件生命周期
错误组件的生命周期一共有两个：

- static getDerivedStateFromError()
- componentDidCatch

> 生命周期的执行时机
整个生命周期的执行时机分为两个时机：

- 1.渲染阶段
- 2.提交阶段

**渲染时机** 生命周期执行时机的渲染时机表示组件正在渲染。这个时机执行的生命周期有`componentWillMount`、`render`、`componentWillUpdate`。

**提交时机** 生命周期执行时机的提交时机是表示组件已经渲染完成，正要把Dom元素提交到html文档中去。这个时机执行的生命周期有`componetDidMount`、`getSnapshotBeforeUpdate`、`componentDidUpdate`

> static getDerivedStateFromError()
这个生命周期是类组件的一个静态方法，这个生命周期会在后代组件抛出错误后被调用。

这个钩子函数把抛出的错误作为参数，并且返回一个对象用来更新state。

这个钩子函数在渲染时机调用，因此不允许出现副作用，是一个比较纯的函数。
```
//ES5
static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
//ES6
constructor(props) {
  super(props);
  this.state = { hasError: false };
}
```
> componentDidCatch
componentDidCatch方法有两个参数。

- 第一个参数为err对象，表示错误信息。
- 第二个错误为info，为一个对象，对象中有一个属性componentStack，表示组件栈追踪，可以很快的找到出现错误的组件。

componentDidCatch() 会在“提交”阶段被调用，因此允许执行副作用。

> 注意点

这两个生命周期有优先级问题，即`getDerivedStateFromError`会比`componentDidCatch`先调用，如果`getDerivedStateFromError`中有返回值，则`componentDidCatch`不会调用。

`getDerivedStateFromError`不可以有副作用并且返回一个对象用于改变`state`，适用于作UI降级。

> componentDidCatch中可以有副作用可以用于发送错误上报到错误服务器。

> 特别注意：这两个钩子函数不要在一起使用使用。

> 错误组件

捕获错误生命周期不建议直接在组件中使用，建议创建一个错误组件，可以把错误组件当作根组件用于捕获全局错误。

定义错误捕获组件
```
class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError: false};
        this.err;
        this.info;
    }
    //捕获报错和报错上报程序库一起使用。
    componentDidCatch(err,info){
        this.err = err;
        this.info = info;
        this.setState({hasError: true});
    }
    render(){
         if(this.state.hasError){
            return (
                <>
                    <div >
                        <p>{this.err.message}</p>
                        <p>{this.info && this.info.componentStack}</p>
                    </div>
                    {this.props.children}
                </> 
            )
        }
        return this.props.children;
    }
}
```
定义子组件
```
class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:["hello"]
        };
    }
    chlickHandle(){
        this.setState({
            todos: undefined,
        })
    }
    render() {
        return (
            <>
                <button onClick={()=>this.chlickHandle()}>click</button>
                <span>用户名：{this.state.todos[0]}</span>
            </>
        )
    }
}
```
使用
```
export default class Greeting extends Component {
    render(){
        return (
            <ErrorBoundary>
                <Profile />
            </ErrorBoundary>
        )
    }
}
```

> 与插槽组件配合

React16同样也除了一个插槽组件，作用是把组件中的数据渲染到特定的Dom元素中。错误组件和插槽组件配合来使用就可以把错误信息渲染到指定的地方显示出来，用来提示用户，从而提高用体验。very beautiful

## react性能调优

### 单个react组件性能优化

## Hooks一览，拥抱函数式编程

React16.8中加入了Hooks，让React函数式组件再一次升华，那么到底什么是Hooks？

官网是这么说的：Hook是React 16.8中的新增功能。它们允许您在不编写类的情况下使用状态和其他React功能。

### 动机

- 1.在组件之间重用有状态逻辑很困难

React 没有提供可复用性行为“附加”到组件的途径，在写类组件的时候，一个类是一个闭包并且`state`在组件间传递并不怎么友好，虽然可以使用`props`和**高阶组件**来解决，但是这样会组件的结构更麻烦。如果你在 `React DevTools` 中观察过 `React` 应用，你会发现由 **providers，consumers，高阶组件，render props** 等其他抽象层组成的组件会形成“嵌套地狱”。

<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks1.png">![](https://colastar.github.io/static/images/react-hooks1.png)</a>

使用Hooks，您可以从组件中提取有状态逻辑，以便可以独立测试并重复使用。钩子允许您在不更改组件层次结构的情况下重用有状态逻辑。这样可以轻松地在许多组件之间或与页面之间共享Hook。

- 2.复杂的组件变得难以理解

<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks2.png">![](https://colastar.github.io/static/images/react-hooks2.png)</a>
每个生命周期方法通常包含不相关逻辑的混合。比如说我就想实现一个非常简单的功能，必须要带一堆钩子函数，让一个简单的组件变得很复杂。而且由于不同的生命周期在不同的阶段调用，导致我们会在相应的地方作一些处理，有可能把一些完全不相干的代码因为执行周期相同必须放在同一个生命周期中,这就很容易引发bug;再比如，组件可能会在`componentDidMount`和中执行一些数据提取`componentDidUpdate`。但是，相同的`componentDidMount`方法可能还包含一些不相关的逻辑，用于设置事件侦听器，并执行清理`componentWillUnmount`。一起更改的相互关联的代码被拆分，但完全不相关的代码最终组合在一个方法中。bug又来了。

为了解决这个问题，Hooks允许您根据相关的部分（例如设置订阅或获取数据）将一个组件拆分为较小的函数，而不是基于生命周期方法强制拆分。您还可以选择使用reducer管理组件的本地状态，以使其更具可预测性。

- 3. 难以理解的class

文档上说这点主要是学习class是一个难点。因为我自己写es6 class有一段时间了，所以class对我自己来说还是可以的，并且this理解的还可以。

为了解决这些问题，Hooks允许您在没有类的情况下使用更多React的功能。从概念上讲，React组件始终更接近功能。Hooks拥抱功能，但不会牺牲React的实际精神,简单点说可以这么理解，Hooks 的出现本质是把这种面向生命周期编程变成了面向业务逻辑编程。

<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks3.png">![](https://colastar.github.io/static/images/react-hooks3.png)</a>

### 什么是Hooks？

那么什么是Hook，Hook顾名思义就是钩子的意思。在函数组件中把React的状态和生命周期等这些特性**钩入进入**，这就是React的Hook。

- Hooks 本质是把面向生命周期编程变成了面向业务逻辑编程；

- Hooks 使用上是一个逻辑状态盒子，输入输出表示的是一种联系

- 特指表明React的Hook作用是把类组件的一些特性钩入函数组件中，因在类组件中是不可以使Hook的。

### Hooks的使用规则

Hook就是javascript函数，但是使用有两个规则：

- 1.只能在函数的最外层调用hook。不要在循环、条件判断或者子函数中调用。(这个关系到了hooks的执行机制，会在下面hook中说到)
- 2.只能在React的函数组件中调用Hook。不要在其他javascript函数中调用(自定义hooks中也可以调用)

### 使用Hooks的好处

- 使用hooks，如果业务变更，就不需要把函数组件修改成类组件。
- 告别了繁杂的this和合并了难以记忆的生命周期。
- 支持包装自己的Hooks(自定义Hooks)，是基于纯命令式的api，只关注输入与输出。
- 更好的完成状态之间的共享，解决原来class组件内部封装的问题，也解决了高阶组件和函数组件的嵌套过深。一个组件一个自己的state，一个组件内可以公用。

### 内置的Hook

React一共内置了9种Hook。

- [useState](#useState)
- [usEffect](#usEffect)
- [useContext](#useContext)
- [useReducer](#useReducer)
- [useCallback](#useCallback)
- [useMemo](#useMemo)
- [useRef](#useRef)
- [useImperativeHandle](#useImperativeHandle)
- [useLayoutEffect](#useLayoutEffect)
- [Hook的执行机制](#Hook的执行机制)



#### useState

<span id="useState"></span>

以前的函数式组件被成为纯函数组件或者无状态组件，是只能接受父组件传来的props并且只能做展示功能，不能使用state也没有生命周期。

现在State Hook 可以让函数式组件使用状态。

`useState`是React的一个Hook，它是一个方法，可以传入值作为state的默认值，返回一个数组，数组的第一项是对应的状态(默认值会赋予状态)，数组的第二项是更新状态的函数。

```
import React, { useState } from "react";

const Greeting = () => {
    const states = useState(0);
    const count = states[0];
    const setCount = states[1];
    return (
       <>
            <h1> {count} </h1>
            <button onClick={() => {setCount(count + 1)}}> + </button>
       </>
    )
}
export default Greeting;
```

每次取数组的第几项太麻烦，所以官方建议使用ES6数组的解构赋值的方式。

```
const [count, setCount] = useState(1);
```

看起来是不是简便多了。更新代码

```
import React, { useState } from "react";
const Greeting = () => {
    const [count, setCount] = useState(0);
    return (
       <>
            <h1> {count} </h1>
            <button onClick={() => {setCount(count + 1)}}> + </button>
       </>
    )
}
export default Greeting;
```

<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-usestate.gif">![](https://colastar.github.io/static/images/react-hooks-usestate.gif)</a>

我们发现，一般函数调用完成之后，其中的变量都会被回收，而上面代码和图上可以看出每次都是在count的基上相加，并没有消失，为什么呢？ 先埋下疑问点，在Hook的执行机制会提到。

##### 使用多次useState

在一个组件中我们不可能只有一个state，useState允许在一个组件中使多次，并且每次使用都是一个全新的状态。

```
import React, { useState } from "react";
const Greeting = () => {
    const [count, setCount] = useState(0);      //第一次使用
    const [istrue, setIstrue] = useState(true); //第二次使用
    return (
       <>
            {istrue ? <h1> {count} </h1> : void 0}
            <button onClick={ () => {setIstrue(!istrue)}}>change</button>
            <button onClick={() => {setCount(count + 1)}}> + </button>
       </>
    )
}
export default Greeting;
```

<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-usestate1.gif">![](https://colastar.github.io/static/images/react-hooks-usestate1.gif)</a>

上面代码使用两次useState，完美的完成了功能。

那么现在又有疑问了，React是怎么区别多次调用的hooks的呢？先埋下疑问点，在Hook的执行机制的时候会谈到(所有的Hook都是这)。

#### useEffect

<span id="useEffect"></span>

既然React Hooks给了函数式组件（或者说是纯函数组件）那么强大的功能(抛弃类组件)，那么组件中总是要会执行副作用操作，纯函数组件保持了函数渲染的纯度，那么要怎么执行副作用呢？

React Hooks 提供了 Effect Hook，可以在函数组件中执行副作用操作，并且是在函数渲染DOM完成后执行副作用操作。

```
import React, {useEffect} from "react";
```

`useEffect`这个方法传入一个函数作为参数，在函数里面执行副作用代码，并且**useEffec的第一个参数还支持返回值为一个函数，这个函数执行相当于组件更新和卸载**。

```
import React, {useState, useEffect} from "react";

const EffectComponent = () => {
    useEffect(() => {
        console.log("useEffect Hook");
    })
    return null;
}
export default EffectComponent
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-effect.png">![](https://colastar.github.io/static/images/react-hooks-effect.png)</a>
##### 与类组件生命周期的比较

我们都知道在类组件中可以在`componentDidMount`和`componentDidUpdate`中执行副作用，那么在函数组件中`useEffect`的参数函数就具有类组件的这两个生命周期的用途，如果`useEffect`的第一个参数有返回值为函数的话，函数的返回值相当于`componentWillUnmount`。可以说useEffect把这三个API合成了一个。

**最常见的做法就是就是在函数参数中写事件注册，在函数的返回函数中写事件销毁。**
```
import React, {useState, useEffect} from "react";

const EffectComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const resizeHandle = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeHandle);
        return () => {
            window.removeEventListener("resize", resizeHandle)
        }
    })
    return (
        <h1>{width}</h1>
    );
}
export default EffectComponent
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-effect1.png">![](https://colastar.github.io/static/images/react-hooks-effect1.png)</a>

##### useEffect的执行时机

从上面我们知道了useEffect可以说是类组件中三种生命周期的结合，但是它的执行时机是什么样的呢？从一个小Demo来说
```
import React, {useState, useEffect} from "react";
const EffectComponent = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log("定义事件接口")
        return () => {
            console.log("注销事件接口")
        }
    })
    return (
        <>  
            {console.log("渲染")}
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}> + </button>
        </>
    );
}
export default EffectComponent
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-effect2.png">![](https://colastar.github.io/static/images/react-hooks-effect2.png)</a>

在开始的时候有提到，useEffec执行副作时机在渲染后，确实是这样。细心的你会发现，当我点击+号的时候，怎么会出现注销事件接口？ useEffec函数中的返回函数不是在组件卸载的时候被调用吗？

我个人的理解是`useEffect`函数参数中返回函数所代表的销毁是上一次`useEffect`自己的销毁，**因为每次重新执行函数组件都会重新生成新的Effect**。假如没有销毁，由于useEffect的函数参数会在首次渲染和更新的时候调用，这就有了一致命的缺点：如果我是定义的事件，每次更新都会执行，那么岂不是在事件还没有移除掉又定义了一次，所以`useEffect`加入了这个功能。


我们来验证一下上述论述是否正确。
```
import React, {useState, useEffect} from "react";

const EffectComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(1);
    const resizeHandle = () => {
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeHandle);
        return () => {
            // window.removeEventListener("resize", resizeHandle)
        }
    })
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </>
    );
}
export default EffectComponent
```

上面代码我把`useEffect` 中`return`的事件移除注释掉，同时在事件处理函数中打印一下窗口宽度。 可以看出当我第一次触发窗口事件的时候，直接打印了三次。

##### useEffect的第二个参数

**当`useEffect`的第二个参数不写的话(上面都没写),任何更新都会触发`useEffect`。**那么下面说一下`useEffect`的第二个参数。

`useEffect`的第二个参数是一个数组，表示哪些`state`和`props`来执行副作用。

数组为空的时候，`useEffect`就相当于`componentDidMount`和`componentWillUnmount`这两个生命周期，只在首次渲染和卸载的时候执行。 

当数组中值是状态的时候，就会只监听这一个状态的变化。当然数组中可以多个值，监听存放`state`的变化。

```
const EffectComponent = () => {
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(2);
    useEffect(() => {
        console.log("count状态更新");
        return () => {
            console.log("useEffect卸载")
        }
    },[count])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <h1>{num}</h1>
            <button onClick={() => {setNum(num + 1)}}>+</button>
        </>
    );
}
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-effect4.png">![](https://colastar.github.io/static/images/react-hooks-effect4.png)</a>

##### 写多个useEffect
当我们在写类组件的时候，通常会把定义事件写在`componentDidMount`中，如果只是一个事件处理，项目不大还好，那如果项目很大，所有的事件处理都定义在一个生命周期中，难道就不乱吗？乱是肯定的，而且还容易出bug。

React Hook 允许函数式组件中定义多个`useEffect`(和`useState`类似)，多个`useEffect`互相不受干扰。
```
const EffectComponent = () => {
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(2);
    useEffect(() => {
        console.log("count状态更新");
        return () => {
            console.log("count卸载")
        }
    },[count])
    useEffect(() => {
        console.log("num状态更新");
        return () => {
            console.log("num卸载")
        }
    },[num])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <h1>{num}</h1>
            <button onClick={() => {setNum(num + 1)}}>+</button>
        </>
    );
}
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-effect3.png">![](https://colastar.github.io/static/images/react-hooks-effect3.png)</a>

useEffect在函数组件中的作用非常大，好好利用必成神器。

#### useContext

<span id="useContext"></span>

React16中更新了Context API，Context主要用于爷孙组件的传值问题，新的Context API使用订阅发布者模式方式实现在爷孙组件中传值。 上文中我写了一篇简单的使用方法[Context API](#ContextAPI)，不了解的可以参考一下。

React Hooks出现之后也对Context API出了响应的Hook `useContext`。**同样也是解传值的问题**。

`useContext` Hook接受一个`context`对象(由`createContext`创建的对象)作为参数，并返回`Context.Consumer`。例如：
```
const stateContext = createContext('default');
```

- 正确： `useContext(stateContext)`
- 错误： `useContext(stateContext.Consumer)`
- 错误： `useContext(stateContext.Provider)`

##### 使用方式

比如说有一个简单的ContextComponent组件
```
const ContextComponent = () => {
    return (
        <>
            <h1>{value}</h1>
        </>
    );
}
```
通过**Context API**给这个组件发信息。
```
export default () => (
    <stateContext.Provider
        value={"Hello React"}
    >
        <ContextComponent/>
    </stateContext.Provider>
)
```

使用`useContext()`
```
const value = useContext(stateContext);
```
使用`useContext`，必须在函数式组件中，否则会报错。



可以看出，使用`useContext`仍然需要在上层组件中使用来为下层组件提供context。

#### useReducer

<span id="useReducer"></span>

看到`useReducer`,肯定会想到`Redux`，没错它和`Redux`的工作方式是一样的。**`useReducer`的出现是`useState`的替代方案**，能够让我们更好的管理状态。

`useReducer`一共可以接受三个参数并返回当前的`state`与其配套的`dispatch`。

##### 第一个参数
`useReducer`的第一个参数就是形如`(state,action) => newState`这样的`reducer`，没错就是`reducer`，和`redux`完全相同。我们来定义一个简单的reducer。

```
const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                action.todo
            ];
        default:
            return state;

    }
}
```

上面是一个简单的`reducer`，细心的你会发现，`state`参数难道不需要指定一下默认值吗？不需要，React不需要使用指定`state = initialState`，有时候初始值需要依赖于`props`，所以初始值在`useReducer`上指定，也许已经猜到第二个参数是什么了？

##### 第二个参数

`useReducer`的第二个参数和Redux的createStore也相同，指定状态的默认值。例如：

```
useReducer(reducer,[{
    id: Date.now(),
    value: "Hello react"
}])
```

##### 第三个参数

`useReducer`的第三个参数接受一个函数作为参数，并把第二个参数当作函数的参数执行。主要作用是初始值的惰性求值，把一些对状态的逻辑抽离出来，有利于重置`state`。

定义一个init函数
```
function init(initialCount) {
    return [
        ...initialCount,
    ];
}
```
##### useReducer使用

```
useReducer(reducer,[
        {
            id: Date.now(),
            value: "Hello react"
        }
    ],init)
```

##### useReducer的返回值

`useReducer`的返回值为一个数组，数组的第一项为当前`state`，第二项为与当前`state`对应的`dispatch`，可以使用ES6的解构赋值拿到这两个
```
const [state,dispatch] = useReducer(reducer,[
    {
        id: Date.now(),
        value: "Hello react"
    }
],init)
```

##### 浅比较渲染

如果 `Reducer Hook` 的返回值与当前 `state` 相同，`React` 将跳过子组件的渲染及副作用的执行。

这种方式 `react` 使用`Objec.is`比较算法来比较`state`，因此这是一个浅比较，来测验一下。

我们先在`reducer`中添加一个改变的Todo值的case。
```
case "CHANGE_TODO":
return state[action.id] = 'change' && state;
```
修改一下`return`,给下层组件传一个change属性
```
const change = (id) => {
    dispatch({
        type: "CHANGE_TODO",
        id,
    })
}
return (
    <>
        <button onClick={() => {dispatch({type: "ADD_TODO",todo:{id:Date.now(),value:"Hello Hook"}})}}> Add </button>
        {state.map((todo,index) => (
           <Todo key={index} todo={todo.value} change={()=>{change(todo.id)}}/>
        ))}
    </>
)
```
给Todo组件添加一点击事件,当点击触发上层组件传来的方法,使组件值修改.
```
let Todo = ({todo,change}) => {
    return (
        console.log("render"),
        <li onClick={change}>{todo}</li>
    );
}
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-usereducer.png">![](https://colastar.github.io/static/images/react-hooks-usereducer.png)</a>
从图片上可以看出,无论我怎么点击li都不会发生改变。

那么我们来改变一下reducer，让它返回一个全新的数组。
```
case "CHANGE_TODO":
    return state.map((todo,index) =>{
        if(todo.id === action.id){
            todo.value="change";
        }
        return todo;
    } )
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-usereducer1.png">![](https://colastar.github.io/static/images/react-hooks-usereducer1.png)</a>
当返回一个新的数组的时候，点击li都发生了改变，默认有了`shouldComponentUpdate`的功能。

#### useCallback

<span id="useCallback"></span>

`useCallback`可以认为是对依赖项的监听，把接受一个回调函数和依赖项数组，返回一个该回调函数的memoized(记忆)版本，该回调函数仅在某个依赖项改变时才会更新。

一个简单的小例子
```
const CallbackComponent = () => {
    let [count, setCount] = useState(1);
    let [num, setNum] = useState(1);
    
    const memoized = useCallback( () => {
        return num;
    },[count])
    console.log("记忆：",memoized());
    console.log("原始：",num);
    return (
        <>
            <button onClick={() => {setCount(count + 1)}}> count+ </button>
            <button onClick={() => {setNum(num + 1)}}> num+ </button>
        </>
    )
}
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-useCallback.png">![](https://colastar.github.io/static/images/react-hooks-useCallback.png)</a>
如果没有传入依赖项数组，那么记忆函数在每次渲染的时候都会更新。
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-useCallback1.png">![](https://colastar.github.io/static/images/react-hooks-useCallback1.png)</a>

#### useMemo

<span id="useMemo"></span>

`useMemo`和`useCallback`很像，唯一不同的就是
```
useCallback(fn, deps) 相当于 useMemo(() => fn, deps
```

这里就不过多介绍了。

#### useRef

<span id="useRef"></span>

React16出现了可用`Object.createRef`创建ref的方法，因此也出了这样一个Hook。

使用语法：
```
const refContainer = useRef(initialValue);
```
`useRef`返回一个可变的ref对象，`useRef`接受一个参数绑定在返回的ref对象的`current`属性上，返回的ref对象在整个生命周期中保持不变。

例子：
```
const RefComponent = () => {
    let inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })
    return (
        <input type="text" ref={inputRef}/>
    ) 
}
```

上面例子在input上绑定一个ref，使得input在渲染后自动焦点聚焦。 

<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-useRef.png">![](https://colastar.github.io/static/images/react-hooks-useRef.png)</a>

#### useImperativeHandle

<span id="useImperativeHandle"></span>

> `useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值。

就是说：当我们使用父组件把`ref`传递给子组件的时候，这个Hook允许在子组件中把自定义实例附加到父组件传过来的`ref`上，有利于父组件控制子组件。

使用方式
```
useImperativeHandle(ref, createHandle, [deps])
```
一个例子：
```
function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.value="Hello";
        }
    }));
    return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);

export default () => {
    let ref = useRef(null);
    useEffect(() => {
        console.log(ref);
        ref.current.focus();
    })
    return (
        <>
            <FancyInput ref={ref}/>
        </>
    )
}
```
上面是一个父子组件中ref传递的例子，使用到了forwardRef(这是一个高阶函数，主要用于ref在父子组件中的传递)，使用useImperativeHandle把第二个参数的返回值绑定到父组件传来的ref上。
<a data-fancybox title="" href="https://colastar.github.io/static/images/react-hooks-useImperativeHandle.png">![](https://colastar.github.io/static/images/react-hooks-useImperativeHandle.png)</a>

#### useLayoutEffect

<span id="useLayoutEffect"></span>

这个钩子函数和`useEffect`相同，都是用来执行副作用。但是它会在所有的DOM变更之后同步调用effect。`useLayoutEffect`和`useEffect`最大的区别就是一个是同步一个是异步。

从这个Hook的名字上也可以看出，它主要用来读取DOM布局并触发同步渲染，在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。

官网建议还是尽可能的是使用标准的useEffec以避免阻塞视觉更新。

#### Hook的执行机制

<span id="Hook的执行机制"></span>

上面一共埋了2个疑问点。

> **第一个：函数调用完之后会把函数中的变量清除，但ReactHook是怎么复用状态呢？**

`React` 保持对当先渲染中的组件的追踪，每个组件内部都有一个
**「记忆单元格」**列表。它们只不过是我们用来存储一些数据的 JavaScript 对象。当你用 `useState()` 调用一个Hook的时候，它会读取当前的单元格（或在首次渲染时将其初始化），然后把指针移动到下一个。这就是多个 `useState()` 调用会得到各自独立的本地 `state` 的原因。

之所以不叫`createState`，而是叫`useState`，因为 `state` 只在组件首次渲染的时候被创建。在下一次重新渲染时，`useState` 返回给我们当前的 `state`。

```
    const [count, setCount] = useState(1);
    setCount(2);
    //第一次渲染
        //创建state，
        //设置count的值为2
    //第二次渲染
        //useState(1)中的参数忽略，并把count赋予2
```

> `**React是怎么区分多次调用的hooks的呢，怎么知道这个hook就是这个作用呢？**`
React 靠的是 `Hook` **调用的顺序**。在一个函数组件中每次调用Hooks的顺序是相同。借助官网的一个例子：

```
// ------------
// 首次渲染
// ------------
useState('Mary')           // 1. 使用 'Mary' 初始化变量名为 name 的 state
useEffect(persistForm)     // 2. 添加 effect 以保存 form 操作
useState('Poppins')        // 3. 使用 'Poppins' 初始化变量名为 surname 的 state
useEffect(updateTitle)     // 4. 添加 effect 以更新标题

// -------------
// 二次渲染
// -------------
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
useEffect(persistForm)     // 2. 替换保存 form 的 effect
useState('Poppins')        // 3. 读取变量名为 surname 的 state（参数被忽略）
useEffect(updateTitle)     // 4. 替换更新标题的 effect

// ...
```

在上面hook规则的时候提到**Hook一定要写在函数组件的对外层，不要写在判断、循环中，正是因为要保证Hook的调用顺序相同**。

如果有一个Hook写在了判断语句中
```
if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
}
```
借助上面例子，如果说name是一个表单需要提交的值，在第一次渲染中，name不存在为true，所以第一次Hook的执行顺序为
```
useState('Mary')           // 1. 使用 'Mary' 初始化变量名为 name 的 state
useEffect(persistForm)     // 2. 添加 effect 以保存 form 操作
useState('Poppins')        // 3. 使用 'Poppins' 初始化变量名为 surname 的 state
useEffect(updateTitle)     // 4. 添加 effect 以更新标题
```
在第二次渲染中，如果有表单中有信息填入，那么name就不等于空，Hook的渲染顺序如下：
```
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
// useEffect(persistForm)  // 🔴 此 Hook 被忽略！
useState('Poppins')        // 🔴 2 （之前为 3）。读取变量名为 surname 的 state 失败
useEffect(updateTitle)     // 🔴 3 （之前为 4）。替换更新标题的 effect 失败
```
这样就会引发Bug的出现。因此在写Hook的时候一定要在函数组件的最外层写，不要写在判断，循环中。

#### 自定义Hook

<span id="自定义Hook"></span>

自定义hooks可以说成是一种约定而不是功能。**当一个函数以use开头并且在函数内部调用其他hooks，那么这个函数就可以成为自定义hooks**，比如说useSomething。

**自定义Hooks可以封装状态，能够更好的实现状态共享。**

我们来封装一个数字加减的Hook
```
const useCount = (num) => {
    let [count, setCount] = useState(num);
    return [count,()=>setCount(count + 1), () => setCount(count - 1)]
};
```

这个自定义Hook内部使用useState定义一个状态，返回一个数组，数组中有状态的值、状态++的函数，状态–的函数。

```
const CustomComp = () => {
    let [count, addCount, redCount] = useCount(1);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={addCount}> + </button>
            <button onClick={redCount}> - </button>
        </>
    )
}
```

主函数中使用解构赋值的方式接受这三个值使用，这是一种非常简单的自定义Hook。如果项目大的话使用自定义Hook会抽离可以抽离公共代码，极大的减少我们的代码量，提高开发效率。

## webApp缺点与优点

缺点：

- 1.Web基于DOM，而DOM很慢
- 2.DOM拖慢JavaScript。
- 3.网页是单线程的
- 4.网页没有硬件加速

优点：

- 1.跨平台：所有系统都能使用
- 2.免安装：打开浏览器就能使用
- 3.快速部署：升级只需在服务器更新代码
- 4.超链接：可以与其他网站互联，可以被搜索引擎检索

react-canvas这个包是基于canvas和react的把jsx语法化成canvas
<!-- 

## fiber架构

## redux总结

## react-router

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
 -->



