(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{132:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"promise、"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise、","aria-hidden":"true"}},[s._v("#")]),s._v(" Promise、")]),s._v(" "),e("blockquote",[e("p",[s._v("实现步骤")])]),s._v(" "),e("ul",[e("li",[s._v("实现简单的同步Promise")]),s._v(" "),e("li",[s._v("增加异步功能")]),s._v(" "),e("li",[s._v("增加链式调用then")]),s._v(" "),e("li",[s._v("增加catch finally方法")]),s._v(" "),e("li",[s._v("增加all race 等方法")]),s._v(" "),e("li",[s._v("实现一个promise的延迟对象defer")]),s._v(" "),e("li",[s._v("最终测试")])]),s._v(" "),e("h2",{attrs:{id:"实现简单的同步promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现简单的同步promise","aria-hidden":"true"}},[s._v("#")]),s._v(" 实现简单的同步Promise")]),s._v(" "),e("p",[s._v("首先要知道：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Promise内部维护着三种状态：pending（进行中）、resolved（任务执行成功）、reject（任务失败结果），⚠️切记：三种状态，只要改变就不能再被改成其他状态；即pending->resolve后是不能再转变成别的状态。")])]),s._v(" "),e("li",[e("p",[s._v("Promise 内部有一个value 属性，value值即任务执行成功返回的结果；⚠️如果在value可以是任何值但是如果想要执行异步任务是必须返回一个promise对象，当然这个说的是在then函数中了，")])]),s._v(" "),e("li",[e("p",[s._v("Promise 内部有一个 reason 属性，用来存放 Promise 状态变为 rejected 的原因")])])]),s._v(" "),e("p",[s._v("接下来让我实现一下同步的Promise函数\n注意1.2.3.4.5")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function Promise(executor) {\n    let _this = this;\n    /** 2 定义初始的一些变量 */\n    this.value = null;\n    this.status = 'pending';\n    this.reason = null\n\n    /** 3 定义初始的成功和失败函数 */\n    function resolve(value) {\n        /** 4 判断状态是不是初始状态pending \n         *    是就转换状态 否则不转换 \n         *    确保状态的变化后的不可变性 */\n        if (_this.status == 'pending') {\n            this.status = 'resloved';\n            this.value = value\n        }\n    }\n\n    function reject(reason) {\n        /** 5 同上 */\n        if (_this.status === 'pending') {\n            that.status = 'rejected';\n            that.reason = reason;\n        }\n    }\n    /**\n     * 1 Promise中首先传了一个executor，它是一个函数\n     *   executor函数中又传了两个函数，分别是resolve和reject\n     *   很显然 resolve是成功回调，reject是失败的回调\n     */\n    executor(resolve, reject);\n}\n/**定义promise的then方法\n    then方法上面有两个回调 一个是成功后的方法 另一个是失败后的方法\n *    根据成功或失败的状态去执行相关成功onFilfulled()或者失败onRejected()的回调方法*/\nPromise.prototype.then = function (onFilfulled, onRejected) {\n    let _this = this;\n    /** 7 如果状态已经变更为resolved \n     *    说明resolve方法已经被调用\n     *    那么此时就执行成功的回调函数onFilfulled\n     *    并传入参数 that.value\n     * */\n    console.log(_this.status)\n    if (_this.status === 'resloved') {\n        onFilfulled(_this.value)\n    }\n    /** 8 如果状态已经变更为reject\n     *    说明resolve方法已经被调用\n     *    那么此时就执行成功的回调函数onRejected\n     *    并传入参数 that.reason\n     * */\n    if (_this.status === 'rejected') {\n        onRejected(_this.reason)\n    }\n}\n\n// module.exports = Promise;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br")])]),e("h2",{attrs:{id:"增加异步功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加异步功能","aria-hidden":"true"}},[s._v("#")]),s._v(" 增加异步功能")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function Promise(executor) {\n    let _this = this;\n    this.value = null;\n    this.status = 'pending';\n    this.reason = null;\n     /** 1 因为异步不是立即执行 状态不会变更 成功或失败的回调函数也不会执行\n     *    所以先定义好存放成功或失败回调函数的数组 \n     *    以便将成功或失败的回调函数先保存起来\n     * */\n    this.onFilFulledCallbacks = [];\n    this.onRejectedCallbacks = [];\n\n    function resolve(value) {\n        if (_this.status == 'pending') {\n            this.status = 'resloved';\n            this.value = value;\n            /** 3 成功发布\n             *    等待状态发生变更\n             *    状态变更后 立即执行之前存放在相应数组中所有的成功的回调函数\n             *    即 发布\n             */\n             this.onFilFulledCallbacks.foEach(fn=>{\n                 fn();\n             })\n        }\n    }\n\n    function reject(reason) {\n        if (_this.status === 'pending') {\n            that.status = 'rejected';\n            that.reason = reason;\n            /** 4失败 发布\n             *    等待状态发生变更\n             *    状态变更后 立即执行之前存放在相应数组中所有的失败的回调函数\n             *    即 发布\n             */\n             this.onFilFulledCallbacks.foEach(fn=>{\n                 fn();\n             })\n        }\n    }\n    executor(resolve, reject);\n}\nPromise.prototype.then = function (onFilfulled, onRejected) {\n    let _this = this;\n    if (_this.status === 'resloved') {\n        onFilfulled(_this.value)\n    }\n    if (_this.status === 'rejected') {\n        onRejected(_this.reason)\n    }\n    /** 2 订阅\n     *    因为是异步 状态当时并没有立即变更 所以状态还是pending\n     *    此时需要把成功或者失败的回调函数存放到对应的数组中\n     *    等待状态变更时 再从数组中拿出来去执行\n     *    即 订阅\n     *    *存放数组时 为了执行时方便 需要把回调函数的外层包裹一层空函数\n     */\n    if(_this.status === 'pending'){\n        _this.onFilFulledCallbacks.push(function(){\n            onFilfulled(_this.value);\n        });\n    }\n    if(_this.status === 'pending'){\n        _this.onRejectedCallbacks.push(function(){\n            onRejected(_this.reason);\n        });\n    }\n}\n\nmodule.exports = Promise;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br")])]),e("p",[s._v("至此，我们实现了异步的Promise.其实这里的实现异步的思想就是发布订阅.")]),s._v(" "),e("p",[s._v("en～ok.高能预警🐯.接下来就稍稍复杂了 因为我们要实现链式调用then。 要实现这个功能那我们就要重写then方法，并在then方法中重新返回一个Promise,只有这样，才可以实现多次调用then.而且要新增一个解析返回值是否为promise的函数.")]),s._v(" "),e("p",[s._v("稍微捋一下逻辑")]),s._v(" "),e("ul",[e("li",[s._v("如果一个then方法返回的是一个普通值的话，这个值会传递给下一个then中做resolve的返回值；")]),s._v(" "),e("li",[s._v("如果then方法返回的是一个promise的话，我们要根据上一个then的状态（成功与失败）来决定下一个then的成功与失败")])]),s._v(" "),e("h2",{attrs:{id:"增加链式调用then"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加链式调用then","aria-hidden":"true"}},[s._v("#")]),s._v(" 增加链式调用then")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function Promise(executor) {\n    let that = this;\n    that.status = 'pending';\n    that.value = null;\n    that.reason = null;\n    that.onFilFulledCallbacks = [];\n    that.onRejectedCallbacks = [];\n   \n    function resolve(value) {\n        if (that.status === 'pending') {\n            that.status = 'resolved';\n            that.value = value;\n            that.onFilFulledCallbacks.forEach((fn) = & gt; {\n                fn();\n            });\n        }\n    }\n\n    function reject(reason) {\n        if (that.status === 'pending') {\n            that.status = 'rejected';\n            that.reason = reason;\n            that.onRejectedCallbacks.forEach((fn) = & gt; {\n                fn();\n            });\n        }\n    }\n    executor(resolve, reject);\n}\n\nPromise.prototype.then = function (onFilfulled, onRejected) {\n    let that = this;\n    /** 1 让promise2等于一个新的Promise 并将promise2返回 */\n    let promise2 = new Promise((resolve, reject) = & gt; {\n        if (that.status === 'resolved') {\n            /** 2 因为返回了promise2 \n             *  并且第3步resolvePromiseRelation函数中传递了promise2\n             *  而目前promise2并没有拿到\n             *  所以加一个定时器 异步执行 等到promise2拿到后 \n             *  再去执行 resolvePromiseRelation()方法 并将promise2传递进去*/\n            setTimeout(() = & gt; {\n                try {\n                    let promise3 = onFilfulled(that.value);\n                    /** 3 判断新返回值是什么类型的函数\n                     *  并将当前的promise：promise2  新的返回值：promise3 \n                     *  和 成功时回调：esolve  失败时回调：reject 作为参数传进去 */\n                    resolvePromiseRelation(promise2, promise3, resolve, reject);\n                } catch (e) {\n                    reject(e);\n                }\n            }, 0);\n        }\n        if (that.status === 'rejected') {\n            /** 同2 */\n            setTimeout(() = & gt; {\n                try {\n                    let promise3 = onRejected(that.reason);\n                    /** 同3*/\n                    resolvePromiseRelation(promise2, promise3, resolve, reject);\n                } catch (e) {\n                    reject(e);\n                }\n            }, 0);\n        }\n        if (that.status === 'pending') {\n            that.onFilFulledCallbacks.push(function () {\n                /** 同2 */\n                setTimeout(() = & gt; {\n                    try {\n                        let promise3 = onFilfulled(that.value);\n                        /** 同3*/\n                        resolvePromiseRelation(promise2, promise3, resolve, reject);\n                    } catch (e) {\n                        reject(e);\n                    }\n                }, 0);\n            });\n        }\n        if (that.status === 'pending') {\n            that.onRejectedCallbacks.push(function () {\n                /** 同2 */\n                setTimeout(() = & gt; {\n                    try {\n                        let promise3 = onRejected(that.reason);\n                        /** 同3*/\n                        resolvePromiseRelation(promise2, promise3, resolve, reject);\n                    } catch (e) {\n                        reject(e);\n                    }\n                }, 0);\n            });\n        }\n    });\n    /** 同1 */\n    return promise2;\n}\n\nfunction resolvePromiseRelation(promise2, promise3, resolve, reject) {\n    /** 4 防止自己等待自己 一直循环等待 */\n    if (promise2 === promise3) {\n        return reject(new TypeError('循环引用了!'));\n    }\n    /**  8 一个标示 表示当前没有被调用过 \n     *   确保resolve或者reject后的状态不会再次发生变更\n     */\n    let called;\n    /** 5 保证promise3是一个引用类型\n     *  判断新返回值promise3的类型 \n     *  如果是普通值常量 就直接resolve导出 */\n    if (promise3 !== null & amp; & amp;\n        (typeof promise3 === 'object' || typeof promise3 === 'function')) {\n        try {\n            let then = promise3.then;\n            /** 6 确保promise3是一个Promise\n             *  判断promise3的then方法\n             *  如果存在 并且是一个function类型 \n             *  就表示promise3是一个Promise */\n            if (typeof then === 'function') {\n                /** 9 执行promise3的then方法\n                 *  因为promise3也是一个Promise\n                 *  需要再次解析promise3的then方法\n                 *  直到解析到最后的返回值不是一个Promise类型为止\n                 */\n                then(promise3, (promise4) = & gt; {\n                    /** 同8 */\n                    if (called) return;\n                    called = true;\n                    /** 10 递归解析新的返回值的类型\n                     *  解析到返回值不是一个Promise类型为止\n                     */\n                    resolvePromiseRelation(promise3, promise4, resolve, reject);\n                }, (r) = & gt; {\n                    /** 同8 */\n                    if (called) return;\n                    called = true;\n                    reject(r);\n                });\n            } else {\n                /** 7 此时promise3是一个普通对象 直接resolve() */\n                resolve(promise3);\n            }\n        } catch (e) {\n            /** 同8 */\n            if (called) return;\n            called = true;\n            reject(e);\n        };\n    } else {\n        //常量\n        /** 同5 普通值直接resolve()*/\n        resolve(promise3);\n    }\n}\n\nmodule.exports = Promise;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br"),e("span",{staticClass:"line-number"},[s._v("118")]),e("br"),e("span",{staticClass:"line-number"},[s._v("119")]),e("br"),e("span",{staticClass:"line-number"},[s._v("120")]),e("br"),e("span",{staticClass:"line-number"},[s._v("121")]),e("br"),e("span",{staticClass:"line-number"},[s._v("122")]),e("br"),e("span",{staticClass:"line-number"},[s._v("123")]),e("br"),e("span",{staticClass:"line-number"},[s._v("124")]),e("br"),e("span",{staticClass:"line-number"},[s._v("125")]),e("br"),e("span",{staticClass:"line-number"},[s._v("126")]),e("br"),e("span",{staticClass:"line-number"},[s._v("127")]),e("br"),e("span",{staticClass:"line-number"},[s._v("128")]),e("br"),e("span",{staticClass:"line-number"},[s._v("129")]),e("br"),e("span",{staticClass:"line-number"},[s._v("130")]),e("br"),e("span",{staticClass:"line-number"},[s._v("131")]),e("br"),e("span",{staticClass:"line-number"},[s._v("132")]),e("br"),e("span",{staticClass:"line-number"},[s._v("133")]),e("br"),e("span",{staticClass:"line-number"},[s._v("134")]),e("br"),e("span",{staticClass:"line-number"},[s._v("135")]),e("br"),e("span",{staticClass:"line-number"},[s._v("136")]),e("br"),e("span",{staticClass:"line-number"},[s._v("137")]),e("br"),e("span",{staticClass:"line-number"},[s._v("138")]),e("br"),e("span",{staticClass:"line-number"},[s._v("139")]),e("br"),e("span",{staticClass:"line-number"},[s._v("140")]),e("br"),e("span",{staticClass:"line-number"},[s._v("141")]),e("br"),e("span",{staticClass:"line-number"},[s._v("142")]),e("br"),e("span",{staticClass:"line-number"},[s._v("143")]),e("br"),e("span",{staticClass:"line-number"},[s._v("144")]),e("br"),e("span",{staticClass:"line-number"},[s._v("145")]),e("br"),e("span",{staticClass:"line-number"},[s._v("146")]),e("br"),e("span",{staticClass:"line-number"},[s._v("147")]),e("br"),e("span",{staticClass:"line-number"},[s._v("148")]),e("br"),e("span",{staticClass:"line-number"},[s._v("149")]),e("br"),e("span",{staticClass:"line-number"},[s._v("150")]),e("br"),e("span",{staticClass:"line-number"},[s._v("151")]),e("br"),e("span",{staticClass:"line-number"},[s._v("152")]),e("br"),e("span",{staticClass:"line-number"},[s._v("153")]),e("br"),e("span",{staticClass:"line-number"},[s._v("154")]),e("br"),e("span",{staticClass:"line-number"},[s._v("155")]),e("br")])]),e("p",[s._v("ok. 至此 我们已经实现了Promsie的异步和链式调用. Promise中比较复杂的部分我们已经搞定了 接下来就是添加一些方法，其实这部分反而没那么复杂了.")]),s._v(" "),e("h2",{attrs:{id:"catch-finally方法增加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#catch-finally方法增加","aria-hidden":"true"}},[s._v("#")]),s._v(" catch|finally方法增加")]),s._v(" "),e("ul",[e("li",[s._v("catch : catch方法本质上就是一个then方法的变形，只有失败时的回调 没有成功时的回调")]),s._v(" "),e("li",[s._v("catch : finally方法的作用是不管 Promise 对象最后状态如何，都会执行操作.其实说白了就是在then方法的成功和失败的回调函数中都执行该方法就行了.")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n/** 1 直接返回this的then方法\n *  因为catch只捕获错误 所以resolve直接为null\n *  返回reject就好*/\nPromise.prototype.catch = function(errFn){\n    return this.then(null,errFn);\n}\n\n/** 3 finally实现起来也很简单 \n *  分别在resolve和reject中执行fn就好 \n *  最后再把this返回出去就好\n*/\nPromise.prototype.finally = function(fn){\n    this.then(()=&gt;{\n        fn();\n    },()=&gt;{\n        fn();\n    });\n    return this;\n}\n\nmodule.exports = Promise;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h2",{attrs:{id:"all-race-resolve-reject等方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-race-resolve-reject等方法","aria-hidden":"true"}},[s._v("#")]),s._v(" all race resolve reject等方法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//类方法，多个 Promise 任务同时执行。\n//如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。\n\n/** 1 直接在构造函数上增加all方法\n *  它返回的也是一个Promise\n *  等待参数数组中所有的promise都执行完毕后\n *  再返回结果\n */\nPromise.all = function(values){\n    return new Promise((resolve,reject)=&gt;{\n        /** 2 定义一个存放最终结果的数组result和一个index */ \n        let results = [];\n        let index = 0;\n        /** 3 定义一个方法addToArr()  \n         *  让index每次执行增加results数组元素的函数的时候都+1\n         *  当index === values的长度的时候 说明此时所有promsie都执行完毕并放到的数组中\n         *  然后直接resolve(results)就行了\n        */\n        function addToArr(key,value){\n            index++;\n            results[key] = value;\n            /** 6 当满足条件时 说明所有的promise都执行完毕 直接resolve(results) */\n            if(index === values.length){\n                resolve(results);\n            }\n        }\n        /** 4 循环values中的每一项promsie */\n        for(let i = 0; i &lt; values.length; i++){\n            let current = values[i];\n            /** 5 判断每一项promise的返回值是不是一个Promsie\n             *  是的话就执行该Promise的then方法 拿到返回值 并放到数组results中\n             *  是一个普通值的话就直接将该值放到数组results中\n             */\n            if(current &amp;&amp; current.then &amp;&amp; typeof current.then === 'function'){\n                current.then((value)=&gt;{\n                    /** 同5 把返回值放到数组results中*/\n                    addToArr(i,value);\n                },reject);\n            }else{\n                /** 同5 把返回值放到数组results中*/\n                addToArr(i,current);\n            }\n        }\n    });\n}\n\n//类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。 \n。\n/** race方法相比较于all方法简单很多\n *  因为race中的promsie成功resolve一个 \n *  整个race就resolve */\nPromise.race = function(values){\n    return new Promise((resolve,reject)=&gt;{\n        /** 同4 */\n        for(let i = 0; i &lt; values.length; i++){\n            let current = values[i];\n            /** 同5 */\n            if(current&amp;&amp;current.then&amp;&amp;typeof current.then === 'function'){\n                /** 7 直接执行then就好 */\n                current.then(resolve,reject);\n            }else{\n                /** 8 普通值直接resolve */\n                resolve(current);\n            }\n        }\n    });\n}\n\n\n// resolve方法\nPromise.resolve = function(value){\n    return new Promise((resolve,reject)=&gt;{\n        resolve(value);\n    });\n}\n// reject方法\nPromise.reject = function(reason){\n    return new Promise((resolve,reject)=&gt;{\n        reject(reason);\n    });\n}\n\nmodule.exports = Promise;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br")])]),e("h2",{attrs:{id:"实现一个promise的延迟对象defer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现一个promise的延迟对象defer","aria-hidden":"true"}},[s._v("#")]),s._v(" 实现一个promise的延迟对象defer")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 实现一个promise的延迟对象 defer\nPromise.defer = Promise.deferred = function(){\n    let dfd = {};\n    dfd.promise = new Promise((resolve, reject)=&gt;{\n        dfd.resolve = resolve;\n        dfd.reject = reject;\n    });\n    return dfd;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"最终测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最终测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 最终测试")]),s._v(" "),e("ul",[e("li",[s._v("测试当前代码是否符合Promise/A+规范")]),s._v(" "),e("li",[s._v("全局安装 npm i -g promises-aplus-tests")]),s._v(" "),e("li",[s._v("文件所在目录运行以下命令 (例如你的文件名为:MyPrommise.js)")]),s._v(" "),e("li",[s._v("promise-aplus-tests MyPrommise.js")]),s._v(" "),e("li",[s._v("等待")]),s._v(" "),e("li",[s._v("ok.")])])])},[],!1,null,null,null);n.default=t.exports}}]);