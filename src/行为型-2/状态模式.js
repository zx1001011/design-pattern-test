class Context {
    constructor() {
        this.state = null
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}
class State {
    constructor(color) {
        this.color = color
    }
    handle(context) {
        console.info(`turn light to ${this.color}`)
        console.info(this)
        context.setState(this)
    }
}
// test
let context = new Context();
[{
    color: "green",
    time: 1000
},
{
    color: "red",
    time: 4000
},
{
    color: "range",
    time: 7000
}].forEach(item => {
    let state = new State(item.color)
    setTimeout(() => {
        state.handle(context)
        console.log(context.getState())
    }, item.time);
})