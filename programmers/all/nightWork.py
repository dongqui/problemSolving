import heapq

def solution(n, works):
  heap = []
  for w in works:
      heapq.heappush(heap, (-w, w))
  
  while n > 0:
      if heap[0][1] <= 0:
          break
      work = heapq.heappop(heap)
      heapq.heappush(heap, (work[0] + 1, work[1] - 1))
      n -= 1
      
  return sum(map(lambda a: a[1] ** 2, heap))
    
# 문제 설명
# 회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.

# 제한 사항
# works는 길이 1 이상, 20,000 이하인 배열입니다.
# works의 원소는 50000 이하인 자연수입니다.
# n은 1,000,000 이하인 자연수입니다.
# 입출력 예
# works	n	result
# [4, 3, 3]	4	12
# [2, 1, 2]	1	6
# [1,1]