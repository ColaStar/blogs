redux是flux架构的一个衍生

- rudux用的核心js  

redux.min.js本身的库、
react-redux.js、redux-thunk.min.js
keyMirror.js、immutable.js、request.js、ReduxThunk.js
- 管理应用的state
通过`store.getState()`可以获取`state`、

通过`store.dispatch(action)`来触发`state`更新

通过`store.dispatch(action)`来触发`state`更新,只有action内部可以。

通过`store.dsubscribe(listener)`来注册`state`变化监听器

通过 `createStore(reducer,[initialState])`创建`store`，store要拿到reduce

- 做法
1.`Provider(ReactRedux)` 注入store `<Provider store={store}><App/></provider>`连接react（容器）与Redux的

2.`Actions` `JavaScript` 普通对象 通过`constants`取到. 定义动作

3.对应`Actions.Reducer`返回规律，更具体的是返回状态（`Redux.combineReducers`返回唯一的`Reducer`）。具体执行动作

4.`store(Redux.createStore(rootReducer,Redux.applyMiddleware(thunkMiddleware)))`具体实施的载体，具体的形式。

5.`components`具体`React`的组件但是不涉及状态，

6.`components-> App`容器 `react-redux `提供 `connect` 的方法 链接`React 组件`和`Redux`类


注意当有5个state的话就要考虑抽离了

![](redux原理1.png)
![同步](redux原理2.png)
![异步](redux原理2.png)

redux是用来管理状态的，有了redux以后就不需要state了，那么数据怎么来的呢，当然就需要props了，props怎么来的redux给的，

redux怎么组成的呢？
![](redux组件.png)

views->action（接收事件） ->middiewares（处理异步事件等）->dispatcher（派发）->reducer（具体执行产生一个store）->state(immuable拦着)->props->views

