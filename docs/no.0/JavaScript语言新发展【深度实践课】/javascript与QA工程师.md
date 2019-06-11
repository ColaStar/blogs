测试核心概念
----------------------
为什么要学习这些？ 从过程式编程到更高端编程之路上第一个要掌握的东西。
开发项目，测试脚本。自己对自己测试的一套工具。

单元测试
----------------------------------------------------------------------------------------------------------
spc文件自己对自己测试的工具，需要对所有产出的东西进行测试

unit-test

- 目的：单元测试能够让开发者明确知道代码结果

- 原则：单一职责，接口抽象，层次分离。

- 方言：**管好自己事。能抽象出来的东西，就抽象。把逻辑从函数里抽出去，保证每个function是最小的单元。**

- 断言库：保证最小单元是否正常运行监测方法。

单元测试不会真正侵入你的代码，有一种编程方式叫做面向切面编程。面向切面编程是我们要做一些事情的核心。

- **测试风格**：测试驱动开发（Test-Driven Development,TDD）、（Behavior Driven Development，BBD）行为驱动开发均是敏捷开发方法论。

1.TDD关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert('tobi'== user.name)

2.BDD关注整体行为是否符合整体预期，编写的每一行代码都有目的的提供一个全面的测试用例，配合it利用自然语言expect(1)执行

- **单元测试框架**
better-assert(TDD断言库github 190star 19fork)  
should.js(BDD断言库Github 2295star 194fork)  
建议用集成TDD与BDD的库  
expect.js(BDD断言库Github 1391star 162fork)  
chai.js(TDD BDD双模Github 2823star 271fork)  
Jasmine.js(BDD Github10723star1680fork)  
node.js本身集成的单元测试  

- **单元测试运行流程**  
```
每一个测试用例组通过describe进行设置  
before(流程发起之前，单个测试用例开始前)->beforeEach(每一个都会遍历一遍，每一个测试用例开始前)->it(对你测试运例的应用，就是人家暴露出来的方法的应用，定义测试用例 并利用断言库进行，设置chai如:expect(x).to.equal(true);异步mocha的库，以上术语就叫mock)->after（流程发起结束）->afterEach（结束后每次遍历）
```

- **自动化单元测试**   
这里用的自动化测试工具是**karma**，karma自动化runner集成PhantomJS无刷新；  
```
npm install -g karma

npm install karma-cli --save-dev

npm install karma-chrome-launcher --save-dev

npm install karma-phantomjs-launcher --save-dev

npm install karma-mocha --save-dev

npm install karma-cha安装断言库
```
- **报告和单测覆盖率检查**
```
npm install karma-coverage --save-dev

coverageReporter:{
    type:'html',dir:'coverage/'
}//配制代码覆盖率测试率生成结果
```

性能测试
----------------------------------------------------------------------------------------------------------

> 基准测试
- 1.面向切面编程AOP无侵入式统计
- 2.Benchmark基准测试方法，它并不是简单地统计执行多少次测试代码后对比时间，它对测试有着严密的抽样过程。执行多少次取决于采样到的数据能否完成统计。根据统计次数计算方差。（硬币抛）

> 压力测试
- 1.对网络接口做压力测试需要检查的几个常用指标有吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力（12306吞吐率、）
- 2.PV网站当日访问人数UV独立访问人数。PV每天几十万甚至上百万就是需要考虑压力测试。换算公式QPS = PV/t  ps:1000000/10*60*60 = 27.7(100万请求集中在10个小时，服务器每秒处理27.7个业务请求)（养猪）
- 3.常用的压力测试工具是ab、siege、http_load。
```
ab -c 100 -n   100http://localhost:8080每秒持续发出28个请求
Request per second 表示服务器每秒处理请求数即QPS
Failed requests表示此次请求就结束  请求数理论上压力测压值越大增加

```

安全测试
---------------------------------------------------------------------------------------------------------

分享书籍：[web前端黑客解密](./web前端黑客技术揭秘.pdf)
- XSS
- SQL    例：万能密码1=1
- CSRF

功能测试
---------------------------------------------------------------------------------------------------------

> **用户真实性检查**

- selnium-webdriver自动化牛皮的工具，专门为node做的。
- protractor selenium-standalone  ng的专门测试用例能记录所有的log
- WEBDRIVERI/O   [http://webdriver.io](http://webdriver.io)
- 冒烟测试SmokeTest自由测试的一种，找到一个BUG开发修复，然后专门对此BUG，优点节省时间防止build失败，缺点覆盖率极低。
- 回归测试
修改一处对整体功能全部测试，一般配合自动化测试。

JsLint&Hint
-----------------------------------------------------------------------------------------------------------
- 目的:检测JavaScript代码标准
- 原因：JavaScript代码诡异，保证团队代码规范
- lint：http://www.jslint.com/
- hint:http://wwww.jshint.com/
- 搭配自动化任务管理工具，完善自动化测试grunt-jsint、grunt-jslint