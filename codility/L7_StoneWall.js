function solution(H) {
  const stack = [];
  let count = 0;
  for (const h of H) {
      while (stack.length && stack[stack.length - 1] > h) {
          stack. pop();
      }
      if (!stack.length || stack[stack.length - 1] < h) {
          stack.push(h);
          count++;
      }
  }
  return count;
}