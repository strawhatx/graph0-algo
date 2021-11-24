/*
    What is an array.
    
        An Array is a collection of items. The items could be integers, strings, DVDs, 
        games, books—anything really. The items are stored in neighboring (contiguous) memory 
        locations. Because they're stored together, checking through the entire collection of items 
        is straightforward.

        Creating an Array
        
        On a computer, Arrays can hold up to N items. The value of N is decided by you, the 
        programmer, at the time you create the Array. This is the same as when we found a big 
        enough cardboard box for the DVDs. Additionally, you also need to specify the type of 
        item that will be going into the Array.
*/

class Arrays {
  stringArray = ["apple", "orange", "grapes"];
  numberArray = [1, 2, 3];
  objectArray = [
    { name: "apple", color: "red" },
    { name: "grape", color: "green" },
  ];
  multiDimensionalArray = [
    [1, 2],
    [1, 4],
    [3, 7],
  ];
}
