/*
    Squares of a Sorted Array

        Solution
        Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

        Example 1:

        Input: nums = [-4,-1,0,3,10]
        Output: [0,1,9,16,100]
        Explanation: After squaring, the array becomes [16,1,0,9,100].
        After sorting, it becomes [0,1,9,16,100].

        Example 2:

        Input: nums = [-7,-3,2,3,11]
        Output: [4,9,9,49,121]
*/

class SquareSortArray {
  array = [];

  constructor(array) {
    this.array = array;
  }

  SquareThenSort() {
    let squared = [];

    //square the numbers to square a number multiply it by itself and square root is math.sqrt.
    for (let num of this.array) {
      squared.push(num * num);
    }

    return squared.sort((a, b) => a - b);
  }
}

console.log(new SquareSortArray([-4, -1, 0, 3, 10]).SquareThenSort());
