function solution(n, s, a, b, fares) {
  const graph = {};
  for (const fare of fares) {
    if (!graph[fare[0]]) graph[fare[0]] = {};
    if (!graph[fare[1]]) graph[fare[1]] = {};
    graph[fare[0]][fare[1]] = fare[2]
    graph[fare[1]][fare[0]] = fare[2]
  }
  const costFromS = bfs(graph, s, n);
  const answers = [costFromS[a] + costFromS[b]];
  const byebyePoints = [];
  for (const [node, cost] of costFromS.entries()) {
    if (cost && cost !== Infinity) {
      byebyePoints.push(node);
    }
  }
  for (const byebyePoint of byebyePoints) {
    const costFromByebyePoint = bfs(graph, byebyePoint, n);
    answers.push(
      costFromByebyePoint[a] +
      costFromByebyePoint[b] +
      costFromS[byebyePoint]
    );
  }
  return Math.min(...answers);
}

function bfs(graph, s, n) {
  const costList = new Array(n + 1).fill(Infinity);
  costList[s] = 0;
  const queue = [s];
  while (queue.length) {
    const cur = queue.pop();
    for (const [ key , value ] of Object.entries(graph[cur])) {
      if (costList[key] >= costList[cur] + graph[cur][key]) {
        costList[key] = costList[cur] + graph[cur][key];
        queue.unshift(key)
      }
    }
  }
  return costList;
}
