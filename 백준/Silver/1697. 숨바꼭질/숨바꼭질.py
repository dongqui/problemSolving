from collections import deque

N, K = list(map(int, input().split()))

queue = deque([N])
dist = [0] * 100001
while queue:
    position = queue.popleft()
    if position == K:
        print(dist[position])
        break

    for x in (position - 1, position + 1, position * 2):
        if 0 <= x <= 100000 and not dist[x]:
            dist[x] = dist[position] + 1
            queue.append(x)

