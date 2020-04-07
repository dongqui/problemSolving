
var SignMaster = function() {
  this.prices = null;
};

SignMaster.prototype.changePrices = function(prices) {
this.prices = prices;
};

SignMaster.prototype.estimatePrice = function(oldSign, newSign) {
if (!this.prices) return 0;
const dp = [];
for (let i = 0; i <= oldSign.length; i++) {
  dp.push(new Array(newSign.length + 1).fill(0));
}
let maxi = 0;
for (let i = 1; i <= oldSign.length; i++) {
  for (let j = 1; j <= newSign.length; j++) {
    if (newSign[j - 1] === oldSign[i - 1]) {
      dp[i][j] += dp[i - 1][j - 1] + 1;
    } else {
       dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

let commonCount = dp[oldSign.length][newSign.length];
let addCost = oldSign.length - commonCount > 0 ? this.prices['rem'] * (oldSign.length - commonCount) : 0;
let remCost = newSign.length - commonCount > 0 ? this.prices['add'] * (newSign.length - commonCount) : 0;

return addCost + remCost;
};

const s = new SignMaster();
console.log(s.estimatePrice('totes','toes'));

// var SignMaster = function() {
//   this.add = 0;
//   this.rem = 0;
//   this.cache = {};
// };

// SignMaster.prototype.changePrices = function(prices) {
//   Object.assign(this, prices);
// };

// SignMaster.prototype.estimatePrice = function(oldSign, newSign, a = 0, b = 0) {
//   if(this.cache[oldSign + "/" + newSign]) return this.cache[oldSign + "/" + newSign];
//   if(this.add === 0 && this.rem === 0) return 0;
//   if(oldSign === newSign) return 0;
//  if(oldSign.length === 0) return newSign.length * this.add;
//  if(newSign.length === 0) return oldSign.length * this.rem;
//   this.cache[oldSign + "/" + newSign] = Math.min(this.estimatePrice(oldSign.slice(0, -1), newSign) + this.rem,
//      this.estimatePrice(oldSign, newSign.slice(0, -1)) + this.add,
//       this.estimatePrice(oldSign.slice(0, -1), newSign.slice(0, -1)) + (this.rem + this.add) * !(oldSign[oldSign.length - 1] === newSign[newSign.length - 1]));
//   return this.cache[oldSign + "/" + newSign];
// };
// Overview
// You need to help Bob be a good businessman and not charge people too much for his signs.

// Description
// Bob is running a business that creates signs for people. He can charge much less than his competitors because he charges by letter instead by the entire sign. He can take a sign and change a few letters to make a new sign much more cheaply than a competitor can make a sign from scratch.

// The only problem is Bob is not very good at pricing these changes. He wants to be able to look at a sign and a customer's request and quickly be able to give the customer an estimate for the total cost.

// Task
// Write a class SignMaster that is able to help Bob estimate prices quickly. Bob will need to be able to changePrices(prices) so that he can adapt to the changing market. He also needs to estimatePrice(oldSign, newSign) so that he can give his price estimates to his customers.

// The changePrices method takes an object that specifies the new prices. The values are the cost of doing an operation (add or remove) and the keys will be add or rem depending on the operation. Bob does not always want to change the price for both adding and removing letters, so this method should handle incomplete input. Before this method is called, the sign changes should be free.

// estimatePrice takes two strings. The first string is the old sign of the customer and the second is their request. This method should return the cost of changing the sign from the old message to the new message. If there are multiple ways to change the sign, this method should return the cheapest way.