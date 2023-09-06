(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{586:function(e,v,t){"use strict";t.r(v);var _=t(63),r=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("redux是flux架构的一个衍生")]),e._v(" "),t("ul",[t("li",[e._v("rudux用的核心js")])]),e._v(" "),t("p",[e._v("redux.min.js本身的库、\nreact-redux.js（连接react和redux的）、\nredux-thunk.min.js（专门处理一些代码片段的，就比如一些中间件处理的地方）\nkeyMirror.js（给变量赋值的,定义一些关键的key）\nimmutable.js（不可变对象所用）\nrequest.js（异步请求）\nReduxThunk.js（）")]),e._v(" "),t("ul",[t("li",[e._v("管理应用的state\n通过"),t("code",[e._v("store.getState()")]),e._v("可以获取"),t("code",[e._v("state")]),e._v("；")])]),e._v(" "),t("p",[e._v("通过"),t("code",[e._v("store.dispatch(action)")]),e._v("来触发"),t("code",[e._v("state")]),e._v("更新,只有action内部可以。")]),e._v(" "),t("p",[e._v("通过"),t("code",[e._v("store.subscribe(listener)")]),e._v("来注册"),t("code",[e._v("state")]),e._v("变化监听器")]),e._v(" "),t("p",[e._v("通过 "),t("code",[e._v("createStore(reducer,[initialState])")]),e._v("创建"),t("code",[e._v("store")]),e._v("，store要拿到reduce")]),e._v(" "),t("ul",[t("li",[e._v("做法")])]),e._v(" "),t("p",[e._v("1."),t("code",[e._v("Provider(ReactRedux)")]),e._v(" 注入store "),t("code",[e._v("<Provider store={store}><App/></provider>")]),e._v("连接react（容器）与Redux的")]),e._v(" "),t("p",[e._v("2."),t("code",[e._v("Actions")]),e._v(" "),t("code",[e._v("JavaScript")]),e._v(" 普通对象 通过"),t("code",[e._v("constants")]),e._v("取到. 定义动作")]),e._v(" "),t("p",[e._v("3.对应"),t("code",[e._v("Actions.Reducer")]),e._v("返回规律，更具体的是返回状态（"),t("code",[e._v("Redux.combineReducers")]),e._v("返回唯一的"),t("code",[e._v("Reducer")]),e._v("）。具体执行动作")]),e._v(" "),t("p",[e._v("4."),t("code",[e._v("store(Redux.createStore(rootReducer,Redux.applyMiddleware(thunkMiddleware)))")]),e._v("具体实施的载体，具体的形式。")]),e._v(" "),t("p",[e._v("5."),t("code",[e._v("components")]),e._v("具体"),t("code",[e._v("React")]),e._v("的组件但是不涉及状态，")]),e._v(" "),t("p",[e._v("6."),t("code",[e._v("components-> App")]),e._v("容器 "),t("code",[e._v("react-redux")]),e._v("提供 "),t("code",[e._v("connect")]),e._v(" 的方法 链接"),t("code",[e._v("React 组件")]),e._v("和"),t("code",[e._v("Redux")]),e._v("类")]),e._v(" "),t("p",[e._v("注意当有5个"),t("code",[e._v("state")]),e._v("的话就要考虑抽离了")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/redux%E5%8E%9F%E7%90%861.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/redux%E5%8E%9F%E7%90%862.png",alt:"同步"}}),e._v(" "),t("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/redux%E5%8E%9F%E7%90%862.png",alt:"异步"}})]),e._v(" "),t("p",[t("code",[e._v("redux")]),e._v("是用来管理状态的，有了"),t("code",[e._v("redux")]),e._v("以后就不需要"),t("code",[e._v("state")]),e._v("了，那么数据怎么来的呢，当然就需要"),t("code",[e._v("props")]),e._v("了，"),t("code",[e._v("props")]),e._v("怎么来的?，"),t("code",[e._v("redux")]),e._v("给的，")]),e._v(" "),t("p",[t("code",[e._v("redux")]),e._v("怎么组成的呢？")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/redux%E7%BB%84%E4%BB%B6.png",alt:""}})]),e._v(" "),t("p",[e._v("views -> provider -> action（接收事件） -> middiewares（处理异步事件等）->dispatcher（派发）->reducer（具体执行产生一个store）->state(所有组件进行重新渲染，如果不要重新渲染有俩种方式？")]),e._v(" "),t("p",[e._v("方法一：进行深克隆，")]),e._v(" "),t("p",[e._v("方法二immuable拦着)->props->views")])])}),[],!1,null,null,null);v.default=r.exports}}]);