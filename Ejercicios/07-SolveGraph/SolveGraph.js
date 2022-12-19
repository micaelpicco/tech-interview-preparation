function SolveGraph(graph, start, end, cache = {}) {
  // Your code here:
  if (cache[start]) return false;
  cache[start] = true;
  for (const value of graph[start]) {
    if (value === end) return true;
    if (SolveGraph(graph, value, end, cache)) return true;
  }
  return false;
  //O(n)
}

const graph = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z'],
};
console.log(SolveGraph(graph, 'a', 'r'));
console.log(SolveGraph(graph, 'a', 'd'));
console.log(SolveGraph(graph, 's', 'b'));

module.exports = SolveGraph;
