(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{163:function(t,e,o){"use strict";o.r(e);var i=o(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"前后端分离与用户验证"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离与用户验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 前后端分离与用户验证")]),t._v(" "),o("h2",{attrs:{id:"前后端不分离"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前后端不分离","aria-hidden":"true"}},[t._v("#")]),t._v(" 前后端不分离")]),t._v(" "),o("p",[t._v("一坨东西，一台机器上，session在内存中，需要做持久化存在数据库里，不能因为服务器重而是数据丢失，所以需要持久化")]),t._v(" "),o("p",[t._v("分为三层：用户（浏览器）/UI/业务逻辑/持久层\n用户浏览器 - > UI -> 业务逻辑层 -> 持久层")]),t._v(" "),o("p",[t._v("cookie中有个sid（与session中的sessionId一样）")]),t._v(" "),o("h2",{attrs:{id:"前后端分离"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离","aria-hidden":"true"}},[t._v("#")]),t._v(" 前后端分离")]),t._v(" "),o("p",[t._v("不同的服务上")]),t._v(" "),o("p",[t._v("最简单的前后端分离，支持多端（pc，moilble，app）")]),t._v(" "),o("p",[t._v("不同端的不同模块的UI -> 通过业务接口 -> 业务逻辑（多端是没有差异） -> 基本接口 -> 基础服务（不涉及业务，抽象出来的基础） -> 持久层")]),t._v(" "),o("p",[t._v("验证 -> 传到业务模块中的验证模块 -> 存到session->")]),t._v(" "),o("p",[t._v("用户状态（cookie） ->通过session验证 ->")]),t._v(" "),o("p",[t._v("app用token去判断")]),t._v(" "),o("h2",{attrs:{id:"cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),o("p",[t._v("由谁产生？只能由服务器产生，是与session挂钩的，")]),t._v(" "),o("p",[t._v("谁可以修改，客户端和服务器都可以修改")]),t._v(" "),o("p",[t._v("特殊的cookie（把一些敏感的数据设置为它），http only，只有服务器可以修改，客户端不能修改")]),t._v(" "),o("h3",{attrs:{id:"为什么要设置httponly？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#为什么要设置httponly？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么要设置httpOnly？")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("1.会话cookie中缺少HttpOnly属性会导致攻击者可以通过程序(JS脚本、Applet等)获取到用户的cookie信息，造成用户cookie信息泄露，增加攻击者的跨站脚本攻击威胁。")])]),t._v(" "),o("li",[o("p",[t._v("2.HttpOnly是微软对cookie做的扩展，该值指定cookie是否可通过客户端脚本访问。Microsoft Internet Explorer 版本 6 Service Pack 1 和更高版本支持cookie属性HttpOnly。")])]),t._v(" "),o("li",[o("p",[t._v("3.如果在Cookie中没有设置HttpOnly属性为true，可能导致Cookie被窃取。窃取的Cookie可以包含标识站点用户的敏感信息，如ASP.NET会话ID或Forms身份验证票证，攻击者可以重播窃取的Cookie，以便伪装成用户或获取敏感信息，进行跨站脚本攻击等。")])]),t._v(" "),o("li",[o("p",[t._v("4.如果在Cookie中设置HttpOnly属性为true，兼容浏览器接收到HttpOnly cookie，那么客户端通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这将有助于缓解跨站点脚本威胁。")])])])])},[],!1,null,null,null);e.default=s.exports}}]);