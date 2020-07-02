/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0 || prices.length === 1) return 0;

  var base = prices[0];
  var res = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= base) {
      base = prices[i];
    } else {
      res = Math.max(prices[i] - base, res);
    }
  }

  return res;
};
