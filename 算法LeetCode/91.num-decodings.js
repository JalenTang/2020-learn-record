/*
    TAG ===> 递归 DP 
    题目： 给定一个只包含数字的非空字符串，按照1-26 对于字母A-Z的方式解码, 请计算解码方法的总数
    例如： 
        输入："12"  输出：2 
        输入："226" 输出：3
*/

/**
 * 递归的方法
 * @param {string} s
 * @return {number}
 */
// const numDecodings = function (s) {
//     return decode(s, 0)

//     function decode(s, index) {
//         if (index === s.length) return 1

//         if (s[index] === '0') return 0

//         // 对于一个string 分为2类
//         // 比如 '2266' = ('2' | '266') + ('22' | '66')
//         // 第一种情况 即对于首字符不为0的 首字符可以单独解码
//         // 第二种情况 即对于前2个字符，需要做判断 是否<=26 <=26的可以单独解码
//         let count1 = decode(s, index + 1)
//         let count2 = 0

//         // 判断后面还有字符
//         if (index < s.length - 1) {
//             const num = +s.slice(index, index + 2)
//             console.log('num', num);
//             if (num <= 26) {
//                 count2 = decode(s, index + 2)
//             }
//         }

//         return count1 + count2;
//     }
// };


/**
 * DP动态规划的方式
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) { };

numDecodings('226')
