import math

N, M = list(map(int, input().split()))

graph = {}
for n in range(1, N + 1):
    graph[n] = []

for _ in range(M):
    A, B = list(map(int, input().split()))
    graph[A].append(B)
    graph[B].append(A)

distances = [math.inf] * (N + 1)
for start in range(1, N + 1):
    queue = [start]
    visit = []
    distance = [0] * (N + 1)
    while queue:
        cur_node = queue.pop(0)
        visit.append(cur_node)
        for friend in graph[cur_node]:
            if friend not in visit:
                distance[friend] = distance[cur_node] + 1
                queue.append(friend)
    distances[start] = sum(distance)

print(distances.index(min(distances)))
