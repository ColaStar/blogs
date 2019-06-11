# Node.js Express 框架

- express简介
- 安装express
- 请求与响应
- 路由
- 处理静态文件
- 文件上传
- GET与POST
- Cookie 管理

## express简介
---------------------------------------------------
**基于 Node.js 平台，快速、开放、极简的 Web 开发框架**
> 核心特性

- 可以设置中间件来响应 HTTP 请求。

- 定义了路由表用于执行不同的 HTTP 请求动作。

- 可以通过向模板传递参数来动态渲染 HTML 页面。
## 安装express

```
npm install express --save
```
**几个重要的中间件**
- body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

- cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

- multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

> node query实现

<a data-fancybox title="query" href="/images/query.png">![query](/images/query.png)</a>




