import sys
from itertools import combinations
from collections import deque

N, M = list(map(int, sys.stdin.readline().split()))
board = [list(map(int, sys.stdin.readline().split())) for x in range(N)]

zero_arr = []
two_arr = []
for n in range(N):
    for m in range(M):
        if board[n][m] == 0:
            zero_arr.append((n, m))
        elif board[n][m] == 2:
            two_arr.append((n, m))

conditions = list(combinations(zero_arr, 3))


def bfs(new_wall_arr):
    board_copy = [row[:] for row in board]
    for y, x in new_wall_arr:
        board_copy[y][x] = 1
    queue = deque(two_arr)
    go = [(1, 0), (0, 1), (-1, 0), (0, -1)]
    while queue:
        cur_y, cur_x = queue.pop()
        for y, x in go:
            move_y = cur_y + y
            move_x = cur_x + x
            if 0 <= move_y < N and 0 <= move_x < M and board_copy[move_y][move_x] == 0:
                queue.appendleft((move_y, move_x))
                board_copy[move_y][move_x] = 2

    count = 0
    for n in range(N):
        for m in range(M):
            if board_copy[n][m] == 0:
                count += 1

    return count


answer = 0
for c in conditions:
    answer = max(answer, (bfs(c)))

print(answer)