(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{167:function(t,s,i){"use strict";i.r(s);var e=i(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"linux-开发环境初准备"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux-开发环境初准备","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux 开发环境初准备")]),t._v(" "),i("h2",{attrs:{id:"认识linux"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#认识linux","aria-hidden":"true"}},[t._v("#")]),t._v(" 认识Linux")]),t._v(" "),i("hr"),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("1.什么是Linux?")])])]),t._v(" "),i("ul",[i("li",[t._v("官网：lernel.org")]),t._v(" "),i("li",[t._v("平时大家认为的Linux是一个操作系统，其实他的本质是操作系统的内核（其中包括各种各样的算法等，很底层），而centos，Ubuntu等是指Linux的发行版。")])]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("2.Linux与windows的区别？")])])]),t._v(" "),i("p",[t._v("表面上的区别：")]),t._v(" "),i("ul",[i("li",[t._v("windows上没有一些包，只有在linux下才能用")]),t._v(" "),i("li",[t._v("自动化发布基本在linux上；")]),t._v(" "),i("li",[t._v("服务器一般都是配置在linux上99.9%（形容词）剩下的可能就会在windows和uinux，一般是没有图形界面（装了图形界面对系统消耗，有时候连显示器都没有，一般都在黑窗口中，提升性能时软件与硬件都可提升，硬件一般都已经到了极限（涉及到量子力学），就是提升软件了）")])]),t._v(" "),i("p",[t._v("内核区别")]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("3.常用的发行版")])])]),t._v(" "),i("p",[t._v("一共有六大发行版->其他的版本就是包了个壳。")]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"linux环境"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux环境","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux环境")]),t._v(" "),i("blockquote",[i("p",[t._v("安装Linux环境")])]),t._v(" "),i("p",[t._v("准备工作")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Windows下载安装 vmware workstation pro")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("网址：https://www.vmware.com/cn.html")])]),t._v(" "),i("li",[i("p",[t._v("首先要 vmware.com 注册⼀一个⽤用户（或者直接找个注册码）")])]),t._v(" "),i("li",[i("p",[t._v("到下载⻚页⾯面下载 VMware Workstation Pro 15.0.2 for Windows")])]),t._v(" "),i("li",[i("p",[t._v("下载⻚页⾯面链接https://my.vmware.com/cn/web/vmware/info/slug/desktop_end_user_com\nputing/vmware_workstation_pro/15_0")])]),t._v(" "),i("li",[i("p",[t._v("把 vmware workstation pro 安装到你的windows电脑上")])]),t._v(" "),i("li",[i("p",[t._v("注意：不要升级（会多出来一些东西，注册码也失效）")])])])]),t._v(" "),i("li",[i("p",[t._v("Mac下载安装虚拟机软件")]),t._v(" "),i("ul",[i("li",[t._v("vmware Fusion")]),t._v(" "),i("li",[t._v("virtualBox（不推荐，不好用）")]),t._v(" "),i("li",[t._v("parallelels Desktop(推荐)")])])]),t._v(" "),i("li",[i("p",[t._v("下载 CentOS 安装盘镜像")]),t._v(" "),i("ul",[i("li",[t._v("CentOS官⽹网： https://www.centos.org/")]),t._v(" "),i("li",[t._v("光盘镜像下载⻚页⾯面：https://www.centos.org/download/")]),t._v(" "),i("li",[t._v("点击“DVD ISO”按钮，这个是带有图形界⾯面的版本。Minimal ISO 不不带图形界⾯面，最好也下\n载，我们以后的课程中会⽤用到。")]),t._v(" "),i("li",[t._v("点击按钮后会进⼊入⼀一个镜像⽹网站的列列表，选择阿⾥里里云、华为云、163等⽐比较快的服务器器")])]),t._v(" "),i("p",[i("a",{attrs:{"data-fancybox":"",title:"centos源地址",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/linux_adderss.png"}},[i("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/linux_adderss.png",alt:"centos源地址"}})])])]),t._v(" "),i("li",[i("p",[t._v("开启计算机硬件的虚拟化⽀支持选项")]),t._v(" "),i("ul",[i("li",[t._v("先打开任务管理理器器，切换到“” 标签⻚页，检查“虚拟化”是否为已启⽤用状态")])])]),t._v(" "),i("li",[i("p",[t._v("如果状态为“未启⽤用”，按照如下步骤操作")]),t._v(" "),i("p",[t._v("1、重启电脑，在主板显示画⾯面，快速寻找进⼊入BIOS的按键。根据品牌不不同，可能是F2、Del\n或其他键。 2、进⼊入BIOS后，寻找进⼊入“System Configuration”。 3、找到“Virtualization\nTechnology”，按回⻋车键。 4、选择“Enabled”，按Enter回⻋车键。 5、然后保存重启即可。")])])]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"安装过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装过程")]),t._v(" "),i("blockquote",[i("p",[t._v("步骤：")])]),t._v(" "),i("ul",[i("li",[t._v("1.硬件兼容性（用最新的）;")]),t._v(" "),i("li",[t._v("2.安装的LinuxISO文件从Linux版本文件来的;")]),t._v(" "),i("li",[t._v("3.设置虚拟机的名称（就是你显示的名称）、以及虚拟机存放的位置（不要放到C盘，如果放到了C盘空余出10G的空间，因为会产生好多文件）;")]),t._v(" "),i("li",[t._v("4.配置处理器的数量一般给1-2个就好，主要看自己电脑的配置，给4个顶天了。并不是越多越好")]),t._v(" "),i("li",[t._v("5.虚拟机的内存->DVD版推荐2G   min版推荐1G")]),t._v(" "),i("li",[t._v("6.网络适配器：用桥接模式（用物理机的地址）（不要用NAT模式）-----如何查看（查看---网络管理）")]),t._v(" "),i("li",[t._v("7.最大的磁盘大小：默认20G就行了，是否拆分磁盘看实际需要")]),t._v(" "),i("li",[t._v("8.设置虚拟机产生的文件目录（需要创建一个单独的目录）")]),t._v(" "),i("li",[t._v("9.提示是否要安装（第一行是直接安装，第二行是测试后安装）")]),t._v(" "),i("li",[t._v("10.三个需要更改的地方\n"),i("ul",[i("li",[t._v("关掉kdump（除非你在你的Linux上做c语言的开发）")]),t._v(" "),i("li",[t._v("设置Root账户（根用户可以删库跑路）密码设置的复杂一些，如果设置简单的密码，双击完成退出界面")]),t._v(" "),i("li",[t._v("创建普通用户 （使用用户名登录，不是全名）")])])]),t._v(" "),i("li",[t._v("11.网络与主机名：打开试一下是否能够获取IP地址")]),t._v(" "),i("li",[t._v("12.安全策略不要动")]),t._v(" "),i("li",[t._v("13.安装位置点完成，选择默认安装")]),t._v(" "),i("li",[t._v(".删除虚拟机，在管理中有从磁盘中移除（前提先关闭虚拟机）")])]),t._v(" "),i("h2",{attrs:{id:"配置过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置过程")]),t._v(" "),i("ul",[i("li",[t._v("登录（连接远程服务器）\n"),i("ul",[i("li",[t._v("在无图形界面的情况下，查看IP地址---if config（很老了已经被去掉）---用IP addr")]),t._v(" "),i("li",[t._v("登录：ssh 用户名@IP地址 提示输入密码")]),t._v(" "),i("li",[t._v("scp文件传输命令---上传文件：scp 源文件路径 去处文件路径（root/@127.0.0.1:/）")])])]),t._v(" "),i("li",[t._v("退出  exit")]),t._v(" "),i("li",[t._v("密码忘了进入sigon模式更改")])]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("##认识Linux环境\nLinux目录下的文件都是用来做什么的")]),t._v(" "),i("p",[t._v("Linux下没有盘符是文件树结构，windows只有有限的文件数结构；")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("目录")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("应放置的文档内容")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("div",{staticStyle:{color:"red"}},[t._v("/bin")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("系统有很多放置执⾏文档的目录，但/bin⽐比较特殊。因为/bin放置的是在单⼈人维护模式下还能够被操作的指令。在/bin底下的指令可以被root与⼀一般帐号所使⽤用，主要有：cat,chmod(修改权限), chown, date, mv, mkdir, cp, bash等等常⽤用的指令。（一般放系统命令，就是一些不能内置到shell中的命令如cd，原因之一有文件太大）")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("div",{staticStyle:{color:"red"}},[t._v("/boot")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("主要放置开机会使⽤用到的档案，包括Linux核⼼心档案以及开机选单与开机所需设定档等等。Linux kernel常⽤用的档名为：vmlinuz ，如果使⽤用的是grub这个开机管理理程式，则还会存在/boot/grub/这个目录。"),i("div",{staticStyle:{color:"red"}},[t._v("放的是核心文件，不要动")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/dev")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("在Linux系统上，任何装置与周边设备都是以档案的型态存在于这个目录当中。只要通过存取这个目录下的某个档案，就等于存取某个装置。比要重要的档案有/dev/zero, /dev/tty , /dev/lp, / dev/hd, /dev/sd*等等")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/etc")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("系统主要的设定档⼏几乎都放置在这个⽬目录内，例例如⼈人员的帐号密码档、各种服务的启始档等等。 ⼀一般来说，这个⽬目录下的各档案属性是可以让⼀一般使⽤用者查阅的，但是只有root有权⼒力力修改。 FHS建议不不要放置可执⾏行行档(binary)在这个⽬目录中。 ⽐比较重要的档案有：/etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab,/etc/sysconfig/等等。 另外，其下重要的⽬目录有：/etc/init.d/ ：所有服务的预设启动script都是放在这⾥里里的，例例如要启动或者关闭iptables的话： /etc/init.d/iptablesstart、/etc/init.d/ iptables stop/etc/xinetd.d/ ：这就是所谓的super daemon管理理的各项服务的设定档⽬目录。/etc/X11/ ：与X Window有关的各种设定档都在这⾥里里，尤其是xorg.conf或XF86Config这两个X Server的设定档。"),i("div",{staticStyle:{color:"red"}},[t._v("用来放配置文件、脚本用的")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/home")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("这是系统预设的使⽤用者家⽬目录(home directory)。 在你新增⼀一个⼀一般使⽤用者帐号时，预设的使⽤用者家⽬目录都会规范到这⾥里里来。⽐比较重要的是，家⽬目录有两种代号： ~ ：代表当前使⽤用者的家⽬目录，⽽而 ~guest：则代表⽤用户名为guest的家⽬目录。"),i("div",{staticStyle:{color:"red"}},[t._v("普通用户")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/root")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("系统管理理员(root)的家⽬目录。 之所以放在这⾥里里，是因为如果进⼊入单⼈人维护模式⽽而仅挂载根⽬目录时，该⽬目录就能够拥有root的家⽬目录，所以我们会希望root的家⽬目录与根⽬目录放置在同⼀一个分区中。")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/lib")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("系统的函式库⾮非常的多，⽽而/lib放置的则是在开机时会⽤用到的函式库，以及在/bin或/sbin底下的指令会呼叫的函式库⽽而已 。 什什么是函式库呢？妳可以将他想成是外挂，某些指令必须要有这些外挂才能够顺利利完成程式的执⾏行行之意。 尤其重要的是/lib/modules/这个⽬目录，因为该⽬目录会放置核⼼心相关的模组(驱动程式)。")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/media")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("media是媒体的英⽂文，顾名思义，这个/media底下放置的就是可移除的装置。 包括软碟、光碟、DVD等等装置都暂时挂载于此。 常⻅见的档名有：/media/floppy,/media/cdrom等等")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/mnt")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("如果妳想要暂时挂载某些额外的装置，⼀般建议妳可以放置到这个目录中。在古早时候，这个目录的用途与/media相同啦。 只是有了了/media之后，这个目录就⽤用来暂时挂载⽤用了了。")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/opt")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("这个是给第三方协⼒软体放置的⽬目录 。 什么是第三⽅协⼒软体啊？举例来说，KDE这个桌⾯面管理理系统是⼀一个独⽴立的计画，不不过他可以安装到Linux系统中，因此KDE的软体就建议放置到此目录下了了。 另外，如果妳想要自行安装额外的软体(⾮原本的distribution提供的)，那么也能够将你的软体安装到这⾥里里来。 不不过，以前的Linux系统中，我们还是习惯放置在/usr/local目录下")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/sbin")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("Linux有⾮非常多指令是用来设定系统环境的，这些指令只有root才能够利用来设定系统，其他使⽤用者最多只能⽤用来查询⽽而已。放在/sbin底下的为开机过程中所需要的，里面包括了了开机、修复、还原系统所需要的指令。至于某些伺服器软体程式，⼀一般则放置到/usr/sbin/当中。⾄至于本机⾃行安装的软体所产生的系统执行档(system binary)，则放置到/usr/local/sbin/当中了了。常⻅见的指令包括：fdisk, fsck, ifconfig, init, mkfs等等。")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/srv")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("srv可以视为service的缩写，是⼀些网路服务启动之后，这些服务所需要取用的资料目录。 常⻅见的服务例如WWW, FTP等等。 举例来说，WWW伺服器需要的网页资料就可以放置在/srv/www/⾥面。呵呵，看来平时我们编写的代码应该放到这⾥了了。")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("/tmp")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("这是让⼀一般使用者或者是正在执⾏的程序暂时放置档案的地方。这个目录是任何人都能够存取的，所以你需要定期的清理⼀下。当然，重要资料不可放置在此目录啊。 因为FHS甚⾄至建议在开机时，应该要将/tmp下的资料料都删除。")])])])]),t._v(" "),i("h2",{attrs:{id:"前端开发必须要懂得知识"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前端开发必须要懂得知识","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端开发必须要懂得知识")]),t._v(" "),i("blockquote",[i("p",[t._v("网络端口")])]),t._v(" "),i("ul",[i("li",[t._v("概念：一个端口在同一时间只能被一个进程使用")]),t._v(" "),i("li",[t._v("一些服务器默认的端口\n"),i("ul",[i("li",[t._v("apache - 80")]),t._v(" "),i("li",[t._v("http端口 - 80")]),t._v(" "),i("li",[t._v("http代理端口 - 8080")]),t._v(" "),i("li",[t._v("https - 443")]),t._v(" "),i("li",[t._v("nginx - 80")])])]),t._v(" "),i("li",[t._v("端口冲突是怎么回事？\n一个端口在同一时间被多个进程使用，发生报错；"),i("br"),t._v(" "),i("strong",[t._v("解决方案")]),t._v("：停掉端口或，修改端口")])]),t._v(" "),i("blockquote",[i("p",[t._v("什么是服务")])]),t._v(" "),i("p",[t._v("服务一直在跑不占用界面")]),t._v(" "),i("ul",[i("li",[t._v("常见得服务器\n"),i("ul",[i("li",[t._v("apache、tomcat、nginx服务器")])])]),t._v(" "),i("li",[t._v("关于管理服务的一些命令")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("//查看服务状态\n\nsystemctl status nginx(服务器名)\n如果服务正在跑着状态是active否则是inactine(dead)\n\n\n//停止服务\n\nsystemctl stop nginx(服务器名)\n//开启服务\n\nsystemctl start nginx(服务器名)\n//重启服务\n\nsystemctl restart nginx(服务器名)\n\nnginx停止  首先查询nginx主进程号  ps -ef|grep nginx \n\n正常停止   sudo kill -QUIT 主进程号\n\n快速停止   sudo kill -TERM 主进程号\n\nsudo ./nginx 启动\nsudo ./nginx 启动\n重启 sudo ./nginx -s reload \n\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br"),i("span",{staticClass:"line-number"},[t._v("6")]),i("br"),i("span",{staticClass:"line-number"},[t._v("7")]),i("br"),i("span",{staticClass:"line-number"},[t._v("8")]),i("br"),i("span",{staticClass:"line-number"},[t._v("9")]),i("br"),i("span",{staticClass:"line-number"},[t._v("10")]),i("br"),i("span",{staticClass:"line-number"},[t._v("11")]),i("br"),i("span",{staticClass:"line-number"},[t._v("12")]),i("br"),i("span",{staticClass:"line-number"},[t._v("13")]),i("br"),i("span",{staticClass:"line-number"},[t._v("14")]),i("br"),i("span",{staticClass:"line-number"},[t._v("15")]),i("br"),i("span",{staticClass:"line-number"},[t._v("16")]),i("br"),i("span",{staticClass:"line-number"},[t._v("17")]),i("br"),i("span",{staticClass:"line-number"},[t._v("18")]),i("br"),i("span",{staticClass:"line-number"},[t._v("19")]),i("br"),i("span",{staticClass:"line-number"},[t._v("20")]),i("br"),i("span",{staticClass:"line-number"},[t._v("21")]),i("br"),i("span",{staticClass:"line-number"},[t._v("22")]),i("br"),i("span",{staticClass:"line-number"},[t._v("23")]),i("br"),i("span",{staticClass:"line-number"},[t._v("24")]),i("br"),i("span",{staticClass:"line-number"},[t._v("25")]),i("br"),i("span",{staticClass:"line-number"},[t._v("26")]),i("br")])]),i("ul",[i("li",[t._v("守护进程pm2、setsid(调用的是Linux的守护进程)")])]),t._v(" "),i("h2",{attrs:{id:"可以实现多任务进行操作进程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#可以实现多任务进行操作进程","aria-hidden":"true"}},[t._v("#")]),t._v(" 可以实现多任务\n进行操作进程")]),t._v(" "),i("h2",{attrs:{id:"安装linux的开发环境"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装linux的开发环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装Linux的开发环境")]),t._v(" "),i("blockquote",[i("p",[t._v("1.安装Node.js")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("yum安装⽅方法 https://rpm.nodesource.com/\n\n# 添加官⽅方的yum源\ncurl -sL https://rpm.nodesource.com/setup_11.x | bash -\n# yum命令安装\nyum install -y nodejs\n# 查看安装的版本\nnode -v\n\n源码编译安装⽅方法（后⾯面的课程会讲）\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br"),i("span",{staticClass:"line-number"},[t._v("6")]),i("br"),i("span",{staticClass:"line-number"},[t._v("7")]),i("br"),i("span",{staticClass:"line-number"},[t._v("8")]),i("br"),i("span",{staticClass:"line-number"},[t._v("9")]),i("br"),i("span",{staticClass:"line-number"},[t._v("10")]),i("br")])]),i("blockquote",[i("p",[t._v("2.安装Sublime Text3")])]),t._v(" "),i("ul",[i("li",[t._v("下载 https://www.sublimetext.com/3\n"),i("a",{attrs:{"data-fancybox":"",title:"sub",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/sublinepng.png"}},[i("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/sublinepng.png",alt:"sub"}})])])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("# 解压缩\ntar -xvvf sublime_text_3_build_3176_x64.tar.bz\n# 移动到 /opt 路路径下\nmv sublime_text_3 /opt/\n# 复制快速启动⽂文件到系统菜单⽬目录\ncp /opt/sublime_text_3/sublime_text.desktop /usr/share/applications\n# 按照下图修改快速启动⽂文件中的配置\nvim /usr/share/applications/sublime_text.desktop\n# 通过菜单 applications->programming->Sublime Text 打开软件\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br"),i("span",{staticClass:"line-number"},[t._v("6")]),i("br"),i("span",{staticClass:"line-number"},[t._v("7")]),i("br"),i("span",{staticClass:"line-number"},[t._v("8")]),i("br"),i("span",{staticClass:"line-number"},[t._v("9")]),i("br")])]),i("p",[i("a",{attrs:{"data-fancybox":"",title:"sub",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/zippng.png"}},[i("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/zippng.png",alt:"sub"}})])]),t._v(" "),i("blockquote",[i("p",[t._v("3.安装 XAMPP 集成开发环境")])]),t._v(" "),i("ul",[i("li",[t._v("下载地址：https://www.apachefriends.org/")]),t._v(" "),i("li",[t._v("中⽂文站：http://www.xampps.com/ （版本有点⽼老老）")])]),t._v(" "),i("h2",{attrs:{id:"注意"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),i("blockquote",[i("p",[t._v("安装linux终端")])]),t._v(" "),i("p",[t._v("windows终端：")]),t._v(" "),i("ul",[i("li",[t._v("xshell")]),t._v(" "),i("li",[t._v("putty(太老不好用)")]),t._v(" "),i("li",[t._v("cmder（内置git，ssh命令）")]),t._v(" "),i("li",[t._v("xshell")]),t._v(" "),i("li",[t._v("深度系统")])]),t._v(" "),i("p",[t._v("Mac终端：")]),t._v(" "),i("ul",[i("li",[t._v("自带的终端")]),t._v(" "),i("li",[t._v("iterm2")]),t._v(" "),i("li",[t._v("oh-my-zsh")])]),t._v(" "),i("blockquote",[i("p",[t._v("Mac电脑介绍")])]),t._v(" "),i("ul",[i("li",[t._v("内核：uinux下得BSD内核")]),t._v(" "),i("li",[t._v("命令集与Linux还是有差异的")])]),t._v(" "),i("blockquote",[i("p",[t._v("linux版权")])]),t._v(" "),i("p",[t._v("属于贝尔实验室")]),t._v(" "),i("blockquote",[i("p",[t._v("找不到盘符切换到根cd /\n如何连接U盘")])]),t._v(" "),i("p",[t._v("先挂载到Linux上，用mount命令，一般用来做维护")])])},[],!1,null,null,null);s.default=n.exports}}]);