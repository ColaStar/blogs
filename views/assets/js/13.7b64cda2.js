(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{152:function(s,n,a){"use strict";a.r(n);var t=a(0),i=Object(t.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"css3开发常备核心技能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3开发常备核心技能","aria-hidden":"true"}},[s._v("#")]),s._v(" css3开发常备核心技能")]),s._v(" "),a("ul",[a("li",[s._v("早期的双飞翼布局 + css HACK")]),s._v(" "),a("li",[s._v("基于移动端的PX与REM的转换兼容方案")]),s._v(" "),a("li",[s._v("弹性盒模型与Reset的选择")]),s._v(" "),a("li",[s._v("自制的ICON-FONT与常用字体排版")]),s._v(" "),a("li",[s._v("CSS代码检测与团队项目规范")]),s._v(" "),a("li",[s._v("CSS绘制特殊图形 高级技巧")]),s._v(" "),a("li",[s._v("BFC IFC GFC FFC IE6里的BFC-hasLayout")])]),s._v(" "),a("h3",{attrs:{id:"双飞翼布局与圣杯布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双飞翼布局与圣杯布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 双飞翼布局与圣杯布局*")]),s._v(" "),a("ul",[a("li",[s._v("双飞翼布局与圣杯模型：（早期给ie用的，）"),a("br"),s._v("\n圣杯布局和双飞翼布局基本上是一致的，都是两边固定宽度，中间自适应的三栏布局，其中，中间栏放到文档流前面，保证先行渲染。解决方案大体相同，都是三栏全部float:left浮动，区别在于解决中间栏div的内容不被遮挡上；")])]),s._v(" "),a("p",[a("strong",[s._v("圣杯布局")]),s._v("是中间栏在添加相对定位，并配合left和right属性，效果上表现为三栏是单独分开的（如果可以看到空隙的话）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#HTML\n<div class="bg">\n    <div class="middle">middle</div>\n    <div class="left">left</div>\n    <div class="right">right</div>\n</div>\n#CSS\n*{\n    padding:0;\n    margin:0;\n}\n.bg{\n    padding:0 180px 0 200px;\n}\n.middle{\n    width:100%;\n    background:yellow\n}\n.left{\n    width:200px;\n    background:red;\n    position:relative;\n    margin-left:-100%;\n    left:-200px\n}\n.right{\n    width:180px;\n    background:yellowgreen;\n    position:relative;\n    left:-180px;\n    margin-left:-180px\n}\n.right,.left,.middle{\n  float:left;\n  height:100px\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[a("strong",[s._v("双飞翼布局")]),s._v("是在中间栏的div中嵌套一个div，内容写在嵌套的div里，然后对嵌套的div设置margin-left和margin-right，效果上表现为左右两栏在中间栏的上面，中间栏还是100%宽度，只不过中间栏的内容通过margin的值显示在中间。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#HTML\n<div class="bg">\n    <div class="middle">\n    <div class="inst">middle</div>\n    </div>\n    <div class="left">left</div>\n    <div class="right">right</div>\n</div>\n\n#CSS\n*{\n    padding:0;\n    margin:0\n}\n.right,.left,.middle{\n  float:left;\n  height:100px\n}\n.middle{\n    width:100%;\n    background:red;\n}\n.left{\n    width:180px;\n    background:yellow;\n    margin-left:-180px\n}\n.right{\n    width:200px;\n    background:yellowgreen;\n    margin-left:-200px\n}\n.inst{\n    padding:0 200px 0 180px\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h3",{attrs:{id:"基于移动端的px与rem、移动端布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于移动端的px与rem、移动端布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于移动端的PX与REM、移动端布局")]),s._v(" "),a("ul",[a("li",[s._v("different size  different DPR")]),s._v(" "),a("li",[s._v("目前的设计稿 一般是 640 750 1125，一般要先均分成100份，(兼容vh,vm) 750/10 = 75px。div宽是240px*120px css的书写改为3.2rem * 1.6rem。 配合响应式修改html根的大小。")]),s._v(" "),a("li",[s._v("字体不建议使用rem的，data-dpr属性动态设置字体大小。屏幕变大放更多的文字，或者屏幕更大放更多的字。"),a("br"),s._v("\n可以使用hotcss来进行移动端布局开发"),a("br"),s._v("\n文档地址：http://imochen.github.io/hotcss/")]),s._v(" "),a("li",[s._v("淘宝的移动端布局方案 Flexible  一篇挺好的文章https://www.jianshu.com/p/04efb4a1d2f8")])]),s._v(" "),a("h3",{attrs:{id:"css布局-多列布局等高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css布局-多列布局等高","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS布局--多列布局等高")]),s._v(" "),a("p",[s._v("1.利用 负margin 和 正padding 对冲实现(在父元素加overflow:hidden)")]),s._v(" "),a("h3",{attrs:{id:"怪异盒模型与标准盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怪异盒模型与标准盒模型","aria-hidden":"true"}},[s._v("#")]),s._v(" 怪异盒模型与标准盒模型")]),s._v(" "),a("p",[s._v("两种模式可以利用"),a("strong",[s._v("box-sizing")]),s._v("属性进行自行选择：--\n标准模式（W3C标准盒模型）：box-sizing:content-box;\n怪异模式（IE标准的盒子模型）：box-sizing:border-box;")]),s._v(" "),a("blockquote",[a("p",[s._v("两种模式的"),a("strong",[s._v("区别")]),s._v("：\n标准模式会被设置的padding撑开，而怪异模式则相当于将盒子的大小固定好，再将内容装入盒子。盒子的大小并不会被padding所撑开。\n"),a("strong",[s._v("标准模式")]),s._v("：盒子总宽度/高度 = 内容区宽度 /高度+padding+border + margin\n"),a("strong",[s._v("怪异盒模型")]),s._v("：盒子总宽度/高度 = 内容区宽度 /高度+ margin\n如何解决样式的兼容性问题\n建议不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到其父元素和子元素上。")])]),s._v(" "),a("h3",{attrs:{id:"水平垂直居中方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水平垂直居中方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 水平垂直居中方式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//利用定位进行s水平垂直居中\n//方法一\n.parent{\nposition:relative;\n}\n.child{\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    margin:auto;\n}\n//方法二\n.parent{\n    position:relative;\n}\n.child{\n    width:100px;\n    height:100px;\n    position:absolute;\n    top:50%;\n    left:50%;\n    margin-top:-50px;\n    margin-left:50px;\n}\n//方法三\n.child{\n    position:absolute;\n    top:50%;\n    left:50%;\n    transfrom:translate(-50%,-50%)\n}\n利用flex水平垂直居中\n.parent{\n    display:flex;\n    just-content:center;\n    align-item:center\n利用table-cell\n{\n    display:table-cell;\n    text-align:center;\n    vertical-align:center\n}\n利用grid网格布局\n.parent {\n    display: grid;\n}\n.child {\n    align-self: center;\n    justify-self: center;\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("h3",{attrs:{id:"css-hack（ie6经典bug）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-hack（ie6经典bug）","aria-hidden":"true"}},[s._v("#")]),s._v(" css hack（IE6经典bug）")]),s._v(" "),a("ul",[a("li",[s._v("1.IE6怪异解析之padding与border算入宽高。"),a("br"),s._v(" "),a("strong",[s._v("原因")]),s._v("："),a("br"),s._v("\n未加入文档声明造成非盒模型解析。"),a("br"),s._v(" "),a("strong",[s._v("解决方式")]),a("br"),s._v("\n加入文档声明<!doctype html>")]),s._v(" "),a("li",[s._v("2.IE6在块元素、左右浮动、设定margin时造成margin双倍（双边距）"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\ndisplay：inline")]),s._v(" "),a("li",[s._v("3.以下三种其实是一种bug，其实也不算bug，举个例子：父标签高度20，子标签11，垂直居中，20-11=9，9是要分给文字的上边与下边，怎么分？IE6就会与其它的不同，所以，尽量避免。\n1)字体大小为奇数之边框高度少1px"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\n字体设为偶数或line-height设为偶数。\n2)line-height，文本垂直居中差1px"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\nline-height加一或减一"),a("br"),s._v("\n3)与父标签的宽度的奇偶不同的居中造成1px的偏离。"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\n如果父标签是奇数宽度，则子标签页用奇数宽度，反之亦同")]),s._v(" "),a("li",[s._v("4.内部盒模型超出父级时，父级被撑大"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\n父标签使用overflow：hidden")]),s._v(" "),a("li",[s._v("5.line-height默认行高bug"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\n给line-height设值")]),s._v(" "),a("li",[s._v("6.行标签之间会有一小段空白"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\nfloat或结构并排（可读性差，不建议）")]),s._v(" "),a("li",[s._v("7.标签高度无法小于19px"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\noverflow：hidden")]),s._v(" "),a("li",[s._v("8.左浮动元素margi-bottom失效"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\n显示设置高度or父标签设置padding-bottom代替子标签的margin-bottom")]),s._v(" "),a("li",[a("ol",{attrs:{start:"9"}},[a("li",[s._v("img于块元素中，底部多出空白。\n"),a("strong",[s._v("解决方法")]),a("br"),s._v("\n父级设置overflow：hidden或img{display：block}或margin：-5px")])])]),s._v(" "),a("li",[s._v("10.li之间会有间距"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\nfloat：left")]),s._v(" "),a("li",[s._v("11.块元素中有文字及右浮动的行内元素，行元素换行\n"),a("strong",[s._v("解决方法")]),s._v("\n将行内元素置于块元素内的文字前")]),s._v(" "),a("li",[s._v("12.position下的left，bottom错位"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\n为父级（relative）设置宽高或添加*zoom：1")]),s._v(" "),a("li",[s._v("13.子元素有设置position，则父级overflow失效。"),a("br"),s._v(" "),a("strong",[s._v("解决方法")]),a("br"),s._v("\n为父级设置{position：relative}")])]),s._v(" "),a("h3",{attrs:{id:"弹性盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹性盒模型","aria-hidden":"true"}},[s._v("#")]),s._v(" 弹性盒模型")]),s._v(" "),a("p",[s._v("flex是CSS3的新属性，又叫弹性布局盒模型，是可以简洁，快速弹性布局的属性。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/flex-content.png"}}),s._v("°\n")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/flex-item.png"}})]),s._v(" "),a("p",[a("strong",[s._v("flex的兼容写法")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//flex浏览器兼容性\n//IE10部分支持2012，需要-ms-前缀\n//Android4.1/4.2-4.3部分支持2009 ，需要-webkit-前缀\n//Safari7/7.1/8部分支持2012， 需要-webkit-前缀\n//IOS Safari7.0-7.1/8.1-8.3部分支持2012，需要-webkit-前缀\n\n.box{\n \n    display: -webkit-flex;  /* 新版本语法: Chrome 21+ */\n    display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */\n    display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */\n    display: -moz-box;      /* 老版本语法: Firefox (buggy) */\n    display: -ms-flexbox;   /* 混合版本语法: IE 10 */   \n \n }\n \n.flex1 {            \n    -webkit-flex: 1;        /* Chrome */  \n    -ms-flex: 1             /* IE 10 */  \n    flex: 1;                /* NEW, Spec - Opera 12.1, Firefox 20+ */\n    -webkit-box-flex: 1     /* OLD - iOS 6-, Safari 3.1-6 */  \n    -moz-box-flex: 1;       /* OLD - Firefox 19- */       \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"reset的选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset的选择","aria-hidden":"true"}},[s._v("#")]),s._v(" Reset的选择")]),s._v(" "),a("ul",[a("li",[s._v("谨慎用*，*的杀伤力太大！！！")]),s._v(" "),a("li",[s._v("Reset.css重置")]),s._v(" "),a("li",[s._v("Normalize.css修复")]),s._v(" "),a("li",[s._v("Neat.css融合（重置和修复的优点）解决浏览器统一问题,低级浏览器常见bug")]),s._v(" "),a("li",[s._v("必写的一些css代码")])]),s._v(" "),a("p",[s._v("html{\nbox-sizing:border-box\n}\n"),a("em",[s._v(":before,")]),s._v(":after{\nbox-sizing:inherit;//继承"),a("br"),s._v("\n}")]),s._v(" "),a("h3",{attrs:{id:"自制的icon-font与常用字体排版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自制的icon-font与常用字体排版","aria-hidden":"true"}},[s._v("#")]),s._v(" 自制的ICON-FONT与常用字体排版")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("no-image时代 不超过纯色为2的图像")])]),s._v(" "),a("li",[a("p",[s._v("宋体非宋体 黑体非黑体 WIndows下的宋体叫中易宋体SimSun，Mac是华文宋体STSong。WIndows下的黑体叫中易黑体SimHei，Mac是华文黑体STHeiti。")])]),s._v(" "),a("li",[a("p",[s._v("不要只写中文字体名，保证西文字体在中文字体前面。Mac->Linux->Windows")])]),s._v(" "),a("li",[a("p",[s._v("切忌不要直接使用设计师PSD的设计font-family,关键时刻再去启动font-face（typo.css 、 Entry.css 、Type.css ）")])]),s._v(" "),a("li",[a("p",[s._v("font-family: sans-serif;系统默认，字体多个单词组成加引号。")])]),s._v(" "),a("li",[a("p",[s._v("css图标库http;//cssicon.space(用css绘制，比较快)")])]),s._v(" "),a("li",[a("p",[s._v("有关设计的相关")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("插件名")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("underlinejs")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("动画文字下划线")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("ResponsifyJS")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("使图像真正响应")])])])])])]),s._v(" "),a("h3",{attrs:{id:"css代码检测团队项目规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css代码检测团队项目规范","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS代码检测团队项目规范")]),s._v(" "),a("ul",[a("li",[s._v("1.不要使用多个class选择元素，如a.foo.boo，这在ie6及以下不能正确解析")]),s._v(" "),a("li",[s._v("2.移除空的css规则，如a{}")]),s._v(" "),a("li",[s._v("3.正确的使用显示属性，如display:inline不要和width，height，float，margin,padding同时使用，display:inline-block不要和float同时使用等")]),s._v(" "),a("li",[s._v("4.避免过多的浮动，当浮动次数超过十次时，会显示警告")]),s._v(" "),a("li",[s._v("5.避免使用过多的字号，当字号声明超过十种时，显示警告")]),s._v(" "),a("li",[s._v("6.避免使用过多web字体，当使用超过五次时，显示警告")]),s._v(" "),a("li",[s._v("7.避免使用id作为样式选择器")]),s._v(" "),a("li",[s._v("8.标题元素只定义一次")]),s._v(" "),a("li",[s._v("9.使用width:100%时要小心")]),s._v(" "),a("li",[s._v("10.属性值为0时不要写单位")]),s._v(" "),a("li",[s._v("11.各浏览器专属的css属性要有规范，\n例如.foo{-moz-border-radius:5px;border-radius:5px}")]),s._v(" "),a("li",[s._v("12.避免使用看起来像正则表达式的css3选择器")]),s._v(" "),a("li",[s._v("13.遵守盒模型规则\n"),a("strong",[s._v("npm")]),s._v(":csshint - npm\n"),a("strong",[s._v("检测网址")]),s._v("：http://csslint.net/")])]),s._v(" "),a("h3",{attrs:{id:"css绘制高级技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css绘制高级技巧","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS绘制高级技巧")]),s._v(" "),a("ul",[a("li",[s._v("1.after && before 任何一个HTML元素都可以创造3个可以供我们操作的视觉元素，即三个矩形。")]),s._v(" "),a("li",[s._v("2.box-shadow是可以定义为任意颜色的，并且同一个元素可以投射出不同的box-shadow。")]),s._v(" "),a("li",[s._v("3.CSS3 渐变：线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向"),a("br"),s._v("\n径向渐变（Radial Gradients）- 由它们的中心定义")]),s._v(" "),a("li",[s._v("4.border && border-radius 造就万千可能")])]),s._v(" "),a("h3",{attrs:{id:"bfc-ifc-gfc-ffc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-ifc-gfc-ffc","aria-hidden":"true"}},[s._v("#")]),s._v(" BFC/IFC/GFC/FFC")]),s._v(" "),a("h4",{attrs:{id:"bfc-块级格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-块级格式化上下文","aria-hidden":"true"}},[s._v("#")]),s._v(" BFC-块级格式化上下文")]),s._v(" "),a("ul",[a("li",[s._v("规范解释：\n是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。")]),s._v(" "),a("li",[s._v("BFC与BFC的形成条件；与BFC的作用？\n（block-formatting-context）块级格式化上下文\n俩个BFC之间的东西是相互独立的，不会重叠\n形成BFC条件：")])]),s._v(" "),a("ul",[a("li",[s._v("根元素")]),s._v(" "),a("li",[s._v("浮动元素：除none外；")]),s._v(" "),a("li",[s._v("绝对定位元素position：absolute/fixed")]),s._v(" "),a("li",[s._v("display：inline-block/table-cells/table-captions")]),s._v(" "),a("li",[s._v("overflow除了visible以外的值（hiddin，auto，scroll）")])]),s._v(" "),a("p",[s._v("作用：")]),s._v(" "),a("ul",[a("li",[s._v("包含浮动元素")]),s._v(" "),a("li",[s._v("不被浮动元素覆盖")]),s._v(" "),a("li",[s._v("阻止外边距的折叠（外边距重叠后去最大的）。")])]),s._v(" "),a("p",[s._v("事例："),a("strong",[s._v("子元素浮动后会造成父级元素出现高度塌陷。\n通过给父元素设置overflow：hidden或float清除，等，\n因为生成了bfc条件，触发了bfc的布局原则，能让浮动元素也会跟着计算，如何生成bfc条件，给父元素加overflowhidden。")])]),s._v(" "),a("h4",{attrs:{id:"ifc-行内元素格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifc-行内元素格式化上下文","aria-hidden":"true"}},[s._v("#")]),s._v(" IFC-行内元素格式化上下文")]),s._v(" "),a("p",[s._v("IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)")]),s._v(" "),a("h4",{attrs:{id:"gfc-网格布局格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gfc-网格布局格式化上下文","aria-hidden":"true"}},[s._v("#")]),s._v(" GFC-网格布局格式化上下文")]),s._v(" "),a("p",[s._v("当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。")]),s._v(" "),a("h4",{attrs:{id:"ffc-自适应格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ffc-自适应格式化上下文","aria-hidden":"true"}},[s._v("#")]),s._v(" FFC-自适应格式化上下文")]),s._v(" "),a("p",[s._v("display值为flex或者inline-flex的元素将会生成自适应容器（flex container），")]),s._v(" "),a("h3",{attrs:{id:"ie6里的bfc-haslayout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie6里的bfc-haslayout","aria-hidden":"true"}},[s._v("#")]),s._v(" IE6里的BFC-hasLayout")]),s._v(" "),a("p",[s._v("Zoom属性是IE浏览器的专有属性；通过zoom：1；   可以触发hasLayout\n所以可以解决ie下的浮动，margin重叠等一些问题；")]),s._v(" "),a("p",[s._v("clear：both正儿八经的清除浮动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".clearfix:after{\n content:'';\n dispaly:block;\n clear:both;\n height:0\n}\n.clearfix{\n    zoom:1\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])},[],!1,null,null,null);n.default=i.exports}}]);