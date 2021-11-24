const BreadthFirstSearchBFS = () => {
  const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  };

  const bfs = (graph, src) => {
    const queue = [src];
    const visited = new Set();

    while (queue.length > 0) {
      const current = queue.shift();

      console.log(current);

      for (let neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  };

  bfs(graph, "a");
};

BreadthFirstSearchBFS();
