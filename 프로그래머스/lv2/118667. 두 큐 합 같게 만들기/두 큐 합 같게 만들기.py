from collections import deque

def solution(queue1, queue2):
    q1 = deque(queue1)
    q2 = deque(queue2)
    
    q1_sum = sum(q1)
    q2_sum = sum(q2)
        
    count = 0
    while count < len(queue1) + len(queue2) + 100000:
        if q1_sum == q2_sum:
            return count
        elif q1_sum > q2_sum:
            popped = q1.popleft()
            q2.append(popped)
            q1_sum -= popped
            q2_sum += popped
        elif q1_sum < q2_sum:
            popped = q2.popleft()
            q1.append(popped)
            q2_sum -= popped
            q1_sum += popped
        
        count += 1
    
    return -1
