(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{214:function(e,v,_){"use strict";_.r(v);var t=_(0),r=Object(t.a)({},function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("redux是flux架构的一个衍生")]),e._v(" "),_("ul",[_("li",[e._v("rudux用的核心js")])]),e._v(" "),_("p",[e._v("redux.min.js本身的库、\nreact-redux.js（连接react和redux的）、\nredux-thunk.min.js（专门处理一些代码片段的，就比如一些中间件处理的地方）\nkeyMirror.js（给变量赋值的,定义一些关键的key）\nimmutable.js（不可变对象所用）\nrequest.js（异步请求）\nReduxThunk.js（）")]),e._v(" "),_("ul",[_("li",[e._v("管理应用的state\n通过"),_("code",[e._v("store.getState()")]),e._v("可以获取"),_("code",[e._v("state")]),e._v("；")])]),e._v(" "),_("p",[e._v("通过"),_("code",[e._v("store.dispatch(action)")]),e._v("来触发"),_("code",[e._v("state")]),e._v("更新,只有action内部可以。")]),e._v(" "),_("p",[e._v("通过"),_("code",[e._v("store.dsubscribe(listener)")]),e._v("来注册"),_("code",[e._v("state")]),e._v("变化监听器")]),e._v(" "),_("p",[e._v("通过 "),_("code",[e._v("createStore(reducer,[initialState])")]),e._v("创建"),_("code",[e._v("store")]),e._v("，store要拿到reduce")]),e._v(" "),_("ul",[_("li",[e._v("做法")])]),e._v(" "),_("p",[e._v("1."),_("code",[e._v("Provider(ReactRedux)")]),e._v(" 注入store "),_("code",[e._v("<Provider store={store}><App/></provider>")]),e._v("连接react（容器）与Redux的")]),e._v(" "),_("p",[e._v("2."),_("code",[e._v("Actions")]),e._v(" "),_("code",[e._v("JavaScript")]),e._v(" 普通对象 通过"),_("code",[e._v("constants")]),e._v("取到. 定义动作")]),e._v(" "),_("p",[e._v("3.对应"),_("code",[e._v("Actions.Reducer")]),e._v("返回规律，更具体的是返回状态（"),_("code",[e._v("Redux.combineReducers")]),e._v("返回唯一的"),_("code",[e._v("Reducer")]),e._v("）。具体执行动作")]),e._v(" "),_("p",[e._v("4."),_("code",[e._v("store(Redux.createStore(rootReducer,Redux.applyMiddleware(thunkMiddleware)))")]),e._v("具体实施的载体，具体的形式。")]),e._v(" "),_("p",[e._v("5."),_("code",[e._v("components")]),e._v("具体"),_("code",[e._v("React")]),e._v("的组件但是不涉及状态，")]),e._v(" "),_("p",[e._v("6."),_("code",[e._v("components-> App")]),e._v("容器 "),_("code",[e._v("react-redux")]),e._v("提供 "),_("code",[e._v("connect")]),e._v(" 的方法 链接"),_("code",[e._v("React 组件")]),e._v("和"),_("code",[e._v("Redux")]),e._v("类")]),e._v(" "),_("p",[e._v("注意当有5个"),_("code",[e._v("state")]),e._v("的话就要考虑抽离了")]),e._v(" "),_("p",[_("img",{attrs:{src:"redux%E5%8E%9F%E7%90%861.png",alt:""}}),e._v(" "),_("img",{attrs:{src:"redux%E5%8E%9F%E7%90%862.png",alt:"同步"}}),e._v(" "),_("img",{attrs:{src:"redux%E5%8E%9F%E7%90%862.png",alt:"异步"}})]),e._v(" "),_("p",[_("code",[e._v("redux")]),e._v("是用来管理状态的，有了"),_("code",[e._v("redux")]),e._v("以后就不需要"),_("code",[e._v("state")]),e._v("了，那么数据怎么来的呢，当然就需要"),_("code",[e._v("props")]),e._v("了，"),_("code",[e._v("props")]),e._v("怎么来的?，"),_("code",[e._v("redux")]),e._v("给的，")]),e._v(" "),_("p",[_("code",[e._v("redux")]),e._v("怎么组成的呢？")]),e._v(" "),_("p",[_("img",{attrs:{src:"redux%E7%BB%84%E4%BB%B6.png",alt:""}})]),e._v(" "),_("p",[e._v("views -> provider ->action（接收事件） ->middiewares（处理异步事件等）->dispatcher（派发）->reducer（具体执行产生一个store）->state(所有组件进行重新渲染，如果不要重新渲染有俩种方式？方法一：进行深克隆，方法二")]),e._v(" "),_("p",[e._v("\\immuable拦着)->props->views")]),e._v(" "),_("ul",[_("li",[e._v("redux具体实现")])]),e._v(" "),_("p",[e._v("applyMiddleware.js     redux管理中间件")]),e._v(" "),_("p",[e._v("bindActionCreators.js   能让我们直接的调用action")]),e._v(" "),_("p",[e._v("combineReducers.js     合并reducer")]),e._v(" "),_("p",[e._v("compose.js              组合函数")]),e._v(" "),_("p",[e._v("createStore.js           创建一个store容器")]),e._v(" "),_("p",[e._v("index.js")]),e._v(" "),_("p",[e._v("utils")])])},[],!1,null,null,null);v.default=r.exports}}]);