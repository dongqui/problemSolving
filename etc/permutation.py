def permu(input, i):
  if i == len(input) - 1:
    print(input, '@')
  else:
    for j in range(i, len(input)):
      input[i], input[j] = input[j], input[i]
      permu(input, i + 1)
      input[i], input[j] = input[j], input[i]

permu([0, 1, 2], 0)