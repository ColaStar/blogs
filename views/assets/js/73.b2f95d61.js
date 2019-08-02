(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{177:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"雅虎军规35条"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#雅虎军规35条","aria-hidden":"true"}},[a._v("#")]),a._v(" 雅虎军规35条")]),a._v(" "),t("h2",{attrs:{id:"内容部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容部分","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容部分")]),a._v(" "),t("h3",{attrs:{id:"_1-最小化http请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-最小化http请求","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.最小化HTTP请求")]),a._v(" "),t("p",[a._v("最终用户响应时间的80％用于前端。大部分时间都在下载页面中的所有组件：图像，样式表，脚本，Flash等。减少组件数量反过来减少了呈现页面所需的HTTP请求数量。这是更快页面的关键。")]),a._v(" "),t("p",[a._v("减少页面中组件数量的一种方法是简化页面设计。但有没有办法构建内容更丰富的页面，同时还能实现快速响应时间？")]),a._v(" "),t("p",[a._v("以下是一些减少HTTP请求数量的技术，同时仍支持丰富的页面设计。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("合并文件是通过把"),t("strong",[a._v("所有脚本放在一个文件中的方式来减少请求数的")]),a._v("，并且类似地将所有CSS组合到单个样式表中。当脚本和样式表在不同页面之间变化时，组合文件更具挑战性，但是使这部分发布过程可以缩短响应时间。")])]),a._v(" "),t("li",[t("p",[a._v("CSS Sprites是减少图像请求数量的首选方法。将背景图像合并为单个图像，并使用CSSbackground-image和background-position属性显示所需的图像片段。")])]),a._v(" "),t("li",[t("p",[a._v("图像映射可以把多张图片合并成单张图片，总大小是一样的，但减少了请求数并加速了页面加载。图片映射只有在图像在页面中连续的时候才有用，比如导航条。给image map设置坐标的过程既无聊又容易出错，用image map来做导航也不容易，所以不推荐用这种方式。")])]),a._v(" "),t("li",[t("p",[a._v("行内图片（Base64编码）用data: URL模式来把图片嵌入页面。这样会增加HTML文件的大小，把行内图片放在（缓存的）样式表中是个好办法，而且成功避免了页面变“重”。但目前主流浏览器并不能很好地支持行内图片。")])])]),a._v(" "),t("p",[a._v("减少页面的HTTP请求数是个起点，这是提升站点首次访问速度的重要指导原则。")]),a._v(" "),t("h3",{attrs:{id:"_2-减少dns查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-减少dns查找","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.减少DNS查找")]),a._v(" "),t("p",[a._v("域名系统（DNS）将主机名映射到IP地址，就像电话簿将人们的姓名映射到他们的电话号码一样。当您在浏览器中键入www.yahoo.com时，浏览器联系的DNS解析器将返回该服务器的IP地址。DNS有成本。DNS通常需要20-120毫秒才能查找给定主机名的IP地址。在DNS查找完成之前，浏览器无法从此主机名下载任何内容。")]),a._v(" "),t("p",[a._v("缓存DNS查找以获得更好的性能。此缓存可以在由用户的ISP或局域网维护的特殊缓存服务器上进行，但是在单个用户的计算机上也存在缓存。DNS信息保留在操作系统的DNS缓存中（Microsoft Windows上的“DNS客户端服务”）。大多数浏览器都有自己的缓存，与操作系统的缓存分开。只要浏览器将DNS记录保存在自己的缓存中，它就不会因操作系统请求记录而烦恼。")]),a._v(" "),t("p",[a._v("默认情况下，Internet Explorer会将DNS查找缓存30分钟，具体 DnsCacheTimeout取决于注册表设置。Firefox将DNS查询缓存1分钟，由network.dnsCacheExpiration配置设置控制。（Fasterfox将此更改为1小时。）")]),a._v(" "),t("p",[a._v("当客户端的DNS缓存为空（对于浏览器和操作系统）时，DNS查找的数量等于网页中唯一主机名的数量。这包括页面的URL，图像，脚本文件，样式表，Flash对象等中使用的主机名。减少唯一主机名的数量可减少DNS查找的数量。")]),a._v(" "),t("p",[a._v("减少唯一主机名的数量有可能减少页面中发生的并行下载量。避免DNS查找会缩短响应时间，但减少并行下载可能会缩短响应时间。我的准则是将这些组件分成至少两个但不超过四个主机名。这导致在减少DNS查找和允许高度并行下载的折中方案。")]),a._v(" "),t("h3",{attrs:{id:"_3-避免重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-避免重定向","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.避免重定向")]),a._v(" "),t("p",[a._v("使用301和302状态代码完成重定向。以下是301响应中HTTP标头的示例：")]),a._v(" "),t("pre",[t("code",[a._v("  HTTP / 1.1 301 Moved Permanently\n  Location：http：//example.com/newuri\n  Content-Type：text / html\n")])]),a._v(" "),t("p",[a._v("浏览器自动将用户带到该Location字段中指定的URL 。重定向所需的所有信息都在标题中。响应的主体通常是空的。尽管它们的名称，但实际上没有缓存301或302响应，除非额外的标题，例如Expires或Cache-Control表示它应该是。元刷新标记和JavaScript是将用户定向到不同URL的其他方法，但如果必须进行重定向，首选技术是使用标准3xx HTTP状态代码，主要是为了确保后退按钮正常工作。")]),a._v(" "),t("p",[a._v("要记住的主要事情是"),t("strong",[a._v("重定向会降低用户体验")]),a._v("。在用户和HTML文档之间插入重定向会延迟页面中的所有内容，因为页面中的任何内容都无法呈现，并且在HTML文档到达之前不会开始下载任何组件。")]),a._v(" "),t("p",[t("strong",[a._v("有一种常见的极其浪费资源的重定向")]),a._v("，Web开发人员通常不会意识到这一点。它发生在URL中**缺少尾部斜杠（/）**时，否则应该有一个斜杠。例如，转到http://astrology.yahoo.com/astrology会产生301响应，其中包含重定向到http://astrology.yahoo.com/astrology/（注意添加的尾部斜杠）。如果您使用的是Apache处理程序，则可以使用Aliasor mod_rewrite或DirectorySlash指令在Apache中修复此问题。")]),a._v(" "),t("p",[a._v("重定向最常见的用途是把旧站点连接到新的站点。还可以连接同一站点的不同部分，针对用户的不同情况（浏览器类型，用户帐号类型等等）做一些处理。使用重定向连接两个网站很简单，只需要很少的额外编码。虽然在这些情况下使用重定向会降低开发人员的复杂性，但会降低用户体验。使用重定向的替代方法包括使用Alias以及mod_rewrite两个代码路径是否托管在同一服务器上。如果域名更改是使用重定向的原因，则另一种方法是创建CNAME（创建从一个域名指向另一个域名的别名的DNS记录）与Alias或组合mod_rewrite。")]),a._v(" "),t("h3",{attrs:{id:"_4-使ajax可以缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-使ajax可以缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.使Ajax可以缓存")]),a._v(" "),t("p",[a._v("Ajax的一个优点是它向用户提供即时反馈，因为它从后端Web服务器异步请求信息。但是，使用Ajax并不能保证用户不会在等待那些异步JavaScript和XML响应返回时大拇指。在许多应用程序中，用户是否保持等待取决于Ajax的使用方式。例如，在基于Web的电子邮件客户端中，用户将一直等待Ajax请求的结果，以查找符合其搜索条件的所有电子邮件。重要的是要记住“异步”并不意味着“瞬时”。")]),a._v(" "),t("p",[a._v("为了提高性能，优化这些Ajax响应非常重要。提高Ajax性能的最重要方法是使响应可缓存，如添加过期或缓存控制标头中所述。其他一些规则也适用于Ajax：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("使用Gzip组件\n减少DNS查找\n缩小JavaScript\n避免重定向\n配置ETag\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("我们来看一个例子。Web 2.0电子邮件客户端可能使用Ajax下载用户的通讯簿以进行自动完成。如果用户自上次使用电子邮件Web应用程序以来未修改过她的地址簿，则可以从缓存中读取先前的地址簿响应，如果该Ajax响应可以使用将来的Expires或Cache-Control标头进行缓存。必须通知浏览器何时使用先前缓存的地址簿响应而不是请求新的地址簿响应。这可以通过向地址簿Ajax URL添加时间戳来完成，该时间戳指示用户上次修改其地址簿的时间，例如，&t=1190241612。如果自上次下载后地址簿未被修改，则时间戳将相同，并且将从浏览器的缓存中读取地址簿，从而消除额外的HTTP往返。如果用户修改了地址簿，则时间戳确保新URL与缓存的响应不匹配，并且浏览器将请求更新的地址簿条目。")]),a._v(" "),t("p",[a._v("即使您的Ajax响应是动态创建的，并且可能仅适用于单个用户，它们仍然可以缓存。这样做可以使您的Web 2.0应用程序更快。")]),a._v(" "),t("h3",{attrs:{id:"_5-延迟加载组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-延迟加载组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.延迟加载组件")]),a._v(" "),t("p",[a._v("可以凑近看看页面并问自己：什么才是一开始渲染页面所必须的？其余内容都可以等会儿。")]),a._v(" "),t("p",[a._v("JavaScript是分隔onload事件之前和之后的一个理想选择。例如，如果有JavaScript代码和支持拖放以及动画的库，这些都可以先等会儿，因为拖放元素是在页面最初渲染之后的。其它可以延迟加载的部分包括隐藏内容（在某个交互动作之后才出现的内容）和折叠的图片。")]),a._v(" "),t("p",[a._v("工具可帮你减轻工作量："),t("code",[a._v("YUI Image Loader")]),a._v("可以延迟加载折叠的图片，还有"),t("code",[a._v("YUI Get utility")]),a._v("是一种引入JS和CSS的简单方法。Yahoo!主页就是一个例子，可以打开Firebug的网络面板仔细看看。")]),a._v(" "),t("p",[a._v("最好让性能目标符合其它web开发最佳实践，比如“渐进增强”。如果客户端支持JavaScript，可以提高用户体验，但必须确保页面在不支持JavaScript时也能正常工作。所以，在确定页面运行正常之后，可以用一些延迟加载脚本增强它，以支持一些拖放和动画之类的华丽效果。")]),a._v(" "),t("h3",{attrs:{id:"_6-预加载组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-预加载组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.预加载组件")]),a._v(" "),t("p",[a._v("预加载可能看起来和延迟加载是相反的，但它其实有不同的目标。通过预加载组件可以充分利用浏览器空闲的时间来请求将来会用到的组件（图片，样式和脚本）。用户访问下一页的时候，大部分组件都已经在缓存里了，所以在用户看来页面会加载得更快。")]),a._v(" "),t("p",[a._v("实际应用中有以下几种预加载的类型：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("无条件预加载—----------—尽快开始加载，获取一些额外的组件。google.com就是一个sprite图片预加载的好例子，这个sprite图片并不是google.com主页需要的，而是搜索结果页面上的内容。")])]),a._v(" "),t("li",[t("p",[a._v("条件性预加载—----------—根据用户操作猜测用户将要跳转到哪里并据此预加载。在search.yahoo.com的输入框里键入内容后，可以看到那些额外组件是怎样请求加载的。")])]),a._v(" "),t("li",[t("p",[a._v("提前预加载——--------——在推出新设计之前预加载。经常在重新设计之后会听到：“这个新网站不错，但比以前更慢了”，一部分原因是用户访问先前的页面都是有旧缓存的，但新的却是一种空缓存状态下的体验。可以通过在将要推出新设计之前预加载一些组件来减轻这种负面影响，老站可以利用浏览器空闲的时间来请求那些新站需要的图片和脚本。")])])]),a._v(" "),t("h3",{attrs:{id:"_7-减少dom元素的数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-减少dom元素的数量","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.减少DOM元素的数量")]),a._v(" "),t("p",[a._v("一个复杂的页面意味着要下载更多的字节，而且用JavaScript访问DOM也会更慢。举个例子，想要添加一个事件处理器的时候，循环遍历页面上的500个DOM元素和5000个DOM元素是有区别的。")]),a._v(" "),t("p",[a._v("大量的DOM元素是一种征兆——页面上有些内容无关的标记需要清理。正在用嵌套表格来布局吗？还是为了修复布局问题而添了一堆的")]),t("div",[a._v("s？或许应该用更好的语义化标记。"),t("p"),a._v(" "),t("p",[a._v("YUI CSS utilities对布局有很大帮助：grids.css针对整体布局，fonts.css和reset.css可以用来去除浏览器的默认格式。这是个开始清理和思考标记的好机会，例如只在语义上有意义的时候使用")]),t("div",[a._v("，而不是因为它能够渲染一个新行。"),t("p"),a._v(" "),t("p",[a._v("DOM元素的数量很容易测试，只需要在Firebug的控制台里输入：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("document.getElementsByTagName('*').length\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("那么多少DOM元素才算是太多呢？可以参考其它类似的标记良好的页面，例如Yahoo!主页是一个相当繁忙的页面，但只有不到700个元素（HTML标签）。")]),a._v(" "),t("h3",{attrs:{id:"_8-跨域分离组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-跨域分离组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.跨域分离组件")]),a._v(" "),t("p",[a._v("分离组件可以最大化并行下载，但要确保只用不超过2-4个域，因为存在DNS查找的代价。例如，可以把HTML和动态内容部署在www.example.org，而把静态组件分离到static1.example.org和static2.example.org。")]),a._v(" "),t("h3",{attrs:{id:"_9-尽量少用iframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-尽量少用iframe","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.尽量少用iframe")]),a._v(" "),t("p",[a._v("用iframe可以把一个HTML文档插入到父文档里，重要的是明白iframe是如何工作的并高效地使用它。")]),a._v(" "),t("p",[t("strong",[t("code",[a._v("<iframe>")]),a._v("的优点：")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("引入缓慢的第三方内容，比如标志和广告")])]),a._v(" "),t("li",[t("p",[a._v("安全沙箱")])]),a._v(" "),t("li",[t("p",[a._v("并行下载脚本\n"),t("strong",[t("code",[a._v("<iframe>")]),a._v("的缺点：")])])]),a._v(" "),t("li",[t("p",[a._v("代价高昂，即使是空白的"),t("code",[a._v("iframe")])])]),a._v(" "),t("li",[t("p",[a._v("阻塞页面加载")])]),a._v(" "),t("li",[t("p",[a._v("非语义")])])]),a._v(" "),t("h3",{attrs:{id:"_10-杜绝404"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-杜绝404","aria-hidden":"true"}},[a._v("#")]),a._v(" 10.杜绝404")]),a._v(" "),t("p",[a._v("HTTP请求代价高昂，完全没有必要用一个HTTP请求去获取一个无用的响应（比如404 Not Found），只会拖慢用户体验而没有任何好处。")]),a._v(" "),t("p",[a._v("有些站点用的是有帮助的404——“你的意思是xxx？”，这样做有利于用户体验，，但也浪费了服务器资源（比如数据库等等）。最糟糕的是链接到的外部JavaScript有错误而且结果是404。首先，这种下载将阻塞并行下载。其次，浏览器会试图解析404响应体，因为它是JavaScript代码，需要找出其中可用的部分。")]),a._v(" "),t("h2",{attrs:{id:"css部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css部分","aria-hidden":"true"}},[a._v("#")]),a._v(" css部分")]),a._v(" "),t("h3",{attrs:{id:"_11-避免使用css表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-避免使用css表达式","aria-hidden":"true"}},[a._v("#")]),a._v(" 11.避免使用CSS表达式")]),a._v(" "),t("p",[a._v("用CSS表达式动态设置CSS属性，是一种强大又危险的方式。从IE5开始支持，但从IE8起就不推荐使用了。例如，可以用CSS表达式把背景颜色设置成按小时交替的：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('background-color: expression( (new Date()).getHours()%2 ? "#B8D4FF" : "#F08A00" );\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_12-选择舍弃-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-选择舍弃-import","aria-hidden":"true"}},[a._v("#")]),a._v(" 12.选择"),t("link"),a._v("舍弃@import")]),a._v(" "),t("p",[a._v("前面提到了一个最佳实践：为了实现逐步渲染，CSS应该放在顶部。")]),a._v(" "),t("p",[a._v("在IE中用@import与在底部用"),t("code",[a._v("<link>")]),a._v("效果一样，所以最好不要用它。")]),a._v(" "),t("h3",{attrs:{id:"_13-避免使用滤镜"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-避免使用滤镜","aria-hidden":"true"}},[a._v("#")]),a._v(" 13.避免使用滤镜")]),a._v(" "),t("p",[a._v("IE专有的AlphaImageLoader滤镜可以用来修复IE7之前的版本中半透明PNG图片的问题。在图片加载过程中，这个滤镜会阻塞渲染，卡住浏览器，还会增加内存消耗而且是被应用到每个元素的，而不是每个图片，所以会存在一大堆问题。")]),a._v(" "),t("p",[a._v("最好的方法是干脆不要用AlphaImageLoader，而"),t("strong",[a._v("优雅地降级到用在IE中支持性很好的PNG8图片来代替")]),a._v("。"),t("strong",[a._v("如果非要用AlphaImageLoader，应该用下划线hack：_filter来避免影响IE7及更高版本的用户。")])]),a._v(" "),t("h3",{attrs:{id:"_14-把样式表放在顶部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-把样式表放在顶部","aria-hidden":"true"}},[a._v("#")]),a._v(" 14.把样式表放在顶部")]),a._v(" "),t("p",[a._v("在Yahoo!研究性能的时候，我们发现"),t("strong",[a._v("把样式表放到文档的HEAD部分能让页面看起来加载地更快")]),a._v("。这是"),t("strong",[a._v("因为把样式表放在head里能让页面逐步渲染")]),a._v("。")]),a._v(" "),t("p",[a._v("关注性能的前端工程师想让页面逐步渲染。也就是说，我们想让浏览器尽快显示已有内容，这在页面上有一大堆内容或者用户网速很慢时显得尤为重要。给用户显示反馈（比如进度指标）的重要性已经被广泛研究过，并且被记录下来了。在我们的例子中，HTML页面就是进度指标！当浏览器逐渐加载页面头部，导航条，顶部logo等等内容的时候，这些都被正在等待页面加载的用户当作反馈，能够提高整体用户体验。")]),a._v(" "),t("h2",{attrs:{id:"js部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js部分","aria-hidden":"true"}},[a._v("#")]),a._v(" js部分")]),a._v(" "),t("h3",{attrs:{id:"_15-去除重复脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-去除重复脚本","aria-hidden":"true"}},[a._v("#")]),a._v(" 15.去除重复脚本")]),a._v(" "),t("p",[a._v("页面含有重复的脚本文件会影响性能，这可能和你想象的不一样。在对美国前10大web站点的评审中，发现只有2个站点含有重复脚本。两个主要原因增加了在单一页面中出现重复脚本的几率：团队大小和脚本数量。在这种情况下，重复脚本会创建不必要的HTTP请求，执行无用的JavaScript代码，而影响页面性能。")]),a._v(" "),t("p",[a._v("IE会产生不必要的HTTP请求，而Firefox不会。在IE中，如果一个不可缓存的外部脚本被页面引入了两次，它会在页面加载时产生两个HTTP请求。即使脚本是可缓存的，在用户重新加载页面时也会产生额外的HTTP请求。")]),a._v(" "),t("p",[a._v("除了产生没有意义的HTTP请求之外，多次对脚本求值也会浪费时间。因为无论脚本是否可缓存，在Firefox和IE中都会执行冗余的JavaScript代码。")]),a._v(" "),t("p",[a._v("避免不小心把相同脚本引入两次的一种方法就是在模版系统中实现脚本管理模块。典型的脚本引入方法就是在HTML页面中用SCRIPT标签：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<script type="text/javascript" src="menu_1.0.17.js"><\/script>\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_16-尽量减少dom访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-尽量减少dom访问","aria-hidden":"true"}},[a._v("#")]),a._v(" 16.尽量减少DOM访问")]),a._v(" "),t("p",[a._v("用JavaScript访问DOM元素是很慢的，所以，为了让页面反应更迅速，应该：")]),a._v(" "),t("ul",[t("li",[a._v("缓存已访问过的元素的索引")]),a._v(" "),t("li",[a._v("先“离线”更新节点，再把它们添到DOM树上")]),a._v(" "),t("li",[a._v("避免用JavaScript修复布局问题")])]),a._v(" "),t("h3",{attrs:{id:"_17-用智能的事件处理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-用智能的事件处理器","aria-hidden":"true"}},[a._v("#")]),a._v(" 17.用智能的事件处理器")]),a._v(" "),t("p",[a._v("有时候感觉页面反映不够灵敏，是因为有太多频繁执行的事件处理器被添加到了DOM树的不同元素上，这就是推荐使用"),t("strong",[a._v("事件委托")]),a._v("的原因。如果一个div里面有10个按钮，应该只给div容器添加一个事件处理器，而不是给每个按钮都添加一个。事件能够冒泡，所以可以捕获事件并得知哪个按钮是事件源。")]),a._v(" "),t("h3",{attrs:{id:"_18-把脚本放在底部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18-把脚本放在底部","aria-hidden":"true"}},[a._v("#")]),a._v(" 18.把脚本放在底部")]),a._v(" "),t("p",[t("strong",[a._v("脚本会阻塞并行下载")]),a._v("，HTTP/1.1官方文档建议浏览器每个主机名下并行下载的组件数不要超过两个，如果图片来自多个主机名，并行下载的数量就可以超过两个。如果脚本正在下载，浏览器就不开始任何其它下载任务，即使是在不同主机名下的。")]),a._v(" "),t("p",[a._v("有时候，并不容易把脚本移动到底部。举个例子，如果脚本是用"),t("code",[a._v("document.write")]),a._v("插入到页面内容中的，就没办法再往下移了。还可能存在作用域问题，在多数情况下，这些问题都是可以解决的。")]),a._v(" "),t("p",[a._v("一个常见的建议是用推迟（deferred）脚本，有DEFER属性的脚本意味着不能含有"),t("code",[a._v("document.write")]),a._v("，并且提示浏览器告诉他们可以继续渲染。不幸的是，Firefox不支持DEFER属性。在IE中，脚本可能被推迟，但不尽如人意。如果脚本可以推迟，我们就可以把它放到页面底部，页面就可以更快地载入。")]),a._v(" "),t("h2",{attrs:{id:"javascript-css部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-css部分","aria-hidden":"true"}},[a._v("#")]),a._v(" javascript, css部分")]),a._v(" "),t("h3",{attrs:{id:"_19-把javascript和css放到外面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-把javascript和css放到外面","aria-hidden":"true"}},[a._v("#")]),a._v(" 19.把JavaScript和CSS放到外面")]),a._v(" "),t("p",[a._v("很多性能原则都是关于如何管理外部组件的，然而，在这些顾虑出现之前你应该问一个更基础的问题：应该把JavaScript和CSS放到外部文件中还是直接写在页面里？")]),a._v(" "),t("p",[a._v("实际上，用外部文件可以让页面更快，因为JavaScript和CSS文件会被缓存在浏览器。HTML文档中的行内JavaScript和CSS在每次请求该HTML文档的时候都会重新下载。这样做减少了所需的HTTP请求数，但增加了HTML文档的大小。另一方面，如果JavaScript和CSS在外部文件中，并且已经被浏览器缓存起来了，那么我们就成功地把HTML文档变小了，而且还没有增加HTTP请求数。")]),a._v(" "),t("p"),a._v(" "),t("h3",{attrs:{id:"_20-压缩javascript和css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20-压缩javascript和css","aria-hidden":"true"}},[a._v("#")]),a._v(" 20.压缩JavaScript和CSS")]),a._v(" "),t("p",[a._v("压缩具体来说就是从代码中去除不必要的字符以减少大小，从而提升加载速度。代码最小化就是去掉所有注释和不必要的空白字符（空格，换行和tab）。在JavaScript中这样做能够提高响应性能，因为要下载的文件变小了。两个最常用的JavaScript代码压缩工具是JSMin和YUI Compressor，YUI compressor还可以压缩CSS。")]),a._v(" "),t("p",[a._v("混淆是一种可选的源码优化措施，要比压缩更复杂，所以混淆过程也更容易产生bug。在对美国前十的网站调查中，压缩可以缩小21%，而混淆能缩小25%。虽然混淆的缩小程度更高，但比压缩风险更大。")]),a._v(" "),t("p",[a._v("除了压缩外部脚本和样式，行内的"),t("code",[a._v("<script>")]),a._v("和"),t("code",[a._v("<style>")]),a._v("块也可以压缩。即使启用了gzip模块，先进行压缩也能够缩小5%或者更多的大小。JavaScript和CSS的用处越来越多，所以压缩代码会有不错的效果。")]),a._v(" "),t("h2",{attrs:{id:"图片部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片部分","aria-hidden":"true"}},[a._v("#")]),a._v(" 图片部分")]),a._v(" "),t("h3",{attrs:{id:"_21-优化图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21-优化图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 21.优化图片")]),a._v(" "),t("p",[a._v("尝试把GIF格式转换成PNG格式，看看是否节省空间。在所有的PNG图片上运行pngcrush（或者其它PNG优化工具）")]),a._v(" "),t("h3",{attrs:{id:"_22-优化css-sprite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22-优化css-sprite","aria-hidden":"true"}},[a._v("#")]),a._v(" 22.优化CSS Sprite")]),a._v(" "),t("p",[a._v("在Sprite图片中横向排列一般都比纵向排列的最终文件小\n组合Sprite图片中的相似颜色可以保持低色数，最理想的是256色以下PNG8格式\n“对移动端友好”，不要在Sprite图片中留下太大的空隙。虽然不会在很大程度上影响图片文件的大小，但这样做可以节省用户代理把图片解压成像素映射时消耗的内存。100×100的图片是1万个像素，而1000×1000的图片就是100万个像素了。")]),a._v(" "),t("h3",{attrs:{id:"_23-不要用html缩放图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_23-不要用html缩放图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 23.不要用HTML缩放图片")]),a._v(" "),t("p",[a._v("不要因为在HTML中可以设置宽高而使用本不需要的大图。如果需要")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<img width="100" height="100" src="mycat.jpg" alt="My Cat" />\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("那么图片本身（mycat.jpg）应该是100x100px的，而不是去缩小500x500px的图片。")]),a._v(" "),t("h3",{attrs:{id:"_24-用小的可缓存的favicon-ico（p-s-收藏夹图标）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24-用小的可缓存的favicon-ico（p-s-收藏夹图标）","aria-hidden":"true"}},[a._v("#")]),a._v(" 24.用小的可缓存的favicon.ico（P.S. 收藏夹图标）")]),a._v(" "),t("p",[a._v("favicon.ico是放在服务器根目录的图片，它会带来一堆麻烦，因为即便你不管它，浏览器也会自动请求它，所以最好不要给一个404 Not Found响应。而且只要在同一个服务器上，每次请求它时都会发送cookie，此外这个图片还会干扰下载顺序，例如在IE中，当你在onload中请求额外组件时，将会先下载favicon。")]),a._v(" "),t("p",[a._v("所以为了缓解favicon.ico的缺点，应该确保：足够小，最好在1K以下")]),a._v(" "),t("p",[a._v("设置合适的有效期HTTP头（以后如果想换的话就不能重命名了），把有效期设置为几个月后一般比较安全，可以通过检查当前favicon.ico的最后修改日期来确保变更能让浏览器知道。")]),a._v(" "),t("h2",{attrs:{id:"cookie部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie部分","aria-hidden":"true"}},[a._v("#")]),a._v(" cookie部分")]),a._v(" "),t("h3",{attrs:{id:"_25-给cookie减肥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25-给cookie减肥","aria-hidden":"true"}},[a._v("#")]),a._v(" 25.给Cookie减肥")]),a._v(" "),t("p",[a._v("使用cookie的原因有很多，比如授权和个性化。HTTP头中cookie信息在web服务器和浏览器之间交换。重要的是保证cookie尽可能的小，以最小化对用户响应时间的影响。")]),a._v(" "),t("ul",[t("li",[a._v("清除不必要的cookie")]),a._v(" "),t("li",[a._v("保证cookie尽可能小，以最小化对用户响应时间的影响")]),a._v(" "),t("li",[a._v("注意给cookie设置合适的域级别，以免影响其它子域")]),a._v(" "),t("li",[a._v("设置合适的有效期，更早的有效期或者none可以更快的删除cookie，提高用户响应时间")])]),a._v(" "),t("h3",{attrs:{id:"_26-把组件放在不含cookie的域下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26-把组件放在不含cookie的域下","aria-hidden":"true"}},[a._v("#")]),a._v(" 26.把组件放在不含cookie的域下")]),a._v(" "),t("p",[a._v("当浏览器发送对静态图像的请求时，cookie也会一起发送，而服务器根本不需要这些cookie。所以它们只会造成没有意义的网络通信量，应该确保对静态组件的请求不含cookie。可以创建一个子域，把所有的静态组件都部署在那儿。")]),a._v(" "),t("p",[a._v("如果域名是www.example.org，可以把静态组件部署到static.example.org。然而，如果已经在顶级域example.org或者www.example.org设置了cookie，那么所有对static.example.org的请求都会含有这些cookie。这时候可以再买一个新域名，把所有的静态组件部署上去，并保持这个新域名不含cookie。Yahoo!用的是yimg.com，YouTube是ytimg.com，Amazon是images-amazon.com等等。")]),a._v(" "),t("p",[a._v("把静态组件部署在不含cookie的域下还有一个好处是有些代理可能会拒绝缓存带cookie的组件。有一点需要注意：如果不知道应该用example.org还是www.example.org作为主页，可以考虑一下cookie的影响。省略www的话，就只能把cookie写到*.example.org，所以因为性能原因最好用www子域，并且把cookie写到这个子域下。")]),a._v(" "),t("h2",{attrs:{id:"移动端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动端","aria-hidden":"true"}},[a._v("#")]),a._v(" 移动端")]),a._v(" "),t("h3",{attrs:{id:"_27-保证所有组件都小于25k"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_27-保证所有组件都小于25k","aria-hidden":"true"}},[a._v("#")]),a._v(" 27.保证所有组件都小于25K")]),a._v(" "),t("p",[a._v("这个限制是因为iPhone不能缓存大于25K的组件，注意这里指的是未压缩的大小。这就是为什么缩减内容本身也很重要，因为单纯的gzip可能不够。")]),a._v(" "),t("h3",{attrs:{id:"_28-把组件打包到一个复合文档里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_28-把组件打包到一个复合文档里","aria-hidden":"true"}},[a._v("#")]),a._v(" 28.把组件打包到一个复合文档里")]),a._v(" "),t("p",[a._v("把各个组件打包成一个像有附件的电子邮件一样的复合文档里，可以用一个HTTP请求获取多个组件（记住一点：HTTP请求是代价高昂的）。用这种方式的时候，要先检查用户代理是否支持（iPhone就不支持）。")]),a._v(" "),t("h2",{attrs:{id:"服务器部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器部分","aria-hidden":"true"}},[a._v("#")]),a._v(" 服务器部分")]),a._v(" "),t("h3",{attrs:{id:"_29-gzip组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_29-gzip组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 29.Gzip组件")]),a._v(" "),t("p",[a._v("前端工程师可以想办法明显地缩短通过网络传输HTTP请求和响应的时间。毫无疑问，终端用户的带宽速度，网络服务商，对等交换点的距离等等，都是开发团队所无法控制的。但还有别的能够影响响应时间的因素，压缩可以通过减少HTTP响应的大小来缩短响应时间。")]),a._v(" "),t("p",[a._v("从HTTP/1.1开始，web客户端就有了支持压缩的"),t("code",[a._v("Accept-Encoding")]),a._v(" HTTP请求头。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Accept-Encoding: gzip, deflate\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果web服务器看到这个请求头，它就会用客户端列出的一种方式来压缩响应。web服务器通过"),t("code",[a._v("Content-Encoding")]),a._v("相应头来通知客户端。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Content-Encoding: gzip\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("尽可能多地用gzip压缩能够给页面减肥，这也是提升用户体验最简单的方法。")]),a._v(" "),t("h3",{attrs:{id:"_30-避免图片src属性为空"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_30-避免图片src属性为空","aria-hidden":"true"}},[a._v("#")]),a._v(" 30.避免图片src属性为空")]),a._v(" "),t("p",[a._v("Image with empty string src属性是空字符串的图片很常见，主要以两种形式出现：")]),a._v(" "),t("p",[a._v("straight HTML")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<img src=''>\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("JavaScript")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var img = new Image();\nimg.src = '';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("这两种形式都会引起相同的问题：浏览器会向服务器发送另一个请求。")]),a._v(" "),t("p"),a._v(" "),t("h3",{attrs:{id:"_31-配置etags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_31-配置etags","aria-hidden":"true"}},[a._v("#")]),a._v(" 31.配置ETags")]),a._v(" "),t("p",[a._v("实体标签（ETags），是服务器和浏览器用来决定浏览器缓存中组件与源服务器中的组件是否匹配的一种机制（“实体”也就是组件：图片，脚本，样式表等等）。添加ETags可以提供一种实体验证机制，比最后修改日期更加灵活。一个ETag是一个字符串，作为一个组件某一具体版本的唯一标识符。唯一的格式约束是字符串必须用引号括起来，源服务器用相应头中的ETag来指定组件的ETag：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('HTTP/1.1 200 OK\n      Last-Modified: Tue, 12 Dec 2006 03:03:59 GMT\n      ETag: "10c24bc-4ab-457e1c1f"\n      Content-Length: 12195\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("然后，如果浏览器必须验证一个组件，它用If-None-Match请求头来把ETag传回源服务器。如果ETags匹配成功，会返回一个304状态码，这样就减少了12195个字节的响应体。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('GET /i/yahoo.gif HTTP/1.1\n      Host: us.yimg.com\n      If-Modified-Since: Tue, 12 Dec 2006 03:03:59 GMT\n      If-None-Match: "10c24bc-4ab-457e1c1f"\n      HTTP/1.1 304 Not Modified\n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"_32-对ajax用get请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_32-对ajax用get请求","aria-hidden":"true"}},[a._v("#")]),a._v(" 32.对Ajax用GET请求")]),a._v(" "),t("p",[a._v("Yahoo!邮箱团队发现使用XMLHttpRequest时，浏览器的POST请求是通过一个两步的过程来实现的：先发送HTTP头，在发送数据。所以最好用GET请求，它只需要发送一个TCP报文（除非cookie特别多）。IE的URL长度最大值是2K，所以如果要发送的数据超过2K就无法使用GET了。")]),a._v(" "),t("p",[a._v("POST请求的一个有趣的副作用是实际上没有发送任何数据，就像GET请求一样。正如HTTP说明文档中描述的，GET请求是用来检索信息的。所以它的语义只是用GET请求来请求数据，而不是用来发送需要存储到服务器的数据。")]),a._v(" "),t("h3",{attrs:{id:"_33-尽早清空缓冲区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_33-尽早清空缓冲区","aria-hidden":"true"}},[a._v("#")]),a._v(" 33.尽早清空缓冲区")]),a._v(" "),t("p",[a._v("当用户请求一个页面时，服务器需要用大约200到500毫秒来组装HTML页面，在这期间，浏览器闲等着数据到达。PHP中有一个flush()函数，允许给浏览器发送一部分已经准备完毕的HTML响应，以便浏览器可以在后台准备剩余部分的同时开始获取组件，好处主要体现在很忙的后台或者很“轻”的前端页面上（P.S. 也就是说，响应时耗主要在后台方面时最能体现优势）。")]),a._v(" "),t("p",[a._v("较理想的清空缓冲区的位置是HEAD后面，因为HTML的HEAD部分通常更容易生成，并且允许引入任何CSS和JavaScript文件，这样就可以让浏览器在后台还在处理的时候就开始并行获取组件。")]),a._v(" "),t("p",[a._v("例如：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("< !-- css, js --\x3e\n< /head>\n< ?php flush(); ?>\n< body>\n< !-- content --\x3e\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"_34-使用cdn（内容分发网络）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_34-使用cdn（内容分发网络）","aria-hidden":"true"}},[a._v("#")]),a._v(" 34.使用CDN（内容分发网络）")]),a._v(" "),t("p",[a._v("用户与服务器的物理距离对响应时间也有影响。把内容部署在多个地理位置分散的服务器上能让用户更快地载入页面。但具体要怎么做呢？")]),a._v(" "),t("p",[a._v("实现内容在地理位置上分散的第一步是：不要尝试去重新设计你的web应用程序来适应分布式结构。这取决于应用程序，改变结构可能包括一些让人望而生畏的任务，比如同步会话状态和跨服务器复制数据库事务（翻译可能不准确）。缩短用户和内容之间距离的提议可能被推迟，或者根本不可能通过，就是因为这个难题。")]),a._v(" "),t("p",[a._v("记住终端用户80%到90%的响应时间都花在下载页面组件上了：图片，样式，脚本，Flash等等，这是业绩黄金法则。最好先分散静态内容，而不是一开始就重新设计应用程序结构。这不仅能够大大减少响应时间，还更容易表现出CDN的功劳。")]),a._v(" "),t("p",[a._v("内容分发网络（CDN）是一组分散在不同地理位置的web服务器，用来给用户更高效地发送内容。典型地，选择用来发送内容的服务器是基于网络距离的衡量标准的。例如：选跳数（hop）最少的或者响应时间最快的服务器。")]),a._v(" "),t("h3",{attrs:{id:"_35-添上expires或者cache-control-http头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_35-添上expires或者cache-control-http头","aria-hidden":"true"}},[a._v("#")]),a._v(" 35.添上Expires或者Cache-Control HTTP头")]),a._v(" "),t("p",[a._v("这条规则有两个方面：")]),a._v(" "),t("ul",[t("li",[a._v("对于静态组件：通过设置一个遥远的将来时间作为Expires来实现永不失效")]),a._v(" "),t("li",[a._v("多余动态组件：用合适的Cache-ControlHTTP头来让浏览器进行条件性的请求\n　　网页设计越来越丰富，这意味着页面里有更多的脚本，图片和Flash。站点的新访客可能还是不得不提交几个HTTP请求，但通过使用有效期能让组件变得可缓存，这避免了在接下来的浏览过程中不必要的HTTP请求。有效期HTTP头通常被用在图片上，但它们应该用在所有组件上，包括脚本、样式和Flash组件。")])]),a._v(" "),t("p",[a._v("浏览器（和代理）用缓存来减少HTTP请求的数目和大小，让页面能够更快加载。web服务器通过有效期HTTP响应头来告诉客户端，页面的各个组件应该被缓存多久。用一个遥远的将来时间做有效期，告诉浏览器这个响应在2010年4月15日前不会改变。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Expires: Thu, 15 Apr 2010 20:00:00 GMT\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果你用的是Apache服务器，用ExpiresDefault指令来设置相对于当前日期的有效期。下面的例子设置了从请求时间起10年的有效期：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ExpiresDefault "access plus 10 years"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])])])}],!1,null,null,null);e.default=r.exports}}]);