function solution(s) {
  if (s.length < 2) return s.length;
  return Math.max(odd(s), even(s));
}

function even(s) {
  let answer = 0
  for (let i = 2; i < s.length; i++) {
      if (s[i] !== s[i + 1]) continue;
      let len = 2;
      let n = 0;
      while (n < i) {
          n++;
          if (s[i - n] === s[i + 1 + n]) len +=2;
          else break;
      }
      answer = Math.max(answer, len);
  }
  return answer;
}

function odd(s) {
  let answer = 0;
  for (let i = 1; i < s.length; i++) {
      let len = 1;
      let n = 0;
      while (n < i) {
          n++;
          if (s[i - n] === s[i + n]) len += 2;
          else break;
      }
      answer = Math.max(answer, len);
  }
  return answer;
}

// 가장 긴 팰린드롬
// 문제 설명
// 앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
// 문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

// 예를들면, 문자열 s가 abcdcba이면 7을 return하고 abacde이면 3을 return합니다.

// 제한사항
// 문자열 s의 길이 : 2,500 이하의 자연수
// 문자열 s는 알파벳 소문자로만 구성
// 입출력 예
// s	answer
// abcdcba	7
// abacde	3