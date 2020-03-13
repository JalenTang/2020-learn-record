/* 观察者模式 */

class Subject {
    constructor() {
        this.observers = []
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        const observers = this.observers
        for (let i = 0; i < observers.length; i++) {
            if (observers[i].id === observer.id) {
                observers.splice(i, 1)
            }
        }
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
}

class Observer {
    constructor(options) {
        this.id = options.id
        this.data = options.data
    }

    update() {
        console.log(`id为${this.id}的依赖更新了`);
    }
}

const sub = new Subject()
const ob1 = new Observer({ id: 1, data: 'i am ob1' })
const ob2 = new Observer({ id: 2, data: 'i am ob2' })

sub.addObserver(ob1)
sub.addObserver(ob2)

// 模拟状态发生变更
if (true) {
    sub.notify()
}
