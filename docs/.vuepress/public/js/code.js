// JavaScript Document
$(document).ready(function () {
    var bodyobj = document.querySelector("body");
    var divobj = document.createElement("div");
    divobj.innerHTML = "<canvas id='matrixBG' width='2560' height='200'></canvas>"
    bodyobj.appendChild(divobj);
    // document.write("");  
    $('#matrixBG').css({
        "position": "fixed",
        "bottom": 0,
        "left": 0,
        "z-index": -1,
        "opacity": 0.07
    })
    var width = matrixBG.width = window.screen.width;
    var height = matrixBG.height = window.screen.height;
    var yPositions = Array(300).join(0).split('');
    var ctx = matrixBG.getContext('2d');

    var draw = function () {
        ctx.fillStyle = 'rgba(0,0,0,.05)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#0F0';
        ctx.font = '10pt Georgia';
        yPositions.map(function (y, index) {
            text = String.fromCharCode(30 + Math.floor(Math.random() * 95));
            x = (index * 10) + 10;
            matrixBG.getContext('2d').fillText(text, x, y);
            if (y > 100 + Math.random() * 1e4) {
                yPositions[index] = 0;
            } else {
                yPositions[index] = y + 10;
            }
        });
    };
    RunMatrix();

    function RunMatrix() {
        if (typeof Game_Interval != "undefined") clearInterval(Game_Interval);
        Game_Interval = setInterval(draw, 33);
    }

    function StopMatrix() {
        clearInterval(Game_Interval);
    }
    /**
    //setInterval(draw, 33);
    $("button#pause").click(function(){
    StopMatrix();});
    $("button#play").click(function(){RunMatrix();});
    */

    /* 鼠标特效 */
    var a_idx = 0;
    $("body").click(function (e) {
        var a = new Array("难凉热血");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $($i).css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ") "
        });
        $("body").append($i);
        $($i).animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $($i).remove();
            });
    });
});