// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let arr = [...new Set(A)]
      .filter(v => v > 0)
      .sort((a, b) => a - b);
  let min = 1;
  for (const num of arr) {
      if (num === min) min++;
      if (num > min) return min;
  }
  return min;
}
