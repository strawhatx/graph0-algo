/*
    Remove Nth Node From End of List.

      Given the head of a linked list, remove the nth node from the end of the list and return its
      head.

      Example 1:

        Input: head = [1,2,3,4,5], n = 2
        Output: [1,2,3,5]
      
       Example 2:

        Input: head = [1], n = 1
        Output: []
      Example 3:

        Input: head = [1,2], n = 1
        Output: [1]
      

      Follow up: Could you do this in one pass?
      
*/
class LinkedNode {
  data;
  next;
  constructor(data = 0, next) {
    this.data = data;
    this.next = next;
  }
}

class RemoveNthNodeFromEndofList {
  RemoveNthFromEnd(head, n) {
    if ((head == null && head.next == null) || n < 0) return null;

    let dummy = new LinkedNode(0, head);

    let right = head;

    let left = dummy;

    while (n > 0) {
      right = right.next;
      n--;
    }

    while (right != null) {
      right = right.next;
      left = left.next;
    }

    left.next = left.next.next;

    return dummy.next;
  }
}
