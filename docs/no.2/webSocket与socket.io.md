# WebSocket是时候展现你优秀的一面了

在工作中我们开发接触最多的协议莫过于HTTP协议了，近些年H5的很多API和技术已经如雨后春笋般开始渐渐发扬光大了，今天我们就来一起讨论下其中的一个比较有意思的API，WebSocket
首先，在介绍主角之前，总要有一个铺垫，那么我就来三言两语先说一下最常见的HTTP协议吧，以示区分
## 三言两语说说HTTP

HTTP是客户端/服务器模式中请求-响应所用的协议，在这种模式中，浏览器向服务器提交HTTP请求，服务器响应请求的资源

言下之意就是你可以把这种模式，想象成对讲机，一个人说，另一个人听

### HTTP是半双工通信

这种半双工通信的特点就是：

- 同一时刻数据是单向流动的，客户端向服务端请求数据->单向，服务端向客户端返回数据->单向
- 服务器不能主动的推送数据给客户端

以上就是对HTTP协议的简单概括，那么下面直接开始进入今天的主题
## 双工通信

在H5的websocket出现之前，为了实现这种推送技术，大家最常用的实现方式有这三种：**轮询、长轮询和iframe流**，但是他们三兄弟或多或少都有些美中不足

于是乎，在大神们的不断努力下，定义了websocket这个好用的API，来完善了双工通信的更好实现方式

## WebSocket

WebSocket实现了，在客户端和服务端上建立了一个长久的连接，两边可以任意发数据嗨皮

当然如果知道的更深一层的话，要知道它属于**应用层**的协议，它基于**TCP传输协议**，**并复用HTTP的握手通道**

!<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/TCP-IP协议栈.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/TCP-IP协议栈.png)</a>

说的再多，不如懂它，下面来看看websocket的优势何在
### WebSocket的优势

- 支持双向通信，实时性更强(你可以来做个QQ，微信了，老铁)
- 更好的二进制支持
- 较少的控制开销(连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较少)

那么废话说到这里了，接下来开始实战，直接检验一下成果

### 一起敲敲WebSocket

我们先来写下前端页面的WebSocket，看看基本用法，上代码，别犹豫
```
// 创建一个index.html文件
// 下面直接写WebSocket

// 只需要new一下就可以创建一个websocket的实例
// 我们要去连接ws协议
// 这里对应的端口就是服务端设置的端口号9999
let ws = new WebSocket('ws://localhost:9999');

// onopen是客户端与服务端建立连接后触发
ws.onopen = function() {
    ws.send('哎呦，不错哦');
};

// onmessage是当服务端给客户端发来消息的时候触发
ws.onmessage = function(res) {
    console.log(res);   // 打印的是MessageEvent对象
    // 真正的消息数据是 res.data
    console.log(res.data);
};
```
以上代码，除去注释的话，也就不到10行代码，就把websocket的用法写完了，so easy，使用起来很简单啊，有木有

那么做事要做全，我们再写一下后台那边的websocket接收和发送消息部分吧，继续撸
等等，在撸之前，先要安装一下

```
// 后台需要安装ws包
npm i ws -S
```

这里我们用node的express来简单搭个后台服务，目录结构也很简单，如下图

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/websocket1.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/websocket1.png)</a>

下面开始撸这个server.js文件吧
```
const express = require('express');
const app = express();
// 设置静态文件夹
app.use(express.static(__dirname));
// 监听3000端口
app.listen(3000);
// =============================================
// 开始创建一个websocket服务
const Server = require('ws').Server;
// 这里是设置服务器的端口号，和上面的3000端口不用一致
const ws = new Server({ port: 9999 });

// 监听服务端和客户端的连接情况
ws.on('connection', function(socket) {
    // 监听客户端发来的消息
    socket.on('message', function(msg) {
        console.log(msg);   // 这个就是客户端发来的消息
        // 来而不往非礼也，服务端也可以发消息给客户端
        socket.send(`这里是服务端对你说的话： ${msg}`);
    });
});
```

这样就搭了一个后台服务了，访问localhost:3000后，在控制台就可以看到消息了

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/websocket2.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/websocket2.png)</a>

看到这里，我们会由衷的发现，无论是前端来写还是后台来写，发现其实都很类似，所以用起来比较流畅，多敲几遍就好了，熟能生巧嘛，哈哈
接下来还没完，由于websocket是H5标准出的东西，老版本的浏览器当然就不能很好的支持了，这时前端就要处理该死的兼容问题了
正因如此，世上才会有了另外一个更好用的库出现，这就是大名鼎鼎的 socket.io
下面趁此雅兴，不要停，继续来学习一下这个全双工通信中的王者吧

## socket.io

先来看下socket.io的特别有哪些

### socket.io的特点

- 易用性：封装了服务端和客户端，使用简单方便
- 跨平台：支持跨平台，可以选择在服务端或是客户端开发实时应用
- 自适应：会根据浏览器来自己决定是使用WebSocket、Ajax长轮询还是Iframe流等方式去选择最优方式，甚至支持IE5.5

好了，看完了特点，那就......
少点套路，多点真诚，废话不说了，直接上手从头撸一遍吧

#### socket.io安装

```
// 安装在本地项目
npm i socket.io -S
```
启动服务，手写服务端

还是用node中的express框架来搭个服务，代码如下
```
// server.js文件
const express = require('express');
const app = express();
// 设置静态文件夹
app.use(express.static(__dirname));
// 通过node的http模块来创建一个server服务
const server = require('http').createServer(app);
// WebSocket是依赖HTTP协议进行握手的
const io = require('socket.io')(server);
// 监听客户端与服务端的连接
io.on('connection', function(socket) {
    // send方法来给客户端发消息
    socket.send('青花瓷');
    // 监听客户端的消息是否接收成功
    socket.on('message', function(msg) {
        console.log(msg);  // 客户端发来的消息
        socket.send('天青色等烟雨，而我在等你' );
    });
});
// 监听3000端口
server.listen(3000);
```

辣么，服务端的代码已经写完了，接下来开始写前端的部分，撸起袖子加油干啊！！！

在服务端运行后，客户端就需要引用一个动态生成的文件路径，路径是固定的直接引用即可(/socket.io/socket.io.js)
```
// index.html文件
...省略
// 引用socket.io的js文件
<script src="/socket.io/socket.io.js"></script>
<script>
    const socket = io('/');
    // 监听与服务器连接成功的事件
    socket.on('connect', () => {
        console.log('连接成功');
        socket.send('周杰伦');
    });
    // 监听服务端发来的消息
    socket.on('message', msg => {
        // 这个msg就是传过来的真消息了，不用再msg.data取值了
        console.log(`客户端接收到的消息： ${msg}`);  
    });
    // 监听与服务器连接断开事件
    socket.on('disconnect', () => {
        console.log('连接断开成功');
    });
</script>
```
这里要有个小提示: io创建socket的时候可以接收一个url参数

- url可以是socket服务完整的http地址，如：io('http://localhost:3000')
- 也可以是相对路径，如：io('/')
- 不填的话就表示默认连接当前路径，如：io()

## 实现聊天室

[项目地址](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fchenhongdong%2Farticle%2Ftree%2Fdevelop%2Fwebsocket%2Fchat)

其实这个过程从用户的角度来说，其实无非就是连接上了，发送消息呗。
然而实际上，从用户的观点看东西，也确实是这个样子的，那就不绕圈子了，直接进入主题

### 建立连接

当然，没错，这绝对是所有奇妙玄学中的第一步，不建立连接，那还聊个球呢
说到这里，突然想到应该先把html的结构给大家，不然还怎么按部就班的一起敲呢
先贴一张目录的结构，下面的文件都对应目录即可

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io.png)</a>

下面我们来分别试着写下客户端和服务端的两套创建连接的代码，一起敲敲敲吧

这才是重要的东西，开撸

> 客户端建立连接
```
// index.js文件
let socket = io();
// 监听与服务端的连接
socket.on('connect', () => {
    console.log('连接成功'); 
});
```

socket.io用法简单，方便上手，欲购从速，哈哈，继续写服务端的连接吧

> 服务端建立连接

服务端的搭建我们还是用之前使用的express来处理
```
// app.js文件

const express = require('express');
const app = express();
// 设置静态文件夹，会默认找当前目录下的index.html文件当做访问的页面
app.use(express.static(__dirname));

// WebSocket是依赖HTTP协议进行握手的
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// 监听与客户端的连接事件
io.on('connection', socket => {
    console.log('服务端连接成功');
});
// ☆ 这里要用server去监听端口，而非app.listen去监听(不然找不到socket.io.js文件)
server.listen(4000);
```

以上内容就是客户端和服务端建立了websocket连接了，如此的so easy，那么接下来继续写发送消息吧

### 发送消息

通过`socket.emit('message')`方法来发送消息给服务端

```
// index.js文件

// 列表list，输入框content，按钮sendBtn
let list = document.getElementById('list'),
    input = document.getElementById('input'),
    sendBtn = document.getElementById('sendBtn');

// 发送消息的方法
function send() {
    let value = input.value;
    if (value) {
        // 发送消息给服务器
        socket.emit('message', value);
        input.value = '';
    } else {
        alert('输入的内容不能为空！');
    }
}
// 点击按钮发送消息
sendBtn.onclick = send;
```

> 回车发送消息

每次都要点发送按钮，也是够反用户操作行为的了，所以还是加上我们熟悉的回车发送吧，看代码，+号表示新增的代码
```
// index.js文件
...省略

// 回车发送消息的方法
+ function enterSend(event) {
+    let code = event.keyCode;
+    if (code === 13)  send();
+ }
// 在输入框onkeydown的时候发送消息
+ input.onkeydown = function(event) {
+    enterSend(event);  
+ };
```
前端已经把消息发出去了，接下来该服务端出马了，继续撸

> 服务端处理消息

```
// app.js文件
...省略

io.on('connection', socket => {
    // 监听客户端发过来的消息
+    socket.on('message', msg => {
         // 服务端发送message事件，把msg消息再发送给客户端
+        io.emit('message', {
+            user: '系统',
+            content: msg,
+            createAt: new Date().toLocaleString()
+        });              
+    });
});
```
`io.emit()`方法是向大厅和所有人房间内的人广播

> 客户端渲染消息

我们继续在index.js这里写，把服务端传过来的消息接收并渲染出来

```
// index.js文件
...省略

// 监听message事件来接收服务端发来的消息
+ socket.on('message', data => {
      // 创建新的li元素，最终将其添加到list列表
+     let li = document.createElement('li');
+     li.className = 'list-group-item';
+     li.innerHTML = `
        <p style="color: #ccc;">
            <span class="user">${data.user}</span>
            ${data.createAt}
        </p>
        <p class="content">${data.content}</p>`;
      // 将li添加到list列表中
+     list.appendChild(li);
      // 将聊天区域的滚动条设置到最新内容的位置
+     list.scrollTop = list.scrollHeight;
+ });
```

写到这里，发送消息的部分就已经完事了，执行代码应该都可以看到如下图的样子了

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io1.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io1.png)</a>

看到上面的图后，我们应该高兴一下，毕竟有消息了，离成功又近了一步两步三四步

虽然上面的代码还有瑕疵，不过不要方，让我们继续完善它

根据图片所示，所有的用户都是“系统”，这根本就分不清谁是谁了，让我们来判断一下，需要加个用户名

### 创建用户名

这里我们可以知道，当用户是第一次进来的时候，是没有用户名的，需要在设置之后才会显示对应的名字

于是乎，我们就把第一次进来后输入的内容当作用户名了

```
// app.js文件
...省略
// 把系统设置为常量，方便使用
const SYSTEM = '系统';

io.on('connection', socket => {
    // 记录用户名，用来记录是不是第一次进入，默认是undefined
+   let username;
    socket.on('message', msg => {
        // 如果用户名存在
+       if (username) {
             // 就向所有人广播
+            io.emit('message', {
+                user: username,
+                content: msg,
+                createAt: new Date().toLocaleString()
+            });
+       } else {  // 用户名不存在的情况
             // 如果是第一次进入的话，就将输入的内容当做用户名
+            username = msg;
             // 向除了自己的所有人广播，毕竟进没进入自己是知道的，没必要跟自己再说一遍
+            socket.broadcast.emit('message', {
+                user: SYSTEM,
+                content: `${username}加入了聊天！`,
+                createAt: new Date().toLocaleString()
+            });
+        }
    });
});
```
☆️ `socket.broadcast.emit`，这个方法是向除了自己外的所有人广播

没错，毕竟自己进没进聊天室自己心里还没数么，哈哈

下面再看下执行的效果，请看图

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io2.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io2.png)</a>

最基本的发消息功能已经实现了，下面我们再接再厉，完成一个私聊功能吧
### 添加私聊
在群里大家都知道@一下就代表这条消息是专属被@的那个人的，其他人是不用care的

如何实现私聊呢？这里我们采用，在消息列表list中点击对方的用户名进行私聊，所以废话不多说，开写吧
> 客户端处理
@一下
```
// index.js文件
...省略

  // 私聊的方法
+ function privateChat(event) {
+    let target = event.target;
     // 拿到对应的用户名
+    let user = target.innerHTML;
     // 只有class为user的才是目标元素
+    if (target.className === 'user') {
         // 将@用户名显示在input输入框中
+        input.value = `@${user} `;
+    }
+ }
  // 点击进行私聊
+ list.onclick = function(event) {
+    privateChat(event);
+ };
```

客户端已将@用户名这样的格式设置在了输入框中，只要发送消息，服务端就可以进行区分，是私聊还是公聊了，下面继续写服务端的处理逻辑吧

> 服务端处理
首先私聊的前提是已经获取到了用户名了
然后正则判断一下，哪些消息是属于私聊的
最后还需要找到对方的socket实例，好方便发送消息给对方
那么，看如下代码
```
// app.js文件
...省略

// 用来保存对应的socket，就是记录对方的socket实例
+ let socketObj = {};

io.on('connection', socket => {
    let username;
    socket.on('message', msg => {
        if (username) {
            // 正则判断消息是否为私聊专属
+           let private = msg.match(/@([^ ]+) (.+)/);

+           if (private) {  // 私聊消息
                 // 私聊的用户，正则匹配的第一个分组
+                let toUser = private[1];
                 // 私聊的内容，正则匹配的第二个分组
+                let content = private[2];
                 // 从socketObj中获取私聊用户的socket
+                let toSocket = socketObj[toUser];

+                if (toSocket) {
                     // 向私聊的用户发消息
+                    toSocket.send({
+                        user: username,
+                        content,
+                        createAt: new Date().toLocaleString()
+                    });
+                }
            } else {    // 公聊消息
                io.emit('message', {
                    user: username,
                    content: msg,
                    createAt: new Date().toLocaleString()
                });
            }
        } else { // 用户名不存在的情况
            ...省略
            // 把socketObj对象上对应的用户名赋为一个socket
            // 如： socketObj = { '周杰伦': socket, '谢霆锋': socket }
+           socketObj[username] = socket;
        }
    });
});
```

写到这里，我们已经完成了公聊和私聊的功能了，可喜可贺，非常了不起了已经，但是不能傲娇，我们再完善一些小细节

现在所有用户名和发送消息的气泡都是一个颜色，其实这样也不好区分用户之间的差异
SO，我们来改下颜色的部分

分配用户不一样的颜色

> 服务端处理颜色
```
// app.js文件
...省略
let socketObj = {};
// 设置一些颜色的数组，让每次进入聊天的用户颜色都不一样
+ let userColor = ['#00a1f4', '#0cc', '#f44336', '#795548', '#e91e63', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#ffc107', '#607d8b', '#ff9800', '#ff5722'];

// 乱序排列方法，方便把数组打乱
+ function shuffle(arr) {
+    let len = arr.length, random;
+    while (0 !== len) {
        // 右移位运算符向下取整
+        random = (Math.random() * len--) >>> 0; 
        // 解构赋值实现变量互换
+        [arr[len], arr[random]] = [arr[random], arr[len]]; 
+    }
+    return arr;
+ }

io.on('connection', socket => {
     let username;
+    let color;  // 用于存颜色的变量

    socket.on('message', msg => {
        if (username) {
            ...省略
            if (private) {
                ...省略
                if (toSocket) {
                    toSocket.send({
                        user: username,
+                       color,
                        content: content,
                        createAt: new Date().toLocaleString()
                    });
                }
            } else {
                io.emit('message', {
                    user: username,
+                   color,
                    content: msg,
                    createAt: new Date().toLocaleString()
                });
            }
        } else { // 用户名不存在的情况
            ...省略
            // 乱序后取出颜色数组中的第一个，分配给进入的用户
+           color = shuffle(userColor)[0];

            socket.broadcast.emit('message', {
                user: '系统',
+               color,
                content: `${username}加入了聊天！`,
                createAt: new Date().toLocaleString()
            });
        }
    });
});
```

服务端那边给分配好了颜色，前端这边再渲染一下就好了，接着写下去，不要停

> 渲染颜色

在创建的li元素上，给对应的用户名和内容分别在style样式中加个颜色就可以了，代码如下
```
// index.js
... 省略

socket.on('message', data => {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    // 给对应元素设置行内样式添加颜色
+   li.innerHTML = `<p style="color: #ccc;"><span class="user" style="color:${data.color}">${data.user} </span>${data.createAt}</p>
                    <p class="content" style="background:${data.color}">${data.content}</p>`;
    list.appendChild(li);
    // 将聊天区域的滚动条设置到最新内容的位置
    list.scrollTop = list.scrollHeight;
});
```
写完是写完了，我们看看效果吧

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io3.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io3.png)</a>

写到这里，看到这里，是否疲倦了呢，年轻人不要放弃

Now，让我们来写理论上的最最最后一个功能吧，进入某个群里聊天，该消息只有群里的人可以看到

### 加入指定房间(群)
我们一直在上面的截图中看到了两个群的按钮，看到字面意思就能知道是干嘛的，就是为了这一刻而准备的

下面我们再来，继续撸，马上就要完成大作了

> 客户端-进出房间(群)

```
// index.js文件
...省略

// 进入房间的方法
+ function join(room) {
+    socket.emit('join', room);
+ }
// 监听是否已进入房间
// 如果已进入房间，就显示离开房间按钮
+ socket.on('joined', room => {
+    document.getElementById(`join-${room}`).style.display = 'none';
+    document.getElementById(`leave-${room}`).style.display = 'inline-block';
+ });

// 离开房间的方法
+ function leave(room) {
    socket.emit('leave', room);
+ }
// 监听是否已离开房间
// 如果已离开房间，就显示进入房间按钮
+ socket.on('leaved', room => {
+    document.getElementById(`leave-${room}`).style.display = 'none';
+    document.getElementById(`join-${room}`).style.display = 'inline-block';
+ });
```
上面定义的join和leave方法直接在对应的按钮上调用即可了，如下图所示
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io4.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io4.png)</a>

下面我们继续写服务端的代码逻辑

> 服务端-处理进出房间(群)
```
// app.js文件
...省略
io.on('connection', socket => {
    ...省略
    // 记录进入了哪些房间的数组
+   let rooms = [];
    io.on('message', msg => {
        ...省略
    });
    // 监听进入房间的事件
+   socket.on('join', room => {
+       // 判断一下用户是否进入了房间，如果没有就让其进入房间内
+       if (username && rooms.indexOf(room) === -1) {
            // socket.join表示进入某个房间
+           socket.join(room);
+           rooms.push(room);
            // 这里发送个joined事件，让前端监听后，控制房间按钮显隐
+           socket.emit('joined', room);
            // 通知一下自己
+           socket.send({
+               user: SYSTEM,
+               color,
+               content: `你已加入${room}战队`,
+               createAt: new Date().toLocaleString()
+           });
+       }
+   });
    // 监听离开房间的事件
+   socket.on('leave', room => {
        // index为该房间在数组rooms中的索引，方便删除
+       let index = rooms.indexOf(room);
+       if (index !== -1) {
+           socket.leave(room); // 离开该房间
+           rooms.splice(index, 1); // 删掉该房间
            // 这里发送个leaved事件，让前端监听后，控制房间按钮显隐
+           socket.emit('leaved', room);
            // 通知一下自己
+           socket.send({
+               user: SYSTEM,
+               color,
+               content: `你已离开${room}战队`,
+               createAt: new Date().toLocaleString()
+           });
+       }
+   });
});
```
写到这里，我们也实现了加入和离开房间的功能，如下图所示
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io5.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io5.png)</a>
既然进入了房间内，那么很显然，发言的内容只能是在房间内的人才能看到，这点我们都懂

所以下面我们再写一下房间内发言的逻辑，继续在app.js中开撸

### 处理房间内发言

```
// app.js文件
...省略
// 上来记录一个socket.id用来查找对应的用户
+ let mySocket = {};

io.on('connection', socket => {
    ...省略
    // 这是所有连接到服务端的socket.id
+   mySocket[socket.id] = socket;
    
    socket.on('message', msg => {
        if (private) {
            ...省略
        } else {
            // 如果rooms数组有值，就代表有用户进入了房间
+           if (rooms.length) {
                // 用来存储进入房间内的对应的socket.id
+               let socketJson = {};

+               rooms.forEach(room => {
                    // 取得进入房间内所对应的所有sockets的hash值，它便是拿到的socket.id
+                   let roomSockets = io.sockets.adapter.rooms[room].sockets;
+                   Object.keys(roomSockets).forEach(socketId => {
                        console.log('socketId', socketId);
                        // 进行一个去重，在socketJson中只有对应唯一的socketId
+                       if (!socketJson[socketId]) {
+                           socketJson[socketId] = 1;
+                       }
+                   });
+               });

                // 遍历socketJson，在mySocket里找到对应的id，然后发送消息
+               Object.keys(socketJson).forEach(socketId => {
+                   mySocket[socketId].emit('message', {
+                       user: username,
+                       color,
+                       content: msg,
+                       createAt: new Date().toLocaleString()
+                   });
+               });
            } else {
                // 如果不是私聊的，向所有人广播
                io.emit('message', {
                    user: username,
                    color,
                    content: msg,
                    createAt: new Date().toLocaleString()
                });
            }
        }
    });
});
```

重新运行app.js文件后，再进入房间聊天，会展示如下图的效果，只有在同一个房间内的用户，才能相互之间看到消息

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io6.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io6.png)</a>

麻雀虽小但五脏俱全，坚持写到这里的每一位都是赢家，不过我还想再完善最后一个小功能，就是展示一下历史消息

毕竟每次一进到聊天室都是空空如也的样子也太苍白了，还是希望了解到之前的用户聊了哪些内容的

那么继续加油，实现我们最后一个功能吧

### 展示历史消息

其实正确开发的情况，用户输入的所有消息应该是存在数据库中进行保存的，不过我们这里就不涉及其他方面的知识点了，就直接用纯前端的技术去模拟一下实现了

> 获取历史消息
这里让客户端去发送一个`getHistory`的事件，在**socket连接成功**的时候，告诉服务器我们要拿到最新的20条消息记录
```
// index.js
...省略

socket.on('connect', () => {
    console.log('连接成功');
    // 向服务器发getHistory来拿消息
+   socket.emit('getHistory');
});
```

> 服务端处理历史记录并返回

```
// app.js
...省略

// 创建一个数组用来保存最近的20条消息记录，真实项目中会存到数据库中
let msgHistory = [];

io.on('connection', socket => {
    ...省略
    io.on('message', msg => {
        ...省略
        if (private) {
            ...省略
        } else {
            io.emit('message', {
                user: username,
                color,
                content: msg,
                createAt: new Date().toLocaleString()
            });
            // 把发送的消息push到msgHistory中
            // 真实情况是存到数据库里的
+           msgHistory.push({
+               user: username,
+               color,
+               content: msg,
+              createAt: new Date().toLocaleString()
+          });
        }
    });
    
    // 监听获取历史消息的事件
+   socket.on('getHistory', () => {
        // 通过数组的slice方法截取最新的20条消息
+       if (msgHistory.length) {
+           let history = msgHistory.slice(msgHistory.length - 20);
            // 发送history事件并返回history消息数组给客户端
+           socket.emit('history', history);
+       }
+   });
});
客户端渲染历史消息
// index.js
...省略

// 接收历史消息
+ socket.on('history', history => {
    // history拿到的是一个数组，所以用map映射成新数组，然后再join一下连接拼成字符串
+   let html = history.map(data => {
+       return `<li class="list-group-item">
            <p style="color: #ccc;"><span class="user" style="color:${data.color}">${data.user} </span>${data.createAt}</p>
            <p class="content" style="background-color: ${data.color}">${data.content}</p>
        </li>`;
+   }).join('');
+   list.innerHTML = html + '<li style="margin: 16px 0;text-align: center">以上是历史消息</li>';
    // 将聊天区域的滚动条设置到最新内容的位置
+   list.scrollTop = list.scrollHeight;
+ });
```

这样就全部大功告成了，完成了最后的历史消息功能，如下图所示效果
<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io7.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/socket.io7.png)</a>
最后进行一个功能上的梳理吧，坚持到这里的人，我已经不知道如何表达对你的敬佩了，好样的

梳理一下

聊天室的功能完成了，看到这里头有点晕了，现在简单回忆一下，实际都有哪些功能

- 创建客户端与服务端的websocket通信连接
- 客户端与服务端相互发送消息
- 添加用户名
- 添加私聊
- 进入/离开房间聊天
- 历史消息

### 小Tips
针对以上代码中常用的发消息方法进行一下区分：

- socket.send()发送消息是为了给自己看的
- io.emit()发送消息是给所有人看的
- socket.broadcast.emit()发送消息除了自己都能看到

