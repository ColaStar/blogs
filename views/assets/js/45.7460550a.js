(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{214:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"centos启动nginx提示nginx-emerg-still-could-not-bind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos启动nginx提示nginx-emerg-still-could-not-bind","aria-hidden":"true"}},[s._v("#")]),s._v(" centos启动Nginx提示nginx: [emerg] still could not bind()")]),s._v(" "),e("p",[s._v("centos7中启动Nginx： /usr/local/nginx/sbin/nginx，提示以下内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n[root@xyw-cyck-cms-3 ~]# /usr/local/nginx/sbin/nginx \nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] still could not bind()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("strong",[s._v("解决办法：")]),s._v("\n根据Nginx配置文件查看配置的端口（本文中使用的是80端口），然后根据端口查看端口占用情况")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n[root@xyw-cyck-cms-3 ~]# netstat -ntlp|grep 80  \ntcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      7043/nginx: worker\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("2.使用kill命令杀死占用进程，之后重新启动Nginx")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kill -9 7043\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"centos7使用密钥连接服务器提示bad-permissions不能正常登陆处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7使用密钥连接服务器提示bad-permissions不能正常登陆处理","aria-hidden":"true"}},[s._v("#")]),s._v(" centos7使用密钥连接服务器提示bad permissions不能正常登陆处理")]),s._v(" "),e("p",[s._v("登陆服务器时，说使用密钥文件登陆时提示输入密码后一直登陆不进去。")]),s._v(" "),e("p",[s._v("报错：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@imzcy ~]# ssh zcy@192.168.5.5 -p 15122 -i zcy.pem\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nPermissions 0644 for 'zcy.pem' are too open.\nIt is recommended that your private key files are NOT accessible by others.\nThis private key will be ignored.\nbad permissions: ignore key: zcy.pem\nEnter passphrase for key 'zcy.pem': \n \n[root@imzcy ~]# \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("看提示是说密钥文件权限0644太开放了，建议密钥文件不能被其他人访问，并且此次使用的密钥文件被忽略了（所以哪怕提示你输入密码，输入正常的密码也会一直让你继续输入密码，直到最大密码输入次数或超时自动退出）！")]),s._v(" "),e("p",[e("strong",[s._v("解决方法：")])]),s._v(" "),e("p",[s._v("修改zcy.pem密钥文件权限为600即可。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n[root@imzcy ~]# ll zcy.pem \n-rw-r--r-- 1 root root 1766 09-12 09:53 zcy.pem\n[root@imzcy ~]# \n[root@imzcy ~]# chmod 600 zcy.pem \n[root@imzcy ~]# \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("再尝试使用密钥连接服务器即可正常登入：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@imzcy ~]# ssh zcy@192.168.5.5 -p 2233 -i zcy.pem\nEnter passphrase for key 'zcy.pem': \nLast login: Fri Sep 14 11:01:14 2018 from 192.168.1.210\n \n###    欢迎使用Jumpserver开源跳板机系统   ### \n \n        1) 输入 ID 直接登录.\n        2) 输入 / + IP, 主机名 or 备注 搜索.\n        3) 输入 P/p 显示您有权限的主机.\n        4) 输入 G/g 显示您有权限的主机组.\n        5) 输入 G/g + 组ID 显示该组下主机.\n        6) 输入 E/e 批量执行命令.\n        7) 输入 U/u 批量上传文件.\n        8) 输入 D/d 批量下载文件.\n        9) 输入 H/h 帮助.\n        0) 输入 Q/q 退出.\n \nOpt or ID>: \nOpt or ID>: q\nConnection to 192.168.5.5 closed.\n[root@imzcy ~]# \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h2",{attrs:{id:"centos启动nginx启动报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos启动nginx启动报错","aria-hidden":"true"}},[s._v("#")]),s._v(" centos启动Nginx启动报错")]),s._v(" "),e("ul",[e("li",[s._v("原因一：可能是防火墙挡了")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl stop firewalld.service  关闭防火墙\nsystemctl stop firewalld.service  禁用防火墙\n或者设置白名单\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("原因二：启动立刻多个nginx")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kill -9 端口号\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}],!1,null,null,null);n.default=t.exports}}]);