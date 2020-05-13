function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  A.unshift(null);
  for (let i = 1; i <= A.length + 1; i++) {
      if (A[i] !== i) return i;
  }
}
