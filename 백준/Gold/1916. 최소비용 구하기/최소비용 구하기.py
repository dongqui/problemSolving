import heapq
import sys

input = sys.stdin.readline

INF = float('inf')

N = int(input())
M = int(input())

graph = [[] for _ in range(N + 1)]
for _ in range(M):
    start, end, cost = list(map(int, input().split()))
    graph[start].append([cost, end])

start, end = list(map(int, input().split()))
queue = [[0, start]]
distance = [INF] * (N + 1)

distance[start] = 0
while queue:
    cur_cost, cur_start = heapq.heappop(queue)
    if distance[cur_start] < cur_cost:
        continue

    for (cost, cur_end) in graph[cur_start]:
        if distance[cur_start] + cost < distance[cur_end]:
            distance[cur_end] = distance[cur_start] + cost
            heapq.heappush(queue, [cost, cur_end])

print(distance[end])
