T = int(input())

sequence = [1, 1, 1, 2, 2, 3]
for _ in range(T):
    N = int(input())
    for n in range(N + 1):
        if len(sequence) > n:
            continue
        sequence.append(sequence[n - 1] + sequence[n - 5])
    print(sequence[N - 1])

