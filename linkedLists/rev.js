function reverseLinkedList(head) {
  // Write your code here.
  let prev = head;
  let curr = head.next;
  if (!curr) return head;
  let newNode = curr.next;
  prev.next = null;
  while (newNode) {
    curr.next = prev;
    prev = curr;
    curr = newNode;
    newNode = newNode.next;
  }
  curr.next = prev;
  return curr;
}

// Do not edit the line below.
