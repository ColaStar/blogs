# linux防火墙
## 1、关闭防火墙
centos 7：
```
systemctl stop firewalld.service #停止
systemctl disable firewalld.service #禁用
```
之前的版本：
```
service iptables stop #停止
chkconfig iptables off #禁用
```
## 2、开启防火墙
centos7：
```
systemctl start firewalld.service # 开启防火墙
systemctl restart firewalld.service # 重启防火墙
```
## 3、firewalld开发某些端口

```
添加
firewall-cmd --zone=public --add-port=80/tcp --permanent    （--permanent永久生效，没有此参数重启后失效）
重新载入
firewall-cmd --reload
查看
firewall-cmd --zone= public --query-port=80/tcp
删除
firewall-cmd --zone= public --remove-port=80/tcp --permanent
```

## 4、iptables开放某些端口
查看已打开的端口
```
/etc/init.d/iptables status
```

打开svn端口
```
/sbin/iptables -I INPUT -p tcp --dport 3690 -j ACCEPT
```
保存配置
```
/etc/rc.d/init.d/iptables save
```

## 5、重启防火墙
```
/etc/init.d/iptables restart
```
## 6、恢复默认配置，默认防火墙配置在此文件中只要将其恢复即可
```
vi /etc/sysconfig/iptables
```

## 7、常用端口
```　　
svn 3690
nexus 8081
ftp 21
```

## 8、CentOS7防火墙firewalld和iptable的设置和使用

> 1、firewalld的基本使用
```
启动： systemctl start firewalld 
查看状态： systemctl status firewalld 
停止： systemctl disable firewalld 
禁用： systemctl stop firewalld
```
> 2.systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。
```
启动一个服务：systemctl start firewalld.service 
关闭一个服务：systemctl stop firewalld.service 
重启一个服务：systemctl restart firewalld.service 
显示一个服务的状态：systemctl status firewalld.service 
设置firewall开机启动：systemctl enable firewalld.service 
禁止firewall开机启动：systemctl disable firewalld.service 
查看服务是否开机启动：systemctl is-enabled firewalld.service 
查看已启动的服务列表：systemctl list-unit-files|grep enabled 
查看启动失败的服务列表：systemctl –failed
```
> 3.配置firewalld-cmd
```
查看版本： firewall-cmd –version 
查看帮助： firewall-cmd –help 
显示状态： firewall-cmd –state 
查看所有打开的端口： firewall-cmd –zone=public –list-ports 
更新防火墙规则： firewall-cmd –reload 
查看区域信息: firewall-cmd –get-active-zones 
查看指定接口所属区域： firewall-cmd –get-zone-of-interface=eth0 
拒绝所有包：firewall-cmd –panic-on 
取消拒绝状态： firewall-cmd –panic-off 
查看是否拒绝： firewall-cmd –query-panic
```
> 4.那怎么开启一个端口呢
```
添加 
firewall-cmd –zone=public –add-port=80/tcp –permanent （–permanent永久生效，没有此参数重启后失效） 
重新载入 
firewall-cmd –reload 
查看 
firewall-cmd –zone= public –query-port=80/tcp 
删除 
firewall-cmd –zone= public –remove-port=80/tcp –permanent
```
> 5.如何开放一个服务
```
暫時開放 ftp 服務 
firewall-cmd –add-service=ftp

永久開放 ftp 服務 
firewall-cmd –add-service=ftp –permanent 
永久關閉 
firewall-cmd –remove-service=ftp –permanent 
success

讓設定生效 
systemctl restart firewalld

檢視設定是否生效 
iptables -L -n | grep 21 
ACCEPT tcp – 0.0.0.0/0 0.0.0.0/0 tcp dpt:21 ctstate NEW

檢查防火牆狀態 
firewall-cmd –state 
running

systemctl stop firewalld 
firewall-cmd –state 
not running

firewall-cmd –list-all 
public (default) 
interfaces: 
sources: 
services: dhcpv6-client ftp ssh 
ports: 
masquerade: no 
forward-ports: 
icmp-blocks: 
rich rules:
```
- 在 FirewallD 的服務名稱 
```
firewall-cmd –get-service 
amanda-client bacula bacula-client dhcp dhcpv6 dhcpv6-client dns ftp high-availability http https imaps ipp ipp-client ipsec kerberos kpasswd ldap ldaps libvirt libvirt-tls mdns mountd ms-wbt mysql nfs ntp openvpn pmcd pmproxy pmwebapi pmwebapis pop3s postgresql proxy-dhcp radius rpc-bind samba samba-client smtp ssh telnet tftp tftp-client transmission-client vnc-server wbem-https
```

- 查詢服務的启用狀態 
```
firewall-cmd –query-service ftp 
yes 
firewall-cmd –query-service ssh 
yes 
firewall-cmd –query-service samba 
no 
firewall-cmd –query-service http 
no
```
- 自行加入要開放的 Port 
```
firewall-cmd –add-port=3128/tcp 
firewall-cmd –list-all 
public (default) 
interfaces: 
sources: 
services: dhcpv6-client ftp ssh 
ports: 3128/tcp 
masquerade: no 
forward-ports: 
icmp-blocks: 
rich rules:
```
> 6.CentOS 7.0默认使用的是firewall作为防火墙，这里改为iptables防火墙步骤。
```
1)、关闭firewall： 
systemctl stop firewalld.service #停止firewall 
systemctl disable firewalld.service #禁止firewall开机启动 
firewall-cmd –state #查看默认防火墙状态（关闭后显示notrunning，开启后显示running）

2)、iptables防火墙（这里iptables已经安装，下面进行配置） 
vi/etc/sysconfig/iptables #编辑防火墙配置文件 
sampleconfiguration for iptables service 
you can edit thismanually or use system-config-firewall 
please do not askus to add additional ports/services to this default configuration 
*filter 
:INPUT ACCEPT [0:0] 
:FORWARD ACCEPT[0:0] 
:OUTPUT ACCEPT[0:0] 
-A INPUT -m state–state RELATED,ESTABLISHED -j ACCEPT 
-A INPUT -p icmp -jACCEPT 
-A INPUT -i lo -jACCEPT 
-A INPUT -p tcp -mstate –state NEW -m tcp –dport 22 -j ACCEPT 
-A INPUT -p tcp -m state –state NEW -m tcp –dport 80 -jACCEPT 
-A INPUT -p tcp -m state –state NEW -m tcp –dport 8080-j ACCEPT 
-A INPUT -j REJECT–reject-with icmp-host-prohibited 
-A FORWARD -jREJECT –reject-with icmp-host-prohibited 
COMMIT 
:wq! #保存退出
```

备注：这里使用80和8080端口为例。*部分一般添加到“-A INPUT -p tcp -m state –state NEW -m tcp–dport 22 -j ACCEPT”行的上面或者下面，切记不要添加到最后一行，否则防火墙重启后不生效。 
systemctlrestart iptables.service #最后重启防火墙使配置生效 
systemctlenable iptables.service #设置防火墙开机启动

