input()

lane = sorted(list(map(int, (input().split()))))
total_time = [lane[0]]
for idx in range(1, len(lane)):
    total_time.append(total_time[idx-1] + lane[idx])
print(sum(total_time))
