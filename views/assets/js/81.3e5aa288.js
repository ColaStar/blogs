(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{151:function(s,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"css工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css工作流","aria-hidden":"true"}},[s._v("#")]),s._v(" css工作流")]),s._v(" "),e("blockquote",[e("p",[s._v("写CSS是快乐的还是痛苦的？")])]),s._v(" "),e("p",[s._v("有时候我们可能会因为CSS不是一门正统的编程语言而不重视它(我自己也是)，我总觉得写CSS是痛苦的，每天做着重复性的工作，没有大神的奇淫技巧也没有特别亮眼的特效，总是围绕着那几个CSS属性转。相信有很多人和我一样，把更多的精力放在JavaScript上面，每次再写CSS的时候我都感觉是痛苦的，但是现在随着自身能力的提升和各种奇淫技巧以及面向未来的CSS的发展让CSS更加的趋向于一门真正的编程语言，让我又重新爱上了它。")]),s._v(" "),e("blockquote",[e("p",[s._v("CSS Workflow\n相信很多同胞和我一样不满足CSS的现状，使用一些CSS预处理器进行编程。什么是预处理器，什么是CSS Workflow？")])]),s._v(" "),e("h2",{attrs:{id:"workflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workflow","aria-hidden":"true"}},[s._v("#")]),s._v(" Workflow")]),s._v(" "),e("p",[s._v("Workflow顾名思义就是工作流。现代化项目都是通过自动化构建工具来完成的，例如Webpack，CSS Workflow也就是在项目构建过程中处理CSS的一系列流程。")]),s._v(" "),e("p",[s._v("处理CSS流程包括两方面")]),s._v(" "),e("ul",[e("li",[s._v("CSS 预处理器")]),s._v(" "),e("li",[s._v("CSS 后处理器")])]),s._v(" "),e("p",[e("img",{attrs:{src:"css-workflow.png",alt:""}})]),s._v(" "),e("p",[s._v("处理CSS就可以看做上图的一条河流，CSS预处理器就是在开始的时候处理源程序，把预处理器源程序处理成浏览器所能解析的CSS代码；在这条河流中有些CSS代码浏览器还不认得，因此必须要在输出浏览器之前做最后一次处理(例如：加浏览器前缀)，这就是后处理器的作用。")]),s._v(" "),e("blockquote",[e("p",[s._v("常用的CSS预处理器有：\n"),e("img",{attrs:{src:"css-%E9%A2%84%E5%A4%84%E7%90%86.png",alt:""}})])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Less"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Stylus"),e("OutboundLink")],1)])]),s._v(" "),e("blockquote",[e("p",[s._v("常用的CSS后处理器(貌似只有一个)有：")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.postcss.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("关于PostCSS后面详细介绍。")]),s._v(" "),e("h2",{attrs:{id:"预处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预处理器","aria-hidden":"true"}},[s._v("#")]),s._v(" 预处理器")]),s._v(" "),e("p",[s._v("CSS预处理器可以说让我们以一种编程语言的方式来写CSS，常见的CSS预处理器都会有以下特性：")]),s._v(" "),e("ul",[e("li",[s._v("变量")]),s._v(" "),e("li",[s._v("混合(Mixin) Extends")]),s._v(" "),e("li",[s._v("嵌套规则")]),s._v(" "),e("li",[s._v("运算")]),s._v(" "),e("li",[s._v("函数")]),s._v(" "),e("li",[s._v("Namespace 和 Accessors")]),s._v(" "),e("li",[s._v("scope")]),s._v(" "),e("li",[s._v("注释")])]),s._v(" "),e("h2",{attrs:{id:"后处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后处理器","aria-hidden":"true"}},[s._v("#")]),s._v(" 后处理器")]),s._v(" "),e("p",[s._v("后处理器一般都是对CSS做最终的处理：")]),s._v(" "),e("ul",[e("li",[s._v("CSS压缩 clean-css")]),s._v(" "),e("li",[s._v("自动添加浏览器前缀 autprefixe")]),s._v(" "),e("li",[s._v("css更加美观排序 csscomb")]),s._v(" "),e("li",[s._v("Rework取代Stylus 后处理器发热")]),s._v(" "),e("li",[s._v("前后通吃 PostCSS")])]),s._v(" "),e("blockquote",[e("p",[s._v("后处理的过程\n抽象语法树(Abstract Syntax Tree ，AST)作为程序的一种中间表示形式\n把css拿过来解析成AST语法树后通过一些手段转换为优化过的css如下图\n"),e("img",{attrs:{src:"css-%E5%90%8E%E5%A4%84%E7%90%86.png",alt:""}})])]),s._v(" "),e("h2",{attrs:{id:"workflow-流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workflow-流程","aria-hidden":"true"}},[s._v("#")]),s._v(" Workflow 流程")]),s._v(" "),e("p",[s._v("在自动化构建工具中处理CSS的流程可以分为两个方面：")]),s._v(" "),e("p",[s._v("预处理器处理")]),s._v(" "),e("p",[s._v("后处理器处理")]),s._v(" "),e("h2",{attrs:{id:"css-next"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-next","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS-Next")]),s._v(" "),e("p",[s._v("PostCSS可以说是目前最重要的一个东西了，为什么重要，看"),e("a",{attrs:{href:"https://cssnext.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-next"),e("OutboundLink")],1),s._v("官网的一句话就知道了。")]),s._v(" "),e("blockquote",[e("p",[s._v("Use tomorrow’s CSS today!")])]),s._v(" "),e("p",[s._v("使用明天的CSS，也就是下一代CSS。")]),s._v(" "),e("p",[s._v("有很多人知道现代化的CSS出现了变量并且浏览器原生支持，没错这就是CSS的下一个版本。")]),s._v(" "),e("p",[s._v("CSS的下一个版本完全有了CSS预处理器的能力，目前为止有很多语法还在stage阶段有些语法浏览器还不能很好的解析，因此需要PostCSS的一个插件"),e("code",[s._v("postcss-preset-env")]),s._v("来解析成当前浏览器可以解析的"),e("code",[s._v("CSS")]),s._v("，相当与"),e("code",[s._v("JavaScript")]),s._v("的"),e("code",[s._v("babel")]),s._v("。")]),s._v(" "),e("h3",{attrs:{id:"变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),e("p",[s._v("新一代的CSS有了变量的功能")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//在root中定义的变量为全局变量\n:root{\n    //定义一个变量\n    --color:red;\n}\ndiv {\n    //定义一个局部变量\n    --size: 10px;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("如何使用一个变量？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("div{\n    //使用一个变量需要通过var方法\n    background-color:var(--color);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("变量的默认值")])]),s._v(" "),e("p",[s._v("使用变量是可以指定默认值的，只有当变量不生效的时候，默认值才会生效。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("div{\n    background-color:var(--color,red);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("上面代码指定了变量的默认值，当–color变量不生效的时候，div的背景为红色。")]),s._v(" "),e("blockquote",[e("p",[s._v("定义变量规则\n使用变量可以定义一种规则，可以说是更强大的变量，有代码复用的特点。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":root {\n    //定义垂直居中的规则\n    --centered {\n        dispaly:flex;\n        justify-content: center;\n        align-items: center;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("如何使用？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("div{\n    //使用@apply规则调用\n    @apply --centered;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("@apply规则默认是不可以被PostCSS解析的，因此需要安装"),e("code",[s._v("postcss-apply")]),s._v("插件。")]),s._v(" "),e("h3",{attrs:{id:"自定义媒体查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义媒体查询","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义媒体查询")]),s._v(" "),e("p",[s._v("现代化的CSS不仅可以定义变量，而且可以自定义媒体查询。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//1、@custom-media 自定义媒体查询\n//2、自定义媒体查询的名称遵循定义变量的规范。\n@custom-media --viewport-medium (width <= 50rem)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如何使用?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@media (--viewport-medium) {\n    body{\n        background-color:red;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"自定义选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义选择器","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义选择器")]),s._v(" "),e("p",[s._v("现代化CSS提供自定义选择器。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//1、使用@custom-selector规则来定义自定义选择器\n//2、自定义选择器的名称必须遵守下面定义的规则\n@custon-selector :--heading h1,h2,h3,h4,h5,h6;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("自定义选择器相当与对一系列选择器做一下代理，通过自定义选择器去设置其他选择器的属性。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(":--heading {\n    margin: 0;\n    padding: 0;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#嵌套","aria-hidden":"true"}},[s._v("#")]),s._v(" 嵌套")]),s._v(" "),e("p",[s._v("现代化CSS同样支持众多CSS预处理器中的嵌套写法。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("a{\n    color: rgb(0 0 100%/90%);\n    &:hover{\n        color:red;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("编译后就是")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("a{\n    color: rgba(0, 0, 255, 0.9)\n}\na:hover{\n    color:red;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断","aria-hidden":"true"}},[s._v("#")]),s._v(" 判断")]),s._v(" "),e("p",[s._v("现在现代化的CSS也是出了"),e("code",[s._v("@when/@else")]),s._v("这种方式支持判断，但是在"),e("code",[s._v("stage-0")]),s._v("阶段，我也没能"),e("code",[s._v("postcss-preset-env")]),s._v("编译掉它(我个人觉得是判断处于运行时的缘故)，只能期待浏览器的支持。")]),s._v(" "),e("p",[s._v("虽然上述方法不可用，但是也是有办法的，使用"),e("code",[s._v("@supports")]),s._v("这个规则也可以实现判断的效果。")]),s._v(" "),e("p",[e("code",[s._v("@supports")]),s._v("是一个方法，只有当参数为真的时候才会执行后面代码。这样就可以模拟判断。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("body{\n    background-color:green;\n}\n@supports(display:flex) {\n    body{\n        background-color:red;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("上面代码当浏览器不支持display的时候背景为绿色，当支持的时候，下面的body中定义的背景颜色会覆盖上面，达到了判断的效果。这种方式也是渐进增强的方式。")]),s._v(" "),e("p",[s._v("另外附上"),e("code",[s._v("@when/@else")]),s._v("的写法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@when supports(display:flex) {\n    body {\n        background-color: red;\n    }\n}@else {\n    body {\n        background-color: yellow;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("这种方式就看着舒服多了，也是通过"),e("code",[s._v("supports")]),s._v("判断是否为真。")]),s._v(" "),e("h3",{attrs:{id:"正则匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则匹配","aria-hidden":"true"}},[s._v("#")]),s._v(" 正则匹配")]),s._v(" "),e("p",[s._v("现代化的CSS在发展过程中有两种正则匹配的方式：")]),s._v(" "),e("ul",[e("li",[s._v("类似正则表达式的方式匹配。")]),s._v(" "),e("li",[s._v("使用正则方法匹配。")])]),s._v(" "),e("blockquote",[e("p",[s._v("类似正则表达式\n这种方式类似于JavaScript中的正则表达式。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// i的意思是不区分大小写\n[frame=hsides i]{\n  background-color:red;\n}\n\n匹配的结果\n\n[frame=hsides],[frame=Hsides],[frame=hSides],[frame=HSides],[frame=hsIdes],[frame=HsIdes],[frame=hSIdes],[frame=HSIdes],[frame=hsiDes],[frame=HsiDes],[frame=hSiDes],[frame=HSiDes],[frame=hsIDes],[frame=HsIDes],[frame=hSIDes],[frame=HSIDes],[frame=hsidEs],[frame=HsidEs],[frame=hSidEs],[frame=HSidEs],[frame=hsIdEs],[frame=HsIdEs],[frame=hSIdEs],[frame=HSIdEs],[frame=hsiDEs],[frame=HsiDEs],[frame=hSiDEs],[frame=HSiDEs],[frame=hsIDEs],[frame=HsIDEs],[frame=hSIDEs],[frame=HSIDEs],[frame=hsideS],[frame=HsideS],[frame=hSideS],[frame=HSideS],[frame=hsIdeS],[frame=HsIdeS],[frame=hSIdeS],[frame=HSIdeS],[frame=hsiDeS],[frame=HsiDeS],[frame=hSiDeS],[frame=HSiDeS],[frame=hsIDeS],[frame=HsIDeS],[frame=hSIDeS],[frame=HSIDeS],[frame=hsidES],[frame=HsidES],[frame=hSidES],[frame=HSidES],[frame=hsIdES],[frame=HsIdES],[frame=hSIdES],[frame=HSIdES],[frame=hsiDES],[frame=HsiDES],[frame=hSiDES],[frame=HSiDES],[frame=hsIDES],[frame=HsIDES],[frame=hSIDES],[frame=HSIDES]{\n  background-color:red;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("把所有有可能的情况全部匹配出来，这种方式可以用来做组件库。")]),s._v(" "),e("blockquote",[e("p",[s._v("正则方法\n这种方方式是使用一个伪类来进行匹配。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".hero:matches(main, .main) {\n    background-color: var(--color);\n}\n编译后的结果\n\nmain.hero, .hero.main {\n    backgorund-color:var(--color);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("这些都是现代化CSS在语法上的一些改变，还有许多CSS一些其他的特性，都在"),e("a",{attrs:{href:"https://cssdb.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cssdb"),e("OutboundLink")],1),s._v("这里。")]),s._v(" "),e("h3",{attrs:{id:"webpack接入postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack接入postcss","aria-hidden":"true"}},[s._v("#")]),s._v(" Webpack接入PostCSS")]),s._v(" "),e("p",[s._v("新标准提案阶段")]),s._v(" "),e("p",[s._v("CSS标准的提案有5个阶段，分别是")]),s._v(" "),e("p",[s._v("stage-0\nstage-1\nstage-2\nstage-3\nstage-5")]),s._v(" "),e("ul",[e("li",[s._v("stage-0")])]),s._v(" "),e("p",[s._v("这个阶段是产生一个想法，由W3C工作组提出草案，并且是不稳定的可能会被改变。")]),s._v(" "),e("ul",[e("li",[s._v("stage-1")])]),s._v(" "),e("p",[s._v("这个阶段是实验阶段，并且是不稳定的可能会被改变。")]),s._v(" "),e("ul",[e("li",[s._v("stage-2")])]),s._v(" "),e("p",[s._v("这个阶段是允许阶段，表示这个提案可以被接纳。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("stage-3\n这个阶段是拥抱阶段，表示提案正在成为网络的一部分。")])]),s._v(" "),e("li",[e("p",[s._v("stage-4\n这个阶段死标准化阶段，表示提案正式称为Web标准。")])])]),s._v(" "),e("p",[s._v("总结一下")]),s._v(" "),e("p",[s._v("正如上面所知，现代化的CSS并不全部达到stage-4阶段，浏览器支持度并不高，那么我们应该怎么用呢？新版本的ES6+，当浏览器不支持的时候可以通过babel编译或者使用polyfill来让新标准可用，CSS也可以通过这种方式来实现。")]),s._v(" "),e("h2",{attrs:{id:"前后通吃的postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前后通吃的postcss","aria-hidden":"true"}},[s._v("#")]),s._v(" 前后通吃的PostCSS")]),s._v(" "),e("p",[s._v("一般我们都是使用PostCSS做后处理器来使用，其实PostCSS就只是提供了一个容器，通过插件的机制来让编译CSS。现代化的CSS也是通过PostCSS插件编译，从而让PostCSS前后通吃。")]),s._v(" "),e("p",[s._v("编译CSS用到的插件是postcss-preset-env。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('const PostcssPresetEnv = require("postcss-preset-env");\nconst {resolve} = require("path");\n//编译@apply\nconst PostcssApply = require("postcss-apply");\nmodule.exports = {\n    plugins: [\n        PostcssPresetEnv({\n            stage: 0,           //阶段\n            preserve: false,            //配置是否保留\n            browsers: \'last 3 versions\',        //浏览器支持\n            importFrom: resolve(\'./src/components/common.css\'),     //导入\n            exportTo: {     //导出\n\n            },\n            insertBefore: {         //在postcss-preset-env前接入插件\n                "postcss-apply":PostcssApply({\n                    preserve: false,\n                }),     \n            },\n            insertAfter: {   //在postcss-preset-env后接入插件\n\n            },\n            autoprefixer: {             //浏览器前缀\n                // grid: true,\n                flex: true,\n            }\n        }),\n        \n    ]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("p",[s._v("上这些就是postcss-preset-env的一些配置。")]),s._v(" "),e("h1",{attrs:{id:"总结-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("拥抱变化、拥抱新技术一直是我学习的最大动力。同时我也觉得新的东西可以让我更加热爱前端。")])])},[],!1,null,null,null);a.default=r.exports}}]);