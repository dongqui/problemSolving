from collections import deque
import sys

input = sys.stdin.readline


M, N = list(map(int, input().split()))

tomatos = [list(map(int, input().split())) for _ in range(N)]
queue = deque()

for y in range(N):
    for x in range(M):
        if tomatos[y][x] == 1:
            queue.append((y, x))

max_time = 0
while queue:
    tomato = queue.popleft()
    y, x = tomato
    time = tomatos[y][x]
    max_time = max(time, max_time)
    if y - 1 >= 0 and tomatos[y - 1][x] == 0:
        tomatos[y - 1][x] = time + 1
        queue.append((y - 1, x))
    if y + 1 < N and tomatos[y + 1][x] == 0:
        tomatos[y + 1][x] = time + 1
        queue.append((y + 1, x))
    if x - 1 >= 0 and tomatos[y][x - 1] == 0:
        tomatos[y][x - 1] = time + 1
        queue.append((y, x - 1))
    if x + 1 < M and tomatos[y][x + 1] == 0:
        tomatos[y][x + 1] = time + 1
        queue.append((y, x + 1))

for y in range(N):
    for x in range(M):
        if tomatos[y][x] == 0:
            print(-1)
            exit(0)

print(max_time - 1)
