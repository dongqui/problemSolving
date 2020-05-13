function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let left = 0
  let right = A.reduce((acml, v) => acml + v);
  let mini = Infinity;
  for (let i = 0; i < A.length - 1; i++) {
      left += A[i];
      right -= A[i];
      mini = Math.min(mini, Math.abs(left - right));
  }
  return mini;
}