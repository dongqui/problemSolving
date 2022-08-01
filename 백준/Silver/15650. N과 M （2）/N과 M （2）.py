from itertools import combinations

N, M = list(map(int, input().split()))

for c in combinations([str(x) for x in range(1, N + 1)], M):
    print(' '.join(c))