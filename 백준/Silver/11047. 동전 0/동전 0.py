N, K = map(int, input().split())
coins = sorted([int(input()) for _ in range(N)], reverse=True)
num = 0

for coin in coins:
    if coin > K:
        continue
    num += K // coin
    K %= coin

print(num)