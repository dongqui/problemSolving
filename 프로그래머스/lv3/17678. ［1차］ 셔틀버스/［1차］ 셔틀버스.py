def convert_time(s):
    hour, minute = list(map(int, s.split(':')))
    return hour * 60 + minute

def solution(n, t, m, timetable):
    time = convert_time('09:00')    
    answer = 0
    _timetable = sorted(list(map(convert_time, timetable)))
    start = 0
    for _ in range(n):
        count = 0
        people = []
        for _t in _timetable[start : m + start]:
            if _t <= time:
                people.append(_t)
                count += 1
                start += 1
        if count < m:
            answer = time
        else:
            answer = max(people) - 1
        time += t
        
    return f'{str(answer // 60).zfill(2)}:{str(answer % 60).zfill(2)}'