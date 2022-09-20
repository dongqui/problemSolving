def solution(stones, k):
    left = 1
    right = 200000000
    
    while right >= left:
        mid = (right + left) // 2
        count = 0
        for s in stones:
            if s - mid <= 0:
                count += 1
            else:
                count = 0
            
            if count >= k:
                break
                        
        if count >= k:
            right = mid - 1            
        else:
            left = mid + 1        
        
    return left

    
        
    