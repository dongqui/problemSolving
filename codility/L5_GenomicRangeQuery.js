function solution(S, P, Q) {
  const N = S.length, M = P.length;
  const impact = {A : 1, C : 2, G : 3, T : 4};
  const currCounter = {A : 0, C : 0, G : 0, T : 0};
  
  const counters = [];
  const minImpact = [];

  for(let i = 0; i <= N; i++) {
      counters.push({A: currCounter.A, C: currCounter.C, G: currCounter.G});
      currCounter[S[i]]++;
  }
  for(let i = 0; i < M; i++) {
      const from = P[i], to = Q[i] + 1;

      if(counters[to].A - counters[from].A > 0) {
          minImpact.push(impact.A);
      }
      else if(counters[to].C - counters[from].C > 0) {
          minImpact.push(impact.C);
      }
      else if(counters[to].G - counters[from].G > 0) {
          minImpact.push(impact.G);
      }
      else {
          minImpact.push(impact.T);
      }
  }

  return minImpact;
}