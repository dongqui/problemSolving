function solution(orders, course) {
  const answer = [];
  function combination(combis, source, target, n, r, count) {
    if(r === 0) {
      target = target.split('').sort().join('');
      combis[target] = combis[target] ? combis[target] + 1 : 1;
      return;
    }
    if(n === 0 || n < r) {
      return;
    }
    target += (source[count]);
    combination(combis, source, target, n - 1, r - 1, count + 1);
    target = target.slice(0, target.length - 1);
    combination(combis, source, target, n - 1, r, count + 1);
  }
  for (const c of course) {
    const combis = {};
    for (const o of orders) {
      combination(combis, o, '', o.length, c, 0);
    }
    const maxi = Math.max(...Object.values(combis));
    for (const [key, count] of Object.entries(combis)) {
      if (count >= 2 && count === maxi) {
        answer.push(key);
      }
    }
  }
  return answer.sort();
}

// const combination = (arr, num) => {
//   let result = [];
//   if(num == 1) return arr.map(e => [e]);
//   for (let i = 0; i < arr.length; i++) {
//     let rest = arr.slice(i+1)
//     let combinations = combination(rest, num-1)
//     let combiArr = combinations.map(x => [arr[i], ...x])
//     result.push(...combiArr)
//   }
//   return result;
// }
