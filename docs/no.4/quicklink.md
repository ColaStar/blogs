# quicklink详解
谷歌又开源了，谷歌一开源那必是精品啊。因为谷歌开源的各大框架，技术经常被大家广泛采用。

最近谷歌又来源了一项技术，名叫：`quicklink`。据说使用它，可以将网页的加载速度从 4.6s 降到 0.7s

`quicklink`是一个`js`库，可以预加载出现在视口的网页链接，提高用户体验。它的加载过程如下：
- 1.检测网页中的链接是否出现在视口中，等待链接出现在视口，执行步骤2。
- 2.等待浏览器空闲后执行3。
- 3.判断当前的网络连接是否是2G，如果是则停止执行，如果不是2G网络，执行步骤4

- 4.预加载链接指向资源。


## 使用方式
[github详细用法](https://github.com/GoogleChromeLabs/quicklink)

## quicklink源码解析

quicklink的入口函数接受传入的配置参数，通过Object.assign函数和默认的配置选项合并。接着执行timeoutFn异步方法，该方法接收一个回调函数，在回调中主要逻辑如下：

如果传入的options参数中有urls属性，则直接执行预加载，否则通过document.querySelectorAll方法获取所有a标签元素的NodeList，然后便利该元素节点列表，并监视该元素节点
```
observer.observe(link);
```

然后**判断该a元素对象的href属性值所属的域名是否被允许访问**，如果被允许访问，继续判断该链接是否应该被忽略，判断逻辑如下：
```
if (!allowed.length || allowed.includes(link.hostname)) {
   // If there are any filters, the link must not match any of them
   isIgnored(link, ignores) || toPrefetch.add(link.href);
}
```

如果链接没有被忽略，则将该节点的`href`属性值加入到`toPrefetch`中
```
const toPrefetch = new Set();
toPrefetch.add(link.href);
```

总的代码逻辑如下

```
export default function (options) {
  options = Object.assign({
    timeout: 2e3,
    priority: false,
    timeoutFn: requestIdleCallback,
    el: document,
  }, options);

  observer.priority = options.priority;

  const allowed = options.origins || [location.hostname];
  const ignores = options.ignores || [];

  options.timeoutFn(() => {
    // If URLs are given, prefetch them.
    if (options.urls) {
      options.urls.forEach(prefetcher);
    } else {
      // If not, find all links and use IntersectionObserver.
      Array.from(options.el.querySelectorAll('a'), link => {
        observer.observe(link);
        // If the anchor matches a permitted origin
        // ~> A `[]` or `true` means everything is allowed
        if (!allowed.length || allowed.includes(link.hostname)) {
          // If there are any filters, the link must not match any of them
          isIgnored(link, ignores) || toPrefetch.add(link.href);
        }
      });
    }
  }, {timeout: options.timeout});
}
```
> 检测link出现在视口

上面通过`observer.observe(link)`监视**节点元素**，其中`observer`是`IntersectionObserver`对象的实例，被监听的节点对象出现在视口时，会执行`new`操作时传入的回调函数，并将出现在视口的节点对象通过数组的形式传给该回调。然后在回调中便利传入的数组，如果数组中的元素包含在`toPrefetch`对象中，则取消对该元素的监视，并对该a标签元素所对应的资源进行预加载。
```
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const link = entry.target;
      if (toPrefetch.has(link.href)) {
        observer.unobserve(link);
        prefetcher(link.href);
      }
    }
  });
});
```

> 异步函数实现

如果浏览器支持`requestIdleCallback`，则使用原生的函数，如果不支持，则使用`setTimeout`函数做`ployfill`。
```
const requestIdleCallback = requestIdleCallback ||
  function (cb) {
    const start = Date.now();
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        },
      });
    }, 1);
  };

export default requestIdleCallback;
```

> 资源请求函数实现

预加载策略主要有三种

- 1.`<link> prefetch`
```
function linkPrefetchStrategy(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement(`link`);
    link.rel = `prefetch`;
    link.href = url;

    link.onload = resolve;
    link.onerror = reject;

    document.head.appendChild(link);
  });
};
```
- 2.ajax加载
```
function xhrPrefetchStrategy(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.open(`GET`, url, req.withCredentials=true);

    req.onload = () => {
      (req.status === 200) ? resolve() : reject();
    };

    req.send();
  });
}
```
- 3.Fetch请求加载
```
function highPriFetchStrategy(url) {
  // TODO: Investigate using preload for high-priority
  // fetches. May have to sniff file-extension to provide
  // valid 'as' values. In the future, we may be able to
  // use Priority Hints here.
  //
  // As of 2018, fetch() is high-priority in Chrome
  // and medium-priority in Safari.
  return self.fetch == null
    ? xhrPrefetchStrategy(url)
    : fetch(url, {credentials: `include`});
}
```
> 网络类型判断
```
if (conn = navigator.connection) {
    // Don't prefetch if the user is on 2G. or if Save-Data is enabled..
    if ((conn.effectiveType || '').includes('2g') || conn.saveData) return;
  }
  ```

将上面三种预加载方法封装成函数，暴露给外部使用
```
const supportedPrefetchStrategy = support('prefetch')
  ? linkPrefetchStrategy
  : xhrPrefetchStrategy;

function prefetcher(url, isPriority, conn) {
  if (preFetched[url]) {
    return;
  }

  if (conn = navigator.connection) {
    // Don't prefetch if the user is on 2G. or if Save-Data is enabled..
    if ((conn.effectiveType || '').includes('2g') || conn.saveData) return;
  }

  // Wanna do something on catch()?
  return (isPriority ? highPriFetchStrategy : supportedPrefetchStrategy)(url).then(() => {
    preFetched[url] = true;
  });
};

export default prefetcher;
```