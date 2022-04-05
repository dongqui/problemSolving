num = input()
N = int(input())
brokens = list(input().split()) if N > 0 else []
CURRENT_CH = 100

min_diff = abs(int(num) - 100)
for n in range(0, 1000001):
    for c in str(n):
        if c in brokens:            
            break
    else:
        min_diff = min(min_diff, abs(int(n) - int(num)) + len(str(n)))

print(min_diff)