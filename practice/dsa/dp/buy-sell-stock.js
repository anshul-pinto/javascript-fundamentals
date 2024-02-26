var maxProfit = function (prices) {
  let maxProfit = -Infinity;
  let curBuyPrice = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    const profit = prices[i] - curBuyPrice;
    maxProfit = Math.max(maxProfit, profit);
    curBuyPrice = Math.min(curBuyPrice, prices[i]);
  }

  return maxProfit;
};
