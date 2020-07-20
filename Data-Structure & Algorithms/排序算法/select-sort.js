/*
    选择排序：每次循环找出最大（或最小）的元素
*/

function selectSort(arr) {
    let min = arr[0]
    let minIndex

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }

        // 判断当前循环序号 就是 最小值时，直接break 减少循环次数
        if (minIndex === i) break
        arr[minIndex] = arr[i]
        arr[i] = min
    }
    return arr
}

const arr = Array(10).fill(0).map(i => Math.floor(Math.random() * 100));
const res = selectSort(arr);
console.log('排序后', res);