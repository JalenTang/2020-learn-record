function debounce(func, wait, immediate) {
  let timer

  return function(...args) {
    const context = this

    if (timer) clearTimeout(timer)

    if (immediate) {
      const callNow = !timer

      timer = setTimeout(() => {
        timer = null
      }, wait)

      if (callNow) func.call(context, ...args)

    } else {
      timer = setTimeout(() => {
        func.call(context, ...args)
      }) 
    }
  }
}