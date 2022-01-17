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
        // / 如果已经有这个watcher了,
        //就不用加入队列了,这样不管一个数据更新多少次,Vue都只更新一次dom
        if (!this.has[id]) {
           this.queue.push(job);
           //设置这个watcher的ID 
           //主要是判断是否出现了循环更新:防止你更新我后我更新你,没完没了了
           this.has[id] = true;
           //waiting这个flag用于标记是否已经把
           //当前的这个watcher加入到异步任务队列当中了
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