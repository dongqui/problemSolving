function solution(N, stages) {
  const stageArrivalNum = {};
  const stageFiledNum = {};
  for (let i = 1 ; i <= N; i++) {
    stageArrivalNum[i] = 0;
    stageFiledNum[i] = 0;
  }
  stages.forEach(stage => {
    stage < N + 1 && stageFiledNum[stage]++;
    for (let i = 1 ; i <= stage; i++) {
      i < N + 1 && stageArrivalNum[i]++;
    }
  })
  return Array.from({length: N}, (v, k) => k+1).sort((x, y) => {
    let a = !stageArrivalNum[x] ? 0 : stageFiledNum[x] / stageArrivalNum[x];
    let b = !stageArrivalNum[y] ? 0 : stageFiledNum[y] / stageArrivalNum[y];
    let ret = b - a;
    if (ret === 0) return x - y;
    return ret;
  })
}
