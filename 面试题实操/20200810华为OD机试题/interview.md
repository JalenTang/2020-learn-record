# 20200810 华为OD机试题

## （一星）

题目：有编号为1-100的人围成一圈，输入一个整数M，这些人从1号开始依次报数，报数到M的人淘汰，然后后面一位重新从1开始报数，直到剩余的人数小于M，求出最后剩余的人

思路：

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
