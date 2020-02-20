(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{256:function(v,t,e){"use strict";e.r(t);var _=e(0),n=Object(_.a)({},function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("blockquote",[e("p",[v._v("CI/CD持续集成/持续部署")])]),v._v(" "),e("ul",[e("li",[v._v("CI")])]),v._v(" "),e("p",[e("code",[v._v("持续集成")]),v._v("  (Continuous integration)是一种软件开发实践，在持续集成环境中，开发人员将会频繁的提交代码到主干。这些新提交在最终合并到主线之前，都需要通过编译和自动化测试流进行验证。这样做是基于之前持续集成过程中很重视自动化测试验证结果，以保障所有的提交在合并主干之后的质量问题，对可能出现的一些问题进行预警。。")]),v._v(" "),e("ul",[e("li",[v._v("cd")])]),v._v(" "),e("p",[e("code",[v._v("持续部署")]),v._v(" （continuous deployment）")]),v._v(" "),e("p",[v._v("如果我们想更加深入一步的话，就是持续部署了。通过这\n个方式，任何修改通过了所有已有的工作流就会直接和客\n户见面。没有人为干预(没有一键部署按钮)，只有当一\n个修改在工作流中构建失败才能阻止它部署到产品线。")]),v._v(" "),e("p",[v._v("持续部署是一个很优秀的方式，可以加速与客户的反馈循 环，但是会给团队带来压力，因为不再有“发布日”了。开 发人员可以专注于构建软件，他们看到他们的修改在他们 完成工作后几分钟就上线了。基本上，当开发人员在主分 支中合并一个提交时，这个分支将被构建、测试，如果一 切顺利，则部署到生产环境中。")]),v._v(" "),e("p",[e("code",[v._v("持续交付")]),v._v(" （英语：Continuous delivery，缩写为 CD)")]),v._v(" "),e("p",[v._v("持续交付就是讲我们的应用发布出去的过程。这个过程\n可以确保我们尽可能快的实现交付。这就意味着除了自\n动化测试，我们还需要有自动化的发布流，以及通过一\n个按键就可以随时随地实现应用的部署上线。")]),v._v(" "),e("p",[v._v("通过持续交付，您可以决定每天，每周，每两周发布一\n次，这完全可以根据自己的业务进行设置。")]),v._v(" "),e("p",[v._v("但是，如果您真的希望体验持续交付的优势，就需要先\n进行小批量发布，尽快部署到生产线，以便在出现问题\n时方便进行故障排除。")]),v._v(" "),e("blockquote",[e("p",[v._v("与DevOps的关系")])]),v._v(" "),e("p",[v._v("持续交付与DevOps的含义很相似，所以经常被混淆。但是它们是不同的两个概念。DevOps的范围更广，它以文化变迁为中心，特别是软件交付过程所涉及的多个团队之间的合作（开发、运维、QA、管理部门等），并且将软件交付的过程自动化。另壹方面，持续交付是壹种自动化交付的手段，关注点在于将不同的过程集中起来，并且更快、更频繁地执行这些过程。因此，DevOps可以是持续交付的壹个产物，持续交付直接汇入DevOps；")]),v._v(" "),e("blockquote",[e("p",[v._v("与持续部署的关系")])]),v._v(" "),e("p",[v._v("有时候，持续交付也与持续部署混淆。持续部署意味着所有的变更都会被自动部署到生产环境中。持续交付意味着所有的变更都可以被部署到生产环境中，但是出于业务考虑，可以选择不部署。如果要实施持续部署，必须先实施持续交付。")]),v._v(" "),e("blockquote",[e("p",[v._v("自动化工具：devops,jenkins")])]),v._v(" "),e("blockquote",[e("p",[v._v("持续集成的需求（为什么要持续集成）")])]),v._v(" "),e("ul",[e("li",[v._v("1.持续集成是通过平台串联各个开发环节，实现和沉淀 工作自动化的方法。")]),v._v(" "),e("li",[v._v("2.线上代码和代码仓库不同步，影响迭代和团队协作。")]),v._v(" "),e("li",[v._v("3.静态资源发布依赖人工，浪费开发人力。")]),v._v(" "),e("li",[v._v("4.缺少自动化测试，产品质量得不到保障。")]),v._v(" "),e("li",[v._v("5.文案简单修改上线，需要技术介入。\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/jenkins_流程图1.jpg"}},[e("img",{attrs:{src:"https://colastar.github.io/static/images/jenkins_%E6%B5%81%E7%A8%8B%E5%9B%BE1.jpg",alt:""}})])])]),v._v(" "),e("blockquote",[e("p",[v._v("自动化实现的一些技术")])]),v._v(" "),e("p",[v._v("1.统一代码仓库通过分支管理合并主干SVN。\n2.自动化构建工具，编译、部署、测试、监控、本机 开发上线环境。FIS3/Webpack/jdists/package.json/ chai/supertest/mocha/selenium-webdriver\n3.持续集成平台。Jenkins、Travis CI\n4.部署工具。rsync、shelljs、yargs\n5.运营同学有权限操作运营页面保存即可上线。")]),v._v(" "),e("p",[v._v("艺术字体\nhttps://www.bootschool.net/ascii-art/search?pageNO=4&keyword=%E4%BA%BA")])])},[],!1,null,null,null);t.default=n.exports}}]);