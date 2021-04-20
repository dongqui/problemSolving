const perm = (arr, dep, res) => {
  if (dep === arr.length) res.push(arr.slice())
  for (let i = dep; i < arr.length; i++) {
    arr[i] = [arr[dep], arr[dep] = arr[i]][0]
    perm(arr, dep+1, res)
    arr[i] = [arr[dep], arr[dep] = arr[i]][0]
  }
  return res
}

const calc = (op, num1, num2) => {
  if (op === '+') {
    return +num1 + +num2
  } else if (op === '-') {
    return num1 - num2
  } else if (op === '*') {
    return num1 * num2
  }
}

const solution = expression => {
  expression.split(/([\*\+-])/g); // 정규식도 스플릿이 되네?
  const numbers = expression.match(/[0-9]+/g)
  const operators = expression.match(/\W/g)

  const ops = [... new Set(operators)]
  const opsPerm = perm(ops, 0, [])

  const cases = opsPerm.map(ops => {
    const nums = numbers.slice()
    const opes = operators.slice()
    ops.forEach(op => {
      while (1) {
        const idx = opes.findIndex(o => o === op)
        if (idx === -1) break
        const res = calc(opes[idx], nums[idx], nums[idx+1])
        nums.splice(idx, 2, res)
        opes.splice(idx, 1)
      }
    })
    return Math.abs(nums[0])
  })

  return cases.sort((a, b) => b - a)[0]
}
