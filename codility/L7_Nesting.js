// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const stack = [];
  for (const c of S) {
      if (c === '(') {
          stack.push(c);
      } else {
          if (!stack.pop()) return 0;
      }
  }
  if (stack.length) return 0;
  return 1;
}
