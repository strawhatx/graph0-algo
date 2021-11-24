const IslandGrid = () => {
  const grid = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
  ];

  const explore = (grid, row, col, visited) => {
    //check boundaries
    rowInbounds = 0 <= row && row < grid.length;

    colInbounds = 0 <= col && col < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;

    //check for land
    if (grid[row][col] === "W") return false;

    //check for visited
    const position = `${row},${col}`;

    if (visited.has(position)) return false;

    visited.add(position);

    explore(grid, row - 1, col, visited); // up

    explore(grid, row + 1, col, visited); // down

    explore(grid, row, col - 1, visited); //left

    explore(grid, row, col + 1, visited); // right

    return true;
  };

  const islandCount = (grid) => {
    const visited = new Set();

    let count = 0;

    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        if (explore(grid, row, col, visited) === true) {
          count += 1;
        }
      }
    }

    return count;
  };

  return islandCount(grid);
};

console.log(IslandGrid());
