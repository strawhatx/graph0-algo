const LargestComponent = () => {
  const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  };

  const exploreSize = (graph, current, visited) => {
    if (visited.has(String(current))) return 0;

    visited.add(String(current));

    var size = 1;

    for (let neighbor of graph[current]) {
      size += exploreSize(graph, neighbor, visited);
    }

    return size;
  };

  const largestComponent = (graph) => {
    var visited = new Set();
    var largest = 0;

    for (let node in graph) {
      const size = exploreSize(graph, node, visited);

      if (size > largest) largest = size;
    }

    return largest;
  };

  return largestComponent(graph);
};
console.log(LargestComponent());
