(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{288:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"免密登陆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#免密登陆","aria-hidden":"true"}},[s._v("#")]),s._v(" 免密登陆")]),s._v(" "),e("h2",{attrs:{id:"linux系统配置ssh免密登录-多主机互通"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux系统配置ssh免密登录-多主机互通","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux系统配置SSH免密登录(多主机互通)")]),s._v(" "),e("p",[s._v("Linux系统镜像:CentOS-7-x86_64-minimal-1810.iso\n虚拟机版本:VMware-workstation-full-12.1.0-3272444")]),s._v(" "),e("p",[s._v("操作成功后的效果:\n每台主机可以本机SSH免密登录,也可以与其他主机之间实现SSH免密登录,也就是每台主机都可以一对多SSH免密登录.")]),s._v(" "),e("p",[s._v("现用虚拟机搭建三台主机,IP分别是:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("192.168.0.102   master1\n192.168.0.103   master2\n192.168.0.104   master3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("免密登录的原理")])]),s._v(" "),e("p",[s._v("使用非对称加密，密码学这部分不多说，由于我自己研究的也不是很深，所以暂时不误导大家。就先简单举个形象的例子一笔带过：")]),s._v(" "),e("p",[s._v("​ 服务器上有把锁(公钥)，A口袋里有把钥匙(私钥)，B口袋里也有把钥匙(私钥)，一个锁可以配置多把钥匙，但是钥匙都是一样的，都放在自己的口袋里小心保管着，锁是公开的。有钥匙才能开锁，而且得是对应的钥匙。")]),s._v(" "),e("ul",[e("li",[s._v("开始操作\nPS:\n"),e("code",[s._v("authorized_keys")]),s._v(":存放远程免密登录的公钥,主要通过这个文件记录多台机器的公钥\n"),e("code",[s._v("id_rsa")]),s._v(": 生成的私钥文件\n"),e("code",[s._v("id_rsa.pub")]),s._v(" ： 生成的公钥文件\n"),e("code",[s._v("know_hosts")]),s._v(" : 已知的主机公钥清单")])]),s._v(" "),e("blockquote",[e("p",[s._v("方法一:")])]),s._v(" "),e("p",[s._v("先选择其中一台主机,在该主机上生成公钥和私钥,再将公钥和私钥上传到其他主机上,具体操作如下:\n在这里我就选择master1进行操作以下操作了:")]),s._v(" "),e("ul",[e("li",[s._v("1.登录Linux系统,根据自己实际情况选择登录用户,执行下面代码生成公钥私钥对:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('ssh-keygen -t rsa -C "cola" -f "cola"\n这里我们解释一下这几个参数的含义\n\n-t：指定加密方式，一般我们使用rsa的加密方式，当然也可以使用其他加密方式，可以自行折腾。\n-C：指定密钥的名称，这里的参数值cola，将会参与最终秘钥对的加密，即会在最终的加密字符串里有体现。\n-f：指定秘钥对文件名\n最终会在你当前目录下生成两个文件cola_rsa 和 cola_rsa.pub，前者是秘钥文件，后者是公钥。\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("会出现如下提示,一路回车就行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@master1 ~]# ssh-keygen -t rsa -C "cola" -f "cola"\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa): //这里回车\nEnter passphrase (empty for no passphrase): //这里回车\nEnter same passphrase again: //这里回车\nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\ndf:71:f6:3e:bb:bb:6c:38:91:f4:bc:70:a1:dd:86:a9 root@master1\nThe key\'s randomart image is:\n+--[ RSA 2048]----+\n|-----------|\n|           |\n|           |\n| . .       |\n| S   o Ooo |\n| . . Oo*o  |\n| . ..=.o   |\n| Eo.=      |\n| o*B       |\n|           ||\n+-----------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("注意：在程序提示输入passphrase时直接输入回车，表示无证书密码(如果需要再输入)。")]),s._v(" "),e("ul",[e("li",[s._v("2.生成秘钥的默认目录为:~/.ssh,该目录下会生成下面两个文件:")])]),s._v(" "),e("p",[s._v("id_rsa")]),s._v(" "),e("p",[s._v("id_rsa.pub")]),s._v(" "),e("ul",[e("li",[s._v("3.实现本地免密登录,将id_rsa.pub中的内容拷贝到authorized_keys")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh-copy-id localhost\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("~/.ssh目录下会生成一个新的文件:authorized_keys")]),s._v(" "),e("ul",[e("li",[s._v("4.完成上述步骤后就可以本地SSH免密登录了,运行下面代码出现一行登录时间就代表本地SSH免密登录成功")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh localhost\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("下面是本地SSH免密登录成功的标志:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@master1 ~]$ ssh localhost\nLast login: Mon Aug 27 08:41:20 2018 from 192.168.33.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("5.如果本机能成功SSH免密登录,\n先退出SSH登录:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("exit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("再执行以下代码将本机的~/.ssh文件夹复制到其他主机上:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scp -r ~/.ssh 192.168.0.102:~/\n\nscp -r ~/.ssh 192.168.0.103:~/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("提示输入密码时,输入远程主机密码回车即可")]),s._v(" "),e("ul",[e("li",[s._v("6.测试SSH免密登录,这里就不发测试了,大家自行测试")])]),s._v(" "),e("blockquote",[e("p",[s._v("方法二:")])]),s._v(" "),e("p",[s._v("将每台机器生成的id_rsa.pub追加添加到同一个authorized_keys内,然后再将该authorized_keys发送到其他远程主机上.")]),s._v(" "),e("p",[s._v("具体步骤如下:")]),s._v(" "),e("ul",[e("li",[s._v("1.在master1,master2,master3上分别执行:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh-keygen -t rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('与"方法一"内所述一样,一路回车即可,生成秘钥的默认目录为~/.ssh')]),s._v(" "),e("ul",[e("li",[s._v("2.接着制作包含master1,master2,master3中所有id_rsa.pub的authorized_keys文件:\n此处在master 1上生成authorized_keys文件,")])]),s._v(" "),e("p",[s._v("将生成的公钥到服务器对应的home路径下的.ssh/中，输入一下命令，\n这里的home就是服务器登录用户的根目录，例如我用root用户登录的，我的根目录就是~。")]),s._v(" "),e("p",[s._v("这里的坑注意⚠️，公钥名一定是个字符串要用引号框起来。")]),s._v(" "),e("p",[s._v("回车，提示输入密码，第一次上传公钥会有些提示。")]),s._v(" "),e("p",[s._v("在master1上执行:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh-copy-id -i 192.168.33.201\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在master2上执行:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh-copy-id -i 192.168.33.201\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在master3上执行:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh-copy-id -i 192.168.33.201\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('注意:此处代码中的"-i"千万不要忘记了!!!')]),s._v(" "),e("p",[s._v("配置公钥文件的访问权限为600")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chmod 600 cola_rsa.pub\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.通过scp将master1上生成的authorized_keys文件发送给其他主机:\n在master1上执行")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scp -r ~/.ssh/authorized_keys 192.168.33.202:~/.ssh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scp -r ~/.ssh/authorized_keys 192.168.33.203:~/.ssh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("提示输入密码时,输入远程主机密码回车即可")]),s._v(" "),e("ul",[e("li",[s._v("4.测试SSH免密登录,可先测试本机免密登录,再测试远程主机远程登录")])]),s._v(" "),e("p",[s._v("本机登录可用:")]),s._v(" "),e("p",[s._v("ssh localhost")]),s._v(" "),e("p",[s._v("远程登录将localhost换成远程主机IP即可\n比如在master1上登录master2,就在master1上执行:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh 192.168.33.202\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("相关故障处理:\n部分人在配置完成后可能出现无法登录的情况,错误代码我不太记得了,欢迎各位读者在下面补充.\n造成故障的原因是之前配置过程中配置失败,然后重新对SSH免密登录进行配置,配置完成后无法正常登录,解决方法如下:")]),s._v(" "),e("p",[s._v("删除各主机下~/.ssh目录中的known_hosts文件:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rm -rf ~/.ssh/known_hosts\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"免密登陆功能的本地配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#免密登陆功能的本地配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 免密登陆功能的本地配置文件")]),s._v(" "),e("p",[s._v("编辑自己home目录的.ssh/ 路径下的config文件")]),s._v(" "),e("p",[s._v("配置config文件的访问权限为 644/700")]),s._v(" "),e("ul",[e("li",[s._v("配置本地私钥")])]),s._v(" "),e("p",[s._v("上面几步都是在远程服务器上操作的，这步操作是在本地机器上操作。")]),s._v(" "),e("p",[s._v("把第二步生成的私钥复制到你的home目录下的.ssh/路径下，你可以通过vi打开cola_rsa私钥文件，复制里面的内容，粘贴到你本机的.ssh/下一个新建的文件里，比如我这里新建一个文件还叫cola_rsa，打开这个文件，将刚才复制的私钥的内容粘贴到这个文件里。")]),s._v(" "),e("p",[s._v("配置你的私钥文件访问权限为 600")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chmod 600 cola_rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("免密登陆功能的本地配置文件")])]),s._v(" "),e("p",[s._v("编辑本地home目录下的.ssh/路径下的config文件，如果没有，新建一个即可，编辑config文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Host cola\nUser root\nHostName 192.168,0.103\nIdentityFile ~/.ssh/cola_rsa\n\nHost cola1\nUser root\nHostName 192.168,0.104\nIdentityFile ~/.ssh/cola_rsa\n# -------如果需要多主机配置只要在这儿加就好了\n\n# -------以下几行照抄就行，上面几个需要配置对应的参数\nProtocol 2\nCompression yes\nServerAliveInterval 60  #配置发送心跳包的频率\nServerAliveCountMax 20  #每次心跳包发送个数\nLogLevel INFO #日志等级\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("配置config文件访问权限为700")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chmod 700 config\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("都配置完了？恭喜你已经可以进行免密登录啦，根据本文的步骤做的配置，可以在终端中输入")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh cola\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("当然，凡是涉及到登录远程服务器验证密码的地方，这个免密配置都生效，例如向远程服务器传文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scp xxx.md cola:~/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("也不需要验证密码了，就可以将本地的xxx.md文件传到远端的~路径下了。")])])}),[],!1,null,null,null);a.default=t.exports}}]);