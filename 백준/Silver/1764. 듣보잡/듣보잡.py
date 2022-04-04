N, M = list(map(int, input().split()))
dic = {}
for _ in range(N):
    name = input()
    dic[name] = True

answer = []
for _ in range(M):
    name = input()
    if name in dic:
        answer.append(name)

print(len(answer))
for a in sorted(answer):
    print(a)