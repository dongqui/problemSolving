function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  return N.toString(2).split('').slice(1).reduce((acml, v, i) => {
      if (v === '0') {
          count++;
          return acml;
      }
      acml = Math.max(acml, count);
      count = 0;
      return acml;
  }, 0)
}

console.log(solution(1162))