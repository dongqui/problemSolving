from collections import deque

N, M = list(map(int, input().split()))

miro = [input() for _ in range(N)]
to_go = [(1, 0), (0, 1), (0, -1), (-1, 0)]
visit = [[0] * M for _ in range(N)]
queue = deque([(0, 0)])
visit[0][0] = 1
while queue:
    x, y = queue.pop()
    for (_x, _y) in to_go:
        nx = x + _x
        ny = y + _y
        if 0 <= nx < M and 0 <= ny < N and miro[ny][nx] != '0' and visit[ny][nx] == 0:
            queue.appendleft((nx, ny))
            visit[ny][nx] = visit[y][x] + 1

print(visit[N - 1][M - 1])
