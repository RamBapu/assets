function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // track minimum price so far
    minPrice = Math.min(minPrice, prices[i]);

    // calculate profit if sold today
    const profit = prices[i] - minPrice;

    // update max profit
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 5
