(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{628:function(s,e,a){"use strict";a.r(e);var n=a(63),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-中的nexttick的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-中的nexttick的实现原理"}},[s._v("#")]),s._v(" vue 中的NextTick的实现原理")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("根据数据的响应式原理，在数据变化之后会触发dom更新。但是如果一个数据更新就引起dom的重新渲染，这样显然会导致大大降低性能。因此vuve采用一步更新，更新数据后不能立刻拿到最新的节点，但是可以通过nextTick等待页面更新好之后再获取最终的dom。")]),s._v(" "),a("h2",{attrs:{id:"数据更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据更新"}},[s._v("#")]),s._v(" 数据更新")]),s._v(" "),a("p",[s._v("在vue中，数据更新通过调用watcher上的update方法实现。而每一次调用update就可以把需要更新的watcher暂存起来，形成watcher队列。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("update(){\n    //this.get() 渲染更新\n    //不要每次都调用get方法\n    queueWatcher(); // 暂存的概念\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"watcher-队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watcher-队列"}},[s._v("#")]),s._v(" watcher 队列")]),s._v(" "),a("p",[s._v("通过wueueWatcher函数，将需要批量更新的watcher存在一个队列最终，并做去重操作。flushScheduleQueue将队列中的watch而执行。这里的关键就是nextTick，它将watcher执行的操作变成了异步。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let queue = []; // 将需要批量更新的watcher存在一个队列中，稍后让watcher执行\nlet has = {};\nlet padding = false;\nfunction flushScheduleQueue(){\n    queue.forEach(watcher => {watcher.run,watcher.cb()})\n    queue = [];\n    has = {};\n    pending = false;\n} \nfunction queueWatcher (watcher){\n    const id = watcher.id();\n    if(has[id] == null){\n        queue.push(watcher);\n        has[id] = true\n    }\n    if(!pending){\n        nextTick(flushScheduleQueue)\n        pending = true\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h1",{attrs:{id:"nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[s._v("#")]),s._v(" nextTick")]),s._v(" "),a("p",[s._v("nextTick 这个异步函数，不单是给watcher做内部调用，用户也可以通过$nextTick调用，但是整个异步的过程只会调用一次，因此需要把这些异步的操作暂存起来。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let callbacks = [];\nlet pending = false\nfunction flushCallback(){\n    while(callbacks.length){\n        let cb = callbacks.shift()\n        cb()\n    }\n    pending = false\n}\nexport function nextTick(cb){\n    callbacks.push(cb)\n    if(!pending){\n        timerFunc();// 这个是异步方法，做了兼容性处理\n        pending = true\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("根据上面的代码，我们只要通过函数timerFunc异步调用flushCallbacks函数就可以实现nextTick的异常更新，但是这个异步方法需要做兼容性处理。")]),s._v(" "),a("h2",{attrs:{id:"nexttick的兼容性处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick的兼容性处理"}},[s._v("#")]),s._v(" nextTick的兼容性处理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let timerFunc;\nif(Promise){\n    timerFunc = () => {\n        Promise.resolve.then(flushCallbacks)\n    }\n}else if(MutationObserver){\n    let observer = new MutationObserver(flushCallbacks);\n    let textNode  = document.createTextNode(1)\n    observe.observe(textNode,{characterData:true})\n    timerFunc = () => {\n        textNode.textContent = 2\n    }\n}else if (setImmediate){\n  timerFunc = () => {\n      setImmediate(flushCallbacks) // 这是一个只有高版本IE和Edge浏览器才可能拥有的API, 其主要是用于计算大量数据的时候使用\n  }\n}else{\n    timerFunc = () => {\n        setTimeout(flushCallbacks)\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[s._v("#")]),s._v(" 源码")]),s._v(" "),a("p",[a("img",{attrs:{src:"ttp://blog.colastar.club/static/images/nexttick.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[a("strong",[s._v("nextTick 实现的几个重点")])]),s._v(" "),a("ul",[a("li",[s._v("1、将异步操作暂存起来")]),s._v(" "),a("li",[s._v("2、通过pending防止重复调用异步函数")]),s._v(" "),a("li",[s._v("3、对异步函数做兼容操作")]),s._v(" "),a("li",[s._v("4、nextTick并不是用来监听DOM变更，因为DOM变更是能够实时获取到的，它的作用是一次性更改数据，并且渲染DOM")])])])}),[],!1,null,null,null);e.default=t.exports}}]);