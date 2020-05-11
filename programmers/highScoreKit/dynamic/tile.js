function solution(N) {
  const fibo = [0, 1, 1];
  for (let i = 2; i <= N + 1; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[N] * 2 + fibo[N + 1] * 2;
}