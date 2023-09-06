<!--
 * @Author: cola lvjianwy@yeah.net
 * @Date: 2022-07-01 16:37:34
 * @LastEditors: cola lvjianwy@yeah.net
 * @LastEditTime: 2022-07-01 16:45:03
 * @FilePath: /sinaf/Users/lvjian/blogs/docs/other/mac/Mac电脑使用Charles抓取Android手机app的包.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
一、安装Charles
1、通过Charles官网下载并安装Charles：

![](http://blog.colastar.club:9527/static/images/install-charles.png)

二、在Mac电脑上安装Charles证书
1、启动Charles，选择Help-->SSL Proxying→Install Charles Root Certificate：

![](http://blog.colastar.club:9527/static/images/instal-charles.png)

2、此时会打开“钥匙串访问”APP，并找到刚开安装好的证书，证书名字：Charles Proxy CA ：

![](http://blog.colastar.club:9527/static/images/install-zhengshu.png)



3、选中并点击证书，点击“显示简介” ：

![](http://blog.colastar.club:9527/static/images/install-zhengshu2.png)


4、展开“信任”选项，并将该选项下的所有权限改为“始终信任”：

![](http://blog.colastar.club:9527/static/images/install-zhengshu3.png)


5、关闭权限设置弹窗，输入用户名的密码，点击“更新设置”：

![](http://blog.colastar.club:9527/static/images/install-zhengshu4.png)


6、移动复制该证书到“系统”里面：

![](http://blog.colastar.club:9527/static/images/install-zhengshu5.png)


7、设置HTTPS端口抓包，点击Charles-->Proxy-->SSL Proxying Settings，出现如下弹窗，勾选"Enable SSL Proxying",点击“Add” ：

![](http://blog.colastar.club:9527/static/images/install-zhengshu6.png)


8、Host输入“*”，Post输入“443” ，点击保存：

![](http://blog.colastar.club:9527/static/images/install-zhengshu7.png)


9、至此，电脑端配置完成。

三、在Android手机上安装Charles证书
1、查看电脑IP地址，点击Charles-->Help→Local IP Address：

![](http://blog.colastar.club:9527/static/images/install-zhengshu8.png)



2、保持手机和电脑连接在同一个Wi-Fi下；

3、在手机上设置Wi-Fi代理：设置→WI-FI→修改网络，IP是电脑的IP，端口输入8888，保存：

![](http://blog.colastar.club:9527/static/images/install-zhengshu9.png)


 4、证书下载，charles保存到电脑上：

![](http://blog.colastar.club:9527/static/images/install-zhengshu10.png)


5、将下载的证书格式改成crt，发送到微信（或QQ）上：

![](http://blog.colastar.club:9527/static/images/install-zhengshu11.png)

  

 6、 证书安装完成，可以实现Charles抓取手机app包。