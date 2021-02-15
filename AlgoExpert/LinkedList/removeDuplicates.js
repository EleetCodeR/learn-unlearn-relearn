// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  if (linkedList) {
    let slowPtr = linkedList;
    let fastPtr = slowPtr.next;

    while (fastPtr !== null) {
      if (slowPtr.value !== fastPtr.value) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
      } else {
        // found duplicate
        while (fastPtr !== null && slowPtr.value === fastPtr.value) {
          fastPtr = fastPtr.next;
        }
        //connect
        if (fastPtr !== null) {
          slowPtr.next = fastPtr;
          slowPtr = fastPtr;
          fastPtr = fastPtr.next;
        } else {
          slowPtr.next = null;
        }
      }
    }

    return linkedList;
  } else {
    return null;
  }
}
