/* Vue如何检测数组变化 */

// 数组原型
const arrayProto = Array.prototype
// 新建一个有数组原型和属性的对象 可以理解为继承
const arrayMethods = Object.create(arrayProto)

// Vue重写的数组方法
const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

methodsToPatch.forEach(function (method) {
    // 缓存 数组原始方法
    const original = arrayProto[method]
    def(arrayMethods, method, function mutator(...args) {
        const result = original.apply(this, args)
        return result
    })
})

// 定义一个属性
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}
