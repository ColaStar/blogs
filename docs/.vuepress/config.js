module.exports = {
  title: '个人博客', // 设置网站标题
  head: [
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
  description: '来了老弟', //网站描述。这将在页面 HTML 中表现为一个 <meta> 标签。
  base: '/blogs/views/',
  assestsPublicPath: '/blogs/views/',
  port: 9527, //dev 服务器的端口
  dest: './views', //指定 vuepress build 的输出目录。
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  chainWebpack: (config, isServer) => {
    // config is an instance of ChainableConfig
    config.resolveLoader.staticOptions = '2222'

    // console.log(config.resolveLoader,'eeeeeee')   

    // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    // config.loader('url-loader!limit: 100000')
    // .options({
    //   limit: 100000,
    //   name: '/blogs/views/images/[name].[ext]'
    // })

  },
  themeConfig: {
    sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    nav: [{
        text: '前端资料',
        items: [
          //no.0   css
          {
            text: 'css',
            items: [{
                text: 'css3D',
                link: '/no.0/css-3d/css-3d'
              },
              {
                text: 'css3开发常备核心技能',
                link: '/no.0/css-core/css-core'
              },
              {
                text: 'CSS分层理论与面向对象',
                link: '/no.0/css-core/css-layer'
              },
              {
                text: 'CSS与数学',
                link: '/no.0/css-math/css-math'
              }
            ]
          },
          //no.0   html
          {
            text: 'HTML',
            items: [{
              text: '你不知道的HTML',
              link: '/no.0/html-senior/html-senior'
            }]
          },
          //no.0   JavaScript
          {
            text: 'JavaScript语言新发展',
            items: [{
                text: 'ES6 在企业中的应用',
                link: '/no.0/JavaScript语言新发展【深度实践课】/ES6 在企业中的应用'
              },
              {
                text: 'javascript与QA工程师',
                link: '/no.0/JavaScript语言新发展【深度实践课】/javascript与QA工程师'
              },
              {
                text: 'TypeScript 前世今生',
                link: '/no.0/JavaScript语言新发展【深度实践课】/TypeScript 前世今生'
              }
            ]
          },
          //no.0   JavaScript
          {
            text: 'JavaScript',
            items: [{
                text: 'Jquery',
                link: '/no.0/JQuery/Jquery'
              },
              {
                text: 'bind_call_apply',
                link: '/no.0/js/bind_call_apply'
              },
              {
                text: 'ES6',
                link: '/no.0/js/es6'
              },
              {
                text: 'js核心',
                link: '/no.0/js/js-core'
              },
              {
                text: '作用域',
                link: '/no.0/js/scope'
              },
              {
                text: 'This',
                link: '/no.0/js/this'
              }
            ]
          },
          //其他相关
          {
            text: '其他相关',
            items: [{
                text: 'React',
                link: '/no.6/react/react'
              },
              {
                text: '优雅降级与渐进增强',
                link: '/other/优雅降级与渐进增强'
              },
              {
                text: 'socket',
                link: '/no.2/webSocket与socket.io'
              },
              {
                text: 'TypeScript',
                link: '/other/TypeScript'
              }, {
                text: '网站令浏览器崩溃的原因',
                link: '/other/网站令浏览器崩溃的原因'
              }, {
                text: '数据结构与算法',
                link: '/no.8/数据结构与算法'
              }, {
                text: '计算机组成原理',
                link: '/no.7/计算机组成原理'
              }
            ]
          },
          {
            text: 'Git相关',
            items: [{
                text: 'git命令大全',
                link: '/other/git/git命令全集'
              },
              {
                text: 'git版本管理规范',
                link: '/other/git/git版本管理规范'
              }
            ]
          },
          // 前端自动化与工程化
          {
            text: '前端工程化',
            items: [{
                text: '免密登录',
                link: '/no.3/免密登录'
              },
              {
                text: '前端自动化',
                link: '/no.3/前端自动化'
              },
              {
                text: '文件操作权限',
                link: '/no.3/文件操作权限'
              },
              {
                text: 'bower',
                link: '/no.3/bower'
              },
              {
                text: 'browserify',
                link: '/no.3/browserify'
              },
              {
                text: 'centos问题整理',
                link: '/no.3/centos_jenkins_nginx遇到的一些问题'
              },
              {
                text: 'CommoJS与ES6module对比',
                link: '/no.3/CommoJS与ES6module对比'
              },
              {
                text: 'grunt',
                link: '/no.3/grunt'
              },
              {
                text: 'gulp',
                link: '/no.3/gulp'
              },
              {
                text: 'jenkins',
                link: '/no.3/jenkins'
              },
              {
                text: 'sed与awk',
                link: '/no.3/linux_sed_awk'
              },
              {
                text: 'LINUX创建文件和目录的默认权限',
                link: '/no.3/LINUX创建文件和目录的默认权限'
              },
              {
                text: 'linux防火墙',
                link: '/no.3/linux防火墙'
              },
              {
                text: 'parcel',
                link: '/no.3/parcel'
              },

              {
                text: 'pm2指南',
                link: '/no.3/pm2指南'
              },
              {
                text: 'rollup',
                link: '/no.3/rollup'
              },
              {
                text: 'webpack',
                link: '/no.3/webpack'
              },
              {
                text: 'yeoman',
                link: '/no.3/yeoman'
              },
              {
                text: 'CommoJS与ES6module对比',
                link: '/no.3/CommoJS与ES6module对比'
              }
            ]
          },
          // 前端优化
          {
            text: '前端优化',
            items: [{
                text: '雅虎军规',
                link: '/no.4/雅虎军规'
              },
              {
                text: '面向切面编程',
                link: '/no.4/aop面向切面编程'
              },
              {
                text: '前端高级调试',
                link: '/no.4/前端高级调试'
              },
              {
                text: 'js内存泄露',
                link: '/no.4/js内存泄露'
              },
              {
                text: '前端性能优化',
                link: '/no.4/前端性能优化'
              },
              {
                text: '前端性能优化之缓存利用',
                link: '/no.4/前端性能优化之缓存利用'
              },
              {
                text: '前端性监控',
                link: '/no.4/前端性监控'
              },
              {
                text: 'basketJS',
                link: '/no.4/basketJS'
              },
              {
                text: 'IOC/DI',
                link: '/no.4/ioc_DI'
              },
              {
                text: 'fundbug',
                link: '/no.4/fundbug'
              },
              {
                text: 'localForage',
                link: '/no.4/localForage'
              },
              {
                text: 'pajax',
                link: '/no.4/pajax'
              },
              {
                text: 'quicklink',
                link: '/no.4/quicklink'
              },
            ]
          },
          //no.0   Linux
          {
            text: 'Linux',
            items: [{
              text: 'Linux',
              link: '/no.0/linux/linux'
            }]
          },
          //no.0   php&mysql
          {
            text: 'MySQL & PHP',
            items: [{
              text: 'MySQL & PHP',
              link: '/no.0/php&mysql/php&mysql'
            }]
          },
          //no.0   读博客有感
          {
            text: '读博客有感',
            items: [{
                text: 'bind的模拟实现',
                link: '/no.0/读博客有感/bind的模拟实现'
              },
              {
                text: 'call和apply的模拟实现',
                link: '/no.0/读博客有感/call和apply的模拟实现'
              },
              {
                text: 'new的模拟实现',
                link: '/no.0/读博客有感/new的模拟实现'
              },
              {
                text: '作用域链',
                link: '/no.0/读博客有感/作用域链'
              },
              {
                text: '原型与原型链',
                link: '/no.0/读博客有感/原型与原型链'
              },
              {
                text: '变量对象',
                link: '/no.0/读博客有感/变量对象'
              },
              {
                text: '执行上下文栈',
                link: '/no.0/读博客有感/执行上下文栈'
              },
              {
                text: '词法作用域与动态作用域',
                link: '/no.0/读博客有感/词法作用域与动态作用域'
              },
              {
                text: '闭包',
                link: '/no.0/读博客有感/闭包'
              }
            ]
          },
        ]
      },
      {
        text: 'javascript与测试工程师',
        link: '/javascript-QA/index'
      },
      {
        text: 'HTTP',
        link: '/no.2/http'
      },
      {
        text: '编程思想',
        // no.1
        items: [{
            text: '元编程',
            items: [{
              text: '元编程',
              link: '/no.1/元编程/'
            }]
          },
          {
            text: '函数式编程',
            items: [{
              text: '函数式编程',
              link: '/no.1/函数式编程/'
            }]
          }
        ],
      },
      {
        text: 'node',
        // no.1
        items: [{
            text: 'node',
            items: [{
                text: 'node',
                link: '/node/node/node'
              }, {
                text: '文件模块',
                link: '/node/node/fs'
              },
              {
                text: 'node热启动',
                link: '/node/node/nodemon'
              }
            ]
          },
          {
            text: 'Express',
            // no.1
            items: [{
              text: 'express',
              link: '/node/express/express'
            }, {
              text: '中间件',
              link: '/node/express/middleware'
            }],
          },
          {
            text: 'Koa',
            // no.1
            items: [{
              text: 'koa',
              link: '/node/koa/koa'
            }, {
              text: 'koa路由',
              link: '/node/koa/koa_router'
            }, {
              text: 'koa应用生成器',
              link: '/node/koa/koa-generator'
            }],
          },
          {
            text: 'npm-scripts',
            link: '/node/npm/npm-scripts'
          }
        ],
      },
      ///no.3
      {
        text: '自动化文档',
        // no.1
        items: [{
            text: 'centos遇到的一些问题',
            items: [{
              text: 'centos遇到的一些问题',
              link: '/no.3/centos_jenkins_nginx遇到的一些问题'
            }]
          },
          {
            text: 'nginx',
            items: [{
              text: 'nginx',
              link: '/no.2/nginx'
            }]
          },
          {
            text: 'jenkins',
            items: [{
              text: 'jenkins',
              link: '/no.3/jenkins'
            }]
          },
          {
            text: 'linux_sed_awk',
            items: [{
              text: 'linux_sed_awk',
              link: '/no.3/linux_sed_awk'
            }]
          }, {
            text: 'linux防火墙',
            items: [{
              text: 'linux防火墙',
              link: '/no.3/linux防火墙'
            }]
          }, {
            text: 'webpack',
            items: [{
              text: 'webpack',
              link: '/no.3/webpack'
            }]
          },
          {
            text: '免密登陆',
            items: [{
              text: '免密登陆',
              link: '/no.3/免密登陆'
            }]
          },
          {
            text: '前端自动化',
            items: [{
              text: '前端自动化',
              link: '/no.3/前端自动化'
            }]
          },
          {
            text: '文件操作权限',
            items: [{
              text: '文件操作权限',
              link: '/no.3/文件操作权限'
            }]
          },
        ],
      },
    ],
    // sidebar: [
    //   ['/node/','Express'],
    //   ['/javascript-QA/','JavaScript与QA工程师'],
    //   ['/node/fs','fs'],
    //   ['/node/node','node'],
    //   {
    //     title: 'JavaScript与QA工程师',
    //     collapsable: false, //侧边栏组默认情况下是可折叠的。你可以强制一个组始终以 collapsable：false 打
    //     children: [
    //       ['apiword', '杀杀杀 啊水水'],
    //       ['api', '杀杀杀'],
    //       ['error', 'xplicit link tEext']
    //     ]
    //   },
    //   {
    //     title: 'Node解析',
    //     children: [
    //       "/Node/fs", //根目录创建 fs.md文件
    //       "/Node/node", //根目录创建 node.md文件
    //       // ['error', 'Explicit link text']
    //     ]
    //   }
    // ],
    sidebar: 'auto', //如果你希望自动生成仅包含当前页面的标题链接的侧边栏，则可以在该页面上使用 YAML front matter
  }
};