def solution(n,k):

    from math import factorial as facto

    pool = [e+1 for e in range(n)]
    result = []
    f = facto(n)

    k-=1
    while n>0:
        f //= n 
        n-=1
        result.append(pool.pop(k//f))
        k %= f

    return result

# 문제 설명
# n명의 사람이 일렬로 줄을 서고 있습니다. n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.

# [1, 2, 3]
# [1, 3, 2]
# [2, 1, 3]
# [2, 3, 1]
# [3, 1, 2]
# [3, 2, 1]
# 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성해주세요.

# 제한사항
# n은 20이하의 자연수 입니다.
# k는 n! 이하의 자연수 입니다.
# 입출력 예
# n	k	result
# 3	5	[3,1,2]