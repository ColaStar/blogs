// 先来暴力
function add(arr) {
    var returnArr = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i; j < arr.length - 1; j++) {
            for (var k = i + 1; k < arr.length - 1; k++) {
                var addNum = arr[i] + arr[j]
                //arr.indexOf(addNum)方法二  n^2+n
                if (addNum == arr[k]) {
                    returnArr.push([arr[i], arr[j], arr[k]])//n^3
                }
            }
        }
    }
    return returnArr.length > 0 ? true : false;

}
//减法实现一下先找最大的
// 方法三 
// 1.先排序
// 2.拿平衡二叉树做
//方法四：Map实现

var arr = [0,1, 2,0, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(add(arr))

// 处理串到遍历
// 双指针法
// 一个是当前的字符，一个预读下一个指针的。下个值做比较，移到不同的位置时把指针2放进去，直到当指针移到0的时候即为最后

// 如果是单指针

var str = 'aabbccddeexxxxaa'

function noRepeat (S) {
    let stack = []
    for(let i = 0; i < S.length; i++) {
        let index = stack.length ? (stack.length - 1) : stack.length
        if(stack[index] !== S[i]) {
            stack.push(S[i])
        }
    }
    return stack.join('')
};

// console.log(noRepeat(str))

function fn3(arr){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            var s = arr.splice(i,1)[0]
            arr.push(s)
            }
        }
        return arr
       
}
console.log(fn3(arr))

// 整数转成7进制
var str = ''
function fn4(num){
    // 一直把7除到有余数
    // 整数+余数
    if(num /7 < 7){
        fn4()
    }
}
function fn5(root){
    // 创建树
    //遍历树
    //返回树
    if (!root) return [];

    var res = [];
    recusion(root);
    return res;

    function recusion(root){
        if (!root) return;

        res.push(root.val);
        for (var i = 0; i < root.children.length; i++){
            recusion(root.children[i]);
        }
    }
}
fn5(arr)
//给定一个非空字符串s，最多删除一个字符串。判断是否能成为回文字符串
// 判断是不是回文字符串，看是奇数还是偶数，删除的是不是中间的串
// 先删除节点
// 判断是否是节点i个字符是否和length-i相等
// 先删除后判断不是更好理解么先判断后删除
function f6(){}

// 7. 给定一个整数数组 A，对于每个整数 A[i]，我们可以选择任意 x 
// 满足 -K <= x <= K，并将 x 加到 A[i] 中。
// 在此过程之后，我们得到 一些数组 B。返回 B 的最大值和 B 的最小值之间可能存在的最小差 值。
function f7(){}


// 众数出现  可以使用set  值做key，出现次数为value，然后与n/2做对比



