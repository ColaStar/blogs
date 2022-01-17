# localForage

localStorage 能够让你实现基本的数据存储，但它的速度慢，而且不能处理二进制数据。

IndexedDB 和 WebSQL 是异步的，速度快，支持大数据集，但他们的API 使用起来有点复杂。不仅如此，IndexedDB 和 WebSQL 没有被所有的主流的浏览器厂商支持，这种情况最近也不太可能改变。

　　`localForage`库是由Mozilla 开发javascript 的库 ，使得离线数据存储在任何浏览器都是一项容易的任务。

　　`localForage` 是一个使用非常简单的 JavaScript 库的，提供了 `get，set，remove，clear` 和 length 等等 API，还具有以下特点：

- 支持回调的异步 API；

- 支持 IndexedDB，WebSQL 和 localStorage 三种存储模式（自动为你加载最佳的驱动程序）；
- 支持 BLOB 和任意类型的数据，让您可以存储图片，文件等等。
- 支持 ES6 Promises；
　
　对 IndexedDB 和 WebSQL 的支持使您可以为您的 Web 应用程序存储更多的数据，要比 localStorage 允许存储的多很多。其 API 的无阻塞性质使得您的应用程序更快，不会因为 Get/Set 调用而挂起主线程。

> localStorage
　　传统的  API 在许多方面其实是很不错的，使用简单，没有复杂的数据结构。如果你在你的应用程序有一个配置信息需要保持，可以这样写：

```
// 需要离线保存的配置数据
var config = {
    fullName: document.getElementById('name').getAttribute('value'),
    userId: document.getElementById('id').getAttribute('value')
};
  
// 保存起来，供下次使用
localStorage.setItem('config', JSON.stringify(config));
  
// 从离线存储中读取出来
var config = JSON.parse(localStorage.getItem('config'));
```

　　请注意，使用 localStorage 存储的数据需要保存为字符串，所以我们在保存和读取时需要进行 JSON 序列化和反序列化。

　　看起来好像使用很简单，但你很快会发现 **localStorage 的几个问题**：

- 它是**同步**的。不管数据多大，我们需要等待数据从**磁盘**读取和解析，这会**减慢我们的应用程序的响应速度**。这在移动设备上是特别糟糕的，主线程被挂起，直到数据被取出，会使你的应用程序看起来慢，甚至没有反应。

- 它仅支持字符串。需要使用 JSON.parse 与 JSON.stringify 进行序列号和反序列化。这是因为 localStorage 中仅支持 JavaScript 字符串值。不支持数值，布尔值，Blob 类型的数据。


> localForage
　　`localForage` 可以解决上面的问题，下面我们对比一下 `IndexedDB` 和 `localForage` 存储相同数据的差异：

　　IndexedDB 代码：
```
// IndexedDB.
var db;
var dbName = "dataspace";
var users = [ {id: 1, fullName: 'Matt'}, {id: 2, fullName: 'Bob'} ];
var request = indexedDB.open(dbName, 2);
request.onerror = function(event) {
    // 错误处理
};
request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("users", { keyPath: "id" });
    objectStore.createIndex("fullName", "fullName", { unique: false });
    objectStore.transaction.oncomplete = function(event) {
        var userObjectStore = db.transaction("users", "readwrite").objectStore("users");
    }
};
  
var transaction = db.transaction(["users"], "readwrite");
// 所有数据都添加到数据后调用
transaction.oncomplete = function(event) {
    console.log("All done!");
};
transaction.onerror = function(event) {
    // 错误处理
};
  
var objectStore = transaction.objectStore("users");
for (var i in users) {
    var request = objectStore.add(users[i]);
    request.onsuccess = function(event) {
        // 里面包含我们需要的用户信息
        console.log(event.target.result);
    };
}
```
　　使用 WebSQL 实现可能不会那么太冗长，但也是有点复杂。使用 localForage，可以这样写：

　　localForage 代码：
```
// 保存用户信息
var users = [ {id: 1, fullName: 'Matt'}, {id: 2, fullName: 'Bob'} ];
localForage.setItem('users', users, function(result) {
    console.log(result);
});
```
　　是不是简单了很多？

> 支持非字符串数据
　　比方说，你要下载一个用户的个人资料图片，并对其进行缓存以供离线使用。使用 localForage 很容易保存二进制数据：
```
// 使用 AJAX 下载图片
var request = new XMLHttpRequest();
  
// 以获取第一个用户的资料图片为例
request.open('GET', "/users/1/profile_picture.jpg", true);
request.responseType = 'arraybuffer';
  
// 当 AJAX 调用完成，把图片保存到本地
request.addEventListener('readystatechange', function() {
    if (request.readyState === 4) { // readyState DONE
        // 保存的是二进制数据，如果用 localStorage 就无法实现
        localForage.setItem('user_1_photo', request.response, function() {
            // 图片已保存，想怎么用都可以
        });
    }
});
  
request.send()
```
　　下次，只用三行代码就可以从缓存中把照片读取出来：

```
localForage.getItem('user_1_photo', function(photo) {
    // 获取到图片数据后，可以通过创建 data URI 或者其它方法来显示
    console.log(photo);
});
```

> Callbacks & Promises

　　如果你不喜欢在你的代码中使用回调，你可以使用 ES6 Promises，来替换 localForage 的回调参数。让我们使用上面的照片例子，看下使用 Promises 的代码：

```
localForage.getItem('user_1_photo').then(function(photo) {
    // 获取到图片数据后，可以通过创建 data URI 或者其它方法来显示
    console.log(photo);
});
```
> 跨浏览器支持

　　localForage 支持所有现代浏览器（包括 IE8 及更高版本）。支持的浏览器和平台如下： 

- Android Browser 2.1
- Blackberry 7
- Chrome 23 (Chrome 4.0 with localStorage)
= Chrome for Android 32
- Firefox 10 (Firefox 3.5 with localStorage)
- Firefox for Android 25
- Firefox OS 1.0
- IE 10 (IE 8 with localStorage)
- IE Mobile 10
- Opera 15 (Opera 10.5 with localStorage)
- Opera Mobile 11
- Phonegap/Apache Cordova 1.2.0
- Safari 3.1 (includes Mobile Safari)