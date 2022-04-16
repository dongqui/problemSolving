N = int(input())

paper = [list(map(int, input().split())) for _ in range(N)]


def check(x, y, n):
    num = paper[y][x]
    for _y in range(y, n + y):
        for _x in range(x, n + x):
            if paper[_y][_x] != num:
                return False
    return True


def recur(x, y, n):
    if n == 1 or check(x, y, n):
        dic[paper[y][x]] += 1
        return

    for _y in range(y, y + n, int(n / 3)):
        for _x in range(x, x + n, int(n / 3)):
            recur(_x, _y, int(n / 3))


dic = {
    1: 0,
    0: 0,
    -1: 0,
}

recur(0, 0, N)

print(dic[-1])
print(dic[0])
print(dic[1])

