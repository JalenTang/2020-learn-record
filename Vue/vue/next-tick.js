let isUsingMicroTask = false // 全局变量 判断是否使用微任务队列 来支持nextTick
const callbacks = [] // 回调函数的队列
let pending = false // 执行flag

/* nextTick内部 实现优先级 promise > MutationObserver > setImmediate > setTimeout */
let timerFunc

if (typeof Promise !== 'undefined' && isNative(Promise)) { // 判断promise运行环境 原生支持Promise的用promise实现
    const p = Promise.resolve()
    timerFunc = () => {
        p.then(flushCallbacks)
        if (isIOS) setTimeout(noop) // 对IOS做强制结束并更新视图
    }

    isUsingMicroTask = true // 全局只判断一次
} else if (!isIE && typeof MutationObserver !== 'undefined' && ( // 非IE环境的MutationObserver支持
    isNative(MutationObserver) ||
    MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
    // 模拟监听一个字符节点‘1’-‘0’的变化 来执行回调
    let counter = 1
    const observer = new MutationObserver(flushCallbacks)
    const textNode = document.createTextNode(String(counter))
    observer.observe(textNode, {
        characterData: true
    })
    timerFunc = () => {
        counter = (counter + 1) % 2
        textNode.data = String(counter)
    }
    isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) { // 原生支持setImmediate的环境
    timerFunc = () => {
        setImmediate(flushCallbacks)
    }
} else { // 用setTimeout处理
    timerFunc = () => {
        setTimeout(flushCallbacks, 0)
    }
}

/* cb-回调函数 ctx-执行环境， 默认为当前Vue实例 */
export function nextTick(cb, ctx) {
    let _resolve
    callbacks.push(() => {
        if (cb) {
            cd.call(ctx)
        } else if (_resolve) {
            _resolve(ctx)
        }
    })

    // pending为false时执行
    if (!pending) {
        pending = true
        timerFunc()
    }

    // 回调参数不存在
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(resolve => {
            _resolve = resolve
        })
    }
}

// 回调函数执行的方法，执行完成后情况回调函数队列
function flushCallbacks() {
    pending = false // 重置执行flag
    const copies = callbacks.slice(0) // 浅拷贝
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
        copies[i]() // 依次执行回调函数
    }
}
