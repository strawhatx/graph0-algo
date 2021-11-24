/*

  Find All Numbers Disappeared in an Array
  
    Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all 
    the integers in the range [1, n] that do not appear in nums.

    Example 1:

      Input: nums = [4,3,2,7,8,2,3,1]
      Output: [5,6]
    
    Example 2:

      Input: nums = [1,1]
      Output: [2]
 
*/

class FindAllNumbersDisappearedinanArray {
  array = [];

  constructor(array) {
    this.array = array;
  }

  FindMissingNumbers() {
    let result = [];

    for (let i = 1; i < this.array.length + 1; i++) {
      let found = false;
      for (let j = 0; j < this.array.length; j++) {
        if (i === this.array[j]) {
          found = true;
          break;
        }
      }

      if (found === false) {
        result.push(i);
      }
    }

    return result;
  }
}

console.log(
  new FindAllNumbersDisappearedinanArray([1, 1]).FindMissingNumbers()
);
