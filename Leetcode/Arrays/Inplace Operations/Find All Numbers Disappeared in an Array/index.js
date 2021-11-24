/*
    Third Maximum Number
      
      Given an integer array nums, return the third distinct maximum number in this array. 
      If the third maximum does not exist, return the maximum number.

 

      Example 1:

        Input: nums = [3,2,1]
        Output: 1
        Explanation:
        The first distinct maximum is 3.
        The second distinct maximum is 2.
        The third distinct maximum is 1.
      
      Example 2:

        Input: nums = [1,2]
        Output: 2
        Explanation:
        The first distinct maximum is 2.
        The second distinct maximum is 1.
        The third distinct maximum does not exist, so the maximum (2) is returned instead.
      
      Example 3:

        Input: nums = [2,2,3,1]
        Output: 1
        Explanation:
        The first distinct maximum is 3.
        The second distinct maximum is 2 (both 2's are counted together since they have the same value).
        The third distinct maximum is 1.
 
*/

class ThirdMaxNumber {
  array = [];

  constructor(array) {
    this.array = array;
  }

  ThirdHighest() {
    let max1 = this.array[0];
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (let j = 0; j < this.array.length; j++) {
      if (this.array[j] > max1) {
        max3 = max2;
        max2 = max1;
        max1 = this.array[j];
      } else if (this.array[j] > max2 && this.array[j] < max1) {
        max3 = max2;
        max2 = this.array[j];
      } else if (this.array[j] > max3 && this.array[j] < max2) {
        max3 = this.array[j];
      }
    }

    return max3 === -Infinity ? max : max3;
  }
}

console.log(new ThirdMaxNumber([2, 2, 3, 1]).ThirdHighest());
