# JavaScript与QA测试工程师
## why?
* 正确性：测试可以验证代码的正确性，在上线前做到心里有底
* 自动化：当然手工也可以测试，通过console可以打印出内部信息，但是这是一次性的事情，下次测试还需要从头来过，效率不能得到保证。通过编写测试用例，可以做到一次编写，多次运行
* 解释性：测试用例用于测试接口、模块的重要性，那么在测试用例中就会涉及如何使用这些API。其他开发人员如果要使用这些API，那阅读测试用例是一种很好地途
径，有时比文档说明更清晰
* 驱动开发，指导设计：代码被测试的前提是代码本身的可测试性，那么要保证代码的可测试性，就需要在开发中注意API的设计，TDD将测试前移就是起到这么一个作用
* 保证重构：互联网行业产品迭代速度很快，迭代后必然存在代码重构的过程，那怎
么才能保证重构后代码的质量呢？有测试用例做后盾，就可以大胆的进行重构
## 单元测试 
* 目的：单元测试能够让开发者明确知道代码结果
* 原则：单一职责、接口抽象、层次分离
* 断言库：保证最小单元是否正常运行检测方法
* 测试风格：测试驱动开发(Test-Driven Development,TDD)、(BehaviorDriven Development,BDD)行为驱动开发均是敏捷开发方法论。
    * **TDD**关注所有的功能是否被实现(每一个功能都必须有对应的测试用
    例)，suite配合test利用assert('tobi' == user.name);
    * **BDD**关注整体行为是否符合整体预期,编写的每一行代码都有目的提
    供一个全面的测试用例集。expect/should,describe配合it利用自然语
    言expect(1).toEqual(fn())执行结果。

### 单元测试框架
* better-assert(TDD断言库Github 190star 19fork)
* should.js(BDD断言库Github 2295star 194fork)
* expect.js(BDD断言库Github 1391star 162fork)
* chai.js(TDD BDD双模Github 2823star 271fork)
* Jasmine.js(BDD Github10723star1680fork)
* Node.js本身集成 require(“assert”);
* Intern 更是一个大而全的单元测试框架
* QUnit 一个游离在jQuery左右的测试框架
* Macaca 一套完整的自动化测试解决方案 国产神器来自阿里巴巴


![22](https://github.com/ColaStar/static/blob/master/images/流程.png)

#### karma 集成 Jasmine 进行单元测试

karma是一个测试环境，Jasmine是一个Javascript的测试工具，在Karma上运行Jasmine可完成Javascript的自动化测试、生成覆盖率报告等。

##### 步骤一.初始化 NPM

实现初始化 NPM 包管理，创建 package.json 项目管理文件。

使用参数 -y 直接按照默认值创建 packgae.json 项目管理文件

```
PS C:\study\mykarma> npm init -y
Wrote to C:\study\mykarma\package.json:

{
  "name": "mykarma",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
##### 步骤二.安装 Karma

```
npm install karma --save-dev
```

（Karma安装完毕后）：

<a data-fancybox title="" href="https://images0.cnblogs.com/blog2015/455688/201505/291838190796907.png">![](https://images0.cnblogs.com/blog2015/455688/201505/291838190796907.png)</a>

现在我们可以使用 node 来运行 karma  了

```
 > node ./node_modules/karma/bin/karma
```

##### 步骤三.安装 karma-cli
为了能在命令行直接执行 karma 命令，我们再按着一个karma-cli.

-g 表示全局安装，这样可以在系统的任何文件夹中直接执行 karma 命令。

<a data-fancybox title="" href="https://images0.cnblogs.com/blog2015/455688/201505/291849002194312.png">![](https://images0.cnblogs.com/blog2015/455688/201505/291849002194312.png)</a>

安装之后，可以直接使用 karma 来启动测试了，首先检查一下当前的版本。

```
PS C:\study\mykarma> karma --version
Karma version: 0.13.21
PS C:\study\mykarma>
```

##### 步骤四：安装 Jasmine 和 chrome-launcher/phantomjs-launcher

我们使用 Karma 来驱动单元测试，只有 Karma 是不行的，还需要安装单元测试库以便运行测试脚本，安装测试库与 Karma 的适配器，还有各种浏览器的适配器。

这里我们安装 ```Jasmine``` 的测试支持和 ```chrome 浏览器的适配器```。

对于 jasmine 来说，我们需要 Jasmine 的适配器，还必须有 ```jasmine-core``` 库。

```karma-chrome-launcher``` 则提供了 karma 与 chrome 的适配器。

```karma-phantomjs-launcher``` 则提供了 karma 与 无头浏览器 的适配器。

```
npm i -D jasmine-core karma-jasmine karma-chrome-launcher
```

<a data-fancybox title="" href="https://images0.cnblogs.com/blog2015/455688/201505/291843192194601.png">![](https://images0.cnblogs.com/blog2015/455688/201505/291843192194601.png)</a>

##### 步骤五：使用Karma进行测试
> Karma 的命令
* start [<configFile>] [<options>] 启动 Karma 持续执行，也可以执行单次的测试，然后直接收集测试结果.
* init [<configFile>] 初始化配置文件.
* run [<options>] [ -- <clientArgs>] Trigger a test run. 
> 创建 karma 配置文件
执行命令init命令进行配置：

```
karma init
```

所有默认配置问题：
<a data-fancybox title="" href="https://images0.cnblogs.com/blog2015/455688/201505/291917575947190.png">![](https://images0.cnblogs.com/blog2015/455688/201505/291917575947190.png)</a>

 说明：
* 1. 测试框架：我们当然选jasmine

* 2. 是否添加Require.js插件

* 3. 选择浏览器： 我们选Chrome

* 4. 测试文件路径设置，文件可以使用通配符匹配，比如*.js匹配指定目录下所有的js文件（实际操作中发现该路径是karma.conf.js文件的相对路径，详见下面我给出的实际测试配置及说明）

* 5. 在测试文件路径下，需要排除的文件

* 6. 是否允许Karma监测文件，yes表示当测试路径下的文件变化时，Karma会自动测试

**以下是karma.conf.js的完整内容**
```
module.exports = function(config) {
  config.set({

    //将用于解析所有模式（如文件、排除）的基本路径
    // 基本路径，这个是决定从哪里找引用的文件和要排除的文件
    basePath: '',
    //生成报表的类型与文件夹位置
    coverageReporter: { 
      type: 'html',    
      dir: './docs/coverage/'
  },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],//指定断言框架


    // 要在浏览器中加载的文件/模式列表
    files: [
      "./tests/unit/*.js",
      "./tests/unit/*.spec.js"
    ],//测试文件


    //要排除的文件/模式列表
    exclude: [
    ],


    // 在将匹配文件提供给浏览器之前对其进行预处理
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './tests/unit/**/*.js': ['coverage']
    },

    //插件，用到什么就写什么，不写会报错
    // plugins : [
    //   'karma-jasmine',
    //     'karma-requirejs'
    // ],
    // test results reporter to use
    //生成测试结果报告的类型
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    // 启用/禁用输出中的颜色（测试结果和日志）
    colors: true,


    // level of logging
    // 日志的等级，就那几样看着选
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // 是否自动监控，如果是文件一改就自动跑测试用例，这边选择的是否
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // 支持的浏览器，用来做兼容性测试，无头浏览器PhantomJS没人维护还是用的时候还是很多坑的。
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS   //大坑不能使用ES6的语法
    // - IE (only Windows)
    // client: {
    //   mocha: {
    //     // change Karma's debug.html to the mocha web reporter
    //     reporter: 'html',
 
    //     // require specific files after Mocha is initialized
    //     require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],
 
    //     // custom ui, defined in required file above
    //     ui: 'bdd-lazy-var/global',
    //   }
    // },

    // true表示找到浏览器就自动运行test然后退出，默认就好。
    singleRun: false,
    // 浏览器超时时间，超过这个时间就kill掉了
    captureTimeout: 60000,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

```

##### 步骤六：启动karma
```
karma start
```

由于这次加上了配置文件karma.conf.js，因此Karma会按照配置文件中指定的参数执行操作了，由于我们配置的是在Chrome中测试，因此Karma会自动启动Chrome实例，并运行测试用例：(**如果在无头浏览器可以直接用PhantomJS，切记它不支持es6语法**)

<a data-fancybox title="" href="https://images0.cnblogs.com/blog2015/455688/201505/300040234542993.png">![](https://images0.cnblogs.com/blog2015/455688/201505/300040234542993.png)</a>

（如果我们点击上图中的debug按钮，进入debug.html并按F12打开开发者工具，选择Console窗口，我们将能看到jasmine的执行日志）：

<a data-fancybox title="" href="https://images0.cnblogs.com/blog2015/455688/201505/300042547044534.png">![](https://images0.cnblogs.com/blog2015/455688/201505/300042547044534.png)</a>

在这个页面，我们可以在源码中设置断点，检查测试。

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/13475/201602/13475-20160222124607338-1321324004.png">![](https://images2015.cnblogs.com/blog/13475/201602/13475-20160222124607338-1321324004.png)</a>

##### 代码覆盖率检查

如果你还想查看测试的代码覆盖率，我们可以安装```karma-coverage```插件，安装命令为：

```
npm install karma-coverage
```

**修改karma.conf.js，增加覆盖率的配置**

```
// preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '../TestFiles/test.js':'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],
    
    coverageReporter:{
        type:'html',
        dir:'../TestFiles/coverage/'
    },
```

这样就完成了karma 集成 Jasmine 进行单元测试已经生成覆盖率检查

------------

## e2e测试

**端对端的测试 需要人点，用程序代替**

比如：
### rize
[官方文档](https://rize.js.org/#getting-started)

[github源码地址](https://github.com/g-plane/rize)

[更多api查看](https://rize.js.org/api/classes/_index_.rize.html)

--------------------------

### NightWatch
 - Nightwatch.js是一个用于Web应用程序和网站的自动化测试框架，**他是专门做端对端的**

 - 使用Node.js编写并使用W3C WebDriver API（以前称为Selenium WebDriver）。

 - 它是一个完整的浏览器（端到端）测试解决方案，旨在简化设置持续集成和编写自动化测试的过程。

 - Nightwatch也可用于编写Node.js单元测试
[官方文档](https://nightwatchjs.org)

> 入门教程

### 介绍

Write End-to-End tests in Node.js quickly and effortlessly that run against a Selenium/WebDriver server.（在node.js中快速、轻松地编写端到端测试，这些测试在Selenium/WebDriver服务器上运行。）

### 安装Nightwatch

- 在当前项目中安装

```
npm i -D nightwatch
```
- 全局安装

```
npm i -g nightwatch
```

### 安装webDriver

Nightwatch有两种方式去调起浏览器跑测试

1.  通过Selenium，调各个浏览器的webDriver唤起浏览器。这个需要安装java、Selenium、webDriver(无头浏览器)

2.  直接通过各家浏览器的webDriver调起对应的浏览器。

我选择了第二种，这里就需要去安装的chrome的webDriver，有个npm包帮我们做了这个事

```
npm i -D chromedriver
```

直接安装chromedriver会提示安装不成功，安装的时候可能会遇到'网络问题'，在根目录下新建一个.npmrc文件,需要手动指定镜像地址

```
chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver
```

相当于

```
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedrive -D
```

### 配置文件nightwatch.json

Nightwatch启动的时候默认会去加载nightwatch.json配置文件，nightwatch.js 与 nightwatch.conf.js也行，这里贴上我的配置文件，并对一些常用的字段做一下说明，其余看文档就行

```
{
    "src_folders": ["./tests/nightwatch"],//指定测试用例的文件夹，里面所有的js文件测试的时候都会被执行
    "output_folder": "./docs/nightwatch",//指定产生报告存放的路径
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "",
    "globals_path": "./webDriver.js",//全局模块路径，nightwatch启动时还会去加载这个路径下的模块，比如我们刚刚下载了Chromedriver，我们需要写个模块文件，简单包装一下暴露出来被nightwatch加载。 这是我根目录下的webDriver.js文件，这样的话，nightwatch就能通过这个文件调webdriver然后启动浏览器了
  
    "selenium": {
      "start_process": false
    },
  
    "test_settings": {
      "default": {
        "selenium_port": 9515,
        "selenium_host": "localhost",
        "default_path_prefix": "",
        "screenshots": {
                "enabled": true,//是否开启截图，若为false，截图不成功
                "path": ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",//默认使用什么浏览器测试
          "chromeOptions": {
            "args": [
              "--no-sandbox",
              "user-data-dir=/Users/shenshuaijia/Library/Application Support/Google/Chrome"
            ]
          },
          "acceptSslCerts": true
        },
        "globals": {
          "domain": "http://xxx.com"
        }
      }
    }
  }
  
```
* globals_path
```
const chromedriver = require('chromedriver')
    module.exports = {
      before: function(done) {
        chromedriver.start()
        done()
      },
      after: function(done) {
        chromedriver.stop()
        done()
      }
    }
``` 
*   selenium： selenium的配置，因为我选择了第二中安装方式，所以要禁用掉selenium;如果开启会有这些选项
```
"start_process": true,//是否自动开启selenium服务
        "server_path": "./selenium-server-standalone-3.7.1.jar",//selenium jar路径
        "log_path": "",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "./chromedriver",  //driver路径
            "webdriver.gecko.driver": "",
            "webdriver.edge.driver": ""
        }
```

*   test_settings：启动测试时的一些配置，每一个key对应一套配置，比如通过命令`nightwatch --env default`使用default那一套配置，也可以用`nightwatch --env integration`来运行integration那套配置，但需要事先在test_settings中有配置
*   desiredCapabilities：这个是对Chromdriver能力配置，具体的话，就需要查看Chromdriver的文档

这里我遇到了一个比较特殊的情况，我需要使用平时使用chrome留下的cookie，而不是完全的沙盒模式，所以，我这里需要启动chromedriver的时候，指定加载chrome用户数据的文件夹`"user-data-dir=/Users/xxx/Library/Application Support/Google/Chrome"`，这样所有的登录信息都能在测试的时候被使用。

*   globals： 在测试的时候，也可以定义一下全局变量，方便测试的时候使用,这里我定义了一个domain，写测试的时候可以在`browser.globals.domain`获取

### 编写测试

在`test/ui`文件夹下新建一个测试文件`page.test.js`
```
module.exports = {
    'Search by baidu': function (client) {
        // 定义页面元素
        const searchInput = '#kw';
        const searchBtn = '#su';
        const resultContainer = '#container';
        // 启动浏览器并打开www.baidu.com
        client.url('http://baidu.com').maximizeWindow()
            // 确保输入框可以使用.
            .waitForElementVisible(searchInput, 5000)
            // 输入"nightwatch"然后搜索.
            .setValue(searchInput, 'nightwatch')
            .click(searchBtn)
            .waitForElementVisible(resultContainer, 1000)
            // 截屏 
            .saveScreenshot('reports/answers.png')
            .end()
    }
}
```   

nightwatch拥有比较优雅的测试写法。这里就是简单打开一个谷歌页面，往输入框输入nightwatch然后点击按钮, 截屏。记住所有的测试完成后需要调end方法来退出浏览量。


nightwatch也可以定义一些钩子函数

```
module.exports = {
      before : function(browser) {
        console.log('Setting up...');
      },

      after : function(browser) {
        console.log('Closing down...');
      },

      beforeEach : function(browser) {

      },

      afterEach : function() {

      },

      'step one' : function (browser) {
        browser
         // ...
      },

      'step two' : function (browser) {
        browser
        // ...
          .end();
      }
    };
```
### 运行测试
`
```
nightwatch
```

这里我遇到了一个奇怪的问题，可能是由于我指定了用户目录的关系，我需要先完全退出chrome，在跑测试，不然跑测试新打开的窗口不会按代码里写的测试去走

### 总结

这里我只是简单介绍一下nightwatch，更加详细具体的使用还是需要参考官方文档。有了ui自动化测试以后，我们可以简单的做一些回归测试，比如，改了某些代码以后，把所有的页面都跑一遍，看看控制台有没有报错，比点点点方便多了

-------------------------

### puppeteer
具体的操作可查看npm
[npm介绍](https://www.npmjs.com/package/puppeteer)

-------------

### jest
<!-- 没弄有空的时候弄一下 -->

---------------

## UI测试
参考文档：

* [Web UI回归测试 -- BackstopJS 入门](https://www.cnblogs.com/zzd0916/p/10076552.html)

* [浅谈backstop.js](https://blog.csdn.net/sinat_36422236/article/details/84988219)

```
{
  //测试用例id，用于BackstopJS管理和为文件命名
  "id": "backstop_prod_test",
  //测试视口，就是配置各种分辨率
  "viewports": [
    {
      "name": "phone",
      "width": 320,
      "height": 480
    }],
  //在执行所有脚本前、页面加载后执行的脚本。通过他我们可以执行用express做一个静态服务器
  "onBeforeScript": "onBefore.js",
  "onReadyScript": "onReady.js",
  //测试用例  可以配置多个测试用例
  /**
   *scenarios可以配置多个测试用例。
   *url指定了需要测试页面的地址；
   *selector指定要测试的区域，
   *如果整个页面都是测试区域可以直接给document或者是body。
  */
  "scenarios": [
    {
      //测试用例名称
      "label": "homepage",
      //测试的地址
      "url": "https://garris.github.io/BackstopJS/",
      //测试的区域，支持css选择器，然后BackstopJS会将选择器指定的地方截屏
      "selectors": [
        ".class",
        "#id"
      ],
      "selectorExpansion": true,
      "hideSelectors": [],
      "removeSelectors": [],
      "readyEvent": null,
      "delay": 500,
      "misMatchThreshold" : 0.1,
      //在各种的测试用例执行时、页面加载后前行,我们可以把我们对页面操作的模拟脚本放进onReady.js中
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    }
  ],
  //测试图片的输出路径
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "casper_scripts": "backstop_data/casper_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  //测试用的浏览器或模拟器，这里用的是PhantomJS
  "engine": "phantomjs",
  //报告的形式，支持命令行和浏览器两种
  "report": ["browser"],
  //是否打印测试日志
  "debug": false
}
```

-------------------

## 阿里巴巴UIrecorder测试框架

他的整个安装流程
* 安装uirecorder
* 用工具（UI Recorder）录制测试脚本 uirecorder start
* 测试脚本的回放（各个浏览器）  
  * 启动java环境selenium-standalone start
  * 用mocha测试回放

`UI Recorder` 是一款零成本UI自动化录制工具，类似于[Selenium IDE](http://docs.seleniumhq.org/projects/ide/).

`UI Recorder` 要比Selenium IDE更加强大!

UI Recorder 非常简单易用.

1.  官方网站:&nbsp;[http://uirecorder.com/](http://uirecorder.com/)
2.  语言切换:&nbsp;[English](https://github.com/alibaba/uirecorder/blob/master/README.md),&nbsp;[中文](https://github.com/alibaba/uirecorder/blob/master/README_zh-cn.md)
3.  变更日志:&nbsp;[CHANGE](https://github.com/alibaba/uirecorder/blob/master/CHANGE.md)
4.  视频教程：[PC中文教程](http://v.youku.com/v_show/id_XMTY4NTk5NjI4MA==.html) 
<span id="OSC_h1_2"></span>

### **功能**

1.  支持所有用户行为: 键盘事件, 鼠标事件, alert, 文件上传, 拖放, svg, shadow dom
2.  支持无线native app(Android, iOS)录制, 基于macaca实现:&nbsp;[https://macacajs.com/](https://macacajs.com/)
3.  无干扰录制: 和正常测试无任何区别，无需任何交互
4.  录制用例存储在本地
5.  支持丰富的断言类型: val,text,displayed,enabled,selected,attr,css,url,title,cookie,localStorage,sessionStorage
6.  支持图片对比
7.  支持强大的变量字符串
8.  支持公共测试用例: 允许用例中动态调用另外一个
9.  支持并发测试
10.  支持多国语言: 英文, 简体中文, 繁体中文
11.  支持单步截图
12.  支持HTML报告和JUnit报告
13.  全系统支持: Windows, Mac, Linux
14.  基于Nodejs的测试用例:&nbsp;[jWebDriver](http://jwebdriver.com/) 
<span id="OSC_h1_3"></span>

### **安装uirecorder**

_说明：这里是基于win的安装。mac系统与之思路类似。_

<span id="OSC_h2_4"></span>

#### **1、安装node.js（版本号 &gt;= v7.x）**

node官网：https://nodejs.org/en/download/

或者直接下载安装包：https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi

安装时一路next就行了。安装成功之后，验证一下安装是否成功：

打开cmd，输入node -v，然后回车

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/b12476cf8ed666ed7d3b63dd336b6f37d72.jpg">![](https://oscimg.oschina.net/oscnet/b12476cf8ed666ed7d3b63dd336b6f37d72.jpg)</a>[](https://oscimg.oschina.net/oscnet/b12476cf8ed666ed7d3b63dd336b6f37d72.jpg)（看到版本号，就说明安装成功。这一步一般不会出问题。）

#### **2、安装 chrome（谷歌浏览器）**

chrome官网：[https://www.google.com/chrome/](https://www.google.com/chrome/)&nbsp; &nbsp; （访问此地址需要‘帆樯’）

或者直接下载百度云上chrome安装包：[https://pan.baidu.com/s/1RU76eGWOBPJD2EHfE64Bsw](https://pan.baidu.com/s/1RU76eGWOBPJD2EHfE64Bsw)

#### **3、安装 UI Recorder**

```
npm install uirecorder mocha -g
```

<span style="color:#e74c3c">备注：如果下载不成功，很大可能是因为数据包下载不下来（原因你懂得）。使用</span>[<span style="color:#3498db">淘宝的npm镜像</span>](https://npm.taobao.org/)<span style="color:#e74c3c">下载：</span>

使用**cnpm命令**代替npm：

```
`npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install uirecorder mocha -g`
```

#### **4、检查浏览器与driver版本是否对应**

下载成功之后，需要查看一下chromedirver的版本和chrom版本是否对应，如果版本不对应，是无法驱动器浏览器进行录制和回放的。

[selenium之 chromedriver与chrome版本映射表](https://blog.csdn.net/huilan_same/article/details/51896672)

a)查看chrome版本：[chrome://settings/help](http://chrome://settings/help)

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/fdff2cb8f5e03b919b9fdd046b2eb040ea1.jpg">![](https://oscimg.oschina.net/oscnet/fdff2cb8f5e03b919b9fdd046b2eb040ea1.jpg)</a>[](https://oscimg.oschina.net/oscnet/fdff2cb8f5e03b919b9fdd046b2eb040ea1.jpg)<span style="color:#7f8c8d">（我的chrome是68版本）</span>

b)查看chromedierver的版本：
```
npm ls chromedriver -g
```

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/b555ce8f1f9f9fb3373aa07f6a8c5beda6b.jpg">![](https://oscimg.oschina.net/oscnet/b555ce8f1f9f9fb3373aa07f6a8c5beda6b.jpg)</a>[](https://oscimg.oschina.net/oscnet/b555ce8f1f9f9fb3373aa07f6a8c5beda6b.jpg)

可以看到uirecorder是2.5.42版本，uirecorder依赖的chromedriver是2.41.0版本

c)根据[selenium之 chromedriver与chrome版本映射表](https://blog.csdn.net/huilan_same/article/details/51896672)，应该下载2.40.0版本的chromedriver：

<span style="color:#999999">备注：我自己的chrome是68版本的，所以要下载chromederiver@2.40.0版本的。在我自己的电脑上，68版本的chrome使用2.41.0版本的chromedriver，无法录制。换成2.40.0版本的chromedriver一切正常。</span>_

打开**C:\Users\{userNmae}\AppData\Roaming\npm\node_modules\uirecorder\package.json**

<span style="color:#999999">(把{userName}替换成你的用户名，就能找到这个文件了。)</span>_

修改uirecorder依赖chromedriver的版本号：

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/7c7e7f934f157cdc949fd3facd13b92b899.jpg">![](https://oscimg.oschina.net/oscnet/7c7e7f934f157cdc949fd3facd13b92b899.jpg)</a>[](https://oscimg.oschina.net/oscnet/7c7e7f934f157cdc949fd3facd13b92b899.jpg)


然后在cmd执行：
```
cd C:\Users\AnXiaole\AppData\Roaming\npm\node_modules\uirecorder

cnpm install
```
<span class="hljs-comment">// 更新uirecorder依赖的chromedriver为2.40.0版本</span>

```npm ls chromedriver -g```   

<span class="hljs-comment">// 查看chromedriver的版本</span>

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/b00e7d613d892e718a061aac522167a49da.jpg">![](https://oscimg.oschina.net/oscnet/b00e7d613d892e718a061aac522167a49da.jpg)</a>[图片地址](https://oscimg.oschina.net/oscnet/b00e7d613d892e718a061aac522167a49da.jpg)

<span id="OSC_h2_8"></span>

#### **5、到此，如果都没有报错，说明安装成功了。**

**<span style="color:#c0392b">上一步的安装指定版本的chromedriver特别重要</span>**，因为[**不同版本的chrome需要相应版本的chromedriver才能驱动起来**](http://blog.csdn.net/huilan_same/article/details/51896672)。**<span style="color:#c0392b">如果安装的版本不对应，录制或者回放的时候，一般都不会成功。</span>**



#### **开始录制**

##### **1、初始化工程**
```
`mkdir project_name                         // 创建工作目录

cd project_name                            // 进入到工作目录中,以下的命令都是在此工作目录中执行

uirecorder init                            // 初始化uirecorder`

```

备注：如果运行uirecorder init时报出如下格式的错误：

<pre>`<span class="hljs-symbol">C:</span>\uirecorder_workspaces\project_name&gt;uirecorder init
<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:549</span>
throw err;
^

<span class="hljs-symbol">Error:</span> Cannot find <span class="hljs-class"><span class="hljs-keyword">module</span> '<span class="hljs-title">co</span>-<span class="hljs-title">thread</span>'</span>
at Function.Module._resolveFilename (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:547:15)</span>
at Function.Module._load (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:474:25)</span>
at Module.<span class="hljs-keyword">require</span> (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:596:17)</span>
at <span class="hljs-keyword">require</span> (internal/<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:11:18)</span>
at Object.&lt;anonymous&gt; (<span class="hljs-symbol">C:</span>\Users\AnXiaole\AppData\Roaming\npm\node_modules\uirecorder\node_modules\_co-parallel@1.<span class="hljs-number">0</span>.<span class="hljs-number">0</span>@co-parallel\index.<span class="hljs-symbol">js:</span><span class="hljs-number">6</span><span class="hljs-symbol">:</span><span class="hljs-number">14</span>)
at Module._compile (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:652:30)</span>
at Object.Module._extensions..js (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:663:10)</span>
at Module.load (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:565:32)</span>
at tryModuleLoad (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:505:12)</span>
at Function.Module._load (<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">js</span>:497:3)</span>`</pre> 

就执行**cnpm install co-thread -g&nbsp; &nbsp; **这是因为在运行**uirecorder init**时，缺少了uirecorder依赖的co-thread包，所以用**cnpm**安装（install）一下co-thread。

<span style="color:#999999">_（编者注：如果运行此命令时报错说找不到cnpm命令，请看【3、安装 UI Recorder】小节）_</span>

安装完之后，再执行**uirecorder init**，此时有可能还报类似的错误，就继续使用**cnpm install [包名] -g**安装报错的那个依赖包。知道uirecorder init执行成功为止。

<span style="color:#7f8c8d">_（编者注：我在新的电脑安装uirecorder，大于缺失了10几个包，如此循环了十几次，是很正常的。）_</span>

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/0ac948f2e851c3bccb3bc7af24b14571b4b.jpg">![](https://oscimg.oschina.net/oscnet/0ac948f2e851c3bccb3bc7af24b14571b4b.jpg)</a>

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/0ac948f2e851c3bccb3bc7af24b14571b4b.jpg">![](https://oscimg.oschina.net/oscnet/0ac948f2e851c3bccb3bc7af24b14571b4b.jpg)</a>

##### **2、开始录制测试用例**

启动uirecorder录制，并且录制的脚本保存到工作目录下的sample/test.spec.js&nbsp; &nbsp; &nbsp;<span style="color:#7f8c8d">_（我这里的工作目录就是project_name）_</span>

<pre>`uirecorder start`</pre> 

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/ceec348ff6cbbbc313efce0ff514d10db43.jpg">![](https://oscimg.oschina.net/oscnet/ceec348ff6cbbbc313efce0ff514d10db43.jpg)</a>

此时会打开两个chrome浏览器，一个用来校验的，一个用来录制脚本的：

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/b2266cd36c6f08dc40593f5d2478a7e80f3.jpg">![](https://oscimg.oschina.net/oscnet/b2266cd36c6f08dc40593f5d2478a7e80f3.jpg)</a>

我们去百度，搜索一下uirecorder。

1）在上面输入框中输入www.baidu.com,点击开始录制。

2）然后在百度上一顿操作，随便点。我请客。&gt;_&lt;，然后，不想玩了，就点击左下角的**结束录制。**

3）然后录制的浏览器会自动关闭，然后，cmd展示：

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/14ec681461a57d31033fc71864840909c0f.jpg">![](https://oscimg.oschina.net/oscnet/14ec681461a57d31033fc71864840909c0f.jpg)</a>

4）具体如何录制，如何使用断言，这些，官方提供了视频教程：视频教程：[PC中文教程](http://v.youku.com/v_show/id_XMTY4NTk5NjI4MA==.html)

<span id="OSC_h1_12"></span>

#### **回放**

回放，又叫运行测试用例。执行下面命令运行sample/test.spec.js测试用例<span style="color:#7f8c8d">_（即回放刚才的一顿操作）_</span>

<pre>`run.bat sample/test.spec.js`</pre> 

此时报错了：

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/2697bd426950cbe68cfcc5005f00366df2e.jpg">![](https://oscimg.oschina.net/oscnet/2697bd426950cbe68cfcc5005f00366df2e.jpg)</a>

原因：回放的时候，需要运行**selenium-standalone**，所以重新打开一个cmd，运行：

_说明：下面前两个命令为**安装selenium-standalone**的，如果已经安装过**selenium-standalone**，就不用再运行前两个命令了。_

<pre>`cnpm <span class="hljs-keyword">install</span> selenium-<span class="hljs-keyword">standalone</span>@latest -g
selenium-<span class="hljs-keyword">standalone</span> <span class="hljs-keyword">install</span>                    // 运行这个需要<span class="hljs-keyword">java</span>，安装<span class="hljs-keyword">java</span>自行百度。最低也要安装java8
selenium-<span class="hljs-keyword">standalone</span> <span class="hljs-keyword">start</span>`</pre> 

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/9cc3df9cf1ad8f85f3c84647e975c70037c.jpg">![](https://oscimg.oschina.net/oscnet/9cc3df9cf1ad8f85f3c84647e975c70037c.jpg)</a>



安装好java8，看一下版本：

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/021504b533dc5e14c1c30836b9614047681.jpg">![](https://oscimg.oschina.net/oscnet/021504b533dc5e14c1c30836b9614047681.jpg)</a>

然后在运行之前的命令：**selenium-standalone install，则报错：**

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/315ce459b1bba93cc2576961025a7e339b9.jpg">![](https://oscimg.oschina.net/oscnet/315ce459b1bba93cc2576961025a7e339b9.jpg)</a>

或者去百度云下载：[百度云盘地址](https://pan.baidu.com/s/1ggpgZ7jQp78xBbW6DR8aqQ)，下载之后，保存到指定位置。并且正确命名文件名称。

把文件下载下来，并放到指定的目录中，并重命名之后，执行**selenium-standalone start&nbsp; &nbsp;&nbsp;**，入股看到下图，Selenium started，就说明启动成功了。

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/3d1f2b56a5c2d6a9d59d90f8f07118ad821.jpg">![](https://oscimg.oschina.net/oscnet/3d1f2b56a5c2d6a9d59d90f8f07118ad821.jpg)</a>

<span style="color:#7f8c8d">_如果报下面的错误，说明是下载的driver没有放到指定文件夹下，或者是文件命名不对。要该文件的名称的。_</span>
```
C:\Users\AnXiaole\AppData\Roaming\npm\node_modules\selenium-standalone\bin\selenium-standalone:79
throw err;
^

Error: Missing C:\Users\AnXiaole\AppData\Roaming\npm\node_modules\selenium-standalone\.selenium\chromedriver\2.40-x64-chromedriver      
//备注：像这个，需要把zip中的driver解压并重命名为2.40-x64-chromedriver（不要带.exe）
at C:\Users\AnXiaole\AppData\Roaming\npm\node_modules\selenium-standalone\lib\check-paths-existence.js:15:20
at FSReqWrap.cb [as oncomplete] (fs.js:312:19)
```


启动了**selenium-standalone**，在**工作目录**下运行：**run.bat sample/test.spec.js**

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/84c8f80a1d3068f2a5ce9a2ce5e54b6b54c.jpg">![](https://oscimg.oschina.net/oscnet/84c8f80a1d3068f2a5ce9a2ce5e54b6b54c.jpg)</a>

查看一下测试用例报告：使用浏览器打开，工作目录下的**reports\index.html：**

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/733250e49729987865165f6afc0a04b85b8.jpg">![](https://oscimg.oschina.net/oscnet/733250e49729987865165f6afc0a04b85b8.jpg)</a>

#### 上传文件

UI Recorder仅支持Native文件上传, 不支持FLASH上传

直接点击“选择文件”按钮或点击“Upload file”, 占位按钮必需要用role或data-role标注为upload

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/d0f83f8f7d9dc5e236cf64cf41a3630daf9.jpg">![](https://oscimg.oschina.net/oscnet/d0f83f8f7d9dc5e236cf64cf41a3630daf9.jpg)</a>

上传的文件必需保存在/uploadfiles/文件夹中。

<a data-fancybox title="" href="https://oscimg.oschina.net/oscnet/48d3f9958f4c4529a8a33405ef15773993f.jpg">![](https://oscimg.oschina.net/oscnet/48d3f9958f4c4529a8a33405ef15773993f.jpg)</a>

<span id="OSC_h1_13"></span>

#### **总结**

到这里，uirecorder已经安装、录制、回放完毕。

遇到的坑在生成报表的时候一定要注意mocha的版本有时候会不执行mochawesome命令

但是大家如果要用这个工具，一定要明白，此工具的作用在哪里。是做接口测试还是web测试？是做性能测试还是做功能测试？是针对新需求做测试还是针对以往需求做测试？<span style="color:#7f8c8d">_（编者注：这三个问题一定要想明白。）_</span>

有人说，用这个工具录制，很麻烦，还不如自己手动做功能测试呢。其实，是因为没有真正明白此工具到底的作用和价值在哪里，说到底，还是没有想明白或者是没有相关上面三个问题。

在这里，我也不做过多说明 ，我是做开发的，可能对测试了解也是皮毛，但是，我还是相信一句话：**那些重复的，没有挑战性的工作，一定要想办法交给工具、自动化去完成！工作的意义就是接受挑战并提升自己。**

##### 录制中禁止如下操作！

1、禁止直接手动修改地址栏中的URL

2、禁止使用TAB切换焦点

3、不要使用双击, WebDriver兼容性不好

4、不要使用鼠标选择部分文本, WebDriver兼容性不好

5、不要手动切换至背景窗口

6、不要点击非关键区域, 仅录制关键步骤

<span id="OSC_h1_14"></span>

#### **参考**

[淘宝 NPM 镜像](https://npm.taobao.org/)

[修改 下载仓库为淘宝镜像](https://blog.csdn.net/adc_god/article/details/77989869)

[selenium-standalone](https://www.npmjs.com/package/selenium-standalone#selenium-standalone)

[Macaca 自动化框架 [Python 系列]](https://testerhome.com/topics/7898)

[UI Recorder 功能详解](https://www.cnblogs.com/xiaoxi-3-/p/7501288.html)

<span id="OSC_h2_15"></span>


----------------------
## service测试


--------------------------
# 总结

* 单元测试
  * 小的函数与组件
* 接口测试
  * 确保数据
* e2e测试
  * 确保功能
* ui测试
  * 确保样式
* f2etest测试
* 冒烟测试
* 黑盒测试