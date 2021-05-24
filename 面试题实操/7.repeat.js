// 实现一个repeat方法 func需要实现的函数
function repeat(func, times, wait) {
  let time = 0
  return function(...args) {
    const timer = setInterval(() => {
      if (time < times) {
        func.call(this, ...args)
        time++
      } else {
        clearInterval(timer)
        time = 0
      }
    }, wait)
  }
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world");