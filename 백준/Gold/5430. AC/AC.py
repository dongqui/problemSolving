import json


def check(command):
    _reversed = False
    start = 0
    last = 0
    for c in command:
        if c == 'R':
            _reversed = not _reversed
        else:
            if _reversed:
                last += 1
            else:
                start += 1

    return _reversed, start, last


case = int(input())

for _ in range(case):
    command = input()
    input()
    _reversed, start, last = check(command)
    arr = json.loads(input())
    if start + last > len(arr):
        print('error')
    else:
        sliced_arr = arr[start:len(arr) - last] if not _reversed else reversed(arr[start:len(arr) - last])
        print('[' + ','.join(list(map(str, sliced_arr))) + ']')


