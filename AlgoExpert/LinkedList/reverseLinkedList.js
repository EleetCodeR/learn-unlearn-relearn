function reverseLinkedList(head) {
  let leadPtr = head;
  let backPtr = null;

  while (head !== null) {
    leadPtr = leadPtr.next;
    head.next = backPtr;
    backPtr = head;
    head = leadPtr;
  }
  return backPtr;
}
