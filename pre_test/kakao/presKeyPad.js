function solution(numbers, hand) {
  let left = [3, 0]
  let right = [3, 2];
  return numbers.map(num => {
    if ([1, 4, 7].includes(num)) {
      left = [(num - 1) / 3, 0];
      return 'L'
    } else if ([3, 6, 9].includes(num)) {
      right = [(num - 3) / 3, 2];
      return 'R'
    } else {
      const middle = [(num ? (num - 2) / 3 : 3), 1];
      const fromLeft = Math.abs(left[0] - middle[0]) + Math.abs(left[1] - middle[1]);
      const fromRight = Math.abs(right[0] - middle[0]) + Math.abs(right[1] - middle[1]);
      if (fromLeft > fromRight) {
        right = [middle[0], middle[1]];
        return 'R';
      } else if (fromLeft < fromRight) {
        left = [middle[0], middle[1]];
        return 'L';
      } else {
        if (hand === 'left') {
          left = [middle[0], middle[1]];
          return 'L'
        } else {
          right = [middle[0], middle[1]];
          return 'R';
        }
      }
    }
  }).join('');
}
