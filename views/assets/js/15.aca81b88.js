(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{189:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"css分层理论与面向对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css分层理论与面向对象","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS分层理论与面向对象")]),s._v(" "),e("ul",[e("li",[s._v("为什么要分层？")]),s._v(" "),e("li",[s._v("SMACSS")]),s._v(" "),e("li",[s._v("BEM")]),s._v(" "),e("li",[s._v("SUIT")]),s._v(" "),e("li",[s._v("ACSS")]),s._v(" "),e("li",[s._v("ITCSS")]),s._v(" "),e("li",[s._v("面向对象css-OOCSS")])]),s._v(" "),e("h3",{attrs:{id:"为什么要分层？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要分层？","aria-hidden":"true"}},[s._v("#")]),s._v(" 为什么要分层？")]),s._v(" "),e("ul",[e("li",[s._v("CSS有语义化的命名约定和CSS层的分离，将有助于它的可扩展性，性能的提⾼\n和代码的组织管理。")]),s._v(" "),e("li",[s._v("⼤量的样式，覆盖、权重和很多!important，分好层可以让团队命名统⼀规范，")]),s._v(" "),e("li",[s._v("⽅便维护。")]),s._v(" "),e("li",[s._v("有责任感地去命名你的选择器。")])]),s._v(" "),e("h3",{attrs:{id:"smacss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#smacss","aria-hidden":"true"}},[s._v("#")]),s._v(" SMACSS")]),s._v(" "),e("p",[e("strong",[s._v("介绍")]),e("br"),s._v("\n可扩展的模块化架构的CSS，像OOCSS⼀样以减少重复样式为基础。\n通过5个层次来划分CSS给项目带来更结构化的方法：\n• Base-设定标签元素的预设值  PS:html {} input[type=text]{}"),e("br"),s._v("\n• Layout -整个⽹站的「⼤架构」的外观  PS:#header { margin: 30px 0; }"),e("br"),s._v("\n• Module -应⽤在不同⻚⾯公共模块 PS:.button{}"),e("br"),s._v("\n• State -定义元素不同的状态 PS:.nav--main {  .active {} }"),e("br"),s._v("\n• Theme - 画⾯上所有「主视觉」的定义 PS: border-color、background-image")]),s._v(" "),e("ul",[e("li",[s._v("修饰符使⽤的是--，⼦模块使⽤__符号。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//例：\n<div class="container">\n  <div class="container-header">\n     <div class="container-header__title">\n       <div class="container-header__title--home">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"bem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bem","aria-hidden":"true"}},[s._v("#")]),s._v(" BEM")]),s._v(" "),e("p",[s._v("https://en.bem.info/")]),s._v(" "),e("p",[e("strong",[s._v("简介")]),e("br"),s._v("\nBEM和SMACCS⾮常类似，主要⽤来如何给项⽬命名。⼀个简单命名更容易让别⼈\n⼀起⼯作。⽐如选项卡导航是⼀个块(Block)，这个块⾥的元素的是其中标签之⼀\n(Element)，⽽当前选项卡是⼀个修饰状态(Modifier)：")]),s._v(" "),e("p",[s._v("• block  -代表了更⾼级别的抽象或组件"),e("br"),s._v("\n• block__element  -代表.block的后代，⽤于形成⼀个完整的.block的整体。"),e("br"),s._v("\n• .block--modifier  -代表.block的不同状态或不同版本。"),e("br"),s._v("\n• 修饰符使⽤的是_，⼦模块使⽤__符号。(不⽤⼀个-的原因是CSS单词连接)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div class="menu">\n  <div class="menu__item">\n     <div class="menu__item_state_current">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"suit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suit","aria-hidden":"true"}},[s._v("#")]),s._v(" SUIT")]),s._v(" "),e("h3",{attrs:{id:"acss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acss","aria-hidden":"true"}},[s._v("#")]),s._v(" ACSS")]),s._v(" "),e("p",[e("strong",[s._v("简介")]),e("br"),s._v("\n考虑如何设计⼀个系统的接⼝。原⼦(Atoms)是创建⼀个区块的最基本的特质，\n⽐如说表单按钮。分⼦(Molecules)是很多个原⼦(Atoms)的组合，⽐如说⼀个表\n单中包括了⼀个标签，输⼊框和按钮。⽣物(Organisms)是众多分⼦(Molecules)\n的组合物，⽐如⼀个⽹站的顶部区域，他包括了⽹站的标题、导航等。⽽模板\n(Templates)⼜是众多⽣物(Organisms)的结合体。⽐如⼀个⽹站⻚⾯的布局。⽽\n最后的⻚⾯就是特殊的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".m-10{\n    margin: 10px\n}\n.w-50{\n    width: 50%\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"itcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#itcss","aria-hidden":"true"}},[s._v("#")]),s._v(" ITCSS")]),s._v(" "),e("p",[e("strong",[s._v("简介")]),e("br"),s._v(" "),e("strong",[s._v("可伸缩可管理的健全CSS架构")]),e("br"),s._v("\n“倒三角形CSS”是一种新的方法论。它将整个CSS项目想象成一个分层的、倒置的三角形。这个分层图形表示了一个能帮你以最有效、最节约的方式组织CSS的模型。")]),s._v(" "),e("p",[s._v("在ITCSS中，每一层都是上一层的逻辑递进。它变得更加明确、有目的性，并缩小了选择器的使用范围。由于我们写CSS是在之前的基础上添加，这意外着我们的CSS本质上更容易扩展。我们不必浪费时间撤销或重写以前的CSS。")]),s._v(" "),e("ul",[e("li",[s._v("设置层：该层包含了项目中的所有全局设置（如基本字体大小、颜色调色板、配置等）。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("全局可⽤配置，设置开关。$color-ui:   #BADA55;   $spacing-unit:10px\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("工具层：该层包含了全局可用的工具–即混入和函数。全局工具的例子有梯度混入、字体大小混入等。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("通⽤⼯具函数。@mixin   font-color()   {font-color:   $color-ui;}   \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("通用层：该层是第一个实际产生CSS的层。它很少改动，并且通常在不同项目中保持不变。它包括像Normalize. css、全局盒子大小规则、CSS重置等。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("通⽤基础样式。Normalize,   resets,   box-sizing:   border-box;   \n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("元素层：该层只包含没有样式的html元素选择器。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("未归类的HTML元素。ul   {list-style:   square   outside;}   \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("对象层：该层是第一个包含了基于类的选择器的层。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("设计部分开始使⽤专⽤类。.ui-list__item   {padding:   $spacing-unit;}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("组件层：该层开始设计有可识别性的DOM元素。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("设计符合你们的组件。\n.products-list   {@include   font-brand();border-top:   1px   solid   $color-ui;}   \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("核心层：该层是具有最高特异性的层，可以覆盖之前的样式。该层大部分声明都带有 !important 。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("重写，只影响⼀块的DOM。(通常带上我们的!important)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"面向对象css-oocss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向对象css-oocss","aria-hidden":"true"}},[s._v("#")]),s._v(" 面向对象CSS-OOCSS")]),s._v(" "),e("p",[e("strong",[s._v("什么是面向对象编程？")]),e("br"),s._v("\n面向对象的编程”的概念，开发商之间普遍存在的，他成为任何现代编程语言的一种基本形式，数据的抽象化、模块化和继承等特点在编写代码中得到了大规模的应用。面向对象的CSS是一种容易重用的一种CSS规则，也是OOP的概念，从而降低了页面的加载时间，提高了网面的性能。这里关键的一点就是如何在页面中识别，创建和模块化可重用的对象，并在页面中任何需要的地方重用，并扩展其附加功能。在这里我们所说的对象其实很简单，就是指基本的HTML标签和CSS样式规则。现在最关键的，也是最具有挑战性的一点就是确定“对象”，并给这个对象创建CSS样式规则。")]),s._v(" "),e("p",[e("strong",[s._v("两个原则：")])]),s._v(" "),e("ul",[e("li",[s._v("独立的结构和样式")]),s._v(" "),e("li",[s._v("独立的容器和内容")])]),s._v(" "),e("p",[e("strong",[s._v("如何使用：")])]),s._v(" "),e("ul",[e("li",[s._v("创建一个组件库")]),s._v(" "),e("li",[s._v("独立的容器和内容，并且避免样式来依赖位置")]),s._v(" "),e("li",[s._v("独立的结构和样式")]),s._v(" "),e("li",[s._v("使用类名为扩展基本对象")]),s._v(" "),e("li",[s._v("坚持以语义类来命名类名")])]),s._v(" "),e("p",[e("strong",[s._v("OOCSS的缺点")])]),s._v(" "),e("ul",[e("li",[s._v("OOCSS适合真正的大型网站开发，因为大型网站用到的可重用性组件特别的多，如果运用在小型项目中可能见不到什么成效。所以用不用OOCSS应该根据你的项目来决定。")]),s._v(" "),e("li",[s._v("如果没用巧妙的使用，创建组件可能对于你来说是一堆没用的东西，成为一烂摊子，给你的维护带来意想不到的杯具，说不定还是个维护的噩梦。")]),s._v(" "),e("li",[s._v("最好给每一个组件备写一份说明文档，有助于调用与维护。")])]),s._v(" "),e("p",[e("strong",[s._v("OOCSS的优点")])]),s._v(" "),e("ul",[e("li",[s._v("加强代码复用以便方便维护")]),s._v(" "),e("li",[s._v("减少CSS代码")]),s._v(" "),e("li",[s._v("具有清洁的HTML标记，有语义的类名，逻辑性强的层次关系")]),s._v(" "),e("li",[s._v("语义标记，有助于SEO")]),s._v(" "),e("li",[s._v("更好的页面优化，更快的加载时间（因为有很多组件重用）提升渲染效率。")]),s._v(" "),e("li",[s._v("可扩展的标记和CSS样式，有更多的组件可以放到库中，而不影响其他的组件")]),s._v(" "),e("li",[s._v("能轻松构造新的页面布局，或制作新的页面风格")])]),s._v(" "),e("p",[e("strong",[s._v("注意事项：")])]),s._v(" "),e("ul",[e("li",[s._v("1.不要直接定义子节点，应把共性声明放到父类。")]),s._v(" "),e("li",[s._v("2.结构和皮肤相分离。")]),s._v(" "),e("li",[s._v("3.容器和内容相分离。")]),s._v(" "),e("li",[s._v("4.抽象出可重用的元素，建好组件库，在组件库内寻找可用的元素组装页面。")]),s._v(" "),e("li",[s._v("5.往你想要扩展的对象本身增加class而不是他的父节点。")]),s._v(" "),e("li",[s._v("6.对象应保持独立性。")]),s._v(" "),e("li",[s._v("7.避免使用ID选择器，权重太高，无法重用。")]),s._v(" "),e("li",[s._v("8.避免位置相关的样式。")]),s._v(" "),e("li",[s._v("9.保证选择器相同的权重。")]),s._v(" "),e("li",[s._v("10.类名 简短 清晰 语义化 OOCSS的名字并不影响HTML语义化。")])])])},[],!1,null,null,null);a.default=n.exports}}]);