// JavaScript Document
$(document).ready(function () {
    var bodyobj = document.querySelector("body");
    var divobj = document.createElement("div");
    var flag = false;
    $("body").dblclick(function (e) {
        flag = !flag;
        if (flag) {
            showbBg()
        } else {
            bodyobj.removeChild(divobj)
        }
    })

    function showbBg() {
        //炫背景
        divobj.innerHTML = "<canvas id='matrixBG' width='2560' height='200'></canvas>"
        bodyobj.appendChild(divobj);
        // document.write("");  
        $('#matrixBG').css({
            "position": "fixed",
            "bottom": 0,
            "left": 0,
            "z-index": 9999,
            "opacity": 1
        })
        var matrixBG = document.getElementById('matrixBG')
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

        var arr = ["难凉热血", "斗志昂扬", "发奋图强", "精益求精", "笨鸟先飞", "闻鸡起舞", "自强不息", "只争朝夕", "不甘示弱", "全力以赴",
            "力争上游", "披荆斩棘",
            "不屈不挠", "囊萤映雪", "凿壁借光", "手不释卷", "闻鸡起舞", "夙兴夜寐", "焚膏继晷", "孜孜不倦", "锲而不舍", "闻鸡起舞",
            "悬梁刺股", "卧薪尝胆",
            "韦编三绝", "兀兀穷年", "聚沙成塔", "水滴石穿", "绳锯木断", "通宵达旦"
        ];
        // var arr = ["难凉热血","笨鸟先飞", "不屈不挠","只争朝夕"]
        // var arr = ["难凉热血"]
        var span = $("<span></span>")
        var num = Math.ceil(Math.random() * arr.length - 1);
        span.text(arr[num]);
        a_idx = (a_idx + 1) % arr.length;
        var x = e.pageX,
            y = e.pageY;
        $(span).css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) +
                "," + ~~(255 * Math
                    .random()) + ") "
        });
        $("body").append(span);
        $(span).animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $(span).remove();
            });
    });

});