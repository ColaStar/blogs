(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{427:function(e,l,p){"use strict";p.r(l);var v=p(42),_=Object(v.a)({},(function(){var e=this,l=e.$createElement,p=e._self._c||l;return p("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[p("p",[e._v("webpack5中优化？")]),e._v(" "),p("p",[e._v("1.webpack为啥会慢？")]),e._v(" "),p("p",[e._v("loader+plugin+node单线程+webpack本身就慢+入口比较多")]),e._v(" "),p("blockquote",[p("p",[e._v("解决方案")])]),e._v(" "),p("ul",[p("li",[p("p",[e._v("用speed-measure-webpack-plugin分析是谁慢")])]),e._v(" "),p("li",[p("p",[e._v("他会告诉你webpack每一个loader+entry的运行时间")])]),e._v(" "),p("li",[p("p",[e._v("entry多了怎么办")])]),e._v(" "),p("li",[p("p",[e._v("loader 多加cache-loader内存cache，与文件cache,webpack5里边直接加了一个chche的选项、")])]),e._v(" "),p("li",[p("p",[e._v("可以用thread-loader（多核处理）重写了happypack（文件小反而会变慢）")])]),e._v(" "),p("li",[p("p",[e._v("plugin 多核处理js（webpack-parallel-ugify-plugin）")])]),e._v(" "),p("li",[p("p",[e._v("css（optimiza-css-assets-webpack-plugin），或者改良插件")])]),e._v(" "),p("li",[p("p",[e._v("entry比较多会比较慢，（180个entry的故事）消减entry")]),e._v(" "),p("ul",[p("li",[e._v("把一个项目分项目")]),e._v(" "),p("li",[e._v("集群编译让每一台机器帮你干活")]),e._v(" "),p("li",[e._v("项目A A机器编译完scp到最后的dist文件下")]),e._v(" "),p("li",[e._v("项目B A机器编译完scp到最后的dist文件下")])])]),e._v(" "),p("li",[p("p",[e._v("合理的devtool（不要乱动）去官网看一下,eval 开发环境下最快的")])]),e._v(" "),p("li",[p("p",[e._v("不愿意用魔法注释，可以用"),p("code",[e._v("name-all-modoules-plugin")]),e._v("可以固定chunksName，做持久化缓存")])]),e._v(" "),p("li",[p("p",[e._v("externals引cdn资源")])]),e._v(" "),p("li",[p("p",[e._v("按需加载")])])])])}),[],!1,null,null,null);l.default=_.exports}}]);