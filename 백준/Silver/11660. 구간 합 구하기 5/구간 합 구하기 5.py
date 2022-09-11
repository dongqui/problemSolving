import sys

input = sys.stdin.readline

n, m = map(int, input().split())

table = [list(map(int, input().split())) for _ in range(n)]
dp = [[0] * (n + 1) for _ in range(n + 1)]


for y in range(n):
    for x in range(n):
        dp[y + 1][x + 1] = (dp[y][x + 1] + dp[y + 1][x] - dp[y][x]) + table[y][x]

for i in range(m):
    x1, y1, x2, y2 = map(int, input().split())
    print(dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1] - dp[x1 - 1][y1 - 1]))