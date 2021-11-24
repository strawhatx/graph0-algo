/*
    Move Zeroes
      Given an integer array nums, move all 0's to the end of it while maintaining the relative
      order of the non-zero elements.

      Note that you must do this in-place without making a copy of the array.

        Example 1:

          Input: nums = [0,1,0,3,12]
          Output: [1,3,12,0,0]
        
          Example 2:

        Input: nums = [0]
        Output: [0]
        


  
*/

class MoveZeroes {
  array = [];

  constructor(array) {
    this.array = array;
  }

  Move() {
    //keep j in th front a a place holder for numbers gerater than 0
    let j = 0;

    /* 
    loop from the front to bak finding number that are not zero  
    send to fron the move placeholder
    
    */
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] !== 0) {
        let temp = this.array[i];

        this.array[i] = this.array[j];

        this.array[j] = temp;

        j++;
      }
    }

    return this.array;
  }
}

console.log(new MoveZeroes([0, 1, 0, 3, 12]).Move());
