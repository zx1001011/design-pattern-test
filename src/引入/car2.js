class Camera {
    constructor() {
    }
    shotCar(car) {
        return {
            number: car.number,
            inTime: Date.now()
        }
    }
}
class Screen {
    constructor() {
    }
    screenCar(car, inTime) {
        console.log(`车辆：${car.number} 停车时长：${Date.now() - inTime} ms`)
    }
}
class Car {
    constructor(number) {
        this.number = number
    }
}
// 停车场
class Park {
    // camera
    // screen
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {}
    }
    in(car) {
        const info = this.camera.shotCar(car)
        const i = parseInt(Math.random() * 3 % 3) // 剩余车位中的某一个
        const place = this.floors[0].places[i] // 欠缺考虑，默认第一层
        place.in()
        info.place = place
        this.carList[car.num] = info
    }
    out(car) {
        const info = this.carList[car.num]
        const place = info.place
        place.out()
        this.screen.screenCar(car, info.inTime)
        delete this.carList[car.num] // 手动清空
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个车位`
        }).join('\n')
    }
}
class Floor {
    constructor(index, places) {
        this.index = index
        this.places = places || []
    }
    emptyPlaceNum() {
        let num = 0;
        this.places.forEach((item, index) => {
            if (item.empty) num += 1
        })
        return num;
    }
}
class Place {
    constructor() {
        this.empty = true
    }
    in() { this.empty = false }
    out() { this.empty = true }
}
// 测试
var car = new Car(100)
var place1 = new Place()
var floor1 = new Floor(0, [place1, place1, place1])
var park = new Park([floor1, floor1, floor1])
park.in(car)
setTimeout(function () {
    park.out(car)
}, 2000)