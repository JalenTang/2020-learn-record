/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    var sortedNums = nums.sort((a, b) => a - b);
    var zeroNum = 0;
    // 计算0的个数
    while (sortedNums[0] === 0) {
      sortedNums.splice(0, 1);
      zeroNum++;
    }
    console.log(sortedNums);
    // 判断是否除0外 有相同的数字
    var len = sortedNums.length;
    for (var i = 0; i < len; i++) {
      if (sortedNums[i] === sortedNums[i + 1]) {
        return false;
      }
    }
  
    return sortedNums[len - 1] - sortedNums[0] < zeroNum + len;
  };
  
  var nums = [1, 6, 5, 4, 2];
  var res = isStraight(nums);
  console.log(res);
  