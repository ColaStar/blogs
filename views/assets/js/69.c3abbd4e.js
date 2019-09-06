(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{155:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"内存泄漏的排查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏的排查","aria-hidden":"true"}},[a._v("#")]),a._v(" 内存泄漏的排查")]),a._v(" "),s("p",[a._v("JS程序的内存溢出后，会使某一段函数体永远失效（取决于当时的JS代码运行到哪一个函数），通常表现为程序突然卡死或程序出现异常。")]),a._v(" "),s("p",[a._v("这时我们就要对该JS程序进行内存泄漏的排查，找出哪些对象所占用的内存没有释放。这些对象通常都是开发者以为释放掉了，但事实上仍被某个闭包引用着，或者放在某个数组里面。")]),a._v(" "),s("p",[a._v("观察者模式引起的内存泄漏\n有时我们需要在程序中加入观察者模式（Observer）来解藕一些模块，但如果使用不当，也会带来内存泄漏的问题。")]),a._v(" "),s("p",[a._v("排查这类型的内存泄漏问题，主要重点关注被引用的对象类型是闭包（closure）和数组Array的对象。")]),a._v(" "),s("p",[a._v("下面以德州扑克游戏为例：\n"),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak.png",alt:""}})])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak2.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak2.png",alt:""}})])]),a._v(" "),s("p",[a._v("测试人员发现德州扑克游戏存在内存溢出的问题，重现步骤：进入游戏–退出到分区–再进入游戏–再退出到分区，如此反复几次便出现游戏卡死的问题。")]),a._v(" "),s("p",[a._v("排查的步骤如下：")]),a._v(" "),s("p",[a._v("打开游戏；\n进入第一个分区（快速场5/10）；\n进入后，拍下内存快照；\n退出到刚才的分区界面；\n再次进入同一个分区；\n进入后，再次拍下内存快照；\n重复步骤2到6，直到拍下5组内存快照；\n将每组的视图都转换到Comparison对比视图；\n进行内存对比分析。\n经过上面的步骤后，可以得到下图结果：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak3.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak3.png",alt:""}})])]),a._v(" "),s("p",[a._v("先看最后一个快照，可以看到闭包（closure）+1，这是需要重点关注的部分。（string）、（system）和（compiled code）类型可以不管，因为提供的信息不多。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak4.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak4.png",alt:""}})])]),a._v(" "),s("p",[a._v("接着点击倒数第二个快照，看到闭包（closure）类型也是+1。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak5.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak5.png",alt:""}})])]),a._v(" "),s("p",[a._v("接着再看上一个快照，闭包还是+1。")]),a._v(" "),s("p",[a._v("这说明每次进入游戏都会创建这个闭包函数，并且退出到分区的时候没有销毁。")]),a._v(" "),s("p",[a._v("展开（closure），可以看到非常多的function对象：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak6.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak6.png",alt:""}})])]),a._v(" "),s("p",[a._v("建新的闭包数量是49个，回收的闭包数量是48个，即是说这次操作有48个闭包正确释放了，有一个忘记释放了。每个新建和回收的function对象的ID都不一样，找不到任何的关联性，无法定位是哪一个闭包函数出了问题。")]),a._v(" "),s("p",[a._v("接下来打开Object’s retaining tree视图，查找引用里是否存在不断增大的数组。")]),a._v(" "),s("p",[a._v("如下图，展开“Snapshot 5”每个function对象的引用：\n"),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak7.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak7.png",alt:""}})])]),a._v(" "),s("p",[a._v("其中有个function对象的引用deleFunc存放在一个数组里，下标是4，数组的对象ID是@45599。")]),a._v(" "),s("p",[a._v("继续查找“Snapshot 4”的function对象：\n"),s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak8.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak8.png",alt:""}})])]),a._v(" "),s("p",[a._v("发现这里有一个function的引用名称也是deleFunc，也存放在ID为@45599的数组里，下标是3。这个对象极有可能是没有释放掉的闭包。")]),a._v(" "),s("p",[a._v("继续查看“Snapshot 3”里的function对象：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak9.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak9.png",alt:""}})])]),a._v(" "),s("p",[a._v("从图中可以看到同一个function对象，下标是2。那么这里一定存在内存泄漏问题。")]),a._v(" "),s("p",[a._v("数组下面有一个引用名称“login_success”，在程序里搜索一下该关键字，终于定位到有问题的代码。因为进入游戏的时候注册了“login_success”通知：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ob.addListener("login_success", _onLoginSuc);\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("但退出到分区的时候，没有移除该通知，下次进入游戏的时候，\n又再注册了一次，所以造成function不断增加。改成退出到分区的时候移除该通知：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ob.removeListener("login_success", _onLoginSuc);\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这样就成功解决这个内存泄漏的问题了。")]),a._v(" "),s("p",[a._v("德州扑克这种问题多数见于观察者设计模式中，使用一个全局数组存储所有注册的通知，如果忘记移除通知，则该数组会不断增大，最终造成内存溢出。")]),a._v(" "),s("h2",{attrs:{id:"上下文绑定引起的内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下文绑定引起的内存泄漏","aria-hidden":"true"}},[a._v("#")]),a._v(" 上下文绑定引起的内存泄漏")]),a._v(" "),s("p",[a._v("很多时候我们会用到上下文绑定函数bind（也有些人写成delegate），无论是自己实现的bind方法还是JS原生的bind方法，都会有内存泄漏的隐患。")]),a._v(" "),s("p",[a._v("下面举一个简单的例子：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<script type="text/javascript">\n                var ClassA = function(name){\n                        this.name = name;\n                        this.func = null;\n                };\n\n                var a = new ClassA("a");\n                var b = new ClassA("b");\n\n                b.func = bind(function(){\n                        console.log("I am " + this.name);\n                }, a);\n\n                b.func();  //输出 I am a\n\n                a = null;        //释放a\n                //b = null;        //释放b\n\n                //模拟上下文绑定\n                function bind(func, self){\n                        return function(){\n                                return func.apply(self);\n                        };\n                }; \n<\/script>\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("p",[a._v("上面的代码中，bind通过闭包来保存上下文self，使得事件b.func里的this指向的是a，而不是b。")]),a._v(" "),s("p",[a._v("首先我们把b = null;注释掉，只释放a。看一下内存快照：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak11.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak11.png",alt:""}})])]),a._v(" "),s("p",[a._v("可以看到有两个ClassA对象，这与我们的本意不相符，我们释放了a，应该只存在一个ClassA对象b才对。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak12.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak12.png",alt:""}})])]),a._v(" "),s("p",[a._v("从上面两个图可以看出这两个对象中，一个是b，另一个并不是a，因为a这个引用已经置空了。第二个ClassA对象是bind里的闭包的上下文self，self与a引用同一个对象。虽然a释放了，但由于b没有释放，或者b.func没有释放，使得闭包里的self也一直存在。要释放self，可以执行b=null或者b.func=null。")]),a._v(" "),s("p",[a._v("把代码改成：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<script type="text/javascript">\n                var ClassA = function(name){\n                        this.name = name;\n                        this.func = null;\n                };\n\n                var a = new ClassA("a");\n                var b = new ClassA("b");\n\n                b.func = bind(function(){\n                        console.log("I am " + this.name);\n                }, a);\n\n                b.func();        //输出 I am a\n                a = null;        //释放a\n\n                b.func = null;        //释放self\n\n                //模拟上下文绑定\n                function bind(func, self){\n                        return function(){\n                                return func.apply(self);\n                        };\n                };\n<\/script>\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("p",[a._v("再看看内存：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak13.png"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/Memory_leak13.png",alt:""}})])]),a._v(" "),s("p",[a._v("可以看到只剩下一个ClassA对象b了，a已被释放掉了。")]),a._v(" "),s("p",[a._v("四、结语\nJS的灵活性既是优点也是缺点，平时写代码时要注意内存泄漏的问题。当代码量非常庞大的时候，就不能仅靠复查代码来排查问题，必须要有一些监控对比工具来协助排查。")]),a._v(" "),s("p",[a._v("之前排查内存泄漏问题的时候，总结出以下几种常见的情况：")]),a._v(" "),s("p",[a._v("闭包上下文绑定后没有释放；\n观察者模式在添加通知后，没有及时清理掉；\n定时器的处理函数没有及时释放，没有调用clearInterval方法；\n视图层有些控件重复添加，没有移除。")])])},[],!1,null,null,null);t.default=e.exports}}]);