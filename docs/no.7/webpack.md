webpack5中优化？

1.webpack为啥会慢？

loader+plugin+node单线程+webpack本身就慢+入口比较多


- 解决方案
用speed-measure-webpack-plugin分析是谁慢

他会告诉你webpack每一个loader+entry的运行时间

entry多了怎么办

loader 多加cache-loader内存cache，与文件cache
5里边直接加了一个chche的选项、
可以用thread-loader（多核处理）重写了happypack（文件小反而会变慢）

plugin 多核处理js（webpack-parallel-ugify-plugin）
css（optimiza-css-assets-webpack-plugin），或者改良插件

entry比较多会比较慢，（180个entry的故事）消减entry
把一个项目分项目
集群编译让每一台机器帮你干活
项目A A机器编译完scp到最后的dist文件下

项目B A机器编译完scp到最后的dist文件下

合理的devtool（不要乱动）去官网看一下
 eval 开发环境下最快的

 不愿意用魔法注释，可以用name-all-modoules-plugin可以固定chunksName，做持久化缓存

 externals引cdn资源

 按需加载
 


