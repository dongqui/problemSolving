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
