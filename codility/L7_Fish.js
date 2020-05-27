// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;
  const stack = [];
  for (let i = 0; i < B.length; i++) {
      if (B[i]) {
          stack.push(A[i]);
      } else {
          while (stack.length) {
              if (A[i] > stack[stack.length - 1]) stack.pop();
              else break;
          }
          if (!stack.length) answer += 1;
      }
  }
  return answer + stack.length;
}
