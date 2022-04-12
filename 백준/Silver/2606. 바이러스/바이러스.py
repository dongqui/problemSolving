graph = {}
for computer in range(1, int(input()) + 1):
    graph[computer] = []

for _ in range(int(input())):
    a, b = list(map(int, input().split()))
    graph[a].append(b)
    graph[b].append(a)

visit = [1]    
stack = [1]
while stack:
    cur = stack.pop()
    for child in graph[cur]:
        if child not in visit:
            visit.append(child)
            stack.append(child)
            
print(len(visit) - 1)            

