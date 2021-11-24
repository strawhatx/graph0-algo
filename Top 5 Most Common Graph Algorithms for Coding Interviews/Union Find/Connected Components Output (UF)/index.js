const ConnectedComponentsOutputUF = () => {
  const graph = {
    A: ["B", "D"],
    B: ["C", "A"],
    D: ["A", "C"],
    C: ["D", "B"],
  };

  const explore = (graph, src, visited) => {
    visited.add(src);

    for (let neighbor of graph[src]) {
      if (!visited.has(neighbor)) {
        explore(graph, neighbor, visited);
      }
    }

    return visited;
  };

  console.log(explore(graph, "A", new Set()));
};

ConnectedComponentsOutputUF();
