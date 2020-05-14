// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const memo = {};
  let sum = new Array(X + 1).fill().map((v, i) => i).reduce((acml, v) => acml +  v);
  for (let i = 0; i < A.length; i++) {
      if (memo[A[i]]) continue;
      memo[A[i]] = true;
      sum -= A[i];
      if (sum <= 0) return i;
  }
  return -1;
}
