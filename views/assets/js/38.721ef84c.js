(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{216:function(a,s,n){"use strict";n.r(s);var e=n(0),t=Object(e.a)({},function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"v8-下的垃圾回收机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v8-下的垃圾回收机制","aria-hidden":"true"}},[a._v("#")]),a._v(" V8 下的垃圾回收机制")]),a._v(" "),n("p",[a._v("V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。")]),a._v(" "),n("h2",{attrs:{id:"新生代算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新生代算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 新生代算法")]),a._v(" "),n("p",[a._v("新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。")]),a._v(" "),n("p",[a._v("在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。")]),a._v(" "),n("h2",{attrs:{id:"老生代算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#老生代算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 老生代算法")]),a._v(" "),n("p",[a._v("老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是标记清除算法和标记压缩算法。")]),a._v(" "),n("p",[a._v("在讲算法前，先来说下什么情况下对象会出现在老生代空间中：")]),a._v(" "),n("ul",[n("li",[a._v("新生代中的对象是否已经经历过一次 Scavenge 算法，如果经历过的话，会将对象从新生代空间移到老生代空间中。")]),a._v(" "),n("li",[a._v("To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。\n老生代中的空间很复杂，有如下几个空间")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("enum AllocationSpace {\n  // TODO(v8:7464): Actually map this space's memory as read-only.\n  RO_SPACE,    // 不变的对象空间\n  NEW_SPACE,   // 新生代用于 GC 复制算法的空间\n  OLD_SPACE,   // 老生代常驻对象空间\n  CODE_SPACE,  // 老生代代码对象空间\n  MAP_SPACE,   // 老生代 map 对象\n  LO_SPACE,    // 老生代大空间对象\n  NEW_LO_SPACE,  // 新生代大空间对象\n\n  FIRST_SPACE = RO_SPACE,\n  LAST_SPACE = NEW_LO_SPACE,\n  FIRST_GROWABLE_PAGED_SPACE = OLD_SPACE,\n  LAST_GROWABLE_PAGED_SPACE = MAP_SPACE\n};\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br")])]),n("p",[a._v("在老生代中，以下情况会先启动标记清除算法：")]),a._v(" "),n("ul",[n("li",[a._v("某一个空间没有分块的时候")]),a._v(" "),n("li",[a._v("空间中被对象超过一定限制")]),a._v(" "),n("li",[a._v("空间不能保证新生代中的对象移动到老生代中")])]),a._v(" "),n("p",[a._v("在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型对内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行，你可以点击 "),n("a",{attrs:{href:"https://v8.dev/blog/concurrent-marking",target:"_blank",rel:"noopener noreferrer"}},[a._v("该博客"),n("OutboundLink")],1),a._v(" 详细阅读。")]),a._v(" "),n("p",[a._v("清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。")])])},[],!1,null,null,null);s.default=t.exports}}]);