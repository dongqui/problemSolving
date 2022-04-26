from collections import deque
import sys

input = sys.stdin.readline


M, N, H = list(map(int, input().split()))

tomatos = [[list(map(int, input().split())) for _ in range(N)] for _ in range(H)]
queue = deque()

for n in range(N):
    for m in range(M):
        for h in range(H):
            if tomatos[h][n][m] == 1:
                queue.append((h, n, m))

answer = 1
moves = [(0, 0, 1), (0, 0, -1), (0, 1, 0), (0, -1, 0), (1, 0, 0), (-1, 0, 0)]
while queue:
    h, n, m = queue.popleft()
    for move_n, move_m, move_h in moves:
        _h, _n, _m = move_h + h, move_n + n, move_m + m
        if 0 <= _h < H and 0 <= _n < N and 0 <= _m < M and tomatos[_h][_n][_m] == 0:
            queue.append((_h, _n, _m))
            tomatos[_h][_n][_m] = tomatos[h][n][m] + 1
            answer = tomatos[h][n][m] + 1


for n in range(N):
    for m in range(M):
        for h in range(H):
            if tomatos[h][n][m] == 0:
                print(-1)
                exit(0)
print(answer - 1)
