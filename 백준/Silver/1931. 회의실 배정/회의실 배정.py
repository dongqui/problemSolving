import sys

input = sys.stdin.readline

N = int(input())

times = [list(map(int, input().split())) for _ in range(N)]

times.sort(key=lambda x: (x[1], x[0]))
answer = []

for t in times:
    if not answer:
        answer.append(t)
        continue

    last = answer[len(answer) - 1]
    if t[0] >= last[1]:
        answer.append(t)

print(len(answer))