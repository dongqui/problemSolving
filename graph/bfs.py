
vertex_num, edge_num, start = (int(elem) for elem in input().split())


edgeList = []
queue = [start]
adjacencyList = [[] for vertex in range(vertex_num + 1)]

for i in range(edge_num):
    a, b = (int(elem) for elem in input().split())
    edgeList.extend([(a, b), (b, a)])
for edge in edgeList:
    adjacencyList[edge[0]].append(edge[1])


def dfs():
    stack = [start]
    visitedList = []
    blocked = False
    while stack:
        current = stack[len(stack) - 1]
        if current not in visitedList:
            visitedList.append(current)
        adjacencyList[current].sort()
        for neighbor in adjacencyList[current]:
            if neighbor not in visitedList:
                stack.append(neighbor)
                visitedList.append(neighbor)
                blocked = False
                break
            else:
                blocked = True
                continue
        if blocked:
            stack.pop()

    for i in range(0, len(visitedList)):
        print(visitedList[i], end=" ")


def bfs():
    visitedList = [start]
    while queue:
        current = queue.pop()
        for neighbor in adjacencyList[current]:
            if neighbor not in visitedList:
                queue.insert(0, neighbor)
                visitedList.append(neighbor)

    for i in range(0, len(visitedList)):
        print(visitedList[i], end=" ")


dfs()
bfs()
