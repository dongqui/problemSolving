N = int(input())

paper = [list(map(int, input().split())) for _ in range(N)]


def check(x, y, n):
    for _y in range(y, y + n):
        for _x in range(x, x + n):
            if paper[y][x] != paper[_y][_x]:
                return False
    return True


white = 0
blue = 0


def recur(x, y, n):
    global white
    global blue
    if n == 1 or check(x, y, n):
        if paper[y][x] == 0:
            white += 1
        else:
            blue += 1
    else:
        for _y in range(y, y + n, int(n / 2)):
            for _x in range(x, x + n, int(n / 2)):
                recur(_x, _y, int(n / 2))


recur(0, 0, N)

print(white)
print(blue)
