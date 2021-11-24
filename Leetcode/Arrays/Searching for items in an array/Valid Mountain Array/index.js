/*
    Valid Mountain Array

      Given an array of integers arr, return true if and only if it is a valid mountain array.

      Recall that arr is a mountain array if and only if:

      arr.length >= 3
      There exists some i with 0 < i < arr.length - 1 such that:
      arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
      arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

      Example 1:

        Input: arr = [2,1]
        Output: false
      Example 2:

        Input: arr = [3,5,5]
        Output: false
      Example 3:

        Input: arr = [0,3,2,1]
        Output: true
  
*/

class VaildMountainArray {
  array = [];

  constructor(array) {
    this.array = array;
  }

  CheckForMountain() {
    if (this.array.length < 3) return false;

    //get the position in the array where the highest number is
    let max = Math.max(...this.array);
    let maxPosition = this.array.indexOf(max);

    //if the max position is ethe the first or lat position its a slope not a mountain
    if (maxPosition === 0 || maxPosition === this.array.length - 1)
      return false;

    /*
      loop and vailidate the current postion and 
      the next position is going in the right direction
      any position before the max postion need to incrementing upp the array
      and  after decremnts back down the array
      if we mad it to the last position it must be valid
      if not is not a vilid mountaion
    */
    for (let i = 0; i < this.array.length; i++) {
      if (i === this.array.length - 1) {
        continue;
      } else if (i < maxPosition && this.array[i] < this.array[i + 1]) {
        continue;
      } else if (i >= maxPosition && this.array[i] > this.array[i + 1]) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }
}

console.log(new VaildMountainArray([2, 1]).CheckForMountain());
