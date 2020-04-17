function solution(s) {
  const arr = s.split(' ').map(Number);
  const answer = [arr[0], arr[0]];

  for (let i = 1; i < arr.length; i++) {
      answer[0] = arr[i] < answer[0] ? arr[i] : answer[0];
      answer[1] = arr[i] > answer[1] ? arr[i] : answer[1];
  }

  return answer.join(' ');
}

// 최댓값과 최솟값
// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// 입출력 예