// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let copy = A.slice().sort((a, b) => a - b);
  let leader = copy[Math.ceil(copy.length / 2)];
  
  const leaderCounts = [];
  let count = 0;
  for (const v of A) {
      if (v === leader) count++;
      leaderCounts.push(count);
  }
  
  let answer = 0 ;
  for (let i = 0; i < A.length; i++) {
      if ((i + 1) / 2 < leaderCounts[i] && (A.length - i - 1) / 2 < count - leaderCounts[i]) answer++;
  }
  
  return answer;
}
