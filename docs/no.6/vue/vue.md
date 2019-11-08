# Vue

## Vue源码架构分析
3年前的vue
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-star.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-star.png)</a>
现在的vue2019.8
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-star1.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-star1.png)</a>
## Vue源码目录结构
来一张源码截图：
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core目录.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core目录.png)</a>

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core目录1.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core目录1.png)</a>

我们再来看一下，core 文件夹下的目录：

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core目录2.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core目录2.png)</a>

结论：Vue.js 的组成是由 core + 对应的 "平台" 补充代码构成（独立构建和运行时构建
只是 platforms 下 web 平台的两种选择）。

> Vue2.0 在保持实现‘响应的数据绑定’的同时又引入了 ‘virtual-dom’,那么它是怎么实现的呢？

## 数据双向绑定

最浅显易懂的话：**数据变化更新视图，视图变化更新数据**
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-数据双向绑定.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-数据双向绑定.png)</a>

也就是说   

- 输入框内容变化时，data 中的数据同步变化。即 view => model 的变化。
- data 中的数据变化时，文本节点的内容同步变化。即 model => view 的变化。

要想实现这来个过程，关键点在于数据变化如何更新视图，因为视图变化更新数据我们可以通过事件监听的方式来实现。所以我们着重来讨论一下数据变化如何更新的视图。   


数据更新视图的关键点在于我们如何知道数据发生了变化，只要知道数据在什么时候变了，那么问题就变得迎刃而解了，我们只需要在数据变化的时候去通知视图更新即可。

### 让数据对象变得可观测 | 数据劫持 | Observe观察者

数据的每次读和写能够被我们看的见，即我们能够知道数据什么时候被读取了或数据什么时候被改写了，我们将其称为**可观测**。

要想实现数据的可观测我们需要借助H5的一个新的方法`Object.definePropty`来实现，在MDN上是这么介绍的

> Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

而在Vue中，Vue通过`Object.defineProperty()`设置对象的存储器属性，即`set`和`get`。这样可以拦截数据，做一些额外的事情。比如读取时，添加对该属性感兴趣的订阅者；设置/更新属性时，通知关系该属性的订阅者更新数据。

来上代码：
```
Object.defineProperty(vm, key, {
    get: function () {
        ///判断是否增加订阅者Watcher,这个watch而是全局唯一的
        if (Dep.target) {
        // JS的浏览器单线程特性，保证这个全局变量在同一时间内，
        //只会有同一个监听器使用
        dep.addSub(Dep.target);
        }
        return val;
    },
    set: function (newVal) {
        if (newVal === val) return;
        val = newVal;
        // 作为发布者发出通知
        dep.notify();
    }
})
```
但是当**observe一个数组时**：

对于一个对象，我们可以用这个来改写它属性的getter/setter，这样，当你改属性的值我就有办法监听到。但是对于数组就有问题了。

Vue的方法是，改写数组的push、pop等8个方法，让他们在执行之后通知我数组更新了（这种方法带来的后果就是你不能直接修改数组的长度或者通过下标去修改数组。参见[官网](http://v1-cn.vuejs.org/guide/list.html#)）。这样改进之后我就不需要对数组元素进行响应式处理，只是遇到数组的时候把数组的方法变异即可。于是在用户使用数组的push、pop等方法会改变数组本身的方法时，可以监听到数组变动。听起来这好像可以用继承的方式实现: 继承数组然后在这个子类的原型上附加上变异的方法。

但是你需要知道的是在es5及更低版本的js里，无法完美继承数组，主要原因是Array.call(this)时，Array根本不是像一般的构造函数那样对你传进去this进行改造，而是直接返回一个新的数组。所以一般的继承方式就没法实现了。参见[这篇文章](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/)，所以出现了新建一个iframe，然后直接拿那个iframe里的数组的原型进行修改，添加自定义方法，诸如此类的hack方法，在此按下不表。

但是如果当前浏览器里存在__proto__这个非标准属性的话（大部分都有），那又可以有方法继承，就是创建一个继承自Array.prototype的Object: Object.create(Array.prototype)，在这个继承了数组原生方法的对象上添加方法或者覆盖原有方法，然后创建一个数组，把这个数组的__proto__指向这个对象，这样这个数组的响应式的length属性又得以保留，又获得了新的方法，而且无侵入，不会改变本来的数组原型。

Vue就是基于这个思想，先判断__proto__能不能用(hasProto)，如果能用，则把那个一个继承自Array.prototype的并且添加了变异方法的Object (arrayMethods)，设置为当前数组的__proto__，完成改造，如果__proto__不能用，那么就只能遍历arrayMethods就一个个的把变异方法def到数组实例上面去，这种方法效率不高，所以优先使用改造__proto__的那个方法。

源码里后面那句this.observeArray非常简单，for遍历传进去的value，然后对每个元素执行observe，处理之前说的数组的元素为对象或者数组的情况。好了，对于数组的讨论先打住，至于数组的变异方法怎么通知我他进行了更改之类的我们不说了，我们先说清楚对象的情况，对象说清楚了，再去看[源码](https://github.com/Ma63d/vue-analysis/blob/master/vue%E6%BA%90%E7%A0%81%E6%B3%A8%E9%87%8A%E7%89%88/observer/array.js#L20-L49)就一目了然了。




### 依赖收集

完成了数据可观测，即我们知道了数据在什么时候被读写了，那么，我们酒客在数据读写的时候通知那些依赖对该数据的视图更新了，为了方便，我们需要现将所有依赖收集起来，一旦数据发生了变化，就通知视图更新。其实这就是典型的发布订阅者模式，数据变化为发布者也就是Object.definedPropty中set方法做的事情，依赖对象为**订阅者**Watcher

现在我们需要一个依赖收集容器，也就是消息订阅器Dep，用来容纳所有的订阅者。订阅者Dep主要负责收集订阅者，然后当数据变化的时候执行对应订阅者的更新函数。
```
// 订阅器：也就是存放所有watcher的地方，相当于助理
function Dep() {
    this.subs = [];
}

Dep.prototype = {
    //增加订阅者
    addsub: function (sub) {
        this.subs.push(sub)
    },
    // 通知订阅者更新
    notify: function () {
        //当调用notify方法的时候通知所有watch方法
        this.subs.map(sub=>{ 
            sub.update();
        })
    }
}
```

从代码上看，我们设计了一个订阅器Dep类，该类里面定义了一些属性和方法，这里需要特别注意的是它有一个静态属性 target，这是一个全局唯一 的Watcher，这是一个非常巧妙的设计，因为在同一时间只能有一个全局的 Watcher 被计算，另外它的自身属性 subs 也是 Watcher 的数组。

我们将订阅器Dep添加订阅者的操作设计在getter里面，这是为了让Watcher初始化时进行触发，因此需要判断是否要添加订阅者。在setter函数里面，如果数据变化，就会去通知所有订阅者，订阅者们就会去执行对应的更新的函数。
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-双向绑定1.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-双向绑定1.png)</a>
到此，订阅器Dep设计完毕，接下来，我们设计订阅者Watcher.

### 订阅者Watcher

订阅者`Watcher`在初始化的时候需要将自己添加到Dep中，那该如何添加呢？我们已经知道监听器Observe是在get函数中执行的添加订阅者的操作，所以我们只要在订阅者Watcher初始化的时候执行对应的get函数去执行添加订阅者的操作即可，那要如何触发get函数呢，只要获取一下对应的属性值就可以触发了，这里还有一个细节要进行处理，我们只要在订阅者Watcher初始化的时候才需要添加订阅者，所以我们需要在获取对应属性值时在Dep.target上缓存下订阅者，添加订阅器成功后，再讲其去掉就可以了，

```
var uid = 0;
// 订阅者
function Watcher(vm, node, name, type) {
    Dep.target = this;//缓存自己
    this.name = name;
    this.type = type;
    this.node = node;
    this.id = ++uid;
    this.vm = vm;
    //初始化更新
    this.update();
    Dep.target = null;//释放自己
}
Watcher.prototype = {
    update: function () {
        // 触发definedPropty添加订阅者
        this.get();
        if (!batcher) {
            var batcher = new Batcher()
        }
        batcher.push(this)//把每一个watcher放到任务队列里边
    },
    cb: function () {
        //   最终实际虚拟DOM处理的结果 只处理一次，其实就是把vm上绑定的属性值赋给节点内容
        this.node[this.type] = this.value;
    },
    //获取data的属性值
    get: function () {
        this.value = this.vm[this.name] //触发相应属性的get
    }
}
```
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-data.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-data.png)</a>
写到这是不是就完了，答案必然是没有，哈哈。如果我在一次初始化过程为data上的一个属性赋值100次，难道我们就要执行一百次么？

### 批处理

答案当然不是了，当初始化或者更新时，如果已经有了这一个watcher了，就不要加入队列了，这样不管一个数据更新一次，Vue都只更新一次dom也就是只执行一次cb方法。下边是一个简版的实现方式。
```
//批处理构造函数
function Batcher() {
    this.reset();
}
Batcher.prototype = {
    //初始化批处理
    reset: function () {
        this.has = {};
        this.queue = [];
        this.waiting = false
    },
    //将事件watcher工作添加到队列里边
    push: function (job) {
        let id = job.id;
        // / 如果已经有这个watcher了,
        //就不用加入队列了,这样不管一个数据更新多少次,Vue都只更新一次dom
        if (!this.has[id]) {
           this.queue.push(job);
           //设置这个watcher的ID 
           //主要是判断是否出现了循环更新:防止你更新我后我更新你,没完没了了
           this.has[id] = true;
           //waiting这个flag用于标记是否已经把
           //当前的这个watcher加入到异步任务队列当中了
            if(!this.waiting){
                this.waiting = true;
                if("Promise" in window){
                    Promise.resolve().then(()=>{
                        this.flush()
                    })
                }else{
                    setTimeout(()=>{
                        this.flush()
                    },0)
                }
            }
        }
    },
    //执行并且清空事件队列
    flush:function(){
        this.queue.forEach((job)=>{
            job.cb()//每个watch的执行方法
        })
        this.reset();
    }
}
```

### 编译器
关于编译这块vue分了两种类型，一种是文本节点，一种是元素节点
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-ast-text.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-ast-text.png)</a>
vue内置了这么多的指令， 这些指令都会抛出两个接口 bind 和 update，这两个接口 的作用是，编译的最后一步是 执行所有用到的指令的bind方 法，而 update 方法则是当 watcher 触发 update 时， Directive会触发指令的update 方法

Directive指令负责将model和DOM关联起来，在watcher触发下，它可以根据最新的数据重新编译模板，并最终重绘UI（vue2.0在重绘DOM时，采用虚拟DOM树机制，用最小的开销更新UI）

```
this._directives.push(descriptor,this,node,host,scope,frag)
```
- 1.所有 tag 为 true 的数据中的扩展对象拿出来生成一个Directive实例并添加到 _directives 中(_directives是当前vm中存储所有directive实例的地方)。
- 2.调用所有已绑定的指令的 bind 方法
- 3.实例化一个Watcher，将指令的update与watcher绑定在一起(这样就实现了 watcher接收到消息后触发的update方法，指令可以做出对应的更新视图操作)
- 4.调用指令的update，首次初始化视图
- 5.这里有一个点需要注意一下，实例化 Watcher 的时候，Watcher会将自己主动的推 入Dep依赖中

### 总结

实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core23.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/vue-core23.png)</a>



## 脏数据检查

当触发了指定事件后会进入脏数据检测，这时会调用 $digest 循环遍历所有的数据观察者，判断当前值是否和先前的值有区别，如果检测到变化的话，会调用 $watch 函数，然后再次调用 $digest 循环直到发现没有变化。循环至少为二次 ，至多为十次。

脏数据检测虽然存在低效的问题，但是不关心数据是通过什么方式改变的，都可以完成任务，但是这在 Vue 中的双向绑定是存在问题的。并且脏数据检测可以实现批量检测出更新的值，再去统一更新 UI，大大减少了操作 DOM 的次数。所以低效也是相对的，这就仁者见仁智者见智了。

## Vue.use原理

直接上源码
```
/ Vue源码文件路径：src/core/global-api/use.js

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
```
从源码中我们可以发现vue首先判断这个插件是否被注册过，不允许重复注册。
并且接收的`plugin`参数的限制是`Function | Object`两种类型。
对于这两种类型有不同的处理。
首先将我们传入的参数整理成数组 => `const args = toArray(arguments, 1)`。
(toArray源码)

```
// Vue源码文件路径：src/core/shared/util.js

export function toArray (list: any, start?: number): Array<any> {
  start = start || 0
  let i = list.length - start
  const ret: Array<any> = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return
```

再将Vue对象添加到这个数组的起始位置args.unshift(this),这里的this 指向Vue对象

如果我们传入的plugin(Vue.use的第一个参数)的install是一个方法。也就是说如果我们传入一个对象，对象中包含install方法，那么我们就调用这个plugin的install方法并将整理好的数组当成参数传入install方法中。 => `plugin.install.apply(plugin, args)`
如果我们传入的plugin就是一个函数,那么我们就直接调用这个函数并将整理好的数组当成参数传入。 => `plugin.apply(null, args)`
之后给这个插件添加至已经添加过的插件数组中，标示已经注册过 => `installedPlugins.push(plugin)`
最后返回Vue对象。

所以如果我们需要写一个vue的插件时，只需要写一个install方法就好。


## Proxy 与 Object.defineProperty 对比

`Object.defineProperty` 虽然已经能够实现双向绑定了，但是他还是有缺陷的。

只能对属性进行数据劫持，所以需要深度遍历整个对象
对于数组不能监听到数据的变化
虽然 Vue 中确实能检测到数组数据的变化，但是其实是使用了 `hack` 的办法，并且也是有缺陷的。
```
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
// hack 以下几个函数
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(function(method) {
  // 获得原生函数
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator(...args) {
    // 调用原生函数
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // 触发更新
    ob.dep.notify()
    return result
  })
})
```
反观 Proxy 就没以上的问题，原生支持监听数组变化，并且可以直接对整个对象进行拦截，所以 Vue 也将在下个大版本中使用 Proxy 替换 Object.defineProperty

```
let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}

let obj = { a: 1 }
let value
let p = onWatch(
  obj,
  v => {
    value = v
  },
  (target, property) => {
    console.log(`Get '${property}' = ${target[property]}`)
  }
)
p.a = 2 // bind `value` to `2`
p.a // -> Get 'a' = 2`
```

[Vue源码详细解析](https://segmentfault.com/a/1190000008500946)


## DOM diff算法

>（1）为什么有diff算法：

diff算法用来修改一小段dom，不会引起dom树的重绘
>（2）diff算法实现原理：

diff算法将virtual dom的某个节点数据改变后生成的新的vnode与旧的节点比较，并替换为新的node
diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。
>（3）过程：

当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。
参考链接：https://www.cnblogs.com/wind-lanyan/p/9061684.html

2.vue虚拟dom

 vdom完全是用js去实现，和宿主浏览器没有任何联系，此外得益于js的执行速度，将原本需要在真实dom进行的创建节点,删除节点,添加节点等一系列复杂的dom操作全部放到vdom中进行，这样就通过操作vdom来提高直接操作的dom的效率和性能。
<!-- ## Vue对Domdiff的优化方案 -->

<!-- 
## vue组件间的参数传递是如何做到的

### 


首先获取到data上的所有属性，通过H5的新属性Object.definePropty设置getter，和setter方法，当数据发生改变时更新视图，这样说也许也比较浅显，我们可以分析一下他的源码实现，实现数据双向绑定我们需要有这么几个过程，初始化时会主动触发一次get方法，把订阅者添加到订阅器内，
- 1.Oberver.js 它主要是去遍历data上的所有属性，并且通过Object.definePropty添加get和set方法，get方法就是获取当前属性值，并且判断是否把当前的watcher加入订阅者队列里，而当更改数据的时候调用setter方法对更改数据，并且通知订阅器有数据更新。
- 2.Watcher.js 它主要是连接数据与视图的一个枢纽，视图的更新与添加批处理，它其实就是订阅者。
- 3.Dep.js 订阅器，添加订阅者方法，与通知订阅者更新方法；
- Compile.js 编译器 数据改变或初始化时，创建代码片段，插入app内，主要实现就是穿件代码片段，通过判断节点类型，去执行watcher
- Batcher.js 批处理器，通过判断当前watcher的id去判断执行，防止执行无意义的事情，一次刷新只能调用一次函数，当掉用完后清除任务队列



Vdom实现

获取datta上的所有属性

页面首次加载流程：

调用MVVM.js与Observe.js 进行遍历vm的每个key，使用object.difinePropty为vm设置getter和setter，当获取的时候首先判断是否加入了订阅者subs的队列中，如果加入了直接返回，未加入的话，进行

自动调用watcher.js -->





