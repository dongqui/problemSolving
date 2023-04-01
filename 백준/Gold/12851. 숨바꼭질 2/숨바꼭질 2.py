import sys
from collections import deque

N, K = list(map(int, sys.stdin.readline().split()))

MAX = 100000
MIN = 0

times = [-1] * (MAX + 1)
times[N] = 0
count = 0
queue = deque([N])
while queue:
    x = queue.pop()
    if x == K:
        count += 1
        continue
    for nx in (x * 2, x + 1, x - 1):
        if 0 <= nx <= MAX and (times[nx] == times[x] + 1 or times[nx] == -1):
            times[nx] = times[x] + 1
            queue.appendleft(nx)

print(times[K])
print(count)
