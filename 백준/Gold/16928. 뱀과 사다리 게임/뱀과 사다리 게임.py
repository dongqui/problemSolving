from collections import deque

N, M = list(map(int, input().split()))

visit = [100] * 101

ladder = {}
for _ in range(N):
    x, y = list(map(int, input().split()))
    ladder[x] = y

snake = {}
for _ in range(M):
    x, y = list(map(int, input().split()))
    snake[x] = y

dice = [1, 2, 3, 4, 5, 6]
queue = deque([(1, 0)])
while queue:
    x, n = queue.popleft()
    if visit[x] > n:
        visit[x] = n
        if x in ladder:
            queue.append((ladder[x], n))
        elif x in snake:
            queue.append((snake[x], n))
        else:
            for num in dice:
                if x + num <= 100:
                    queue.append((x + num, n + 1))

print(visit[100])
