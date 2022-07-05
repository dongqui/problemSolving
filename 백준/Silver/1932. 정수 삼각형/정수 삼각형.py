N = int(input())

dp = []
for _ in range(N):
    dp.append(list(map(int, input().split())))

last_depth = N - 1
for depth in range(1, len(dp)):
    last_idx = len(dp[depth]) - 1
    for idx, val in enumerate(dp[depth]):
        if idx == 0:
            dp[depth][idx] += dp[depth - 1][idx]
        elif idx == last_idx:
            dp[depth][idx] += dp[depth - 1][idx - 1]
        else:
            dp[depth][idx] += max(dp[depth - 1][idx], dp[depth - 1][idx - 1])

print(max(dp[last_depth]))
