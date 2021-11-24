/*
     In-Place Array Operations Introduction
        
     In programming interviews, the interviewer often expects you to minimise the time and space 
     complexity of your implementation. In-place Array operations help to reduce space complexity, 
     and so are a class of techniques that pretty much everybody encounters regularly in interviews.

        So, what are in-place array operations?

        The best way of answering this question is to look at an example.

        Given an Array of integers, return an Array where every element at an even-indexed position is squared.

        Input: array = [9, -2, -9, 11, 56, -12, -3]
        Output: [81, -2, 81, 11, 3136, -12, 9]
        Explanation: The numbers at even indexes (0, 2, 4, 6) have been squared, 
        whereas the numbers at odd indexes (1, 3, 5) have been left the same.
  
*/

class SquareEveryEvenIndexPosition {
  array = [];

  constructor(array) {
    this.array = array;
  }

  SquareEvenIndexes() {
    for (let i = 0; i < this.array.length; i++) {
      if (i % 2 === 0) {
        this.array[i] *= this.array[i];
      }
    }
    return this.array;
  }
}

console.log(
  new SquareEveryEvenIndexPosition([
    9, -2, -9, 11, 56, -12, -3,
  ]).SquareEvenIndexes()
);
