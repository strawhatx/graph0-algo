class Average {
  findAverage(arr = []) {
    if (arr.length === 0) return 0;

    let avg = 0;

    for (let val of arr) {
      avg += val;
    }

    return avg / arr.length;
  }
}

console.log(new Average().findAverage([2, 4, 6, 8, 16]));
