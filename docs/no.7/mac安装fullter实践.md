# mac安装fullter实践

## 安装fullter

[fullter官网](https://flutter.dev/docs/development/tools/sdk/releases?tab=macos)

### 下载 [Flutter](https://flutter.io/docs/development/tools/sdk/archive)

在这里获取`Flutter`的安装包，推荐使用`stable channel`的安装包。下载完成后解压。
<a data-fancybox title="" href="https://colastar.github.io/static/images/fullter.jpeg">![](https://colastar.github.io/static/images/fullter.jpeg)</a>

### 设置环境变量

可以在~/.bash_profile里设置：
```
//会进入vim编辑,如下配置即可
vim ~/.bash_profile


export PATH=/$你的解压目录/flutter-box/flutter/bin:$PATH
export PUB_HOSTED_URL=https://pub.flutter-io.cn   # 国内用户需要设置
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn  # 国内用户需要设置
export PATH=PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-14.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH:.
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.

不会的 使用open ~/.bash_profile直接在文件夹里边更改

```

然后

```
source .bash_profile
```

### Flutter命令

接着上一步
```
flutter -h
```
可以看到如下结果
<a data-fancybox title="" href="https://colastar.github.io/static/images/fullter-h.jpg">![](https://colastar.github.io/static/images/fullter-h.jpg)</a>

### 安装编辑IDE

推荐使用Visual Studio Code，安装完成之后，安装Flutter插件

<a data-fancybox title="" href="https://colastar.github.io/static/images/fullter-ide.png">![](https://colastar.github.io/static/images/fullter-ide.png)</a>

### 检查环境

运行命令行
```
flutter doctor
```

doctor可以检测当前开发环境


按照检测结果的说明，如果有[!] ✗ 标志，表示本行检测不通过，需要做一些设置或者安装一些软件。

如果你以前没有安装过Android、xcode以及java sdk
就需要安装这三个,下边有具体安装过程。

比如：
<a data-fancybox title="" href="https://colastar.github.io/static/images/Android-SDK-Manager-error.jpeg">![](https://colastar.github.io/static/images/Android-SDK-Manager-error.jpeg)</a>

这个时候你就要配置Android sdk了

配置完后
```
flutter doctor --android-licenses
```

所有的安装好以后,可能会出现下边这个问题

在使用Git clone了Flutter下来之后，鄙人配好Path，运行flutter doctor命令试试安装是否顺利，等待几分钟后却等到了以下情况。。。。。。
°
<a data-fancybox title="" href="https://colastar.github.io/static/images/flutter-doctor.png">![](https://colastar.github.io/static/images/flutter-doctor.png)</a>

Connected devices 是连接设备，估计是要连接手机吧，于是打开AS，再USB连接手机，再run一次flutter doctor，done。。。。。。
<a data-fancybox title="" href="https://colastar.github.io/static/images/Connected-devices.png">![](https://colastar.github.io/static/images/Connected-devices.png)</a>

原因是flutter没有找到连接的设备或者模拟器，定位此问题的一些步骤。

分为两种情况：连接的是真机和连接的是模拟器。
> 配置连接android真机

- 首先确保android的真机版本为Android 4.1 (API level 16)或以上
- 在android机上把开发者选项以及usb 调试（debug）打开
- 使用USB线把手机连接到电脑时，需要授权电脑可以访问android机
- 执行flutter devices命令，检查Flutter是否能识别出android机
- 如果一切正常，那么就可以执行flutter run了。

> 配置连接android模拟器
- 在电脑上打开VM acceleration
- 按Android Studio>Tools>Android>AVD Manager，添加android模拟器，虚拟设备
- 配置虚拟机，推荐选择x86和x86_64的image
- 在Emulated Performanc选项上，选择Hardware - GLES 2.0，用来开启硬件加速
- 启动模拟机，接着就可以执行 flutter run了。

> 其他

如果还是有问题，可以使用flutter的控制台来尝试：

一、执行flutter emulators，列出所有可用的模拟器

> flutter emulators
6 available emulators:
3.2_QVGA_ADP2_API_22 _-_ Lollipop • 3.2in QVGA (ADP2) • Generic • 3.2 QVGA (ADP2) API 22 - Lollipop
Android_ARMv7a
Android_Accelerated_x86
Nexus S API Google Nexus S API 23
Nexus_S_API_25_1080x1920_Nougart_7.1.1_ • pixel • Google • Nexus S API 25 1080x1920 (Nougart 7.1.1)
Pixel_API_28 • pixel • Google • Pixel API 28

> flutter emulators
6 available emulators:
3.2_QVGA_ADP2_API_22 _-_ Lollipop • 3.2in QVGA (ADP2) • Generic • 3.2 QVGA (ADP2) API 22 - Lollipop
Android_ARMv7a
Android_Accelerated_x86
Nexus S API Google Nexus S API 23
Nexus_S_API_25_1080x1920_Nougart_7.1.1_ • pixel • Google • Nexus S API 25 1080x1920 (Nougart 7.1.1)
Pixel_API_28 • pixel • Google • Pixel API 28
二、指定启动的模拟器，使用步骤一列出的模拟器id

```
flutter emulators --launch Pixel_API_28
```

[参考文档](https://stackoverflow.com/questions/49045393/flutter-run-no-connected-devices)



## Android sdk安装
> 第一步：

Andriod sdk [下载地址](http://down.tech.sina.com.cn/page/45703.html)

> 2、第二步：

打开终端，进入Android-sdk-macosx目录，再进入tools目录下

<a data-fancybox title="" href="https://colastar.github.io/static/images/Andriod-tools.png">![](https://colastar.github.io/static/images/Andriod-tools.png)</a>

输入./android sdk

如果提示为监测到java sdk 需先安装 java sdk。

<a data-fancybox title="" href="https://colastar.github.io/static/images/android-sdk.png">![](https://colastar.github.io/static/images/android-sdk.png)</a>

> 3、第三步：

调出 Andriod SDK Manager 页面，点击Andriod SDK Manager-->Preferences...

<a data-fancybox title="" href="https://colastar.github.io/static/images/Andriod-Preferences.png">![](https://colastar.github.io/static/images/Andriod-Preferences.png)</a>

> 4、第四步：

进入Andriod SDK Manage-Settings页面，填写以下信息：

HTTP Proxy Server ： mirrors.neusoft.edu.cn （东软搭建国内的镜像服务器）

HTTP Proxy Port：80

再勾选选项：Force https://...

3个都搞定才完美～

<a data-fancybox title="" href="https://colastar.github.io/static/images/Andriod-SDK-Manage-Settings.png">![](https://colastar.github.io/static/images/Andriod-SDK-Manage-Settings.png)</a>

> 5、第五步：

点击Tools->Manage Add-on Site->New... 

<a data-fancybox title="" href="https://colastar.github.io/static/images/Tools-Manage-Add-on-Site.png">![](https://colastar.github.io/static/images/Tools-Manage-Add-on-Site.png)</a>

<a data-fancybox title="" href="https://colastar.github.io/static/images/Tools-Manage-Add-on-Site1.png">![](https://colastar.github.io/static/images/Tools-Manage-Add-on-Site1.png)</a>

将以下地址逐条添加：

- http://mirrors.neusoft.edu.cn/android/repository/addon-6.xml
- http://mirrors.neusoft.edu.cn/android/repository/addon.xml
- http://mirrors.neusoft.edu.cn/android/repository/extras/intel/addon.xml
- http://mirrors.neusoft.edu.cn/android/repository/sys-img/android-tv/sys-img.xml
- http://mirrors.neusoft.edu.cn/android/repository/sys-img/android-wear/sys-img.xml
- http://mirrors.neusoft.edu.cn/android/repository/sys-img/android/sys-img.xml
- http://mirrors.neusoft.edu.cn/android/repository/sys-img/google_apis/sys-img.xml
- http://mirrors.neusoft.edu.cn/android/repository/sys-img/x86/addon-x86.xml
- http://mirrors.neusoft.edu.cn/android/repository/addons_list-2.xml
- http://mirrors.neusoft.edu.cn/android/repository/repository-10.xml

> 6、第六步：

前两张图中的选项为默认勾选，重点是第三张图的Extras文件下的所有文件记得勾选！！！

<a data-fancybox title="" href="https://colastar.github.io/static/images/Tools-Manage-Extras.png">![](https://colastar.github.io/static/images/Tools-Manage-Extras.png)</a>
<a data-fancybox title="" href="https://colastar.github.io/static/images/Tools-Manage-Extras1.png">![](https://colastar.github.io/static/images/Tools-Manage-Extras1.png)</a>
<a data-fancybox title="" href="https://colastar.github.io/static/images/Tools-Manage-Extras2.png">![](https://colastar.github.io/static/images/Tools-Manage-Extras2.png)</a>

下载时间有点长，耐心等待一下吧～

## xcode sdk安装

[xcode开发配置指南](https://aaaaaashu.gitbooks.io/mac-dev-setup/content/XCode/index.html)

1、appStore中查找XCode，点击安装

2、打开终端，输入xcode-select --install 安装Command Line Tools

3、安装完成，在终端查看是否安装成功，依旧输入上述命令

4、也可打开xcode新建项目检查是否成功创建

**⚠️注意**

安装xcode后又可能会出现一下问题

```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
解决方法

终端输入
```
xcode-select --install
```
按提示安装
<a data-fancybox title="" href="https://colastar.github.io/static/images/xocde-error.png">![](https://colastar.github.io/static/images/xocde-error.png)</a>
之后git就能正常使用了

## java sdk安装

[下载地址](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)

<a data-fancybox title="" href="https://colastar.github.io/static/images/java-sdk1.jpeg">![](https://colastar.github.io/static/images/java-sdk1.jpeg)</a>

下载后解压安装即可。

当然你还可以按照官方教程安装

[官方教程地址](https://www.java.com/zh_CN/download/help/mac_install.xml)

完全按照官方教程安装，安装完成之后可通过java -version 验证.

输出如下信息，说明安装成功

```
java -version
java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```

## 创建第一个Flutter Demo

> 1.打开 Android Studio 新建一个Flutter项目 如下图所示

<a data-fancybox title="" href="https://colastar.github.io/static/images/fullter-demo-created.jpeg">![](https://colastar.github.io/static/images/fullter-demo-created.jpeg)</a>

> 2.第二步选择 一个项目模板 Flutter Application

> 3.如下图, 

Flutter SDK path 一定要填写正确, 如果你上面操作和我一样, 用git克隆的, 那么位置就在/Users/youUserName/flutter , youUserName就是你的电脑用户名, 正确填写即可.
<a data-fancybox title="" href="https://colastar.github.io/static/images/fullter-demo-set.jpeg">![](https://colastar.github.io/static/images/fullter-demo-set.jpeg)</a>

> 4.打开项目如果有手机运行APP到手机上, 瞬间开心死了, 一套代码两个平台简直美死了,

> 5.接下来就是要好好学习dart语法了









