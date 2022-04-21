n = int(input())
dic = {}
inputs = list(map(int, input().split()))
for idx, value in enumerate(sorted(set(inputs))):
    dic[value] = idx

print(*map(lambda x: dic[x], inputs))

