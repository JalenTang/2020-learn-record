/* 单例模式 */

// 最基础的单例模式
function Singleton(data) {
    this.data = data
}

Singleton.getInstance = (function () {
    var instance = null // 利用闭包的特性
    return function getInstance(data) {
        if (!instance) {
            instance = new Singleton(data)
        }
        return instance
    }
})()

// 透明的单例模式
var Singleton = (function () {
    var instance = null

    return function (data) {
        if (!instance) {
            this.data = data
            instance = this
        }
        console.log(instance);
        return instance
    }
})()

const instance1 = new Singleton({ name: 'Jalen' })
const instance2 = new Singleton({ name: 'Jalen2' })

console.log(instance1 === instance2); // true

// ES6书写
class Singleton {
    constructor(data) {
        this.data = data
        this.instance = null
    }

    static getInstance(data) {
        if (!this.instance) {
            this.instance = new Singleton(data)
        }
        return this.instance
    }
}

