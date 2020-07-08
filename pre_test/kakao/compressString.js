function solution(s) {
  let answer = s.length;
  for (let i = 1; i <= s.length / 2; i++) {
    let arr = [];
    for (let j = 0; j < s.length; j += i) {
      arr.push(s.slice(j, j + i));
    }
    let count = 1;
    let prev = '';
    let str = '';
    let last = '';
    while(arr.length) {
      let current = arr.shift();
      if (current === prev) {
        count++;
      } else if (current !== prev && count > 1) {
        str = str + count + prev;
        count = 1;
      } else if (prev && current !== prev && count === 1) {
        str = str + prev;
      }
      prev = current;
      last = current;
    }
    str = count > 1 ? str + count + last : str + last;
    answer = answer > str.length ? str.length : answer;
  }
  return answer;
}


// const solution = s => {
//   const range = [...Array(s.length)].map((_, i) => i + 1);
//   return Math.min(...range.map(i => compress(s, i).length));
// };
//
// const compress = (s, n) => {
//   const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
//   return make(
//     chunk(s, n).reduce(
//       ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
//       ['', '', 0]
//     )
//   );
// };
//
// const chunk = (s, n) =>
//   s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
