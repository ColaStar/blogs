(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{570:function(v,_,t){"use strict";t.r(_);var s=t(56),p=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"tcp-udp区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp区别"}},[v._v("#")]),v._v(" TCP,UDP区别")]),v._v(" "),t("p",[v._v("TCP是可靠性的传输协议，UDP是不可靠的")]),v._v(" "),t("ul",[t("li",[v._v("1.TCP面向连接的，全双工的可靠的通信服务，UDP面向无连接的。")]),v._v(" "),t("li",[v._v("2.TCP能够保证有序，UDO不能保证。")]),v._v(" "),t("li",[v._v("3.TCP不会出现丢包的情况（因为arp规则，超时重传，快速重传等各种规则，当序列号不相同的时候，进行快速重传），UDP会出现。")]),v._v(" "),t("li",[v._v("4.TCP是字节传输，UDP是通过数据报传输。")]),v._v(" "),t("li",[v._v("5.UDP结构简单，无syn、ack等信息，只有源端口与目标端口，和报文")]),v._v(" "),t("li",[v._v("6.对系统资源要求方面UDP要求少，TCP要求多")])]),v._v(" "),t("h2",{attrs:{id:"osi七层模型以及tcp-ip四层模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osi七层模型以及tcp-ip四层模型"}},[v._v("#")]),v._v(" OSI七层模型以及tcp/ip四层模型")]),v._v(" "),t("p",[v._v("1.应用层，会话层，表示层，传输层，网络层，物理链路层，物理层\n2.应用层，传输层，网络层，物理层")]),v._v(" "),t("h2",{attrs:{id:"web前端应该从哪些方面来优化网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web前端应该从哪些方面来优化网站"}},[v._v("#")]),v._v(" Web前端应该从哪些方面来优化网站?")]),v._v(" "),t("p",[v._v("可以从输入一个url到页面展示来优化网站，按照w3c的网站规范来说\n1.当输入一个url后，首先是提示页面卸载，（这个时候还没有做请求）\n2.查看本地是否有缓存，然后正式卸载unload，如果有就直接取，没有进行请求，\n3.http请求html\n1.突破网关，\n2.dns域名解析（也可以搭建dns服务器）优化可以用cdn技术，\n3.3次握手四次挥手\n4.拿到资源\n优化：小字为先，就比如雅虎军规里边的开启gzip，图片压缩，精灵图，压缩js，css，js放到最下边（防止dom阻塞），css放到最上边，预加载组件，减少dns查找，最小化http请求，延迟加载组件等等，网络缓存，离线缓存，本地缓存。\n4.然后开始请求html上的css与js，形成一颗dom树，css树，（优化可以使用异步加载比如defer，async去异步加载js资源，）可以使用preload（提高优先级），profetch（空闲时间加载）\n5.dom树与css树合并生成一颗reander树，\n6.layout计算每一个节点位置，\n7.交给显卡渲染")]),v._v(" "),t("h2",{attrs:{id:"进程、进程、协程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程、进程、协程"}},[v._v("#")]),v._v(" 进程、进程、协程")]),v._v(" "),t("p",[v._v("1、进程")]),v._v(" "),t("p",[v._v("进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动,进程是系统进行资源分配和调度的一个独立单位。每个进程都有自己的独立内存空间，不同进程通过进程间通信来通信。由于进程比较重量，占据独立的内存，所以上下文进程间的切换开销（栈、寄存器、虚拟内存、文件句柄等）比较大，但相对比较稳定安全。")]),v._v(" "),t("p",[v._v("2.线程")]),v._v(" "),t("p",[v._v("线程是进程的一个实体,是CPU调度和分派的基本单位,它是比进程更小的能独立运行的基本单位.线程自己基本上不拥有系统资源,只拥有一点在运行中必不可少的资源(如程序计数器,一组寄存器和栈),但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源。线程间通信主要通过共享内存，上下文切换很快，资源开销较少，但相比进程不够稳定容易丢失数据。")]),v._v(" "),t("p",[v._v("3、协程")]),v._v(" "),t("p",[v._v("协程是一种用户态的轻量级线程，协程的调度完全由用户控制。协程拥有自己的寄存器上下文和栈。协程调度切换时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈，直接操作栈则基本没有内核切换的开销，可以不加锁的访问全局变量，所以上下文的切换非常快。")]),v._v(" "),t("p",[v._v("作业盒子面试：\ncss命名规范：BEM，oocss；盒模型介绍；垂直居中的n种方法，flex；mate标签，预加载profeth，proload")]),v._v(" "),t("p",[v._v("二、区别：")]),v._v(" "),t("p",[v._v("1、进程多与线程比较")]),v._v(" "),t("p",[v._v("线程是指进程内的一个执行单元,也是进程内的可调度实体。线程与进程的区别:")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("地址空间:线程是进程内的一个执行单元，进程内至少有一个线程，它们共享进程的地址空间，而进程有自己独立的地址空间")])]),v._v(" "),t("li",[t("p",[v._v("资源拥有:进程是资源分配和拥有的单位,同一个进程内的线程共享进程的资源")])]),v._v(" "),t("li",[t("p",[v._v("线程是处理器调度的基本单位,但进程不是")])]),v._v(" "),t("li",[t("p",[v._v("二者均可并发执行")])]),v._v(" "),t("li",[t("p",[v._v("每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口，但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制")])])]),v._v(" "),t("p",[v._v("2、协程多与线程进行比较")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("一个线程可以多个协程，一个进程也可以单独拥有多个协程，这样python中则能使用多核CPU。")])]),v._v(" "),t("li",[t("p",[v._v("线程进程都是同步机制，而协程则是异步")])]),v._v(" "),t("li",[t("p",[v._v("协程能保留上一次调用时的状态，每次过程重入时，就相当于进入上一次调用的状态")])])]),v._v(" "),t("p",[v._v("wode maya")])])}),[],!1,null,null,null);_.default=p.exports}}]);