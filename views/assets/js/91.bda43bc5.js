(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{308:function(e,p,n){"use strict";n.r(p);var a=n(0),l=Object(a.a)({},(function(){var e=this,p=e.$createElement,n=e._self._c||p;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("webpack5中优化？")]),e._v(" "),n("p",[e._v("1.webpack为啥会慢？")]),e._v(" "),n("p",[e._v("loader+plugin+node单线程+webpack本身就慢+入口比较多")]),e._v(" "),n("ul",[n("li",[e._v("解决方案\n用speed-measure-webpack-plugin分析是谁慢")])]),e._v(" "),n("p",[e._v("他会告诉你webpack每一个loader+entry的运行时间")]),e._v(" "),n("p",[e._v("entry多了怎么办")]),e._v(" "),n("p",[e._v("loader 多加cache-loader内存cache，与文件cache\n5里边直接加了一个chche的选项、\n可以用thread-loader（多核处理）重写了happypack（文件小反而会变慢）")]),e._v(" "),n("p",[e._v("plugin 多核处理js（webpack-parallel-ugify-plugin）\ncss（optimiza-css-assets-webpack-plugin），或者改良插件")]),e._v(" "),n("p",[e._v("entry比较多会比较慢，（180个entry的故事）消减entry\n把一个项目分项目\n集群编译让每一台机器帮你干活\n项目A A机器编译完scp到最后的dist文件下")]),e._v(" "),n("p",[e._v("项目B A机器编译完scp到最后的dist文件下")]),e._v(" "),n("p",[e._v("合理的devtool（不要乱动）去官网看一下\neval 开发环境下最快的")]),e._v(" "),n("p",[e._v("不愿意用魔法注释，可以用name-all-modoules-plugin可以固定chunksName，做持久化缓存")]),e._v(" "),n("p",[e._v("externals引cdn资源")]),e._v(" "),n("p",[e._v("按需加载")])])}),[],!1,null,null,null);p.default=l.exports}}]);