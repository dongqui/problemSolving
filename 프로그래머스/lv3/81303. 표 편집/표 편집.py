from collections import deque


def solution(n, k, cmd):
    table = [{'idx': 0, 'prev_node': None, 'next_node': None}]
    for i in range(1, n):
        node = {'idx': i, 'prev_node': table[i - 1], 'next_node': None}
        table.append(node)
        table[i - 1]['next_node'] = node

    cur = table[0]

    for _ in range(k):
        cur = cur['next_node']

    deleted = deque()

    for cm in cmd:
        c = cm.split(' ')
        if c[0] == 'D':
            for _ in range(int(c[1])):
                cur = cur['next_node']
        if c[0] == 'U':
            for _ in range(int(c[1])):
                cur = cur['prev_node']
        if c[0] == 'C':
            temp = cur
            if temp['next_node'] is None:
                cur = temp['prev_node']
                cur['next_node'] = temp['next_node']
            else:
                cur = temp['next_node']
                if temp['prev_node'] is not None:
                    temp['prev_node']['next_node'] = cur
                    cur['prev_node'] = temp['prev_node']

            deleted.append(temp)

        if c[0] == 'Z':
            recor = deleted.pop()
            if recor['prev_node'] is not None:
                recor['prev_node']['next_node'] = recor
            if recor['next_node'] is not None:
                recor['next_node']['prev_node'] = recor

    answer = ['O'] * n
    for d in deleted:
        answer[d['idx']] = 'X'
    
    return ''.join(answer)
