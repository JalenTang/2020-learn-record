// function compose(...funcs) {
//   const len = funcs.length
//   let count = len - 1
//   let result
//   return function helper(...args) {
//     result = funcs[count].call(this, ...args)

//     if (count <= 0) {
//       count = len - 1
//       return result
//     }

//     count = count - 1
//     return helper.call(null, result)
//   }
// }

function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function sum(a, b) {
  console.log(a, b);
  return a + b
}
function length(str) {
  console.log(str);
  return str.length
}
function addPrefix(str) {
  console.log(str);
  return `￥${str}` 
}

const final = compose(addPrefix, length, sum)

const res = final('a', 'b')
console.log(res);