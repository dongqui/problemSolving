# https://www.youtube.com/watch?v=1VNWJTbE2pM 
import sys
input = sys.stdin.readline

n = int(input())
tree = [[] for _ in range(n+1)]
visit = [0]*(n+1)
maxDist = 0
for _ in range(n):
    tmp = list(map(int,input().split()))
    a = tmp[0]
    for i in range(1,len(tmp)-1,2):
        b,c = tmp[i],tmp[i+1]
        tree[a].append((b,c))

def dfs(n,d):
    left,right = 0,0
    for toNode, w in tree[n]:
        r = 0
        if not visit[toNode]:
            visit[toNode] = 1
            r = dfs(toNode,w)
        if left <= right:
            left = max(left,r)
        else:
            right = max(right,r)
            
    global maxDist
    maxDist = max(maxDist,left+right)
    return max(left+d,right+d)


visit[1]=1
dfs(1,0)
print(maxDist)