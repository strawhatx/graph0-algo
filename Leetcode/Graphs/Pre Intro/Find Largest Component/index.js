/*
    Find Largest Component
*/

class FindLargestComponent {
  exploreSize(graph, src, visited) {
    visited.add(src);

    let size = 1;

    for (let neighbor of graph[src]) {
      if (!visited.has(neighbor)) {
        size += this.exploreSize(graph, neighbor, visited);
      }
    }

    return size;
  }
  findBiggest(graph) {
    let visited = new Set();
    let max = 0;

    for (let node in graph) {
      const size = this.exploreSize(graph, node, visited);

      if (size > max) max = size;
    }

    return max;
  }
}

console.log(
  new FindLargestComponent().findBiggest({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
);
