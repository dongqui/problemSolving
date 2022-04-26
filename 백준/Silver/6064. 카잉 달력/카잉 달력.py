for _ in range(int(input())):
    M, N, x, y = map(int, input().split())
    while x <= M*N:
        if x % N == y % N:
            print(x)
            break
        x += M
    else:
        print(-1)
