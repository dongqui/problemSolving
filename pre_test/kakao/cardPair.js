let answer = Infinity;

function solution (board, r, c) {
  const new_board = board.slice();
  const card_pos = new Map();

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      if(board[i][j]) {
        const card = board[i][j];
        if(card_pos.has(card)) {
          const origin = card_pos.get(card);
          card_pos.set(card, [...origin, [i, j] ]);
        } else {
          card_pos.set(card, [ [i, j] ]);
        }
      }
    }
  }

  const permutation = getPermutation([...card_pos.keys()], card_pos.size);

  for(let i = 0; i < permutation.length; i++) {
    searchMin_backtrack(r, c, 0, i, 0, new_board, card_pos, permutation);
  }

  return answer;
}

const isMovable = (y, x) => {
  if(-1 < y && y < 4 && -1 < x && x < 4) return true;
  else return false;
}

const ctrl_move = (y, x, dy, dx, board) => {
  let ny = y, nx = x;

  while(true) {
    const nny = ny + dy;
    const nnx = nx + dx;
    if(!isMovable(nny, nnx)) return [ny, nx];
    if(board[nny][nnx]) return [nny, nnx];
    ny = nny;
    nx = nnx;
  }
}

const searchCard_bfs = (sy, sx, ey, ex, board) => {
  if(sy === ey && sx === ex) return [sy, sx, 1];

  const queue = [];
  const table = new Array(4).fill().map(_ => new Array(4).fill(0));
  const visit = new Array(4).fill().map(_ => new Array(4).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  queue.push([sy, sx]);
  visit[sy][sx] = true;

  while(queue.length) {
    const [y, x] = queue.shift();

    for(let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if(isMovable(ny, nx)) {
        if(!visit[ny][nx]) {
          visit[ny][nx] = true;
          table[ny][nx] = table[y][x] + 1;

          if(ny === ey && nx === ex)
            return [ny, nx, table[ny][nx]+1];

          queue.push([ny, nx]);
        }
      }

      [ny, nx] = ctrl_move(y, x, dy[i], dx[i], board);

      if(!visit[ny][nx]) {
        visit[ny][nx] = true;
        table[ny][nx] = table[y][x] + 1;

        if(ny === ey && nx === ex)
          return [ny, nx, table[ny][nx]+1];

        queue.push([ny, nx]);
      }
    }
  }

  return [sy, sx, Infinity];
}

const remove = (card, board, card_pos) => {
  for(const [y, x] of card_pos.get(card))
    board[y][x] = 0;
}

const restore = (card, board, card_pos) => {
  for(const [y, x] of card_pos.get(card))
    board[y][x] = card;
}

const searchMin_backtrack = (sy, sx, k, m, count, board, card_pos, permutation) => {
  if(k === [...card_pos.keys()].length) {
    answer = Math.min(answer, count);
    return;
  }

  const card = permutation[m][k];
  const [ly, lx] = [card_pos.get(card)[0][0], card_pos.get(card)[0][1]];
  const [ry, rx] = [card_pos.get(card)[1][0], card_pos.get(card)[1][1]];

  let [ny1, nx1, res1] = searchCard_bfs(sy, sx, ly, lx, board);
  let [ny2, nx2, res2] = searchCard_bfs(ny1, nx1, ry, rx, board);

  remove(card, board, card_pos);
  searchMin_backtrack(ny2, nx2, k+1, m, count + res1 + res2, board, card_pos, permutation);
  restore(card, board, card_pos);

  [ny1, nx1, res1] = searchCard_bfs(sy, sx, ry, rx, board);
  [ny2, nx2, res2] = searchCard_bfs(ny1, nx1, ly, lx, board);

  remove(card, board, card_pos);
  searchMin_backtrack(ny2, nx2, k+1, m, count + res1 + res2, board, card_pos, permutation);
  restore(card, board, card_pos);
}

const getPermutation = (arr, n) => {
  if(n === 1) return arr.map(el => [el]);
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
    const perms = getPermutation(rest, n-1);
    const attached = perms.map(perm => [fixed, ...perm]);
    result.push(...attached);
  });

  return result;
}

// function solution(board, r, c) {
//     const cards = new Set();
//     for (const r of board) {
//         for (const c of r) {
//             if (c) {
//                 cards.add(c);
//             }
//         }
//     }
//     let answer = cards.size * 2;

//     const cardsOrder = permutator([...cards])
//     .map(p => p.map(num => [num, num]).flat())

//     const countArr = cardsOrder.map(order => {
//         const _board = board.slice().map(r => [...r]);
//         let sum = 0;
//         const queue = [[r, c]];
//         while (order.length) {
//             const rc = queue.pop();
//             const target = order.pop();
//             const [r, c, count] = bfs(_board, rc[0], rc[1], target);
//             enter(_board, r, c);
//             queue.push([r, c]);
//             sum += count;
//         }
//         return sum;
//     })

//     return answer + Math.min(...countArr);
// }

// function bfs(board, r, c, target) {
//     const MAX_IDX = 3;
//     const queue = [[[r, c], 0]];
//     while (queue.length) {
//         let [[r, c], count] = queue.pop();
//         if (check(board, [r, c], target)) {
//             return [r, c, count];
//         }
//         if (c > 0) {
//             queue.unshift([controlMove(board, r, c, 'left'), count + 1]);
//             queue.unshift([move(board, r, c, 'left'), count + 1]);
//         }
//         if (c < MAX_IDX) {
//             queue.unshift([controlMove(board, r, c, 'right'), count + 1]);
//             queue.unshift([move(board, r, c, 'right'), count + 1]);
//         }
//         if (r > 0) {
//             queue.unshift([controlMove(board, r, c, 'up'), count + 1]);
//             queue.unshift([move(board, r, c, 'up'), count + 1]);
//         }
//         if (r < MAX_IDX) {
//             queue.unshift([controlMove(board, r, c, 'down'), count + 1]);
//             queue.unshift([move(board, r, c, 'down'), count + 1]);
//         }
//         count += 1;
//     }
// }

// function enter(board, r, c) {
//     board[r][c] = 0;
// }

// function check(board, rc, target) {
//     return board[rc[0]][rc[1]] === target;
// }

// function controlMove(board, r, c, direction) {
//     const MAX_IDX = 3;
//     if (direction === 'left') {
//         const pictureIdx = board[r].findIndex((n, idx) => n && idx < c);
//         return [r, pictureIdx > 0 ? pictureIdx : 0];
//     } else if (direction === 'right') {
//         const pictureIdx = board[r].findIndex((n, idx) => n && idx > c);
//         return [r, pictureIdx > 0 ? pictureIdx : MAX_IDX];
//     } else if (direction === 'down') {
//         const pictureIdx = board.findIndex((row, idx) => row[c] && idx > r);
//         return [pictureIdx > 0 ? pictureIdx : MAX_IDX, c];
//     } else {
//         const pictureIdx = board.findIndex((row, idx) => row[c] && idx < r);
//         return [pictureIdx > 0 ? pictureIdx : 0, c];
//     }
// }

// function move(board, r, c, direction) {
//     const MAX_IDX = 3;
//     if (direction === 'left') {
//         return [r, c - 1 >= 0 ? c - 1 : 0];
//     } else if (direction === 'right') {
//         return [r, c + 1 <= MAX_IDX ? c + 1 : MAX_IDX]
//     } else if (direction === 'down') {
//         return [r + 1 <= MAX_IDX ? r + 1 : MAX_IDX, c];
//     } else {
//         return [r - 1 >= 0 ? r - 1 : 0, c];
//     }
// }

// function permutator(inputArr) {
//   let result = [];

//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m)
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         let next = curr.splice(i, 1);
//         permute(curr.slice(), m.concat(next))
//      }
//    }
//  }

//  permute(inputArr)

//  return result;
// }
