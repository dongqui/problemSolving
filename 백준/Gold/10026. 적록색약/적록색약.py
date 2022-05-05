from collections import deque

N = int(input())

colors = [input() for _ in range(N)]
moves = [(1, 0), (-1, 0), (0, 1), (0, -1)]
visit = [[False] * N for _ in range(N)]
_visit = [[False] * N for _ in range(N)]
count = 0
_count = 0


def bfs(start_x, start_y):
    stack = deque([(start_x, start_y)])
    while stack:
        x, y = stack.pop()
        visit[y][x] = True
        for move_x, move_y in moves:
            _x = move_x + x
            _y = move_y + y
            if 0 <= _x < N and 0 <= _y < N and not visit[_y][_x] and colors[y][x] == colors[_y][_x]:
                stack.append((_x, _y))


def _bfs(start_x, start_y):
    stack = deque([(start_x, start_y)])
    while stack:
        x, y = stack.pop()
        _visit[y][x] = True
        for move_x, move_y in moves:
            _x = move_x + x
            _y = move_y + y
            if 0 <= _x < N and 0 <= _y < N and not _visit[_y][_x] and (colors[y][x] == colors[_y][_x] or (colors[y][x] == 'R' and colors[_y][_x] == 'G') or (colors[y][x] == 'G' and colors[_y][_x] == 'R')):
                stack.append((_x, _y))



for y in range(N):
    for x in range(N):
        if not visit[y][x]:
            count += 1
            bfs(x, y)
        if not _visit[y][x]:
            _count += 1
            _bfs(x, y)

print(count, _count)