class A {
    constructor() {
        this.number = 0
    }
    setNumber(num, m) {
        this.number = num
        if (m) {
            m.setB(this)
        }
    }
}
class B {
    constructor() {
        this.number = 0
    }
    setNumber(num, m) {
        this.number = num
        if (m) {
            m.setA(this)
        }
    }
}
// 中介者
class Mediator {
    constructor() {
        this.objList = []
    }
    add(obj) {
        this.objList.push(obj)
    }
    setA(self) {
        this.objList.forEach(item => {
            if (item !== self) {
                item.setNumber(self.number * 2)
            }
        })
    }
    setB(self) {
        this.objList.forEach(item => {
            if (item !== self) {
                item.setNumber(self.number / 2)
            }
        })
    }
}

let mediator = new Mediator();
let a = new A();
let b = new B();
mediator.add(a);
mediator.add(b);
console.log(a.number)
console.log(b.number)
a.setNumber(2, mediator)
console.log(a.number)
console.log(b.number)
b.setNumber(3, mediator)
console.log(a.number)
console.log(b.number)