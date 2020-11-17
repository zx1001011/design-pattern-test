export function log(type) {
    // es6,es7
    return function (target, name, descriptor) {
        let oldValue = descriptor.value // 以前的函数
        descriptor.value = function () {
            // 打印日志
            console.log(`日志上报 ${type}`)
            // 执行原有方法
            return oldValue.apply(this, arguments)
        }
        return descriptor
    }
}