(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{556:function(s,n,a){"use strict";a.r(n);var e=a(63),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"webpack基础1-2-3-4-5区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack基础1-2-3-4-5区别"}},[s._v("#")]),s._v(" webpack基础1 2 3 4 5区别")]),s._v(" "),a("p",[s._v("他是一个前端模块化的打包工具")]),s._v(" "),a("blockquote",[a("p",[s._v("什么是模块化？")])]),s._v(" "),a("p",[s._v("模块化是一种将系统分离成独立功能部分的方法，严格定义模块接口、模块间具有透明性（传递参数）。")]),s._v(" "),a("blockquote",[a("p",[s._v("模块化历史")])]),s._v(" "),a("ul",[a("li",[s._v("无模块时代")]),s._v(" "),a("li",[s._v("模块萌芽时代")]),s._v(" "),a("li",[s._v("现代模块时代")])]),s._v(" "),a("p",[s._v("无模块时代")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//a.js\nvar a = function(){\n\n}\n//b.js\nvar b = function(){\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("会造成的问题：\n1.全局变量泛滥\n2.命名冲突\n3.依赖关系的管理不是很好。")]),s._v(" "),a("p",[s._v("模块萌芽时代\n立即执行函数(IIFE)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var modileA = function(){\n    var a,b;\n    return {\n        messages:function(){\n            alert(a+b+c)\n        }\n    }\n}()\n\nz最经典的就是Jquery\n\n(function(window){\nwindow.jQuery = window.$ = jQuery;\n})(window)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("现代模块时代\n1.CommonJS\n2.RequireKS(AMD)/SeaJS(CMD)\n3.ES6 Module")]),s._v(" "),a("p",[s._v("CommonJS"),a("br"),s._v("\nmodule.exports导出\n直接require引入")]),s._v(" "),a("p",[s._v("AMD与cmd的区别：\n知乎：https://www.zhihu.com/question/20351507/answer/14859415")]),s._v(" "),a("p",[s._v("ES6 Module")]),s._v(" "),a("p",[s._v("高内聚、低耦合")]),s._v(" "),a("p",[s._v("编译过的文件又一个sourcemap")]),s._v(" "),a("p",[s._v("webpack万物都是模块\neverything is module")]),s._v(" "),a("p",[s._v("特点")]),s._v(" "),a("ul",[a("li",[s._v("拆分依赖到代码块按需加载")]),s._v(" "),a("li",[s._v("快速初始化项目")]),s._v(" "),a("li",[s._v("所有静态资源都可以当作模块")]),s._v(" "),a("li",[s._v("第三方库模块化")]),s._v(" "),a("li",[s._v("自定义模块打包")]),s._v(" "),a("li",[s._v("适合大型项目")])]),s._v(" "),a("p",[s._v("entry :配置入口文件\noutput：配置编译后的资源\nloader(module) ：资源的处理\nresolve：配置资源的别名/扩展名等\nplugins：插件、biloader更加强大")]),s._v(" "),a("p",[s._v("围绕上边这些玩")]),s._v(" "),a("p",[s._v("webpack1.0总结")]),s._v(" "),a("p",[s._v("1，loader怎么用")]),s._v(" "),a("ul",[a("li",[s._v("1.通过requir的直接加进去（在require 的时候把loader加进去）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("require('./loader!./dir/file.txt')\nrequire('jade!./template.jade')\nrequire('!style!css!less!bootstrap/less/bootstrap.less')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("2.z在配置文件里配")]),s._v(" "),a("li",[s._v("通过命令行")])]),s._v(" "),a("p",[s._v("常见的loader")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("css样式：css-loader/style-loader/less-loader/sass-loader\n\n脚本js：bebel-loader\n\n图片/字体：file-loader  url-loader\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("webpack使用优化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.别名alias\n2.忽略对已知模块的解析 noParse\n3.将模块暴露到全局；不需要在html中引入文件了expose-loader\n4.通过providePlugin将模块暴露到全局\n5.提取公共代码COmmonsChunkplugin\n6. 配置全局开关debug\n7.单独打包css\n\n{\n    module:{\n        alias:{\n            '@':'/src'\n        },   \n        noParse:['/nodemodules']\n        loaders:{\n            {\n                test:/jquery\\.js$/,\n                loader:'export?$!exporse?jQuery'\n            }\n        }\n    }\n    plugin：[\n        new webpack.optimize.CommonsChunkplugin({\n            name:'vendor',\n            filename:'[name].[hash].js',\n            minChunks:3,\n            chunks:['jquery',underscore]\n        }),\n        new webpack.DefinePlugin({\n            DEBUG:true\n        })\n        new ExtractTextPlugin('[name].[hash:8].css',{\n            allChunks:true\n        })\n    ]\n}\nrequire('exporse?$!exporse?jQuery!jquery')\n\n//全局开关别的js\nconst constant = {\n    API_HOST = DEBUG ? 'http://.....' : ''\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("p",[s._v("webpack2新变化")]),s._v(" "),a("p",[s._v("webpack4")]),s._v(" "),a("p",[s._v("不要纠结语法")]),s._v(" "),a("p",[s._v("过程非常艰辛，配置工程师\n特点：\ntree shcking\n提高webpack性能")]),s._v(" "),a("p",[s._v("没有向下兼容，一些很老的插件是不能用了")])])}),[],!1,null,null,null);n.default=r.exports}}]);