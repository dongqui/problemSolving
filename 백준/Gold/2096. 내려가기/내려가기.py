import sys

input = sys.stdin.readline

n = int(input())

dp = list(map(int, input().split()))

max_dp = [*dp]
min_dp = [*dp]
for _ in range(n - 1):
    a, b, c = list(map(int, input().split()))
    max_a = max(max_dp[0], max_dp[1]) + a
    max_b = max(max_dp[0], max_dp[1], max_dp[2]) + b
    max_c = max(max_dp[1], max_dp[2]) + c

    min_a = min(min_dp[0], min_dp[1]) + a
    min_b = min(min_dp[0], min_dp[1], min_dp[2]) + b
    min_c = min(min_dp[1], min_dp[2]) + c

    max_dp[0] = max_a
    max_dp[1] = max_b
    max_dp[2] = max_c

    min_dp[0] = min_a
    min_dp[1] = min_b
    min_dp[2] = min_c

print(max(max_dp), end=' ')
print(min(min_dp))
