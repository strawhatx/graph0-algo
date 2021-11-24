const TopologicalSort = () => {
  const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  };

  const sort = (graph, src) => {
    let stack = [src];

    while (stack.length > 0) {
      const current = stack.pop();

      console.log(current);

      for (let neighbors of graph[curent]) {
        stack.push(neighbors);
      }
    }
  };

  sort(graph, "c");
};

TopologicalSort();
