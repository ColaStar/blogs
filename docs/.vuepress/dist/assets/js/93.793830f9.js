(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{211:function(t,a,e){"use strict";e.r(a);var r=e(0),n=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"网站导致浏览器崩溃的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网站导致浏览器崩溃的原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站导致浏览器崩溃的原因")]),t._v(" "),e("h2",{attrs:{id:"内存泄漏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏","aria-hidden":"true"}},[t._v("#")]),t._v(" 内存泄漏")]),t._v(" "),e("p",[t._v("还是先谈下内存泄漏，网站由于内存泄漏的而照成崩溃有两种情况，"),e("strong",[t._v("服务器的崩溃")]),t._v("和"),e("strong",[t._v("浏览器的崩溃")]),t._v("。内存泄漏所造成的问题是显而易见的，它使得已分配的内存的引用就会丢失，只要系统还在运行中，则进程就会一直使用该内存。这样的结果是，曾占用更多的内存的程序会降低系统性能，直到机器完全停止工作，才会完全清空内存。")]),t._v(" "),e("p",[t._v("Apache的Web服务器是用C/C++编写的，C/C++的内存泄漏问题不必多说，系统中存在无法回收的内存，有时候会造成内存不足或系统崩溃。在Java中，内存泄漏就是存在一些被分配的可达而无用的对象，这些对象不会被GC所回收，然而它却占用内存。")]),t._v(" "),e("p",[t._v("而在客户端，JavaScript所造成的内存泄漏，也将可能使得浏览器崩溃。关于JavaScript的内存泄漏的文章，较权威的有《"),e("a",{attrs:{href:"http://www.ibm.com/developerworks/web/library/wa-memleak/?S_TACT=105AGX52&S_CMP=cn-a-wa",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memory leak patterns in JavaScript"),e("OutboundLink")],1),t._v("》和《"),e("a",{attrs:{href:"http://msdn2.microsoft.com/en-us/library/bb250448.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding and Solving Internet Explorer Leak Patterns"),e("OutboundLink")],1),t._v("》。")]),t._v(" "),e("p",[t._v("JavaScript 是一种垃圾收集式（garbage collector，GC）语言，这就是说，内存是根据对象的创建分配给该对象的，并会在没有对该对象的引用时由浏览器收回。再根据《"),e("a",{attrs:{href:"http://msdn2.microsoft.com/en-us/library/bb250448.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fabulous Adventures In Coding"),e("OutboundLink")],1),t._v("》一文的说法：“JScript uses a nongenerational mark-and-sweep garbage collector.”，对” nongenerational mark-and-sweep”的可以这样理解，浏览器处理JavaScript并非采用纯粹的垃圾收集，还使用引用计数来为Native对象(例如Dom、ActiveX Object)处理内存。")]),t._v(" "),e("p",[t._v("在引用计数系统，每个所引用的对象都会保留一个计数，以获悉有多少对象正在引用它。如果计数为零，该对象就会被销毁，其占用的内存也会返回给堆。 当对象相互引用时，就构成循环引用，浏览器（IE6，Firefox2.0）对于纯粹的JavaScript对象间的循环引用是可以正确处理的，但由于在引用计数系统，相互引用的对象都不能被销毁，因为是引用计数永远不能为零，因此浏览器无法处理JavaScript与Native对象(例如Dom、ActiveX Object)之间循环引用。所以，当我们出现Native对象与JavaScript对象间的循环引用时，就会出现内存泄漏的问题。")]),t._v(" "),e("p",[t._v("简单来说就是，"),e("strong",[t._v("浏览器使用引用计数来为Native对象处理内存，而引用计数的对象无法被销毁")]),t._v("，涉及Native对象的循环引用将会出现内存泄漏。配合下面的例子，理解这句话，基本上就可以理解JavaScript造成的内存泄漏了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var obj;\nwindow.onload = function(){\n    // JavaScript对象obj到DOM对象的引用，根据id获得\n    obj=document.getElementById("DivElement");\n　　// DOM 对象则有到此 JavaScript 对象的引用，由expandoProperty实现\n　　document.getElementById("DivElement").expandoProperty=obj;\n};\n')])])]),e("p",[t._v("可见，JavaScript 对象和 DOM 对象间就产生了一个循环引用。由于 DOM 对象是通过引用计数管理的，所以两个对象将都不能销毁。")]),t._v(" "),e("p",[e("strong",[t._v("另一种情况是闭包中")]),t._v("，当碰到闭包，我们在Native对象上绑定事件响应代码时，很容易制造出Closure Memory Leak。其关键原因和前者是一样的，也是一个跨JavaScript对象和Native对象的循环引用。只是代码更为隐蔽。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('window.onload = function  AttachEvents(element){\n　　//element有个引用指向函数ClickEventHandler() \n　　element.attachEvent( " onclick " , ClickEventHandler);\n    function  ClickEventHandler(){\n    //该函数有个引用指向AttachEvents(element)调用Scope，\n　　 //也就是执行了参数element。\n　　}\n}\n')])])]),e("p",[t._v("这里简单理解了JavaScript造成内存泄漏的原因，内存泄漏加大浏览器的负担，很有可能导致浏览器崩溃，我们要做的就是尽量去避免这种情况，做法可参考刚刚所说《Memory leak patterns in JavaScript》和《Understanding and Solving Internet Explorer Leak Patterns》两篇文章加以理解。处理JavaScript内存泄漏最终目的还是要打破JavaScript对象和Native对象间的循环引用或者清零引用计数，释放对象。")]),t._v(" "),e("p",[t._v("一些内存泄漏如闭包内存泄漏，我们可能比较难以发现，内存泄漏的检测我们可查看"),e("a",{attrs:{href:"https://colastar.github.io/blogs/views/no.4/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E8%B0%83%E8%AF%95.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("高级调试工具之memory标签页"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"网页代码复杂和浏览器bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页代码复杂和浏览器bug","aria-hidden":"true"}},[t._v("#")]),t._v(" 网页代码复杂和浏览器bug")]),t._v(" "),e("p",[t._v("大量个人网站和低质量网站代码的涌现造成对浏览标准的普遍不支持，如果正好碰上浏览器存在的一些bug，浏览器渲染引擎在处理这些网页代码的时候会出错，比如"),e("strong",[t._v("陷入死循环或直接崩溃")]),t._v("等。")]),t._v(" "),e("h3",{attrs:{id:"html代码导致网站崩溃"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html代码导致网站崩溃","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML代码导致网站崩溃")]),t._v(" "),e("p",[t._v("这是HTML结构错误而导致IE6的崩溃，在"),e("code",[t._v('<col width="100"/>')]),t._v("前或后添加任何字符均会导致IE6 Crash。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n"http://www.w3.org/TR/html4/loose.dtd">\n <html>\n<head></head>\n<body>\n　<table>\n     <tr>\n       <td>\n         <table style="width:100%;table-layout:fixed;">\n           <colgroup><col width="100px"><col></colgroup>\n         </table>\n       </td>\n     </tr>\n<table>\n</body>\n</html>\n')])])]),e("p",[t._v("该代码来个韩国的一个网站，无论是使用XHTML或者HTML的什么版本，只要带了DOCTYPE声明，IE6就会立即崩溃，当不带DOCTYPE声明的时候就没有错误，原因可能跟文档类型声明有关。")]),t._v(" "),e("h3",{attrs:{id:"令ie6崩溃的css代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#令ie6崩溃的css代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 令IE6崩溃的CSS代码")]),t._v(" "),e("p",[t._v("该代码参考自网站Cats who Code。该Bug发现与2007年，据说是一名日本人发现的：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<style>*{position:relative}</style>\n<table><input></table>\n")])])]),e("p",[t._v("原因在于table中直接放置内容，在IE6会引起"),e("code",[t._v("mshtml.dll")]),t._v("模块损坏而关闭浏览器，非IE6则安全无恙。")]),t._v(" "),e("p",[t._v("除此之外，存在于IE6的Bug还有下面这种情况，当伪类为 "),e("code",[t._v("a:active")]),t._v(" 时同样会遇到此问题：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n a{position:relative;}\n a:hover{float:left;}\n </style>\n<a href="">崩溃IE6 ，crash ie6</a>\n')])])]),e("p",[e("strong",[t._v("解决方案")]),t._v("：为"),e("code",[t._v("<a>")]),t._v("添加 "),e("code",[t._v("zoom:1")]),t._v("; 令其触发"),e("code",[t._v("haslayout")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n a{position:relative;zoom:1;}\n a:hover{float:left;}\n </style>\n')])])]),e("h3",{attrs:{id:"令ie7崩溃的css代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#令ie7崩溃的css代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 令IE7崩溃的CSS代码")]),t._v(" "),e("p",[t._v("此Bug来自偷米饭，它只存在IE7中据估计是处理省略字的时候导致IE7崩溃。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n div{float:left;width:175px;}\n ul{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}\n li{position:relative;}\n </style>\n<div>\n  <ul>\n    <li>崩溃崩溃崩溃崩溃崩溃crash ie7</li>\n    <li>崩溃崩溃崩溃崩溃崩溃crash ie7</li>\n  </ul>\n</div>\n')])])]),e("p",[e("strong",[t._v("解决方案")]),t._v("：为 "),e("code",[t._v("<li>")]),t._v(" 添加"),e("code",[t._v("zoom:1")]),t._v("; 令其触发"),e("code",[t._v("haslayout")])]),t._v(" "),e("p",[t._v("令IE6崩溃的JavaScript代码")]),t._v(" "),e("p",[t._v("来自Internet Explorer Sucks，这个网站就是使用了一下代码，当你使用IE6访问的时候，浏览器将立刻崩溃。代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<script>for (x in document.write) { document.write(x);}<\/script>\n")])])]),e("p",[t._v("具体引起的原因暂时无法解析，但在兼容性和执行效率来看一般不会采取这样的写法。")]),t._v(" "),e("h2",{attrs:{id:"网页数据过多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页数据过多","aria-hidden":"true"}},[t._v("#")]),t._v(" 网页数据过多")]),t._v(" "),e("p",[t._v("网页含有"),e("strong",[t._v("大量需要处理的数据，造成系统繁忙")]),t._v("，如多图页面，超长页面等，或者网页内嵌的各种控件会导致浏览器处理大量数据，造成系统繁忙。如Flash游戏，ActiveX控件等。当浏览器访问网站的时候，如果网站的数据量大，会使得浏览器一般在处理过程中会占用很大的CPU使用率和内存、造成浏览器失去响应，甚至会使电脑系统死机。在网站开发的时候，如果充分考虑Web性能，很大程度上能避免这个问题。")]),t._v(" "),e("h2",{attrs:{id:"ajax的web服务漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax的web服务漏洞","aria-hidden":"true"}},[t._v("#")]),t._v(" Ajax的Web服务漏洞")]),t._v(" "),e("p",[t._v("Ajax的是基于XML的异步传输，文本格式的XML消息可能是二进制数据带宽量的两倍之多。传输XML消息所需的带宽越多，系统或应用程序用来执行其他任务的可用资源就越少。例如执行复杂算法来获取期望结果。")]),t._v(" "),e("p",[t._v("过高的带宽可能导致由系统超载引起的性能减退。过高的带宽将导致Ajax应用程序输出破损的数据，因为没有足够的资源生成干净的数据。这意味着Web服务门户(Ajax应用程序属于其中的一部分)将把破损数据暴露给门户的其他部分，从而导致畸形消息和过度解析。如果威胁者利用了这个漏洞，则会引起浏览器崩溃。")]),t._v(" "),e("p",[t._v("另外一方面，频繁的、较小的 HTTP 请求会加重后端服务器、负载均衡程序和防火墙的负担，结果是造成过高的带宽，最终导致性能降低。如果客户端长期停留在该页面或没有关闭浏览器，会使得浏览器的内存持续上涨，得不到释放，导致客户端浏览器崩溃。")]),t._v(" "),e("p",[t._v("为此，在较多的时候Ajax的时候，我们要考虑通过专门的硬件加速器、优化软件、消除代码冗余、XML加速功能和解决互操作性问题等方式加速Ajax应用程序。另外，积极地监视通信流可以持续地度量Ajax应用程序的网络流量性能。通过将数据放入实时日志中，您可以查看在哪些位置何时出现大量的包丢失和抖动事件，响应变慢的原因以及如何通过修改应用程序的优先级来改善通信流性能。")]),t._v(" "),e("h2",{attrs:{id:"其他原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他原因")]),t._v(" "),e("p",[t._v("除以上提到的原因之外，还有其他许多原因，虽然有些不会导致浏览器直接崩溃，但也会造成网站无法访问，如日志文件导致磁盘已满、Web服务器C指针错误、进程缺乏文件描述符、线程死锁、数据库中的临时表不够用和服务器超载等，可参考《导致Web站点崩溃最常见的七大原因》。")]),t._v(" "),e("p",[t._v("总结")]),t._v(" "),e("p",[t._v("在我们从事网站开发维护的时候，我们应该尽量去避免内存泄漏、代码错误和冗余及数据量过大等问题，构建更佳性能的站点。")])])},[],!1,null,null,null);a.default=n.exports}}]);