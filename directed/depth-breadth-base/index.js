//graph =  nodes + edges (relationship between a pair of nodes)

const DepthBreadthBase = () => {
  // adjacency list a datastructure that has key value pair mapping
  // contains list of relation shp for each nod if any
  const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  };

  //depth first traversal (iteraive)
  const depthFirstPrintIterative = (graph, source) => {
    var stack = [source];

    //while the stack isnt empty keep running algo
    while (stack.length > 0) {
      //get the current node as well as remove from list
      const current = stack.pop();

      //do something with it
      console.log(current);

      //get the neighbors and push to stack
      // to con tinue the to the next nodes
      //
      for (let neighbor of graph[current]) {
        stack.push(neighbor);
      }
    }
  };

  //depth first traversal (recursive)
  const depthFirstPrintRecursive = (graph, source) => {
    //do something with the source since we already have it
    console.log(source);

    //get the neighbors and recursivly call ourselves
    for (let neighbor of graph[source]) {
      depthFirstPrintRecursive(graph, neighbor);
    }
  };

  //breadth first traversal
  const breadthFirstPrint = (graph, source) => {
    var queue = [source];

    //while the queue isnt empty keep running algo
    while (queue.length > 0) {
      //get the current node as well as remove from list
      const current = queue.shift();

      //do something with it
      console.log(current);

      //get the neighbors and push to stack
      // to con tinue the to the next nodes
      //
      for (let neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
  };

  // return depthFirstPrintIterative(graph, "a");

  // return depthFirstPrintRecursive(graph, "a");

  return breadthFirstPrint(graph, "a");
};

console.log(DepthBreadthBase());
