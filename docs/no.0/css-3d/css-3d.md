## css构建3d的世界

- HTML5陀螺仪  
- CSS3 3D模型  
- 结合Touch事件  
- CSS3D库  
- JS类库  
### HTML5陀螺仪






要使用HTML5的陀螺仪事件我们只要监听deviceorientation事件就好，用法如下：
```
window.addEventListener('deviceorientation', function(event) { var alpha = event.alpha; var beta = event.beta; var gamma = event.gamma; }, false);
```
event对象上边有```alpha```、```beta``` 以及 ```gamma```三个API，它们可以控制三个轴转动的角度和方向。  
alpha：行动装置水平放置时，绕 Z 轴旋转的角度，数值为 0 度到 360 度。  <div align="center">
<a data-fancybox title="" href="https://colastar.github.io/static/images/alpha.jpg">![alpha](https://colastar.github.io/static/images/alpha.jpg)</a>
</div>
beta:行动装置水平放置时，绕 X 轴旋转的角度，数值为 -180 度到 180 度。
<div align="center">
<a data-fancybox title="" href="https://colastar.github.io/static/images/beta.jpg">![beta](https://colastar.github.io/static/images/beta.jpg)</a>
</div>
gamma：行动装置水平放置时，绕 Z 轴旋转的角度，数值为 -90 度到 90 度。
<div align="center">
<a data-fancybox title="" href="https://colastar.github.io/static/images/gamma.jpg">![gamma](https://colastar.github.io/static/images/gamma.jpg)</a>
</div>

### CSS3 3D模型
球面投影
全景投影
淘宝造物节

### css3D库
css3d-engine
### js类库
javascript视觉差特效引擎Parallax.js


