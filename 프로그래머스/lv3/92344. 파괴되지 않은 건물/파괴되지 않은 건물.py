def solution(board, skill):
    answer = 0
    skilled = [[0] * (len(board[0]) + 1) for i in range(len(board) + 1)]
    
    for t, r1, c1, r2, c2, degree in skill:
        if t == 1:
            degree = -degree
        skilled[r1][c1] += degree
        skilled[r1][c2 + 1] += -degree
        skilled[r2 + 1][c1] += -degree
        skilled[r2 + 1][c2 + 1] += degree
            
    for i in range(len(skilled) - 1):
        for j in range(len(skilled[0]) - 1):
            skilled[i][j + 1] += skilled[i][j]            
            
    for j in range(len(skilled[0]) - 1):
        for i in range(len(skilled) - 1):
            skilled[i + 1][j] += skilled[i][j]

    for i in range(len(board)):
        for j in range(len(board[i])):
            board[i][j] += skilled[i][j]
            if board[i][j] > 0: 
                answer += 1

    return answer
    