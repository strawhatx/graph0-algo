const Undirected = () => {
  const edges = [
    ["a", "b"],
    ["c", "a"],
    ["e", "c"],
    ["c", "d"],
    ["g", "f"],
  ];

  // create a graph from edges
  const buildGraph = (edges) => {
    var graph = {};

    for (let edge of edges) {
      const [a, b] = edge;

      // if not in grach init the prop
      if (!(a in graph)) graph[a] = [];

      if (!(b in graph)) graph[b] = [];

      // only push if its
      graph[a].push(b);

      graph[b].push(a);
    }

    return graph;
  };

  //check if to points have path tack visitesd points
  const hasPath = (graph, src, dst, visited) => {
    // it matches
    if (src === dst) return true;

    // already visited no need to visit again
    if (visited.has(src)) return false;

    //not visted so lets mark for the next time
    visited.add(src);

    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst, visited) === true) {
        return true;
      }
    }

    return false;
  };

  const undirectedPath = (edges, a, b) => {
    const graph = buildGraph(edges);

    return hasPath(graph, a, b, new Set());
  };

  return undirectedPath(edges, "a", "f");
};

console.log(Undirected());
