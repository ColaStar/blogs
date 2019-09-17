(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{226:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"pjax的实现与应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pjax的实现与应用","aria-hidden":"true"}},[a._v("#")]),a._v(" PJAX的实现与应用")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("web发展经历了一个漫长的周期，最开始很多人认为Javascript这门语言是前端开发的累赘，是个鸡肋，那个时候人们还享受着从一个a链接蹦到另一个页面的web神奇魔术。后来随着JavaScript的不断更新换代，他的功能不仅仅是为网页添加一点特效了，语言本身的加强以及对DOM操作能力的提升让他在前端大放光彩。尤其是ajax的出现，让JavaScript以及整个web的发展翻开了崭新的一页。")]),a._v(" "),e("p",[a._v("利用ajax局部刷新页面，相信很多人玩得相当熟练了。如果整个页面的刷新都是使用ajax，我们可以称之为一个webapp，所有的逻辑都是在当页处理，这种形式的页面带来的体验是十分不错的，减少了那些比较“冗余”的页面跳转、新开页面等。不过，webapp的代码是十分不好维护的，页面逻辑太多太深，出点小问题，整个页面就会瘫痪，而且不方便定位bug，可维护性很低。")]),a._v(" "),e("h2",{attrs:{id:"pjax的实现与应用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pjax的实现与应用-2","aria-hidden":"true"}},[a._v("#")]),a._v(" PJAX的实现与应用")]),a._v(" "),e("h3",{attrs:{id:"_1-场景再现-ajax弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-场景再现-ajax弊端","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.场景再现-ajax弊端")]),a._v(" "),e("p",[a._v("ajax是一个非常好玩的小东西，不过用起来也会存在一些问题。")]),a._v(" "),e("p",[a._v("我们可以利用ajax进行无刷新改变文档内容，但是没办法去修改URL，有童鞋要问，这里为什么一定要修改URL呢？一个URL代表一个特定的网络资源，ajax修改了页面的内容，所以用不同的URL去标识他们，这个还是挺有必要的。")]),a._v(" "),e("p",[a._v("比如我们设计了一个单词查询的页面，比较合理的UR应该是http://example.com/word，不同的word对应不同的内容，但是如果整个页面都是ajax实现，我们就没法去修改/word了，当然我们可以使用hash如http://example.com#word，但这样就不能很好的处理浏览器的前进和后退问题。如：在页面中查询了单词A的翻译，接着又查询了单词B，这个时候浏览器的浏览历史会生成http://example.com#A和http://example.com#B两个记录，可是当我们从B转回A的时候，AJAX的效果还停留在B的状态（页面显示的还是单词B的翻译）。部分浏览器对此问题引入了onhashchange的接口，只要URL的hash值发生变化，我们的程序就可以监听并做出相应。不过对于那些木有这个接口的浏览器，就得定时去判断hash的变化了。")]),a._v(" "),e("p",[a._v("而这样的方式对搜索引擎是十分不友好的，twitter和google约定使用hash bang (#!xxx)，也就是hash后面的第一个字符为感叹号，这样的网址他们是会爬取的，但是其他搜索引擎不支持。PJAX可以在改变页面内容的同时也改变他的URL，下面来说说PJAX和他的应用。")]),a._v(" "),e("h3",{attrs:{id:"_2-什么是pjax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是pjax","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.什么是PJAX")]),a._v(" "),e("p",[a._v("history API中有几个新特性，分别是"),e("code",[a._v("history.pushState")]),a._v("和"),e("code",[a._v("history.replaceState")]),a._v("，我们把"),e("code",[a._v("pushState+AJAX")]),a._v("进行封装，合起来简单点叫，就是"),e("code",[a._v("PJAX~")]),a._v("虽说实现技术上没什么新东西，但是概念上还是有所不同的。")]),a._v(" "),e("p",[a._v("PJAX的"),e("strong",[a._v("基本思路")]),a._v("是，用户点击一个链接，通过ajax更新页面变化的部分，然后使用HTML5的pushState修改浏览器的URL地址，这样有效地避免了整个页面的重新加载。如果浏览器不支持history的两个新API或者JS被禁用了，那这个链接就只能跳转并重新刷新整个页面了。和传统的ajax设计稍微不同，ajax通常是从后台获取JSON数据，然后由前端解析渲染，而PJAX请求的是一个在服务器上生成好的HTML碎片，如下图所示：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/pajax.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/pajax.png",alt:""}})])]),a._v(" "),e("p",[a._v("客户端向服务器发送一个普通的请求")]),a._v(" "),e("ul",[e("li",[a._v("（1），其实也就是点击了一个链接，服务器会相应这个请求")]),a._v(" "),e("li",[a._v("（2），返回一个html文档。客户端向服务器发送一个有PJAX标志的请求")]),a._v(" "),e("li",[a._v("（3），此时服务器只返回一个html碎片")]),a._v(" "),e("li",[a._v("（4）。但是这两次请求都让客户端的URL变化了，希望上面的说明可以让你明白了PAJX和AJAX的区别了。")])]),a._v(" "),e("p",[a._v("3.PJAX的应用")]),a._v(" "),e("p",[a._v("先来看我的前端代码：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//$('document').pjax('html元素','需要跟新的容器')  给html元素绑定pjax传输的方法\n $(document).pjax('.header a,.container a,#divSearchPanel input', '.container', {\n     fragment: '.container',\n     timeout: 1500\n });\n \n //用ajax来实现\n //pjax请求带pjax header\n $.ajax({\n     url: a.attr('href')ajaxUrl,\n     type: 'GET',\n     headers: {'x-pjax': true},\n     success: function (data) {\n         //localStorage ...\n         history.pushState('', '', url);\n         //containor 填充\n     }\n });\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br")])]),e("p",[a._v("这个时候所有通过a标签发送的请求header里面都会出现x-pjax:true;\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax.png",alt:""}})])]),a._v(" "),e("p",[a._v("前端部分完成，开始来部署后台；")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var pjax = require('express-pjax');\napp.use(pjax());\nrouter.get('/',function (req,res) {\n    if (req.headers['x-pjax']) {//如果x-pjax为true使用res.renderPjax()返回页面\n        res.renderPjax('msg');\n        //站内刷\n    }\n    res.render('msg');\n    //直接刷\n});\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax2.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax2.png",alt:""}})])]),a._v(" "),e("h3",{attrs:{id:"开源的pjax库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源的pjax库","aria-hidden":"true"}},[a._v("#")]),a._v(" 开源的PJAX库")]),a._v(" "),e("p",[a._v("已经有人对这个东西做了封装，我就不重复造轮子了。")]),a._v(" "),e("ul",[e("li",[a._v("welefen封装的库，对jquery、qwrap和kissy都做了封装，"),e("a",{attrs:{href:"https://github.com/welefen/pjax",target:"_blank",rel:"noopener noreferrer"}},[a._v("github地址"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("Yahoo团队"),e("a",{attrs:{href:"PJAX%E5%9C%B0%E5%9D%80"}},[a._v(" PJAX地址")]),a._v("\n并不是页面中所有的链接都需要使用PJAX加载，所有在需要这个东西的a标签上加一个属性，如data-pjax=true，然后统一添加事件。")])]),a._v(" "),e("h3",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1.如果浏览器不支持pushState接口函数，那就只能退化为ajax或者使用hash bang了~")])]),a._v(" "),e("li",[e("p",[a._v("2.本地环境下使用的话，浏览器会报错：`Uncaught SecurityError: A history state object with URL file:///E:/baidu_app/demo/PJAX/pic-2' cannot be created in a document with origin 'null'. ，所以如果你要测试的话，请把代码丢到服务器上！")])]),a._v(" "),e("li",[e("p",[a._v("3.为了得到更好的体验，PJAX经常配合localStorage来使用，把请求到的内容缓存到本地，再一次请求的时候先从本地查看。如果你的内容是动态变化的，缓存的时候加一个缓存时间，方便更新缓存。")])]),a._v(" "),e("li",[e("p",[a._v("4.还有一个容易忽略的东西是统计，使用PJAX只会局部刷新页面，如果忽略了对统计函数的更新，那就会让你失去很多数据。")])])]),a._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("p",[a._v("http://www.welefen.com/pjax-for-ajax-and-pushstate.html welefen")]),a._v(" "),e("p",[a._v("http://ntotten.com/2012/04/09/building-super-fast-web-apps-with-pjax/ Nathan Totten")]),a._v(" "),e("p",[a._v("http://yuilibrary.com/yui/docs/pjax/ YUI Pjax")])])},[],!1,null,null,null);t.default=r.exports}}]);