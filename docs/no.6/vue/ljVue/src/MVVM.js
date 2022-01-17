
function Vue(option){
    // 拿到data上的属性
   var data = option.data;
   Observe(this,data);
   var id = option.el;
   var dom = new Compile(document.getElementById(id),this);
   console.log(dom)
   document.getElementById(id).append(dom)
}