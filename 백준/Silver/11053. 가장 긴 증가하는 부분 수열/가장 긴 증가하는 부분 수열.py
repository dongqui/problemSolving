N = int(input())
nums = list(map(int, input().split()))

dp = [0] * N

for i in range(N):
    for j in range(i):
        if nums[i] > nums[j] and dp[i] < dp[j]:
            dp[i] = dp[j]
    dp[i] += 1
    
print(max(dp))
