# 微前端Micro-Frontend

概念

是将微服务理念用于前端技术后的相关实践，使得一个前端项目能够
特性：

- 各个开发团队都可以自行选择技术栈，不受同一项目中其他团队影响。

- 前端的项目抽成一块块的，每个块都是独立的一块的，互不影响

bfcChace往返缓存（好好看看）
在大型团队里边一个项目多个技术
入门

yog2 实现微前端笔记比较老
crm 中台

微前端组件不能通信，用webcomponent


浏览器支持用modlue不支持用systemjs

如果让你做一个single-spa你怎么做

首先想他们最后后变成什么，不就是一个js么，但是不用webpack（原因：需要使用统一的模块加载机制，webpack的chunk，webpack不支持任何库改变他的模块机制，）先保持组件之间的独立，代码必须是自己的那一套模块规范（systemjs）

首先要有一个主线，

mooa单个框架的前端微服务框架。

多框架用single-spa实现微前端

OMi框架webcompont如果可以的话，这个就牛逼了

nust nest next `neat css框架`四个ssr框架