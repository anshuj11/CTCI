class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // Write your code here.
  let fastPtr = head.next.next;
  let slowPtr = head.next;

  while (fastPtr !== slowPtr) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
  }
  fastPtr = head;
  //Based on the explanation by algoexperts
  //Now both pointers move at the same pace
  while (fastPtr !== slowPtr) {
    fastPtr = fastPtr.next;
    slowPtr = slowPtr.next;
  }
  return fastPtr;
}
