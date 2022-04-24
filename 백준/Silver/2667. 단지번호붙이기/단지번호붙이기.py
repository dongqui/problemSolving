from collections import deque

N = int(input())

town = [input() for _ in range(N)]
visit = [[False] * N for _ in range(N)]


def dfs(x, y):
    to_go = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    stack = deque([(x, y)])
    count = 0
    while stack:
        cur_x, cur_y = stack.pop()
        if visit[cur_y][cur_x]:
            continue
        visit[cur_y][cur_x] = True
        count += 1
        for _x, _y in to_go:
            nx = _x + cur_x
            ny = _y + cur_y
            if 0 <= nx < N and 0 <= ny < N and not visit[ny][nx] and town[ny][nx] == '1':
                stack.append((nx, ny))
    return count


answer = []
for y in range(N):
    for x in range(N):
        if town[y][x] == '1' and not visit[y][x]:
            answer.append(dfs(x, y))

print(len(answer))
for a in sorted(answer):
    print(a)
