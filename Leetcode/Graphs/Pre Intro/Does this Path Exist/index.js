/*
    Does this path Exist
*/

class DoesPathExist {
  convertToGraph(edges) {
    let graph = {};

    for (let edge of edges) {
      const [a, b] = edge;

      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];

      graph[a].push(b);
      graph[b].push(a);
    }

    return graph;
  }
  hasPath(graph, src, dst, visited) {
    if (src === dst) return true;

    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
      if (this.hasPath(graph, neighbor, dst, visited) === true) return true;
    }

    return false;
  }
  pathExist(edges, start, end) {
    let graph = this.convertToGraph(edges);

    return this.hasPath(graph, start, end, new Set());
  }
}

console.log(
  new DoesPathExist().pathExist(
    [
      ["a", "b"],
      ["c", "a"],
      ["e", "c"],
      ["c", "d"],
      ["g", "f"],
    ],
    "a",
    "f"
  )
);
