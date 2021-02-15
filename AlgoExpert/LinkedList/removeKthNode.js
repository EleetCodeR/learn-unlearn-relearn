//Complexity: O(n) Time | O(1) Space.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let len = 1;
  let currentNode = head;

  while (currentNode !== null) {
    len++;
    currentNode = currentNode.next;
  }

  currentNode = head;
  let count = len - 1;
  console.log(count);
  if (k === count) {
    //head
    head.value = head.next.value;
    head.next = head.next.next;
  } else {
    while (k + 1 !== count) {
      count--;
      currentNode = currentNode.next;
      //console.log(currentNode.value+"-->");
    }
    currentNode.next = currentNode.next.next;
  }
}
