
package.json中   在config中定义一些想要用的变量port之类的

"testdev":'echo $nmp_package_config_post'//得到刚刚定义的port



npm run env 可以打印出一些package.json中的变量
gulp-watch//入口出口插件等
gulp-babel//编译babel->tra-commonjs



gulpfile.js
```
const gulp = require('gulp');
function builddev(){
return watch(entery { ignoreInitial: false },function(){
gulp.src(entery)
        .pipe(babel({
            presets: ['@babel/env']
        }))
})
        .pipe(gulp.dest('build'));
}

function buildprod(){

}

function hint{

}

let build = gulp.series(builddev)

if(process.env.NODE_ENV == 'lint'){
  let build = gulp.series(builddev,buildconfig)
}

if(process.env.NODE_ENV == 'production'){
let build = gulp.series(builddev)

}
```



jenkins

https://me.csdn.net/qq_23603437

https://www.cnblogs.com/jimmy-xuli/p/9020825.html

https://www.cnblogs.com/rslai/p/8135460.html

amdyu cmd 区别

https://www.zhihu.com/question/20351507/answer/14859415


gulp

http://ju.outofmemory.cn/entry/69523

https://www.cnblogs.com/iqian/p/5811615.html

https://www.cnblogs.com/canrz/p/5600514.html

https://www.cnblogs.com/qixidi/p/10287679.html

Travis

http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html

https://juejin.im/entry/5893590a128fe1006545a980




