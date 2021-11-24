//graph =  nodes + edges (relationship between a pair of nodes)

const HasPath = () => {
  // adjacency list a datastructure that has key value pair mapping
  // contains list of relation shp for each nod if any
  const graph = {
    a: ["b", "d"],
    b: ["c"],
    c: [],
    d: ["b", "f"],
    e: ["d"],
    f: [],
  };

  const hasPathBreadthFirst = (graph, source, destination) => {
    var queue = [source];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current === destination) return true;

      for (let neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }

    return false;
  };

  const hasPathDepthFirst = (graph, source, destination) => {
    if (source === destination) return true;

    // its not matched so move along to the neighbors and check
    for (let neighbor of graph[source]) {
      if (hasPathDepthFirst(graph, neighbor, destination) === true) {
        return true;
      }
    }

    // not found
    return false;
  };

  //console.log(hasPathDepthFirst(graph, "a", "d"));

  return hasPathBreadthFirst(graph, "a", "e");
};

console.log(HasPath());
