/**
 * 
 * @param {number} n 
 * @returns {string[]}
 */
function strobogrammaticNumber(n) {
    // 对于n > 2的情况 其实就是分割成 n - 2 + 2的组合
    // 例如 n = 3 就是 n=1 和 n=2 的组合
    if (n === 1) {
        return ['0', '1', '8']
    }
    if (n === 2) {
        return ['11', '69', '88', '96']
    }

    const res = []
    
} 