(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{554:function(s,t,a){"use strict";a.r(t);var n=a(56),i=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"优雅降级与渐进增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优雅降级与渐进增强"}},[s._v("#")]),s._v(" 优雅降级与渐进增强")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/优雅降级与渐进增强.png"}},[a("img",{attrs:{src:"https://colastar.github.io/static/images/%E4%BC%98%E9%9B%85%E9%99%8D%E7%BA%A7%E4%B8%8E%E6%B8%90%E8%BF%9B%E5%A2%9E%E5%BC%BA.png",alt:""}})])]),s._v(" "),a("p",[s._v("一图胜千言")]),s._v(" "),a("p",[s._v("印象中，渐进增强和优雅降级这两个概念是在 CSS3 出现之后火起来的。由于低级浏览器不支持 CSS3，但是 CSS3 特效太优秀不忍放弃，所以在高级浏览器中使用CSS3，而在低级浏览器只保证最基本的功能。二者的目的都是关注不同浏览器下的不同体验，但是它们侧重点不同，所以导致了工作流程上的不同。")]),s._v(" "),a("blockquote",[a("p",[s._v("名词解释")])]),s._v(" "),a("p",[a("strong",[s._v("渐进增强")]),s._v("（Progressive Enhancement）：一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。")]),s._v(" "),a("p",[a("strong",[s._v("优雅降级")]),s._v("（Graceful Degradation）：一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。")]),s._v(" "),a("p",[s._v("其实渐进增强和优雅降级并非什么新概念，只是旧的概念换了一个新的说法。在传统软件开发中，经常会提到向上兼容和向下兼容的概念。渐进增强相当于向上兼容，而优雅降级相当于向下兼容。向下兼容指的是高版本支持低版本的或者说后期开发的版本支持和兼容早期开发的版本，向上兼容的很少。大多数软件都是向下兼容的，比如说Office2010能打开Office2007，Office2006，Office2005，Office2003等建的word文件，但是用Office2003就不能打开用Office2007，Office2010等建的word文件！")]),s._v(" "),a("blockquote",[a("p",[s._v("二者区别")])]),s._v(" "),a("p",[s._v("**优雅降级和渐进增强只是看待同种事物的两种观点。**优雅降级和渐进增强都关注于同一网站在不同设备里不同浏览器下的表现程度。关键的区别则在于它们各自关注于何处，以及这种关注如何影响工作的流程。")]),s._v(" "),a("p",[a("strong",[s._v("优雅降级观点")]),s._v("认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。你可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。")]),s._v(" "),a("p",[a("strong",[s._v("渐进增强观点")]),s._v("则认为应关注于内容本身。请注意其中的差别：我甚至连“浏览器”三个字都没提。内容是我们建立网站的诱因。有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得渐进增强成为一种更为合理的设计范例。这也是它立即被 Yahoo! 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。")]),s._v(" "),a("blockquote",[a("p",[s._v("案例分析")])]),s._v(" "),a("p",[s._v("看如下这两段代码的书写顺序，表示了我们开发的着重点。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".transition { /*渐进增强写法*/\n  -webkit-transition: all .5s;\n     -moz-transition: all .5s;\n       -o-transition: all .5s;\n          transition: all .5s;\n}\n.transition { /*优雅降级写法*/\n          transition: all .5s;\n       -o-transition: all .5s;\n     -moz-transition: all .5s;\n  -webkit-transition: all .5s;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("前缀CSS3（-webkit- / -moz- / -o-*）和正常CSS3在浏览器中的支持情况是这样的：")]),s._v(" "),a("ul",[a("li",[s._v("很久以前：浏览器前缀CSS3和正常CSS3都不支持；")]),s._v(" "),a("li",[s._v("不久之前：浏览器只支持前缀CSS3，不支持正常CSS3；")]),s._v(" "),a("li",[s._v("现在：浏览器既支持前缀CSS3，又支持正常CSS3；")]),s._v(" "),a("li",[s._v("未来：浏览器不支持前缀CSS3，仅支持正常CSS3.")])]),s._v(" "),a("p",[s._v("渐进增强的写法，优先考虑老版本浏览器的可用性，最后才考虑新版本的可用性。在时期3前缀CSS3和正常CSS3都可用的情况下，正常CSS3会覆盖前缀CSS3。优雅降级的写法，优先考虑新版本浏览器的可用性，最后才考虑老版本的可用性。在时期3前缀CSS3和正常CSS3都可用的情况下，前缀CSS3会覆盖正常的CSS3。")]),s._v(" "),a("p",[s._v("就CSS3这种例子而言，我更加推崇渐进增强的写法。因为前缀CSS3的某些属性在浏览器中的实现效果有可能与正常的CSS3实现效果不太一样，所以最终还是得以正常CSS3为准。如果你好奇究竟是什么属性在前缀CSS3和正常CSS3中显式效果不一样，可以看看这篇文章《需警惕CSS3属性的书写顺序》。")]),s._v(" "),a("blockquote",[a("p",[s._v("如何抉择")])]),s._v(" "),a("p",[s._v("如果软件开发的预算和时间充足，就不存在抉择的问题。然而现实很残酷，要么开发周期短，要么开发预算少，或者二者兼而有之，这个时候该如何抉择？就我个人而言，讲讲我的观点。")]),s._v(" "),a("p",[a("strong",[s._v("根据你的用户所使用的客户端的版本来做决定")]),s._v("。请注意我的措辞，我没有用浏览器，而是用客户端。因为渐进增强和优雅降级的概念本质上是软件开发过程中低版本软件与高版本软件面对新功能的兼容抉择问题。服务端程序很少存在这种问题，因为开发者可以控制服务端运行程序的版本，就无所谓渐进增强和优雅降级的问题。但是客户端程序则不是开发者所能控制的（你总不能强制用户去升级它们的浏览器吧）。我们所谓的客户端，可以指浏览器，移动终端设备（如：手机，平板电脑，智能手表等）以及它们对应的应用程序（浏览器对应的是网站，移动终端设备对应的是相应的APP）。")]),s._v(" "),a("p",[s._v("现在有很成熟的技术，能够让你分析使用你客户端程序的版本比例。如果低版本用户居多，当然优先采用渐进增强的开发流程；如果高版本用户居多，为了提高大多数用户的使用体验，那当然优先采用优雅降级的开发流程。")]),s._v(" "),a("p",[s._v("然而事实情况是怎么样的呢？绝大多数的大公司都是采用渐进增强的方式，因为业务优先，提升用户体验永远不会排在最前面。例如：新浪微博网站前端的更新，拥有这种亿级用户的网站，绝对不可能追求某个特效而不考虑低版本用户可不可用，一定是确保低版本到高版本的可访问性，再去渐进增强，采用新功能给高版本用户提供更好的用户体验。但也不是没有反例。如果你开发的是一款面向青少年的软件（或网站），你知道这个群体的人总是喜欢尝试新事物，总是喜欢酷炫的特效，总是喜欢把它们的软件更新到最新版本（而不像我们老一辈的用户）。面对这种情况，渐进增强的开发流程实为上选。")]),s._v(" "),a("p",[a("strong",[s._v("软件开发中，从来就没有银弹。")])])])}),[],!1,null,null,null);t.default=i.exports}}]);