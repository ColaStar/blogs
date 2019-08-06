(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{200:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"linux命令-修改文件权限命令chmod、chgrp、chown详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux命令-修改文件权限命令chmod、chgrp、chown详解","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux命令:修改文件权限命令chmod、chgrp、chown详解")]),s._v(" "),a("p",[s._v("Linux系统中的每个文件和目录都有访问许可权限，用它来确定谁可以通过何种方式对文件和目录进行访问和操作。")]),s._v(" "),a("h2",{attrs:{id:"文件或目录的访问权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件或目录的访问权","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件或目录的访问权")]),s._v(" "),a("p",[a("strong",[s._v("权限操作")]),s._v("：限分为"),a("strong",[s._v("只读")]),s._v("，"),a("strong",[s._v("只写")]),s._v("和"),a("strong",[s._v("可执行")]),s._v("三种。以"),a("strong",[s._v("文件")]),s._v("为例，"),a("strong",[s._v("只读权限")]),s._v("表示只允许读其内容，而禁止对其做任何的更改操作。"),a("strong",[s._v("可执行权限")]),s._v("表示允许将该文件作为一个程序执行。"),a("strong",[s._v("文件被创建时，文件所有者自动拥有对该文件的读、写和可执行权限")]),s._v("，以便于对文件的阅读和修改。"),a("strong",[s._v("用户也可根据需要把访问权限设置为需要的任何组合")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("用户")]),s._v("：有"),a("strong",[s._v("三种")]),s._v("不同类型的用户可对文件或目录进行访问："),a("strong",[s._v("文件所有者，同组用户、其他用户")]),s._v("。所有者一般是文件的创建者。所有者可以允许同组用户有权访问文件，还可以将文件的访问权限赋予系统中的其他用户。在这种情况下，系统中每一位用户都能访问该用户拥有的文件或目录。")]),s._v(" "),a("p",[a("strong",[s._v("访问权限")]),s._v("：每一文件或目录的访问权限都有"),a("strong",[s._v("三组")]),s._v("，每组用三位表示，分别为文件属主的"),a("strong",[s._v("读、写和执行权限")]),s._v("；与属主同组的用户的读、写和执行权限；系统中其他用户的读、写和执行权限。当用ls -l命令显示文件或目录的详细信息时，最左边的一列为文件的访问权限。例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ls -l sobsrc. tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-rw-r--r-- 1 root root 483997 Ju1 l5 17:3l sobsrc. tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/file权限.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/file%E6%9D%83%E9%99%90.png",alt:""}})])]),s._v(" "),a("p",[s._v("横线代表空许可。r代表只读，w代表写，x代表可执行。注意这里共有10个位置。第一个字符指定了文件类型。在通常意义上，一个目录也是一个文件。如果第一个字符是横线，表示是一个非目录的文件。如果是d，表示是一个目录。例如：")]),s._v(" "),a("p",[a("code",[s._v("– rw- r– r–")])]),s._v(" "),a("p",[a("code",[s._v("普通文件 文件主 组用户 其他用户")])]),s._v(" "),a("p",[s._v("是文件sobsrc.tgz 的访问权限，表示sobsrc.tgz是一个普通文件；sobsrc.tgz的属主有读写权限；与sobsrc.tgz属主同组的用户只有读权限；其他用户也只有读权限。")]),s._v(" "),a("p",[s._v("确定了一个文件的访问权限后，用户可以利用"),a("code",[s._v("Linux系统")]),s._v("提供的"),a("code",[s._v("chmod命令")]),s._v("来重新设定不同的"),a("code",[s._v("访问权限")]),s._v("。也可以利用"),a("code",[s._v("chown命令")]),s._v("来更改某个文件或目录的"),a("code",[s._v("所有者")]),s._v("。利用"),a("code",[s._v("chgrp")]),s._v("命令来更改某个文件或目录的"),a("code",[s._v("用户组")]),s._v("。")]),s._v(" "),a("p",[s._v("下面分别对这些命令加以介绍。")]),s._v(" "),a("blockquote",[a("p",[s._v("chmod 命令\nchmod命令是非常重要的，用于改变文件或目录的访问权限。用户用它控制文件或目录的访问权限。")])]),s._v(" "),a("p",[s._v("以主文件夹下的一个名为“cc”的文件夹为例。下面一步一步介绍如何修改权限：")]),s._v(" "),a("p",[s._v("1.打开终端。输入”su”(没有引号)")]),s._v(" "),a("p",[s._v("2.接下来会要你输入密码，输入你的root密码。")]),s._v(" "),a("p",[s._v("3.假设我的文件夹在主目录里，地址为  /var/home/dengchao/cc  。假设我要修改文件权限为777，则在终端输入  chmod  777 /var/home/userid/cc 文件夹的权限就变为了777。")]),s._v(" "),a("p",[s._v("如果是修改文件夹及子文件夹权限可以用  chmod -R 777 /var/home/userid/cc")]),s._v(" "),a("p",[s._v("具体的权限(例如777的含意等)在下面解释下：")]),s._v(" "),a("ul",[a("li",[s._v("1.777有3位，最高位7是设置文件所有者访问权限，第二位是设置群组访问权限，最低位是设置其他人访问权限。")])]),s._v(" "),a("p",[s._v("其中每一位的权限用数字来表示。具体有这些权限：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("- r(Read，读取，权限值为4)：对文件而言，具有读取文件内容的权限；对目录来说，具有浏览目 录的权限。\n- w(Write,写入，权限值为2)：对文件而言，具有新增、修改文件内容的权限；对目录来说，具有删除、移动目录内文件的权限。\n- x(eXecute，执行，权限值为1)：对文件而言，具有执行文件的权限；对目录了来说该用户具有进入目录的权限。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("2.首先我们来看如何确定单独一位上的权限数值，例如最高位表示文件所有者权限数值，当数字为7时，7用“rwx”表示 –{4(r)+2(w)+1(x)=7}–又如果数值为6，则用“rw-”表示–{4(r)+2(w)+0(x)=6}–，”-”表示不具备权限，这里表 示不具备“执行”权限。")])]),s._v(" "),a("p",[s._v("假如我们设定其他用户的访问权限为 “r–”，则数值为4+0+0=4")]),s._v(" "),a("p",[s._v("一开始许多初学者会被搞糊涂，其实很简单，我们将rwx看成二进制数，如果有则用1表示，没有则有0表示，那么rwx则可以表示成为：111")]),s._v(" "),a("p",[s._v("而二进制的111就是7。")]),s._v(" "),a("ul",[a("li",[s._v("3.我们再来看下怎么确定3个数位上的权限。假如我们要给一个文件设置权限，具体权限如下：")])]),s._v(" "),a("p",[s._v("文件所有者有“读”、“写”、“执行”权限，群组用户有“读”权限，其他用户有“读”权限，则对应的字母表示为”rwx r– r–“，对应的数字为744")]),s._v(" "),a("p",[s._v("一般都是最高位表示文件所有者权限值，第二位表示群组用户权限，最低位表示其他用户权限。")]),s._v(" "),a("p",[s._v("下面来举些例子熟悉下。")]),s._v(" "),a("p",[s._v("权限\t数值\nrwx rw- r–\t764\nrw- r– r–\t644\nrw- rw- r–\t664\n该命令有两种用法。一种是包含字母和操作符表达式的文字设定法；另一种是包含数字的数字设定法。")]),s._v(" "),a("ol",[a("li",[s._v("文字设定法")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chmod ［who］ ［+ | – | =］ ［mode］ 文件名¼\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命令中各选项的含义为：")]),s._v(" "),a("p",[s._v("操作对象who可是下述字母中的任一个或者它们的组合：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("u 表示“用户（user）”，即文件或目录的所有者。\ng 表示“同组（group）用户”，即与文件属主有相同组ID的所有用户。\no 表示“其他（others）用户”。\na 表示“所有（all）用户”。它是系统默认值。\n操作符号可以是：\n\n+ 添加某个权限。\n– 取消某个权限。\n= 赋予给定权限并取消其他所有权限（如果有的话）。\n设置mode所表示的权限可用下述字母的任意组合：\nr 可读。\nw 可写。\nx 可执行。\nX 只有目标文件对某些用户是可执行的或该目标文件是目录时才追加x 属性。\ns 在文件执行时把进程的属主或组ID置为该文件的文件属主。方式“u＋s”设置文件的用户ID位，“g＋s”设置组ID位。\nt 保存程序的文本到交换设备上。\nu 与文件属主拥有一样的权限。\ng 与和文件属主同组的用户拥有一样的权限。\no 与其他用户拥有一样的权限。\n-c : 若该档案权限确实已经更改，才显示其更改动作\n-f : 若该档案权限无法被更改也不要显示错误讯息\n-v : 显示权限变更的详细资料\n-R : 对目前目录下的所有档案与子目录进行相同的权限变更(即以递回的方式逐个变更)\n–help : 显示辅助说明\n–version : 显示版本\n文件名：以空格分开的要改变权限的文件列表，支持通配符。在一个命令行中可给出多个权限方式，其间用逗号隔开。例如：chmod g+r，o+r example使同组和其他用户对文件example 有读权限。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("例1：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chmod a+x sort\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("即设定文件sort的属性为：")]),s._v(" "),a("p",[s._v("文件属主（u） 增加执行权限")]),s._v(" "),a("p",[s._v("与文件属主同组用户（g） 增加执行权限")]),s._v(" "),a("p",[s._v("其他用户（o） 增加执行权限")]),s._v(" "),a("p",[s._v("例2：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chmod ug+w，o-x text\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("即设定文件text的属性为：")]),s._v(" "),a("p",[s._v("文件属主（u） 增加写权限")]),s._v(" "),a("p",[s._v("与文件属主同组用户（g） 增加写权限")]),s._v(" "),a("p",[s._v("其他用户（o） 删除执行权限")]),s._v(" "),a("p",[s._v("例3：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chmod u+s a.out\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("假设执行chmod后a.out的权限为（可以用ls – l a.out命令来看）：")]),s._v(" "),a("p",[s._v("–rws--x--x 1 inin users 7192 Nov 4 14:22 a.out\n并且这个执行文件要用到一个文本文件shiyan1.c，其文件存取权限为“–rw——-”，即该文件只有其属主具有读写权限。")]),s._v(" "),a("p",[s._v("当其他用户执行a.out这个程序时，他的身份因这个程序暂时变成inin（由于chmod命令中使用了s选项），所以他就能够读取shiyan1.c这个文件（虽然这个文件被设定为其他人不具备任何权限），这就是s的功能。")]),s._v(" "),a("p",[s._v("因此，在整个系统中特别是root本身，最好不要过多的设置这种类型的文件（除非必要）这样可以保障系统的安全，避免因为某些程序的bug而使系统遭到入侵。")]),s._v(" "),a("p",[s._v("例4：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chmod a–x mm.txt\n$ chmod –x mm.txt\n$ chmod ugo–x mm.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("以上这三个命令都是将文件mm.txt的执行权限删除，它设定的对象为所有使用者。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("数字设定法\n我们必须首先了解用数字表示的属性的含义：0表示没有权限，1表示可执行权限，2表示可写权限，4表示可读权限，然后将其相加。所以数字属性的格式应为3个从0到7的八进制数，其顺序是（u）（g）（o）。")])]),s._v(" "),a("p",[s._v("例如，如果想让某个文件的属主有“读/写”二种权限，需要把4（可读）+2（可写）＝6（读/写）。")]),s._v(" "),a("p",[s._v("数字设定法的一般形式为：chmod ［mode］ 文件名¼")]),s._v(" "),a("p",[s._v("例1：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chmod 644 mm.txt\n$ ls –l\n\n即设定文件mm.txt的属性为：\n\n-rw-r--r-- 1 inin users 1155 Nov 5 11:22 mm.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("文件属主（u）inin 拥有读、写权限")]),s._v(" "),a("p",[s._v("与文件属主同组人用户（g） 拥有读权限")]),s._v(" "),a("p",[s._v("其他人（o） 拥有读权限")]),s._v(" "),a("p",[s._v("例2：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chmod 750 wch.txt\n$ ls –l\n-rwxr-x--- 1 inin users 44137 Nov 12 9:22 wchtxt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("即设定wchtxt这个文件的属性为：")]),s._v(" "),a("p",[s._v("文件主本人（u）inin 可读/可写/可执行权")]),s._v(" "),a("p",[s._v("与文件主同组人（g） 可读/可执行权")]),s._v(" "),a("p",[s._v("其他人（o） 没有任何权限")]),s._v(" "),a("blockquote",[a("p",[s._v("chgrp命令\n功能：改变文件或目录所属的组。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("语法：chgrp ［选项］ group filename¼\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("该命令的各选项含义为：\n-c或–changes 效果类似”-v”参数，但仅回报更改的部分。\n-f或–quiet或–silent 　不显示错误信息。\n-h或–no-dereference 　只对符号连接的文件作修改，而不更动其他任何相关文件。\n-R或–recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。递归式地改变指定目录及其下的所有子目录和文件的属组。\n-v或–verbose 　显示指令执行过程。\n–help 　在线帮助。\n–reference=<参考文件或目录> 　把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同。\n–version 　显示版本信息。\n该命令改变指定指定文件所属的用户组。其中group可以是用户组ID，也可以是/etc/group文件中用户组的组名。文件名是以空格分开的要改变属组的文件列表，支持通配符。如果用户不是该文件的属主或超级用户，则不能改变该文件的组。")]),s._v(" "),a("p",[s._v("例1：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chgrp - R book /opt/local /book\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("改变/opt/local /book/及其子目录下的所有文件的属组为book。")]),s._v(" "),a("blockquote",[a("p",[s._v("chown 命令\n"),a("strong",[s._v("功能")]),s._v("：更改某个文件或目录的属主和属组。这个命令也很常用。例如root用户把自己的一个文件拷贝给用户yusi，为了让用户yusi能够存取这个文件，root用户应该把这个文件的属主设为yusi，否则，用户yusi无法存取这个文件。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("语法：chown ［选项］ 用户或组 文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("说明：chown将指定文件的拥有者改为指定的用户或组。用户可以是用户名或用户ID。组可以是组名或组ID。文件是以空格分开的要改变权限的文件列表，支持通配符。")]),s._v(" "),a("p",[s._v("参数说明：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user : 新的档案拥有者的使用者 ID\ngroup : 新的档案拥有者的使用者群体(group)\n-c : 若该档案拥有者确实已经更改，才显示其更改动作\n-f : 若该档案拥有者无法被更改也不要显示错误讯息\n-h : 只对于连结(link)进行变更，而非该 link 真正指向的档案\n-v : 显示拥有者变更的详细资料\n-R : 对目前目录下的所有档案与子目录进行相同的拥有者变更(即以递回的方式逐个变更)\n–help : 显示辅助说明\n–version : 显示版本\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("例1：把文件yusi123.com的所有者改为yusi。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chown yusi yusi123.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("例2：把目录/demo及其下的所有文件和子目录的属主改成yusi，属组改成users。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ chown - R yusi.users /demo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("例如："),a("code",[s._v("chown qq /home/qq")]),s._v(" (把home目录下的qq目录的拥有者改为qq用户)")]),s._v(" "),a("p",[s._v("例如："),a("code",[s._v("chown -R qq /home/qq")]),s._v(" (把home目录下的qq目录下的所有子文件的拥有者改为qq用户)")])])}],!1,null,null,null);n.default=t.exports}}]);