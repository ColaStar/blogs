# basket.js详解

## 一、前言
basket.js 可以用来加载js脚本并且保存到 `LocalStorage`上，使我们可以更加精准地控制缓存，即使是在 http 缓存过期之后也可以使用。因此可以使我们防止不必要的重新请求 js 脚本，提升网站加载速度。

可以到 basket.js 的 [Github](https://github.com/addyosmani/basket.js) 上查看更多的相关信息。

由于之前在工作中使用过 basket.js ，好奇它的实现原理，因此就有了这篇分析 basket.js 源码的文章。

## 二、简单的使用说明
basket.js 的使用非常简单，只要引入相应的js脚本，然后使用 basket 的 require 方法加载就可以了，例子：
```
<!DOCTYPE html>
<html>
<head>
    <title>basket.js demo</title>
    <script src="basket.full.min.js"></script>
</head>
<body>
    <script>
        basket.require({url: 'helloworld.js'});
    </script>
</body>
</html>
```
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs1.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs1.png)</a>

第一次加载，由于helloworld.js 只有一行代码alert('hello world');， 所以运行该demo时就会弹出 "hello world"。并且对应的 js 会被保存到 LocalStorage：
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs2.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs2.png)</a>


此时对应的资源加载情况：

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs3.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs3.png)</a>


刷新一次页面，再查看一次资源的加载情况：
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs4.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs4.png)</a>

可以看到已经没有再发送 helloworld.js 相关的请求，因为 LocalStorage 上已经有对应的缓存了，直接从本地获取即可。

## 三、实现流程
流程图
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs5.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/basketjs5.png)</a>

### 细节说明
#### 处理参数

参数处理就是根据已有的参数初始化未指定的参数。例如 require 方法支持 once 参数用来表示是否只执行一次对应 JS，execute 参数标示是否加载完该 JS 之后立刻执行。所以参数处理这一步骤就会根据是否执行过该 JS 和 once 参数是否为 ture 来设置execute参数。

#### 获取缓存
调用 `localStorage.getItem`方法获取缓存。存入的 `key` 值为 `basket`- 加上 JS 文件的 URL。以上面加载 `helloworld.js` 为例，key 值为：basket-helloworld.js。获取的缓存为一个缓存对象，里面包含 JS 代码和相关的一些信息，例如：
```
{
"url": "helloworld.js?basket-unique=123",
"unique": "123",
"execute": true,
"key": "helloworld.js",
"data": "alert('hello world');",
"originalType": "application/javascript",
"type": "application/javascript",
"skipCache": false,
"stamp": 1459606005108,
"expire": 1477606005108
}
```
其中 data 属性对应的值就是 JS 代码。

#### 判断缓存是否有效
判断比较简单，根据缓存对象里面的版本号 unique 和过期时间 expire 等来判断。这和浏览器使用 Expire 和 Etag 头部来判断 HTTP 缓存是否有效相似。最大的不同就是缓存完全由 JS 控制！这也就是 basket.js 最大的作用。让我们更好的控制缓存。默认的过期时间为5000小时，也就是208.33天。

判断代码：
```
/**
 * 判断ls上的缓存对象是否过期
 * @param   {object}   source 从ls里取出的缓存对象
 * @param   {object}   obj    传入的参数对象
 * @returns {Boolean}         过期返回true，否则返回false
 */
var isCacheValid = function(source, obj) {
    return !source || // 没有缓存数据返回true
        source.expire - +new Date() < 0  || // 超过过期时间返回true
        obj.unique !== source.unique || // 版本号不同的返回true
        (basket.isValidItem && !basket.isValidItem(source, obj)); // 自定义验证函数不成功的返回true
};
```
#### Ajax获取JS
普通的利用 XMLHttpRequest 请求。

#### 缓存到LocalStorage
调用`localStorage.setItem`方法保存缓存对象。一般来说，只要这一行代码就能完成本步骤。但是LocalStorage保存的数据是有大小限制的！我利用 chrome 做了一个小测试，保存500KB左右的东西就会令到 Resources 面板变卡，2M 几乎可以令到 Resources 基本卡死，到了 5M 就会超出限制，浏览器抛出异常：
```
DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'basket-http://file.com/ykq/wap/v3Templates/timeout/timeout/large.js' exceeded the quota
```
因此需要使用 try catch 对`localStorage.setItem`方法进行异常捕获。当没容量不足时就需要根据保存时间逐一删除 LocalStorage 的缓存对象。

相关代码：
```
/**
 * 把缓存对象保存到localStorage中
 * @param   {string}    key         ls的key值
 * @param   {object}    storeObj    ls的value值，缓存对象，记录着对应script的对象、有url、execute、key、data等属性
 * @returns {boolean}               成功返回true
 */
var addLocalStorage = function( key, storeObj ) {
    // localStorage对大小是有限制的，所以要进行try catch
    // 500KB左右的东西保存起来就会令到Resources变卡
    // 2M左右就可以令到Resources卡死，操作不了
    // 5M就到了Chrome的极限
    // 超过之后会抛出如下异常：
    // DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'basket-http://file.com/ykq/wap/v3Templates/timeout/timeout/large.js' exceeded the quota
    try {
        localStorage.setItem( storagePrefix + key, JSON.stringify( storeObj ) );
        return true;
    } catch( e ) {
        // localstorage容量不够，根据保存的时间删除已缓存到ls里的js代码
        if ( e.name.toUpperCase().indexOf('QUOTA') >= 0 ) {
            var item;
            var tempScripts = [];

            // 先把所有的缓存对象来出来，放到 tempScripts里
            for ( item in localStorage ) {
                if ( item.indexOf( storagePrefix ) === 0 ) {
                    tempScripts.push( JSON.parse( localStorage[ item ] ) );
                }
            }

            // 如果有缓存对象
            if ( tempScripts.length ) {
                // 按缓存时间升序排列数组
                tempScripts.sort(function( a, b ) {
                    return a.stamp - b.stamp;
                });

                // 删除缓存时间最早的js
                basket.remove( tempScripts[ 0 ].key );

                // 删除后在再添加，利用递归完成
                return addLocalStorage( key, storeObj );

            } else {
                // no files to remove. Larger than available quota
                // 已经没有可以删除的缓存对象了，证明这个将要缓存的目标太大了。返回undefined。
                return;
            }

        } else {
            // some other error
            // 其他的错误，例如JSON的解析错误
            return;
        }
    }

};
```
#### 生成script标签注入到页面
生成 script 标签，append 到 document.head：
```
var injectScript = function( obj ) {
    var script = document.createElement('script');

    script.defer = true;
    // Have to use .text, since we support IE8,
    // which won't allow appending to a script
    script.text = obj.data;
    head.appendChild( script );
};
```
#### 四、异步编程

basket.js 是一个典型的需要大量异步编程的库，所以稍有不慎，代码将会高度耦合，臃肿难看。。。

所以 `basket.js` 引入遵从 `Promises/A+` 标准的异步编程库 `RSVP.js` 来这个问题。

（遵从 Promises/A+ 标准的还有 ES6 原生的 Promise 对象，jQuery 的$.Deferred 方法等）

所以 basket.js 中涉及异步编程的方法都会返回一个 Promise 对象。很好地解决了异步编程问题。例如 basket.require 方法就是返回一个promise 对象，因此需要按顺序加载 JS 的时候可以这样子写：
```
basket.require({
    url: 'helloworld.js'
}).then(function() {
    basket.require({
        url: 'helloworld2.js'
    })
});
```
为了使代码更好看，basket.js 添加了一个方法 basket.thenRequire，现在代码就可以写成这样：
```
basket.require({
    url: 'helloworld.js'
}).thenRequire({
    url: 'helloworld2.js'
});
```

#### 五、吐槽
其实 `basket.js `算是一种黑科技，使用起来有比较多的东西要注意。例如我们无法正常使用 chrome 的 `Sources` 面板断点调试，解决方法为手动在代码里面添加debugger设置断点。还有就是由于强制刷新页面也不能清除 `localStorage` 上的缓存，所以每次修改代码时我们都需要手动清除 `localStorage`，比较麻烦。当然调试时可以在 JS 文件的头部添加`localStorage.clear()`解决这个问题。

还有就是 basket.js 已经好久没有更新了，毕竟黑科技，总会被时代淘汰。而且 api 文档也不齐全，例如上面的 thenRequire 方法是我查看源代码时才发现的，官方文档里面根本没有。

最后，虽然 basket.js 应该不会在维护了，但是阅读其源码还是能有很多收获，推荐大家花点时间阅读一下。

#### 六、源码完整注释
```
/*!
* basket.js
* v0.5.2 - 2015-02-07
* http://addyosmani.github.com/basket.js
* (c) Addy Osmani;  License
* Created by: Addy Osmani, Sindre Sorhus, Andrée Hansson, Mat Scales
* Contributors: Ironsjp, Mathias Bynens, Rick Waldron, Felipe Morais
* Uses rsvp.js, https://github.com/tildeio/rsvp.js
*/(function( window, document ) {
    'use strict';

    var head = document.head || document.getElementsByTagName('head')[0];
    var storagePrefix = 'basket-'; // 保存localStorage时的前缀
    var defaultExpiration = 5000; // 默认过期时间为5000小时
    var inBasket = []; // 保存已经执行过的js的url。辅助设置参数的execute选项。

    /**
     * 把缓存对象保存到localStorage中
     * @param   {string}    key         ls的key值
     * @param   {object}    storeObj    ls的value值，缓存对象，记录着对应script的对象、有url、execute、key、data等属性
     * @returns {boolean}               成功返回true
     */
    var addLocalStorage = function( key, storeObj ) {
        // localStorage对大小是有限制的，所以要进行try catch
        // 500KB左右的东西保存起来就会令到Resources变卡
        // 2M左右就可以令到Resources卡死，操作不了
        // 5M就到了Chrome的极限
        // 超过之后会抛出如下异常：
        // DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'basket-http://file.com/ykq/wap/v3Templates/timeout/timeout/large.js' exceeded the quota
        try {
            localStorage.setItem( storagePrefix + key, JSON.stringify( storeObj ) );
            return true;
        } catch( e ) {
            // localstorage容量不够，根据保存的时间删除已缓存到ls里的js代码
            if ( e.name.toUpperCase().indexOf('QUOTA') >= 0 ) {
                var item;
                var tempScripts = [];

                // 先把所有的缓存对象来出来，放到 tempScripts里
                for ( item in localStorage ) {
                    if ( item.indexOf( storagePrefix ) === 0 ) {
                        tempScripts.push( JSON.parse( localStorage[ item ] ) );
                    }
                }

                // 如果有缓存对象
                if ( tempScripts.length ) {
                    // 按缓存时间升序排列数组
                    tempScripts.sort(function( a, b ) {
                        return a.stamp - b.stamp;
                    });

                    // 删除缓存时间最早的js
                    basket.remove( tempScripts[ 0 ].key );

                    // 删除后在再添加，利用递归完成
                    return addLocalStorage( key, storeObj );

                } else {
                    // no files to remove. Larger than available quota
                    // 已经没有可以删除的缓存对象了，证明这个将要缓存的目标太大了。返回undefined。
                    return;
                }

            } else {
                // some other error
                // 其他的错误，例如JSON的解析错误
                return;
            }
        }

    };

    /**
     * 利用ajax获取相应url的内容
     * @param   {string}    url 请求地址
     * @returns {object}        返回promise对象，解决时的参数为对象：{content:'', type: ''}
     */
    var getUrl = function( url ) {
        var promise = new RSVP.Promise( function( resolve, reject ){

            var xhr = new XMLHttpRequest();
            xhr.open( 'GET', url );

            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ) {
                    if ( ( xhr.status === 200 ) ||
                            ( ( xhr.status === 0 ) && xhr.responseText ) ) {
                        resolve( {
                            content: xhr.responseText,
                            type: xhr.getResponseHeader('content-type')
                        } );
                    } else {
                        reject( new Error( xhr.statusText ) );
                    }
                }
            };

            // By default XHRs never timeout, and even Chrome doesn't implement the
            // spec for xhr.timeout. So we do it ourselves.
            // 自定义超时设置
            setTimeout( function () {
                if( xhr.readyState < 4 ) {
                    xhr.abort();
                }
            }, basket.timeout );

            xhr.send();
        });

        return promise;
    };

    /**
     * 获取js，保存缓存对象到ls
     * @param   {object}   obj basket.require的参数对象(之前的处理过程中添加相应的属性)
     * @returns {object}       promise对象
     */
    var saveUrl = function( obj ) {
        return getUrl( obj.url ).then( function( result ) {
            var storeObj = wrapStoreData( obj, result );

            if (!obj.skipCache) {
                addLocalStorage( obj.key , storeObj );
            }

            return storeObj;
        });
    };

    /**
     * 进一步添加对象obj属性
     * @param   {object}   obj  basket.require的参数(之前的处理过程中添加相应的属性)
     * @param   {object}   data 包含content和type属性的对象，content就是js的内容
     * @returns {object}        经过包装后的obj
     */
    var wrapStoreData = function( obj, data ) {
        var now = +new Date();
        obj.data = data.content;
        obj.originalType = data.type;
        obj.type = obj.type || data.type;
        obj.skipCache = obj.skipCache || false;
        obj.stamp = now;
        obj.expire = now + ( ( obj.expire || defaultExpiration ) * 60 * 60 * 1000 );

        return obj;
    };

    /**
     * 判断ls上的缓存对象是否过期
     * @param   {object}   source 从ls里取出的缓存对象
     * @param   {object}   obj    传入的参数对象
     * @returns {Boolean}         过期返回true，否则返回false
     */
    var isCacheValid = function(source, obj) {
        return !source || // 没有缓存数据返回true
            source.expire - +new Date() < 0  || // 超过过期时间返回true
            obj.unique !== source.unique || // 版本号不同的返回true
            (basket.isValidItem && !basket.isValidItem(source, obj)); // 自定义验证函数不成功的返回true
    };

    /**
     * 判断缓存是否还生效，获取js，保存到ls
     * @param   {object}   obj basket.require参数对象
     * @returns {object}       返回promise对象
     */
    var handleStackObject = function( obj ) {
        var source, promise, shouldFetch;

        if ( !obj.url ) {
            return;
        }

        obj.key =  ( obj.key || obj.url );

        source = basket.get( obj.key );

        obj.execute = obj.execute !== false;

        shouldFetch = isCacheValid(source, obj); // 判断缓存是否还有效

        // 如果shouldFetch为true，请求数据，保存到ls（live选项意义不明，文档也没有说，这里当它一只是undefined）
        if( obj.live || shouldFetch ) {
            if ( obj.unique ) {
                // set parameter to prevent browser cache
                obj.url += ( ( obj.url.indexOf('?') > 0 ) ? '&' : '?' ) + 'basket-unique=' + obj.unique;
            }
            promise = saveUrl( obj ); // 请求对应js，缓存到ls里

            if( obj.live && !shouldFetch ) {
                promise = promise
                    .then( function( result ) {
                        // If we succeed, just return the value
                        // RSVP doesn't have a .fail convenience method
                        return result;
                    }, function() {
                        return source;
                    });
            }
        } else {
        // 缓存可用。
            source.type = obj.type || source.originalType;
            source.execute = obj.execute;
            promise = new RSVP.Promise( function( resolve ){
                // 下面的setTimeout用来解决结合requirejs使用时的加载问题。
                // setTimeout(function(){
                    debugger;
                    resolve( source );
                // },0);
            });
        }

        return promise;
    };

    /**
     * 把script插入到head中
     * @param {object} obj 缓存对象
     */
    var injectScript = function( obj ) {
        var script = document.createElement('script');

        script.defer = true;
        // Have to use .text, since we support IE8,
        // which won't allow appending to a script
        script.text = obj.data;
        head.appendChild( script );
    };

    // 保存着特定类型的执行函数，默认行为是把script注入到页面
    var handlers = {
        'default': injectScript
    };

    /**
     * 执行缓存对象对应回调函数，把script插入到head中
     * @param   {object}   obj 缓存对象
     * @returns {undefined}    不需要返回结果
     */
    var execute = function( obj ) {
        // 执行类型特定的回调函数
        if( obj.type && handlers[ obj.type ] ) {
            return handlers[ obj.type ]( obj );
        }

        // 否则执行默认的注入script行为
        return handlers['default']( obj ); // 'default' is a reserved word
    };

    /**
     * 批量执行缓存对象动作
     * @param   {Array} resources  缓存对象数组
     * @returns {Array}            返回参数resources
     */
    var performActions = function( resources ) {
        return resources.map( function( obj ) {
            if( obj.execute ) {
                execute( obj );
            }

            return obj;
        } );
    };

    /**
     * 处理请求对象，不包括执行对应的动作
     * @param   {object}   会把basket.require的参数传过来，也就是多个对象
     * @returns {object}   promise对象
     */
    var fetch = function() {
        var i, l, promises = [];

        for ( i = 0, l = arguments.length; i < l; i++ ) {
            promises.push( handleStackObject( arguments[ i ] ) );
        }
        return RSVP.all( promises );
    };

    /**
     * 包装promise的then方法实现链式调用
     * @returns {Object} 添加了thenRequire方法的promise实例
     */
    var thenRequire = function() {
        var resources = fetch.apply( null, arguments );
        var promise = this.then( function() {
            return resources;
        }).then( performActions );
        promise.thenRequire = thenRequire;
        return promise;
    };

    window.basket = {
        require: function() { // 参数为多个请求相关的对象，对象的属性：url、key、expire、execute、unique、once和skipCache等
            // 处理execute参数
            for ( var a = 0, l = arguments.length; a < l; a++ ) {
                arguments[a].execute = arguments[a].execute !== false; // execute 默认选项为ture
                
                // 如果有只执行一次的选项once，并之前已经加载过这个js，那么设置execute选项为false
                if ( arguments[a].once && inBasket.indexOf(arguments[a].url) >= 0 ) {
                    arguments[a].execute = false;
                // 需要执行的请求的url保存到inBasket，
                } else if ( arguments[a].execute !== false && inBasket.indexOf(arguments[a].url) < 0 ) {  
                    inBasket.push(arguments[a].url);
                }
            }

            var promise = fetch.apply( null, arguments ).then( performActions );

            promise.thenRequire = thenRequire;
            return promise;
        },

        remove: function( key ) {
            localStorage.removeItem( storagePrefix + key );
            return this;
        },

        // 根据key值获取对应ls的value
        get: function( key ) {

            var item = localStorage.getItem( storagePrefix + key );
            try {
                return JSON.parse( item || 'false' );
            } catch( e ) {
                return false;
            }
        },

        // 批量清除缓存对象，传入true只清除过期对象
        clear: function( expired ) {
            var item, key;
            var now = +new Date();

            for ( item in localStorage ) {
                key = item.split( storagePrefix )[ 1 ];
                if ( key && ( !expired || this.get( key ).expire <= now ) ) {
                    this.remove( key );
                }
            }

            return this;
        },

        isValidItem: null, // 可以自己扩展一个isValidItem函数，来自定义判断缓存是否过期。

        timeout: 5000, // ajax 默认的请求timeout为5s

        // 添加特定类型的执行函数
        addHandler: function( types, handler ) {
            if( !Array.isArray( types ) ) {
                types = [ types ];
            }
            types.forEach( function( type ) {
                handlers[ type ] = handler;
            });
        },

        removeHandler: function( types ) {
            basket.addHandler( types, undefined );
        }
    };

    // delete expired keys
    // basket.js 加载时会删除过期的缓存
    basket.clear( true );

})( this, document );
```