class PromiseLimit {
    constructor(limit) {
        this.limit = limit
        this.taskQueue = []
        this.runningCount = 0
    }

    pushTask(task) {
        this.taskQueue.push(task)
        this.run()
    }

    run() {
        while (this.runningCount < this.limit && this.taskQueue.length) {
            const task = this.taskQueue.shift()
            if (task) {
                this.runningCount++
                task().then(() => {
                    this.runningCount--
                    this.run()
                })
            }
        }
    }
}

async function main() {
    const promiselimit = new PromiseLimit(3)

    for (let i = 0; i < 10; i++) {
        console.log(i);
        promiselimit.pushTask(async () => {
            await delay(2000)
            console.log('i ===> ', i);
        })
    }
}

function delay(time) {
    return new Promise(r => {
        setTimeout(() => {
            r()
        }, time)
    })
}

main();
