function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const dict = {};
  for (const num of A) {
      dict[num] = dict[num] ? dict[num] + 1 : 1;
  }
  return Object.keys(dict).filter(k => dict[k] % 2).map(Number)[0];
}
