// class User {
//     constructor(type) {
//         this.type = type
//     }
//     buy() {
//         if (this.type === 'ordinary') {
//             console.log('普通用户购买')
//         } else if (this.type === 'member') {
//             console.log('会员用户购买')
//         } else if (this.type === 'vip') {
//             console.log('VIP会员用户购买')
//         }
//     }
// }

// let u1 = new User('ordinary')
// u1.buy()
// let u2 = new User('member')
// u2.buy()
// let u3 = new User('vip')
// u3.buy()

class ordinaryUser {
    buy() {
        console.log('普通用户购买')
    }
}
class memberUser {
    buy() {
        console.log('会员用户购买')
    }
}
class vipUser {
    buy() {
        console.log('VIP会员用户购买')
    }
}

let u1 = new ordinaryUser()
u1.buy()
let u2 = new memberUser()
u2.buy()
let u3 = new vipUser()
u3.buy()