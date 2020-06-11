function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0
  for (let i = 1; i <= Math.sqrt(N); i++) {
      if (i * i === N) {
          answer += 1;
          break;
      }
      if (N % i === 0) answer += 2;
  }
  return answer;
}
