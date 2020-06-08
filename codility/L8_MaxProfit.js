// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let mini = Infinity;
  let answer = 0;
  for (const n of A) {
      if (n <= mini) {
          mini = n;
          continue;
      }
      answer = Math.max(answer, n - mini);
  }
  return answer;
}
