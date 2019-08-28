(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{228:function(e,t,v){"use strict";v.r(t);var r=v(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"vue源码浅析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue源码浅析","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue源码浅析")]),e._v(" "),v("h2",{attrs:{id:"vue源码架构分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue源码架构分析","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue源码架构分析")]),e._v(" "),v("p",[e._v("3年前的vue\n"),v("img",{attrs:{src:"vue-star.png",alt:""}}),e._v("\n现在的vue2019.8\n"),v("img",{attrs:{src:"vue-star1.png",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"vue-目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-目录结构","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue 目录结构")]),e._v(" "),v("p",[e._v("来一张源码截图：\n"),v("img",{attrs:{src:"vue-core%E7%9B%AE%E5%BD%95.png",alt:""}})]),e._v(" "),v("p",[v("img",{attrs:{src:"vue-core%E7%9B%AE%E5%BD%951.png",alt:""}})]),e._v(" "),v("p",[e._v("我们再来看一下，core 文件夹下的目录：")]),e._v(" "),v("p",[v("img",{attrs:{src:"vue-core%E7%9B%AE%E5%BD%952.png",alt:""}})]),e._v(" "),v("p",[e._v('结论：Vue.js 的组成是由 core + 对应的 "平台" 补充代码构成（独立构建和运行时构建\n只是 platforms 下 web 平台的两种选择）。')]),e._v(" "),v("blockquote",[v("p",[e._v("Vue2.0 在保持实现‘响应的数据绑定’的同时又引入了 ‘virtual-dom’,那么它是怎么实现的呢？")])]),e._v(" "),v("h3",{attrs:{id:"数据双向绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据双向绑定","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据双向绑定")]),e._v(" "),v("p",[e._v("数据双向绑定（响应式原理）所涉及到的技术")]),e._v(" "),v("ul",[v("li",[e._v("1.Object.defineProperty")]),e._v(" "),v("li",[e._v("2.Observer")]),e._v(" "),v("li",[e._v("3.Watcher")]),e._v(" "),v("li",[e._v("4.Dep")]),e._v(" "),v("li",[e._v("5.Directive\n"),v("img",{attrs:{src:"vue-%E6%95%B0%E6%8D%AE%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A.png",alt:""}})])]),e._v(" "),v("p",[e._v("数据双向绑定的原理")]),e._v(" "),v("p",[e._v("vue实现数据绑定是用了发布者-订阅者模式。\nmvvm.js入口文件\nobserve.js\nwatcher.js //数据更新视图\nDep.js     //发布订阅主要靠的就是数组关系，订阅就是放入函数，发布就是让数组里的函数执行\nCompile.js //\nBatcher.js")]),e._v(" "),v("p",[e._v("Vdom实现")]),e._v(" "),v("p",[e._v("获取datta上的所有属性")]),e._v(" "),v("p",[e._v("页面首次加载流程：")]),e._v(" "),v("p",[e._v("调用MVVM.js与Observe.js 进行遍历vm的每个key，使用object.difinePropty为vm设置getter和setter，当获取的时候首先判断是否加入了订阅者subs的队列中，如果加入了直接返回，未加入的话，进行")]),e._v(" "),v("p",[e._v("自动调用watcher.js")])])},[],!1,null,null,null);t.default=a.exports}}]);