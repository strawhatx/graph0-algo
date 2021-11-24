/*
    Array Insertions
    
        Inserting a new element into an Array can take many forms:

            1- Inserting a new element at the end of the Array.
            2- Inserting a new element at the beginning of the Array.
            3- Inserting a new element at any given index inside the Array.

        Inserting at the End of an Array
            At any point in time, we know the index of the last element of the Array, as we've
            kept track of it in our length variable. All we need to do for inserting an element at 
            the end is to assign the new element to one index past the current last element.

        Inserting at the Start of an Array
            To insert an element at the start of an Array, we'll need to shift all other elements in 
            the Array to the right by one index to create space for the new element. This is a very 
            costly operation, since each of the existing elements has to be shifted one step to the 
            right. The need to shift everything implies that this is not a constant time operation. 
            In fact, the time taken for insertion at the beginning of an Array will be proportional 
            to the length of the Array. In terms of time complexity analysis, this is a linear time 
            complexity: O(N)O(N), where NN is the length of the Array.

        Inserting Anywhere in the Array
            Similarly, for inserting at any given index, we first need to shift all the elements 
            from that index onwards one position to the right. Once the space is created for the new 
            element, we proceed with the insertion. If you think about it, insertion at the beginning 
            is basically a special case of inserting an element at a given index—in that case, 
            the given index was 0.
*/

class ArrayInsert {
  array = [3, 5, 6];

  InsertEnd() {
    this.array.push(7);

    return this.array;
  }

  InsertStart() {
    this.array.unshift(1, 2);

    return this.array;
  }

  InsertPosition(position, value) {
    let index = this.array.findIndex((value) => value === position);
    this.array.splice(index, 0, value);

    return this.array;
  }
}

console.log(new ArrayInsert().InsertEnd());

console.log(new ArrayInsert().InsertStart());

console.log(new ArrayInsert().InsertPosition(5, 4));
