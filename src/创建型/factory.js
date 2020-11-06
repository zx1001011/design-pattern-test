class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
        alert('init', this.name);
    }
    fun1() {
        alert('fun1')
    }
    fun2() {
        alert('fun2')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}
let create = new Creator()
let p = create.create('亚马逊') // 将new 封装成一个方法
p.init()
p.fun1()
p.fun2()