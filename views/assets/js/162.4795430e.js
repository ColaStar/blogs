(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{564:function(s,e,o){"use strict";o.r(e);var u=o(56),L=Object(u.a)({},(function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("p",[s._v("Linux中普通用户用sudo执行命令时报”xxx is not in the sudoers file.This incident will be reported”错误，解决方法就是在/etc/sudoers文件里给该用户添加权限。如下：")]),s._v(" "),o("p",[s._v("1.切换到root用户下\n　　方法为直接在命令行输入：su，然后输入密码（即你的登录密码，且密码默认不可见）。")]),s._v(" "),o("p",[s._v("2./etc/sudoers文件默认是只读的，对root来说也是，因此需先添加sudoers文件的写权限,命令是:\n即执行操作：chmod u+w /etc/sudoers")]),s._v(" "),o("p",[s._v("3.编辑sudoers文件\n即执行：vi /etc/sudoers\n找到这行 root ALL=(ALL) ALL,在他下面添加xxx ALL=(ALL) ALL (这里的xxx是你的用户名)")]),s._v(" "),o("p",[s._v("ps:这里说下你可以sudoers添加下面四行中任意一条\nyouuser ALL=(ALL) ALL\n%youuser ALL=(ALL) ALL\nyouuser ALL=(ALL) NOPASSWD: ALL\n%youuser ALL=(ALL) NOPASSWD: ALL")]),s._v(" "),o("p",[s._v("第一行:允许用户youuser执行sudo命令(需要输入密码).\n第二行:允许用户组youuser里面的用户执行sudo命令(需要输入密码).\n第三行:允许用户youuser执行sudo命令,并且在执行的时候不输入密码.\n第四行:允许用户组youuser里面的用户执行sudo命令,并且在执行的时候不输入密码.")]),s._v(" "),o("p",[s._v("4.撤销sudoers文件写权限,命令:\nchmod u-w /etc/sudoers")])])}),[],!1,null,null,null);e.default=L.exports}}]);