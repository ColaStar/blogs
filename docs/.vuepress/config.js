const {
  getJsonFiles,
  getStr
} = require('./fs.js')
console.log(getStr(Math.ceil(Math.random() * 10)))
console.log(typeof getStr(Math.ceil(Math.random() * 10)))
module.exports = {
  repo: "ColaStar/blogs/views",
  title: '个人博客', // 设置网站标题
  head: [
    ['link', {
      rel: 'icon',
      href: `./public/favicon.ico`
    }],
    ['link', {
      rel: 'manifest',
      href: './public/manifest.json'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: './public/images/logo.png'
    }],
    // add jquert and fancybox
    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js'
    }],
    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js'
    }],
    ['script', {
      src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
    }],
    ['script', {
      src: './js/tj.js'
    }],
    ['script', {
      src: './js/code.js'
    }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css'
    }]
  ],
  description: getStr(Math.ceil(Math.random() * 10)), //网站描述。这将在页面 HTML 中表现为一个 <meta> 标签。
  base: '/blogs/views/',
  assestsPublicPath: '/blogs/views/',
  port: 9527, //dev 服务器的端口
  dest: './views', //指定 vuepress build 的输出目录。
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  serviceWorker: true,
  themeConfig: {
    sidebarDepth: 4, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址",

    // shouldPrefetch
    // displayAllHeaders: true
    //toc
    sidebar: {
      "/no.0/": getJsonFiles('./docs/no.0/'),
      "/javascript-QA/": getJsonFiles('./docs/javascript-QA/'),
      "/no.1/": getJsonFiles('./docs/no.1/'),
      "/no.2/": getJsonFiles('./docs/no.2/'),
      "/no.3/": getJsonFiles('./docs/no.3/'),
      "/no.4/": getJsonFiles('./docs/no.4/'),
      "/no.5/": getJsonFiles('./docs/no.5/'),
      "/no.6/": getJsonFiles('./docs/no.6/'),
      "/no.7/": getJsonFiles('./docs/no.7/'),
      "/no.8/": getJsonFiles('./docs/no.8/'),
      "/no.10/": getJsonFiles('./docs/no.10/'),
      "/node/": getJsonFiles('./docs/node/'),
      "/other/": getJsonFiles('./docs/other/'),
    },
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '博文',
        items: [{
            text: '前端基础',
            link: '/no.0/js/es6.md'
          },
          {
            text: 'javaScript与测试工程师',
            link: '/javascript-QA/javascriptqa'
          },
          {
            text: '编程相关',
            link: '/no.1/函数式编程/函数式编程'
          },
          {
            text: '网络',
            link: '/no.2/http'
          },
          {
            text: '前端自动化',
            link: '/no.3/webpack'
          },
          {
            text: '前端优化',
            link: '/no.4/前端性能优化'
          },
          {
            text: 'css相关',
            link: '/no.5/css工作流'
          },
          {
            text: '框架相关',
            link: '/no.6/react/react'
          },
          {
            text: '计算机组成原理',
            link: '/no.7/计算机组成原理'
          },
          {
            text: '数据结构与算法',
            link: '/no.8/数据结构与算法'
          },
          {
            text: 'node相关',
            link: '/node/node/node'
          },
          {
            text: '网络安全',
            link: '/no.10/网络安全'
          },
          {
            text: '其他相关',
            link: '/other/git/git命令全集'
          },
        ]
      },
      {
        text: '面试',
        link: '/no.1/'
      },
      {
        text: 'Github',
        link: 'https://github.com/ColaStar/blogs'
      },
    ],
    // sidebar: 'auto', //如果你希望自动生成仅包含当前页面的标题链接的侧边栏，则可以在该页面上使用 YAML front matter
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
        margin: 16
      }
    },
    '@vuepress/back-to-top': true
  }
};