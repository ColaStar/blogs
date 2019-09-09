(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{218:function(a,s,e){"use strict";e.r(s);var n=e(0),t=Object(n.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("越来越多的公司开始做PWA，渐进式web应用了。我的博客源码是2014年年初写的，近期有时间正准备优化一下，也改成PWA的web应用。关于PWA渐进式web应用，我在博客改版之后再来详细介绍！今天主要详细介绍一下性能优化之缓存利用，本文将详细介绍各种缓存，及其机制，前段时间我也写过一篇关于前端浏览器缓存的文章，在我博客中搜索缓存，也能搜到几篇文章，感兴趣的可以先去我之前文章去看一下，本文将详细介绍缓存及如何利用。")]),a._v(" "),e("h2",{attrs:{id:"缓存种类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存种类","aria-hidden":"true"}},[a._v("#")]),a._v(" 缓存种类")]),a._v(" "),e("p",[a._v("大体想了一下，关于缓存，无非有如下几种：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1、CDN缓存")])]),a._v(" "),e("li",[e("p",[a._v("2、DNS缓存")])]),a._v(" "),e("li",[e("p",[a._v("3、客户端缓存（无需请求的memory cache，disk cache，需要发请求验证的Etag、Last-Modified304）")])]),a._v(" "),e("li",[e("p",[a._v("4、Service Worker与缓存及离线缓存")])]),a._v(" "),e("li",[e("p",[a._v("5、PageCache与ajax缓存")])])]),a._v(" "),e("h2",{attrs:{id:"cdn缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" CDN缓存")]),a._v(" "),e("p",[a._v("看到一个形象的比喻，来比喻CDN。")]),a._v(" "),e("p",[a._v("10年前，还没有火车票代售点一说，12306.cn更是无从说起。那时候火车票还只能在火车站的售票大厅购买，而我所在的小县城并不通火车，火车票都要去市里的火车站购买，而从我家到县城再到市里，来回就是4个小时车程，简直就是浪费生命。后来就好了，小县城里出现了火车票代售点，甚至乡镇上也有了代售点，可以直接在代售点购买火车票，方便了不少，全市人民再也不用在一个点苦逼的排队买票了。")]),a._v(" "),e("p",[a._v("CDN就可以理解为分布在每个县城或者乡镇的火车票代售点，用户在浏览网站的时候，CDN会选择一个离用户最近的CDN边缘节点来响应用户的请求，这样海南移动用户的请求就不会千里迢迢跑到北京电信机房的服务器（假设源站部署在北京电信机房）上了。")]),a._v(" "),e("p",[a._v("CDN的优势很明显：")]),a._v(" "),e("ul",[e("li",[a._v("（1）CDN节点解决了跨运营商和跨地域访问的问题，访问延时大大降低；")]),a._v(" "),e("li",[a._v("（2）大部分请求在CDN边缘节点完成，CDN起到了分流作用，减轻了源站的负载。")])]),a._v(" "),e("p",[a._v("关于CDN缓存 ，在浏览器本地缓存失效后，浏览器会向CDN边缘节点发起请求。类似浏览器缓存，CDN边缘节点也存在着一套缓存机制。CDN边缘节点缓存策略因服务商不同而不同，但一般都会遵循http标准协议，通过http响应头中的")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-control: max-age\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("的字段来设置CDN边缘节点数据缓存时间。")]),a._v(" "),e("p",[a._v("当客户端向CDN节点请求数据时，CDN节点会判断缓存数据是否过期，若缓存数据并没有过期，则直接将缓存数据返回给客户端；否则，CDN节点就会向源站发出回源请求，从源站拉取最新数据，更新本地缓存，并将最新数据返回给客户端。 CDN服务商一般会提供基于文件后缀、目录多个维度来指定CDN缓存时间，为用户提供更精细化的缓存管理。")]),a._v(" "),e("h2",{attrs:{id:"cdn缓存刷新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn缓存刷新","aria-hidden":"true"}},[a._v("#")]),a._v(" CDN缓存刷新")]),a._v(" "),e("p",[a._v("CDN边缘节点对开发者是透明的，相比于浏览器Ctrl+F5的强制刷新来使浏览器本地缓存失效，开发者可以通过CDN服务商提供的“刷新缓存”接口来达到清理CDN边缘节点缓存的目的。这样开发者在更新数据后，可以使用“刷新缓存”功能来强制CDN节点上的数据缓存过期，保证客户端在访问时，拉取到最新的数据。")]),a._v(" "),e("h2",{attrs:{id:"dns缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" DNS缓存")]),a._v(" "),e("p",[e("code",[a._v("DNS(Domain Name System)：")]),a._v("负责将域名URL转化为服务器主机IP。")]),a._v(" "),e("p",[e("strong",[a._v("DNS查找流程")]),a._v("：首先查看浏览器缓存是否存在，不存在则访问本机DNS缓存，再不存在则访问本地DNS服务器。所以DNS也是开销，通常浏览器查找一个给定URL的IP地址要花费20-120ms，在DNS查找完成前，浏览器不能从host那里下载任何东西。")]),a._v(" "),e("p",[a._v("**TTL(Time To Live)：**表示查找返回的DNS记录包含的一个存活时间，过期则这个DNS记录将被抛弃。浏览器DNS缓存也有自己的过期时间，这个时间是独立于本机DNS缓存的，相对也比较短，例如chrome只有1分钟左右。")]),a._v(" "),e("h2",{attrs:{id:"dns性能优化最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns性能优化最佳实践","aria-hidden":"true"}},[a._v("#")]),a._v(" DNS性能优化最佳实践")]),a._v(" "),e("p",[a._v("当客户端的DNS缓存为空时，DNS查找的数量与Web页面中唯一主机名的数量相等。所以减少唯一主机名的数量就可以减少DNS查找的数量。")]),a._v(" "),e("p",[a._v("但是问题来了，有时候需要多设置主机数量，来增加DNS的负载均衡，因此减少DNS查找和增加主机数量形成了矛盾关系，经过实战DNS设置2-4个主机名是最佳的。更多负载均衡可以用其他方式实现，例如用nginx做负载均衡！")]),a._v(" "),e("h2",{attrs:{id:"浏览器缓存策略之客户端缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存策略之客户端缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 浏览器缓存策略之客户端缓存")]),a._v(" "),e("h3",{attrs:{id:"_1、cache-control-max-age"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、cache-control-max-age","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、Cache-control: max-age")]),a._v(" "),e("p",[a._v("假设你的站点有引用一个脚本文件，你非常确认这个脚本文件内容五十年不变。那么自然希望浏览器把这个脚本缓存起来，不用每一次都请求服务器，然后服务器再返回相同的内容。这样能够节省带宽开销并且提升性能。")]),a._v(" "),e("p",[a._v("此时你只需要设置文件返回的HTTP头中的Cache-Control设置为：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: max-age=31536000\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("虽然是五十年不变，但是标准中规定max-age值最大不能超过一年，又因为是以秒为单位，所以值为31536000")]),a._v(" "),e("p",[a._v("例如这个五十年不变的脚本地址是 www.haorooms.com/never-expire.js 那么接下来每次用户请求这个地址时，浏览器都不会再向服务器发出请求，而是直接从本地的浏览器缓存中取。直到一年以后或者用户手动的清除了缓存。")]),a._v(" "),e("p",[a._v("但是，如果这一年中的某一天你发现脚本内容必须要更改了怎么办？很简单，改变请求的文件名就好了，例如never-expire-v2.js。")]),a._v(" "),e("p",[a._v("Cache-control: max-age 可以控制缓存时间。如下图：\n"),e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/max-age.png",alt:""}})]),a._v(" "),e("p",[a._v("Max-age 使用秒来计量，如：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control:max-age=645672\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("指定页面645672秒（7.47天）后过期。")]),a._v(" "),e("p",[a._v("注："),e("code",[a._v("Cache-control")]),a._v("是"),e("code",[a._v("http1.1")]),a._v("的特性，能够更加精准的控制缓存")]),a._v(" "),e("p",[a._v("除了上面介绍的 "),e("code",[a._v("max-age")]),a._v("，"),e("code",[a._v("Cache-control")]),a._v("还有如信息：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("no-cache：先不要读取缓存中的文件,向WEB服务器请求验证缓存是否新鲜,新鲜则使用缓存")])]),a._v(" "),e("li",[e("p",[a._v("no-store：这个字段很关键,它表示数据不在硬盘中临时保存")])]),a._v(" "),e("li",[e("p",[a._v("only-if-cached：就是在客户端有缓存时就是用客户端的缓存,这个一般都是在无网时使用")])]),a._v(" "),e("li",[e("p",[a._v("max-stale：只要缓存的时间没有超过它(max-stale)指定的时间,就可以加载使用.我们可以在无网络的情况下使用 must-revalidate：作用和相同,但是更为严格.每次请求都校验缓存和服务器源文件,一致就使用缓存,不一致就拿最新")])]),a._v(" "),e("li",[e("p",[a._v("s-maxage 同 max-age，覆盖 max-age、Expires，但仅适用于共享缓存，在私有缓存中被忽略。 public 表明响应可以被任何对象（发送请求的客户端、代理服务器等等）缓存。 private 表明响应只能被单个用户（可能是操作系统用户、浏览器用户）缓存，是非共享的，不能被代理服务器缓存。")])])]),a._v(" "),e("h3",{attrs:{id:"_2、expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、expires","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、Expires")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/expires.png",alt:""}})]),a._v(" "),e("p",[a._v("设置了Expires也可以避免浏览器和服务器发请求，直到时间过期。")]),a._v(" "),e("p",[a._v("注：Expires是http1.0特性，比Cache-control要早，因此有些缺陷。由于失效时间是一个绝对时间，所以当客户端本地时间被修改以后，服务器与客户端时间偏差变大以后，就会导致缓存混乱。比如说，服务器时间是2018年4月19号，客户端本来时间是2018年4月10号，但是我手动修改客户端时间为2018年4月20，因此服务器时间和客户端时间有偏差之后，缓存失效，这是不对的。")]),a._v(" "),e("p",[a._v("以上2个缓存，遵循"),e("a",{attrs:{href:"http://www.haorooms.com/post/qianduan_cache_bushu",target:"_blank",rel:"noopener noreferrer"}},[a._v("三级缓存原理"),e("OutboundLink")],1),a._v("，Cache-Control与Expires可以在服务端配置同时启用或者启用任意一个，同时启用的时候Cache-Control优先级高。")]),a._v(" "),e("p",[a._v("三级缓存原理")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("先去内存看，如果有，直接加载\n\n如果内存没有，择取硬盘获取，如果有直接加载\n\n如果硬盘也没有，那么就进行网络请求\n\n加载到的资源缓存到硬盘和内存\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("一般浏览图片，如下流程：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("访问-> 200 -> 退出浏览器\n\n再进来-> 200(from disk cache) -> 刷新 -> 200(from memory cache)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"_3、last-modified-304协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、last-modified-304协商缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、Last-Modified 304协商缓存")]),a._v(" "),e("p",[a._v("服务器为了通知浏览器当前文件的版本，会发送一个上次修改时间的标签，例如：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Last-Modified:Tue, 06 Jan 2018 08:26:32 GMT\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("如下图：\n"),e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/etag_last.png",alt:""}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("假如是304协商缓存，验证步骤如下：\n\n浏览器：Hey，我需要jquery.min.js这个文件，如果是在 Last-Modified:Tue, 06 Jan 2018 08:26:32 GMT 之后修改过的，请发给我。\n\n服务器：（检查文件的修改时间）\n\n服务器：Hey，这个文件在那个时间之后没有被修改过，你已经有最新的版本了。\n\n浏览器：太好了，那我就显示给用户了。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h3",{attrs:{id:"_4、etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、etag","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、ETag")]),a._v(" "),e("p",[a._v("上面截图中也圈出来了，其实Etag和304类似，但是级别比 Last-Modified 高一些。")]),a._v(" "),e("p",[a._v("请求过程如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('1. 浏览器：Hey，我需要haorooms的main.css这个文件，有没有不匹配"61213-1762a-50bf790757204"这个串的\n\n2. 服务器：（检查ETag…）\n\n3. 服务器：Hey，我这里的版本也是"61213-1762a-50bf790757204"，你已经是最新的版本了\n\n4. 浏览器：好，那就可以使用本地缓存了\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h2",{attrs:{id:"service-worker与缓存及离线缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-worker与缓存及离线缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" Service Worker与缓存及离线缓存")]),a._v(" "),e("p",[a._v("随着Service Worker（以下简称SW）的普及和规范，我们可以使用SW提供的缓存接口替代HTTP缓存。当然SW的功能是强大的，除了缓存功能，还能够使用它来实现离线、数据同步、后台编译等等。")]),a._v(" "),e("p",[a._v("一个标配版的sw缓存工代代码应该有以下的片段：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const version = '2';\n\nself.addEventListener('install', event => {\n  event.waitUntil(\n    caches.open(`static-${version}`)\n      .then(cache => cache.addAll([\n        '/styles.css',\n        '/script.js'\n      ]))\n  );\n});\n\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(response => response || fetch(event.request))\n  );\n});\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br")])]),e("p",[a._v("首先你要明白的前提是，网络请求首先到达的是SW脚本中，如果未命中再转发给HTTP缓存。")]),a._v(" "),e("p",[a._v("这段代码的意思是，在SW的install阶段我们将script.js和styles.css放入缓存中；而在请求发起的fetch阶段，通过资源的URL去缓存内查找匹配，成功后立刻返回，否则走正常的网络请求流程。")]),a._v(" "),e("p",[a._v("但你有没有考虑过，在install阶段的资源内容是哪里来的？仍然是从HTTP缓存中。这样SW缓存机制又有可能随着HTTP缓存陷入了之前所说的版本不一致的困境中。")]),a._v(" "),e("p",[a._v("既然我们借助SW重写了缓存机制，所以也不想再受牵制于旧的HTTP缓存。解决办法是让SW中的请求必须向服务端验证：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("self.addEventListener('install', event => {\n  event.waitUntil(\n    caches.open(`static-${version}`)\n      .then(cache => cache.addAll([\n        new Request('/styles.css', { cache: 'no-cache' }),\n        new Request('/script.js', { cache: 'no-cache' })\n      ]))\n  );\n});\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("目前并非所有的浏览器都支持cache选项的配置。但这个不是太大问题，我们可以通过添加随机数来保证每次请求的URL都不相同，间接的使得缓存失效：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("self.addEventListener('install', event => {\n  event.waitUntil(\n    caches.open(`static-${version}`)\n      .then(cache => Promise.all(\n        [\n          '/styles.css',\n          '/script.js'\n        ].map(url => {\n          // cache-bust using a random query string\n          return fetch(`${url}?${Math.random()}`).then(response => {\n            // fail on 404, 500 etc\n            if (!response.ok) throw Error('Not ok');\n            return cache.put(url, response);\n          })\n        })\n      ))\n  );\n});\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br")])]),e("h2",{attrs:{id:"离线缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离线缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 离线缓存")]),a._v(" "),e("p",[a._v("关于离线缓存，可以看我之前的文章：http://www.haorooms.com/post/html5_appcache")]),a._v(" "),e("h2",{attrs:{id:"pagecache与ajax可缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pagecache与ajax可缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" PageCache与Ajax可缓存")]),a._v(" "),e("p",[a._v("PageCache其实是facebook提出的，解决ajax缓存的一种方案！简单的说，就是将访问过的页面缓存在客户端。但我们知道，作为Facebook这样交互性很强的网站，需要保障用户能尽早的获得更新后的信息，而不是给用户展示一个毫无意义的过期页面。")]),a._v(" "),e("p",[a._v("Facebook设计了一个框架来识别一个页面是否来自于缓存（猜测：页面首次加载完毕后将所有Ajax的Callback和Result缓存在本地。Facebook页面是基于Ajax获取页面内容，参见BigPipe），若来自于缓存，通过Ajax来更新所需更新的模块（猜测：通过JS预先定义本页面所需更新的div Id及对应的callback handler，并在页面下载时同时下载下来）。")]),a._v(" "),e("p",[a._v("其提到了三种更新类型：增量更新，用户复写（例如用户在页面上回复了一则评论）及跨页更新（例如在消息详细页面将一则消息标识为已读，需将首页的未读消息数进行更新。）。核心思路还是依据Ajax进行更新。具体思路为：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1、增量更新：只要页面来自于缓存，即更新所有预定义的需增量更新的模块。\n\n2、用户复写：通过HistoryManager记录用户操作并在cache页面读取后重放所有被标记为“replayable”的操作。\n\n3、跨页更新：通过服务端Database API发送信号至客户端将过期缓存标识为invalid（不清楚如何实现。也许是DB端提供一个开放的webservice，客户端通过Ajax持续访问此API来获得此信息）。获得了缓存过期信号后，通过Ajax更新需要更新的信息。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Facebook顺带提到了一个更新Ajax内容避免页面变化/闪烁的小技巧，就是先将需更新的地方设置为blank，而非直接更新其内容。")])])},[],!1,null,null,null);s.default=t.exports}}]);