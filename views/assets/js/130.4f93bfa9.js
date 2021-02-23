(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{470:function(s,e,n){"use strict";n.r(e);var t=n(42),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"event-loop-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-总结","aria-hidden":"true"}},[s._v("#")]),s._v(" Event Loop 总结")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[n("code",[s._v("Event Loop")]),s._v("即事件循环机制，是指浏览器或 "),n("code",[s._v("Node")]),s._v(" 的一种解决"),n("code",[s._v("javaScript")]),s._v(" 单线程运行不会阻塞的一种机制，也就是我们经常使用异步的原理。")]),s._v(" "),n("h2",{attrs:{id:"浏览器的-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的-event-loop","aria-hidden":"true"}},[s._v("#")]),s._v(" 浏览器的 Event Loop")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://colastar.github.io/static/images/eventloop_browser.jpg",alt:""}})]),s._v(" "),n("p",[s._v("由上图我们可以看出"),n("code",[s._v("Javascript")]),s._v("有一个 "),n("code",[s._v("main thread")]),s._v(" "),n("strong",[s._v("主线程")]),s._v("和 "),n("code",[s._v("call-stack")]),s._v(" "),n("strong",[s._v("调用栈(执行栈)")]),s._v("，所有的任务都会被放到调用栈等待主线程执行。而JS调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。")]),s._v(" "),n("p",[n("code",[s._v("Javascript")]),s._v("单线程任务被分为"),n("strong",[s._v("同步任务")]),s._v("和"),n("strong",[s._v("异步任务")]),s._v("，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。")]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("JavaScript")]),s._v(" 中，任务被分为两种，一种宏任务（"),n("code",[s._v("MacroTask")]),s._v("）也叫Task，一种叫微任务（"),n("code",[s._v("MicroTask")]),s._v("）。")]),s._v(" "),n("h3",{attrs:{id:"流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 流程")]),s._v(" "),n("p",[s._v("执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去执行Task（宏任务），每次宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。")]),s._v(" "),n("p",[s._v("其实我们可以 "),n("code",[s._v("Event Loop")]),s._v(" 当作是银行取钱，宏任务可以看成是一个客户要办理的主要任务（办卡），微任务就可以看成是存钱")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[s._v("宏任务")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("微任务")])])]),s._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("script")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("promise")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("setTineout")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("async/await")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("setInterval")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("MutationObserver")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("requestAnimationFrame")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}})])])]),s._v(" "),n("h3",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("console.log('script start')\n\nasync function async1() {\n  await async2()\n  //new Promise(reslove=>{\n  //    console.log('async2 end') \n  //    resolve()\n  //}).then(res=>{\n  //console.log('async1 end')\n  //})\n  console.log('async1 end')\n}\nasync function async2() {\n  console.log('async2 end') \n}\nasync1()\n\nsetTimeout(function() {\n  console.log('setTimeout')\n}, 0)\n\nnew Promise(resolve => {\n  console.log('Promise')\n  resolve()\n})\n  .then(function() {\n    console.log('promise1')\n  })\n  .then(function() {\n    console.log('promise2')\n  })\n\nconsole.log('script end')\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h3",{attrs:{id:"几道坑题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#几道坑题","aria-hidden":"true"}},[s._v("#")]),s._v(" 几道坑题")]),s._v(" "),n("h4",{attrs:{id:"如果-promise-没有-resolve-或-reject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果-promise-没有-resolve-或-reject","aria-hidden":"true"}},[s._v("#")]),s._v(" 如果 promise 没有 resolve 或 reject")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// async function async1(){\n//     console.log(1);\n//     await new Promise(res=>{\n//         console.log(2)\n//     })\n//     console.log(3)\n//     return '4'\n// }\n// console.log(5)\n// async1().then(res=>{\n//     console.log(res)\n// })\n// console.log(7)\n// 5 1 2 7 原因 await 要等待promise的状态变更\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h4",{attrs:{id:"resolve-处理-thenable-也会包裹一个promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resolve-处理-thenable-也会包裹一个promise","aria-hidden":"true"}},[s._v("#")]),s._v(" resolve 处理 thenable，也会包裹一个promise")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("async function async1(){\n    console.log(1);\n    return new Promise(res=>{\n        res(async2())\n    }).then(()=>{\n        console.log(5)\n    }).then(()=>{\n        console.log(10)\n    })\n}\nfunction async2(){\n    console.log(2)\n    //return {then(r){r()}}\n    //return 1\n}\nsetTimeout(()=>{\n    console.log(9)\n},0)\nasync1()\n\nnew Promise(res=>{\n    console.log(3)\n    res()\n}).then(()=>{\n    console.log(6)\n}).then(()=>{\n    console.log(7)\n}).then(()=>{\n    console.log(8)\n})\n\nconsole.log(4)\n//1 2 3 4 5 6 10 7 8 9\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n\nasync function async1(){\n    console.log(1);\n    return new Promise(res=>{\n        //resolve 处理 thenable，也会包裹一个promise\n        res(async2())\n    }).then(()=>{\n        console.log(5)\n    }).then(()=>{\n        console.log(10)\n    })\n}\nasync function async2(){\n    //自己也是一个promise\n    console.log(2)\n}\nsetTimeout(()=>{\n    console.log(9)\n},0)\nasync1()\n\nnew Promise(res=>{\n    console.log(3)\n    res()\n}).then(()=>{\n    console.log(6)\n}).then(()=>{\n    console.log(7)\n}).then(()=>{\n    console.log(8)\n})\n\nconsole.log(4)\n\n// 1 2 3 4 6 7 5 8 10 9\n\n//与上边的代码不同 ，更改async2 为async结果不一样，因为resolve本身会包裹一层promise ，async本身也是promise，所以会延后俩步执行.then函数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("h2",{attrs:{id:"node的-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node的-event-loop","aria-hidden":"true"}},[s._v("#")]),s._v(" Node的 Event Loop")]),s._v(" "),n("p",[s._v("Node中的Event Loop是基于libuv实现的，而libuv是 Node 的新跨平台抽象层，libuv使用异步，事件驱动的编程方式，核心是提供i/o的事件循环和异步回调。libuv的API包含有时间，非阻塞的网络，异步文件操作，子进程等等。 Event Loop就是在libuv中实现的。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://colastar.github.io/static/images/node_eventloop.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://colastar.github.io/static/images/node_async_eventloop.jpg",alt:""}})]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[s._v("宏任务")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("微任务")])])]),s._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("script")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("promise")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("setTimeout")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("async/await")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("setInterval")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("process.nextTick")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("setImmediate")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}})])])]),s._v(" "),n("p",[n("code",[s._v("Node")]),s._v("的"),n("code",[s._v("Event loop")]),s._v("一共分为6个阶段，每个细节具体如下：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("timers")]),s._v(": 执行"),n("code",[s._v("setTimeout")]),s._v("和"),n("code",[s._v("setInterval")]),s._v("中到期的"),n("code",[s._v("callback")]),s._v("。")]),s._v(" "),n("li",[n("code",[s._v("pending callback")]),s._v(": 上一轮循环中少数的"),n("code",[s._v("callback")]),s._v("会放在这一阶段执行。")]),s._v(" "),n("li",[n("code",[s._v("idle")]),s._v(", "),n("code",[s._v("prepare")]),s._v(": 仅在内部使用。")]),s._v(" "),n("li",[n("code",[s._v("poll")]),s._v(": 最重要的阶段，执行"),n("code",[s._v("pending callback")]),s._v("，在适当的情况下回阻塞在这个阶段。")]),s._v(" "),n("li",[n("code",[s._v("check")]),s._v(": 执行"),n("code",[s._v("setImmediate")]),s._v("("),n("code",[s._v("setImmediate()")]),s._v("是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行"),n("code",[s._v("setImmediate")]),s._v("指定的回调函数)的"),n("code",[s._v("callback")]),s._v("。")]),s._v(" "),n("li",[n("code",[s._v("close callbacks")]),s._v(": 执行"),n("code",[s._v("close")]),s._v("事件的"),n("code",[s._v("callback")]),s._v("，例如"),n("code",[s._v("socket.on('close'[,fn])")]),s._v("或者"),n("code",[s._v("http.server.on('close, fn)")]),s._v("。")])]),s._v(" "),n("p",[s._v("具体细节如下：")]),s._v(" "),n("h4",{attrs:{id:"timers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timers","aria-hidden":"true"}},[s._v("#")]),s._v(" timers")]),s._v(" "),n("p",[s._v("执行"),n("code",[s._v("setTimeout")]),s._v("和"),n("code",[s._v("setInterval")]),s._v("中到期的callback，执行这两者回调需要设置一个毫秒数，理论上来说，应该是时间一到就立即执行callback回调，但是由于system的调度可能会延时，达不到预期时间。")]),s._v(" "),n("p",[s._v("以下是官网文档解释的例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const fs = require('fs');\n\nfunction someAsyncOperation(callback) {\n  // Assume this takes 95ms to complete\n  fs.readFile('/path/to/file', callback);\n}\n\nconst timeoutScheduled = Date.now();\n\nsetTimeout(() => {\n  const delay = Date.now() - timeoutScheduled;\n\n  console.log(`${delay}ms have passed since I was scheduled`);\n}, 100);\n\n\n// do someAsyncOperation which takes 95 ms to complete\nsomeAsyncOperation(() => {\n  const startCallback = Date.now();\n\n  // do something that will take 10ms...\n  while (Date.now() - startCallback < 10) {\n    // do nothing\n  }\n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("当进入事件循环时，它有一个空队列（fs.readFile()尚未完成），因此定时器将等待剩余毫秒数，当到达95ms时，fs.readFile()完成读取文件并且其完成需要10毫秒的回调被添加到轮询队列并执行。")]),s._v(" "),n("p",[s._v("当回调结束时，队列中不再有回调，因此事件循环将看到已达到最快定时器的阈值，然后回到timers阶段以执行定时器的回调。\n在此示例中，您将看到正在调度的计时器与正在执行的回调之间的总延迟将为105毫秒。")]),s._v(" "),n("p",[s._v("以下是我测试时间：\n"),n("img",{attrs:{src:"https://colastar.github.io/static/images/node_test_setTime.jpg",alt:""}})]),s._v(" "),n("h4",{attrs:{id:"pending-callbacks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pending-callbacks","aria-hidden":"true"}},[s._v("#")]),s._v(" pending callbacks")]),s._v(" "),n("p",[s._v("此阶段执行某些系统操作（例如TCP错误类型）的回调。 例如，如果TCP socket ECONNREFUSED在尝试connect时receives，则某些* nix系统希望等待报告错误。 这将在pending callbacks阶段执行。")]),s._v(" "),n("h4",{attrs:{id:"poll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#poll","aria-hidden":"true"}},[s._v("#")]),s._v(" poll")]),s._v(" "),n("p",[n("strong",[s._v("该poll阶段有两个主要功能：")])]),s._v(" "),n("ul",[n("li",[s._v("执行I/O回调。")]),s._v(" "),n("li",[s._v("处理轮询队列中的事件。")])]),s._v(" "),n("p",[n("strong",[s._v("当事件循环进入poll阶段并且在timers中没有可以执行定时器时，将发生以下两种情况之一")])]),s._v(" "),n("ul",[n("li",[s._v("如果poll队列不为空，则事件循环将遍历其同步执行它们的callback队列，直到队列为空，或者达到system-dependent（系统相关限制）。")])]),s._v(" "),n("p",[n("strong",[s._v("如果poll队列为空，则会发生以下两种情况之一")])]),s._v(" "),n("ul",[n("li",[s._v("如果有setImmediate()回调需要执行，则会立即停止执行poll阶段并进入执行check阶段以执行回调。")]),s._v(" "),n("li",[s._v("如果没有setImmediate()回到需要执行，poll阶段将等待callback被添加到队列中，然后立即执行。")])]),s._v(" "),n("p",[n("strong",[s._v("当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。")])]),s._v(" "),n("h4",{attrs:{id:"check"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check","aria-hidden":"true"}},[s._v("#")]),s._v(" check")]),s._v(" "),n("p",[n("strong",[s._v("此阶段允许人员在poll阶段完成后立即执行回调。")])]),s._v(" "),n("p",[s._v("如果"),n("code",[s._v("poll")]),s._v("阶段闲置并且"),n("code",[s._v("script")]),s._v("已排队"),n("code",[s._v("setImmediate()")]),s._v("，则事件循环到达"),n("code",[s._v("check阶")]),s._v("段执行而不是继续等待。")]),s._v(" "),n("p",[n("code",[s._v("setImmediate()")]),s._v("实际上是一个特殊的计时器，它在事件循环的一个单独阶段运行。它使用"),n("code",[s._v("libuv API")]),s._v("来调度在"),n("code",[s._v("poll")]),s._v("阶段完成后执行的回调。\n通常，当代码被执行时，事件循环最终将达到"),n("code",[s._v("poll")]),s._v("阶段，它将等待传入连接，请求等。\n但是，如果已经调度了回调"),n("code",[s._v("setImmediate()")]),s._v("，并且轮询阶段变为空闲，则它将结束并且到达"),n("code",[s._v("check")]),s._v("阶段，而不是等待"),n("code",[s._v("poll")]),s._v("事件。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("console.log('start')\nsetTimeout(() => {\n  console.log('timer1')\n  Promise.resolve().then(function() {\n    console.log('promise1')\n  })\n}, 0)\nsetTimeout(() => {\n  console.log('timer2')\n  Promise.resolve().then(function() {\n    console.log('promise2')\n  })\n}, 0)\nPromise.resolve().then(function() {\n  console.log('promise3')\n})\nconsole.log('end')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("如果node版本为v11.x， 其结果与浏览器一致。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("start end promise3 timer1 promise1 timer2 promise2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果node版本11以下，结果大不相同")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("start end promise3 timer1 timer2 promise1 promise2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("总结可以看出")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://colastar.github.io/static/images/node_eventLoop_version_diff.jpg",alt:""}})]),s._v(" "),n("p",[n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//juejin.im/post/5c3e8d90f265da614274218a",target:"_blank",rel:"noopener noreferrer"}},[s._v("具体详情可以查看《又被node的eventloop坑了，这次是node的锅》。"),n("OutboundLink")],1)]),s._v(" "),n("h4",{attrs:{id:"setimmediate-的settimeout-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setimmediate-的settimeout-的区别","aria-hidden":"true"}},[s._v("#")]),s._v(" setImmediate() 的setTimeout()的区别")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("setImmediate和setTimeout()")]),s._v("是相似的，但根据它们被调用的时间以不同的方式表现。")]),s._v(" "),n("li",[n("code",[s._v("setImmediate()")]),s._v("设计用于在当前poll阶段完成后check阶段执行脚本 。")]),s._v(" "),n("li",[n("code",[s._v("setTimeout()")]),s._v(" 安排在经过最小（ms）后运行的脚本，在timers阶段执行。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("setTimeout(() => {\n  console.log('timeout');\n}, 0);\n\nsetImmediate(() => {\n  console.log('immediate');\n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://colastar.github.io/static/images/node_eventloop_1.jpg",alt:""}}),s._v("\n从上图可以看出，其结果不一致，为什么呢？")]),s._v(" "),n("p",[s._v("执行定时器的顺序将根据调用它们的上下文而有所不同。 如果从主模块中调用两者，那么时间将受到进程性能的限制。")]),s._v(" "),n("p",[n("strong",[s._v("那么如果在I/O周期内调用，则始终首先执行setImmediate")])]),s._v(" "),n("p",[n("strong",[s._v("因为俩者都是在I/O阶段注册的，所以先执行check，再执行timer。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const fs = require('fs');\n\nfs.readFile(__filename, () => {\n  setTimeout(() => {\n    console.log('timeout');\n  }, 0);\n  setImmediate(() => {\n    console.log('immediate');\n  });\n});\n\n//immediate timeout\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("其结果可以确定一定是immediate => timeout。")]),s._v(" "),n("p",[n("strong",[s._v("主要原因")]),s._v("是在I/O阶段读取文件后，事件循环会先进入poll阶段，发现有setImmediate需要执行，会立即进入check阶段执行setImmediate的回调。")]),s._v(" "),n("p",[s._v("然后再进入timers阶段，执行setTimeout，打印timeout。")]),s._v(" "),n("h4",{attrs:{id:"process-nexttick"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick","aria-hidden":"true"}},[s._v("#")]),s._v(" Process.nextTick()")]),s._v(" "),n("p",[n("code",[s._v("process.nextTick()")]),s._v("虽然它是异步API的一部分，但未在图中显示。这是因为"),n("code",[s._v("process.nextTick()")]),s._v("从技术上讲，它不是事件循环的一部分。")]),s._v(" "),n("p",[n("code",[s._v("process.nextTick()")]),s._v("方法将 "),n("code",[s._v("callback")]),s._v(" 添加到"),n("code",[s._v("next tick")]),s._v("队列。 一旦当前事件轮询队列的任务全部完成，在"),n("code",[s._v("next tick")]),s._v("队列中的所有"),n("code",[s._v("callbacks")]),s._v("会被依次调用。")]),s._v(" "),n("p",[s._v("换种理解方式：")]),s._v(" "),n("p",[s._v("当每个阶段完成后，如果存在 "),n("code",[s._v("nextTick")]),s._v(" 队列，就会清空队列中的所有回调函数，并且优先于其他 "),n("code",[s._v("microtask")]),s._v(" 执行。")]),s._v(" "),n("p",[n("strong",[s._v("例子")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let bar;\n\nsetTimeout(() => {\n  console.log('setTimeout');\n}, 0)\n\nsetImmediate(() => {\n  console.log('setImmediate');\n})\nfunction someAsyncApiCall(callback) {\n  process.nextTick(callback);\n}\n\nsomeAsyncApiCall(() => {\n  console.log('bar', bar); // 1\n});\n\nbar = 1;\n// bar 1,  setImmediate , setTimeout 或 bar 1, setTimeout, setImmediate \n\n无论哪种，始终都是先执行process.nextTick(callback)，打印bar 1。\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[n("strong",[s._v("案例：常见的nodejs回调函数第一个参数，都是抛出错误")])]),s._v(" "),n("p",[s._v("每个阶段执行完后，在当前阶段的尾部触发 nextick")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('fs.readFile(__filename, (err,data) => {\n\n}\n//怎么传的呢\nfunction apiCall(arg,callback){\n  if(typeof arg !=== string){\n    return process.nextTick(\n      callback,//正常执行，抛一个error对象出去，不让主线程崩掉\n      new TypeError("argument should be string") //传回去做第一个参数，\n    )\n  }\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("参考文章\n"),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252Fxianshenglu%252Fblog%252Fissues%252F60",target:"_blank",rel:"noopener noreferrer"}},[s._v("《promise, async, await, execution order》"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252Ftc39%252Fecma262%252Fpull%252F1250",target:"_blank",rel:"noopener noreferrer"}},[s._v("《Normative: Reduce the number of ticks in async/await》"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fwww.zhihu.com%252Fquestion%252F268007969",target:"_blank",rel:"noopener noreferrer"}},[s._v("《async/await 在chrome 环境和 node 环境的 执行结果不一致，求解？》"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fv8.js.cn%252Fblog%252Ffast-async%252F",target:"_blank",rel:"noopener noreferrer"}},[s._v("《更快的异步函数和 Promise》"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/55511602",target:"_blank",rel:"noopener noreferrer"}},[s._v("一次弄懂Event Loop"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);