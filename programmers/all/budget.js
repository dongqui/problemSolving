function solution(budgets, M) {
  let answer = 0;
  let min = Math.min(...budgets);
  let max = Math.max(...budgets);
  while(true) {
      let mid = (min + max) / 2;
      let sum = arr.reduce((acml, v) => v > limit ? acml + limit : acml + v);
      if (sum === M || mid === answer) return Math.floor(mid);

      sum < M ? min = mid : max = mid;
      answer = mid;
  }
}

console.log(solution([120, 110, 140, 150],	485))