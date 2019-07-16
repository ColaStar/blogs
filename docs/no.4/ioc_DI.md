# 前端中的 IoC 理念

IoC 的全称叫做 Inversion of Control，可翻译为为「控制反转」或「依赖倒置」，它主要包含了**三个准则**：
- 1.高层次模块不应该依赖低层次模块，俩者应该依赖抽象；
- 抽象不应该依赖于具体实现，具体实现应该依赖于抽象；
- 面向接口编程而不是面向实现编程。

## 目的

根据概念可以看到最主要的目的就是降低耦合，提高扩展性。

想象一下多个模块的场景：

![](ioc.png)

这里除了耦合之外，不同齿轮之间的依赖关系也是个头疼的问题，迭代个几个版本之后发现，这是什么东西，一动就有bug。。。。

所以IOC就是来解决上述问题的。
其常见方式是依赖注入和依赖查找。在js领域里面最出名的就是angular中大量使用了依赖注入。文字比较苍白，我们可以通过例子来看看。

## 例子一

```
//球队信息
class Team{
    constructor(){
       this.name = '火箭'
    }
}
//球员信息
class Player{
    constructor(){
        this.team = new Team()
    }
    info(){
      console.log(this.team.name)
    }
}
// 球员ym
let ym = new Player()
ym.info() // ‘火箭’
```
看起来挺好的，球员player依赖于某个球队RTeam
当调用的时候主动去加载球队即可。此时的控制权在player这里。

假如这个时候,球员发生交易了，球队信息更换了，转换到team2了。
这时候我们就需要去修改player里的代码了，因为球员那里直接写死了对Team的依赖，这种可扩展性是很差的。
这不是我们所想要的，需要重新思考下依赖关系处理了。
球员和球队之间非得这么直接粗暴的发生联系吗，
一个球员对应一个球队的话，未来会发生变化的可能性太大了，毕竟不止一个球队。

如果两者之间不直接发生联系，中间就需要一个中间模块来负责两者关系的处理
球员不关注球队从哪来，只要给到我就行了。
这样控制权就不是直接落在player这里了，这正是IOC的设计思路。

参照IOC的几条原则，我们进行下改进。

高层模块不应该依赖低层模块。两个都应该依赖抽象
这里player是高层模块，直接依赖了球队这个低级模块。所以我们将两者解耦，player不再直接依赖于该team这个class

抽象不应该依赖具体实现，具体实现应该依赖抽象
具体到这里来看我们的player模块不应该直接依赖具体team，而是通过构造函数将抽象的teaminfo实例传递进去，这样就解耦具体实现。

```
// 球队信息不依赖具体实现
// 面向接口即面向抽象编程
class TeamInfo {
    constructor(name) {
        this.name = name
    }
}
class Player {
    // 此处的参数，是teamInfo的一个实例，不直接依赖具体的实例
    // 面向抽象
    constructor(team) {
        this.team = team
    }
    info() {
        console.log(this.team.name)
    }
}
// 将依赖关系放到此处来管理，控制权也放到此处
// Player和TeamInfo之间不再有直接依赖
// 原本直接掌握teaminfo控制权的player不再直接依赖
// 将依赖控制，落在此处(第三方模块专门管理)即为控制反转
var ym = new Player(new TeamInfo('火箭'))
ym.info()
var kobe = new Player(new TeamInfo('湖人'))
kobe.info()
```
这里发现，TeamInfo和Player之间已经没有直接关联了，依赖关系统一放到getTeamInfo中。
所谓控制反转就如何上面一样，将依赖的控制权由player转移到其他地方即我们专门的依赖管理来做了。
这样再增加一个team3，改动也不大，复用就行了。
其中之间的关系，如下面这个图：

![](ioc2.png)

彼此不直接发生联系，依赖关系统一在中间模块来管理，更加清晰。

## 例子二App.use实现
假设需要构建一款应用叫 App，它包含一个路由模块 Router 和一个页面监控模块 Track，一开始可能会这么实现
```
// app.js
import Router from './modules/Router';
import Track from './modules/Track';
class App {
    constructor(options) {
        this.options = options;
        this.router = new Router();
        this.track = new Track();
        this.init();
    }
    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.router.to('home');
            this.track.tracking();
            this.options.onReady();
        });
    }
}

// index.js
import App from 'path/to/App';
new App({
    onReady() {
        // do something here...
    },
});
```

嗯，看起来没什么问题，但是实际应用中需求是非常多变的，可能需要给路由新增功能（比如实现 history 模式）或者更新配置（启用 history, new Router({ mode: 'history' })）。这就不得不在 App 内部去修改这两个模块，这是一个 INNER BREAKING 的操作，而对于之前测试通过了的 App 来说，也必须重新测试。

很明显，这不是一个好的应用结构，高层次的模块 App 依赖了两个低层次的模块 Router 和 Track，对低层次模块的修改都会影响高层次的模块 App。那么如何解决这个问题呢，解决方案就是接下来要讲述的 **依赖注入**`（Dependency Injection）`。

#### 什么是依赖注入？

所谓的依赖注入，简单来说就是把高层模块所依赖的模块通过传参的方式把依赖「注入」到模块内部，上面的代码可以通过依赖注入的方式最终改造成如下方式：

```
// app.js
class App {
    constructor(options) {
        this.options = options;
        this.router = options.router;
        this.track = options.track
        this.init();
    }
    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.router.to('home');
            this.track.tracking();
            this.options.onReady();
        });
    }
}
// index.js

import App from 'path/to/App';
import Router from './modules/Router';
import Track from './modules/Track';
new App({
    router: new Router(),
    track: new Track(),
    onReady() {
        // do something here...
    },
});
```
可以看到，通过依赖注入解决了上面所说的 `INNER BREAKING` 的问题，可以直接在 `App` 外部对各个模块进行修改而不影响内部。

是不是就万事大吉了？理想很丰满，但现实却是很骨感的，没过两天产品就给你提了一个新需求，给 `App `添加一个分享模块 `Share`。这样的话又回到了上面所提到的 `INNER BREAKING `的问题上：你不得不对 `App `模块进行修改加上一行 `this.share = options.share`，这明显不是我们所期望的。

虽然 App 通过依赖注入的方式在一定程度上解耦了与其他几个模块的依赖关系，但是还不够彻底，其中的 `this.router `和 `this.track` 等属性其实都还是对「具体实现的依赖，明显违背了 `IoC` 思想的准则，那如何进一步抽象 App 模块呢。

```
class App {
    static modules = []
    constructor(options) {
        this.options = options;
        this.init();
    }
    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.initModules();
            this.options.onReady(this);
        });
    }
    static use(module) {
        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
    }
    initModules() {
        App.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));

    }
}
```
经过改造后 App 内已经没有「具体实现」了，看不到任何业务代码了，那么如何使用 App 来管理我们的依赖呢：
```
// modules/Router.js
import Router from 'path/to/Router';
export default {
    init(app) {
        app.router = new Router(app.options.router);
        app.router.to('home');
    }
};

// modules/Track.js
import Track from 'path/to/Track';
export default {
    init(app) {
        app.track = new Track(app.options.track);
        app.track.tracking();
    }
};
// index.js
import App from 'path/to/App';
import Router from './modules/Router';
import Track from './modules/Track';
App.use([Router, Track]);
new App({
    router: {
        mode: 'history',
    },
    track: {
        // ...
    },
    onReady(app) {
        // app.options ...
    },
});
```
可以发现 `App` 模块在使用上也非常的方便，通过 `App.use()` 方法来「注入」依赖，在 `./modules/some-module.js` 中按照一定的「约定」去初始化相关配置，比如此时需要新增一个 `Share` 模块的话，无需到 `App `内部去修改内容：
```
// modules/Share.js
import Share from 'path/to/Share';
export default {
    init(app) {
        app.share = new Share();
        app.setShare = data => app.share.setShare(data);
    }
};
// index.js
App.use(Share);
new App({
    // ...
    onReady(app) {
        app.setShare({
            title: 'Hello IoC.',
            description: 'description here...',
            // some other data here...
        });
    }
});
```

直接在 `App` 外部去 `use` 这个 `Share` 模块即可，对模块的注入和配置极为方便。

那么在 `App` 内部到底做了哪些工作呢，首先从 `App.use` 方法说起：

```
class App {
    static modules = []
    static use(module) {
        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
    }
}
```
可以很清楚的发现，`App.use` 做了一件非常简单的事情，就是把依赖保存在了 `App.modules` 属性中，等待后续初始化模块的时候被调用。

接下来我们看一下模块初始化方法 `this.initModules()` 具体做了什么事情：
```
class App {
    initModules() {
        App.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));
    }
}
```

可以发现该方法同样做了一件非常简单的事情，就是遍历 `App.modules` 中所有的模块，判断模块是否包含 `init` 属性且该属性必须是一个函数，如果判断通过的话，该方法就会去执行模块的 `init` 方法并把 `App` 的实例 `this` 传入其中，以便在模块中引用它。

从这个方法中可以看出，要实现一个可以被 `App.use()` 的模块，就必须满足两个「约定」：

- 模块必须包含 init 属性

- init 必须是一个函数

这其实就是 `IoC `思想中对「面向接口编程 而不要面向实现编程」这一准则的很好的体现。`App `不关心模块具体实现了什么，只要满足对 接口 `init` 的「约定」就可以了。

`App `模块此时应该称之为「容器」比较合适了，跟业务已经没有任何关系了，它仅仅只是提供了一些方法来辅助管理注入的依赖和控制模块如何执行。

**控制反转**（`Inversion of Control`）是一种「思想」，**依赖注入**（`Dependency Injection`）则是这一思想的一种具体「实现方式」，而这里的 `App` 则是辅助依赖管理的一个「容器」。


是不是很熟悉，vue、koa、express里的app.use就是这么实现的
