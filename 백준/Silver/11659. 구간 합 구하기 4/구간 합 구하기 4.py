import sys

input = sys.stdin.readline

N, M = list(map(int, input().split()))
nums = list(map(int, input().split()))
_sum = []
for n in nums:
    if _sum:
        _sum.append(n + _sum[len(_sum) - 1])
    else:
        _sum.append(n)

for _ in range(M):
    i, j = list(map(lambda x: int(x) - 1, input().split()))
    if i == j:
        print(nums[i])
    elif i - 1 >= 0:
        print(_sum[j] - _sum[i - 1])
    else:
        print(_sum[j])
