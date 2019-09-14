(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{279:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux防火墙","aria-hidden":"true"}},[s._v("#")]),s._v(" linux防火墙")]),s._v(" "),e("h2",{attrs:{id:"_1、关闭防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、关闭防火墙","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、关闭防火墙")]),s._v(" "),e("p",[s._v("centos 7：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl stop firewalld.service #停止\nsystemctl disable firewalld.service #禁用\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("之前的版本：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service iptables stop #停止\nchkconfig iptables off #禁用\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_2、开启防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、开启防火墙","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、开启防火墙")]),s._v(" "),e("p",[s._v("centos7：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl start firewalld.service # 开启防火墙\nsystemctl restart firewalld.service # 重启防火墙\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_3、firewalld开发某些端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、firewalld开发某些端口","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、firewalld开发某些端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("添加\nfirewall-cmd --zone=public --add-port=80/tcp --permanent    （--permanent永久生效，没有此参数重启后失效）\n重新载入\nfirewall-cmd --reload\n查看\nfirewall-cmd --zone= public --query-port=80/tcp\n删除\nfirewall-cmd --zone= public --remove-port=80/tcp --permanent\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"_4、iptables开放某些端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、iptables开放某些端口","aria-hidden":"true"}},[s._v("#")]),s._v(" 4、iptables开放某些端口")]),s._v(" "),e("p",[s._v("查看已打开的端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/etc/init.d/iptables status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开svn端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/sbin/iptables -I INPUT -p tcp --dport 3690 -j ACCEPT\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("保存配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/etc/rc.d/init.d/iptables save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_5、重启防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、重启防火墙","aria-hidden":"true"}},[s._v("#")]),s._v(" 5、重启防火墙")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/etc/init.d/iptables restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_6、恢复默认配置，默认防火墙配置在此文件中只要将其恢复即可"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、恢复默认配置，默认防火墙配置在此文件中只要将其恢复即可","aria-hidden":"true"}},[s._v("#")]),s._v(" 6、恢复默认配置，默认防火墙配置在此文件中只要将其恢复即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /etc/sysconfig/iptables\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_7、常用端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、常用端口","aria-hidden":"true"}},[s._v("#")]),s._v(" 7、常用端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("svn 3690\nnexus 8081\nftp 21\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"_8、centos7防火墙firewalld和iptable的设置和使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、centos7防火墙firewalld和iptable的设置和使用","aria-hidden":"true"}},[s._v("#")]),s._v(" 8、CentOS7防火墙firewalld和iptable的设置和使用")]),s._v(" "),e("blockquote",[e("p",[s._v("1、firewalld的基本使用")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("启动： systemctl start firewalld \n查看状态： systemctl status firewalld \n停止： systemctl disable firewalld \n禁用： systemctl stop firewalld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("2.systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("启动一个服务：systemctl start firewalld.service \n关闭一个服务：systemctl stop firewalld.service \n重启一个服务：systemctl restart firewalld.service \n显示一个服务的状态：systemctl status firewalld.service \n设置firewall开机启动：systemctl enable firewalld.service \n禁止firewall开机启动：systemctl disable firewalld.service \n查看服务是否开机启动：systemctl is-enabled firewalld.service \n查看已启动的服务列表：systemctl list-unit-files|grep enabled \n查看启动失败的服务列表：systemctl –failed\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("blockquote",[e("p",[s._v("3.配置firewalld-cmd")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("查看版本： firewall-cmd –version \n查看帮助： firewall-cmd –help \n显示状态： firewall-cmd –state \n查看所有打开的端口： firewall-cmd –zone=public –list-ports \n更新防火墙规则： firewall-cmd –reload \n查看区域信息: firewall-cmd –get-active-zones \n查看指定接口所属区域： firewall-cmd –get-zone-of-interface=eth0 \n拒绝所有包：firewall-cmd –panic-on \n取消拒绝状态： firewall-cmd –panic-off \n查看是否拒绝： firewall-cmd –query-panic\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("blockquote",[e("p",[s._v("4.那怎么开启一个端口呢")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("添加 \nfirewall-cmd –zone=public –add-port=80/tcp –permanent （–permanent永久生效，没有此参数重启后失效） \n重新载入 \nfirewall-cmd –reload \n查看 \nfirewall-cmd –zone= public –query-port=80/tcp \n删除 \nfirewall-cmd –zone= public –remove-port=80/tcp –permanent\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("blockquote",[e("p",[s._v("5.如何开放一个服务")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("暫時開放 ftp 服務 \nfirewall-cmd –add-service=ftp\n\n永久開放 ftp 服務 \nfirewall-cmd –add-service=ftp –permanent \n永久關閉 \nfirewall-cmd –remove-service=ftp –permanent \nsuccess\n\n讓設定生效 \nsystemctl restart firewalld\n\n檢視設定是否生效 \niptables -L -n | grep 21 \nACCEPT tcp – 0.0.0.0/0 0.0.0.0/0 tcp dpt:21 ctstate NEW\n\n檢查防火牆狀態 \nfirewall-cmd –state \nrunning\n\nsystemctl stop firewalld \nfirewall-cmd –state \nnot running\n\nfirewall-cmd –list-all \npublic (default) \ninterfaces: \nsources: \nservices: dhcpv6-client ftp ssh \nports: \nmasquerade: no \nforward-ports: \nicmp-blocks: \nrich rules:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br")])]),e("ul",[e("li",[s._v("在 FirewallD 的服務名稱")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("firewall-cmd –get-service \namanda-client bacula bacula-client dhcp dhcpv6 dhcpv6-client dns ftp high-availability http https imaps ipp ipp-client ipsec kerberos kpasswd ldap ldaps libvirt libvirt-tls mdns mountd ms-wbt mysql nfs ntp openvpn pmcd pmproxy pmwebapi pmwebapis pop3s postgresql proxy-dhcp radius rpc-bind samba samba-client smtp ssh telnet tftp tftp-client transmission-client vnc-server wbem-https\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("查詢服務的启用狀態")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("firewall-cmd –query-service ftp \nyes \nfirewall-cmd –query-service ssh \nyes \nfirewall-cmd –query-service samba \nno \nfirewall-cmd –query-service http \nno\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[s._v("自行加入要開放的 Port")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("firewall-cmd –add-port=3128/tcp \nfirewall-cmd –list-all \npublic (default) \ninterfaces: \nsources: \nservices: dhcpv6-client ftp ssh \nports: 3128/tcp \nmasquerade: no \nforward-ports: \nicmp-blocks: \nrich rules:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("blockquote",[e("p",[s._v("6.CentOS 7.0默认使用的是firewall作为防火墙，这里改为iptables防火墙步骤。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1)、关闭firewall： \nsystemctl stop firewalld.service #停止firewall \nsystemctl disable firewalld.service #禁止firewall开机启动 \nfirewall-cmd –state #查看默认防火墙状态（关闭后显示notrunning，开启后显示running）\n\n2)、iptables防火墙（这里iptables已经安装，下面进行配置） \nvi/etc/sysconfig/iptables #编辑防火墙配置文件 \nsampleconfiguration for iptables service \nyou can edit thismanually or use system-config-firewall \nplease do not askus to add additional ports/services to this default configuration \n*filter \n:INPUT ACCEPT [0:0] \n:FORWARD ACCEPT[0:0] \n:OUTPUT ACCEPT[0:0] \n-A INPUT -m state–state RELATED,ESTABLISHED -j ACCEPT \n-A INPUT -p icmp -jACCEPT \n-A INPUT -i lo -jACCEPT \n-A INPUT -p tcp -mstate –state NEW -m tcp –dport 22 -j ACCEPT \n-A INPUT -p tcp -m state –state NEW -m tcp –dport 80 -jACCEPT \n-A INPUT -p tcp -m state –state NEW -m tcp –dport 8080-j ACCEPT \n-A INPUT -j REJECT–reject-with icmp-host-prohibited \n-A FORWARD -jREJECT –reject-with icmp-host-prohibited \nCOMMIT \n:wq! #保存退出\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("备注：这里使用80和8080端口为例。*部分一般添加到“-A INPUT -p tcp -m state –state NEW -m tcp–dport 22 -j ACCEPT”行的上面或者下面，切记不要添加到最后一行，否则防火墙重启后不生效。\nsystemctlrestart iptables.service #最后重启防火墙使配置生效\nsystemctlenable iptables.service #设置防火墙开机启动")])])}),[],!1,null,null,null);a.default=t.exports}}]);