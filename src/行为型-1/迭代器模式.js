class Container {
    constructor(list) {
        this.list = list
    }
    getIterator() {
        return new Iterator(this)
    }
}
class Iterator {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }
    next() {
        this.index = this.index % this.list.length
        return this.list[this.index++];
    }
    hasNext() {
        if (this.index < this.list.length) {
            return true
        }
        return false
    }
}
// test
// let container = new Container([1, 2, 3, 4])
// let iterator = container.getIterator() // 每个数据类型都有自己的遍历器
// while (iterator.hasNext()) {
//     console.log(iterator.next())
// }

function each(data) {
    // let iterator = data[Symbol.iterator]()
    // let item = iterator.next()
    // while (!item.done) {
    //     console.log(item.value)
    //     item = iterator.next()
    // }
    // 带有遍历器特性的对象 ： data[Symbol.iterator] 有值
    for (let item of data) {
        console.log(item)
    }
}
let arr = [1, 2, 3, 4]
each(arr)
let map = new Map()
map.set('a', 199)
map.set('b', 191)
each(map)