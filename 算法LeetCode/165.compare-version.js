/* TAG ===> 字符串
    比较两个版本号 version1 和 version2。
    如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。

    你可以假设版本字符串非空，并且只包含数字和 . 字符。
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
    let arr1 = version1.split('.')
    let arr2 = version2.split('.')
    let len1 = arr1.length
    let len2 = arr2.length

    let i = 0

    while (i < len1 || i < len2) {
        if (Number(arr1[i] || 0) < Number(arr2[i] || 0)) {
            return -1
        } else if (Number(arr1[i] || 0) > Number(arr2[i] || 0)) {
            return 1
        }

        i++
    }
    return 0
};

console.log(compareVersion('1', '1.1'))
