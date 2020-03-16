const callbacks = []
let timerFunc
let isUsingMicroTask = false

if (typeof Promise !== 'undefined') {
    const p = Promise.resolve

    timerFunc = () => {
        p.then(flushCallbacks)
    }
    isUsingMicroTask = true
} else if (typeof MutationObserver !== 'undefined') {
    let couter = 1
    const mutationObserver = new MutationObserver(flushCallbacks)
    const textNode = document.createTextNode(String(couter))
    mutationObserver.observe(textNode, {
        characterData: true
    })

    timerFunc = () => {
        couter = (couter + 1) % 2
        textNode.data = String(couter)
    }
    isUsingMicroTask = true
} else if () {
    timerFunc = () => {
        setTimeout(flushCallbacks, 0)
    }
} else {
    timerFunc = () => {
        setTimeout(flushCallbacks, 0)
    }
}


function flushCallbacks() {
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0;i < copies.length;i++) {
        copies[i]()
    }
}


function nextTick(cb, ctx) {
    
}