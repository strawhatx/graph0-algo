/**
 * Path With Maximum Gold
 */

class PathWithMaximumGold {
  explore(grid, row, col, visited) {
    let rowInBounds = 0 <= row && row < grid.length;
    let colInBounds = 0 <= col && col < grid[0].length;

    if (!rowInBounds || !colInBounds) return false;

    let pos = `${row},${col}`;
    if (visited.has(pos)) return 0;

    visited.add(pos);

    let up = this.explore(grid, row - 1, col, visited); //up

    let down = this.explore(grid, row + 1, col, visited); // down

    let left = this.explore(grid, row, col - 1, visited); // left

    let right = this.explore(grid, row, col + 1, visited); // right

    return Math.max([up, down, left, right]);
  }
  maxPathWithGold(grid) {
    if (grid === null || grid.length === 0) return 0;
    let max = 0;
    let visited = new Set();

    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid.length; c++) {
        if (grid[r][c] === 0) continue;

        let val = this.explore(grid, row, col, visited);

        if (val > max) {
          max = val;
        }
      }
    }

    return max;
  }
}
