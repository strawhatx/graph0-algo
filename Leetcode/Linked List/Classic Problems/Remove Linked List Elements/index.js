/* 
    Remove Linked List Elements

      Given the head of a linked list and an integer val, remove all the nodes of the 
      linked list that has Node.val == val, and return the new head.

      Example 1:

        Input: head = [1,2,6,3,4,5,6], val = 6
        Output: [1,2,3,4,5]

      Example 2:

        Input: head = [], val = 1
        Output: []

      Example 3:

        Input: head = [7,7,7,7], val = 7
        Output: []
 
*/
class LinkedNode {
  data;
  next;

  constructor(val = 0, next = null) {
    this.data = val;
    this.next = next;
  }
}

class RemoveLinkedListElements {
  RemoveElements(head, val) {
    if (head === null || val < 0) return null;

    let current = head;
    let previous = null;

    while (current != null) {
      if (val === current.val) {
        // if found on the head re set the new head
        if (previous == null) {
          head = current.next;
        } else {
          previous.next = current.next;
        }
      } else {
        previous = current;
      }

      current = current.next;
    }
    return head;
  }
}
