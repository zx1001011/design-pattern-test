// 主题，被订阅者： 发布者
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    setState(val) {
        this.state = val;
        this.notifyAllObservers()
    }
    getState() {
        return this.state;
    }
    notifyAllObservers() {
        this.observers.forEach((item, index) => {
            item.update()
        })
    }
    attach(observer) {
        this.observers.push(observer);
    }
}
// 观察者：被发布者
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update() {
        console.log('observer: ' + this.name + ' subject state: ' + this.subject.getState())
    }
}
var subject = new Subject();
var o1 = new Observer('1', subject);
var o2 = new Observer('2', subject);
var o3 = new Observer('3', subject);
['春', '冬', '秋', '夏'].forEach(item => {
    subject.setState(item)
})