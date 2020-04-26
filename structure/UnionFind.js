const parent = new Array(10).fill().map((v, i) => i);

function getParent(a) {
  if (parent[a] === a) return a;
  return findParent(parent[a]);
}

function uniParent(a, b) {
  if (parent[a] < parent[b]) parent[b] = parent[a];
  else parent[a] = parent[b];
}

function isSameParent(a, b) {
  return parent[a] === parent[b];
}

uniParent(1, 2);
uniParent(2, 3)
uniParent(3, 4);
console.log(isSameParent(1, 4));
uniParent(5, 6)
uniParent(6, 7)
console.log(isSameParent(5, 6));
console.log(isSameParent(1, 5));

