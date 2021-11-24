/*
    Max Consecutive Ones

        Solution
        Given a binary array nums, return the maximum number of consecutive 1's in the array.

        

        Example 1:
            Input: nums = [1,1,0,1,1,1]
            Output: 3
            Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
        
        Example 2:
            Input: nums = [1,0,1,1,0,1]
*/

class MaxConsecutiveOnes {
  array = [];
  key = 1;

  constructor(array, key) {
    this.array = array;
    this.key = key;
  }

  CountConsecutiveNumbers() {
    if (this.array.length <= 0) return 0;
    let max = 0;
    let count = 0;

    /*
        loop and count all the consecutive numbers based on the key
        if it land on another number record an compare the count and start over
        edge case if the last ritem is part of a consecutive number it will throu it off so 
        just check for it as well
    */
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === this.key) {
        count++;
        if (count > max) max = count;
      } else {
        count = 0;
      }
    }

    return max;
  }
}

console.log(
  new MaxConsecutiveOnes([1, 1, 0, 1, 1, 1], 1).CountConsecutiveNumbers()
);
