import sys

_input = sys.stdin.readline

N, M = list(map(int, _input().split()))

dic = {}
arr = []
for idx in range(1, N + 1):
    pocketmon = _input().rstrip()
    arr.append(pocketmon)
    dic[pocketmon] = idx

for _ in range(1, M + 1):
    pocketmon = _input().rstrip()
    if pocketmon.isdigit():
        print(arr[int(pocketmon) - 1])
    else:
        print(dic[pocketmon])


