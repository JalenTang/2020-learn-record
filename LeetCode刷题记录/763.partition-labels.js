/* TAG ==> 双指针 贪心
    字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。
    返回一个表示每个字符串片段的长度的列表。

    输入：S = "ababcbacadefegdehijhklij"
    返回：[9,7,8]
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    var res = []
    // 定义一个map 来存储各个字母最后出现的位置
    var map = new Map()
    for (var i = 0; i < S.length; i++) {
        map.set(S[i], i)
    }

    // 贪心：
    var start = 0
    var end = 0
    for (var j = 0; j < S.length; j++) {
        end = Math.max(end, map.get(S[j]))
        if (j === end) {
            res.push(end - start + 1)
            start = end + 1
        }
    }

    return res
};
