class GCD {
  findGCD(arr = [], num = 0) {
    let highest = arr[0];

    for (let i = 1; i < num; i++) {
      highest = this.gcd(arr[i], highest);

      if (highest === 1) return 1;
    }

    return highest;
  }

  gcd(a, b) {
    if (a === 0) return b;

    return this.gcd(b % a, a);
  }
}

console.log(new GCD().findGCD([2, 4, 6, 8, 16], 5));
