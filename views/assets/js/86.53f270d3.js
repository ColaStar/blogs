(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{160:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"css魔术师houdini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css魔术师houdini","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS魔术师Houdini")]),s._v(" "),a("p",[s._v("在现今的 Web 开发中，JavaScript 几乎占据所有版面，除了控制页面逻辑与操作 DOM 对象以外，连 CSS 都直接写在 JavaScript 里面了，就算浏览器都还沒有实现的特性，总会有人做出对应的 Polyfills，让你快速的将新 Feature 应用到 Production 环境中，更別提我们还有 Babel 等工具帮忙转译。")]),s._v(" "),a("p",[s._v("而 CSS 就不同了，除了制定 CSS 标准规范所需的时间外，各家浏览器的版本、实战进度差异更是旷日持久，再加上 CSS 并非 Javascript 这样的动态语言，我们无法简单的提供 Polyfills，顶多利用 PostCSS、Sass 等工具來帮我們转译出浏览器能接受的 CSS，而剩下的就是浏览器的事了。")]),s._v(" "),a("p",[s._v("这边让我们回想一下，浏览器在网頁的渲染过程中，做了哪些事情？")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/css-浏览器.png"}},[a("img",{attrs:{src:"https://colastar.github.io/static/images/css-%E6%B5%8F%E8%A7%88%E5%99%A8.png",alt:""}})])]),s._v(" "),a("p",[s._v("浏览器的 Render Pipeline 中，JavaScript 与 Style 两个阶段会解析 HTML 并为加载的 JS 与 CSS 建立 Render Tree，也就是所谓的 DOM 与 CSSOM")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/css-浏览器1.png"}},[a("img",{attrs:{src:"https://colastar.github.io/static/images/css-%E6%B5%8F%E8%A7%88%E5%99%A81.png",alt:""}})])]),s._v(" "),a("p",[s._v("而就现阶段的 Web 技术來看，开发者们能操作的就是通过 JS 去控制 DOM 与 CSSOM，來来影响页面的变化，但是对于接下來的 Layout、Paint 与 Composite 就几乎沒有控制权了。")]),s._v(" "),a("p",[s._v("既无法让各家浏览器快速并统一实战规格，亦不能轻易产生 Polyfills，所以到现在我们依然无法大胆使用 Flexbox，即便它早在 2009 年就被提出了…")]),s._v(" "),a("p",[s._v("但 CSS 并非就此驻足不前。")]),s._v(" "),a("p",[s._v("为了解決上述问题，为了让 CSS 的魔力不再浏览器把持，Houdini 就诞生了！（ Houdini 是美国的伟大魔术师，擅长逃脱术，很适合想将 CSS 从浏览器中解放的概念）")]),s._v(" "),a("h2",{attrs:{id:"css-houdini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-houdini","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS Houdini")]),s._v(" "),a("p",[s._v("CSS Houdini 是由一群來自 Mozilla, Apple, Opera, Microsoft, HP, Intel, IBM, Adobe 与 Google 的工程 师所组成的工作小组，志在建立一系列的 API，让开发者能够介入浏览器的 CSS engine，帶给开发者更多的解決方案，用来解決 CSS 长久以来的问题：")]),s._v(" "),a("ul",[a("li",[s._v("Cross-Browser isse")]),s._v(" "),a("li",[s._v("CSS Polyfill 的制作困难")])]),s._v(" "),a("p",[s._v("Houdini task force 目前起草了一些 API 规范，并逐步努力让其通过 W3C，成为真正的 Web standards。 由于都是草稿阶段，有些甚至只有规画，还未被真正写入规范，所以变动很大，有些我也不是很了解，所以就大致介绍一下，若有错误拜托务必告知！")]),s._v(" "),a("p",[s._v("另外，有兴趣的读者可以直接从这里 "),a("a",{attrs:{href:"https://dev.w3.org/houdini/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS Houdini Drafts"),a("OutboundLink")],1),s._v(" 看详细內容（ Drafts 的更新时间都非常近期，活跃中的草稿！）。")]),s._v(" "),a("p",[s._v("下面这张图我将 Google 提供的 Render pipeline 与 Houdini: Maybe The Most Exciting Development In CSS You’ve Never Heard Of 中提到的 pipeline 做个结合对比，显示出 Houdini 试图在浏览器的 Render pipeline 中提供哪些 API 给开发者使用：")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/css-浏览器2.png"}},[a("img",{attrs:{src:"https://colastar.github.io/static/images/css-%E6%B5%8F%E8%A7%88%E5%99%A82.png",alt:""}})])]),s._v(" "),a("p",[s._v("其中灰色部分就是只在规划阶段，而黃色部份就是已经写入规范正在推行中.")]),s._v(" "),a("h2",{attrs:{id:"houdini-api介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#houdini-api介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" Houdini API介绍")]),s._v(" "),a("blockquote",[a("p",[s._v("Parser、Paint、Layout API扩展css的词法分析器")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("CSS Parser API")]),s._v(" 还没有被写⼊规范，所以下⾯我要说的内容 随时都会有变化，但是它的基本思想不会变:允许开发者⾃由扩展 CSS 词法分析器，引入新的结构(constructs)， ⽐如新的媒体规则、新的伪类、嵌套、"),a("code",[s._v("@extends")]),s._v("、 "),a("code",[s._v("@apply")]),s._v(" 等等。只要新的词法分析器知道如何 解析这些新结构，CSSOM 就 不会直接忽略略它们，⽽而把这 些结构放到正确的地⽅方。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("CSS Layout API")]),s._v("允许开发 者可以通过 "),a("strong",[s._v("CSS Layout API")]),s._v(" 实现自己的布局模块 (layout module)，这⾥ 的“布局模块”指的是 "),a("code",[s._v("display")]),s._v(" 的属性值。也就是 说，这个 API 实现以后， 开发者⾸次拥有了像 CSS 原⽣代码(比如 "),a("code",[s._v("display:flex、 display:table")]),s._v(")那样的布 局能力。")])])]),s._v(" "),a("h3",{attrs:{id:"css-properties-and-values-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-properties-and-values-api","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS Properties and Values API")]),s._v(" "),a("p",[s._v("先介绍一个最能够使用的 API，除了 IE family 以外，Chrome、Firefox 与 Safari 都已经能夠直接使用了！ "),a("a",{attrs:{href:"https://caniuse.com/#search=custom%20properties",target:"_blank",rel:"noopener noreferrer"}},[s._v("caniuse"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("相信很多人都使用过 CSS Preprocessors，他给予开发者在 CSS 中使用变量的能力：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$font-size: 10px;\n$brightBlue: blue;\n.mark{\n    font-size: 1.5 * $font-size;\n    color: $brightBlue\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("但其实使用 "),a("code",[s._v("Preprocessors")]),s._v(" 还是有其缺点，像是不同的 "),a("code",[s._v("Preprocessors")]),s._v(" 就有不同的 "),a("code",[s._v("Syntax")]),s._v("，需要额外 "),a("code",[s._v("setup")]),s._v(" 与 "),a("code",[s._v("compile")]),s._v("， 而现在 CSS 已经有原生的变量可以使用了！就是 "),a("strong",[s._v("CSS Properties and Values API！")])]),s._v(" "),a("p",[s._v("SCSS 与 Native CSS Custom Properties 的一个主要差別可以看下图：\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/scss-vs-css.png"}},[a("img",{attrs:{src:"https://colastar.github.io/static/images/scss-vs-css.png",alt:""}})])]),s._v(" "),a("p",[s._v("原生的 CSS variable syntax：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/* declaration */\n--VAR_NAME: <declaration-value>;\n/* usage */\nvar(--VAR_NAME)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("变量可以定义在 root element selector 內，也能在一般 selector 內，甚至是给別的变量 reuse：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/* root element selector (全域) */\n:root {\n    --main-color: #ff00ff;\n    --main-bg: rgb(200, 255, 255);\n    --block-font-size: 1rem;\n}\n.btn__active::after{\n    --btn-text: 'This is btn';\n    /* 相等於 --box-highlight-text:'This is btn been actived'; */\n    --btn-highlight-text: var(--btn-text)' been actived';\n    content: var(--btn-highlight-text);\n    /* 也能使用 calc 來做運算 */\n    font-size: calc(var(--block-font-size)*1.5);\n}\nbody {\n    /* variable usage */\n    color: var(--main-color);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("而有了变量以后，会为 CSS 带來什么好处应该很明显，他的 Use case 可以多写一篇文章來介绍了，或是可以直接看這篇的详细介绍，我这边介绍几个我觉得比较有趣的：")]),s._v(" "),a("p",[s._v("模拟一个特殊的 CSS rule:")]),s._v(" "),a("p",[s._v("单纯透过更改变量來达到改变 "),a("code",[s._v("box-shadow")]),s._v(" 颜色")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".textBox {\n    --box-shadow-color: yellow;\n    box-shadow: 0 0 30px var(--box-shadow-color);\n}\n.textBox:hover {\n    /* box-shadow: 0 0 30px green; */\n    --box-shadow-color: green;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("此外，我们也可以用 JavaScript 来控制：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const textBox = document.querySelector('.textBox');\n// GET\nconst Bxshc = getComputedStyle(textBox).getPropertyValue('--box-shadow-color');\n// SET\ntextBox.style.setProperty('--box-shadow-color', 'new color');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("非常好用的特性，几乎所有主流浏览器都已经支持了，大家快来使用吧！")]),s._v(" "),a("h3",{attrs:{id:"box-tree-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box-tree-api","aria-hidden":"true"}},[s._v("#")]),s._v(" Box Tree API")]),s._v(" "),a("p",[s._v("Box tree API 并沒有出现在上图中，但在 Paintin API 中会用到其概念。")]),s._v(" "),a("p",[s._v("大家都知道在 DOM tree 中的每个元素都有一个 Box Modal，而在浏览器解析过程中，还会将其拆分成 fragments，至于什么是 "),a("code",[s._v("fragments")]),s._v("？以 drafts 中的例子來解释：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//html\n<div class="wrapper">\n<p>foo <i>bar baz</i></p>\n</div>\n\n//css\np::first-line { color: green; }\n\np::first-letter { color: red; }\n\n.wrapper {\n  width: 60px;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("上面的 HTML 总共就会拆出七个 "),a("code",[s._v("fragments：")])]),s._v(" "),a("ul",[a("li",[s._v("最外层的 div")]),s._v(" "),a("li",[s._v("第一行的 box (包含 foo bar)")]),s._v(" "),a("li",[s._v("第二行的 box (包含 baz)")]),s._v(" "),a("li",[s._v("吃到 ::first-line 与 ::first-letter 的 f 也会被拆出來成独立的 fragments")]),s._v(" "),a("li",[s._v("只吃到 ::first-line 的 oo 只好也独立出來")]),s._v(" "),a("li",[s._v("吃到 ::first-line 与 包在 "),a("code",[s._v("<i>")]),s._v("內的 bar 当然也是")]),s._v(" "),a("li",[s._v("在第二行底下且为 italic 的 baz")])]),s._v(" "),a("p",[s._v("而 Box tree API 目的就是希望让开发者能够取得这些 fragments 的信息，至于取得后要如何使用，基本上应该会跟后面介绍的 Parser API、Layout API 与 Paint API 有关联，当我们能取得详细的 Box Modal 信息时，要客制化 Layout Module 才更为方便。")]),s._v(" "),a("h3",{attrs:{id:"css-layout-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-layout-api","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS Layout API")]),s._v(" "),a("p",[s._v("Layout API 顾名思义就是提供开发者撰写自己的 "),a("code",[s._v("Layout module")]),s._v("，Layout module 也就是用来 "),a("code",[s._v("assign")]),s._v(" 给 "),a("code",[s._v("display")]),s._v(" 属性的值，像是"),a("code",[s._v("display: grid")]),s._v(" 或 "),a("code",[s._v("display: flex")]),s._v("。 你只要透过 "),a("code",[s._v("registerLayout")]),s._v(" 的 "),a("code",[s._v("function")]),s._v("，传入 "),a("code",[s._v("Layout")]),s._v(" 名称与 "),a("code",[s._v("JS class")]),s._v(" 来定义 "),a("code",[s._v("Layout")]),s._v(" 的逻辑即可，例如我们实战一个 "),a("code",[s._v("block-like")]),s._v(" 的 "),a("code",[s._v("Layout：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("registerLayout('block-like', class extends Layout {\n    static blockifyChildren = true;\n    static inputProperties = super.inputProperties;\n    *layout(space, children, styleMap) {\n        const inlineSize = resolveInlineSize(space, styleMap);\n        const bordersAndPadding = resolveBordersAndPadding(constraintSpace, styleMap);\n        const scrollbarSize = resolveScrollbarSize(constraintSpace, styleMap);\n        const availableInlineSize = inlineSize -\n                                    bordersAndPadding.inlineStart -\n                                    bordersAndPadding.inlineEnd -\n                                    scrollbarSize.inline;\n        const availableBlockSize = resolveBlockSize(constraintSpace, styleMap) -\n                                bordersAndPadding.blockStart -\n                                bordersAndPadding.blockEnd -\n                                scrollbarSize.block;\n        const childFragments = [];\n        const childConstraintSpace = new ConstraintSpace({\n            inlineSize: availableInlineSize,\n            blockSize: availableBlockSize,\n        });\n        let maxChildInlineSize = 0;\n        let blockOffset = bordersAndPadding.blockStart;\n        for (let child of children) {\n            const fragment = yield child.layoutNextFragment(childConstraintSpace);\n            // 這段控制 Layout 下的 children 要 inline 排列\n            // fragment 應該就是前述的 Box Tree API 內提到的 fragment\n            fragment.blockOffset = blockOffset;\n            fragment.inlineOffset = Math.max(\n                bordersAndPadding.inlineStart,\n                (availableInlineSize - fragment.inlineSize) / 2);\n            maxChildInlineSize =\n                Math.max(maxChildInlineSize, childFragments.inlineSize);\n            blockOffset += fragment.blockSize;\n        }\n        const inlineOverflowSize = maxChildInlineSize + bordersAndPadding.inlineEnd;\n        const blockOverflowSize = blockOffset + bordersAndPadding.blockEnd;\n        const blockSize = resolveBlockSize(\n            constraintSpace, styleMap, blockOverflowSize);\n        return {\n            inlineSize: inlineSize,\n            blockSize: blockSize,\n            inlineOverflowSize: inlineOverflowSize,\n            blockOverflowSize: blockOverflowSize,\n            childFragments: childFragments,\n        };\n    }\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[s._v("上面这段代码是来自 "),a("a",{attrs:{href:"https://drafts.css-houdini.org/css-layout-api/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Houdini Draft"),a("OutboundLink")],1),s._v(" 的示例，完整放上来是想给大家看一下实战一个 "),a("code",[s._v("Layout")]),s._v(" 需要注意的细节有多少，其实并不是如想像中的轻松， 相信未来会出现更多方便的 API 辅助开发。（放心接下来不会再有这么多 code 了 XD）")]),s._v(" "),a("p",[s._v("有了 Layout API，不管是自己实战或是拿別人写好的 Layout，你都可以直接如下方式使用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".wrapper {\n    display: layout('block-like');\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"css-painting-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-painting-api","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS Painting API")]),s._v(" "),a("p",[s._v("Painting API 与 Layout 类似，提供一个叫做 "),a("code",[s._v("registerPaint")]),s._v(" 的方法：")]),s._v(" "),a("p",[s._v("定义 "),a("code",[s._v("Paint Method")]),s._v("，这边偷偷用到了待会要介紹的 "),a("code",[s._v("CSS Properties")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("registerPaint('simpleRect', class {\n    static get inputProperties() { return ['--rect-color']; }\n    paint(ctx, size, properties) {\n        // 依據 properties 改變顏色\n        const color = properties.get('--rect-color');\n        ctx.fillStyle = color.cssText;\n        ctx.fillRect(0, 0, size.width, size.height);\n    }\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("宣告使用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".div-1 {\n    --rect-color: red;\n    width: 50px;\n    height: 50px;\n    background-image: paint(simpleRect);\n}\n.div-2 {\n    --rect-color: yellow;\n    width: 100px;\n    height: 100px;\n    background-size: 50% 50%;\n    background-image: paint(simpleRect);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("code",[s._v(".div-1")]),s._v(" 与 "),a("code",[s._v(".div-2")]),s._v(" 就可以拥有各自定义宽高颜色的方形 "),a("code",[s._v("background-image")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"worklets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worklets","aria-hidden":"true"}},[s._v("#")]),s._v(" Worklets")]),s._v(" "),a("p",[s._v("在上述的 "),a("code",[s._v("Layout API")]),s._v(" 与 "),a("code",[s._v("Paint API")]),s._v(" 中，我们都有撰写一个 JS文件，用来定义新的属性，然后在 CSS 文件中呼叫取用，你可能会觉得那个 JS 文件就直接像一般 Web 嵌入 JS 的方式一样即可， 但实际上并非如此，我们需要通过 "),a("code",[s._v("Worklets")]),s._v(" 來帮我們载入。以上面的 Paint API 为例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// add a Worklet\npaintWorklet.addModule('simpleRect.js');\n// WORKLET \"simpleRect.js\"\nregisterPaint('simpleRect', class {\n    static get inputProperties() { return ['--rect-color']; }\n    paint(ctx, size, properties) {\n        // 依據 properties 改變顏色\n        const color = properties.get('--rect-color');\n        ctx.fillStyle = color.cssText;\n        ctx.fillRect(0, 0, size.width, size.height);\n    }\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("同理，Layout API 则是 "),a("code",[s._v("layoutWorklet.addModule('blockLike.js')")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("Worklets")]),s._v(" 光名字就有点像 "),a("code",[s._v("Web Worker")]),s._v(" 了，都是独立于主要执行者之外，并且不直接与 DOM 互动。你可能会想那为何还需要有一個 Worklets？")]),s._v(" "),a("p",[s._v("因为 Houdini 是希望将开发者的程式码 hook 到 CSS engine 中运作，而根据规范內的叙述，web worker 相对笨重，不适合用来处理 CSS engine 這种可能会牵扯到数百万像素图片的工作。")]),s._v(" "),a("p",[s._v("所以可以推断，Worklets 的特点就是轻量以及生命周期较短。")]),s._v(" "),a("p",[s._v("共实除了 Layout Worklets 与 Paint Worklets 外，还有所谓的 Animation Worklet，虽然还沒有放入规范，但已经有在着手进行中，也有 "),a("a",{attrs:{href:"https://github.com/GoogleChrome/houdini-samples/tree/master/animation-worklet",target:"_blank",rel:"noopener noreferrer"}},[s._v("Polyfills"),a("OutboundLink")],1),s._v(" 了，Chrome 的 Sticky Header 就是采用 Houdini 的 Animation Worklet。Twitter 的 "),a("a",{attrs:{href:"https://blog.hospodarets.com/demos/houdini-anim-twitter/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Header Effect"),a("OutboundLink")],1),s._v(" 也是采用 Animation Worklet Animation Worklet 是想介入 Render Pipeline 中的 Composite 步骤，也就是原本利用 JS 与 CSS 控制动画时，浏览器会重新执行的部分。")]),s._v(" "),a("p",[s._v("关于 Animation Worklet 的详细操作介绍可以看这份PPT: "),a("a",{attrs:{href:"https://slides.com/malyw/houdini-codemotion#/48",target:"_blank",rel:"noopener noreferrer"}},[s._v("houdini-codemotion"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"css-parser-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-parser-api","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS Parser API")]),s._v(" "),a("p",[s._v("Parser API 目前还是处在 Unofficial draft，但我相信如果这个 API 确认的话，对前端开发有绝对的帮助，她的概念是想让开发者能扩充浏览器解析 HTML、CSS 的功能， 也就是说，你可以想办法让他看得懂最新定义的 pseudo-classes 或甚至是 element-queries 等等，这样就能正确解析出 CSSOM，从此不用再等浏览器更新。")]),s._v(" "),a("h3",{attrs:{id:"css-typed-om"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-typed-om","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS Typed OM")]),s._v(" "),a("p",[s._v("CSS Typed OM 就是 CSSOM 的強化版，最主要的功能在于将 CSSOM 所使用的字串值转换成具有型別意义的 JavaScript 表示形态，像是所有的 CSS Values 都有一个 base class interface：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface CSSStyleValue {\n    stringifier;\n    static CSSStyleValue? parse(DOMString property, DOMString cssText);\n    static sequence<CSSStyleValue>? parseAll(DOMString property, DOMString cssText);\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("你可以如下操作 CSS style: "),a("a",{attrs:{href:"https://slides.com/malyw/houdini-codemotion#/27",target:"_blank",rel:"noopener noreferrer"}},[s._v("(source from CSS Houdini- the bridge between CSS, JavaScript and the browser)"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// CSS -> JS\nconst map = document.querySelector(\'.example\').styleMap;\nconsole.log( map.get(\'font-size\') );\n// CSSSimpleLength {value: 12, type: "px", cssText: "12px"}\n// JS -> JS\nconsole.log( new CSSUnitValue(5, "px") );\n// CSSUnitValue{value:5,unit:"px",type:"length",cssText:"5px"}\n// JS -> CSS\n// set style "transform: translate3d(0px, -72.0588%, 0px);"\nelem.outputStyleMap.set(\'transform\',\n    new CSSTransformValue([\n        new CSSTranslation(\n        0, new CSSSimpleLength(100 - currentPercent, \'%\'), 0\n        )]));\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("根据 "),a("a",{attrs:{href:"https://drafts.css-houdini.org/css-typed-om/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Drafts"),a("OutboundLink")],1),s._v(" 的內容，有了型別定义，在 JavaScript 的操作上据说会有性能上的显著提升。此外，CSS Typed OM 也应用在 Parser API 与 CSS Properties API 上。")]),s._v(" "),a("p",[s._v("Font Metrics API\nFont Metrics 也沒有出現在上方的 Houdini API on render pipeline 中，但它其实已经被写入 Draft 规范 中了。")]),s._v(" "),a("p",[s._v("老实说看不是很懂他的 spec 写的內容，但我猜测这东西的用途应该跟这篇文章 "),a("a",{attrs:{href:"https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align",target:"_blank",rel:"noopener noreferrer"}},[s._v("Deep dive CSS: font metrics, line-height and vertical-align"),a("OutboundLink")],1),s._v(" 其中提到一个问题有关，（里面非常详细的介绍了 font metrics、line-height 与 vertical-align 在网页上如何互相影响，推荐大家有空的话耐心阅读一番。）：")]),s._v(" "),a("p",[s._v("不同 "),a("code",[s._v("font-family")]),s._v(" 在相同 "),a("code",[s._v("font-size")]),s._v(" 下，所产生的 "),a("code",[s._v("span")]),s._v(" 高度会不同。")]),s._v(" "),a("p",[s._v("要想控制 Font metrics，也就是控制字所占的宽高的话，目前可以先用 CSS Properties 來处理，根据已知字体的 font-metrics 动态算出我们要 apply 多少的 font-size：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("p {\n    /* 定義好我們已知字型的 Font metrics */\n    /* font metrics */\n    --font: Catamaran;\n    --fm-capitalHeight: 0.68;\n    --fm-descender: 0.54;\n    --fm-ascender: 1.1;\n    --fm-linegap: 0;\n    /* 定義想要的高度 */\n    --capital-height: 100;\n    /* 設定 font-family */\n    font-family: var(--font);\n    /* 利用 Font metrics 的資訊與想定義的高度來計算出 font-size */\n    --computedFontSize: (var(--capital-height) / var(--fm-capitalHeight));\n    font-size: calc(var(--computedFontSize) * 1px);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("而想必 "),a("code",[s._v("Font Metrics API")]),s._v("就是希望能 expose 出更方便的 API 來达成上述的事情。")]),s._v(" "),a("p",[s._v("总结")]),s._v(" "),a("p",[s._v("手动拼接字符串和各种奇怪错误的日子已经结束了!")]),s._v(" "),a("ul",[a("li",[s._v("更少的bug。例如数字值总是以数字形式返回，而不是字符串。")]),s._v(" "),a("li",[s._v("el.style.opacity += 0.1; el.style.opacity === '0.30.1' // dragons!")]),s._v(" "),a("li",[s._v("算术运算和单位转换。在绝对长度单位(例如 px -> cm)之间进行转换并进行基本的数学运算。")]),s._v(" "),a("li",[s._v("数值范围限制和舍入。Typed OM 通过对值进行范围限制和舍入，以使其在属性的可接受范围内。")]),s._v(" "),a("li",[s._v("更好的性能。浏览器必须做更少的工作序列化和反序列化字符串值。现在，对于 CSS 值，引擎可以对 JS\n和 C++ 使用相似的理解。Tab Akins 已经展示了一些早期的性能基准测试，与使用旧的 CSSOM 和字符串相 比，Typed OM 的运行速度快了 ~30%。这对使用 requestionAnimationFrame() 处理快速 CSS 动画可能很重 要 。crbug.com/808933 可以追踪 Blink 的更多性能演示。")]),s._v(" "),a("li",[s._v("错误处理。新的解析方法带来了 CSS 世界中的错误处理。")]),s._v(" "),a("li",[s._v("“我应该使用骆驼式的 CSS 名称还是字符串呢?” 你不再需要猜测名字是骆驼还或字符串(例如 el.style.backgroundColor vs el.style['background-color'])。Typed OM 中的 CSS 属性名称始终是字符串，与 您实际在 CSS 中编写的内容一致:)")])])])},[],!1,null,null,null);e.default=t.exports}}]);