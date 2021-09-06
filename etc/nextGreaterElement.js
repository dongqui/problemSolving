function nextGreaterElement(arr) {
  const nge = new Array(arr.length).fill(-1);
  const stack = [];

  for (const [ index, num ] of arr.entries()) {
    while (arr[stack[stack.length - 1]] < num) {
      nge[stack.pop()] = index;
    }
    stack.push(index);
  }

  return nge;
}

console.log(nextGreaterElement([13, 6, 5, 12, 1]))
