cases = int(input())
for _ in range(cases):
    dic = {}
    for _ in range(int(input())):
        cloth, part = list(input().split())
        dic[part] = dic.get(part, 0) + 1
    count = 1
    for k, v in dic.items():
        count *= (v + 1)
    print(count - 1)