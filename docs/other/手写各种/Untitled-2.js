console.log(1);
setTimeout(()=>{
console.log(2)
})
process.nextTick(()=>{
console.log(3)
})
setImmediate(()=>{
console.log(4)
})
new Promise(resolve=>{
console.log(5)
resolve()
console.log(6)
}).then(()=>{
console.log(7)
})
Promise.resolve().then(()=>{
console.log(8)
process.nextTick(()=>{
console.log(9)
})
})


var arr = [1,2,3,4,-1,-2,-3];

function  findINdex(nums,target){
    var temp = {} ;
    for(let i = 0;i<nums.length;i++){
        var dif = target - nums[i];
        if(temp[dif] !== undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i
    }
}

console.log(findINdex(arr,0))