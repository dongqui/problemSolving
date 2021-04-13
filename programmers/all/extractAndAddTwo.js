function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let y = i + 1; y < numbers.length; y++) {
      answer.push(numbers[i] + numbers[y]);
    }
  }
  answer.sort((a ,b) => a - b);

  return [...new Set(answer)];
}
