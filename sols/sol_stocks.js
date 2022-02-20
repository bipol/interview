function maxProfit(prices) {
  let low = -1;
  let profit = 0;
  for (var x = 0; x < prices.length; x++) {
    if (low == -1 || prices[x] < low) {
      low = prices[x];
    } else if (low !== -1) {
      let curr = prices[x] - low;
      if (curr > profit) {
        profit = curr;
      }
    }
  }
  return profit;
}

console.log(maxProfit([7,1,5,3,6,4]), '=>', 5);
console.log(maxProfit([7,6,4,3,1]), '=>', 0);
console.log(maxProfit([7,6,4,3,1,0,3,5]), '=>', 5);
console.log(maxProfit([100,3,5,7,1,100]), '=>', 99);
