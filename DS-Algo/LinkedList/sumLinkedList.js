class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const head = new LinkedList(-1);
  let currentNode = head;
  let sum = 0;
  let borrow = 0;

  while (linkedListOne !== null && linkedListTwo !== null) {
    ////// Summation
    sum = borrow + linkedListOne.value + linkedListTwo.value;
    if (sum >= 10) {
      sum = sum % 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    /////// Adding node
    if (currentNode.value === -1) {
      // head node
      currentNode.value = sum;
    } else {
      const newNode = new LinkedList(sum);
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }

    ////// Moving pointers
    linkedListOne = linkedListOne.next;
    linkedListTwo = linkedListTwo.next;
  }

  if (linkedListOne) {
    //console.log("list two ended ...");
    while (linkedListOne !== null) {
      ////// Summation
      sum = borrow + linkedListOne.value;
      if (sum >= 10) {
        sum = sum % 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      /////// Adding node
      //console.log(`adding ${sum} to list..`);
      const newNode = new LinkedList(sum);
      currentNode.next = newNode;
      currentNode = currentNode.next;

      ////// Moving pointers
      linkedListOne = linkedListOne.next;
    }

    /// adjust borrow
    if (borrow) {
      const newNode = new LinkedList(borrow);
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }
  } else {
    //console.log("list one ended ...");
    while (linkedListTwo !== null) {
      ////// Summation
      sum = borrow + linkedListTwo.value;
      if (sum >= 10) {
        sum = sum % 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      /////// Adding node
      console.log(`adding ${sum} to list..`);
      const newNode = new LinkedList(sum);
      currentNode.next = newNode;
      currentNode = currentNode.next;

      ////// Moving pointers
      linkedListTwo = linkedListTwo.next;
    }

    /// adjust borrow
    if (borrow) {
      const newNode = new LinkedList(borrow);
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }
  }

  return head;
}
