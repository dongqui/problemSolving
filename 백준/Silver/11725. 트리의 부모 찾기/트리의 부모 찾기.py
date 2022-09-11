from collections import deque

N = int(input())

tree = [[] for _ in range(N + 1)]
for _ in range(N - 1):
    a, b = list(map(int, input().split()))
    tree[a].append(b)
    tree[b].append(a)

parents = [0] * (N + 1)

queue = deque([1])

while queue:
    parent = queue.pop()
    for child in tree[parent]:
        if parents[child] == 0:
            parents[child] = parent
            queue.appendleft(child)

for i in range(2, N + 1):
    print(parents[i])
