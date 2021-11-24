/* 
  Palindrome Linked List

    Solution
    Given the head of a singly linked list, return true if it is a palindrome.

    Example 1:

      Input: head = [1,2,2,1]
      Output: true
    Example 2:

      Input: head = [1,2]
      Output: false
    

    Follow up: Could you do it in O(n) time and O(1) space?
*/

class LinkedNode {
  data;
  next;

  constructor(x = 0, next = null) {
    this.data = x;
    this.next = next;
  }
}

class PalindromeLinkedList {
  reverse(head) {
    if (head == null) return null;

    let reversedHead = head;

    while (head != null) {
      let next = head.next;
      head.next = reversedHead;
      reversedHead = head;
      head = next;
    }

    return reversedHrad;
  }
  palindrome(head) {
    if (head === null) return false;

    let fast = head;
    let slow = head;

    while (fast.next != null && fast.next.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let firstHalfHead = head;
    let secondHalfHead = reverse(slow.head);

    while (secondHalfHead != null && firstHalfHead != null) {
      if (secondHalfHead.data !== firstHalfHead.data) {
        return false;
      }

      secondHalfHead = secondHalfHead.next;
      firstHalfHead = firstHalfHead.next;
    }

    return true;
  }
}
