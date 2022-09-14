string = input()
boom = input()

stack = []

for c in string:
    stack.append(c)
    if c == boom[-1] and ''.join(stack[-len(boom):]) == boom:
        del stack[-len(boom):]

if len(stack) == 0:
    print('FRULA')
else:
    print(''.join(stack))
