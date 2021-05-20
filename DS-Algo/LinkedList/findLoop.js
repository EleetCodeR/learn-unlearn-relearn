class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
