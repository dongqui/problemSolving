// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const stack = [];
  for (const a of A) {
      const top = stack[stack.length - 1];
      if (top !== a && stack.length) {
          stack.pop();
      } else {
          stack.push(a);
      }
  }
  
  const answer = [];
  for (let i = 0; i < A.length; i++) {
      if (A[i] === stack[0]) answer.push(i);    
  }
  
  return answer.length > A.length / 2 ? answer[0] : -1;
}
