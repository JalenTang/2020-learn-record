// 归并算法
function mergeSort(arr) {
  if (arr.length < 2) return arr
  const m = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, m))
  const right = mergeSort(arr.slice(m))
  return merge(left, right)
}

function merge(left, right) {
  let result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  if (i < left.length) {
    result = result.concat(left.slice(i))
  }

  if (j < right.length) {
    result = result.concat(right.slice(j))
  }

  return result
}

const arr = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log('排序前', arr);
const res = mergeSort(arr);
console.log('排序后', res);


