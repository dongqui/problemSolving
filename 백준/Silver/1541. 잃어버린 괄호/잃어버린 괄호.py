a = input()


def remove_zero(num_str):
    while num_str[0] == '0':
        num_str = num_str[1:]
    return num_str


arr = list(map(remove_zero, a.split('-')))

s = 0
for n in arr[1:]:
    s -= sum(list(map(int, n.split('+'))))

print(s + sum(list(map(int, arr[0].split('+')))))
