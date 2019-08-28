//批处理构造函数
function Batcher() {
    this.reset();
}
Batcher.prototype = {
    //初始化批处理
    reset: function () {
        this.has = {};
        this.queue = [];
        this.waiting = false
    },
    //将事件watcher工作添加到队列里边
    push: function (job) {
        let id = job.id;
        if (!this.has[id]) {
           this.queue.push(job);
           //设置元素的ID
           this.has[id] = true;
            if(!this.waiting){
                this.waiting = true;
                if("Promise" in window){
                    Promise.resolve().then(()=>{
                        this.flush()
                    })
                }else{
                    setTimeout(()=>{
                        this.flush()
                    },0)
                }
            }
        }
    },
    //执行并且清空事件队列
    flush:function(){
        this.queue.forEach((job)=>{
            job.cb()//每个watch的执行方法
        })
        this.reset();
    }
}