// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  A.sort((a, b) => b - a);
  let last = A.length - 1;
  
  return Math.max(A[0] * A[1] * A[2], A[0] * A[last] * A[last - 1]);
}
