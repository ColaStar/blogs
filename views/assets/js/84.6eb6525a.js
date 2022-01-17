(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{489:function(s,n,a){"use strict";a.r(n);var e=a(56),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前端中的-ioc-理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端中的-ioc-理念"}},[s._v("#")]),s._v(" 前端中的 IoC 理念")]),s._v(" "),a("p",[s._v("IoC 的全称叫做 Inversion of Control，可翻译为为「控制反转」或「依赖倒置」，它主要包含了"),a("strong",[s._v("三个准则")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("1.高层次模块不应该依赖低层次模块，俩者应该依赖抽象；")]),s._v(" "),a("li",[s._v("抽象不应该依赖于具体实现，具体实现应该依赖于抽象；")]),s._v(" "),a("li",[s._v("面向接口编程而不是面向实现编程。")])]),s._v(" "),a("h2",{attrs:{id:"目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[s._v("#")]),s._v(" 目的")]),s._v(" "),a("p",[s._v("根据概念可以看到最主要的目的就是降低耦合，提高扩展性。")]),s._v(" "),a("p",[s._v("想象一下多个模块的场景：")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/ioc.png"}},[a("img",{attrs:{src:"https://colastar.github.io/static/images/ioc.png",alt:""}})])]),s._v(" "),a("p",[s._v("这里除了耦合之外，不同齿轮之间的依赖关系也是个头疼的问题，迭代个几个版本之后发现，这是什么东西，一动就有bug。。。。")]),s._v(" "),a("p",[s._v("所以IOC就是来解决上述问题的。\n其常见方式是依赖注入和依赖查找。在js领域里面最出名的就是angular中大量使用了依赖注入。文字比较苍白，我们可以通过例子来看看。")]),s._v(" "),a("h2",{attrs:{id:"例子一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子一"}},[s._v("#")]),s._v(" 例子一")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//球队信息\nclass Team{\n    constructor(){\n       this.name = '火箭'\n    }\n}\n//球员信息\nclass Player{\n    constructor(){\n        this.team = new Team()\n    }\n    info(){\n      console.log(this.team.name)\n    }\n}\n// 球员ym\nlet ym = new Player()\nym.info() // ‘火箭’\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("看起来挺好的，球员player依赖于某个球队RTeam\n当调用的时候主动去加载球队即可。此时的控制权在player这里。")]),s._v(" "),a("p",[s._v("假如这个时候,球员发生交易了，球队信息更换了，转换到team2了。\n这时候我们就需要去修改player里的代码了，因为球员那里直接写死了对Team的依赖，这种可扩展性是很差的。\n这不是我们所想要的，需要重新思考下依赖关系处理了。\n球员和球队之间非得这么直接粗暴的发生联系吗，\n一个球员对应一个球队的话，未来会发生变化的可能性太大了，毕竟不止一个球队。")]),s._v(" "),a("p",[s._v("如果两者之间不直接发生联系，中间就需要一个中间模块来负责两者关系的处理\n球员不关注球队从哪来，只要给到我就行了。\n这样控制权就不是直接落在player这里了，这正是IOC的设计思路。")]),s._v(" "),a("p",[s._v("参照IOC的几条原则，我们进行下改进。")]),s._v(" "),a("p",[s._v("高层模块不应该依赖低层模块。两个都应该依赖抽象\n这里player是高层模块，直接依赖了球队这个低级模块。所以我们将两者解耦，player不再直接依赖于该team这个class")]),s._v(" "),a("p",[s._v("抽象不应该依赖具体实现，具体实现应该依赖抽象\n具体到这里来看我们的player模块不应该直接依赖具体team，而是通过构造函数将抽象的teaminfo实例传递进去，这样就解耦具体实现。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 球队信息不依赖具体实现\n// 面向接口即面向抽象编程\nclass TeamInfo {\n    constructor(name) {\n        this.name = name\n    }\n}\nclass Player {\n    // 此处的参数，是teamInfo的一个实例，不直接依赖具体的实例\n    // 面向抽象\n    constructor(team) {\n        this.team = team\n    }\n    info() {\n        console.log(this.team.name)\n    }\n}\n// 将依赖关系放到此处来管理，控制权也放到此处\n// Player和TeamInfo之间不再有直接依赖\n// 原本直接掌握teaminfo控制权的player不再直接依赖\n// 将依赖控制，落在此处(第三方模块专门管理)即为控制反转\nvar ym = new Player(new TeamInfo('火箭'))\nym.info()\nvar kobe = new Player(new TeamInfo('湖人'))\nkobe.info()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("这里发现，TeamInfo和Player之间已经没有直接关联了，依赖关系统一放到getTeamInfo中。\n所谓控制反转就如何上面一样，将依赖的控制权由player转移到其他地方即我们专门的依赖管理来做了。\n这样再增加一个team3，改动也不大，复用就行了。\n其中之间的关系，如下面这个图：")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/ioc2.png"}},[a("img",{attrs:{src:"https://colastar.github.io/static/images/ioc2.png",alt:""}})])]),s._v(" "),a("p",[s._v("彼此不直接发生联系，依赖关系统一在中间模块来管理，更加清晰。")]),s._v(" "),a("h2",{attrs:{id:"例子二app-use实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子二app-use实现"}},[s._v("#")]),s._v(" 例子二App.use实现")]),s._v(" "),a("p",[s._v("假设需要构建一款应用叫 App，它包含一个路由模块 Router 和一个页面监控模块 Track，一开始可能会这么实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// app.js\nimport Router from './modules/Router';\nimport Track from './modules/Track';\nclass App {\n    constructor(options) {\n        this.options = options;\n        this.router = new Router();\n        this.track = new Track();\n        this.init();\n    }\n    init() {\n        window.addEventListener('DOMContentLoaded', () => {\n            this.router.to('home');\n            this.track.tracking();\n            this.options.onReady();\n        });\n    }\n}\n\n// index.js\nimport App from 'path/to/App';\nnew App({\n    onReady() {\n        // do something here...\n    },\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("嗯，看起来没什么问题，但是实际应用中需求是非常多变的，可能需要给路由新增功能（比如实现 history 模式）或者更新配置（启用 history, new Router({ mode: 'history' })）。这就不得不在 App 内部去修改这两个模块，这是一个 INNER BREAKING 的操作，而对于之前测试通过了的 App 来说，也必须重新测试。")]),s._v(" "),a("p",[s._v("很明显，这不是一个好的应用结构，高层次的模块 App 依赖了两个低层次的模块 Router 和 Track，对低层次模块的修改都会影响高层次的模块 App。那么如何解决这个问题呢，解决方案就是接下来要讲述的 "),a("strong",[s._v("依赖注入")]),a("code",[s._v("（Dependency Injection）")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"什么是依赖注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是依赖注入"}},[s._v("#")]),s._v(" 什么是依赖注入？")]),s._v(" "),a("p",[s._v("所谓的依赖注入，简单来说就是把高层模块所依赖的模块通过传参的方式把依赖「注入」到模块内部，上面的代码可以通过依赖注入的方式最终改造成如下方式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// app.js\nclass App {\n    constructor(options) {\n        this.options = options;\n        this.router = options.router;\n        this.track = options.track\n        this.init();\n    }\n    init() {\n        window.addEventListener('DOMContentLoaded', () => {\n            this.router.to('home');\n            this.track.tracking();\n            this.options.onReady();\n        });\n    }\n}\n// index.js\n\nimport App from 'path/to/App';\nimport Router from './modules/Router';\nimport Track from './modules/Track';\nnew App({\n    router: new Router(),\n    track: new Track(),\n    onReady() {\n        // do something here...\n    },\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("可以看到，通过依赖注入解决了上面所说的 "),a("code",[s._v("INNER BREAKING")]),s._v(" 的问题，可以直接在 "),a("code",[s._v("App")]),s._v(" 外部对各个模块进行修改而不影响内部。")]),s._v(" "),a("p",[s._v("是不是就万事大吉了？理想很丰满，但现实却是很骨感的，没过两天产品就给你提了一个新需求，给 "),a("code",[s._v("App")]),s._v("添加一个分享模块 "),a("code",[s._v("Share")]),s._v("。这样的话又回到了上面所提到的 "),a("code",[s._v("INNER BREAKING")]),s._v("的问题上：你不得不对 "),a("code",[s._v("App")]),s._v("模块进行修改加上一行 "),a("code",[s._v("this.share = options.share")]),s._v("，这明显不是我们所期望的。")]),s._v(" "),a("p",[s._v("虽然 App 通过依赖注入的方式在一定程度上解耦了与其他几个模块的依赖关系，但是还不够彻底，其中的 "),a("code",[s._v("this.router")]),s._v("和 "),a("code",[s._v("this.track")]),s._v(" 等属性其实都还是对「具体实现的依赖，明显违背了 "),a("code",[s._v("IoC")]),s._v(" 思想的准则，那如何进一步抽象 App 模块呢。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class App {\n    static modules = []\n    constructor(options) {\n        this.options = options;\n        this.init();\n    }\n    init() {\n        window.addEventListener('DOMContentLoaded', () => {\n            this.initModules();\n            this.options.onReady(this);\n        });\n    }\n    static use(module) {\n        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);\n    }\n    initModules() {\n        App.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));\n\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("经过改造后 App 内已经没有「具体实现」了，看不到任何业务代码了，那么如何使用 App 来管理我们的依赖呢：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// modules/Router.js\nimport Router from 'path/to/Router';\nexport default {\n    init(app) {\n        app.router = new Router(app.options.router);\n        app.router.to('home');\n    }\n};\n\n// modules/Track.js\nimport Track from 'path/to/Track';\nexport default {\n    init(app) {\n        app.track = new Track(app.options.track);\n        app.track.tracking();\n    }\n};\n// index.js\nimport App from 'path/to/App';\nimport Router from './modules/Router';\nimport Track from './modules/Track';\nApp.use([Router, Track]);\nnew App({\n    router: {\n        mode: 'history',\n    },\n    track: {\n        // ...\n    },\n    onReady(app) {\n        // app.options ...\n    },\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("可以发现 "),a("code",[s._v("App")]),s._v(" 模块在使用上也非常的方便，通过 "),a("code",[s._v("App.use()")]),s._v(" 方法来「注入」依赖，在 "),a("code",[s._v("./modules/some-module.js")]),s._v(" 中按照一定的「约定」去初始化相关配置，比如此时需要新增一个 "),a("code",[s._v("Share")]),s._v(" 模块的话，无需到 "),a("code",[s._v("App")]),s._v("内部去修改内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// modules/Share.js\nimport Share from 'path/to/Share';\nexport default {\n    init(app) {\n        app.share = new Share();\n        app.setShare = data => app.share.setShare(data);\n    }\n};\n// index.js\nApp.use(Share);\nnew App({\n    // ...\n    onReady(app) {\n        app.setShare({\n            title: 'Hello IoC.',\n            description: 'description here...',\n            // some other data here...\n        });\n    }\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("直接在 "),a("code",[s._v("App")]),s._v(" 外部去 "),a("code",[s._v("use")]),s._v(" 这个 "),a("code",[s._v("Share")]),s._v(" 模块即可，对模块的注入和配置极为方便。")]),s._v(" "),a("p",[s._v("那么在 "),a("code",[s._v("App")]),s._v(" 内部到底做了哪些工作呢，首先从 "),a("code",[s._v("App.use")]),s._v(" 方法说起：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class App {\n    static modules = []\n    static use(module) {\n        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("可以很清楚的发现，"),a("code",[s._v("App.use")]),s._v(" 做了一件非常简单的事情，就是把依赖保存在了 "),a("code",[s._v("App.modules")]),s._v(" 属性中，等待后续初始化模块的时候被调用。")]),s._v(" "),a("p",[s._v("接下来我们看一下模块初始化方法 "),a("code",[s._v("this.initModules()")]),s._v(" 具体做了什么事情：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class App {\n    initModules() {\n        App.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("可以发现该方法同样做了一件非常简单的事情，就是遍历 "),a("code",[s._v("App.modules")]),s._v(" 中所有的模块，判断模块是否包含 "),a("code",[s._v("init")]),s._v(" 属性且该属性必须是一个函数，如果判断通过的话，该方法就会去执行模块的 "),a("code",[s._v("init")]),s._v(" 方法并把 "),a("code",[s._v("App")]),s._v(" 的实例 "),a("code",[s._v("this")]),s._v(" 传入其中，以便在模块中引用它。")]),s._v(" "),a("p",[s._v("从这个方法中可以看出，要实现一个可以被 "),a("code",[s._v("App.use()")]),s._v(" 的模块，就必须满足两个「约定」：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("模块必须包含 init 属性")])]),s._v(" "),a("li",[a("p",[s._v("init 必须是一个函数")])])]),s._v(" "),a("p",[s._v("这其实就是 "),a("code",[s._v("IoC")]),s._v("思想中对「面向接口编程 而不要面向实现编程」这一准则的很好的体现。"),a("code",[s._v("App")]),s._v("不关心模块具体实现了什么，只要满足对 接口 "),a("code",[s._v("init")]),s._v(" 的「约定」就可以了。")]),s._v(" "),a("p",[a("code",[s._v("App")]),s._v("模块此时应该称之为「容器」比较合适了，跟业务已经没有任何关系了，它仅仅只是提供了一些方法来辅助管理注入的依赖和控制模块如何执行。")]),s._v(" "),a("p",[a("strong",[s._v("控制反转")]),s._v("（"),a("code",[s._v("Inversion of Control")]),s._v("）是一种「思想」，"),a("strong",[s._v("依赖注入")]),s._v("（"),a("code",[s._v("Dependency Injection")]),s._v("）则是这一思想的一种具体「实现方式」，而这里的 "),a("code",[s._v("App")]),s._v(" 则是辅助依赖管理的一个「容器」。")]),s._v(" "),a("p",[s._v("是不是很熟悉，vue、koa、express里的app.use就是这么实现的")])])}),[],!1,null,null,null);n.default=t.exports}}]);