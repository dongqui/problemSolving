import math

N, M = map(int, input().split())

X = math.factorial(N)
Y = (math.factorial(N-M)) * (math.factorial(M))

answer = X//Y

print(answer)