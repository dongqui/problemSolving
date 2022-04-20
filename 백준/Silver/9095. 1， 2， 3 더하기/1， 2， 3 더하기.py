cases = int(input())

dp = [0] * 12
dp[1] = 1
dp[2] = 2
dp[3] = 4

for _ in range(cases):
    n = int(input())
    if dp[n] != 0:
        print(dp[n])
    else:
        for x in range(4, n + 1):
            if dp[x] != 0:
                continue
            dp[x] = dp[x - 3] + dp[x - 2] + dp[x - 1]
        print(dp[n])    
