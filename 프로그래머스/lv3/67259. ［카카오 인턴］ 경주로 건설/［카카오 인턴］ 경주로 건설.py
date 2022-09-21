# from collections import deque

# def solution(board):
#     n = len(board)
    
#     costs = [[float('inf') for _ in range(n)] for _ in range(n)]
#     costs[0][0] = 0
#     queue = deque([(0, 0, 'vh', 0)])
#     while queue:
#         y, x, d, c = queue.pop()        
#         neighbors = [(y, x - 1, 'h'), (y, x + 1, 'h'), ( y - 1, x, 'v'), (y + 1, x, 'v')]
#         for ny, nx, direction in neighbors:            
#             cost = c + (100 if direction in d else 600)            
#             if 0 <= ny < n and 0 <= nx < n and board[ny][nx] == 0 and costs[ny][nx] >= cost:              
#                 queue.appendleft((ny, nx, direction, cost))
#                 costs[ny][nx] = cost

#     return costs[n - 1][n - 1]

import sys
from collections import deque

def solution(board):
    def bfs(start):
        answer = sys.maxsize
        dic = {0:[-1, 0], 1:[0, 1], 2:[1, 0], 3:[0, -1]} # 북동남서
        length = len(board)
        visited = [[sys.maxsize]*length for _ in range(length)]
        visited[0][0] = 0

        q = deque([start]) # x, y, cost, dir
        while q:
            x, y, c, d = q.popleft()
            for i in range(4):
                nx = x + dic[i][0]
                ny = y + dic[i][1]

                # 범위안에 들어오는지 확인 
                if 0 <= nx < length and 0 <= ny < length and board[nx][ny] == 0:
                    # 진행방향에 따른 비용 추가
                    nc = c+100 if i == d else c+600
                    if nc < visited[nx][ny]:
                        visited[nx][ny] = nc
                        q.append([nx, ny, nc, i])
                        
        return visited[-1][-1]
    
    return min([bfs((0, 0, 0, 1)), bfs((0, 0, 0, 2))])