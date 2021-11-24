const OutputConnectedNodes = () => {
  const graph = {
    A: ["B", "D"],
    B: ["C", "A"],
    D: ["A", "C"],
    C: ["D", "B"],
  };

  /*
  Dictionary<string, List<string>> 
  
  represents the ring:
  
    A — B
    |   |
    D — C
  Write a function that, given this adjacency list as input, returns as output a list with all the graph nodes starting from any of them and then following the order in which they appear on the ring.
  
  Output: List<string> - names of nodes as you go through them in a circle
  
  Assume you're given
  
  public string GetInitialNode()
  
  */
  const explore = (graph, current, visited) => {
    visited.add(String(current));

    for (let neighbor of graph[current]) {
      if (!visited.has(String(neighbor))) {
        explore(graph, neighbor, visited);
      }
    }

    return visited;
  };

  const connectedComponents = (graph, current) => {
    const visited = new Set();

    result = explore(graph, current, visited);

    return result;
  };

  return connectedComponents(graph, "C");
};

console.log(OutputConnectedNodes());
