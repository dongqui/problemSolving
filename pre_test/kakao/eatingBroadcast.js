function solution(food_times, k) {
  const len = food_times.length;
  const foodTimes = food_times.map((time, index) => {
    return {
      time,
      next: (index + 1) % len,
      prev: index - 1 < 0 ? len - 1 : index - 1,
    }
  });
  let time = 0
  let current = 0 ;
  while (k > time) {
    const next = foodTimes[current].next;
    const prev = foodTimes[current].prev;
    foodTimes[current].time -= 1;
    if (foodTimes[current].time === 0) {
      foodTimes[prev].next = next;
      foodTimes[next].prev = prev;
    }
    if (foodTimes[next] === 0) return - 1;
    current = foodTimes[current].next;
    time++;
  }

  return current + 1;
}
