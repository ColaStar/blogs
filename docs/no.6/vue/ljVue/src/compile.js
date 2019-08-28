function Compile(node, vm) {
    //node根组件，vue对象
    if (node) {
        this.$frag = this.nodeToFragment(node, vm); //创建一个代码片段，以便后期插入根元素
        return this.$frag
    }
}
Compile.prototype = {
    nodeToFragment: function (node, vm) {
        //创建一个代码片段
        var self = this
        var child;
        var frag = document.createDocumentFragment();
        while (child = node.firstChild) {
            self.compileElement(child, vm);
            frag.append(child)
        }
        return frag
    },
    compileElement: function (node, vm) {
        var reg = /\{\{(.*)\}\}/; //模板
        // 判断节点类型
        //如果节点类型为元素
        if (node.nodeType === 1) {
            var attr = node.attributes;
            for(var i=0;i<attr.length;i++){
                if(attr[i] === 'v-model'){
                    var name = attr[i].nodeValue;//获取v-model绑定的属性名
                    node.addEventListener('input',function(e){
                        // 给相应的data属性赋值，进而触发该属性的set方法
                        //再进行批处理渲染元素
                        vm[name] = e.target.value
                    });
                    //
                    new Watcher(vm,node,name,'value')
                }
            }
        }
        //如果节点类型为文本
        if(node.nodeType === 3){
            if(reg.test(node.nodeValue)){
                var name = RegExp.$1;//获取{{}}内的属性名
                name = name.trim();
            }
            new Watcher(vm,node,name,'nodeValue')
        }
    }
}