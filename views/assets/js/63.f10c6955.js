(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{545:function(t,e,n){"use strict";n.r(e);var a=n(63),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"grunt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grunt"}},[t._v("#")]),t._v(" grunt")]),t._v(" "),n("p",[n("strong",[t._v("Table of Contents")]),t._v(" "),n("em",[t._v("generated with "),n("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocToc"),n("OutboundLink")],1)])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#grunt"}},[t._v("grunt")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E7%AE%80%E4%BB%8B"}},[t._v("简介")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE"}},[t._v("安装与配置")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E6%8F%92%E4%BB%B6"}},[t._v("插件")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#api"}},[t._v("api")])])])])]),t._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("p",[t._v("摘抄至官网")]),t._v(" "),n("p",[t._v("简单的说就是，自动化。对于需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。当你在 Gruntfile 文件正确配置好了任务，任务运行器就会自动帮你或你的小组完成大部分无聊的工作。")]),t._v(" "),n("p",[t._v("但是为什么要用grunt呢？")]),t._v(" "),n("p",[t._v("grunt的生态系统非常庞大。可用的插件很多，你可以花费很少的代价，自动完成任何事情。")]),t._v(" "),n("h2",{attrs:{id:"安装与配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装与配置"}},[t._v("#")]),t._v(" 安装与配置")]),t._v(" "),n("blockquote",[n("p",[t._v("1.安装grunt-cli到全局去，产生一个全局的grunt命令。")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install -g grunt-cli\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("blockquote",[n("p",[t._v("安装grunt到本地")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install --save-dev grunt\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("blockquote",[n("p",[t._v("建立一个package.json文件为npm做配置\n建立一个gruntfile.js文件,为了grunt做某种配置")])]),t._v(" "),n("p",[t._v("相当于webpack的webpack.config.js或gulp 的gulpfile.js")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("module.exports = function(grunt) {\n\n  grunt.initConfig({\n    jshint: {\n      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],\n      options: {\n        globals: {\n          jQuery: true\n        }\n      }\n    },\n    watch: {\n      files: ['<%= jshint.files %>'],\n      tasks: ['jshint']\n    }\n  });\n\n  grunt.loadNpmTasks('grunt-contrib-jshint');\n  grunt.loadNpmTasks('grunt-contrib-watch');\n\n  grunt.registerTask('default', ['jshint']);\n\n};\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br")])]),n("h2",{attrs:{id:"插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("插件名称")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Github地址")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-contrib-clean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("清空文件和文件夹")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/gruntjs/grunt-contrib-clean")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-contrib-concat")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("连接、合并文件")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/gruntjs/grunt-contrib-concat")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-svgstore\t（svg）")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("从指定文件夹合并svg")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/FWeinb/grunt-svgstore")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-csscomb")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("（CSS）格式化")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/csscomb/")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-contrib-cssmin")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("（CSS文件）压缩")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/gruntjs/grunt-contrib-cssmin")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-contrib-uglify")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("（JS文件）压缩")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/gruntjs/grunt-contrib-uglify")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-contrib-htmlmin")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("（HTML文件）压缩")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/gruntjs/grunt-contrib-htmlmin")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-filerev")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("文件内容hash（MD5）")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/yeoman/grunt-filerev")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-filerev-replace")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("替换通过grunt-filerev的文件引用")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/solidusjs/grunt-filerev-replace")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-text-replace")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("（文本文件）使用字符串、正则、函数替换内容")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/yoniholmes/grunt-text-replace")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-html-build")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("（HTML文件）增加js、css、模板引用，移除调试代码")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/spatools/grunt-html-build")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-autoprefixer")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("添加前缀依赖Can I Use数据库")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/nDmitry/grunt-autoprefixer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-parallel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("并行运行命令和任务")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/iammerrick/grunt-parallel")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("grunt-contrib-watch")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("文件发生改变运行任务")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/gruntjs/grunt-contrib-watch")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("load-grunt-tasks")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("使用通配符加载所有任务")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/sindresorhus/load-grunt-tasks")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("time-grunt")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("显示运行任务的执行时间")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/sindresorhus/time-grunt")])])])]),t._v(" "),n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" api")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.gruntjs.net/api/grunt",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网api"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);