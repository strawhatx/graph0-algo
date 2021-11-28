/*
    Connected Components Count

        Given a graph find the number of connected nodes

*/

class ConnectedComponentsCount {
  explore(graph, node, visited) {
    if (visited.has(node)) return false;

    visited.add(node);

    for (let neighbor of graph[node]) {
      this.explore(graph, neighbor, visited);
    }

    return true;
  }

  connected(graph) {
    let visited = new Set();
    let count = 0;

    for (let node in graphs) {
      if (this.explore(graph, node, visited) === true) {
        count++;
      }
    }

    return count;
  }
}

console.log(
  new ConnectedComponentsCount().connected({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1],
  })
);

console.log(
  new ConnectedComponentsCount().connected({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
);
