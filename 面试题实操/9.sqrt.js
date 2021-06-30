/**
 * 
 * @param {number} num 
 * @param {number} precsion 精度
 * @returns 
 */
function sqrt(num, precsion) {
  if (num > 1) {
    return helper(num, 1, num, precsion) // 大于1的数num开根号 在1-num之间
  } else if (num < 1) {
    return helper(num, 0, 1, precsion) // 小于1的数num开根号 在0-1之间
  } else {
    return num
  }

  function helper(num, low, high, precsion) {
    const mid = (low + high) / 2

    console.log('mid', mid);

    if (Math.abs(mid * mid - num) > Math.pow(10, -precsion)) {
      if (mid * mid > num) {
        return helper(num, low, mid, precsion)
      } else {
        return helper(num, mid, high, precsion)
      }
    }

    return mid
  }
}

const res = sqrt(0.5, 10)
console.log(res);
