const ShortestPath = () => {
  const edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "y"],
    ["z", "v"],
    ["w", "v"],
  ];

  const buildGraph = (edges) => {
    var graph = {};

    for (let edge of edges) {
      const [a, b] = edge;

      //if not in graph initalize it
      if (!(a in graph)) graph[a] = [];

      if (!(b in graph)) graph[b] = [];

      graph[a].push(b);

      graph[b].push(a);
    }

    return graph;
  };

  const getDistance = (graph, src, dst) => {
    var visited = new Set([src]);

    var queue = [[src, 0]];

    console.log(graph);

    while (queue.length > 0) {
      const [node, distance] = queue.shift();

      if (node === dst) return distance;

      for (let neighbor of graph[node]) {
        if (!visited.has(String(neighbor))) {
          visited.add(String(neighbor));

          queue.push([neighbor, distance + 1]);
        }
      }
    }

    return -1;
  };

  const shortestPath = (edges, a, b) => {
    var graph = buildGraph(edges);

    var result = getDistance(graph, a, b);

    return result;
  };

  return shortestPath(edges, "w", "z");
};

console.log(shortestPath());
