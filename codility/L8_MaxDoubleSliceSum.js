// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const N = A.length;
  const left = new Array(N).fill(0);
  const right = new Array(N).fill(0);
  for (let i = 1; i < N - 1; i++) {
      left[i] = Math.max(left[i - 1] + A[i], 0);
  }
  
  for (let i = N - 2; i > 0; i--) {
      right[i] = Math.max(right[i + 1] + A[i], 0);
  }
  
  let answer = 0;
  for (let i = 1; i < N - 1; i++) {
      answer = Math.max(answer, left[i - 1] + right[i + 1]);
  }
  
  return answer;
}
