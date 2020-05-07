(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{159:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue")]),s._v(" "),t("h2",{attrs:{id:"vue源码架构分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue源码架构分析","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue源码架构分析")]),s._v(" "),t("p",[s._v("3年前的vue\n"),t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-star.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-star.png",alt:""}})]),s._v("\n现在的vue2019.8\n"),t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-star1.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-star1.png",alt:""}})])]),s._v(" "),t("h2",{attrs:{id:"vue源码目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue源码目录结构","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue源码目录结构")]),s._v(" "),t("p",[s._v("来一张源码截图：\n"),t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-core目录.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-core%E7%9B%AE%E5%BD%95.png",alt:""}})])]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-core目录1.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-core%E7%9B%AE%E5%BD%951.png",alt:""}})])]),s._v(" "),t("p",[s._v("我们再来看一下，core 文件夹下的目录：")]),s._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-core目录2.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-core%E7%9B%AE%E5%BD%952.png",alt:""}})])]),s._v(" "),t("p",[s._v('结论：Vue.js 的组成是由 core + 对应的 "平台" 补充代码构成（独立构建和运行时构建\n只是 platforms 下 web 平台的两种选择）。')]),s._v(" "),t("blockquote",[t("p",[s._v("Vue2.0 在保持实现‘响应的数据绑定’的同时又引入了 ‘virtual-dom’,那么它是怎么实现的呢？")])]),s._v(" "),t("h2",{attrs:{id:"数据双向绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据双向绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据双向绑定")]),s._v(" "),t("p",[s._v("最浅显易懂的话："),t("strong",[s._v("数据变化更新视图，视图变化更新数据")]),s._v(" "),t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-数据双向绑定.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-%E6%95%B0%E6%8D%AE%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A.png",alt:""}})])]),s._v(" "),t("p",[s._v("也就是说")]),s._v(" "),t("ul",[t("li",[s._v("输入框内容变化时，data 中的数据同步变化。即 view => model 的变化。")]),s._v(" "),t("li",[s._v("data 中的数据变化时，文本节点的内容同步变化。即 model => view 的变化。")])]),s._v(" "),t("p",[s._v("要想实现这来个过程，关键点在于数据变化如何更新视图，因为视图变化更新数据我们可以通过事件监听的方式来实现。所以我们着重来讨论一下数据变化如何更新的视图。")]),s._v(" "),t("p",[s._v("数据更新视图的关键点在于我们如何知道数据发生了变化，只要知道数据在什么时候变了，那么问题就变得迎刃而解了，我们只需要在数据变化的时候去通知视图更新即可。")]),s._v(" "),t("h3",{attrs:{id:"让数据对象变得可观测-数据劫持-observe观察者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#让数据对象变得可观测-数据劫持-observe观察者","aria-hidden":"true"}},[s._v("#")]),s._v(" 让数据对象变得可观测 | 数据劫持 | Observe观察者")]),s._v(" "),t("p",[s._v("数据的每次读和写能够被我们看的见，即我们能够知道数据什么时候被读取了或数据什么时候被改写了，我们将其称为"),t("strong",[s._v("可观测")]),s._v("。")]),s._v(" "),t("p",[s._v("要想实现数据的可观测我们需要借助H5的一个新的方法"),t("code",[s._v("Object.definePropty")]),s._v("来实现，在MDN上是这么介绍的")]),s._v(" "),t("blockquote",[t("p",[s._v("Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。")])]),s._v(" "),t("p",[s._v("而在Vue中，Vue通过"),t("code",[s._v("Object.defineProperty()")]),s._v("设置对象的存储器属性，即"),t("code",[s._v("set")]),s._v("和"),t("code",[s._v("get")]),s._v("。这样可以拦截数据，做一些额外的事情。比如读取时，添加对该属性感兴趣的订阅者；设置/更新属性时，通知关系该属性的订阅者更新数据。")]),s._v(" "),t("p",[s._v("来上代码：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Object.defineProperty(vm, key, {\n    get: function () {\n        ///判断是否增加订阅者Watcher,这个watch而是全局唯一的\n        if (Dep.target) {\n        // JS的浏览器单线程特性，保证这个全局变量在同一时间内，\n        //只会有同一个监听器使用\n        dep.addSub(Dep.target);\n        }\n        return val;\n    },\n    set: function (newVal) {\n        if (newVal === val) return;\n        val = newVal;\n        // 作为发布者发出通知\n        dep.notify();\n    }\n})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("但是当"),t("strong",[s._v("observe一个数组时")]),s._v("：")]),s._v(" "),t("p",[s._v("对于一个对象，我们可以用这个来改写它属性的getter/setter，这样，当你改属性的值我就有办法监听到。但是对于数组就有问题了。")]),s._v(" "),t("p",[s._v("Vue的方法是，改写数组的push、pop等8个方法，让他们在执行之后通知我数组更新了（这种方法带来的后果就是你不能直接修改数组的长度或者通过下标去修改数组。参见"),t("a",{attrs:{href:"http://v1-cn.vuejs.org/guide/list.html#",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("）。这样改进之后我就不需要对数组元素进行响应式处理，只是遇到数组的时候把数组的方法变异即可。于是在用户使用数组的push、pop等方法会改变数组本身的方法时，可以监听到数组变动。听起来这好像可以用继承的方式实现: 继承数组然后在这个子类的原型上附加上变异的方法。")]),s._v(" "),t("p",[s._v("但是你需要知道的是在es5及更低版本的js里，无法完美继承数组，主要原因是Array.call(this)时，Array根本不是像一般的构造函数那样对你传进去this进行改造，而是直接返回一个新的数组。所以一般的继承方式就没法实现了。参见"),t("a",{attrs:{href:"http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),t("OutboundLink")],1),s._v("，所以出现了新建一个iframe，然后直接拿那个iframe里的数组的原型进行修改，添加自定义方法，诸如此类的hack方法，在此按下不表。")]),s._v(" "),t("p",[s._v("但是如果当前浏览器里存在__proto__这个非标准属性的话（大部分都有），那又可以有方法继承，就是创建一个继承自Array.prototype的Object: Object.create(Array.prototype)，在这个继承了数组原生方法的对象上添加方法或者覆盖原有方法，然后创建一个数组，把这个数组的__proto__指向这个对象，这样这个数组的响应式的length属性又得以保留，又获得了新的方法，而且无侵入，不会改变本来的数组原型。")]),s._v(" "),t("p",[s._v("Vue就是基于这个思想，先判断__proto__能不能用(hasProto)，如果能用，则把那个一个继承自Array.prototype的并且添加了变异方法的Object (arrayMethods)，设置为当前数组的__proto__，完成改造，如果__proto__不能用，那么就只能遍历arrayMethods就一个个的把变异方法def到数组实例上面去，这种方法效率不高，所以优先使用改造__proto__的那个方法。")]),s._v(" "),t("p",[s._v("源码里后面那句this.observeArray非常简单，for遍历传进去的value，然后对每个元素执行observe，处理之前说的数组的元素为对象或者数组的情况。好了，对于数组的讨论先打住，至于数组的变异方法怎么通知我他进行了更改之类的我们不说了，我们先说清楚对象的情况，对象说清楚了，再去看"),t("a",{attrs:{href:"https://github.com/Ma63d/vue-analysis/blob/master/vue%E6%BA%90%E7%A0%81%E6%B3%A8%E9%87%8A%E7%89%88/observer/array.js#L20-L49",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码"),t("OutboundLink")],1),s._v("就一目了然了。")]),s._v(" "),t("h3",{attrs:{id:"依赖收集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖收集","aria-hidden":"true"}},[s._v("#")]),s._v(" 依赖收集")]),s._v(" "),t("p",[s._v("完成了数据可观测，即我们知道了数据在什么时候被读写了，那么，我们酒客在数据读写的时候通知那些依赖对该数据的视图更新了，为了方便，我们需要现将所有依赖收集起来，一旦数据发生了变化，就通知视图更新。其实这就是典型的发布订阅者模式，数据变化为发布者也就是Object.definedPropty中set方法做的事情，依赖对象为"),t("strong",[s._v("订阅者")]),s._v("Watcher")]),s._v(" "),t("p",[s._v("现在我们需要一个依赖收集容器，也就是消息订阅器Dep，用来容纳所有的订阅者。订阅者Dep主要负责收集订阅者，然后当数据变化的时候执行对应订阅者的更新函数。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 订阅器：也就是存放所有watcher的地方，相当于助理\nfunction Dep() {\n    this.subs = [];\n}\n\nDep.prototype = {\n    //增加订阅者\n    addsub: function (sub) {\n        this.subs.push(sub)\n    },\n    // 通知订阅者更新\n    notify: function () {\n        //当调用notify方法的时候通知所有watch方法\n        this.subs.map(sub=>{ \n            sub.update();\n        })\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("从代码上看，我们设计了一个订阅器Dep类，该类里面定义了一些属性和方法，这里需要特别注意的是它有一个静态属性 target，这是一个全局唯一 的Watcher，这是一个非常巧妙的设计，因为在同一时间只能有一个全局的 Watcher 被计算，另外它的自身属性 subs 也是 Watcher 的数组。")]),s._v(" "),t("p",[s._v("我们将订阅器Dep添加订阅者的操作设计在getter里面，这是为了让Watcher初始化时进行触发，因此需要判断是否要添加订阅者。在setter函数里面，如果数据变化，就会去通知所有订阅者，订阅者们就会去执行对应的更新的函数。\n"),t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-双向绑定1.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A1.png",alt:""}})]),s._v("\n到此，订阅器Dep设计完毕，接下来，我们设计订阅者Watcher.")]),s._v(" "),t("h3",{attrs:{id:"订阅者watcher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#订阅者watcher","aria-hidden":"true"}},[s._v("#")]),s._v(" 订阅者Watcher")]),s._v(" "),t("p",[s._v("订阅者"),t("code",[s._v("Watcher")]),s._v("在初始化的时候需要将自己添加到Dep中，那该如何添加呢？我们已经知道监听器Observe是在get函数中执行的添加订阅者的操作，所以我们只要在订阅者Watcher初始化的时候执行对应的get函数去执行添加订阅者的操作即可，那要如何触发get函数呢，只要获取一下对应的属性值就可以触发了，这里还有一个细节要进行处理，我们只要在订阅者Watcher初始化的时候才需要添加订阅者，所以我们需要在获取对应属性值时在Dep.target上缓存下订阅者，添加订阅器成功后，再讲其去掉就可以了，")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("var uid = 0;\n// 订阅者\nfunction Watcher(vm, node, name, type) {\n    Dep.target = this;//缓存自己\n    this.name = name;\n    this.type = type;\n    this.node = node;\n    this.id = ++uid;\n    this.vm = vm;\n    //初始化更新\n    this.update();\n    Dep.target = null;//释放自己\n}\nWatcher.prototype = {\n    update: function () {\n        // 触发definedPropty添加订阅者\n        this.get();\n        if (!batcher) {\n            var batcher = new Batcher()\n        }\n        batcher.push(this)//把每一个watcher放到任务队列里边\n    },\n    cb: function () {\n        //   最终实际虚拟DOM处理的结果 只处理一次，其实就是把vm上绑定的属性值赋给节点内容\n        this.node[this.type] = this.value;\n    },\n    //获取data的属性值\n    get: function () {\n        this.value = this.vm[this.name] //触发相应属性的get\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-data.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-data.png",alt:""}})]),s._v("\n写到这是不是就完了，答案必然是没有，哈哈。如果我在一次初始化过程为data上的一个属性赋值100次，难道我们就要执行一百次么？")]),s._v(" "),t("h3",{attrs:{id:"批处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 批处理")]),s._v(" "),t("p",[s._v("答案当然不是了，当初始化或者更新时，如果已经有了这一个watcher了，就不要加入队列了，这样不管一个数据更新一次，Vue都只更新一次dom也就是只执行一次cb方法。下边是一个简版的实现方式。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('//批处理构造函数\nfunction Batcher() {\n    this.reset();\n}\nBatcher.prototype = {\n    //初始化批处理\n    reset: function () {\n        this.has = {};\n        this.queue = [];\n        this.waiting = false\n    },\n    //将事件watcher工作添加到队列里边\n    push: function (job) {\n        let id = job.id;\n        // / 如果已经有这个watcher了,\n        //就不用加入队列了,这样不管一个数据更新多少次,Vue都只更新一次dom\n        if (!this.has[id]) {\n           this.queue.push(job);\n           //设置这个watcher的ID \n           //主要是判断是否出现了循环更新:防止你更新我后我更新你,没完没了了\n           this.has[id] = true;\n           //waiting这个flag用于标记是否已经把\n           //当前的这个watcher加入到异步任务队列当中了\n            if(!this.waiting){\n                this.waiting = true;\n                if("Promise" in window){\n                    Promise.resolve().then(()=>{\n                        this.flush()\n                    })\n                }else{\n                    setTimeout(()=>{\n                        this.flush()\n                    },0)\n                }\n            }\n        }\n    },\n    //执行并且清空事件队列\n    flush:function(){\n        this.queue.forEach((job)=>{\n            job.cb()//每个watch的执行方法\n        })\n        this.reset();\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("h3",{attrs:{id:"编译器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译器","aria-hidden":"true"}},[s._v("#")]),s._v(" 编译器")]),s._v(" "),t("p",[s._v("关于编译这块vue分了两种类型，一种是文本节点，一种是元素节点\n"),t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-ast-text.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-ast-text.png",alt:""}})]),s._v("\nvue内置了这么多的指令， 这些指令都会抛出两个接口 bind 和 update，这两个接口 的作用是，编译的最后一步是 执行所有用到的指令的bind方 法，而 update 方法则是当 watcher 触发 update 时， Directive会触发指令的update 方法")]),s._v(" "),t("p",[s._v("Directive指令负责将model和DOM关联起来，在watcher触发下，它可以根据最新的数据重新编译模板，并最终重绘UI（vue2.0在重绘DOM时，采用虚拟DOM树机制，用最小的开销更新UI）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("this._directives.push(descriptor,this,node,host,scope,frag)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("1.所有 tag 为 true 的数据中的扩展对象拿出来生成一个Directive实例并添加到 _directives 中(_directives是当前vm中存储所有directive实例的地方)。")]),s._v(" "),t("li",[s._v("2.调用所有已绑定的指令的 bind 方法")]),s._v(" "),t("li",[s._v("3.实例化一个Watcher，将指令的update与watcher绑定在一起(这样就实现了 watcher接收到消息后触发的update方法，指令可以做出对应的更新视图操作)")]),s._v(" "),t("li",[s._v("4.调用指令的update，首次初始化视图")]),s._v(" "),t("li",[s._v("5.这里有一个点需要注意一下，实例化 Watcher 的时候，Watcher会将自己主动的推 入Dep依赖中")])]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。\n"),t("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/vue-core23.png"}},[t("img",{attrs:{src:"https://colastar.github.io/static/images/vue-core23.png",alt:""}})])]),s._v(" "),t("h2",{attrs:{id:"脏数据检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脏数据检查","aria-hidden":"true"}},[s._v("#")]),s._v(" 脏数据检查")]),s._v(" "),t("p",[s._v("当触发了指定事件后会进入脏数据检测，这时会调用 $digest 循环遍历所有的数据观察者，判断当前值是否和先前的值有区别，如果检测到变化的话，会调用 $watch 函数，然后再次调用 $digest 循环直到发现没有变化。循环至少为二次 ，至多为十次。")]),s._v(" "),t("p",[s._v("脏数据检测虽然存在低效的问题，但是不关心数据是通过什么方式改变的，都可以完成任务，但是这在 Vue 中的双向绑定是存在问题的。并且脏数据检测可以实现批量检测出更新的值，再去统一更新 UI，大大减少了操作 DOM 的次数。所以低效也是相对的，这就仁者见仁智者见智了。")]),s._v(" "),t("h2",{attrs:{id:"vue-use原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-use原理","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue.use原理")]),s._v(" "),t("p",[s._v("直接上源码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/ Vue源码文件路径：src/core/global-api/use.js\n\nimport { toArray } from '../util/index'\n\nexport function initUse (Vue: GlobalAPI) {\n  Vue.use = function (plugin: Function | Object) {\n    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))\n    if (installedPlugins.indexOf(plugin) > -1) {\n      return this\n    }\n\n    // additional parameters\n    const args = toArray(arguments, 1)\n    args.unshift(this)\n    if (typeof plugin.install === 'function') {\n      plugin.install.apply(plugin, args)\n    } else if (typeof plugin === 'function') {\n      plugin.apply(null, args)\n    }\n    installedPlugins.push(plugin)\n    return this\n  }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("从源码中我们可以发现vue首先判断这个插件是否被注册过，不允许重复注册。\n并且接收的"),t("code",[s._v("plugin")]),s._v("参数的限制是"),t("code",[s._v("Function | Object")]),s._v("两种类型。\n对于这两种类型有不同的处理。\n首先将我们传入的参数整理成数组 => "),t("code",[s._v("const args = toArray(arguments, 1)")]),s._v("。\n(toArray源码)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// Vue源码文件路径：src/core/shared/util.js\n\nexport function toArray (list: any, start?: number): Array<any> {\n  start = start || 0\n  let i = list.length - start\n  const ret: Array<any> = new Array(i)\n  while (i--) {\n    ret[i] = list[i + start]\n  }\n  return\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("再将Vue对象添加到这个数组的起始位置args.unshift(this),这里的this 指向Vue对象")]),s._v(" "),t("p",[s._v("如果我们传入的plugin(Vue.use的第一个参数)的install是一个方法。也就是说如果我们传入一个对象，对象中包含install方法，那么我们就调用这个plugin的install方法并将整理好的数组当成参数传入install方法中。 => "),t("code",[s._v("plugin.install.apply(plugin, args)")]),s._v("\n如果我们传入的plugin就是一个函数,那么我们就直接调用这个函数并将整理好的数组当成参数传入。 => "),t("code",[s._v("plugin.apply(null, args)")]),s._v("\n之后给这个插件添加至已经添加过的插件数组中，标示已经注册过 => "),t("code",[s._v("installedPlugins.push(plugin)")]),s._v("\n最后返回Vue对象。")]),s._v(" "),t("p",[s._v("所以如果我们需要写一个vue的插件时，只需要写一个install方法就好。")]),s._v(" "),t("h2",{attrs:{id:"proxy-与-object-defineproperty-对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy-与-object-defineproperty-对比","aria-hidden":"true"}},[s._v("#")]),s._v(" Proxy 与 Object.defineProperty 对比")]),s._v(" "),t("p",[t("code",[s._v("Object.defineProperty")]),s._v(" 虽然已经能够实现双向绑定了，但是他还是有缺陷的。")]),s._v(" "),t("p",[s._v("只能对属性进行数据劫持，所以需要深度遍历整个对象\n对于数组不能监听到数据的变化\n虽然 Vue 中确实能检测到数组数据的变化，但是其实是使用了 "),t("code",[s._v("hack")]),s._v(" 的办法，并且也是有缺陷的。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const arrayProto = Array.prototype\nexport const arrayMethods = Object.create(arrayProto)\n// hack 以下几个函数\nconst methodsToPatch = [\n  'push',\n  'pop',\n  'shift',\n  'unshift',\n  'splice',\n  'sort',\n  'reverse'\n]\nmethodsToPatch.forEach(function(method) {\n  // 获得原生函数\n  const original = arrayProto[method]\n  def(arrayMethods, method, function mutator(...args) {\n    // 调用原生函数\n    const result = original.apply(this, args)\n    const ob = this.__ob__\n    let inserted\n    switch (method) {\n      case 'push':\n      case 'unshift':\n        inserted = args\n        break\n      case 'splice':\n        inserted = args.slice(2)\n        break\n    }\n    if (inserted) ob.observeArray(inserted)\n    // 触发更新\n    ob.dep.notify()\n    return result\n  })\n})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("反观 Proxy 就没以上的问题，原生支持监听数组变化，并且可以直接对整个对象进行拦截，所以 Vue 也将在下个大版本中使用 Proxy 替换 Object.defineProperty")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("let onWatch = (obj, setBind, getLogger) => {\n  let handler = {\n    get(target, property, receiver) {\n      getLogger(target, property)\n      return Reflect.get(target, property, receiver)\n    },\n    set(target, property, value, receiver) {\n      setBind(value)\n      return Reflect.set(target, property, value)\n    }\n  }\n  return new Proxy(obj, handler)\n}\n\nlet obj = { a: 1 }\nlet value\nlet p = onWatch(\n  obj,\n  v => {\n    value = v\n  },\n  (target, property) => {\n    console.log(`Get '${property}' = ${target[property]}`)\n  }\n)\np.a = 2 // bind `value` to `2`\np.a // -> Get 'a' = 2`\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h1",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[s._v("#")]),s._v(" "),t("a",{attrs:{"data-fancybox":"",title:"Vue源码详细解析",href:"https://segmentfault.com/a/1190000008500946"}},[t("img",{attrs:{src:"https://segmentfault.com/a/1190000008500946",alt:"Vue源码详细解析"}})])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000008500946",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue源码详细解析"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"dom-diff算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-diff算法","aria-hidden":"true"}},[s._v("#")]),s._v(" DOM diff算法")]),s._v(" "),t("blockquote",[t("p",[s._v("（1）为什么有diff算法：")])]),s._v(" "),t("p",[s._v("diff算法用来修改一小段dom，不会引起dom树的重绘")]),s._v(" "),t("blockquote",[t("p",[s._v("（2）diff算法实现原理：")])]),s._v(" "),t("p",[s._v("diff算法将virtual dom的某个节点数据改变后生成的新的vnode与旧的节点比较，并替换为新的node\ndiff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。")]),s._v(" "),t("blockquote",[t("p",[s._v("（3）过程：")])]),s._v(" "),t("p",[s._v("当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。\n参考链接：https://www.cnblogs.com/wind-lanyan/p/9061684.html")]),s._v(" "),t("p",[s._v("2.vue虚拟dom")]),s._v(" "),t("p",[s._v("vdom完全是用js去实现，和宿主浏览器没有任何联系，此外得益于js的执行速度，将原本需要在真实dom进行的创建节点,删除节点,添加节点等一系列复杂的dom操作全部放到vdom中进行，这样就通过操作vdom来提高直接操作的dom的效率和性能。")])])},[],!1,null,null,null);a.default=e.exports}}]);