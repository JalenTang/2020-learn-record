function throttle(func, wait) {
    let previous = 0

    return function() {
        const context = this
        const now = +Date().now()
        if (now - previous > wait) {
            func.apply(context, arguments)
            previous = now
        } 
    }
}