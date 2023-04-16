import sys
from collections import deque

input = sys.stdin.readline

N = int(input())
home = [list(map(int, input().split())) for _ in range(N)]

horizontal = 0
vertical = 1
diagonal = 2

to_go = {
    horizontal: [(1, 0, horizontal), (1, 1, diagonal)],
    vertical: [(0, 1, vertical), (1, 1, diagonal)],
    diagonal: [(0, 1, vertical), (1, 1, diagonal), (1, 0, horizontal)]
}

stack = deque([(1, 0, horizontal)])

answer = 0
while stack:
    x, y, direction = stack.pop()
    if x == N - 1 and y == N - 1:
        answer += 1
        continue

    for _x, _y, _d in to_go[direction]:
        next_x = x + _x
        next_y = y + _y
        if next_y >= N or next_x >= N or home[next_y][next_x] == 1:
            continue
        if _d == diagonal:
            if home[next_y - 1][next_x] == 1 or home[next_y][next_x - 1] == 1:
                continue

        stack.append((next_x, next_y, _d))

print(answer)