function solution(board) {
  const len = board.length;
  const cost = [];
  const queue = [];
  for (const row of board) {
    cost.push(row.slice().map(num => num ? -Infinity : Infinity));
  }
  cost[0][0] = 0;
  if (board[0][1] !== 1) {
    queue.push(['h', [0, 1]]);
    cost[0][1] = 100;
  }
  if (board[1][0] !== 1) {
    queue.unshift(['v', [1, 0]]);
    cost[1][0] = 100;
  }
  while (queue.length) {
    const [ direction, [y, x] ] = queue.pop();
    if (direction === 'h') {
      if (x + 1 < len && cost[y][x] + 100 <= cost[y][x + 1]) {
        queue.unshift(['h', [y, x + 1]]);
        cost[y][x + 1] = cost[y][x] + 100;
      }
      if (x - 1 >= 0 && cost[y][x] + 100 <= cost[y][x - 1]) {
        queue.unshift(['h', [y, x - 1]]);
        cost[y][x - 1] = cost[y][x] + 100;
      }
      if (y + 1 < len && cost[y][x] + 600 <= cost[y + 1][x]) {
        queue.unshift(['v', [y + 1, x]]);
        cost[y + 1][x] = cost[y][x] + 600;
      }
      if (y - 1 >= 0 && cost[y][x] + 600 <= cost[y - 1][x]) {
        queue.unshift(['v', [y - 1, x]]);
        cost[y - 1][x] = cost[y][x] + 600;
      }
    } else {
      if (x + 1 < len && cost[y][x] + 600 <= cost[y][x + 1]) {
        queue.unshift(['h', [y, x + 1]]);
        cost[y][x + 1] = cost[y][x] + 600;
      }
      if (x - 1 >= 0 && cost[y][x] + 600 <= cost[y][x - 1]) {
        queue.unshift(['h', [y, x - 1]]);
        cost[y][x - 1] = cost[y][x] + 600;
      }
      if (y + 1 < len && cost[y][x] + 100 <= cost[y + 1][x]) {
        queue.unshift(['v', [y + 1, x]]);
        cost[y + 1][x] = cost[y][x] + 100;
      }
      if (y - 1 >= 0 && cost[y][x] + 100 <= cost[y - 1][x]) {
        queue.unshift(['v', [y - 1, x]]);
        cost[y - 1][x] = cost[y][x] + 100;
      }
    }

  }
  return cost[len - 1][len - 1];
}

