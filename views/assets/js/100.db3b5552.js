(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{245:function(t,e,r){"use strict";r.r(e);var v=r(0),_=Object(v.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),r("h2",{attrs:{id:"什么是docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是Docker")]),t._v(" "),r("p",[t._v("我们在理解 docker 之前，首先我们得先区分清楚两个概念，容器和虚拟机。")]),t._v(" "),r("p",[r("strong",[t._v("虚拟机")])]),t._v(" "),r("p",[t._v("我们用的传统虚拟机如 VMware ， VisualBox 之类的需要模拟整台机器包括硬件，每台虚拟机都需要有自己的操作系统，虚拟机一旦被开启，预分配给它的资源将全部被占用。每一台虚拟机包括应用，必要的二进制和库，以及一个完整的用户操作系统。")]),t._v(" "),r("p",[r("strong",[t._v("容器")])]),t._v(" "),r("p",[t._v("而容器技术是和我们的宿主机共享硬件资源及操作系统，可以实现资源的动态分配。容器包含应用和其所有的依赖包，但是与其他容器共享内核。容器在宿主机操作系统中，在用户空间以分离的进程运行。")]),t._v(" "),r("p",[t._v("容器技术是实现操作系统虚拟化的一种途径，可以让您在资源受到隔离的进程中运行应用程序及其依赖关系。通过使用容器，我们可以轻松打包应用程序的代码、配置和依赖关系，将其变成容易使用的构建块，从而实现环境一致性、运营效率、开发人员生产力和版本控制等诸多目标。容器可以帮助保证应用程序快速、可靠、一致地部署，其间不受部署环境的影响。容器还赋予我们对资源更多的精细化控制能力，让我们的基础设施效率更高。通过下面这幅图我们可以很直观的反映出这两者的区别所在。")]),t._v(" "),r("p",[r("img",{attrs:{src:"docker-vm.png",alt:""}})]),t._v(" "),r("p",[t._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案。Docker是一个开源的引擎，可以轻松的为任何应用创建一个轻量级的、可移植的、 自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中 部署，包括VMs(虚拟机)、bare metal、OpenStack 集群和其他的基础应用平台。")]),t._v(" "),r("p",[t._v("而 Linux 容器是 Linux 发展出了另一种虚拟化技术，简单来讲， Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离，相当于是在正常进程的外面套了一个保护层。对于容器里面的进程来说，它接触到的各种资源都是虚拟的，从而实现与底层系统的隔离。")]),t._v(" "),r("p",[t._v("Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker ，就不用担心环境问题。")]),t._v(" "),r("p",[t._v("总体来说， Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),t._v(" "),r("h2",{attrs:{id:"docker通常用于如下场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker通常用于如下场景","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker通常用于如下场景:")]),t._v(" "),r("p",[t._v("Docker通常用于如下场景:")]),t._v(" "),r("ul",[r("li",[t._v("web应用的自动化打包和发布;")]),t._v(" "),r("li",[t._v("自动化测试和持续集成、发布;")]),t._v(" "),r("li",[t._v("在服务型环境中部署和调整数据库或其他的后台应用;")]),t._v(" "),r("li",[t._v("从头编译或者扩展现有的OpenShift或Cloud Foundry平台来搭建自己的PaaS环境。")])]),t._v(" "),r("h2",{attrs:{id:"docker的优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker的优势","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker的优势")]),t._v(" "),r("p",[t._v("Docker相比于传统虚拟化方式具有更多的优势：")]),t._v(" "),r("ul",[r("li",[t._v("docker 启动快速属于秒级别。虚拟机通常需要几分钟去启动")]),t._v(" "),r("li",[t._v("docker 需要的资源更少， docker 在操作系统级别进行虚拟化， docker 容器和内核交互，几乎没有性能损耗，性能优于通过 Hypervisor 层与内核层的虚拟化")]),t._v(" "),r("li",[t._v("docker 更轻量， docker 的架构可以共用一个内核与共享应用程序库，所占内存极小。同样的硬件环境， Docker 运行的镜像数远多于虚拟机数量，对系统的利用率非常高")]),t._v(" "),r("li",[t._v("与虚拟机相比， docker 隔离性更弱， docker 属于进程之间的隔离，虚拟机可实现系统级别隔离")]),t._v(" "),r("li",[t._v("安全性： docker 的安全性也更弱。 Docker 的租户 root 和宿主机 root 等同，一旦容器内的用户从普通用户权限提升为root权限，它就直接具备了宿主机的root权限，进而可进行无限制的操作。虚拟机租户 root 权限和宿主机的 root 虚拟机权限是分离的，并且虚拟机利用如 Intel 的 VT-d 和 VT-x 的 ring-1 硬件隔离技术，这种隔离技术可以防止虚拟机突破和彼此交互，而容器至今还没有任何形式的硬件隔离，这使得容器容易受到攻击")]),t._v(" "),r("li",[t._v("可管理性： docker 的集中化管理工具还不算成熟。各种虚拟化技术都有成熟的管理工具，例如 VMware vCenter 提供完备的虚拟机管理能力")]),t._v(" "),r("li",[t._v("高可用和可恢复性： docker 对业务的高可用支持是通过快速重新部署实现的。虚拟化具备负载均衡，高可用，容错，迁移和数据保护等经过生产实践检验的成熟保障机制， VMware 可承诺虚拟机 99.999% 高可用，保证业务连续性")]),t._v(" "),r("li",[t._v("快速创建、删除：虚拟化创建是分钟级别的， Docker 容器创建是秒级别的， Docker 的快速迭代性，决定了无论是开发、测试、部署都可以节约大量时间")]),t._v(" "),r("li",[t._v("交付、部署：虚拟机可以通过镜像实现环境交付的一致性，但镜像分发无法体系化。 Docker 在 Dockerfile 中记录了容器构建过程，可在集群中实现快速分发和快速部署")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("特性")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("容器")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("虚拟机")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("启动")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("秒级")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("分钟级")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("硬盘使用")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("一般为MB")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("一般为GB")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("性能")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("接近原生")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("弱于")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("系统支持量")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("单机支持上千个容器")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("一般是几十个")])])])])])},[],!1,null,null,null);e.default=_.exports}}]);