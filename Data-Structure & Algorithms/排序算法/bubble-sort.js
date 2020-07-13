/*
    冒泡排序思想：相邻的元素两两比较 交换位置
    遍历 length - 1 次
    时间复杂度 O(n^2)
*/

function bubbleSort(arr) {
    // 定义一个变量来判断当前轮次是否发生元素交换，没有则直接beark，
    // 避免排序完成后 无用的遍历操作
    let changeFlag = false
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                changeFlag = true
            }
        }
        if (!changeFlag) break
    }

    return arr
}

// 数组元素交换
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = Array(10).fill(0).map(i => Math.floor(Math.random() * 100));
const res = bubbleSort(arr);
console.log(res);