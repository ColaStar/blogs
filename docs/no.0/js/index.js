// // {
// //     x = Math.PI;
// //     cx = Math.cos(x);
// //     console.log('cos(1)='+cx)
// // }

// // console.log(s)
// // console.log(d);

// // var s = function(){}
// // function d(){}

// // if(!s)
// // console.log(1)
// // else;

// var o = {
//     next:{
//         next:{
//             next:{
//                 next:{
//                     next:{p:222}
//                 }
//             }
//         }
//     }
// }

// function Ofn(o){
// for(;o.next;o=o.next)/*empty */;
// return o
// }
// console.log(Ofn(o))


// if(true){
//     throw new Error('212122')
// }
// var arr = [1,2,3,4,5,6,7,8]
// var b = [].concat(a)
// var c =b.forEach(ele=> ele+1)
// console.log(a,b,c)

// var user = { 
//     age: 20, 
//     init:function(){
//            return this.age
//           } 
//    } 
//    var data = {age:40} 
//    var s = user.init.bind(data); 
// //    console.log(s())//40
// // var p = Array.from()
// console.log(new Set([1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,8]))

// const a = [1,2,3,4]
// const b = [...a,5,6]
// console.log(b)
// const obj = {b:1}
// const obj1 = {...obj,b:2}
// console.log(obj1)
// const a = [1,2,3,4];
// [first,second,...s] = a
// console.log(s)   //[3,4]

// const b = {a:1,b:2}
// const {a,...d} = b
// console.log(d)//{b:2}
// const a = {a:1,b:2}
// const b = {b:5,c:6}
// const c = {...a,...b}
// console.log(c)   //{a:1,b:5,c:6}

// const a = [1,2,3,4,5,6];
// const [s,d,f,g,h,...j] = a;
// console.log(s,d,f,g,h,j)


// const a = {c:'sa',b:2};
//  const {c,b} = a;
//  console.log(`${c}----${b}`)

// console.log([1,2,3].map(item=>item*3))
// console.log([1,2,3,4,5,6,7,8,9,3,2,9,6,5,2,3,6,8,4,3].map(parseInt))
// this.lives = 6
// const cat = {
//    lives: 9,
//    jumps: () => {
//      this.lives--;
//      console.log(this.lives)
//    }
//  }

// cat.jumps()

function test(a=1,{option=true}={}){
   console.log(a,option)
}
test()