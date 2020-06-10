// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxSlice = 0
  let answer = -Infinity;
  for (const n of A) {
      maxSlice = Math.max(n, maxSlice + n);
      answer = Math.max(answer, maxSlice);
  }
  return answer;
}
