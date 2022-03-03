function solution(brown, yellow) {
  const totalCount = brown + yellow;
  
  for (let width = 3; totalCount - width >= 0;  width++) {
      if (totalCount % width) continue;

      const height = totalCount / width;
      const yCount = (width - 2) * (height - 2);
      const bCount = totalCount - yCount;

      if (yCount == yellow && bCount == brown) {
          return [height, width]
      }
  }
}