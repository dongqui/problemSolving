from collections import deque, defaultdict
from heapq import heappop, heappush
import math

def solution(n, paths, gates, summits):    
    graph = defaultdict(list)
    
    for i, j, w in paths:
        graph[i].append([w, j])
        graph[j].append([w, i])

    inf = 1000000001
    answer = [0, inf]
    visit = [inf] * (n + 1)
    
    q = [] 
    for gate in gates:                
        heappush(q, (0, gate))
        visit[gate] = 0
    
    s = set(summits)
    while q:
        intensity, path = heappop(q)        
        
        if path in s or intensity > visit[path]:       
            continue
            
        for dist, next_path in graph[path]:
            _intensity = max(dist, intensity)
            if visit[next_path] > _intensity:
                visit[next_path] = _intensity
                heappush(q, (_intensity, next_path))
                
    
    answer = [0, inf]
    for summit in sorted(summits):
        if answer[1] > visit[summit]:
            answer = [summit, visit[summit]]
    return answer

    