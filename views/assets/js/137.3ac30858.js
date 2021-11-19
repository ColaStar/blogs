(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{503:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"charles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#charles","aria-hidden":"true"}},[t._v("#")]),t._v(" Charles")]),t._v(" "),e("h2",{attrs:{id:"修改返回报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改返回报文","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改返回报文")]),t._v(" "),e("h3",{attrs:{id:"_1-通过映射方式修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过映射方式修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.通过映射方式修改")]),t._v(" "),e("p",[e("strong",[t._v("Charles")]),t._v(" 中有两种"),e("strong",[t._v("修改映射")]),t._v("的方法 "),e("strong",[t._v("Map Local")]),t._v(" 和 "),e("strong",[t._v("Map Remote")]),t._v(" ，两种方法各有不同的用处。")]),t._v(" "),e("h4",{attrs:{id:"_1-1、本地映射map-local"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、本地映射map-local","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1、本地映射"),e("code",[t._v("Map Local")])]),t._v(" "),e("blockquote",[e("p",[t._v("其实这种方法很好理解，就是修改映射方式让请求去读取我们本地的文件并返回，具体操作可以参考下面。")])]),t._v(" "),e("p",[t._v("选中一条网络请求--\x3e右键--\x3e"),e("strong",[t._v("Save Response")]),t._v(" 将返回报文保存到本地磁盘\n"),e("img",{attrs:{src:"https://colastar.github.io/static/images/Save_Response.jpg",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("选中相同的请求--\x3e右键--\x3eMap Local")]),t._v(" 将请求映射到刚才保存的返回报文\n"),e("img",{attrs:{src:"https://colastar.github.io/static/images/map_local.jpg",alt:""}})]),t._v(" "),e("p",[t._v("设置完映射之后每次该请求都会从设置的本地文件中读取并返回数据，我们可以随心所欲的修改保存的报文达到调试接口的目的。")]),t._v(" "),e("p",[t._v("另外如果在开发初期，客户端和服务器端已经定义好了接口，但是服务器端还没有部署好环境。我们也可以通过这个方法把定义好的报文保存到本地，通过修改映射的方式来进行初步开发。")]),t._v(" "),e("h4",{attrs:{id:"_1-2、远程映射-map-remote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、远程映射-map-remote","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2、远程映射 "),e("code",[t._v("Map Remote")])]),t._v(" "),e("blockquote",[e("p",[t._v("修改远程映射是通过修改请求的HOST来实现的，可以将请求切换到不同的环境（例如当前的包是正式环境，你想看看测试环境的修改有没有生效，可以不用再打一个测试环境的包，通过修改远程映射快速实现。也省的改手机的HOST的了）。")])]),t._v(" "),e("p",[e("strong",[t._v("选中要修改的请求--\x3e右键--\x3eMap Remote 在Map To栏")]),t._v(" 中填写要映射到的地址的一些参数。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://colastar.github.io/static/images/map_remote.jpg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2-通过断点修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过断点修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.通过断点修改")]),t._v(" "),e("blockquote",[e("p",[t._v("除了修改映射的方法，通过设置断点也可以实现想要的效果。和我们在IDE上设置断点一样，在断点处会进入调试模式，请求会暂时中断，这是我们可以进行一些自定义的操作。")])]),t._v(" "),e("p",[t._v("首先开启断点模式，在Charles的面板上方将断点的图标点亮\n"),e("img",{attrs:{src:"https://colastar.github.io/static/images/ide_%E6%96%AD%E7%82%B9.jpg",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("设置断点，选中要修改的请求--\x3e右键--\x3eBreakPoints （左面出现对勾表示设置成功）")]),t._v("。设置完成后，Charles再次抓取到该请求时会自动进入到调试模式。")]),t._v(" "),e("p",[t._v("进入调试模式后可以修改请求报文，或者直接"),e("code",[t._v("Execute")]),t._v("进行下一步\n"),e("img",{attrs:{src:"https://colastar.github.io/static/images/execute.jpg",alt:""}})]),t._v(" "),e("p",[t._v("请求报文发送成功后，Charles会拦截服务器返回的数据，这里可以通过"),e("code",[t._v("Edit Response")]),t._v("修改返回数据，或者"),e("code",[t._v("Execute")]),t._v("进行下一步\n"),e("img",{attrs:{src:"https://colastar.github.io/static/images/edit_res.jpg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("上面的方法可以用来修改一般的网络请求，但如果数据做了加密处理看不到明文那用处就不大了。")]),t._v(" "),e("p",[t._v("需要注意一点，通过断点的方式会存在一定的问题。数据被拦截后，客户端的请求超时时长是不会停止计算的，如果没在设置的超时时间内返回数据本次请求也就按失败处理了。")])])}),[],!1,null,null,null);a.default=r.exports}}]);