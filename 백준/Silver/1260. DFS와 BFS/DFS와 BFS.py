N, M, V = list(map(int, input().split()))

graph = {}
for vertex in range(1, N + 1):
    graph[vertex] = []

for _ in range(M):
    edge_a, edge_b = list(map(int, input().split()))
    graph[edge_a].append(edge_b)
    graph[edge_b].append(edge_a)

dfs = []
stack = [V]
while stack:
    cur = stack.pop()
    if cur not in dfs:
        dfs.append(cur)

        for v in sorted(graph[cur], reverse=True):
            if v not in dfs:
                stack.append(v)
print(*dfs)

bfs = []
queue = [V]
while queue:
    cur = queue.pop(0)
    bfs.append(cur)
    for v in sorted(graph[cur]):
        if v not in bfs and v not in queue:
            queue.append(v)
print(*bfs)