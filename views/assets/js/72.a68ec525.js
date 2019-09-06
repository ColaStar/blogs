(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{210:function(n,s,e){"use strict";e.r(s);var a=e(0),t=Object(a.a)({},function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"quicklink详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quicklink详解","aria-hidden":"true"}},[n._v("#")]),n._v(" quicklink详解")]),n._v(" "),e("p",[n._v("谷歌又开源了，谷歌一开源那必是精品啊。因为谷歌开源的各大框架，技术经常被大家广泛采用。")]),n._v(" "),e("p",[n._v("最近谷歌又来源了一项技术，名叫："),e("code",[n._v("quicklink")]),n._v("。据说使用它，可以将网页的加载速度从 4.6s 降到 0.7s")]),n._v(" "),e("p",[e("code",[n._v("quicklink")]),n._v("是一个"),e("code",[n._v("js")]),n._v("库，可以预加载出现在视口的网页链接，提高用户体验。它的加载过程如下：")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("1.检测网页中的链接是否出现在视口中，等待链接出现在视口，执行步骤2。")])]),n._v(" "),e("li",[e("p",[n._v("2.等待浏览器空闲后执行3。")])]),n._v(" "),e("li",[e("p",[n._v("3.判断当前的网络连接是否是2G，如果是则停止执行，如果不是2G网络，执行步骤4")])]),n._v(" "),e("li",[e("p",[n._v("4.预加载链接指向资源。")])])]),n._v(" "),e("h2",{attrs:{id:"使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式","aria-hidden":"true"}},[n._v("#")]),n._v(" 使用方式")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/GoogleChromeLabs/quicklink",target:"_blank",rel:"noopener noreferrer"}},[n._v("github详细用法"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"quicklink源码解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quicklink源码解析","aria-hidden":"true"}},[n._v("#")]),n._v(" quicklink源码解析")]),n._v(" "),e("p",[n._v("quicklink的入口函数接受传入的配置参数，通过Object.assign函数和默认的配置选项合并。接着执行timeoutFn异步方法，该方法接收一个回调函数，在回调中主要逻辑如下：")]),n._v(" "),e("p",[n._v("如果传入的options参数中有urls属性，则直接执行预加载，否则通过document.querySelectorAll方法获取所有a标签元素的NodeList，然后便利该元素节点列表，并监视该元素节点")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("observer.observe(link);\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("然后"),e("strong",[n._v("判断该a元素对象的href属性值所属的域名是否被允许访问")]),n._v("，如果被允许访问，继续判断该链接是否应该被忽略，判断逻辑如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("if (!allowed.length || allowed.includes(link.hostname)) {\n   // If there are any filters, the link must not match any of them\n   isIgnored(link, ignores) || toPrefetch.add(link.href);\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("如果链接没有被忽略，则将该节点的"),e("code",[n._v("href")]),n._v("属性值加入到"),e("code",[n._v("toPrefetch")]),n._v("中")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const toPrefetch = new Set();\ntoPrefetch.add(link.href);\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("总的代码逻辑如下")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("export default function (options) {\n  options = Object.assign({\n    timeout: 2e3,\n    priority: false,\n    timeoutFn: requestIdleCallback,\n    el: document,\n  }, options);\n\n  observer.priority = options.priority;\n\n  const allowed = options.origins || [location.hostname];\n  const ignores = options.ignores || [];\n\n  options.timeoutFn(() => {\n    // If URLs are given, prefetch them.\n    if (options.urls) {\n      options.urls.forEach(prefetcher);\n    } else {\n      // If not, find all links and use IntersectionObserver.\n      Array.from(options.el.querySelectorAll('a'), link => {\n        observer.observe(link);\n        // If the anchor matches a permitted origin\n        // ~> A `[]` or `true` means everything is allowed\n        if (!allowed.length || allowed.includes(link.hostname)) {\n          // If there are any filters, the link must not match any of them\n          isIgnored(link, ignores) || toPrefetch.add(link.href);\n        }\n      });\n    }\n  }, {timeout: options.timeout});\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br")])]),e("blockquote",[e("p",[n._v("检测link出现在视口")])]),n._v(" "),e("p",[n._v("上面通过"),e("code",[n._v("observer.observe(link)")]),n._v("监视"),e("strong",[n._v("节点元素")]),n._v("，其中"),e("code",[n._v("observer")]),n._v("是"),e("code",[n._v("IntersectionObserver")]),n._v("对象的实例，被监听的节点对象出现在视口时，会执行"),e("code",[n._v("new")]),n._v("操作时传入的回调函数，并将出现在视口的节点对象通过数组的形式传给该回调。然后在回调中便利传入的数组，如果数组中的元素包含在"),e("code",[n._v("toPrefetch")]),n._v("对象中，则取消对该元素的监视，并对该a标签元素所对应的资源进行预加载。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const link = entry.target;\n      if (toPrefetch.has(link.href)) {\n        observer.unobserve(link);\n        prefetcher(link.href);\n      }\n    }\n  });\n});\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("blockquote",[e("p",[n._v("异步函数实现")])]),n._v(" "),e("p",[n._v("如果浏览器支持"),e("code",[n._v("requestIdleCallback")]),n._v("，则使用原生的函数，如果不支持，则使用"),e("code",[n._v("setTimeout")]),n._v("函数做"),e("code",[n._v("ployfill")]),n._v("。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const requestIdleCallback = requestIdleCallback ||\n  function (cb) {\n    const start = Date.now();\n    return setTimeout(function () {\n      cb({\n        didTimeout: false,\n        timeRemaining: function () {\n          return Math.max(0, 50 - (Date.now() - start));\n        },\n      });\n    }, 1);\n  };\n\nexport default requestIdleCallback;\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br")])]),e("blockquote",[e("p",[n._v("资源请求函数实现")])]),n._v(" "),e("p",[n._v("预加载策略主要有三种")]),n._v(" "),e("ul",[e("li",[n._v("1."),e("code",[n._v("<link> prefetch")])])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function linkPrefetchStrategy(url) {\n  return new Promise((resolve, reject) => {\n    const link = document.createElement(`link`);\n    link.rel = `prefetch`;\n    link.href = url;\n\n    link.onload = resolve;\n    link.onerror = reject;\n\n    document.head.appendChild(link);\n  });\n};\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("ul",[e("li",[n._v("2.ajax加载")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function xhrPrefetchStrategy(url) {\n  return new Promise((resolve, reject) => {\n    const req = new XMLHttpRequest();\n\n    req.open(`GET`, url, req.withCredentials=true);\n\n    req.onload = () => {\n      (req.status === 200) ? resolve() : reject();\n    };\n\n    req.send();\n  });\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br")])]),e("ul",[e("li",[n._v("3.Fetch请求加载")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function highPriFetchStrategy(url) {\n  // TODO: Investigate using preload for high-priority\n  // fetches. May have to sniff file-extension to provide\n  // valid 'as' values. In the future, we may be able to\n  // use Priority Hints here.\n  //\n  // As of 2018, fetch() is high-priority in Chrome\n  // and medium-priority in Safari.\n  return self.fetch == null\n    ? xhrPrefetchStrategy(url)\n    : fetch(url, {credentials: `include`});\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("blockquote",[e("p",[n._v("网络类型判断")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("if (conn = navigator.connection) {\n    // Don't prefetch if the user is on 2G. or if Save-Data is enabled..\n    if ((conn.effectiveType || '').includes('2g') || conn.saveData) return;\n  }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("将上面三种预加载方法封装成函数，暴露给外部使用")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const supportedPrefetchStrategy = support('prefetch')\n  ? linkPrefetchStrategy\n  : xhrPrefetchStrategy;\n\nfunction prefetcher(url, isPriority, conn) {\n  if (preFetched[url]) {\n    return;\n  }\n\n  if (conn = navigator.connection) {\n    // Don't prefetch if the user is on 2G. or if Save-Data is enabled..\n    if ((conn.effectiveType || '').includes('2g') || conn.saveData) return;\n  }\n\n  // Wanna do something on catch()?\n  return (isPriority ? highPriFetchStrategy : supportedPrefetchStrategy)(url).then(() => {\n    preFetched[url] = true;\n  });\n};\n\nexport default prefetcher;\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);