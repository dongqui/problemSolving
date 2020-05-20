// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let mini = Infinity;
  let answer = -1;
  for (let i = 0; i < A.length; i++) {
      
      if (i + 1 < A.length && (A[i] + A[i + 1]) / 2 < mini) {
          answer = i;
          mini = (A[i] + A[i + 1]) / 2;
      } 
      
      if (i + 2 < A.length && (A[i] + A[i + 1] + A[i + 2]) / 3 < mini) {
          answer = i;
          mini = (A[i] + A[i + 1] + A[i + 2]) / 3;
      }
  }
  return answer;
}
