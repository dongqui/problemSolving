N = int(input())

video = [input() for _ in range(N)]

def check(y, x, n):
    num = video[y][x]
    for _y in range(y, y + n):
        for _x in range(x, x + n):
            if video[_y][_x] != num:
                return None
    return num


answer = ''


def recur(y, x, n):
    global answer
    check_result = check(y, x, n)
    if check_result is not None:
        answer += check_result
    else:
        answer += '('
        recur(y, x, int(n / 2))
        recur(y, x + int(n / 2), int(n / 2))
        recur(y + int(n / 2), x, int(n / 2))
        recur(y + int(n / 2), x + int(n / 2), int(n / 2))
        answer += ')'


recur(0, 0, N)
print(answer)
