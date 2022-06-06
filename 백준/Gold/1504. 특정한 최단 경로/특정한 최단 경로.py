import heapq
import math
import sys

input = sys.stdin.readline
N, E = list(map(int, input().split()))
MAX = math.inf

graph = [[] for _ in range(N + 1)]
for _ in range(E):
    a, b, distance = list(map(int, input().split()))
    graph[a].append([distance, b])
    graph[b].append([distance, a])

v1, v2 = list(map(int, input().split()))

def diijkstra(start):
    queue = []
    heapq.heappush(queue, (0, start))
    distances = [MAX] * (N + 1)
    distances[start] = 0
    while queue:
        _, cur_node = heapq.heappop(queue)
        for to_dist, to_node in graph[cur_node]:
            if to_dist + distances[cur_node] < distances[to_node]:
                distances[to_node] = to_dist + distances[cur_node]
                heapq.heappush(queue, (to_dist, to_node))

    return distances


mini_start = diijkstra(1)
mini_v1 = diijkstra(v1)
mini_v2 = diijkstra(v2)

answer = min(mini_start[v1] + mini_v1[v2] + mini_v2[N], mini_start[v2] + mini_v2[v1] + mini_v1[N])
if answer == MAX:
    print(-1)
else:
    print(answer)
