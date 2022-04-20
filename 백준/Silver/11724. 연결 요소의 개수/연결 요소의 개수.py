from collections import deque
import sys

input = sys.stdin.readline
N, M = list(map(int, input().split()))

graph = {}
for node in range(1, N + 1):
    graph[node] = []

for _ in range(M):
    a, b = list(map(int, input().split()))
    graph[a].append(b)
    graph[b].append(a)

visit = [False] * (N + 1)
stack = deque()
answer = 0
for node in range(1, N + 1):
    if visit[node]:
        continue
    else:
        answer += 1
        stack.append(node)
        while stack:
            cur = stack.pop()
            if visit[cur]:
                continue
            visit[cur] = True
            for child in graph[cur]:
                if not visit[child]:
                    stack.append(child)

print(answer)