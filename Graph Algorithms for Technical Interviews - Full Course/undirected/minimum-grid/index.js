const minimumIsland = () => {
  const grid = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
  ];

  const exploreSize = (grid, row, col, visited) => {
    const rowInbound = 0 <= row && row < grid.length;
    const colInbound = 0 <= col && col < grid[0].length;
    if (!rowInbound || !colInbound) return 0;

    if (grid[row][col] === "W") return 0;

    const pos = `${row},${col}`;
    if (visited.has(pos)) return 0;

    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, row - 1, col, visited); //up
    size += exploreSize(grid, row + 1, col, visited); //down
    size += exploreSize(grid, row, col - 1, visited); //left
    size += exploreSize(grid, row, col + 1, visited); //right

    return size;
  };

  const minimumIsland = (grid) => {
    const visited = new Set();
    let min = Infinity;
    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        let size = exploreSize(grid, row, col, visited);

        if (size > 0 && size < min) min = size;
      }
    }

    return min;
  };

  return minimumIsland(grid);
};
console.log(minimumIsland());
