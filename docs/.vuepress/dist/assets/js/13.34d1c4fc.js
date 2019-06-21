(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{167:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"测试核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试核心概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试核心概念")]),a._v(" "),t("p",[a._v("为什么要学习这些？ 从过程式编程到更高端编程之路上第一个要掌握的东西。\n开发项目，测试脚本。自己对自己测试的一套工具。")]),a._v(" "),t("h2",{attrs:{id:"单元测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单元测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 单元测试")]),a._v(" "),t("p",[a._v("spc文件自己对自己测试的工具，需要对所有产出的东西进行测试")]),a._v(" "),t("p",[a._v("unit-test")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("目的：单元测试能够让开发者明确知道代码结果")])]),a._v(" "),t("li",[t("p",[a._v("原则：单一职责，接口抽象，层次分离。")])]),a._v(" "),t("li",[t("p",[a._v("方言："),t("strong",[a._v("管好自己事。能抽象出来的东西，就抽象。把逻辑从函数里抽出去，保证每个function是最小的单元。")])])]),a._v(" "),t("li",[t("p",[a._v("断言库：保证最小单元是否正常运行监测方法。")])])]),a._v(" "),t("p",[a._v("单元测试不会真正侵入你的代码，有一种编程方式叫做面向切面编程。面向切面编程是我们要做一些事情的核心。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("测试风格")]),a._v("：测试驱动开发（Test-Driven Development,TDD）、（Behavior Driven Development，BBD）行为驱动开发均是敏捷开发方法论。")])]),a._v(" "),t("p",[a._v("1.TDD关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert('tobi'== user.name)")]),a._v(" "),t("p",[a._v("2.BDD关注整体行为是否符合整体预期，编写的每一行代码都有目的的提供一个全面的测试用例，配合it利用自然语言expect(1)执行")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("单元测试框架")]),a._v("\nbetter-assert(TDD断言库github 190star 19fork)"),t("br"),a._v("\nshould.js(BDD断言库Github 2295star 194fork)"),t("br"),a._v("\n建议用集成TDD与BDD的库"),t("br"),a._v("\nexpect.js(BDD断言库Github 1391star 162fork)"),t("br"),a._v("\nchai.js(TDD BDD双模Github 2823star 271fork)"),t("br"),a._v("\nJasmine.js(BDD Github10723star1680fork)"),t("br"),a._v("\nnode.js本身集成的单元测试")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("单元测试运行流程")])])])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("每一个测试用例组通过describe进行设置  \nbefore(流程发起之前，单个测试用例开始前)->beforeEach(每一个都会遍历一遍，每一个测试用例开始前)->it(对你测试运例的应用，就是人家暴露出来的方法的应用，定义测试用例 并利用断言库进行，设置chai如:expect(x).to.equal(true);异步mocha的库，以上术语就叫mock)->after（流程发起结束）->afterEach（结束后每次遍历）\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[t("strong",[a._v("自动化单元测试")]),t("br"),a._v("\n这里用的自动化测试工具是"),t("strong",[a._v("karma")]),a._v("，karma自动化runner集成PhantomJS无刷新；")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -g karma\n\nnpm install karma-cli --save-dev\n\nnpm install karma-chrome-launcher --save-dev\n\nnpm install karma-phantomjs-launcher --save-dev\n\nnpm install karma-mocha --save-dev\n\nnpm install karma-cha安装断言库\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("ul",[t("li",[t("strong",[a._v("报告和单测覆盖率检查")])])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install karma-coverage --save-dev\n\ncoverageReporter:{\n    type:'html',dir:'coverage/'\n}//配制代码覆盖率测试率生成结果\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"性能测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能测试")]),a._v(" "),t("blockquote",[t("p",[a._v("基准测试")])]),a._v(" "),t("ul",[t("li",[a._v("1.面向切面编程AOP无侵入式统计")]),a._v(" "),t("li",[a._v("2.Benchmark基准测试方法，它并不是简单地统计执行多少次测试代码后对比时间，它对测试有着严密的抽样过程。执行多少次取决于采样到的数据能否完成统计。根据统计次数计算方差。（硬币抛）")])]),a._v(" "),t("blockquote",[t("p",[a._v("压力测试")])]),a._v(" "),t("ul",[t("li",[a._v("1.对网络接口做压力测试需要检查的几个常用指标有吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力（12306吞吐率、）")]),a._v(" "),t("li",[a._v("2.PV网站当日访问人数UV独立访问人数。PV每天几十万甚至上百万就是需要考虑压力测试。换算公式QPS = PV/t  ps:1000000/10"),t("em",[a._v("60")]),a._v("60 = 27.7(100万请求集中在10个小时，服务器每秒处理27.7个业务请求)（养猪）")]),a._v(" "),t("li",[a._v("3.常用的压力测试工具是ab、siege、http_load。")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ab -c 100 -n   100http://localhost:8080每秒持续发出28个请求\nRequest per second 表示服务器每秒处理请求数即QPS\nFailed requests表示此次请求就结束  请求数理论上压力测压值越大增加\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"安全测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 安全测试")]),a._v(" "),t("p",[a._v("分享书籍："),t("a",{attrs:{href:"./web%E5%89%8D%E7%AB%AF%E9%BB%91%E5%AE%A2%E6%8A%80%E6%9C%AF%E6%8F%AD%E7%A7%98.pdf"}},[a._v("web前端黑客解密")])]),a._v(" "),t("ul",[t("li",[a._v("XSS")]),a._v(" "),t("li",[a._v("SQL    例：万能密码1=1")]),a._v(" "),t("li",[a._v("CSRF")])]),a._v(" "),t("h2",{attrs:{id:"功能测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 功能测试")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("用户真实性检查")])])]),a._v(" "),t("ul",[t("li",[a._v("selnium-webdriver自动化牛皮的工具，专门为node做的。")]),a._v(" "),t("li",[a._v("protractor selenium-standalone  ng的专门测试用例能记录所有的log")]),a._v(" "),t("li",[a._v("WEBDRIVERI/O   "),t("a",{attrs:{href:"http://webdriver.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://webdriver.io"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("冒烟测试SmokeTest自由测试的一种，找到一个BUG开发修复，然后专门对此BUG，优点节省时间防止build失败，缺点覆盖率极低。")]),a._v(" "),t("li",[a._v("回归测试\n修改一处对整体功能全部测试，一般配合自动化测试。")])]),a._v(" "),t("h2",{attrs:{id:"jslint-hint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jslint-hint","aria-hidden":"true"}},[a._v("#")]),a._v(" JsLint&Hint")]),a._v(" "),t("ul",[t("li",[a._v("目的:检测JavaScript代码标准")]),a._v(" "),t("li",[a._v("原因：JavaScript代码诡异，保证团队代码规范")]),a._v(" "),t("li",[a._v("lint：http://www.jslint.com/")]),a._v(" "),t("li",[a._v("hint:http://wwww.jshint.com/")]),a._v(" "),t("li",[a._v("搭配自动化任务管理工具，完善自动化测试grunt-jsint、grunt-jslint")])])])},[],!1,null,null,null);s.default=n.exports}}]);