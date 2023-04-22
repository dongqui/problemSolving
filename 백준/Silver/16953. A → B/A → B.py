import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split(' '))

visit = {N: 1}
queue = deque([N])
visit[N] = 1

while queue:
    cur = queue.pop()
    if cur == M:
        print(visit[cur])
        break

    for next_num in [cur * 2, int(f'{cur}1')]:
        if next_num <= M and next_num not in visit:
            visit[next_num] = visit[cur] + 1
            queue.appendleft(next_num)

else:
    print(-1)
