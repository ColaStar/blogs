function List(){
    this.listSize  = 0 //列表元素个数
    this.pos = 0;//列表当前位置
    this.dataStore = [];//初始化一个空数组用来保存列表元素
    this.clear = clear;//清空列表中的所有元素
    this.find = find //查找元素
    this.toString = toString;//返回列表字符串形式
     this.insert = insert;在现有元素后插入新的元素
     this.append = append;在列表元素末尾增加新的元素
     this.remove = remove;//从列表删除元素
     this.front = front;从列表的当前位置移动到前一位
     this.end = end;//从列表的当前位置移动到最后一个位置
     this.prev = prev //将当前位置前移一位
     this.next = next //将当前位置后移一位
     this.length = length //列表包含元素个数
     this.currPos = currPos //返回列表当前位置
     this.moveTo = moveTo //将当前位置移动到指定位置
     this.getElement = getElement //显示当前元素
     this.contains = contains //是否包含该元素
}

function append(element){
this.dataStore[this.listSize++] = element
}

function find(element){
for(var i =0;i< this.dataStore.length;i++){
    if(this.dataStore[i] == element){
        return i;
    }
}
return -1
}

function remove(element){
var foundAt = this.find(element)
if(foundAt>-1){
    this.dataStore.slice(founAt,1)
    --this.listSize;
    return
}
return false
}
function length(){
    return this.listSize
}

function toString (){
return this.dataStore
}
function insert(element,after){
var insertPos = this.find(after);
if(insertPos>-1){
    this.dataStore.splice(insertPos+1,1)

}
}
function length(){}


## 用JavaScript实现二分法查找