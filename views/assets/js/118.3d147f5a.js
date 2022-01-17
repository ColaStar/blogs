(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{521:function(s,a,n){"use strict";n.r(a);var t=n(56),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_10大经典排序算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10大经典排序算法"}},[s._v("#")]),s._v(" 10大经典排序算法")]),s._v(" "),n("h2",{attrs:{id:"排序算法分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#排序算法分类"}},[s._v("#")]),s._v(" 排序算法分类：")]),s._v(" "),n("p",[s._v("十种常见的排序算法可以分为俩大类：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("比较类算法：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn),因此也称为非线性时间比较类的排序。")])]),s._v(" "),n("li",[n("p",[s._v("非比较类排序：不同比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以非线性时间运行，因此也称为线性时间非比较类排序。")])])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/排序算法分类.png"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E5%88%86%E7%B1%BB.png",alt:""}})])]),s._v(" "),n("blockquote",[n("p",[s._v("排序算法对比")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/排序算法对比.png"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E5%AF%B9%E6%AF%94.png",alt:""}})])]),s._v(" "),n("h3",{attrs:{id:"冒泡排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[s._v("#")]),s._v(" 冒泡排序")]),s._v(" "),n("p",[s._v("冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("ul",[n("li",[s._v("1.比较相邻的元素，如果第一个比第二个大的化，就交换位置，")]),s._v(" "),n("li",[s._v("2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；")]),s._v(" "),n("li",[s._v("3.针对所有的元素重复以上的步骤，除了最后一个；")]),s._v(" "),n("li",[s._v("4.重复以上3步，直到排序完成")])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/冒泡排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("p",[s._v("代码实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function bubbleSort(arr){\n    for(var i = 0;i<arr.length;i++){\n        for(var j = 0;j<arr.length;j++){\n            if(arr[j]>arr[j+1]){\n                var temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    return arr\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"选择排序-selection-sort"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选择排序-selection-sort"}},[s._v("#")]),s._v(" 选择排序（Selection Sort）")]),s._v(" "),n("p",[s._v("选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("ul",[n("li",[s._v("n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。")]),s._v(" "),n("li",[s._v("每次循环 从第n个开始找到后边所有书的最小值，然后与第n个互换位置")]),s._v(" "),n("li",[s._v("n-1趟结束，数组有序化了。")])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/选择排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("p",[s._v("代码实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function selectionSort(arr){\n    for(var i = 0;i < arr.length;i++){\n        var minIndex = i\n        for(var j=i+1;j < arr.length;j++){\n          //找到最小的值；\n            if(arr[j] < arr[minIndex]){\n                minIndex = j  //// 将最小数的索引保存\n            }\n        }\n        var temp = arr[i];\n        arr[i] = arr[minIndex];\n        arr[minIndex] = temp\n    }\n    return arr\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"插入排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[s._v("#")]),s._v(" 插入排序")]),s._v(" "),n("p",[s._v("插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("p",[s._v("一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：")]),s._v(" "),n("ul",[n("li",[s._v("1.从第一个元素开始，该元素可以认为已经被排序；")]),s._v(" "),n("li",[s._v("2.取出下一个元素，在已经排序的元素序列中从后向前扫描；")]),s._v(" "),n("li",[s._v("3.如果该元素（已排序）大于新元素，将该元素移到下一位置；")]),s._v(" "),n("li",[s._v("4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；")]),s._v(" "),n("li",[s._v("5.将新元素插入到该位置后；")]),s._v(" "),n("li",[s._v("6.重复步骤2~5。")])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/插入排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("p",[s._v("代码实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function insertionSort(arr){\n  for(var i = 1;i<arr.length;i++){\n    var preIndex = i-1;\n    var current = arr[i]\n    while(preIndex >= 0 && arr[preIndex] > current){\n        arr[preIndex+1] = arr[preIndex];\n        preIndex--;\n    }\n    arr[preIndex + 1] = current\n  }\n  return arr\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("blockquote",[n("p",[s._v("算法分析")])]),s._v(" "),n("p",[s._v("插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。")]),s._v(" "),n("h2",{attrs:{id:"希尔排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#希尔排序"}},[s._v("#")]),s._v(" 希尔排序")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("p",[s._v("先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：")]),s._v(" "),n("ul",[n("li",[s._v("选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；")]),s._v(" "),n("li",[s._v("按增量序列个数k，对序列进行k 趟排序；")]),s._v(" "),n("li",[s._v("每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。")])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/希尔排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("p",[s._v("代码实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function shellSort(arr) {\n    var len = arr.length;\n    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {\n        // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行\n        for (var i = gap; i < len; i++) {\n            var j = i;\n            var current = arr[i];\n            while (j - gap >= 0 && current < arr[j - gap]) {\n                 arr[j] = arr[j - gap];\n                 j = j - gap;\n            }\n            arr[j] = current;\n        }\n    }\n    return arr;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h2",{attrs:{id:"归并排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#归并排序"}},[s._v("#")]),s._v(" 归并排序")]),s._v(" "),n("p",[n("strong",[s._v("归并排序")]),s._v("是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("ul",[n("li",[s._v("把长度为n的输入序列分成两个长度为n/2的子序列；")]),s._v(" "),n("li",[s._v("对这两个子序列分别采用归并排序；")]),s._v(" "),n("li",[s._v("将两个排序好的子序列合并成一个最终的排序序列。")])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/归并排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("p",[s._v("代码实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function mergeSort(arr) {\n    var len = arr.length;\n    if (len < 2) {\n        return arr;\n    }\n    var middle = Math.floor(len / 2),\n        left = arr.slice(0, middle),\n        right = arr.slice(middle);\n    return merge(mergeSort(left), mergeSort(right));\n}\n \nfunction merge(left, right) {\n    var result = [];\n \n    while (left.length>0 && right.length>0) {\n        if (left[0] <= right[0]) {\n            result.push(left.shift());\n        } else {\n            result.push(right.shift());\n        }\n    }\n \n    while (left.length)\n        result.push(left.shift());\n \n    while (right.length)\n        result.push(right.shift());\n \n    return result;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("blockquote",[n("p",[s._v("算法分析")])]),s._v(" "),n("p",[s._v("归并排序是一种稳定的排序方法。和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(nlogn）的时间复杂度。代价是需要额外的内存空间")]),s._v(" "),n("h2",{attrs:{id:"快速排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[s._v("#")]),s._v(" 快速排序")]),s._v(" "),n("p",[s._v("快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述\n快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：")])]),s._v(" "),n("ul",[n("li",[s._v("从数列中挑出一个元素，称为 “基准”（pivot）；")]),s._v(" "),n("li",[s._v("重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；")]),s._v(" "),n("li",[s._v("递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。")])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/快速排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("p",[s._v("代码实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function quickSort = function(arr){\n    if(arr.length<=1){\n        return arr\n    }\n    var pivoIndex = Math.floor(arr.length/2);取基准点\n    var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数\n    var left = [];//存放比基准点小的数组\n　　var right = [];//存放比基准点大的数组 \n    for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配 \n　　　　if (arr[i] < pivot) {\n　　　　　　left.push(arr[i]);//比基准点小的放在左边数组 \n　　　　} else {\n　　　　　　right.push(arr[i]);//比基准点大的放在右边数组 \n　　　　}\n　　}\n    return quickSort(left).concat([pivot], quickSort(right));\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("blockquote",[n("p",[s._v("算法分析")])]),s._v(" "),n("p",[s._v("时间复杂度为log(n)")]),s._v(" "),n("h2",{attrs:{id:"堆排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#堆排序"}},[s._v("#")]),s._v(" 堆排序")]),s._v(" "),n("p",[s._v("堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("ul",[n("li",[s._v("将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；")]),s._v(" "),n("li",[s._v("将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]；")]),s._v(" "),n("li",[s._v("由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。")])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/快速排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("p",[s._v("代码实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量\n \nfunction buildMaxHeap(arr) {   // 建立大顶堆\n    len = arr.length;\n    for (var i = Math.floor(len/2); i >= 0; i--) {\n        heapify(arr, i);\n    }\n}\n \nfunction heapify(arr, i) {     // 堆调整\n    var left = 2 * i + 1,\n        right = 2 * i + 2,\n        largest = i;\n \n    if (left < len && arr[left] > arr[largest]) {\n        largest = left;\n    }\n \n    if (right < len && arr[right] > arr[largest]) {\n        largest = right;\n    }\n \n    if (largest != i) {\n        swap(arr, i, largest);\n        heapify(arr, largest);\n    }\n}\n \nfunction swap(arr, i, j) {\n    var temp = arr[i];\n    arr[i] = arr[j];\n   0 arr[j] = temp;\n}\n \nfunction heapSort(arr) {\n    buildMaxHeap(arr);\n \n    for (var i = arr.length - 1; i > 0; i--) {\n        swap(arr, 0, i);\n        len--;\n        heapify(arr, 0);\n    }\n    return arr;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("h2",{attrs:{id:"计数排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#计数排序"}},[s._v("#")]),s._v(" 计数排序")]),s._v(" "),n("p",[s._v("计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("ul",[n("li",[s._v("找出待排序的数组中最大和最小的元素；\n"),n("ul",[n("li",[s._v("统计数组中每个值为i的元素出现的次数，存入数组C的第i项；")]),s._v(" "),n("li",[s._v("对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；")]),s._v(" "),n("li",[s._v("反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。")])])])]),s._v(" "),n("blockquote",[n("p",[s._v("动图演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/计数排序.gif"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F.gif",alt:""}})])]),s._v(" "),n("blockquote",[n("p",[s._v("代码演示")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function countingSort(arr, maxValue) {\n    var bucket = new Array(maxValue + 1),\n        sortedIndex = 0;\n        arrLen = arr.length,\n        bucketLen = maxValue + 1;\n \n    for (var i = 0; i < arrLen; i++) {\n        if (!bucket[arr[i]]) {\n            bucket[arr[i]] = 0;\n        }\n        bucket[arr[i]]++;\n    }\n \n    for (var j = 0; j < bucketLen; j++) {\n        while(bucket[j] > 0) {\n            arr[sortedIndex++] = j;\n            bucket[j]--;\n        }\n    }\n \n    return arr;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("blockquote",[n("p",[s._v("算法分析")])]),s._v(" "),n("p",[s._v("计数排序是一个稳定的排序算法。当输入的元素是 n 个 0到 k 之间的整数时，时间复杂度是O(n+k)，空间复杂度也是O(n+k)，其排序速度快于任何比较排序算法。当k不是很大并且序列比较集中时，计数排序是一个很有效的排序算法。")]),s._v(" "),n("h2",{attrs:{id:"桶排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#桶排序"}},[s._v("#")]),s._v(" 桶排序")]),s._v(" "),n("p",[s._v("桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("ul",[n("li",[s._v("设置一个定量的数组当作空桶；")]),s._v(" "),n("li",[s._v("遍历输入数据，并且把数据一个一个放到对应的桶里去；")]),s._v(" "),n("li",[s._v("对每个不是空的桶进行排序；")]),s._v(" "),n("li",[s._v("从不是空的桶里把排好序的数据拼接起来。")])]),s._v(" "),n("blockquote",[n("p",[s._v("图片演示")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"",href:"https://colastar.github.io/static/images/桶排序.png"}},[n("img",{attrs:{src:"https://colastar.github.io/static/images/%E6%A1%B6%E6%8E%92%E5%BA%8F.png",alt:""}})])]),s._v(" "),n("blockquote",[n("p",[s._v("代码实现")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function bucketSort(arr, bucketSize) {\n    if (arr.length === 0) {\n      return arr;\n    }\n \n    var i;\n    var minValue = arr[0];\n    var maxValue = arr[0];\n    for (i = 1; i < arr.length; i++) {\n      if (arr[i] < minValue) {\n          minValue = arr[i];                // 输入数据的最小值\n      } else if (arr[i] > maxValue) {\n          maxValue = arr[i];                // 输入数据的最大值\n      }\n    }\n \n    // 桶的初始化\n    var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5\n    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;\n    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  \n    var buckets = new Array(bucketCount);\n    for (i = 0; i < buckets.length; i++) {\n        buckets[i] = [];\n    }\n \n    // 利用映射函数将数据分配到各个桶中\n    for (i = 0; i < arr.length; i++) {\n        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);\n    }\n \n    arr.length = 0;\n    for (i = 0; i < buckets.length; i++) {\n        insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序\n        for (var j = 0; j < buckets[i].length; j++) {\n            arr.push(buckets[i][j]);                     \n        }\n    }\n \n    return arr;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("blockquote",[n("p",[s._v("算法分析")])]),s._v(" "),n("p",[s._v("桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。")]),s._v(" "),n("h2",{attrs:{id:"基数排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基数排序"}},[s._v("#")]),s._v(" 基数排序")]),s._v(" "),n("p",[s._v("基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。")]),s._v(" "),n("blockquote",[n("p",[s._v("算法描述")])]),s._v(" "),n("ul",[n("li",[s._v("取得数组中的最大数，并取得位数；")]),s._v(" "),n("li",[s._v("arr为原始数组，从最低位开始取每个位组成radix数组；")]),s._v(" "),n("li",[s._v("对radix进行计数排序（利用计数排序适用于小范围数的特点）；")])]),s._v(" "),n("blockquote",[n("p",[s._v("代码实现")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var counter = [];\nfunction radixSort(arr, maxDigit) {\n    var mod = 10;\n    var dev = 1;\n    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {\n        for(var j = 0; j < arr.length; j++) {\n            var bucket = parseInt((arr[j] % mod) / dev);\n            if(counter[bucket]==null) {\n                counter[bucket] = [];\n            }\n            counter[bucket].push(arr[j]);\n        }\n        var pos = 0;\n        for(var j = 0; j < counter.length; j++) {\n            var value = null;\n            if(counter[j]!=null) {\n                while ((value = counter[j].shift()) != null) {\n                      arr[pos++] = value;\n                }\n          }\n        }\n    }\n    return arr;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("blockquote",[n("p",[s._v("算法分析")])]),s._v(" "),n("p",[s._v("基数排序基于分别排序，分别收集，所以是稳定的。但基数排序的性能比桶排序要略差，每一次关键字的桶分配都需要O(n)的时间复杂度，而且分配之后得到新的关键字序列又需要O(n)的时间复杂度。假如待排数据可以分为d个关键字，则基数排序的时间复杂度将是O(d*2n) ，当然d要远远小于n，因此基本上还是线性级别的。")]),s._v(" "),n("p",[s._v("基数排序的空间复杂度为O(n+k)，其中k为桶的数量。一般来说n>>k，因此额外空间需要大概n个左右。")]),s._v(" "),n("h2",{attrs:{id:"sort排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sort排序"}},[s._v("#")]),s._v(" sort排序")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("arr.sort((a,b) => a-b)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);