// 订阅器：也就是存放所有watcher的地方，相当于助理
function Dep() {
    this.subs = [];
}

Dep.prototype = {
    //增加订阅者
    addsub: function (sub) {
        this.subs.push(sub)
    },
    // 通知订阅者更新
    notify: function () {
        //当调用notify方法的时候通知所有watch方法
        this.subs.map(sub=>{ 
            sub.update();
        })
    }
}