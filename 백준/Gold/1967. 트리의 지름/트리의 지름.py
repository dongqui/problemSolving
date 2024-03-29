import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

n = int(input())
tree = [[] for _ in range(n+1)]
maxDist = 0
for _ in range(n-1):
    a,b,c = map(int,input().split())
    tree[a].append((b,c))

def dfs(n,d):
    # 제일 큰 거 두 개를 찾는다고 생각하자
    left,right = 0,0
    for toNode, w in tree[n]:
        r = dfs(toNode,w)
        if left <= right:
            left = max(left,r)
        else:
            right = max(right,r)
            
    global maxDist
    maxDist = max(maxDist,left+right)
    return max(left+d,right+d)
            
dfs(1,0)
print(maxDist)