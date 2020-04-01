function solution(c, b) {
  let time = 0;
  let success = false;
  while(true) {
    c += time;
    brownMove(c, b, time, 0);
    if (success) return time;
    time++;
  }

  function brownMove(coni, brown, time, count) {
    if (coni === brown && time === count) {
      success = true;
      return;
    }
    if (time <= count) {
      return;
    }
    count++;
    brownMove(coni, brown - 1, time, count);
    brownMove(coni, brown + 1, time, count);
    brownMove(coni, brown * 2, time, count);
  }
}

console.log(solution(6, 3))

// int solve(int conyPosition, int brownPosition) {
//   int time = 0;
//   bool visit[200001][2];
//   queue<pair<int, int> > queue;
//   memset(visit, 0, sizeof(visit));
//   queue.push(make_pair(brownPosition, 0));
//   while (1) {
//     conyPosition += time;
//       if (conyPosition > 200000)
//           return -1;
//       if (visit[conyPosition][time % 2])
//           return time;
//       for (int i = 0, size = queue.size(); i < size; i++) {
//           int currentPosition = queue.front().first;
//           int newTime = (queue.front().second + 1) % 2;
//           int newPosition;
//           queue.pop();
//           newPosition = currentPosition - 1;
//           if (newPosition >= 0 && !visit[newPosition][newTime]) {
//               visit[newPosition][newTime] = true;
//               queue.push(make_pair(newPosition, newTime));
//           }
//           newPosition = currentPosition + 1;
//           if (newPosition < 200001 && !visit[newPosition][newTime]) {
//               visit[newPosition][newTime] = true;
//               queue.push(make_pair(newPosition, newTime));
//           }
//           newPosition = currentPosition * 2;
//           if (newPosition < 200001 && !visit[newPosition][newTime]) {
//               visit[newPosition][newTime] = true;
//               queue.push(make_pair(newPosition, newTime));
//           }
//       }
//       time++;
//   }
// }

// 문제
// 연인 코니와 브라운은 광활한 들판에서 ‘나 잡아 봐라’ 게임을 한다. 이 게임은 브라운이 코니를 잡거나, 코니가 너무 멀리 달아나면 끝난다. 게임이 끝나는데 걸리는 최소 시간을 구하시오.

// 조건
// 코니는 처음 위치 C에서 1초 후 1만큼 움직이고, 이후에는 가속이 붙어 매 초마다 이전 이동 거리 + 1만큼 움직인다. 즉 시간에 따른 코니의 위치는 C, C + 1, C + 3, C + 6, …이다.
// 브라운은 현재 위치 B에서 다음 순간 B – 1, B + 1, 2 * B 중 하나로 움직일 수 있다.
// 코니와 브라운의 위치 p는 조건 0 <= x <= 200,000을 만족한다.
// 브라운은 범위를 벗어나는 위치로는 이동할 수 없고, 코니가 범위를 벗어나면 게임이 끝난다.
// 입력 형식
// 표준 입력의 첫 줄에 코니의 위치 C와 브라운의 위치 B를 공백으로 구분하여 순서대로 읽는다.

// 출력 형식
// 브라운이 코니를 잡을 수 있는 최소시간 N초를 표준 출력한다. 단 브라운이 코니를 잡지 못한 경우에는 -1을 출력한다.

// 예제 
// 입력: 11 2

// 출력: 5

// 코니의 위치: 11 → 12 → 14 → 17 → 21 → 26

// 브라운의 위치: 2 → 3 → 6 → 12 → 13 → 26

// 브라운은 코니를 5초 만에 잡을 수 있다.