// class Circle {
//     draw() {
//         console.log('画一个圆形')
//     }
// }

// class Decorator {
//     constructor(circle) {
//         this.circle = circle
//     }
//     draw() {
//         this.circle.draw()
//         this.setRedBorder(this.circle)
//     }
//     setRedBorder(circle) {
//         console.log('设置圆的边框颜色是红色')
//     }
// }

// let circle = new Circle()
// circle.draw()

// let dec = new Decorator(circle)
// dec.draw()

// 装饰类
// function mixins(...list) {
//     return function (target) {
//         Object.assign(target.prototype, ...list)
//     }
// }

// const Foo = {
//     foo() {
//         alert('foo')
//     }
// }

// @mixins(Foo)
// class newClass {

// }

// let obj = new newClass()
// obj.foo()

// 装饰方法1
// class Person {
//     constructor() {
//         this.first = 'A'
//         this.last = 'B'
//     }

//     @readOnly
//     name() {
//         return `${this.first} ${this.last}`
//     }
// }

// function readOnly(target, name, discriptor) {
//     discriptor.writable = false;
//     return discriptor
// }

// let p = new Person();
// console.log(p.name)
// p.name = function () { } // 出错

// 装饰方法2
class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    let oldValue = descriptor.value;
    console.log(arguments)
    console.log(target)
    console.log(name)
    console.log(descriptor)
    descriptor.value = function () {
        console.log(`use ${name} with`, arguments)
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

let math = new Math();
const result = math.add(2, 4)
console.log('result', result)