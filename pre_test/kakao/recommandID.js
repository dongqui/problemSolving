function solution(new_id) {
  let answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
    return answer;
}
