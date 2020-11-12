import StateMachine from 'javascript-state-machine';

let fsm = new StateMachine({
    init: 'pending',
    transition: [
        { name: 'resolve', from: 'pending', to: 'fullfilled' },
        { name: 'reject', from: 'pending', to: 'rejected' },
    ],
    methods: {
        onResolve(state, data) {
            // state - 当前状态机的实例
            // data - xxx 【fsm.resolve(xxx)】 传递的参数
            // 在这 data -> MyPromise
            data.successList.forEach(fn => fn())
        },
        onReject(state, data) {
            data.failList.forEach(fn => fn())

        }
    }
})

class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []

        fn(function () {
            fsm.resolve(this)
        }, function () {
            fsm.reject(this)
        })
    }
    then(resolve, reject) {
        this.successList.push(resolve)
        this.failList.push(reject)
    }
}

// test
function loadImg(src) {
    const promise = new Promise(function (resolve, reject) {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(img)
        }
        img.src = src
    })
    return promise
}
let src = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'
let result = loadImg(src)
result.then(function () {
    console.log('success')
}, function () {
    console.log('fail')
})
result.then(function () {
    console.log('success2')
}, function () {
    console.log('fail2')
})