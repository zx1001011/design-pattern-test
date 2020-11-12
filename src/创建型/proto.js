const prototype = {
    getName() {
        return this.first + ' ' + this.last
    },
    say() {
        console.log('hello, I am ' + this.first + this.last)
    }
}
let x = Object.create(prototype)
x.first = 'A'
x.last = 'A'
x.getName()
x.say()

let y = Object.create(prototype)
y.first = 'B'
y.last = 'B'
y.getName()
y.say()