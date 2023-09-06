# React

1.什么是虚拟DOM？
虚拟DOM是真实DOM在内存中的表示，ul的表示形式保存在内存中，并且与实际的DOM同步，这是一个发生在渲染函数被调用和元素在屏幕上显示的步骤，整个过程被称为调和

2.类组件和函数组件之间的区别是什么？
类组件可以使用其他特性，如状态和生命周期钩子，并且他有this

函数组件只能接收props渲染到页面，无状态组件，没有this，不能使用生命周期钩子

函数组件性能要高于类组件，因为类组件使用要实例化，而函数组件直接执行取返回结果即可，为了提高性能，尽量使用函数组件

3.react中refs是什么？
refs是提供一种访问在render方法中创建DOM节点或者React元素的方法，在典型的数据流中，props是父子组件交互的唯一方式，想要修改子组件，需要使用新的props重新渲染它，某些情况下，在典型的数据流外，强制修改子代，这个时候可以使用refs

我们可以在组件添加一个ref属性来使用，该属性是一个回调函数，接收作为其第一个参数的底层DOM元素或组件挂载实例

input元素有一个ref属性，他的值是一个函数，该函数接收输入的实际DOM元素，然后将其放在实例上，这样就可以在 handleSubmit 函数内部访问它

经常被误解的只有在类组件中才能使用 refs，但是refs也可以通过利用 JS 中的闭包与函数组件一起使用

4.在react中如何处理事件？
为了解决跨浏览器的兼容性问题，SyntheticEvent 实例将被传递给你的事件处理函数，SyntheticEvent是 React 跨浏览器的浏览器原生事件包装器，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()。

比较有趣的是，React 实际上并不将事件附加到子节点本身。React 使用单个事件侦听器侦听顶层的所有事件。这对性能有好处，也意味着 React 在更新 DOM 时不需要跟踪事件监听器。

5.state和props区别是什么？
相同点：都是普通的js对象，他们包含着影响渲染输出的信息

不同点：state是组件自己管理数据，控制自己的状态，可变

props是外部传入的数据参数，不可变

没有state的叫做无状态组件，有state的叫有状态组件

多用props，少用state

6.如何创建refs？
通过React.createRef（）创建的，并通过ref属性附加到react元素，在构造组件中，

通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。

7.什么是高阶组件？
高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为

HOC 可以用于以下许多用例

代码重用、逻辑和引导抽象
渲染劫持
state 抽象和操作
props 处理
8.在构造函数调用super并将props作为参数传入的作用是啥？
 在调用 super() 方法之前，子类构造函数无法使用this引用，ES6 子类也是如此。将 props 参数传递给 super() 调用的主要原因是在子构造函数中能够通过this.props来获取传入的 props。

props 的行为只有在构造函数中是不同的，在构造函数之外也是一样的

9.什么是受控组件？
在 HTML 中，表单元素如 <input>、<textarea>和<select>通常维护自己的状态，并根据用户输入进行更新。当用户提交表单时，来自上述元素的值将随表单一起发送。

而 React 的工作方式则不同。包含表单的组件将跟踪其状态中的输入值，并在每次回调函数(例如onChange)触发时重新渲染组件，因为状态被更新。以这种方式由 React 控制其值的输入表单元素称为受控组件。

10.如何 React.createElement ？
const element = (
 
  <h1 className="greeting">
 
    Hello, world!
 
  </h1>
 
)
const element = React.createElement(
 
  'h1',
 
  {className: 'greeting'},
 
  'Hello, world!'
 
);
11.什么是jsx？
在第一发布react时，还引入了一种新的js方言jsx，将原始 HTML 模板嵌入到 JS 代码中。JSX 代码本身不能被浏览器读取，必须使用Babel和webpack等工具将其转换为传统的JS。很多开发人员就能无意识使用 JSX，因为它已经与 React 结合在一起了

12.为什么不直接更新state？
如果试图直接更新state，就不会重新渲染组件

需要使用setState（）方法更新state，它对state对象进行更新，当state改变时，组件通过重新渲染来响应

13.React 组件生命周期有哪些不同阶段？
Initialization：在这个阶段，组件准备设置初始化状态和默认属性。
Mounting：react 组件已经准备好挂载到浏览器 DOM 中。这个阶段包括componentWillMount和componentDidMount生命周期方法。
Updating：在这个阶段，组件以两种方式更新，发送新的 props 和 state 状态。此阶段包括shouldComponentUpdate、componentWillUpdate和componentDidUpdate生命周期方法。
Unmounting：在这个阶段，组件已经不再被需要了，它从浏览器 DOM 中卸载下来。这个阶段包含 componentWillUnmount 生命周期方法。
除以上四个常用生命周期外，还有一个错误处理的阶段：

Error Handling：在这个阶段，不论在渲染的过程中，还是在生命周期方法中或是在任何子组件的构造函数中发生错误，该组件都会被调用。这个阶段包含了 componentDidCatch 生命周期方法。

14.react生命周期方法有哪些？
componentWillMount:在渲染之前执行，用于根组件中的 App 级配置。
componentDidMount：在第一次渲染之后执行，可以在这里做AJAX请求，DOM 的操作或状态更新以及设置事件监听器。
componentWillReceiveProps：在初始化render的时候不会执行，它会在组件接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染
shouldComponentUpdate：确定是否更新组件。默认情况下，它返回true。如果确定在 state 或 props 更新后组件不需要在重新渲染，则可以返回false，这是一个提高性能的方法。
componentWillUpdate：在shouldComponentUpdate返回 true 确定要更新组件之前件之前执行。
componentDidUpdate：它主要用于更新DOM以响应props或state更改。
componentWillUnmount：它用于取消任何的网络请求，或删除与组件关联的所有事件监听器。
15.这三个点(...)在 React 干嘛用的？
 扩展运算符或者叫展开操作符，对于创建具有现有对象的大多数属性的新对象非常方便，在更新state时经常这么用

16.使用 React Hooks 好处是啥？
Hooks是 React 16.8 中的新添加内容。它们允许在不编写类的情况下使用state和其他 React 特性。使用 Hooks，可以从组件中提取有状态逻辑，这样就可以独立地测试和重用它。Hooks 允许咱们在不改变组件层次结构的情况下重用有状态逻辑，这样在许多组件之间或与社区共享 Hooks 变得很容易

hooks解决了什么问题？

        函数组件中可以使用类组件中的特性问题

17：React 中的 useState() 是什么？
useState 是一个内置的 React Hook。useState(0) 返回一个元组，其中第一个参数count是计数器的当前状态，setCounter 提供更新计数器状态的方法。

咱们可以在任何地方使用setCounter方法更新计数状态-在这种情况下，咱们在setCount函数内部使用它可以做更多的事情，使用 Hooks，能够使咱们的代码保持更多功能，还可以避免过多使用基于类的组件

定义state的数据，参数是初始化的数据，返回值两个值1. 初始化值，2. 修改的方法

useState中修改的方法异步

借助于useEffect 进行数据的监听

可以自己定义Hooks的方法, 方法内部可以把逻辑返回

18.React 中的StrictMode(严格模式)是什么？
React 的StrictMode是一种辅助组件，可以帮助咱们编写更好的 react 组件，可以使用<StrictMode />包装一组组件，并且可以帮咱们以下检查：

验证内部组件是否遵循某些推荐做法，如果没有，会在控制台给出警告。
验证是否使用的已经废弃的方法，如果有，会在控制台给出警告。
通过识别潜在的风险预防一些副作用。
19.为什么类方法需要绑定到类实例？
在js中，this值会根据当前上下文的变化，在React类组件方法中，开发人员通常希望this引用罪案的当前实例，因此有必要将这些方法绑定到实例

20.什么是prop drilling，如何避免？
在构建 React 应用程序时，在多层嵌套组件来使用另一个嵌套组件提供的数据。最简单的方法是将一个 prop 从每个组件一层层的传递下去，从源组件传递到深层嵌套组件，这叫做prop drilling。

prop drilling的主要缺点是原本不需要数据的组件变得不必要地复杂，并且难以维护。

为了避免prop drilling，一种常用的方法是使用React Context。通过定义提供数据的Provider组件，并允许嵌套的组件通过Consumer组件或useContext Hook 使用上下文数据

21.描述 Flux 与 MVC？
传统的 MVC 模式在分离数据(Model)、UI(View和逻辑(Controller)方面工作得很好，但是 MVC 架构经常遇到两个主要问题:

数据流不够清晰:跨视图发生的级联更新常常会导致混乱的事件网络，难于调试。

缺乏数据完整性:模型数据可以在任何地方发生突变，从而在整个UI中产生不可预测的结果。

使用 Flux 模式的复杂用户界面不再遭受级联更新，任何给定的React 组件都能够根据 store 提供的数据重建其状态。Flux 模式还通过限制对共享数据的直接访问来加强数据完整性

22.受控组件和非受控组件区别是啥？
受控组件是 React 控制中的组件，并且是表单数据真实的唯一来源。
非受控组件是由 DOM 处理表单数据的地方，而不是在 React 组件中。
尽管非受控组件通常更易于实现，因为只需使用refs即可从 DOM 中获取值，但通常建议优先选择受控制的组件，而不是非受控制的组件。

这样做的主要原因是受控组件支持即时字段验证，允许有条件地禁用/启用按钮，强制输入格式

23. 什么是 React Context?
Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性

24.什么是 React Fiber?
Fiber 是 React 16 中新的协调引擎或重新实现核心算法。它的主要目标是支持虚拟DOM的增量渲染。React Fiber 的目标是提高其在动画、布局、手势、暂停、中止或重用等方面的适用性，并为不同类型的更新分配优先级，以及新的并发原语。

React Fiber 的目标是增强其在动画、布局和手势等领域的适用性。它的主要特性是增量渲染:能够将渲染工作分割成块，并将其分散到多个帧中。

25.如何在 ReactJS 的 Props上应用验证？
当应用程序在开发模式下运行时，React 将自动检查咱们在组件上设置的所有 props，以确保它们具有正确的数据类型。对于不正确的类型，开发模式下会在控制台中生成警告消息，而在生产模式中由于性能影响而禁用它。强制的 props 用 isRequired定义的。

下面是一组预定义的 prop 类型:

React.PropTypes.string
React.PropTypes.number
React.PropTypes.func
React.PropTypes.node
React.PropTypes.bool
26.在 React 中使用构造函数和 getInitialState 有什么区别？
构造函数和getInitialState之间的区别就是ES6和ES5本身的区别。在使用ES6类时，应该在构造函数中初始化state，并在使用React.createClass时定义getInitialState方法。

27.Hooks会取代 render props 和高阶组件吗？
render props和高阶组件仅渲染一个子组件。React团队认为，Hooks 是服务此用例的更简单方法。

这两种模式仍然有一席之地(例如，一个虚拟的 scroller 组件可能有一个 renderItem prop，或者一个可视化的容器组件可能有它自己的 DOM 结构)。但在大多数情况下，Hooks 就足够了，可以帮助减少树中的嵌套

28.如何避免组件的重新渲染？
React 中最常见的问题之一是组件不必要地重新渲染。React 提供了两个方法，在这些情况下非常有用：

React.memo():这可以防止不必要地重新渲染函数组件
PureComponent:这可以防止不必要地重新渲染类组件
这两种方法都依赖于对传递给组件的props的浅比较，如果 props 没有改变，那么组件将不会重新渲染。虽然这两种工具都非常有用，但是浅比较会带来额外的性能损失，因此如果使用不当，这两种方法都会对性能产生负面影响。

通过使用 React Profiler，可以在使用这些方法前后对性能进行测量，从而确保通过进行给定的更改来实际改进性能。

29.什么是纯函数？
纯函数是不依赖并且不会在其作用域之外修改变量状态的函数。本质上，纯函数始终在给定相同参数的情况下返回相同结果。

30.当调用setState时，React render 是如何工作的
虚拟 DOM 渲染:当render方法被调用时，它返回一个新的组件的虚拟 DOM 结构。当调用setState()时，render会被再次调用，因为默认情况下shouldComponentUpdate总是返回true，所以默认情况下 React 是没有优化的。
原生 DOM 渲染:React 只会在虚拟DOM中修改真实DOM节点，而且修改的次数非常少——这是很棒的React特性，它优化了真实DOM的变化，使React变得更快。
31.如何避免在React重新绑定实例？
1.将事件处理程序定义为内联箭头函数

class SubmitButton extends React.Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
 
      isFormSubmitted: false
 
    };
 
  }
 
 
 
  render() {
 
    return (
 
      <button onClick={() => {
 
        this.setState({ isFormSubmitted: true });
 
      }}>Submit</button>
 
    )
 
  }
 
}

2.使用箭头函数来定义方法：

class SubmitButton extends React.Component {
 
  state = {
 
    isFormSubmitted: false
 
  }
 
 
 
  handleSubmit = () => {
 
    this.setState({
 
      isFormSubmitted: true
 
    });
 
  }
 
 
 
  render() {
 
    return (
 
      <button onClick={this.handleSubmit}>Submit</button>
 
    )
 
  }
 
}

3.使用带有 Hooks 的函数组件

const SubmitButton = () => {
 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
 
 
 
  return (
 
    <button onClick={() => {
 
        setIsFormSubmitted(true);
 
    }}>Submit</button>
 
  )
 
};

32.区分Real DOM和Virtual DOM？
Real DOM	Virtual DOM
1. 更新缓慢。	1. 更新更快。
2. 可以直接更新 HTML。	2. 无法直接更新 HTML。
3. 如果元素更新，则创建新DOM。	3. 如果元素更新，则更新 JSX 。
4. DOM操作代价很高。	4. DOM 操作非常简单。
5. 消耗的内存较多。	5. 很少的内存消耗。
 33. 什么是React？
React 是 Facebook 在 2011 年开发的前端 JavaScript 库。
它遵循基于组件的方法，有助于构建可重用的UI组件。
它用于开发复杂和交互式的 Web 和移动 UI。
尽管它仅在 2015 年开源，但有一个很大的支持社区
34.React有什么特点
React的主要功能如下：

它使用虚拟DOM 而不是真正的DOM。
它可以进行服务器端渲染。
它遵循单向数据流或数据绑定。
35. 列出React的一些主要优点
它提高了应用的性能
可以方便地在客户端和服务器端使用
由于 JSX，代码的可读性很好
React 很容易与 Meteor，Angular 等其他框架集成
使用React，编写UI测试用例变得非常容易
36. React有哪些限制？
React 只是一个库，而不是一个完整的框架
它的库非常庞大，需要时间来理解
新手程序员可能很难理解
编码变得复杂，因为它使用内联模板和 JSX
37. 为什么浏览器无法读取JSX？
 浏览器只能处理 JavaScript 对象，而不能读取常规 JavaScript 对象中的 JSX。所以为了使浏览器能够读取 JSX，首先，需要用像 Babel 这样的 JSX 转换器将 JSX 文件转换为 JavaScript 对象，然后再将其传给浏览器

38.与 ES5 相比，React 的 ES6 语法有何不同？
1.require 与 import

2.export 与 exports

3.component 和 function

4.props

5.state

39. React与Angular有何不同？
主题	React	Angular
1. 体系结构	只有 MVC 中的 View	完整的 MVC
2. 渲染	可以进行服务器端渲染	客户端渲染
3. DOM	使用 virtual DOM	使用 real DOM
4. 数据绑定	单向数据绑定	双向数据绑定
5. 调试	编译时调试	运行时调试
6. 作者	Facebook	Google
40. 你怎样理解“在React中，一切都是组件”这句话
组件是 React 应用 UI 的构建块。这些组件将整个 UI 分成小的独立并可重用的部分。每个组件彼此独立，而不会影响 UI 的其余部分。

41.怎样解释 React 中 render() 的目的
每个React组件强制要求必须有一个 render()。它返回一个 React 元素，是原生 DOM 组件的表示。如果需要渲染多个 HTML 元素，则必须将它们组合在一个封闭标记内，例如 <form>、<group>、<p> 等。此函数必须保持纯净，即必须每次调用时都返回相同的结果

42.什么是 Props?
Props 是 React 中属性的简写。它们是只读组件，必须保持纯，即不可变。它们总是在整个应用中从父组件传递到子组件。子组件永远不能将 prop 送回父组件。这有助于维护单向数据流，通常用于呈现动态生成的数据

43. React中的状态是什么？它是如何使用的？
状态是 React 组件的核心，是数据的来源，必须尽可能简单。基本上状态是确定组件呈现和行为的对象。与props 不同，它们是可变的，并创建动态和交互式组件。可以通过 this.state() 访问它们

44.区分状态和 props
条件	State	Props
1. 从父组件中接收初始值	Yes	Yes
2. 父组件可以改变值	No	Yes
3. 在组件中设置默认值	Yes	Yes
4. 在组件的内部变化	Yes	No
5. 设置子组件的初始值	Yes	Yes
6. 在子组件的内部更改	No	Yes
45. 如何更新组件的状态？
 可以用 this.setState()更新组件的状态。

46. React 中的箭头函数是什么？怎么用？
 箭头函数（=>）是用于编写函数表达式的简短语法。这些函数允许正确绑定组件的上下文，因为在 ES6 中默认下不能使用自动绑定。使用高阶函数时，箭头函数非常有用

47. 区分有状态和无状态组件
有状态组件	无状态组件
1. 在内存中存储有关组件状态变化的信息	1. 计算组件的内部的状态
2. 有权改变状态	2. 无权改变状态
3. 包含过去、现在和未来可能的状态变化情况	3. 不包含过去，现在和未来可能发生的状态变化情况
4. 接受无状态组件状态变化要求的通知，然后将 props 发送给他们。	4.从有状态组件接收 props 并将其视为回调函数。
 48. React中的事件是什么？
在 React 中，事件是对鼠标悬停、鼠标单击、按键等特定操作的触发反应。处理这些事件类似于处理 DOM 元素中的事件。但是有一些语法差异，如：

用驼峰命名法对事件命名而不是仅使用小写字母。
事件作为函数而不是字符串传递。
事件参数重包含一组特定于事件的属性。每个事件类型都包含自己的属性和行为，只能通过其事件处理程序访问

49.React中的合成事件是什么？
合成事件是围绕浏览器原生事件充当跨浏览器包装器的对象。它们将不同浏览器的行为合并为一个 API。这样做是为了确保事件在不同浏览器中显示一致的属性。

50.React 中 key 的重要性是什么？
key 用于识别唯一的 Virtual DOM 元素及其驱动 UI 的相应数据。它们通过回收 DOM 中当前所有的元素来帮助 React 优化渲染。这些 key 必须是唯一的数字或字符串，React 只是重新排序元素而不是重新渲染它们。这可以提高应用程序的性能

51.什么是Redux?
Redux 是当今最热门的前端开发库之一。它是 JavaScript 程序的可预测状态容器，用于整个应用的状态管理。使用 Redux 开发的应用易于测试，可以在不同环境中运行，并显示一致的行为

 52.Redux遵循的三个原则是什么？
单一事实来源：整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
状态是只读的：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
使用纯函数进行更改：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。
53. 你对“单一事实来源”有什么理解？
 Redux 使用 “Store” 将程序的整个状态存储在同一个地方。因此所有组件的状态都存储在 Store 中，并且它们从 Store 本身接收更新。单一状态树可以更容易地跟踪随时间的变化，并调试或检查程序

54.列出 Redux 的组件
Action – 这是一个用来描述发生了什么事情的对象。
Reducer – 这是一个确定状态将如何变化的地方。
Store – 整个程序的状态/对象树保存在Store中。
View – 只显示 Store 提供的数据。
55. 数据如何通过 Redux 流动？


56. 如何在 Redux 中定义 Action
React 中的 Action 必须具有 type 属性，该属性指示正在执行的 ACTION 的类型。必须将它们定义为字符串常量，并且还可以向其添加更多的属性。在 Redux 中，action 被名为 Action Creators 的函数所创建

57.解释 Reducer 的作用
Reducers 是纯函数，它规定应用程序的状态怎样因响应 ACTION 而改变。Reducers 通过接受先前的状态和 action 来工作，然后它返回一个新的状态。它根据操作的类型确定需要执行哪种更新，然后返回新的值。如果不需要完成任务，它会返回原来的状态

58.Store 在 Redux 中的意义是什么
Store 是一个 JavaScript 对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册侦听器。应用程序的整个状态/对象树保存在单一存储中。因此，Redux 非常简单且是可预测的。我们可以将中间件传递到 store 来处理数据，并记录改变存储状态的各种操作。所有操作都通过 reducer 返回一个新状态。

59.Redux 有哪些优点？
Redux 的优点如下：

结果的可预测性 - 由于总是存在一个真实来源，即 store ，因此不存在如何将当前状态与动作和应用的其他部分同步的问题。
可维护性 - 代码变得更容易维护，具有可预测的结果和严格的结构。
服务器端渲染 - 你只需将服务器上创建的 store 传到客户端即可。这对初始渲染非常有用，并且可以优化应用性能，从而提供更好的用户体验。
开发人员工具 - 从操作到状态更改，开发人员可以实时跟踪应用中发生的所有事情。
社区和生态系统 - Redux 背后有一个巨大的社区，这使得它更加迷人。一个由才华横溢的人组成的大型社区为库的改进做出了贡献，并开发了各种应用。
易于测试 - Redux 的代码主要是小巧、纯粹和独立的功能。这使代码可测试且独立。
组织 - Redux 准确地说明了代码的组织方式，这使得代码在团队使用时更加一致和简单
60.什么是React 路由
 React 路由是一个构建在 React 之上的强大的路由库，它有助于向应用程序添加新的屏幕和流。这使 URL 与网页上显示的数据保持同步。它负责维护标准化的结构和行为，并用于开发单页 Web 应用。 React 路由有一个简单的API

61. 为什么React Router v4中使用 switch 关键字 
 虽然 <p> 用于封装 Router 中的多个路由，当你想要仅显示要在多个定义的路线中呈现的单个路线时，可以使用 “switch” 关键字。使用时，<switch> 标记会按顺序将已定义的 URL 与已定义的路由进行匹配。找到第一个匹配项后，它将渲染指定的路径。从而绕过其它路线

62.  为什么需要 React 中的路由？
Router 用于定义多个路由，当用户定义特定的 URL 时，如果此 URL 与 Router 内定义的任何 “路由” 的路径匹配，则用户将重定向到该特定路由。所以基本上我们需要在自己的应用中添加一个 Router 库，允许创建多个路由，每个路由都会向我们提供一个独特的视图

63.列出 React Router 的优点。
就像 React 基于组件一样，在 React Router v4 中，API 是 'All About Components'。可以将 Router 可视化为单个根组件（<BrowserRouter>），其中我们将特定的子路由（<route>）包起来。
无需手动设置历史值：在 React Router v4 中，我们要做的就是将路由包装在 <BrowserRouter> 组件中。
包是分开的：共有三个包，分别用于 Web、Native 和 Core。这使我们应用更加紧凑。基于类似的编码风格很容易进行切换
64.React Router与常规路由有何不同？
主题	常规路由	React 路由
参与的页面	每个视图对应一个新文件	只涉及单个HTML页面
URL 更改	HTTP 请求被发送到服务器并且接收相应的 HTML 页面	仅更改历史记录属性
体验	用户实际在每个视图的不同页面切换	用户认为自己正在不同的页面间切换
65.常用的hooks
 useState：定义state的数据，参数是初始化的数据，返回值两个值1. 初始化值，2. 修改的方法

useEffect：副作用函数，顾名思义，副作用即只有使用过后才会产生副作用

当作生命周期来使用： 第二个参数如果没写的话，页面一更新触发，compoentDidMount compoentDidUpdate

第二个参数如果空数组的话，只执行一次，compoentDidMount

数组中跟某些变量，当作监听器来使用，监听数据的变化，

useEffect是一个副作用函数，组件更新完成后触发的函数

如果我们在useEffect 返回一个函数的，组件被销毁的时候触发

useMemo：用来计算数据，返回一个结果，监听数据的变化，第二个参数就是监听的数据，具有缓存性

useMemo和useEffect 相比较来说，useMemo 是组件更新的时候触发生命周期

useMemo是怎么做性能优化的？

当父组件向子组件组件通信的时候，父组件中数据发生改变，更新父组件导致子组件的更新渲染，但是如果修改的数据跟子组件无关的话，更新子组件会导致子组件不必要的DOM渲染，是比较消耗性能的，这个时候我们可以使用useMemo或者memo做组件的缓存，减少子组件不必要的DOM渲染

useCallback：当父组件向子组件传递函数的时候，父组件的改变会导致函数的重新调用产生新的作用域，所以还是会导致子组件的更新渲染，这个时候我们可以使用useCallback来缓存组件

useRef：相当于createRef的使用，创建组件的属性信息

useContext：相当在函数组件中获取context状态数的内容信息

useReducer：useReducer是用来弥补useState的补不足， 可以把数据进行集中式的管理，单独处理数据的逻辑信息

66.react中ref的使用方式？
1.可以直接写一个字符串，不过它只适用于类组件

2.createRef和useRef来定义ref变量，ref.current获取数据

3.可以使用箭头函数的方式，提前定义一个变量，箭头函数的形参就是当前对象 

const App = ()=>{
  let h = useRef();
 
  let inp = null;//定义一个空变量
 
  const setVal = ()=>{
    console.log(inp.value);
  }
  return (
    <div>
      <h3 ref={h}>ceshi</h3>
      <button onClick={()=>console.log(h.current)}>获取</button>
 
      <hr />
      <input placeholder="输入内容" ref={(el)=>{ inp = el; }} onChange={setVal}/>
    </div>
  )
}
ref属性不能直接绑定到函数子组件的，函数组件没有this对象，无法获取函数子组件的对象内容，最后函数组件forwardRef高阶组件组件，可以把ref属性通过参数的参数传递到函数子组件的内部，对ref属性进行转发的操作
————————————————
版权声明：本文为CSDN博主「是张鱼小丸子鸭」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_60976312/article/details/125783396