(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{213:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"centos7之sed和awk常用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos7之sed和awk常用","aria-hidden":"true"}},[s._v("#")]),s._v(" centos7之sed和awk常用")]),s._v(" "),n("p",[s._v("sed是一种流编辑器，它是文本处理中非常中的工具，能够完美的配合正则表达式使用，功能不同凡响。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有 改变，除非你使用重定向存储输出。Sed主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。")]),s._v(" "),n("blockquote",[n("p",[s._v("sed的选项、命令、替换标记\n命令格式")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sed [options] 'command' file(s)\nsed [options] -f scriptfile file(s)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("常用选项：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-n∶使用安静(silent)模式。在一般 sed 的用法中，所有来自 STDIN的资料一般都会被列出到萤幕上。但如果加上 -n 参数后，则只有经过sed 特殊处理的那一行(或者动作)才会被列出来。\n-e∶直接在指令列模式上进行 sed 的动作编辑；\n-f∶直接将 sed 的动作写在一个档案内， -f filename 则可以执行 filename 内的sed 动作；\n-r∶sed 的动作支援的是延伸型正规表示法的语法。(预设是基础正规表示法语法)\n-i∶直接修改读取的档案内容，而不是由萤幕输出。   \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("常用命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("a ∶新增， a 的后面可以接字符串，而这些字符串会在目前的下一行出现。\nc ∶取代， c 的后面可以接字符串，这些字符串可以取代 n1,n2 之间的行。\nd ∶删除，后面不接任何东西；\ni ∶插入， 与a只有一点不同，增加的字符串会在目前的上一行出现；\np ∶列印，亦即将某个选择的资料印出。在使用p的时候一般会加上-n参数。\ns ∶取代，可以直接进行取代的工作。\n　　\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("blockquote",[n("p",[s._v("基本用法")])]),s._v(" "),n("p",[s._v("d∶删除，后面不接任何东西；")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("删除某行\n  \n$ sed '1d' filename               删除第一行\n \n$ sed '$ d' filename              删除最后一行\n \n$ sed '1,2d' filename            删除第一行到第二行\n \n$ sed '2,$ d' filename           删除第二行到最后一行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("p∶列印，亦即将某个选择的资料印出。在使用p的时候一般会加上-n参数。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("显示某行\n \n$ sed -n '1p' filename           显示第一行\n \n$ sed -n '$ p' filename           显示最后一行\n \n$ sed -n '1,2p' filename        显示第一行到第二行\n \n$ sed -n '2,$ p' filename        显示第二行到最后一行\n \n使用模式进行查询\n \n$ sed -n '/world/p' filename    查询包括关键字world所在所有行\n \n$ sed -n '/\\$ /p' filename        查询包括关键字$ 所在所有行，使用反斜线\\屏蔽特殊含义\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("a∶新增， a 的后面可以接字符串，而这些字符串会在目前的下一行出现。\ni ∶插入， 与a只有一点不同，增加的字符串会在目前的上一行出现；")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# cat filename\nHello!\nworld!\nend\n[root@localhost ~]# sed '1a people' filename   第一行后增加字符串\"people\"\nHello!\npeople\nworld!\nend\n[root@localhost ~]# sed '1,3a people' filename   第一行到第三行后增加字符串\"people\"\nHello!\npeople\nworld!\npeople\nend\npeople\n[root@localhost ~]# sed '1i people\\nperson' filename   第一行前增加多行，使用换行符\\n\npeople\nperson\nHello!\nworld!\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("c∶取代， c 的后面可以接字符串，这些字符串可以取代 n1,n2 之间的行。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# cat filename\nHello!\nworld!\nend\n[root@localhost ~]# sed '1c Hi' filename\nHi\nworld!\nend\n[root@localhost ~]# sed '1,2c Hi' filename\nHi\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("s ∶取代，可以直接进行取代的工作。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：sed 's/要替换的字符串/新的字符串/g'   修改的文件\n[root@localhost ~]# cat filename\nHello!\nworld!\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# sed -i 's/Hello!/start/g' filename  把Hello！替换为start\n[root@localhost ~]# cat filename\nstart\nworld!\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# cat filename\nstart\nworld!\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# sed -i '$a bye' filename   在最后一行后面新加bye（$代表最后一样，a表示在当前行下一面添加，bye是新加内容，中间有没有空格都行）\n[root@localhost ~]# cat filename\nstart\nworld!\nend\nbye\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("blockquote",[n("p",[s._v("awk")])]),s._v(" "),n("p",[s._v("awk其名称得自于它的创始人 Alfred Aho 、Peter Weinberger 和 Brian Kernighan 姓氏的首个字母。实际上 AWK 的确拥有自己的语言： AWK 程序设计语言 ， 三位创建者已将它正式定义为“样式扫描和处理语言”。它允许您创建简短的程序，这些程序读取输入文件、为数据排序、处理数据、对输入执行计算以及生成报表，还有无数其他的功能。")]),s._v(" "),n("p",[s._v("awk 是一种很棒的语言，它适合文本处理和报表生成，其语法较为常见，借鉴了某些语言的一些精华，如 C 语言等。在 linux 系统日常处理工作中，发挥很重要的作用，掌握了 awk将会使你的工作变的高大上。 awk 是三剑客的老大，利剑出鞘，必会不同凡响。")]),s._v(" "),n("p",[s._v("1、首先我们看一下常用的cut命令的基本使用方法，cut英文意思是切，它的功能和和awk基本相同，唯一不同的是awk可以说是cut的plus版本（但不是一个厂家）。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cut -d（指定以什么为分割符） -f（指定列）   第一列\n#cut -d  ‘ ’ -f  5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("cut无法切割以空格为分割符的数据。\n"),n("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk_cut.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk_cut.png",alt:""}})])]),s._v(" "),n("p",[s._v("2、awk的基本常用写法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("awk  ‘条件一{动作一}条件二{动作二} ’  文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("当然我们也可用使用管道符|awk。。。。。")]),s._v(" "),n("p",[s._v("3、awk的基本写法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#我们使用printf的话最后必须要加上\\n换号符号，$数字是表示第几列\ndf -h | awk \'{printf $1 "\\t" $5 "\\n"}\'\n#如果使用print的话就不需要再多写一个\\n了\ndf -h | awk \'{print $1 "\\t" $5}\'\n#注意，为了不想让两行数据黏在一起，所以中间需要用“\\t”空格符隔开。最外面的必须是单引号，而里面的\\t和\\n必须使用双引号。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk2.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk2.png",alt:""}})])]),s._v(" "),n("p",[s._v("4、实例")]),s._v(" "),n("p",[s._v("我们想试试判断linux的根分区的使用情况，或者是某个分区的使用情况，我们怎么判断呢。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#df -h | grep sda3 | awk '{print $5}' | cut -d '%' -f 1\n解释：\ndf -h | grep sda3是我的根分区，awk抓取第五列，也就是拿到6%这个数字，但是不想要百分号，那我们在用cut切一下，就OK了\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk3.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk3.png",alt:""}})])]),s._v(" "),n("p",[s._v("5、BEGIN（实际上就是在打印结果的开始打印里面动作的一句话）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#df -h | grep sda3 | awk 'BEGIN{print \"This is the use of the root partition\"}{print $5}' | cut -d '%' -f 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk4.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk4.png",alt:""}})]),s._v("\nBEGIN的关键用法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#awk \'{FS=":"}{print $1 "\\t" $3}\' /etc/passwd\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk5.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk5.png",alt:""}})])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#awk \'BEGIN{FS=":"}{print $1 "\\t" $3}\' /etc/passwd\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk6.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk6.png",alt:""}})]),s._v("\n关键：我们知道awk是每次提取的时候都是先读取第一行后，才开始执行后面的动作语句，所以第一行没有被处理。这个时候就需要使用BEGIN，这个时候它就会处理所有数据。")]),s._v(" "),n("p",[s._v("END的用法")]),s._v(" "),n("p",[s._v("有BEGIN当然就有END了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#awk \'END{print"END!!!"}{print $1 "\\t" $3}\' /etc/passwd\n#和BEGIN的用法基本相同，只不过是在处理数据动作的最后加打印而已。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk7.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/awk7.png",alt:""}})])]),s._v(" "),n("p",[s._v("6、关系运算符")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("关系运算符\n>  大于\n<  小于\n=   等于 #这里的等于就把结果都改成这等于后面的数值，如下图\n>=  大于等于\n<=   小于等于　\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}],!1,null,null,null);a.default=t.exports}}]);