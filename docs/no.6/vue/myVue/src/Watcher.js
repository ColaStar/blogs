let uid = 0;
function Watcher(vm, node, name, type) {
    //new Watcher(vm, node, name, 'nodeValue');
    Dep.target = this;
    this.name = name; //text
    this.id = ++uid;
    this.node = node; //当前的节点
    this.vm = vm; //vm 
    this.type = type; //nodeValue
    this.update();
    Dep.target = null;
}
// function queueWatcher(watcher){
//     var id = watcher.id;
//     if(has[id]==null){

//     }
// }
Watcher.prototype = {
    update: function () {
        this.get();
        if(!batcher){
            batcher = new Batcher();
            // console.log(this.node);
            // this.node[this.type] = this.value;
        }
        batcher.push(this);
        //span.nodeValue =  this.vm.text
        // this.node[this.type] = this.value; // 订阅者执行相应操作
    },
    cb: function () {
        //最终实际虚拟dom处理的结果 只处理一次
        console.log("dom update");
        this.node[this.type] = this.value; // 订阅者执行相应操作
    },
    // 获取data的属性值
    get: function () {
        this.value = this.vm[this.name]; //触发相应属性的get
    }
}