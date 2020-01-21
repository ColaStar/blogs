(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{172:function(s,n,e){"use strict";e.r(n);var t=e(0),a=Object(t.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"flux-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flux-架构","aria-hidden":"true"}},[s._v("#")]),s._v(" Flux 架构")]),s._v(" "),e("p",[e("code",[s._v("Flux")]),s._v("是由一群Facebook工程师提出的，它的名字是拉丁语的Flow。Flux的提出主"),e("strong",[s._v("要是针对现有前端MVC框架的局限")]),s._v("总结出来的一套基于"),e("code",[s._v("dispatcher")]),s._v("的前端应用架构模式。按照MVC的命名习惯，他应该叫ADSV（Action Dispatcher Store View）。")]),s._v(" "),e("p",[s._v("Flux的核心思想就是数据和逻辑永远单向流动。")]),s._v(" "),e("h2",{attrs:{id:"flux-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flux-是什么？","aria-hidden":"true"}},[s._v("#")]),s._v(" Flux 是什么？")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("Flux")]),s._v("是一种架构思想，专门是用来解决软件的结构问题。它跟MVC架构是同一类东西，但是更加简单和清晰。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("Flux")]),s._v("存在多种实现（至少24种）react是其中的一种，")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("react")]),s._v("本身只设计"),e("code",[s._v("UI")]),s._v("层，如果搭建大型应用，必须搭配一个前端框架。")])])]),s._v(" "),e("blockquote",[e("p",[s._v("Flux将一个应用分成四个部分")])]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("View")]),s._v("：视图层。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("Action")]),s._v("（动作）：视图层发出消息（比如"),e("code",[s._v("click")]),s._v("），它主要包含一个actionType属性（说明动作的类型）和一些其他属性（用来传递数据）")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("Dispatcher")]),s._v("(派发器)：用来接收Action,将 Action 派发到 Store,并执行回调函数,Dispatcher 只能有一个，而且是全局的。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("store")]),s._v("（数据层）：负责保存数据，并定义修改数据的逻辑，同时调用"),e("code",[s._v("dispatcher")]),s._v("的"),e("code",[s._v("register")]),s._v("方法将自己注册称为一个监听器。这样每当我们使用"),e("code",[s._v("dispatcher")]),s._v("的"),e("code",[s._v("dispatch")]),s._v("方法分发一个"),e("code",[s._v("action")]),s._v("时，"),e("code",[s._v("store")]),s._v("注册的监听器就会被调用，同时得到这个"),e("code",[s._v("action")]),s._v("作为参数。"),e("strong",[s._v("简单点说")]),s._v("：就是用来存放应用的状态，根据 action 的 type 字段来确定是否响应这个 action。若需要响应，则会根据 action中的信息修改 store 中的数据,并触发一个更新事件,去更新页面。")])])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/flux.png"}},[e("img",{attrs:{src:"https://colastar.github.io/static/images/flux.png",alt:""}})]),s._v("\n从上图可以看出")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("Flux")]),s._v("应用中，数据从"),e("code",[s._v("action")]),s._v("到"),e("code",[s._v("dispatcher")]),s._v("，再到"),e("code",[s._v("store")]),s._v("，最终到"),e("code",[s._v("view")]),s._v("的路线是单向不可逆的，各个角色之间不会像前端MVC模式那样存在交错的连线。")]),s._v(" "),e("h2",{attrs:{id:"单向流动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单向流动","aria-hidden":"true"}},[s._v("#")]),s._v(" 单向流动")]),s._v(" "),e("p",[e("code",[s._v("Flux")]),s._v(' 的最大特点，就是数据的"'),e("strong",[s._v("单向流动")]),s._v('"。')]),s._v(" "),e("ul",[e("li",[s._v("用户访问 View")]),s._v(" "),e("li",[e("code",[s._v("View")]),s._v(" 发出用户的 "),e("code",[s._v("Action")])]),s._v(" "),e("li",[e("code",[s._v("Dispatcher")]),s._v(" 收到 "),e("code",[s._v("Action")]),s._v("，要求 "),e("code",[s._v("Store")]),s._v(" 进行相应的更新,即"),e("code",[s._v("dispatcher")]),s._v("负责分发事件")]),s._v(" "),e("li",[e("code",[s._v("Store")]),s._v(' 更新后，发出一个"'),e("code",[s._v("change")]),s._v('"事件,即Store是负责保存数据，同时响应事件并更新数据')]),s._v(" "),e("li",[e("code",[s._v("View")]),s._v(' 收到"'),e("code",[s._v("change")]),s._v('"事件后，更新页面，简单点说就是'),e("code",[s._v("View")]),s._v("负责订阅"),e("code",[s._v("store")]),s._v("中的数据，并使用这些数据渲染相应的页面。")])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/flux1.png"}},[e("img",{attrs:{src:"https://colastar.github.io/static/images/flux1.png",alt:""}})])]),s._v(" "),e("p",[s._v('数据总是"'),e("strong",[s._v("单向流动")]),s._v('"，任何相邻的部分都不会发生数据的"双向流动"。这保证了流程的清晰')]),s._v(" "),e("h2",{attrs:{id:"补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充","aria-hidden":"true"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Dispatcher")]),s._v("的主要API：")]),s._v(" "),e("li",[e("code",[s._v("register(function callback)")]),s._v("：注册callback回调。")]),s._v(" "),e("li",[e("code",[s._v("unregister(string id)")]),s._v("：卸载回调方法。")]),s._v(" "),e("li",[e("code",[s._v("waitFor(array<string> ids)")]),s._v("：在继续执行当前回调之前，等待指定要调用的回调，这个方法只能被回调用于响应分派的有效载荷。")]),s._v(" "),e("li",[e("code",[s._v("dispatch(object payload)")]),s._v("： 将有效载荷调度到所有注册的回调。")]),s._v(" "),e("li",[e("code",[s._v("isDispatching()：Dispatcher")]),s._v(" 是否正在派发任务。")])]),s._v(" "),e("h2",{attrs:{id:"例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),e("blockquote",[e("p",[s._v("View（第一部分）\n请打开 Demo 的首页index.jsx ，你会看到只加载了一个组件。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// index.jsx\nvar React = require('react');\nvar ReactDOM = require('react-dom');\nvar MyButtonController = require('./components/MyButtonController');\n\nReactDOM.render(\n  <MyButtonController/>,\n  document.querySelector('#example')\n);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("上面代码中，你可能注意到了，组件的名字不是 MyButton，而是 MyButtonController。这是为什么？")]),s._v(" "),e("p",[s._v('这里，我采用的是 React 的 controller view 模式。"controller view"组件只用来保存状态，然后将其转发给子组件。MyButtonController的源码很简单。')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// components/MyButtonController.jsx\nvar React = require('react');\nvar ButtonActions = require('../actions/ButtonActions');\nvar MyButton = require('./MyButton');\n\nvar MyButtonController = React.createClass({\n  createNewItem: function (event) {\n    ButtonActions.addNewItem('new item');\n  },\n\n  render: function() {\n    return <MyButton\n      onClick={this.createNewItem}\n    />;\n  }\n});\n\nmodule.exports = MyButtonController;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("上面代码中，MyButtonController将参数传给子组件MyButton。后者的源码甚至更简单。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// components/MyButton.jsx\nvar React = require('react');\n\nvar MyButton = function(props) {\n  return <div>\n    <button onClick={props.onClick}>New Item</button>\n  </div>;\n};\n\nmodule.exports = MyButton;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("上面代码中，你可以看到"),e("code",[s._v("MyButton")]),s._v('是一个纯组件（即不含有任何状态），从而方便了测试和复用。这就是"'),e("code",[s._v("controll view")]),s._v('"模式的最大优点。')]),s._v(" "),e("p",[e("code",[s._v("MyButton")]),s._v("只有一个逻辑，就是一旦用户点击，就调用"),e("code",[s._v("this.createNewItem")]),s._v(" 方法，向"),e("code",[s._v("Dispatcher")]),s._v("发出一个"),e("code",[s._v("Action")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// components/MyButtonController.jsx\n\n  // ...\n  createNewItem: function (event) {\n    ButtonActions.addNewItem('new item');\n  }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("上面代码中，调用"),e("code",[s._v("createNewItem")]),s._v("方法，会触发名为"),e("code",[s._v("addNewItem")]),s._v("的"),e("code",[s._v("Action")]),s._v("。")]),s._v(" "),e("blockquote",[e("p",[s._v("Action")])]),s._v(" "),e("p",[s._v("每个"),e("code",[s._v("Action")]),s._v("都是一个对象，包含一个"),e("code",[s._v("actionType")]),s._v("属性（说明动作的类型）和一些其他属性（用来传递数据）。")]),s._v(" "),e("p",[s._v("在这个Demo里面，"),e("code",[s._v("ButtonActions")]),s._v(" 对象用于存放所有的"),e("code",[s._v("Action")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// actions/ButtonActions.js\nvar AppDispatcher = require('../dispatcher/AppDispatcher');\n\nvar ButtonActions = {\n  addNewItem: function (text) {\n    AppDispatcher.dispatch({\n      actionType: 'ADD_NEW_ITEM',\n      text: text\n    });\n  },\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("上面代码中，"),e("code",[s._v("ButtonActions.addNewItem")]),s._v("方法使用"),e("code",[s._v("AppDispatcher")]),s._v("，把动作"),e("code",[s._v("ADD_NEW_ITEM")]),s._v("派发到"),e("code",[s._v("Store")]),s._v("。")]),s._v(" "),e("blockquote",[e("p",[s._v("Dispatcher\n"),e("code",[s._v("Dispatcher")]),s._v(" 的作用是将 "),e("code",[s._v("Action")]),s._v(" 派发到 "),e("code",[s._v("Store")]),s._v("。你可以把它看作一个路由器，负责在 "),e("code",[s._v("View")]),s._v(" 和 "),e("code",[s._v("Store")]),s._v(" 之间，建立 "),e("code",[s._v("Action")]),s._v(" 的正确传递路线。注意，"),e("code",[s._v("Dispatcher")]),s._v(" 只能有一个，而且是全局的。")])]),s._v(" "),e("p",[s._v("Facebook官方的 "),e("code",[s._v("Dispatcher")]),s._v(" 实现输出一个类，你要写一个AppDispatcher.js，生成 "),e("code",[s._v("Dispatcher")]),s._v(" 实例。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// dispatcher/AppDispatcher.js\nvar Dispatcher = require('flux').Dispatcher;\nmodule.exports = new Dispatcher();\nAppDispatcher.register()方法用来登记各种Action的回调函数。\n\n\n// dispatcher/AppDispatcher.js\nvar ListStore = require('../stores/ListStore');\n\nAppDispatcher.register(function (action) {\n  switch(action.actionType) {\n    case 'ADD_NEW_ITEM':\n      ListStore.addNewItemHandler(action.text);\n      ListStore.emitChange();\n      break;\n    default:\n      // no op\n  }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("上面代码中，"),e("code",[s._v("Dispatcher")]),s._v("收到"),e("code",[s._v("ADD_NEW_ITEM")]),s._v("动作，就会执行回调函数，对"),e("code",[s._v("ListStore")]),s._v("进行操作。")]),s._v(" "),e("p",[s._v("记住，"),e("code",[s._v("Dispatcher")]),s._v(" 只用来派发 "),e("code",[s._v("Action")]),s._v("，不应该有其他逻辑。")]),s._v(" "),e("blockquote",[e("p",[s._v("Store\n"),e("code",[s._v("Store")]),s._v(" 保存整个应用的状态。它的角色有点像 "),e("code",[s._v("MVC")]),s._v(" 架构之中的"),e("code",[s._v("Model")]),s._v(" 。")])]),s._v(" "),e("p",[s._v("在我们的 Demo 中，有一个ListStore，所有数据都存放在那里。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// stores/ListStore.js\nvar ListStore = {\n  items: [],\n\n  getAll: function() {\n    return this.items;\n  },\n\n  addNewItemHandler: function (text) {\n    this.items.push(text);\n  },\n\n  emitChange: function () {\n    this.emit('change');\n  }\n};\n\nmodule.exports = ListStore;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("上面代码中，"),e("code",[s._v("ListStore.items")]),s._v("用来保存条目，"),e("code",[s._v("ListStore.getAll()")]),s._v("用来读取所有条目，"),e("code",[s._v("ListStore.emitChange()")]),s._v('用来发出一个"change"事件。')]),s._v(" "),e("p",[s._v("由于 "),e("code",[s._v("Store")]),s._v(" 需要在变动后向 "),e("code",[s._v("View")]),s._v(' 发送"'),e("code",[s._v("change")]),s._v('"事件，因此它必须实现事件接口。')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// stores/ListStore.js\nvar EventEmitter = require('events').EventEmitter;\nvar assign = require('object-assign');\n\nvar ListStore = assign({}, EventEmitter.prototype, {\n  items: [],\n\n  getAll: function () {\n    return this.items;\n  },\n\n  addNewItemHandler: function (text) {\n    this.items.push(text);\n  },\n\n  emitChange: function () {\n    this.emit('change');\n  },\n\n  addChangeListener: function(callback) {\n    this.on('change', callback);\n  },\n\n  removeChangeListener: function(callback) {\n    this.removeListener('change', callback);\n  }\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[s._v("上面代码中，ListStore继承了EventEmitter.prototype，因此就能使用"),e("code",[s._v("ListStore.on()")]),s._v("和"),e("code",[s._v("ListStore.emit()")]),s._v("，来监听和触发事件了。")]),s._v(" "),e("p",[e("code",[s._v("Store")]),s._v(" 更新后 "),e("code",[s._v("this.addNewItemHandler()")]),s._v(" 发出事件 "),e("code",[s._v("this.emitChange()")]),s._v("，表明状态已经改变。 "),e("code",[s._v("View")]),s._v(" 监听到这个事件，就可以查询新的状态，更新页面了。")]),s._v(" "),e("blockquote",[e("p",[s._v("View （第二部分）\n现在，我们再回过头来修改 "),e("code",[s._v("View")]),s._v(" ，让它监听 "),e("code",[s._v("Store")]),s._v(" 的 "),e("code",[s._v("change")]),s._v(" 事件。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// components/MyButtonController.jsx\nvar React = require('react');\nvar ListStore = require('../stores/ListStore');\nvar ButtonActions = require('../actions/ButtonActions');\nvar MyButton = require('./MyButton');\n\nvar MyButtonController = React.createClass({\n  getInitialState: function () {\n    return {\n      items: ListStore.getAll()\n    };\n  },\n\n  componentDidMount: function() {\n    ListStore.addChangeListener(this._onChange);\n  },\n\n  componentWillUnmount: function() {\n    ListStore.removeChangeListener(this._onChange);\n  },\n\n  _onChange: function () {\n    this.setState({\n      items: ListStore.getAll()\n    });\n  },\n\n  createNewItem: function (event) {\n    ButtonActions.addNewItem('new item');\n  },\n\n  render: function() {\n    return <MyButton\n      items={this.state.items}\n      onClick={this.createNewItem}\n    />;\n  }\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])]),e("p",[s._v("上面代码中，你可以看到当"),e("code",[s._v("MyButtonController")]),s._v(" 发现 "),e("code",[s._v("Store")]),s._v(" 发出 "),e("code",[s._v("change")]),s._v(" 事件，就会调用 "),e("code",[s._v("this._onChange")]),s._v(" 更新组件状态，从而触发重新渲染。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// components/MyButton.jsx\nvar React = require('react');\n\nvar MyButton = function(props) {\n  var items = props.items;\n  var itemHtml = items.map(function (listItem, i) {\n    return <li key={i}>{listItem}</li>;\n  });\n\n  return <div>\n    <ul>{itemHtml}</ul>\n    <button onClick={props.onClick}>New Item</button>\n  </div>;\n};\n\nmodule.exports = MyButton;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("参考：http://www.ruanyifeng.com/blog/2016/01/flux.html")])])},[],!1,null,null,null);n.default=a.exports}}]);