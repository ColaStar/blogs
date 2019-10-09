# grunt
[toc]
## 简介
摘抄至官网

简单的说就是，自动化。对于需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。当你在 Gruntfile 文件正确配置好了任务，任务运行器就会自动帮你或你的小组完成大部分无聊的工作。

但是为什么要用grunt呢？

grunt的生态系统非常庞大。可用的插件很多，你可以花费很少的代价，自动完成任何事情。

## 安装与配置

> 1.安装grunt-cli到全局去，产生一个全局的grunt命令。
```
npm install -g grunt-cli
```

> 安装grunt到本地

```
npm install --save-dev grunt
```
> 建立一个package.json文件为npm做配置
> 建立一个gruntfile.js文件,为了grunt做某种配置

相当于webpack的webpack.config.js或gulp 的gulpfile.js
```
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
```


## 插件
|插件名称|	说明	|Github地址|
|:--:|:--:|:--:|
|grunt-contrib-clean	|清空文件和文件夹|	https://github.com/gruntjs/grunt-contrib-clean|
|grunt-contrib-concat	|连接、合并文件|	https://github.com/gruntjs/grunt-contrib-concat|
|grunt-svgstore	（svg）|从指定文件夹合并svg|	https://github.com/FWeinb/grunt-svgstore|
|grunt-csscomb	|（CSS）格式化	|https://github.com/csscomb/|grunt-csscomb|
|grunt-contrib-cssmin	|（CSS文件）压缩|	https://github.com/gruntjs/grunt-contrib-cssmin|
|grunt-contrib-uglify	|（JS文件）压缩	|https://github.com/gruntjs/grunt-contrib-uglify|
|grunt-contrib-htmlmin	|（HTML文件）压缩|	https://github.com/gruntjs/grunt-contrib-htmlmin|
|grunt-filerev	|文件内容hash（MD5）	|https://github.com/yeoman/grunt-filerev|
|grunt-filerev-replace|	替换通过grunt-filerev的文件引用	|https://github.com/solidusjs/grunt-filerev-replace|
|grunt-text-replace	|（文本文件）使用字符串、正则、函数替换内容|	https://github.com/yoniholmes/grunt-text-replace|
|grunt-html-build	|（HTML文件）增加js、css、模板引用，移除调试代码	|https://github.com/spatools/grunt-html-build|
|grunt-autoprefixer	|添加前缀依赖Can I Use数据库|	https://github.com/nDmitry/grunt-autoprefixer|
|grunt-parallel	|并行运行命令和任务|	https://github.com/iammerrick/grunt-parallel|
|grunt-contrib-watch	|文件发生改变运行任务|	https://github.com/gruntjs/grunt-contrib-watch|
|load-grunt-tasks	|使用通配符加载所有任务|	https://github.com/sindresorhus/load-grunt-tasks|
|time-grunt	|显示运行任务的执行时间|	https://github.com/sindresorhus/time-grunt|

## api

[官网api](https://www.gruntjs.net/api/grunt)