(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{556:function(n,s,e){"use strict";e.r(s);var t=e(63),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"vite2插件开发指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite2插件开发指南"}},[n._v("#")]),n._v(" Vite2插件开发指南")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#Vite%E6%8F%92%E4%BB%B6%E6%98%AF%E4%BB%80%E4%B9%88"}},[n._v("Vite插件是什么")])]),n._v(" "),e("li",[e("a",{attrs:{href:"#Vite%E6%8F%92%E4%BB%B6%E7%9A%84%E5%BD%A2%E5%BC%8F"}},[n._v("Vite插件的形式")])]),n._v(" "),e("li",[e("a",{attrs:{href:"#%E6%8F%92%E4%BB%B6%E9%92%A9%E5%AD%90"}},[n._v("插件钩子")])]),n._v(" "),e("li",[e("a",{attrs:{href:"#%E6%8F%92%E4%BB%B6%E9%A1%BA%E5%BA%8F"}},[n._v("插件顺序")])]),n._v(" "),e("li",[e("a",{attrs:{href:"#%E6%8F%92%E4%BB%B6%E7%BC%96%E5%86%99%E5%AE%9E%E6%93%8D"}},[n._v("插件编写实操")])])]),n._v(" "),e("h2",{attrs:{id:"vite插件是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite插件是什么"}},[n._v("#")]),n._v(" Vite插件是什么")]),n._v(" "),e("p",[n._v("使用"),e("code",[n._v("Vite")]),n._v("插件可以扩展"),e("code",[n._v("Vite")]),n._v("能力，比如解析用户自定义的文件输入，在打包代码前转译代码，或者查找第三方模块。")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/vite-devserver.jpg",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"vite插件的形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite插件的形式"}},[n._v("#")]),n._v(" Vite插件的形式")]),n._v(" "),e("p",[n._v("Vite插件扩展自Rollup插件接口，只是额外多了一些Vite特有选项。")]),n._v(" "),e("p",[e("strong",[n._v("Vite插件是一个拥有名称、创建钩子(build hook)或生成钩子(output generate hook)的对象。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("export default {\n    name:'my-vite-plugin',\n    load(id){}\n    resolveId(id){} \n    transform(html,id){}\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[e("strong",[n._v("如果需要配置插件，它的形式应该是一个接收插件选项，返回插件对象的函数。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("export default function(options) {\n   return {\n        name:'my-vite-plugin',\n        load(id){}\n        resolveId(id){} \n        transform(html,id){}\n   }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])]),e("p",[e("strong",[n._v("范例：加载一个不存在的虚拟模块")])]),n._v(" "),e("p",[n._v("创建vite-plugin-my-example.js")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("export default function myExample () {\n  return {\n    name: 'my-example', // 名称用于警告和错误展示\n    resolveId ( source ) {\n      if (source === 'virtual-module') {\n        return source; // 返回source表明命中，vite不再询问其他插件处理该id请求\n      }\n      return null; // 返回null表明是其他id要继续处理\n    },\n    load ( id ) {\n      if (id === 'virtual-module') {\n        return 'export default \"This is virtual!\"'; // 返回\"virtual-module\"模块源码\n      }\n      return null; // 其他id继续处理\n    }\n  };\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br")])]),e("h2",{attrs:{id:"插件钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件钩子"}},[n._v("#")]),n._v(" 插件钩子")]),n._v(" "),e("h3",{attrs:{id:"通用钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用钩子"}},[n._v("#")]),n._v(" 通用钩子")]),n._v(" "),e("p",[n._v("开发时，"),e("code",[n._v("Vite dev server")]),n._v("创建一个插件容器按照"),e("code",[n._v("Rollup")]),n._v("调用创建钩子的规则请求各个钩子函数。")]),n._v(" "),e("p",[e("strong",[n._v("下面钩子会在服务器启动时调用一次:")])]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://rollupjs.org/guide/en/#options",target:"_blank",rel:"noopener noreferrer"}},[n._v("options"),e("OutboundLink")],1),n._v(" 替换或操纵rollup选项")]),n._v(" "),e("li",[e("a",{attrs:{href:"https://rollupjs.org/guide/en/#buildstart",target:"_blank",rel:"noopener noreferrer"}},[n._v("buildStart"),e("OutboundLink")],1),n._v(" 开始创建")])]),n._v(" "),e("p",[e("strong",[n._v("下面钩子每次有模块请求时都会被调用:")])]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://rollupjs.org/guide/en/#resolveid",target:"_blank",rel:"noopener noreferrer"}},[n._v("resolveId"),e("OutboundLink")],1),n._v(" 创建自定义确认函数，常用语定位第三方依赖")]),n._v(" "),e("li",[e("a",{attrs:{href:"https://rollupjs.org/guide/en/#load",target:"_blank",rel:"noopener noreferrer"}},[n._v("load"),e("OutboundLink")],1),n._v(" 创建自定义加载函数，可用于返回自定义的内容")]),n._v(" "),e("li",[e("a",{attrs:{href:"https://rollupjs.org/guide/en/#transform",target:"_blank",rel:"noopener noreferrer"}},[n._v("transform"),e("OutboundLink")],1),n._v(" 可用于转换已加载的模块内容")])]),n._v(" "),e("p",[e("strong",[n._v("下面钩子会在服务器关闭时调用一次:")])]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://rollupjs.org/guide/en/#buildend",target:"_blank",rel:"noopener noreferrer"}},[n._v("buildEnd"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://rollupjs.org/guide/en/#closebundle",target:"_blank",rel:"noopener noreferrer"}},[n._v("closeBundle"),e("OutboundLink")],1)])]),n._v(" "),e("h3",{attrs:{id:"vite特有钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite特有钩子"}},[n._v("#")]),n._v(" Vite特有钩子")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://cn.vitejs.dev/guide/api-plugin.html#config",target:"_blank",rel:"noopener noreferrer"}},[n._v("config"),e("OutboundLink")],1),n._v(": 修改Vite配置\n"),e("a",{attrs:{href:"https://cn.vitejs.dev/guide/api-plugin.html#configresolved",target:"_blank",rel:"noopener noreferrer"}},[n._v("configResolved"),e("OutboundLink")],1),n._v("：Vite配置确认\n"),e("a",{attrs:{href:"https://cn.vitejs.dev/guide/api-plugin.html#configureServer",target:"_blank",rel:"noopener noreferrer"}},[n._v("configureServer"),e("OutboundLink")],1),n._v("：用于配置dev server\n"),e("a",{attrs:{href:"https://cn.vitejs.dev/guide/api-plugin.html#configureServer",target:"_blank",rel:"noopener noreferrer"}},[n._v("transformIndexHtml"),e("OutboundLink")],1),n._v("：用于转换宿主页\n"),e("a",{attrs:{href:"https://cn.vitejs.dev/guide/api-plugin.html#handleHotUpdate",target:"_blank",rel:"noopener noreferrer"}},[n._v("handleHotUpdate"),e("OutboundLink")],1),n._v("：自定义HMR更新时调用")]),n._v(" "),e("h3",{attrs:{id:"范例-钩子调用顺序测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#范例-钩子调用顺序测试"}},[n._v("#")]),n._v(" 范例：钩子调用顺序测试")]),n._v(" "),e("div",{staticClass:"language-export default function myExample () { line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  // 返回的是插件对象\n  return {\n    name: 'hooks-order', \n    // 初始化hooks，只走一次\n    options(opts) {\n      console.log('options', opts);\n    },\n    buildStart() {\n      console.log('buildStart');\n    },\n    // vite特有钩子\n    config(config) {\n      console.log('config', config);\n      return {}\n    },\n    configResolved(resolvedCofnig) {\n      console.log('configResolved');\n    },\n    configureServer(server) {\n      console.log('configureServer');\n      // server.app.use((req, res, next) => {\n      //   // custom handle request...\n      // })\n    },\n    transformIndexHtml(html) {\n      console.log('transformIndexHtml');\n      return html\n      // return html.replace(\n      //   /<title>(.*?)<\\/title>/,\n      //   `<title>Title replaced!</title>`\n      // )\n    },\n    // 通用钩子\n    resolveId ( source ) {\n      if (source === 'virtual-module') {\n        console.log('resolvedId', source);\n        return source; \n      }\n      return null; \n    },\n    load ( id ) {\n      if (id === 'virtual-module') {\n        console.log('load');\n        return 'export default \"This is virtual!\"';\n      }\n      return null;\n    },\n    transform(code, id) {\n      if (id === 'virtual-module') {\n        console.log('transform');\n      }\n      return code\n    },\n  };\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br")])]),e("h2",{attrs:{id:"钩子调用顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#钩子调用顺序"}},[n._v("#")]),n._v(" 钩子调用顺序")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/vite-sort.png",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"插件顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件顺序"}},[n._v("#")]),n._v(" 插件顺序")]),n._v(" "),e("ul",[e("li",[n._v("别名处理"),e("code",[n._v("Alias")])]),n._v(" "),e("li",[n._v("用户插件设置"),e("code",[n._v("enforce: 'pre'")])]),n._v(" "),e("li",[e("code",[n._v("Vite")]),n._v("核心插件")]),n._v(" "),e("li",[n._v("用户插件未设置"),e("code",[n._v("enforce")])]),n._v(" "),e("li",[e("code",[n._v("Vite")]),n._v("构建插件")]),n._v(" "),e("li",[n._v("用户插件设置"),e("code",[n._v("enforce: 'post'")])]),n._v(" "),e("li",[e("code",[n._v("Vite")]),n._v("构建后置插件("),e("code",[n._v("minify")]),n._v(", "),e("code",[n._v("manifest")]),n._v(", "),e("code",[n._v("reporting")]),n._v(")")])]),n._v(" "),e("p",[e("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/vite-devserver-sort.png",alt:""}})]),n._v(" "),e("p",[n._v("转载"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/364275970",target:"_blank",rel:"noopener noreferrer"}},[n._v("Vite2插件开发指南"),e("OutboundLink")],1),n._v(" "),e("a",{attrs:{href:"https://cn.vitejs.dev/guide/api-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Vite中文官网插件篇"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"插件编写实操"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件编写实操"}},[n._v("#")]),n._v(" 插件编写实操")]),n._v(" "),e("p",[e("strong",[n._v("实现一个"),e("code",[n._v("mock")]),n._v("服务器"),e("code",[n._v("vite-plugin-mock")])])]),n._v(" "),e("p",[e("strong",[n._v("实现思路")]),n._v("是给开发服务器实例("),e("code",[n._v("connect")]),n._v(")配一个中间件，该中间件可以存储用户配置接口映射信息，并提前处理输入请求，如果请求的"),e("code",[n._v("url")]),n._v("和路由表匹配则接管，按用户配置的"),e("code",[n._v("handler")]),n._v("返回结果。\n"),e("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/vite-plugin-mock-serve.png",alt:""}})]),n._v(" "),e("p",[n._v("创建"),e("code",[n._v("plugins/vite-plugin-mock.js")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import path from 'path'\n\nlet mockRouteMap = {};\n\nfunction matchRoute(req) {\n  let url = req.url;\n  let method = req.method.toLowerCase();\n  let routeList = mockRouteMap[method];\n\n  return routeList && routeList.find((item) => item.path === url);\n}\n\nfunction createRoute(mockConfList) {\n  mockConfList.forEach((mockConf) => {\n    let method = mockConf.type || 'get';\n    let path = mockConf.url;\n    let handler = mockConf.response;\n    let route = { path, method: method.toLowerCase(), handler };\n    if (!mockRouteMap[method]) {\n      mockRouteMap[method] = [];\n    }\n    console.log('create mock api: ', route.method, route.path);\n    mockRouteMap[method].push(route);\n  });\n}\n\nfunction send(body) {\n  let chunk = JSON.stringify(body);\n  // Content-Length\n  if (chunk) {\n    chunk = Buffer.from(chunk, 'utf-8');\n    this.setHeader('Content-Length', chunk.length);\n  }\n  // content-type\n  this.setHeader('Content-Type', 'application/json');\n  // status\n  this.statusCode = 200;\n  // respond\n  this.end(chunk, 'utf8');\n}\nexport default function (options = {}) {\n  options.entry = options.entry || './mock/index.js';\n\n\n  if (!path.isAbsolute(options.entry)) {\n    options.entry = path.resolve(process.cwd(), options.entry);\n  }\n\n  return {\n    configureServer: function ({ app }) {\n      const mockObj = require(options.entry);\n      createRoute(mockObj);\n\n      const middleware = (req, res, next) => {\n        let route = matchRoute(req);\n\n        if (route) {\n          console.log('mock request', route.method, route.path);\n          res.send = send;\n          route.handler(req, res);\n        } else {\n          next();\n        }\n      };\n      app.use(middleware);\n    },\n  };\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);