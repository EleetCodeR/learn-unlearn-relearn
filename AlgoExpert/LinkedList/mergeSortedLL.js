// Merge two sorted linked lists, in-place.
// solution - O(n+m) time | O(1) space.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  let current = headOne;
  let prev = null;
  let next = headTwo;
  while (current !== null && next !== null) {
    if (current.value < next.value) {
      prev = current;
      current = current.next;
    } else {
      if (prev !== null) prev.next = next;
      prev = next;
      next = next.next;
      prev.next = current;
    }
  }
  if (current === null) prev.next = next;
  return headOne.value < headTwo.value ? headOne : headTwo;
}
