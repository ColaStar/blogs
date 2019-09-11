(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{160:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前端性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端性能优化")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"浏览器渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Navigation_Timing.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Navigation_Timing.png",alt:""}})])]),t._v(" "),e("p",[t._v("W3C专门定义的api（嵌入关键节点的API）就是浏览器渲染的标准过程。")]),t._v(" "),e("p",[t._v("Navigation_Timing可以帮助我们调试。")]),t._v(" "),e("p",[t._v("过程大体可以分为三层，如下图：")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/navgation_timing1.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/navgation_timing1.png",alt:""}})])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("敲下回车")])]),t._v(" "),e("li",[e("p",[t._v("1.prompt forunload（提示卸载）")])])]),t._v(" "),e("p",[t._v("当新的页面要被请求的时候，把旧的页面干掉，当然还是没有去请求新的页面。")]),t._v(" "),e("p",[t._v("开始navigation")]),t._v(" "),e("ul",[e("li",[t._v("redirect")])]),t._v(" "),e("p",[t._v("首先做本地重定向（查本地是否有缓存）,\n并行操作unload（卸载）把上一个页面干掉，重缓存里边取新的页面。")]),t._v(" "),e("ul",[e("li",[t._v("3.App cache")])]),t._v(" "),e("p",[t._v("开始拿资源")]),t._v(" "),e("p",[t._v("没过期从本地拿然后直接processing最后交给渲染器，显卡去。")]),t._v(" "),e("p",[t._v("如果缓存过期了，进行网络请求资源。走到网络层")]),t._v(" "),e("ul",[e("li",[t._v("DNS域名解析")])]),t._v(" "),e("p",[t._v("domainnLookupStart与domainnLookupEnd")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("建立TCP链接\nconnectstart tcp链接\nsecureConnectStart  ssl加密链接开始")])]),t._v(" "),e("li",[e("p",[t._v("http流程\nrequrest与response\n这块受网络状态，数据量大小，CDN技术的就近原则\n响应结束")])]),t._v(" "),e("li",[e("p",[t._v("processing（资源回来了，一个html）只是一个文本文件。")])])]),t._v(" "),e("p",[t._v("把文档放到内存里，把文档解析成dom结构对象，把dom结构内的内嵌资源加载，进行请求，dom内容加载完毕后，生成渲染页面的dom的树结构，文档处理完了，开始处理事件，第一个事件是onload事件，")]),t._v(" "),e("p",[e("strong",[t._v("具体流程：")])]),t._v(" "),e("p",[t._v("开始浏览器器渲染")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/浏览器渲染过程.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B.png",alt:""}})]),t._v("\n1).浏览器会解析三个东西：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("一.是HTML/SVG/XHTML，HTML字符串描述了一个页面的结构，浏览器会把HTML结构字符串解析转换DOM树形结构。\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/DOM树形结构.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/DOM%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84.png",alt:""}})])])]),t._v(" "),e("li",[e("p",[t._v("二.是CSS，解析CSS会产生CSS规则树，它和DOM结构比较像。\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/css规则树.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/css%E8%A7%84%E5%88%99%E6%A0%91.png",alt:""}})])])]),t._v(" "),e("li",[e("p",[t._v("三.是Javascript脚本，等到Javascript 脚本文件加载后， 通过 DOM API 和 CSSOM API 来操作 DOM Tree 和 CSS Rule Tree。")])])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Javascript脚本.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Javascript%E8%84%9A%E6%9C%AC.png",alt:""}})])]),t._v(" "),e("p",[t._v("2).解析完成后，")]),t._v(" "),e("p",[t._v("**构建渲染树:**浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 （Rendering Tree/Frame Tree）")]),t._v(" "),e("p",[t._v("Rendering Tree 渲染树并不等同于DOM树，渲染树只会包括需要显示的节点和这些节点的样式信息。")]),t._v(" "),e("p",[t._v("CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加到Rendering Tree上的每个Element（也就是每个Frame）。")]),t._v(" "),e("p",[e("strong",[t._v("布局渲染树")]),t._v(":从根节点递归调用，计算每一个元素的大小、位置等，给出每个节点所应该在屏幕上出现的精确坐标；即计算每个Frame 的位置。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("onload")])]),t._v(" "),e("li",[e("p",[t._v("开始render页面怎么显示交给显卡去操作（绘制渲染树: 遍历渲染树，使用UI后端层来绘制每个节点。）")])])]),t._v(" "),e("h2",{attrs:{id:"性能优化启示录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化启示录","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能优化启示录")]),t._v(" "),e("h3",{attrs:{id:"为什么要进行性能优化？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要进行性能优化？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么要进行性能优化？")]),t._v(" "),e("p",[e("strong",[t._v("性能优化的白皮书中")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("57%的⽤户更在乎⽹⻚在3秒内是否完成加载。")]),t._v(" "),e("li",[t._v("52%的在线⽤户认为⽹⻚打开速度影响到他们对⽹站的忠实度。")]),t._v(" "),e("li",[t._v("每慢1秒造成⻚⾯ PV 降低11%，⽤户满意度也随之降低降低16%。")]),t._v(" "),e("li",[t._v("近半数移动⽤户因为在10秒内仍未打开⻚⾯从⽽放弃。")])]),t._v(" "),e("h3",{attrs:{id:"性能优化学徒工"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化学徒工","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能优化学徒工")]),t._v(" "),e("h4",{attrs:{id:"雅虎军规"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#雅虎军规","aria-hidden":"true"}},[t._v("#")]),t._v(" 雅虎军规")]),t._v(" "),e("p",[t._v("雅虎军规：核心：压缩合并与md5，html/css做hint，开启gzip，")]),t._v(" "),e("h4",{attrs:{id:"使用cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用cdn")]),t._v(" "),e("p",[t._v("多个cdn资源->百度首页的cookie非常大，静态资源不需要，所以换一个域名而不是没次请求的时候都会带着。网站会有并发限制，用cdn的话就不会有了。")]),t._v(" "),e("h4",{attrs:{id:"网站协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网站协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站协议")]),t._v(" "),e("p",[e("strong",[t._v("http1中的keep-live")])]),t._v(" "),e("p",[t._v("例子：")]),t._v(" "),e("p",[t._v("即客户端向服务器发送一个请求信息，服务器来响应这个信息。在老的HTTP版本中，每个请求都将被创建一个新的客户端->服务器的连接，在这个连接上发送请求，然后接收请求。这样的模式有一个很大的优点就是，它很简单，很容易理解和编程实现；它也有一个很大的缺点就是，它效率很低，因此Keep-Alive被提出用来解决效率低的问题。Keep-Alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接。市场上 的大部分Web服务器，包括iPlanet、IIS和Apache，都支持HTTPKeep-Alive。对于提供静态内容的网站来说，这个功能通常很有用。但是，对于负担较重的网站来说，这里存在另外一个问题：虽然为客户保留打开的连 接有一定的好处，但它同样影响了性能，因为在处理暂停期间，本来可以释放的资源仍旧被占用。当Web服务器和应用服务器在同一台机器上运行时，Keep-Alive功能对资源利用的影响尤其突出。 此功能为HTTP 1.1预设的功能，HTTP 1.0加上Keep-Aliveheader也可以提供HTTP的持续作用功能。")]),t._v(" "),e("p",[t._v("Keep-Alive: timeout=5, max=100")]),t._v(" "),e("p",[t._v("timeout：过期时间5秒（对应httpd.conf里的参数是：KeepAliveTimeout），max是最多一百次请求，强制断掉连接")]),t._v(" "),e("p",[t._v("http2的多路复用\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/http2的多路复用1.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/http2%E7%9A%84%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A81.png",alt:""}})])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/性能优化.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.png",alt:""}})])]),t._v(" "),e("h4",{attrs:{id:"memory-cache-disk-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache-disk-cache","aria-hidden":"true"}},[t._v("#")]),t._v(" memory-cache/disk-cache")]),t._v(" "),e("p",[t._v("webkit的资源分类主要是俩大类：主资源和派生资源")]),t._v(" "),e("blockquote",[e("p",[t._v("200 from memory cache")])]),t._v(" "),e("p",[t._v("字面理解是从内存中，其实也是字面的含义，这个资源是直接从内存中拿到的，"),e("strong",[t._v("不会请求服务器")]),t._v("一般已经加载过该资源且缓存在了内存当中，当关闭该页面时，此资源就被内存释放掉了，再次重新打开相同页面时不会出现from memory cache的情况")]),t._v(" "),e("blockquote",[e("p",[t._v("200 from disk cache")])]),t._v(" "),e("p",[t._v("同上类似，此资源是从磁盘当中取出的，也是在已经在之前的某个时间加载过该资源，"),e("strong",[t._v("不会请求服务器")]),t._v("但是此资源不会随着该页面的关闭而释放掉，因为是存在硬盘当中的，下次打开仍会from disk cache")]),t._v(" "),e("p",[t._v("只有当前的派生资源才会进行缓存，主文件是不缓存的，除非设置它要缓存，")]),t._v(" "),e("p",[t._v("memory缓存的css/js/image，就是在disk上缓存一瞬间，然后放到memory中，放memory中，放满了到disk里（主要是跟系统配置有关系）。")]),t._v(" "),e("blockquote",[e("p",[t._v("304 Not Modified\n访问服务器，发现数据没有\n更新，服务器返回此状态码。然后从缓存中读取数据。")])]),t._v(" "),e("h4",{attrs:{id:"三级缓存原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三级缓存原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 三级缓存原理")]),t._v(" "),e("ul",[e("li",[t._v("1.先去内存看，如果有，直接加载")]),t._v(" "),e("li",[t._v("2.如果内存没有，择取硬盘获取，如果有直接加载")]),t._v(" "),e("li",[t._v("3.如果硬盘也没有，那么就进行网络请求")]),t._v(" "),e("li",[t._v("4.加载到的资源缓存到硬盘和内存")])]),t._v(" "),e("p",[t._v("访问-> 200 -> 退出浏览器")]),t._v(" "),e("p",[t._v("再进来-> 200(from disk cache) -> 刷新 -> 200(from memory cache)")]),t._v(" "),e("p",[t._v("缓存优先级")]),t._v(" "),e("p",[t._v("last-modified/if-modified-since -> Etag/if-none-march -> expires/cache-Conctl")]),t._v(" "),e("p",[t._v("一般库文件会做一些http的缓存，因为库文件不是频繁变动，做强缓（过期时间999年），业务文件（etag/last-modified/离线缓存）")]),t._v(" "),e("h4",{attrs:{id:"离线缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离线缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 离线缓存")]),t._v(" "),e("p",[t._v("websql可以存50m，它是关系型数据库。但是读取速度缓慢，它是异步离线缓存，有可能比你的网络请求还长，他主要依赖硬件。")]),t._v(" "),e("p",[t._v("IndexDB是非关系型数据库。")]),t._v(" "),e("p",[t._v("2种方案： orm（本地持久化缓存方案）")]),t._v(" "),e("p",[t._v("方法一：")]),t._v(" "),e("p",[e("code",[t._v("webpack")]),t._v("用"),e("code",[t._v("webpack-manifest-pugin")]),t._v("打包一份"),e("code",[t._v("key")]),t._v("的"),e("code",[t._v("js")]),t._v("（存"),e("code",[t._v("localstore")]),t._v("的"),e("code",[t._v("key")]),t._v("，"),e("code",[t._v("value")]),t._v("）\n过程：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    1.本地缓存去取a.js\n    2.有激活js addscript\n        a.js与a.xx42.js对比\n        更新a.js - >a.xx44.js\n        a.xx44.js删除\n        跳回3\n    3.没有\n        a.xx44.js 放到缓存到\n        localstore缓存html 、js文件/css文件等，\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("无痕模式/急速模式 时：（什么都不会支持的时候,可以解决"),e("code",[t._v("backet.js")]),t._v("+"),e("code",[t._v("localforage")]),t._v("）")]),t._v(" "),e("h4",{attrs:{id:"dns详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns详解","aria-hidden":"true"}},[t._v("#")]),t._v(" DNS详解")]),t._v(" "),e("p",[t._v("DNS是Domain Name System ，域名系统")]),t._v(" "),e("p",[t._v("他就是用来做域名转换的")]),t._v(" "),e("h5",{attrs:{id:"_1-顶级域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-顶级域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.顶级域名")]),t._v(" "),e("p",[t._v("比如百度  "),e("code",[t._v("baidu.com")])]),t._v(" "),e("p",[t._v("www.baidu.com www其实是二级域名")]),t._v(" "),e("p",[t._v("后缀 .com/.cn/.net等")]),t._v(" "),e("h5",{attrs:{id:"_2-域名服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-域名服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.域名服务器")]),t._v(" "),e("p",[t._v("若干个级别")]),t._v(" "),e("h5",{attrs:{id:"_3-域名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-域名解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.域名解析")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/dns.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/dns.png",alt:""}})]),t._v("\n俩种方式：")]),t._v(" "),e("p",[t._v("1.正向解析：域名到IP")]),t._v(" "),e("p",[t._v("2.反向解析ip到域名")]),t._v(" "),e("blockquote",[e("p",[t._v("解析过程：")])]),t._v(" "),e("p",[t._v("1.客户端到运营商服务器")]),t._v(" "),e("p",[t._v("2.首先查缓存")]),t._v(" "),e("p",[t._v("3.如果没有，去找根服务器（17台），他的作用返回后缀，告诉你通过.com去某台TLD server进行下次查询")]),t._v(" "),e("p",[t._v("4.TLD server（只保存着顶级域名的name server地址）解析顶级域名（.com的TLD/.cn的TLD）")]),t._v(" "),e("p",[t._v("5.name server查到最终的url，即解析到他的2.3.4.5....级域名")]),t._v(" "),e("blockquote",[e("p",[t._v("dns优化")])]),t._v(" "),e("p",[t._v("优化是在运营商那而做一个大的缓存")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：")])]),t._v(" "),e("p",[t._v("阿里云是一整套全部包括了，而不是name server")]),t._v(" "),e("h5",{attrs:{id:"域名资源记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名资源记录","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名资源记录")]),t._v(" "),e("p",[t._v("记录类型\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/dns_histrory.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/dns_histrory.png",alt:""}})]),t._v("\n注意：")]),t._v(" "),e("ul",[e("li",[t._v("A记录主要是解析ipv4的；")]),t._v(" "),e("li",[t._v("ipv6主机记录用来解析ipv6")]),t._v(" "),e("li",[t._v("切换服务器时更改，cname的妙用\n正常是所有的域名指向vps即多个A记录，如果用cname的话要一个A记录其他都是cname了")])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/dns_historoy2.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/dns_historoy2.png",alt:""}})])]),t._v(" "),e("h4",{attrs:{id:"tcp三次握手与四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手与四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP三次握手与四次挥手")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/tcp三次握手与四次挥手.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E4%B8%8E%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.png",alt:""}})])]),t._v(" "),e("p",[t._v("发送数据包的时候，数据包向下传递的时候逐层回家一个头，应用层->表示层->会话层 传输层 网络层 数据链路层 物理层（010101）->数据链路层 网络层 传输层 回话层 表示层 应用层")]),t._v(" "),e("p",[t._v("相当于加封再解封的过程。")]),t._v(" "),e("p",[t._v("像一个洋葱，一层一层的往外包")]),t._v(" "),e("p",[t._v("这个头有什么用？验证，为本层次服务，每一层都有自己的顺序号。")]),t._v(" "),e("p",[t._v("相当于是快递公司一样")]),t._v(" "),e("p",[t._v("TCP协议模型的详解")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/TCP协议模型的详解"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/TCP%E5%8D%8F%E8%AE%AE%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%AF%A6%E8%A7%A3",alt:""}})])]),t._v(" "),e("p",[t._v("ping命令用的ICMP协议（数据报协议）\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/tcp协议头"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/tcp%E5%8D%8F%E8%AE%AE%E5%A4%B4",alt:""}})]),t._v("\ntcp协议头至少要占24个字节。这些数据都是2进制数据（因为2进制数据紧凑），http是文档。")]),t._v(" "),e("p",[t._v("source：源端口，占2个字节，最大值2的16次方减1")]),t._v(" "),e("p",[t._v("destinationPort 服务端口（目的端口）默认端口80，必须是80端口，如果不是，tcp不认，占2个字节最大值2的16次方减1")]),t._v(" "),e("p",[t._v("sequence Number：顺序号（整型），为啥要编号呢？因为数据是被分割开逐个传输，如果中间丢包的话，服务器可以通过顺序号去判断是否重新补包，后边再组装，这样可以保证及时性和可靠性，占4个字节，最大值2的32次方。就向搬家一样给家具编号。")]),t._v(" "),e("p",[t._v("Acknowledgment Number 应答号：\n这个号码可以干嘛呢？  如果丢包了 接收端发给发送端的丢包编码。")]),t._v(" "),e("p",[t._v("offset 偏移量（决定头的大小）")]),t._v(" "),e("h5",{attrs:{id:"tcp与udp的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" tcp与udp的区别")]),t._v(" "),e("p",[t._v("tcp相当于打电话\n拨号 接起电话 你喂 对方回应喂 然后说话 你说挂，看还有什么没做，他说没没了挂吧 然后挂")]),t._v(" "),e("p",[t._v("udp只管发，发没发到它不管，相当于广播找人。找不找的到它不管。")]),t._v(" "),e("h5",{attrs:{id:"tcp的三次握手与四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp的三次握手与四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" tcp的三次握手与四次挥手")]),t._v(" "),e("p",[t._v("在通信这一块，谁发起通信谁是客户端。")]),t._v(" "),e("p",[t._v("发起请求和断开连接请求都是客户端发起的")]),t._v(" "),e("p",[t._v("双向通信")]),t._v(" "),e("p",[t._v("三次握手就是tcp建立链接时的通信")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.客户端发送链接请求（syn）同时发送一个seq顺序号")])]),t._v(" "),e("li",[e("p",[t._v("2.服务器发送连接请求响应客户端的连接请求（syn） 和一个顺序号seq以及一个应答号（客户端发过来的顺序号加一）是放在一个包里的")])]),t._v(" "),e("li",[e("p",[t._v("3.客户端表示收到服务器的请求发送一个应答号（服务器的顺序号加一）")])]),t._v(" "),e("li",[e("p",[t._v("4.连接成功")])])]),t._v(" "),e("p",[t._v("开始数据传输（来来回回n次）顺序号与应答号一直叠加")]),t._v(" "),e("p",[t._v("四次挥手就是断开连接的通信（）")]),t._v(" "),e("ul",[e("li",[t._v("客户端发送服务情请求断开连接的包，并且询问通知服务器要断开请求，询问活干完没，一个顺序号。")]),t._v(" "),e("li",[t._v("服务器 发送一个收到请求的应答号的包，然后检查一下工作是否完成，向客户端发送一个断开确认的包，顺序号。")]),t._v(" "),e("li",[t._v("收到断开确认包后，向服务器发送断开确认的包，应答号。")])]),t._v(" "),e("blockquote",[e("p",[t._v("双向双工通信，单向单工通信")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("单向: 一个端只能向另一端发送，但不能接受，即一段只有发送工具，一端只有接受的功能。")])]),t._v(" "),e("li",[e("p",[t._v("双向：俩端可以互相传。")])]),t._v(" "),e("li",[e("p",[t._v("单工：如果是双向通信的话，当一方在向另一方发送，另一方不能向对方发送数据")])]),t._v(" "),e("li",[e("p",[t._v("双工：如果是双向通信的话，当一方在向另一方发送，另一方可以同时向对方发送数据，")])])]),t._v(" "),e("p",[t._v("例子：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对讲机是单工双向通信；")])]),t._v(" "),e("li",[e("p",[t._v("电话是双工通信")])])]),t._v(" "),e("h4",{attrs:{id:"cdn概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn概念","aria-hidden":"true"}},[t._v("#")]),t._v(" CDN概念")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/cdn.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/cdn.png",alt:""}})])]),t._v(" "),e("p",[t._v("图一：集中式（传统的网络）必须从一台服务器上请求")]),t._v(" "),e("p",[t._v("带宽，距离，一个服务器造成延迟与服务器压力问题")]),t._v(" "),e("p",[t._v("图二：cdn模式（讲求近就原则）")]),t._v(" "),e("p",[t._v("即产生多个镜像服务器，解决了服务器压力以及延迟")]),t._v(" "),e("p",[t._v("CDN缓存")]),t._v(" "),e("p",[t._v('CDN缓存属于Cache服务器的一种。\nCDN的全称是Content Delivery Network，即内容分发网络。其目的是通过在现有的Internet中增加一层新的网络架构，将网站的内容发布到最接近用户的网络"边缘"，使用户可 以就近取得所需的内容，解决Internet网络拥塞状况，提高用户访问网站的响应速度。从技术上全面解决由于网络带宽小、用户访问量大、网点分布不均等 原因，解决用户访问网站的响应速度慢的根本原因。')]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/cdn缓存.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/cdn%E7%BC%93%E5%AD%98.png",alt:""}})])]),t._v(" "),e("p",[t._v("通过上图，我们可以了解到，使用了CDN缓存后的网站的访问过程为：\n　　1)、用户向浏览器提供要访问的域名；\n　　2)、浏览器调用域名解析库对域名进行解析，由于CDN对域名解析过程进行了调整，所以解析函数库一般得到的是该域名对应的CNAME记录，为了得到实际IP地址，浏览器需要再次对获得的CNAME域名进行解析以得到实际的IP地址；在此过程中，使用的全局负载均衡DNS解析，如根据地理位置信 息解析对应的IP地址，使得用户能就近访问。\n　　3)、此次解析得到CDN缓存服务器的IP地址，浏览器在得到实际的IP地址以后，向缓存服务器发出访问请求；\n　　4)、若请求文件并未修改，返回304（充当服务器的角色）。若当前文件已过期，则缓存服务器根据浏览器提供的要访问的域名，通过Cache内部专用DNS解析得到此域名的实际IP地址，再由缓存服务器向此实际IP地址提交访问请求；\n　　5)、缓存服务器从实际IP地址得得到内容以后，一方面在本地进行保存，以备以后使用，二方面把获取的数据返回给客户端，完成数据服务过程；\n　　6)、客户端得到由缓存服务器返回的数据以后显示出来并完成整个浏览的数据请求过程。")]),t._v(" "),e("h4",{attrs:{id:"http缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http缓存机制","aria-hidden":"true"}},[t._v("#")]),t._v(" http缓存机制")]),t._v(" "),e("p",[t._v("缓存优先级\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/缓存优先级.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E7%BC%93%E5%AD%98%E4%BC%98%E5%85%88%E7%BA%A7.png",alt:""}})])]),t._v(" "),e("p",[t._v("浏览器第一次请求流程图\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/请求缓存的流程2.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E8%AF%B7%E6%B1%82%E7%BC%93%E5%AD%98%E7%9A%84%E6%B5%81%E7%A8%8B2.png",alt:""}})]),t._v("\n浏览器再次请求时\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/请求缓存的流程2.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E8%AF%B7%E6%B1%82%E7%BC%93%E5%AD%98%E7%9A%84%E6%B5%81%E7%A8%8B2.png",alt:""}})]),t._v("\n缓存会根据请求保存输出内容的副本，例如html页面，图片，文件，当下一个请求来到的时候:如果是相同的URL，缓存直接使用副本响应访问请求，而不是向源服务器再次发送请求，。\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/用户行为与缓存.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E4%B8%8E%E7%BC%93%E5%AD%98.png",alt:""}})]),t._v("\n浏览器缓存行为还有用户的行为有关")]),t._v(" "),e("p",[t._v("缓存的优点：")]),t._v(" "),e("ul",[e("li",[t._v("减少相应延迟，提高响应速度")]),t._v(" "),e("li",[t._v("减少网络带宽消耗")])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/缓存机制.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6.png",alt:""}})])]),t._v(" "),e("p",[t._v("浏览器的缓存是强制缓存与对比缓存搭配起来用的")]),t._v(" "),e("p",[t._v("缓存分为俩大类：\n强制缓存不管服务器是否要求都要缓存")]),t._v(" "),e("p",[t._v("对比缓存，通过与服务器对比去缓存（把缓存标记和时间确定是否要去缓存）；")]),t._v(" "),e("h5",{attrs:{id:"强制缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 强制缓存")]),t._v(" "),e("p",[t._v("强制缓存，服务器通知浏览器一个缓存时间，在缓存时内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。")]),t._v(" "),e("p",[t._v("对于强制缓存来说，响应header中会有两个字段来标明失效规则（Expires/Cache-Control）\n使用chrome的开发者工具，可以很明显的看到对于强制缓存生效时，网络请求的情况")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/强制缓存-浏览器.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E5%BC%BA%E5%88%B6%E7%BC%93%E5%AD%98-%E6%B5%8F%E8%A7%88%E5%99%A8.png",alt:""}})])]),t._v(" "),e("p",[e("strong",[t._v("Expires")])]),t._v(" "),e("p",[t._v("Expires的值为服务端返回的到期时间，即下一次请求时，请求时间小于服务端返回的到期时间，直接使用缓存数据。\n不过Expires 是HTTP 1.0的东西，现在默认浏览器均默认使用HTTP 1.1，所以它的作用基本忽略。\n另一个问题是，到期时间是由服务端生成的，但是客户端时间可能跟服务端时间有误差，这就会导致缓存命中的误差。\n所以HTTP 1.1 的版本，使用Cache-Control替代。")]),t._v(" "),e("p",[e("strong",[t._v("Cache-Control")])]),t._v(" "),e("p",[t._v("Cache-Control 是最重要的规则。常见的取值有private、public、no-cache、max-age，no-store，默认为private。")]),t._v(" "),e("ul",[e("li",[t._v("private: 客户端可以缓存")]),t._v(" "),e("li",[t._v("public: 客户端和代理服务器都可缓存（前端的同学，可以认为public和private是一样的）")]),t._v(" "),e("li",[t._v("max-age=xxx: 缓存的内容将在 xxx 秒后失效")]),t._v(" "),e("li",[t._v("no-cache: 需要使用对比缓存来验证缓存数据（后面介绍）")]),t._v(" "),e("li",[t._v("no-store: 所有内容都不会缓存，强制缓存，对比缓存都不会触发（对于前端开发来说，缓存越多越好，so…基本上和它说886）")])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/强缓存-请求头.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E5%BC%BA%E7%BC%93%E5%AD%98-%E8%AF%B7%E6%B1%82%E5%A4%B4.png",alt:""}})])]),t._v(" "),e("p",[t._v("图中Cache-Control仅指定了max-age，所以默认为private，缓存时间为31536000秒（365天）\n也就是说，在365天内再次请求这条数据，都会直接获取缓存数据库中的数据，直接使用。")]),t._v(" "),e("h5",{attrs:{id:"比较缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#比较缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 比较缓存")]),t._v(" "),e("ul",[e("li",[t._v("比较缓存，顾名思义，需要进行比较判断是否可以使用缓存，也叫协商缓存，")])]),t._v(" "),e("p",[t._v("浏览器第一次请求数据时，服务器会将缓存标识与数据一起返回给客户端，客户端将二者备份至缓存数据库中。 再次请求数据时，客户端将备份的缓存标识发送给服务器，服务器根据缓存标识进行判断，判断成功后，返回304状态码，通知客户端比较成功，可以使用缓存数据。")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/比较缓存-浏览器.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E6%AF%94%E8%BE%83%E7%BC%93%E5%AD%98-%E6%B5%8F%E8%A7%88%E5%99%A8.png",alt:""}})])]),t._v(" "),e("p",[t._v("通过两图的对比，我们可以很清楚的发现，在对比缓存生效时，状态码为304，并且报文大小和请求时间大大减少。\n原因是，服务端在进行标识比较后，只返回header部分，通过状态码通知客户端使用缓存，不再需要将报文主体部分返回给客户端。")]),t._v(" "),e("p",[t._v("对于对比缓存来说，缓存标识的传递是我们着重需要理解的，它在请求header和响应header间进行传递，\n一共分为两种标识传递或者叫俩种策略，接下来，我们分开介绍")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Last-Modified/If-Modified-Since策略")])])]),t._v(" "),e("p",[t._v("**Last-Modified：**服务器在响应请求时，告诉浏览器资源的最后修改时间。")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"images/Last-Modified.png"}},[e("img",{attrs:{src:"images/Last-Modified.png",alt:""}})])]),t._v(" "),e("ul",[e("li",[t._v("两类缓存规则可以同时存在，强制缓存优先级高于对比缓存，也就是说，当执行强制缓存的规则时，如果缓存生效，直接使用缓存，不再执行对比缓存规则。")])]),t._v(" "),e("p",[e("strong",[t._v("If-Modified-Since：")]),t._v("\n再次请求服务器时，通过此字段通知服务器上次请求时，服务器返回的资源最后修改时间。\n服务器收到请求后发现有头If-Modified-Since 则与被请求资源的最后修改时间进行比对。\n若资源的最后修改时间大于If-Modified-Since，说明资源又被改动过，则响应整片资源内容，返回状态码200；\n若资源的最后修改时间小于或等于If-Modified-Since，说明资源无新修改，则响应HTTP 304，告知浏览器继续使用所保存的cache。")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/If-Modified-Since.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/If-Modified-Since.png",alt:""}})])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Etag/If-None-Match策略")])])]),t._v(" "),e("p",[t._v("（优先级高于Last-Modified / If-Modified-Since）")]),t._v(" "),e("p",[e("strong",[t._v("Etag：")]),t._v("\n服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Etag.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Etag.png",alt:""}})])]),t._v(" "),e("p",[e("strong",[t._v("If-None-Match:")])]),t._v(" "),e("p",[t._v("再次请求服务器时，通过此字段通知服务器客户段缓存数据的唯一标识。\n服务器收到请求后发现有头If-None-Match 则与被请求资源的唯一标识进行比对，\n不同，说明资源又被改动过，则响应整片资源内容，返回状态码200；\n相同，说明资源无新修改，则响应HTTP 304，告知浏览器继续使用所保存的cache")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/If-None-Match.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/If-None-Match.png",alt:""}})])]),t._v(" "),e("h3",{attrs:{id:"渲染中性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染中性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 渲染中性能优化")]),t._v(" "),e("p",[t._v("1.网页渲染过程")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1-1.获取dom分割成多层Parse Html\n1-2.对每一层计算样式结果 Pecalculate Style\n1-3.为每个节点生成位置和图形的过程 **重排** Layout\n1-4.将每个节点绘制并填充到图层的位图中  **重绘**  Paint\n1-5.绘制出来的纹理上传到GPU Composite Layers  合成层\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("2.大致的一个流程就是重排->重绘-> Composite Layers")]),t._v(" "),e("p",[t._v("3.网络分层")]),t._v(" "),e("p",[t._v("根元素，position，transform,半透明，滤镜，canvas，video，overflow")]),t._v(" "),e("p",[t._v("4.什么会让GPU参与成层（跳过重绘重排直接合成）？")]),t._v(" "),e("p",[t._v("webgl，css3d，video，transform，滤镜")]),t._v(" "),e("p",[t._v("5.cpu与gpu的相同点与不同点")]),t._v(" "),e("p",[t._v("相同点：俩者都有总线和外联系，有自己的缓存体系，以及数字和逻辑运算单位，诶了完成结算任务而生。")]),t._v(" "),e("p",[t._v("不同之处：CPU操作系统和应用程序，GPU显示相关，GPU的活CPU都能干，但是效率低。")]),t._v(" "),e("p",[e("strong",[t._v("重绘")]),t._v("：当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。")]),t._v(" "),e("p",[e("strong",[t._v("触发重绘的条件")]),t._v("：改变元素外观属性。如：color，box-shadow,background-color等。")]),t._v(" "),e("p",[e("strong",[t._v("重排/回流")]),t._v("：")]),t._v(" "),e("p",[t._v("当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。")]),t._v(" "),e("p",[e("strong",[t._v("下述情况会发生重排：")])]),t._v(" "),e("ul",[e("li",[t._v("添加或删除可见的DOM元素。")]),t._v(" "),e("li",[t._v("元素的位置、尺寸（内外边距、边框厚度、宽高等属性）改变")]),t._v(" "),e("li",[t._v("内容改变（文本改变或者图片大小改变而引起的计算值宽度和高度改变）")]),t._v(" "),e("li",[t._v("页面渲染器初始化")]),t._v(" "),e("li",[t._v("浏览器窗口尺寸改变——resize事件发生时。")])]),t._v(" "),e("p",[e("strong",[t._v("js中一些方法会导致重新获取布局信息,刷新渲染队列。")])]),t._v(" "),e("ul",[e("li",[t._v("offsetTop，offsetLeft，offsetWidth，offsetHeight")]),t._v(" "),e("li",[t._v("scrollTop，scrollLeft，scrollWidth，scrollHeight")]),t._v(" "),e("li",[t._v("clientTop，clientLeft，clientWidth，clientHeight")]),t._v(" "),e("li",[t._v("getComputedStyle(currentStyle in IE)")])]),t._v(" "),e("p",[t._v("所以重绘未必会发生重排，但是重排一定会发生重绘。")]),t._v(" "),e("p",[e("strong",[t._v("重绘重排的代价")]),t._v("：耗时，导致浏览器卡慢。")]),t._v(" "),e("p",[e("strong",[t._v("如何规避?")])]),t._v(" "),e("ul",[e("li",[t._v("1.分离读写操作；")]),t._v(" "),e("li",[t._v("2.样式集中改变，即将多次改变样式属性的操作合并成一次操作")]),t._v(" "),e("li",[t._v("3."),e("code",[t._v("translate")]),t._v("属性值来替换"),e("code",[t._v("top/left/right/bottom")]),t._v("的切换，"),e("code",[t._v("scale")]),t._v("属性值替换"),e("code",[t._v("width/height")]),t._v("，"),e("code",[t._v("opacity")]),t._v("属性替换"),e("code",[t._v("display/visibility")]),t._v("等等")]),t._v(" "),e("li",[t._v("4.将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。")]),t._v(" "),e("li",[t._v("5.在内存中多次操作节点，完成后再添加到文档中去。例如要异步获取表格数据，渲染到页面。可以先取得数据后在内存中构建整个表格的html片段，再一次性添加到文档中去，而不是循环添加每一行。")]),t._v(" "),e("li",[t._v("6.由于display属性为none的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发2次重排。")]),t._v(" "),e("li",[t._v("7.在需要经常取那些引起浏览器重排的属性值时，要缓存到变量。")])]),t._v(" "),e("h3",{attrs:{id:"⻚⾯加载性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⻚⾯加载性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" ⻚⾯加载性能优化")]),t._v(" "),e("h4",{attrs:{id:"fp-fcp-fmp-tti四个性能指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fp-fcp-fmp-tti四个性能指标","aria-hidden":"true"}},[t._v("#")]),t._v(" FP/FCP/FMP/TTI四个性能指标")]),t._v(" "),e("ul",[e("li",[t._v("FP：First Paint, 首次绘制（白屏时间，根节点首个div）\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/fp.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/fp.png",alt:""}})])]),t._v(" "),e("li",[t._v("FCP：First Contentful Paint, ⾸次有内容的绘制（包含⻚页⾯面的基本框架，但没有数据内容）\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/fcp.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/fcp.png",alt:""}})])]),t._v(" "),e("li",[t._v("FMP：First Meaningful Paint,⾸次有意义的绘制（包含页⾯所有元素及数据）\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/fmp.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/fmp.png",alt:""}})])]),t._v(" "),e("li",[t._v("TTI：Time To Interactive, 可交互时间")])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/fmp.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/fmp.png",alt:""}})]),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/fp_fcp_fmp.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/fp_fcp_fmp.png",alt:""}})]),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/fp_fcp_fmp2.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/fp_fcp_fmp2.png",alt:""}})])]),t._v(" "),e("p",[t._v("Long Task的表现\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/long_task.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/long_task.png",alt:""}})])]),t._v(" "),e("p",[t._v("关于VUE的执行\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/vue_fp_fcp_fmp.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/vue_fp_fcp_fmp.png",alt:""}})]),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/vue_fp_fcp_fmp2.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/vue_fp_fcp_fmp2.png",alt:""}})])]),t._v(" "),e("p",[t._v("问题：为啥会出现白屏\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/白屏原因.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/%E7%99%BD%E5%B1%8F%E5%8E%9F%E5%9B%A0.png",alt:""}})])]),t._v(" "),e("h4",{attrs:{id:"csr与ssr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csr与ssr","aria-hidden":"true"}},[t._v("#")]),t._v(" CSR与SSR")]),t._v(" "),e("h3",{attrs:{id:"nodejs性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" NodeJS性能优化")]),t._v(" "),e("p",[t._v("内存回收")]),t._v(" "),e("p",[t._v("内存快照")]),t._v(" "),e("p",[t._v("压力测试")]),t._v(" "),e("p",[t._v("监控异常")])])},[],!1,null,null,null);a.default=r.exports}}]);