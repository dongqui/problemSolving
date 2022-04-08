a = input()

arr = a.split('-')

s = 0
for n in arr[1:]:
    s -= sum(list(map(int, n.split('+'))))

print(s + sum(list(map(int, arr[0].split('+')))))