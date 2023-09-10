from itertools import combinations, permutations

N, M =  list(map(int, input().split()))
arr = list(map(int, input().split()))

for arr in sorted(set(list(permutations(arr, M)))):
    print(*arr)
