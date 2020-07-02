/**
 * @param {number} n  n > 0
 * @return {number}
 */
var cuttingRope = function (n) {
  var dp = [];

  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 1;

  for (var i = 3; i <= n; i++) {
    var res = 0;
    for (var k = 1; k < i; k++) {
      // 割一刀 判断各种情况的最大值
      res = Math.max(dp[i - k] * k, (i - k) * k, res);
    }
    dp[i] = res;
  }
  return dp[n];
};
