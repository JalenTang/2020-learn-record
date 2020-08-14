/* 发布订阅模式 */

class PubSub {
    constructor() {
        this.events = {}
    }

    /**
     * 注册事件订阅行为
     * @param {String} type 事情主题 
     * @param {Function} callback 回调函数
     */
    subscribe(type, callback) {
        if (!this.events[type]) {
            this.events[type] = []
        }
        this.events[type].push(callback)
    }


    /**
     * 发布事件
     * @param {String} type 事情主题
     * @param  {Array} args 参数列表
     */
    publish(type, ...args) {
        if (this.events[type]) {
            this.events[type].forEach(callback => {
                callback(...args)
            })
        }
    }

    /**
     * 移除事件订阅的某个行为
     * @param {String} type 事情主题 
     * @param {Function} callback 回调函数
     */
    unsubscribe(type, callback) {
        if (this.events[type]) {
            if (this.events[type].length === 0) {
                delete this.events[type]
                return
            }

            const cbIndex = this.events[type].findIndex(item => item === callback)
            if (cbIndex !== -1) {
                this.events[type].splice(cbIndex, 1)
            }
        }
    }

    /**
     * 移除事件订阅的所有行为
     * @param {String} type 事情主题 
     * @param {Function} callback 回调函数
     */
    unsubscribeAll(type, callback) {
        if (this.events[type]) {
            delete this.events[type]
        }
    }
}

const myPubSub = new PubSub()

const sub1 = data => {
    console.log(`sub1---${data}`)
};

myPubSub.subscribe('showMessage', sub1)

// 模拟分发条件
if (true) {
    myPubSub.publish('showMessage', '事件分发了')

    // 2s后取消订阅
    setTimeout(() => {
        myPubSub.unsubscribeAll('showMessage')
        myPubSub.publish('showMessage', '事件再次分发了')
    }, 2000)
}

