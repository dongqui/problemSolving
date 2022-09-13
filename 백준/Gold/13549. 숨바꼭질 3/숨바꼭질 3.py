from collections import deque

N, K = list(map(int, input().split()))

visit = [False] * 100001
visit[N] = True


def is_valid(num):
    return 0 <= num <= 100000


queue = deque([[N, 0]])
while queue:
    position, count = queue.pop()
    if position == K:
        print(count)
        break
    if is_valid(position * 2) and not visit[position * 2]:
        queue.appendleft([position * 2, count])
        visit[position * 2] = True
    if is_valid(position - 1) and not visit[position - 1]:
        queue.appendleft([position - 1, count + 1])
        visit[position - 1] = True
    if is_valid(position + 1) and not visit[position + 1]:
        queue.appendleft([position + 1, count + 1])
        visit[position + 1] = True

