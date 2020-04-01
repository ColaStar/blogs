// 观察data上的object属性并向对象上设置getter和setter，getter是用来

function definedFn(vm, key, val) {
    var dep = new Dep();
    Object.defineProperty(vm, key, {
        get: function () {
            // 判断是否增加订阅者
            if (Dep.target) {
                dep.addsub(Dep.target)
            }
            console.log(`${key}属性被读取了`);
            return val
        },
        set: function (newval) {
            if (val === newval) return;
            val = newval;
            console.log(`${key}属性被修改了`);
            dep.notify()//通知订阅者
        }
    })
}

function Observe(vm, data) {
    Object.keys(data).forEach(key => {
        definedFn(vm, key, data[key])
    })
}