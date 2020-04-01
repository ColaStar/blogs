
/***
 * 抽象被观察者接口
 * 声明了添加、删除、通知观察者方法
 * @author jstao
 *
 */
interface Observer {
    update(message: string): void
}
//卖报纸的大爷
interface Observerable {

    registerObserver(str: string, o: Observer): void;
    removeObserver(str: string): void;
    notifyObserver(): void;
}

/**
 * 被观察者，也就是微信公众号服务
 * 实现了Observerable接口，对Observerable接口的三个方法进行了具体实现
 * @author jstao
 *
 */
class WechatServer implements Observerable {

    //注意到这个List集合的泛型参数为Observer接口，设计原则：面向接口编程而不是面向实现编程
    // private List<Observer> list;
    private list: Map<string, Observer>;
    private message: string;

    constructor() {
        this.list = new Map<string, Observer>();
    }

    public registerObserver(str: string, o: Observer): void {
        this.list.set(str, o)
    }


    removeObserver(str: string): void {
        this.list.delete(str)
    }

    //遍历

    notifyObserver(): void {
        for (let item of this.list.entries()) {
            const observer = item[1]
            observer.update(this.message)
        }

    }

    setInfomation(s: string): void {
        this.message = s;
        console.log("微信服务更新消息： " + s)
        //消息更新，通知所有观察者
        this.notifyObserver();
    }
}
//卖报纸实体类
class User implements Observer {

    private name: string;
    private message: string;
    constructor(name: string) {
        this.name = name;
    }

    public update(message: string): void {
        this.message = message;
        this.read();
    }

    public read(): void {
        console.log(this.name + " 收到推送消息： " + this.message)
    }

}


class Test {
    constructor() {
        //大爷
        const server: WechatServer = new WechatServer()
        const userZhang: Observer = new User("ZhangSan");
        const userLi: Observer = new User("userLi");
        const WangWu: Observer = new User("WangWu");


        server.registerObserver('userZhang', userZhang);
        server.registerObserver('userLi', userLi);
        server.registerObserver('WangWu', WangWu);
        server.setInfomation("PHP是世界上最好用的语言！");

        console.log("----------------------------------------------");
        server.removeObserver('userZhang');
        server.setInfomation("JAVA是世界上最好用的语言！");
    }
}   