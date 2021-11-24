DepthFirstSearchDFS = () => {
  const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  };

  const dfs = (graph, src, visited) => {
    if (visited.has(src)) return;

    visited.add(src);

    console.log(src);

    for (let neighbor of graph[src]) {
      dfs(graph, neighbor, visited);
    }
  };

  dfs(graph, "c", new Set());
};

DepthFirstSearchDFS();
