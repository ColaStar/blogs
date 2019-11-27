// // // 先来暴力
// // function add(arr) {
// //     var returnArr = [];
// //     for (var i = 0; i < arr.length - 1; i++) {
// //         for (var j = i; j < arr.length - 1; j++) {
// //             for (var k = i + 1; k < arr.length - 1; k++) {
// //                 var addNum = arr[i] + arr[j]
// //                 //arr.indexOf(addNum)方法二  n^2+n
// //                 if (addNum == arr[k]) {
// //                     returnArr.push([arr[i], arr[j], arr[k]])//n^3
// //                 }
// //             }
// //         }
// //     }
// //     return returnArr.length > 0 ? true : false;

// // }
// // //减法实现一下先找最大的
// // // 方法三 
// // // 1.先排序
// // // 2.拿平衡二叉树做
// // //方法四：Map实现

// // var arr = [0,1, 2,0, 3, 4, 5, 6, 7, 8, 9, 0]
// // // console.log(add(arr))

// // // 处理串到遍历
// // // 双指针法
// // // 一个是当前的字符，一个预读下一个指针的。下个值做比较，移到不同的位置时把指针2放进去，直到当指针移到0的时候即为最后

// // // 如果是单指针

// // var str = 'aabbccddeexxxxaa'

// // function noRepeat (S) {
// //     let stack = []
// //     for(let i = 0; i < S.length; i++) {
// //         let index = stack.length ? (stack.length - 1) : stack.length
// //         if(stack[index] !== S[i]) {
// //             stack.push(S[i])
// //         }
// //     }
// //     return stack.join('')
// // };

// // // console.log(noRepeat(str))

// // function fn3(arr){
// //     for(let i = 0; i < arr.length; i++) {
// //         if(arr[i] == 0){
// //             var s = arr.splice(i,1)[0]
// //             arr.push(s)
// //             }
// //         }
// //         return arr

// // }
// // console.log(fn3(arr))

// // // 整数转成7进制
// // var str = ''
// // function fn4(num){
// //     // 一直把7除到有余数
// //     // 整数+余数
// //     if(num /7 < 7){
// //         fn4()
// //     }
// // }
// // function fn5(root){
// //     // 创建树
// //     //遍历树
// //     //返回树
// //     if (!root) return [];

// //     var res = [];
// //     recusion(root);
// //     return res;

// //     function recusion(root){
// //         if (!root) return;

// //         res.push(root.val);
// //         for (var i = 0; i < root.children.length; i++){
// //             recusion(root.children[i]);
// //         }
// //     }
// // }
// // fn5(arr)
// // //给定一个非空字符串s，最多删除一个字符串。判断是否能成为回文字符串
// // // 判断是不是回文字符串，看是奇数还是偶数，删除的是不是中间的串
// // // 先删除节点
// // // 判断是否是节点i个字符是否和length-i相等
// // // 先删除后判断不是更好理解么先判断后删除
// // function f6(){}

// // // 7. 给定一个整数数组 A，对于每个整数 A[i]，我们可以选择任意 x 
// // // 满足 -K <= x <= K，并将 x 加到 A[i] 中。
// // // 在此过程之后，我们得到 一些数组 B。返回 B 的最大值和 B 的最小值之间可能存在的最小差 值。
// // function f7(){}


// // // 众数出现  可以使用set  值做key，出现次数为value，然后与n/2做对比



// // function getName2(data) {
// //     let result = [];
// //     let queue = data;
// //     var i = 0;
// //     while (queue.length > 0) {
// //         console.log([...queue],i)
// //         i++
// //         [...queue].forEach((child,index) => {
// //             console.log(child,index+'child')
// //             queue.shift();
// //             result.push(child.name);
// //             console.log(result)
// //             child.children && (queue.push(...child.children));
// //         });
// //     }
// //     return result.join(',');
// // }
// // const data = [{
// //         name: 'a',
// //         children: [{
// //                 name: 'b',
// //                 children: [{
// //                     name: 'e'
// //                 }]
// //             },
// //             {
// //                 name: 'c',
// //                 children: [{
// //                     name: 'f'
// //                 }]
// //             },
// //             {
// //                 name: 'd',
// //                 children: [{
// //                     name: 'g'
// //                 }]
// //             },
// //         ],
// //     },
// //     {
// //         name: 'a2',
// //         children: [{
// //                 name: 'b2',
// //                 children: [{
// //                     name: 'e2'
// //                 }]
// //             },
// //             {
// //                 name: 'c2',
// //                 children: [{
// //                     name: 'f2'
// //                 }]
// //             },
// //             {
// //                 name: 'd2',
// //                 children: [{
// //                     name: 'g2'
// //                 }]
// //             },
// //         ],
// //     }
// // ]
// // var node = {
// //     val: 0,
// //     left: {
// //         val: -1,
// //         left: {
// //             val: -2,
// //             left: null,
// //             right: null
// //         },
// //         right: {
// //             val: -1,
// //             left: null,
// //             right: null
// //         }
// //     },
// //     right: {
// //         val: 2,
// //         left: {
// //             val: 1,
// //             left: null,
// //             right: null
// //         },
// //         right: {
// //             val: 3,
// //             left: null,
// //             right: null
// //         }
// //     }
// // }
// // var result = [];
// // function getName(data) {
// //     result.push(data.val)
// //     if(node.left){
// //         result.push(data.left.val)
// //     }
// //     if(node.right){
// //         result.push(data.right.val)
// //     }

// // }

// // 斐波那契数列实现
// // [1,1,2,3,5,8,13]
// //递归
// function feibonaqie1(m){
// //   if(m<0){
// //       Throw new Error('不能小于0')
// //   }
//   if(m == 1 || m==2){
//      return 1
//   }else{
//       return feibonaqie1(m-1)+feibonaqie1(m-2)
//   }
// }
// //动态规划
// function feibonaqie2(m){
//     var arr = [0,1,1]
//     if(m>=3){
//       for(var i = 3;i<=m;i++){
//           arr[i] = arr[i-1] + arr[i-2]
//       }
//     }
// //使用闭包保存下来
// function feibonaqie3(n){
//     if(n < 0) throw new Error('输入的数字不能小于0');
//     let arr = [0,1];//在外部函数中定义数组，内部函数给数组添加值
//     function calc(n){
//         `                          `
//         if(arr[n] != undefined){
//             return arr[n];
//         }
//         let data = calc(n-1) + calc(n-2);//使用data将每次递归得到的值保存起来
//         arr[n] = data;//将每次递归得到的值放到数组中保存
//         return data;
//     }
//     return calc(n);
// }
// console.log(feibonaqie1(6))
// console.log(feibonaqie2(6))
// console.log(feibonaqie3(6))

var arr = [2, 3, 5, 6, 7, 8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8, 4, 3, 5, 6, 7]
// 冒泡
function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
//选择排序找出最小的值
function sort2(arr) {
    for (var i = 0; i < arr.length; i++) {
    var minIndex=i;
        for (var j = i+1; j < arr.length; j++) {
              if(arr[j] < arr[minIndex]){
                minIndex = j
              }
        }
        var temp = arr[i]
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr
}
//插入排序
function sort3(arr){
    for(var i = 1;i<arr.length;i++){
        var preIndex = i-1;
        var curData = arr[i];
        while(preIndex>=0&&arr[preIndex]>curData){
            arr[preIndex+1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex+1] = curData
    }
    return arr
}

//快排
function sort4(arr){
    if(arr.length<=1){
        return arr
    }
    var pivoIndex = Math.floor(arr.length/2);
    var pivoData = arr.splice(pivoIndex, 1)[0];
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivoData){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return sort4(left).concat([pivoData],sort4(right))
}

console.log(sort(arr))
console.log(sort2(arr))
console.log(sort3(arr))
console.log(sort4(arr))

