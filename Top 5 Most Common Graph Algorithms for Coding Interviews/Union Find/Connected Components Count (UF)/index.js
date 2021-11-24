const ConnectedComponentsCountUF = () => {
  const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  };

  const explore = (graph, src, visited) => {
    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbors in graph[src]) {
      explore(graph, neighbors, visited);
    }

    return true;
  };

  const connectedComponents = (graph) => {
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
      if (explore(graph, node, visited) == true) {
        count += 1;
      }
    }
  };

  connectedComponents(graph);
};

ConnectedComponentsCountUF();
