// //计算菱柱到边的距离
// CalculateRadius = function (r, per) {
//     return Math.round(r / Math.tan(Math.PI / per) / 2) - 3;
// }

// //菱柱的半径(20个边，围成一个很接近的圆，当边越多，钝角就越大，此时就接近圆)
// var radius = CalculateRadius(129, 20);
// var box = document.getElementById("box");
// var audio = document.getElementById('audio');
// var arr = document.getElementById('box').getElementsByTagName('div');
// for (var i = 0; i < arr.length; i++) {
//     arr[i].style.background = 'url(images/p' + (i + 1) + '.png) no-repeat';
//     arr[i].style.WebkitTransform = 'rotateY(' + 360 / 20 * i + 'deg)' + ' translateZ(' + radius + 'px)';
// }
// //为了一开始进入有个由远到近的视觉差，直接写在.container中在手机浏览器中不生效
// setTimeout(function () {
//     $("#container").addClass('per');
// })
// var startX = 0,
//     x = 0,
//     endX = 0;
// //防止手机转动时再触发touchstart事件
// var flag = true;
// $("#box").on('touchstart', function (event) {
//     event.preventDefault();
//     //触碰点横坐标
//     var touch = event.targetTouches[0];
//     startX = touch.pageX - x;
// });

// $("#box").on('touchmove', function (event) {
//     event.preventDefault();
//     if (flag) {
//         var touch = event.targetTouches[0];
//         endX = touch.pageX;
//         x = endX - startX;
//         box.style.transform = 'rotateY(' + x + 'deg)';
//     } else {
//         return false;
//     }
// });
// $('#box').on('touchend', function (event) {
//     event.preventDefault();
// });

// window.addEventListener('deviceorientation', _.throttle(function (event) {
//     console.log(event)
//     var gamma = event.gamma;
//     if (Math.abs(gamma) > 1) {
//         flag = false;
//         box.style.transform = 'rotateY(' + (gamma * 4 + x) + 'deg)';
//         // x += gamma;
//     } else {
//         flag = true;
//     }
// }));

// $("#music").on('click', function () {
//     if (audio.paused) {
//         audio.play();
//         $(this).text('🎺');
//     } else {
//         audio.pause();
//         $(this).text('⏸');
//     }
// });
function Foo(){
    getName = function(){
        console.log(1)
    }
    return this
}
Foo.getName = function(){console.log(2)}
Foo.prototype.getName = function(){console.log(3)}
var getName = function(){console.log(4)}
function getName(){console.log(5)}

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName()

console.log(null == undefined)
console.log(null instanceof Object)




