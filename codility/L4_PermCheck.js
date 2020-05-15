// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let arr = [...new Set(A)].sort((a, b) => a - b);
  if (arr.length !== A.length) return 0
  if (arr[0] !== 1 || arr[arr.length - 1] !== arr.length) return 0;
  return 1;
}
