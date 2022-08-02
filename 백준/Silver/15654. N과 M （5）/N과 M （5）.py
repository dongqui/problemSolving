from itertools import permutations

N, M = list(map(int, input().split()))

for c in permutations([str(x) for x in sorted(list(map(int, input().split())))], M):
    print(' '.join(c))
