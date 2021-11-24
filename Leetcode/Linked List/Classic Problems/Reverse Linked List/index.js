/* 
    Reverse Linked List
        Given the head of a singly linked list, reverse the list, and return the reversed list.

        Example 1:

            Input: head = [1,2,3,4,5]
            Output: [5,4,3,2,1]

        Example 2:

            Input: head = [1,2]
            Output: [2,1]

        Example 3:

            Input: head = []
            Output: []
 

        Follow up: A linked list can be reversed either iteratively or recursively. Could you 
        implement both?
*/
class LinkedNode {
  val;
  next;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
class ReverseLinkedList {
  //Recursive(head) {}
  Regular(head) {
    let current = head;
    let previous;

    while (current != null) {
      let next_node = current.next;
      current.next = previous;
      previous = current;
      current = next_node;
    }

    return previous;
  }
}
