redux是flux架构的一个衍生
- rudux用的核心js  

redux.min.js本身的库、
react-redux.js（连接react和redux的）、
redux-thunk.min.js（专门处理一些代码片段的，就比如一些中间件处理的地方）
keyMirror.js（给变量赋值的,定义一些关键的key）
immutable.js（不可变对象所用）
request.js（异步请求）
ReduxThunk.js（）   

- 管理应用的state
通过`store.getState()`可以获取`state`；

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

注意当有5个`state`的话就要考虑抽离了

![](redux原理1.png)
![同步](redux原理2.png)
![异步](redux原理2.png)


`redux`是用来管理状态的，有了`redux`以后就不需要`state`了，那么数据怎么来的呢，当然就需要`props`了，`props`怎么来的?，`redux`给的，

`redux`怎么组成的呢？

![](redux组件.png)

views -> provider ->action（接收事件） ->middiewares（处理异步事件等）->dispatcher（派发）->reducer（具体执行产生一个store）->state(所有组件进行重新渲染，如果不要重新渲染有俩种方式？方法一：进行深克隆，方法二






\immuable拦着)->props->views



- redux具体实现

applyMiddleware.js     redux管理中间件

bindActionCreators.js   能让我们直接的调用action

combineReducers.js     合并reducer

compose.js              组合函数 

createStore.js           创建一个store容器

index.js                

utils