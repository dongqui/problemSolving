// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let westSum = A.reduce((acml, v) => acml + v);
  let answer = 0;
  for (const car of A) {
      if (car === 0) {
          answer += westSum;
          if (answer > 1000000000) return -1;
      } else {
          westSum -= 1;
      }
  }
  return answer;
}
