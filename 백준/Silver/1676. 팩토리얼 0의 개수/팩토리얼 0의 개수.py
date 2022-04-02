import math

N = int(input())
f = str(math.factorial(N))
count = 0
for x in f[::-1]:
    if x == '0':
        count += 1
    else:
        break

print(count)        