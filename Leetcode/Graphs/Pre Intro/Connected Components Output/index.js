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

class ConnectedComponentsOutput {
  connected(graph, src, visited = new Set()) {
    let stack = [src];

    while (stack.length > 0) {
      let current = stack.pop();
      visited.add(String(current));

      for (let neighbor of graph[current]) {
        if (!visited.has(String(neighbor))) {
          stack.push(neighbor);
        }
      }
    }

    return visited;
  }

  recursive(graph, src, visited = new Set()) {
    visited.add(src);

    for (let neighbor of graph[src]) {
      if (!visited.has(neighbor)) {
        this.recursive(graph, neighbor, visited);
      }
    }

    return visited;
  }
}

console.log(
  new ConnectedComponentsOutput().recursive(
    {
      A: ["B", "D"],
      B: ["C", "A"],
      D: ["A", "C"],
      C: ["D", "B"],
    },
    "B"
  )
);
