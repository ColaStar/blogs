(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{161:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端高级调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端高级调试","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端高级调试")]),t._v(" "),a("h2",{attrs:{id:"elements标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elements标签页","aria-hidden":"true"}},[t._v("#")]),t._v(" Elements标签页")]),t._v(" "),a("p",[t._v("Elements标签页的左侧就是对页面HTML结构的查看与编辑，你可以直接在某个元素上双击修改元素的属性。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_element1.jpeg"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_element1.jpeg",alt:""}})])]),t._v(" "),a("ul",[a("li",[t._v("Edit as HTML直接对元素的HTML进行编辑，或者删除某个元素，所有的修改都会即时在页面上得到呈现。")]),t._v(" "),a("li",[t._v("Copy可以将HTML代码直接复制下来，在拷贝别人网站上面的HTML代码的时候灰常方便，你懂的~~")]),t._v(" "),a("li",[t._v("Delete node删掉一个HTML Node")]),t._v(" "),a("li",[t._v("Break on可以对某个元素进行监听，在JS对元素的属性或者HTML进行修改的时候，直接触发断点，跳转到对改元素进行修改的JS代码处")])]),t._v(" "),a("blockquote",[a("p",[t._v("DOM元素断点 ---break on")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Node removal DOM 元素被删除时会查看，还可以选择 Subtree")])]),t._v(" "),a("li",[a("p",[t._v("modifications DOM 元素被修改时或者")])]),t._v(" "),a("li",[a("p",[t._v("Attributes modifications DOM 元素属性的变化")])])]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/DOM断点调试结果图.jpg"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/DOM%E6%96%AD%E7%82%B9%E8%B0%83%E8%AF%95%E7%BB%93%E6%9E%9C%E5%9B%BE.jpg",alt:""}})])]),t._v(" "),a("p",[t._v("Elements标签页的右侧可以对元素的CSS进行查看与编辑修改：\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_element2.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_element2.png",alt:""}})])]),t._v(" "),a("ul",[a("li",[t._v("Style看HTML元素的样式")]),t._v(" "),a("li",[t._v("Computed可以看元素的盒子模型")]),t._v(" "),a("li",[t._v("Properties看到元素具有的方法与属性，比查API手册要方便得多")]),t._v(" "),a("li",[t._v("event listeners 点击某个dom元素选中，找到event listeners去找事件的绑定，把{}打开可以找到"),a("code",[t._v("dom")]),t._v("事件的绑定，可以把{}打开，查看详细")])]),t._v(" "),a("h2",{attrs:{id:"network标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network标签页","aria-hidden":"true"}},[t._v("#")]),t._v(" Network标签页")]),t._v(" "),a("p",[t._v("Network标签页对于分析网站请求的网络情况、查看某一请求的请求头和响应头还有响应内容很有用。注意是在你打开Chrome开发者工具后发起的请求，才会在这里显示的哦。")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_network3.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_network3.png",alt:""}})])]),t._v(" "),a("p",[t._v("点击左侧某一个具体请求URL，可以看到该请求的详细HTTP请求情况：\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_network2.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_network2.png",alt:""}})])]),t._v(" "),a("p",[t._v("我们可以在这里看到HTTP请求头、HTTP响应头、HTTP返回的内容等信息。")]),t._v(" "),a("ul",[a("li",[t._v("Headers请求头信息和响应头信息")]),t._v(" "),a("li",[t._v("Preview预览结果，如果是文件可以查看这个文件；如果是图片可以预览这个图片；如果是从服务器返回来的JSON数据，可以查看格式话后的JSON")]),t._v(" "),a("li",[t._v("Response从服务器返回的响应结果")]),t._v(" "),a("li",[t._v("Cookies请求和响应的Cookie")]),t._v(" "),a("li",[t._v("Timing具体的响应时间")])]),t._v(" "),a("h2",{attrs:{id:"sources标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sources标签页","aria-hidden":"true"}},[t._v("#")]),t._v(" sources标签页")]),t._v(" "),a("p",[t._v("sources标签页可以查看到请求的资源情况，包括CSS、JS、图片等的内容。也可以设置各种断点。对存储的内容进行编辑然后保存也会实时的反应到页面上。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_source1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_source1.png",alt:""}})]),t._v(" "),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_source2.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_source2.png",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"timeline-performance标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeline-performance标签页","aria-hidden":"true"}},[t._v("#")]),t._v(" Timeline/performance标签页")]),t._v(" "),a("p",[t._v("Chrome 57已经改为performance（性能模板）")]),t._v(" "),a("p",[t._v("首先看看一看performance能够整理什么网页数据")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance1.png",alt:""}})])]),t._v(" "),a("p",[t._v("如图第一个模块（Control窗格）是点击开始录制，停止，clear。")]),t._v(" "),a("p",[t._v("Performance 界面 其从上到下是：")]),t._v(" "),a("ul",[a("li",[t._v("工具栏")]),t._v(" "),a("li",[t._v("FPS图表")]),t._v(" "),a("li",[t._v("CPU图表")]),t._v(" "),a("li",[t._v("NET图表")]),t._v(" "),a("li",[t._v("Network图表")]),t._v(" "),a("li",[t._v("Frames图表")]),t._v(" "),a("li",[t._v("Main图表")]),t._v(" "),a("li",[t._v("Frame图表")]),t._v(" "),a("li",[t._v("Raster图表")]),t._v(" "),a("li",[t._v("CPU图表")]),t._v(" "),a("li",[t._v("Summary面板")])]),t._v(" "),a("h3",{attrs:{id:"_1、fps图表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、fps图表","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、FPS图表")]),t._v(" "),a("p",[t._v("FPS（frames per second）每秒帧数，是来衡量动画的一个性能指标，该指标若能保持在60，就能带来不错的用户体验。若出现了一个红色的长条，那就说明这些帧存在严重的问题。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_fps.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_fps.png",alt:""}})])]),t._v(" "),a("p",[t._v("2、CPU图表\n  CPU图表中的颜色和面板底部的Summary 面板中的颜色是匹配的。每种颜色分别代码一种处理。颜色条越长，表示CPU在该处理上所花费的时间就越长。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_cpu.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_cpu.png",alt:""}})])]),t._v(" "),a("p",[t._v("各颜色含义：")]),t._v(" "),a("ul",[a("li",[t._v("蓝色(Loading)：网络通信和HTML解析")]),t._v(" "),a("li",[t._v("黄色(Scripting)：JavaScript执行")]),t._v(" "),a("li",[t._v("紫色(Rendering)：样式计算和布局，即重排")]),t._v(" "),a("li",[t._v("绿色(Painting)：重绘")]),t._v(" "),a("li",[t._v("灰色(other)：其它事件花费的时间")]),t._v(" "),a("li",[t._v("白色(Idle)：空闲时间")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("颜色")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事件")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("蓝色(Loading)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Parse HTML")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("浏览器执行HTML解析")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Finish Loading")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("网络请求完毕事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Receive Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求的响应数据到达事件，如果响应数据很大（拆包），可能会多次触发该事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Receive Response")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("响应头报文到达时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Send Request")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送网络请求时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("黄色(Scripting)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Animation Frame Fired")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一个定义好的动画帧发生并开始回调处理时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cancel Animation Frame")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消一个动画帧时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GC Event")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("垃圾回收时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOMContentLoaded")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当页面中的DOM内容加载并解析完毕时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Evaluate Script")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("评估脚本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Event")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("js事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Function Call")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("js事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Function Call")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只有当浏览器进入到js引擎中时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("EvInstall Timerent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建计时器（调用setTimeout()和setInterval()）时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Request Animation Frame")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("requestAnimationFrame（）调用预定一个新帧")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Remove Timer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当清除一个计时器时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("调用console.time()触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Time End")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("调用console.timeEnd()触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Timer Fired")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Timer Fired")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("XHR Ready State Change")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当一个异步请求为就绪状态后触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("XHR Load")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当一个异步请求完成加载后触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("紫色(Rendering)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalidate layout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当DOM更改导致页面布局失效时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Layout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("页面布局计算执行时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Recalculate style")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Chrome重新计算元素样式时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Scroll")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内嵌的视窗滚动时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("绿色(Painting)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Composite Layers")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Chrome的渲染引擎完成图片层合并时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Image Decode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一个图片资源完成解码后触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Image Resize")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一个图片被修改尺寸后触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Paint")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("合并后的层被绘制到对应显示区域后触发")])])])]),t._v(" "),a("h3",{attrs:{id:"_3、net和network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、net和network","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、NET和Network")]),t._v(" "),a("p",[t._v("NET中每条横杠表示一种资源，横杠越长，表示请求资源所需的时间越长。Network中表示忘了请求的详细情况。")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_net1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_net1.png",alt:""}})])]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：无论鼠标移动到FPS,CPU或者NET图表上，DevTools都会显示在该时间节点上的屏幕截图，将你的鼠标左右移动，可以重放录制画面，这被称为"),a("strong",[t._v("擦洗。")])]),t._v(" "),a("h3",{attrs:{id:"_4、frames"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、frames","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、Frames")]),t._v(" "),a("p",[t._v("在Frames部分，如果将你的鼠标移动至绿色方块部分，会显示在该特定帧上的FPS值，此例中每帧可能远低于60FPS的目标。")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_frame.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_frame.png",alt:""}})])]),t._v(" "),a("p",[t._v("在这个例子中，页面的性能很差并且能很明显地被观察到，但是在实际场景中，可能并不是那么的容易，所以，要用所有这些工具来进行综合测量。")]),t._v(" "),a("p",[a("strong",[t._v("实时显示FPS面板")]),t._v("：more tools -> Rendering -> 在Rendering面板打开 FPS Meter。")]),t._v(" "),a("h3",{attrs:{id:"_5、main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、main","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、Main")]),t._v(" "),a("p",[t._v("展开Main部分，DevTools将显示主线程上的随着时间推移的活动火焰图。x轴代表随时间推移的记录，每个长条代表一个事件，长条越宽，代表这个事件花费的时间越长。y轴代表调用堆栈，当你看到堆叠在一起的事件时，意味着上层事件发起了下层事件。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_main.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_performance_main.png",alt:""}})])]),t._v(" "),a("p",[t._v("可以通过单击、鼠标滚动或者拖动来选中FPS,CPU或NET图标中的一部分，Main部分和Summary Tab就会只显示选中部分的录制信息。注意Animation Frame Fired事件右上角的红色三角形图标，该红色三角图标是这个事件有问题的警告。")]),t._v(" "),a("p",[t._v("在Summary面板中，将会显示有导致问题的代码行号。比如点击 Initiator 的 reveal或者Initiator下面的"),a("code",[t._v("： app.js:95")]),t._v("，点击将会跳转到对应的代码行。")]),t._v(" "),a("p",[t._v("通过上面的方法可以分析该例子中，由于offsetTop导致了回流，所以优化方法是将该值缓存，避免重复读取。")]),t._v(" "),a("p",[a("strong",[t._v("Summary面板颜色解释")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("蓝色(Loading)：网络通信和HTML解析")]),t._v(" "),a("li",[t._v("黄色(Scripting)：JavaScript执行")]),t._v(" "),a("li",[t._v("紫色(Rendering)：样式计算和布局，即重排")]),t._v(" "),a("li",[t._v("绿色(Painting)：重绘")]),t._v(" "),a("li",[t._v("灰色(other)：其它事件花费的时间")]),t._v(" "),a("li",[t._v("白色(Idle)：空闲时间")])]),t._v(" "),a("h2",{attrs:{id:"profiles-memory标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profiles-memory标签页","aria-hidden":"true"}},[t._v("#")]),t._v(" Profiles/memory标签页")]),t._v(" "),a("p",[t._v("主要是做性能优化的，包括查看CPU执行时间与内存占用")]),t._v(" "),a("p",[t._v("Profiling可以记录当前的堆内存（heap）快照，并生成对象的描述文件，该描述文件给出了当时JS运行所用到的所有对象，以及这些对象所占用的内存大小、引用的层级关系等等。这些描述文件为内存泄漏的排查提供了非常有用的信息。")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_Profiles1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_Profiles1.png",alt:""}})])]),t._v(" "),a("blockquote",[a("p",[t._v("什么是heap")])]),t._v(" "),a("p",[t._v("JS运行的时候，会有栈内存（stack）和堆内存（heap），当我们用new实例化一个类的时候，这个new出来的对象就保存在heap里面，而这个对象的引用则存储在stack里。程序通过stack里的引用找到这个对象。例如var a = "),a("code",[t._v("[1,2,3]")]),t._v(";，a是存储在stack里的引用，heap里存储着内容为"),a("code",[t._v("[1,2,3]")]),t._v("的Array对象。")]),t._v(" "),a("blockquote",[a("p",[t._v("heap Profiles")])]),t._v(" "),a("p",[t._v("打开Chrome浏览器（版本25.0.1364.152 m），打开要监视的网站（这里以游戏大厅为例），按下F12调出调试工具，点击“Profiles”标签。可以看到下图：")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_Profiles1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_Profiles1.png",alt:""}})])]),t._v(" "),a("p",[t._v("可以看到，该面板可以监控CPU、CSS和内存，选中“Take Heap Snapshot”，点击“Start”按钮，就可以拍下当前JS的heap快照，如下图所示：")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_Profiles3.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_Profiles3.png",alt:""}})])]),t._v(" "),a("p",[t._v("右边视图列出了heap里的对象列表。由于游戏大厅使用了Quark游戏库，所以这里可以清楚地看到Quark.XXX之类的类名称（即Function对象的引用名称）。")]),t._v(" "),a("p",[a("strong",[t._v("注意：每次拍快照前，都会先自动执行一次GC，所以在视图里的对象都是可及的。")])]),t._v(" "),a("p",[a("strong",[t._v("视图解释")])]),t._v(" "),a("p",[t._v("列字段解释：")]),t._v(" "),a("ul",[a("li",[t._v("Constructor — 类名Distance — 估计是对象到根的引用层级距离")]),t._v(" "),a("li",[t._v("Objects Count — 给出了当前有多少个该类的对象")]),t._v(" "),a("li",[t._v("Shallow Size — 对象所占内存（不包含内部引用的其它对象所占的内存）(单位：字节)")]),t._v(" "),a("li",[t._v("Retained Size — 对象所占总内存（包含内部引用的其它对象所占的内存）(单位：字节)")])]),t._v(" "),a("p",[t._v("下面解释一下部分类名称所代表的意思：")]),t._v(" "),a("ul",[a("li",[t._v("(compiled code) — 未知，估计是程序代码区")]),t._v(" "),a("li",[t._v("(closure) — 闭包(array) — 未知")]),t._v(" "),a("li",[t._v("Object — JS对象类型(system) — 未知")]),t._v(" "),a("li",[t._v("(string) — 字符串类型，有时对象里添加了新属性，属性的名称也会出现在这里")]),t._v(" "),a("li",[t._v("Array — JS数组类型cls — 游戏大厅特有的继承类")]),t._v(" "),a("li",[t._v("Window — JS的window对象")]),t._v(" "),a("li",[t._v("Quark.DisplayObjectContainer — Quark引擎的显示容器类")]),t._v(" "),a("li",[t._v("Quark.ImageContainer — Quark引擎的图片类")]),t._v(" "),a("li",[t._v("Quark.Text — Quark引擎的文本类")]),t._v(" "),a("li",[t._v("Quark.ToggleButton — Quark引擎的开关按钮类")])]),t._v(" "),a("p",[t._v("对于cls这个类名，是由于游戏大厅的继承机制里会使用“cls”这个引用名称，指向新建的继承类，所以凡是使用了该继承机制的类实例化出来的对象，都放在这里。例如程序中有一个类ClassA，继承了Quark.Text，则new出来的对象是放在cls里，不是放在Quark.Text里。")]),t._v(" "),a("p",[a("strong",[t._v("查看对象内容")])]),t._v(" "),a("p",[t._v("点击类名左边的三角形，可以看到所有该类的对象。对象后面的“"),a("strong",[t._v("@70035")]),t._v("”表示的是"),a("strong",[t._v("该对象的ID")]),t._v("（有人会错认为是内存地址，GC执行后，内存地址是会变的，但对象ID不会）。把鼠标停留在某一个对象上，会显示出该对象的内部属性和当时的值。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles4.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles4.png",alt:""}})])]),t._v(" "),a("p",[t._v("这个视图有助于我们辨别这是哪个对象。但该视图跟踪不了是被谁引用了。")]),t._v(" "),a("p",[a("strong",[t._v("查看对象的引用关系")])]),t._v(" "),a("p",[t._v("点击其中一个对象，能看到对象的引用层级关系，如下图：\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles5.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles5.png",alt:""}})])]),t._v(" "),a("p",[a("code",[t._v("Object’s retaining tree")]),t._v("视图显示出了该对象被哪些对象引用了，以及这个引用的名称。图中的这个对象被5个对象引用了，分别是：")]),t._v(" "),a("ul",[a("li",[t._v("一个cls对象的 _txtContent 变量；")]),t._v(" "),a("li",[t._v("一个闭包函数的context变量；")]),t._v(" "),a("li",[t._v("同一个闭包函数的self变量；")]),t._v(" "),a("li",[t._v("一个数组对象的0位置；")]),t._v(" "),a("li",[t._v("一个Quark.Tween对象的target变量。")])]),t._v(" "),a("p",[t._v("看到context和self这两个引用，可以知道这个Quark.Text对象使用了JS常用的上下文绑定机制，被一个闭包里的变量引用着，相当于该Quark.Text对象多了两个引用，这种情况比较容易出现内存泄漏，如果闭包函数不释放，这个Quark.Text对象也释放不了。")]),t._v(" "),a("p",[t._v("展开"),a("code",[t._v("_textContent")]),t._v("，可以看到下一级的引用：")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles6.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles6.png",alt:""}})]),t._v("\n把这个树状图反过来看，可以看到，该对象(ID @70035)其中的一条引用链是这样的：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GameListV       _curV       _gameListV    省略...\n                  \\         |        /\n                    \\       |       /\n                  _noticeWidget\n                           |\n                     _noticeC\n                           |\n                     _noticeV\n                           |\n                  _txtContent\n                           ||\n             Quark.Text @70035\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("内存快照的对比通过快照对比的功能，可以知道程序在运行期间哪些对象变更了。")]),t._v(" "),a("p",[t._v("刚才已经拍下了一个快照，接下来再拍一次，如下图：")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles7.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles7.png",alt:""}})])]),t._v(" "),a("p",[t._v("点击图中的黑色实心圆圈按钮，即可得到第二个内存快照：")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles8.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles8.png",alt:""}})])]),t._v(" "),a("p",[t._v("然后点击图中的“Snapshot 2”，视图才会切换到第二次拍的快照。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles9.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles9.png",alt:""}})])]),t._v(" "),a("p",[t._v("点击图中的“Summary”，可弹出一个列表，选择“Comparison”选项，结果如下图：\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles10.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles10.png",alt:""}})])]),t._v(" "),a("p",[t._v("这个视图列出了当前视图与上一个视图的对象差异。列名字段解释：# New — 新建了多少个对象# Deleted — 回收了多少个对象# Delta — 对象变化值，即新建的对象个数减去回收了的对象个数Size Delta — 变化的内存大小(字节)注意Delta字段，尤其是值大于0的对象。下面以Quark.Tween为例子，展开该对象，可看到如下图所示：")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles11.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/chome_profiles11.png",alt:""}})])]),t._v(" "),a("p",[t._v("在“# New”列里，如果有“.”，则表示是新建的对象。")]),t._v(" "),a("p",[t._v("在“# Deleted”列里，如果有“.”，则表示是回收了的对象。")]),t._v(" "),a("p",[t._v("平时排查问题的时候，应该多拍几次快照进行对比，这样有利于找出其中的规律。")]),t._v(" "),a("h2",{attrs:{id:"audits和chrome性能插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audits和chrome性能插件","aria-hidden":"true"}},[t._v("#")]),t._v(" Audits和Chrome性能插件")]),t._v(" "),a("p",[t._v("Audits 其实就是分析当前网页的性能的，比如说雅虎军规，这个东西能够大致给我们分析出来一些我们做的不好的地方而且能给我们一些解决意见")]),t._v(" "),a("p",[t._v("Audits 面板")]),t._v(" "),a("p",[t._v("performanceTracer -- Chrome 插件")]),t._v(" "),a("p",[t._v("Page Speed -- Chrome 插件")]),t._v(" "),a("p",[t._v("performance.timming(代码形式的一个 API ，是谷歌提供给我们的在浏览器里面我们可以通过网页去检测的)")]),t._v(" "),a("p",[t._v("上面这个插件光学是没什么用的，得需要先了解浏览器的整个的执行机制，下图就是 整个的一个网页从我们用户输入到输出的时候这之间经过的很多的过程，上面的 performance.timing 很好的捕捉到了这样的一个节点，这个节点里面我们主要观察的是 DNS 这一阶段，就是查找 DNS 之间，然后是 握手的时间，请求的时间，输出的时间，还有就是 onload 的时间，那么中间隔着的 DNS TCP Request Response 这几个时间是需要我们非常非常关注的，如果我们是专注于性能开发的，这几个点做的非常漂亮，那么这样整个一个网页的性能是非常高的，所以做网页性能的时候这几个点一定要卡住")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/timing.webp"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/timing.webp",alt:""}})])]),t._v(" "),a("blockquote",[a("p",[t._v("以百度首页为例做测试")])]),t._v(" "),a("ul",[a("li",[t._v("打开百度")])]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/audits.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/audits.png",alt:""}})]),t._v("\n3.之后在右侧的开发者工具中找到 Audits 面板，之后就可以让他来帮我们分析一下，接下来点击下面的 【RUN】 按钮\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/audits1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/audits1.png",alt:""}})])]),t._v(" "),a("p",[t._v("生成一份很友好的优化建议")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/audits2.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/audits2.png",alt:""}})])]),t._v(" "),a("p",[t._v("当然作为一个专业的性能开发人员来讲的话 这一份报告是远远不够我们进行网页加载时的性能监测用的，所以一般会装一个chrome浏览器的一个插件叫做 Page Speed，它可以是浏览器加载的更快（Make the web faster）")]),t._v(" "),a("p",[t._v("安装过这个插件后，点开插件，然后open一下或者打开开发者工具，这个时候可以在一级菜单中找到 【PageSpeed】 面板，点击面板下面显示的 【START ANALYZING】（开始分析） 按钮，它就会自动的去分析你当前的网页，下图是分析之后自动的将结果给呈现了出来，\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed1.png",alt:""}})])]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed.png",alt:""}})]),t._v(" "),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed3.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed3.png",alt:""}})]),t._v(" "),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed4.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/pages_speed4.png",alt:""}})])]),t._v(" "),a("p",[t._v("是不是很友好！！")]),t._v(" "),a("p",[t._v("如果是上面的插件还不够用的话，这个时候就需要借助一个东西 performance.timing 这个是浏览器自带的 API 可以在控制台中直接输出，可以看到所有的值都在下面列出来了\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/performance_timing.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/performance_timing.png",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"console标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console标签页","aria-hidden":"true"}},[t._v("#")]),t._v(" Console标签页")]),t._v(" "),a("p",[t._v("就是Javascript控制台了：\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/console1.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/console1.png",alt:""}})]),t._v("\n在这个面板可以查看错误信息、打印调试信息（console.log()）、写一些测试脚本，还可以当作Javascript API查看用。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/console2.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/console2.png",alt:""}})])]),t._v(" "),a("p",[a("strong",[t._v("移动端开发调试:")])]),t._v(" "),a("p",[t._v("现在新版chrome弹出控制台后如下图，其中的工具对移动端调试非常方便。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/console3.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/console3.png",alt:""}})])]),t._v(" "),a("p",[t._v("在控制台中可以直接模拟手机、调整UA、修改网络连接状态\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/console4.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/console4.png",alt:""}})])])])},[],!1,null,null,null);e.default=s.exports}}]);