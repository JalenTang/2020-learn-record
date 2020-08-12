# 20200810 华为OD机试题

## （一星）报数

题目：有编号为1-100的人围成一圈，输入一个整数M，这些人从1号开始依次报数，报数到M的人淘汰，然后后面一位重新从1开始报数，直到剩余的人数小于M，求出最后剩余的人

思路：给定数组`[1-100]`, 每轮报数到尾部时，将未报数的剩余元素推到队头，递归执行

``` javascript
function getRestPeople(M) {
    let arr = Array(10).fill(0).map((item, index) => index + 1)

    while(arr.length >= M) {
        let restNum = arr.length % M
        let restArr = arr.slice(arr.length - restNum, arr.length)
        let roundArr = arr.slice(0, arr.length - restNum).filter((item, index) => (index + 1) % M !== 0)
        arr = [].concat(restArr, roundArr)
        console.log(arr);
    }
    return arr
}
```

## （一星）k对数的最小值

题目：给定2个有序数组和整数K，从这2个数组中取出一个作为一对数，求出取出K对不重复下标的数对的和的最小值

思路：2个数组（size1, size2）中的每个数依次相加，将这`size1*size2`的从小到大排序，然后取前K个元素相加

```javascript
function minSum(arr1, arr2, k) {
    const arr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr.push(arr1[i] + arr2[j]);
        }
    }

    const sortArr = arr.sort((a, b) => a - b);
    return sortArr.slice(0, k).reduce((prev, val) => prev + val, 0);
}

const res = minSum([1, 1, 2], [1, 2, 3], 2);
console.log(res);
```
