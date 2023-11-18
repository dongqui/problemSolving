import sys

input = sys.stdin.readline

N = int(input())
board = []
for y in range(N):
    board.append(list(map(int, input().split(' '))))

count_0 = 0
count_1 = 0


def recur(x, y, n):
    global count_0
    global count_1
    result = check(x, y, n)
    if result == 0:
        count_0 += 1
    elif result == 1:
        count_1 += 1
    else:
        next_n = int(n / 2)
        recur(x, y, next_n)
        recur(x + next_n, y, next_n)
        recur(x, y + next_n, next_n)
        recur(x + next_n, y + next_n, next_n)


def check(x, y, n):
    value = board[y][x]
    for _y in range(y, y + n):
        for _x in range(x, x + n):
            if value != board[_y][_x]:
                return None
    return value


recur(0, 0, N)
print(count_0)
print(count_1)
