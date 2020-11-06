import './创建型/factory'


// es6 语法
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${this.name} eat food...`)
    }
    speak() {
        alert(`${this.name} speak: my age is ${this.age}.`)
    }
}
// extends 继承
class Student extends People {
    constructor(name, age, number) {
        super(name, age)  // 如果不全部继承呢？
        this.number = number
    }
    study() {
        alert(`${this.name} is studying...s`)
    }
}

function loadImg(src) {
    let promise = new Promise(function (resolve, reject) {
        let img = document.createElement('img')
        img.onload = function () { resolve(img) }
        img.onerror = function () { reject('图片加载失败') }
        img.src = src
    })
    return promise
}
let result = loadImg('https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png')
// result.then(function (img) {
//     alert(`width: ${img.width}`)
//     return img
// }).then(function (img) {
//     alert(`height: ${img.height}`)
//     return img
// }).catch(function (ex) {
//     alert(ex)
// })