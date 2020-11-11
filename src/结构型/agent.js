// class realImg {
//     constructor(name) {
//         this.name = name
//         this.loadImg()
//     }
//     display() {
//         console.log(`display ${this.name}`)
//     }
//     loadImg() {
//         console.log(`loadImg ${this.name}`)
//     }
// }

// class ProxyImg {
//     constructor(name) {
//         this.realImg = new realImg(name);
//     }
//     display() {
//         this.realImg.display()
//     }
// }
// let proxyImg = new ProxyImg('img.png');
// proxyImg.display()

// 明星经理人
let star = {
    age: 20,
    name: '哈哈哈',
    phone: '1560000000'
}

let agent = new Proxy(star, {
    get: function (target, key) {
        if (key == 'phone') {
            return '1890000111'
        }
        if (key == 'price') {
            return 120000
        }
        return target[key]
    },
    set: function (target, key, value) {
        if (key == 'customPrice') {
            if (value < 12000) {
                // throw new Error('价格太低')
                console.error('价格太低')
                return '价格太低'
            } else {
                console.info('成交')
                return '成交'
            }
        } else {
            target[key] = value
            return true
        }
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
console.log('10000 可以出演吗？',)
agent.customPrice = 10000
console.log('12000 可以出演吗？',)
agent.customPrice = 12000