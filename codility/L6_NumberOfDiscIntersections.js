// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const event = [];
  for (const [ i, v ] of A.entries()) {
      event.push([i - v, -1]);
      event.push([i + v, 1]);
  }
  event.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  
  let intersection = 0;
  let intervals = 0;

  for (const e of event) {
      if (e[1] === 1) {
          intervals -= 1;
      }
      if (e[1] === -1) {
          intersection += intervals;
          intervals += 1;
      }
  }

  return intersection > 10000000 ? -1 : intersection;
}
