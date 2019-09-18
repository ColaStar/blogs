(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{229:function(s,a,n){"use strict";n.r(a);var t=n(0),r=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux创建文件和目录的默认权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux创建文件和目录的默认权限","aria-hidden":"true"}},[s._v("#")]),s._v(" LINUX创建文件和目录的默认权限")]),s._v(" "),n("p",[s._v("在linux中，一位用户在创建文件和目录时，对其具有的权限都是一样的，如需更改，需要chmod命令做相应的更改。为什么？其实是权限掩码起作用了。")]),s._v(" "),n("p",[s._v("权限掩码的作用就是规范初创文件和目录时候的权限设置，免去了创建后再次修改权限的问题。因此，权限掩码的设置需要合理。")]),s._v(" "),n("h2",{attrs:{id:"_1、查看用户的权限掩码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看用户的权限掩码","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、查看用户的权限掩码")]),s._v(" "),n("p",[s._v("命令：umask")]),s._v(" "),n("p",[s._v("示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("dyp930@ubuntu:~/work$ umask    //初创文件的最大权限是666，减去掩码0002，表示初创文件的权限是664。初创目录的最大权限是777，减去掩码，\n0002\n\ndyp930@ubuntu:~/work$ touch a.txt\ndyp930@ubuntu:~/work$ mkdir a\ndyp930@ubuntu:~/work$ ls -lrt\n-rw-rw-r-- 1 dyp930 dyp930    0 Jun 28 06:02 a.txt //权限为664\ndrwxrwxr-x 2 dyp930 dyp930 4096 Jun 28 06:02 a     //权限为775\n \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_2、修改用户的权限掩码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、修改用户的权限掩码","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、修改用户的权限掩码")]),s._v(" "),n("p",[s._v("命令：umask abc")]),s._v(" "),n("p",[s._v("设置默认掩码为abc后，如下公式即为文件的初创权限。")]),s._v(" "),n("p",[s._v("备注：对于文件，掩码abc的实际值为偶数值，需要向下减1.\n① 新创建的文件的权限为：(7-a)(7-b)(7-c) ，如果a/b/c中有一位为0，则相减之后的每位奇数都要减1.\n② 新创建的目录的权限为：(7-a)(7-b)(7-c)")]),s._v(" "),n("p",[s._v("示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\ndyp930@ubuntu:~/work$ umask 005\ndyp930@ubuntu:~/work$ umask\n0005\ndyp930@ubuntu:~/work$ touch b.txt\ndyp930@ubuntu:~/work$ mkdir b\ndyp930@ubuntu:~/work$ ls -lrt\ntotal 8\n-rw-rw-r-- 1 dyp930 dyp930    0 Jun 28 06:02 a.txt\ndrwxrwxr-x 2 dyp930 dyp930 4096 Jun 28 06:02 a\n-rw-rw--w- 1 dyp930 dyp930    0 Jun 28 06:05 b.txt   \ndrwxrwx-w- 2 dyp930 dyp930 4096 Jun 28 06:05 b\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])},[],!1,null,null,null);a.default=r.exports}}]);