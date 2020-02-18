
vertex_num, edge_num, start = (int(elem) for elem in input().split())


edgeList = []
adjacencyList = [[] for vertex in range(vertex_num + 1)]

for i in range(edge_num):
    a, b = (int(elem) for elem in input().split())
    edgeList.extend([(a, b), (b, a)])
for edge in edgeList:
    adjacencyList[edge[0]].append(edge[1])

def bfs():
    queue = [start]
    visitedList = [start]
    while queue:
        current = queue.pop()
        for neighbor in adjacencyList[current]:
            if neighbor not in visitedList:
                queue.insert(0, neighbor)
                visitedList.append(neighbor)

    for i in range(0, len(visitedList)):
        print(visitedList[i], end=" ")


