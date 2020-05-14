// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const counters = new Array(N).fill(0);
  let maxCounter = 0;
  let nextMaxCounter = 0;
  for (let i = 0; i < A.length; i++) {
      if (A[i] <= N) {
          counters[A[i] - 1] = Math.max(maxCounter + 1, counters[A[i] - 1] + 1);
          nextMaxCounter = Math.max(nextMaxCounter, counters[A[i] - 1]);
      } else {
          maxCounter = nextMaxCounter;
      }
  }
  return counters.map(v => v > maxCounter ? v : maxCounter);
}
