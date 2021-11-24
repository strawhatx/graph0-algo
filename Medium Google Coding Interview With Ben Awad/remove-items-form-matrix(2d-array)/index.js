// this actually has a bug with the thrd connected nod

const RemoveIsland = () => {
  const matrix = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ];

  /*
        1 -> black
        0-> white

        remove all the black pixels that are not
        connected to the border of the matrix
    */

  const isFloatingIsland = (matrix, row, col, visited) => {
    // ensure the row and column are within the boundaries
    const isRowInBounds = row >= 0 && row < matrix.length;
    const isColInBounds = col >= 0 && col < matrix[0].length;

    if (!isRowInBounds || !isColInBounds) return false;

    //verify it hasnt been visited already
    const block = `${row},${col}`;

    if (visited.has(block)) return false;

    visited.add(block);

    // verify the type black only
    if (matrix[row][col] === 0) return false;

    //check position against the known borders
    if (row === 0 || row === matrix.length - 1) return false;

    if (col === 0 || col === matrix[0].length - 1) return false;

    const left = isFloatingIsland(matrix, row - 1, col, visited);

    const right = isFloatingIsland(matrix, row + 1, col, visited);

    const up = isFloatingIsland(matrix, row, col - 1, visited);

    const down = isFloatingIsland(matrix, row, col + 1, visited);

    return true;
  };

  const removeIsland = (matrix) => {
    let visited = new Set();
    let grid = matrix;

    for (let r = 0; r < matrix.length; r += 1) {
      for (let c = 0; c < matrix[0].length; c += 1) {
        if (matrix[r][c] === 0) continue;

        if (isFloatingIsland(matrix, r, c, visited) === true) {
          grid[r][c] = 0;
        }
      }
    }

    return grid;
  };

  removeIsland(matrix);
};

console.log(RemoveIsland());
