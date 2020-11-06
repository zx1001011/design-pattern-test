class Car {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}
class KuaiChe extends Car {
    constructor(number, name, price) {
        super(number, name)
        this.type = '快车'
        this.price = price
    }
}
class ZhuanChe extends Car {
    constructor(number, name, price) {
        super(number, name)
        this.type = '专车'
        this.price = price
    }
}
class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`行程开始，该车为 ${this.car.type}, 名称： ${this.car.name}, 车牌号：${this.car.number}`)
    }
    end() {
        console.log(`本次行程需要支付： ${this.car.price * 5}`)
    }
}
var trip = new Trip((new ZhuanChe('1', '无', '3')))
trip.start()
trip.end()