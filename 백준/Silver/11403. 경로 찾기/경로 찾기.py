N = int(input())

adjacent = [list(map(int, input().split())) for _ in range(N)]
dist = [[0] * N for _ in range(N)]
for y in range(N):
    for x in range(N):
        dist[y][x] = adjacent[y][x]

for k in range(N):
    for i in range(N):
        for j in range(N):
            if dist[i][k] == 1 and dist[k][j] == 1:
                dist[i][j] = 1

for row in dist:
    print(*row)