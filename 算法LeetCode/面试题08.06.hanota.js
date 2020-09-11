/*
    TAG ===> 递归
    题目：汉诺塔
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
const hanota = function (A, B, C) {
    const n = A.length;
    move(A, B, C, n)

    console.log(A, B, C);

    function move(A, B, C, n) {
        if (n === 1) {
            C.push(A.pop())
            return
        }

        move(A, C, B, n - 1)
        C.push(A.pop())
        move(B, A, C, n - 1)
    }
};
