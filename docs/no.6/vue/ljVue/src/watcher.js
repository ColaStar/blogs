var uid = 0;
// 订阅者
function Watcher(vm, node, name, type) {
    Dep.target = this;
    this.name = name;
    this.type = type;
    this.node = node;
    this.id = ++uid;
    this.vm = vm;
    //初始化更新
    this.update();
    Dep.target = null;
}
Watcher.prototype = {
    update: function () {
        // 每次更新的时候调用get方法，查看当前
        this.get();
        if (!batcher) {
            var batcher = new Batcher()
        }
        batcher.push(this)//把每一个watcher放到任务队列里边
    },
    cb: function () {
        //   最终实际虚拟DOM处理的结果 只处理一次，其实就是把vm上绑定的属性值赋给节点内容
        this.node[this.type] = this.value;
    },
    //获取data的属性值
    get: function () {
        this.value = this.vm[this.name] //触发相应属性的get
    }
}