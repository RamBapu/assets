class Node {
  // Each node object should have two parameters - data/value and next
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value); // creating a new node with value and head is pointing to first node
    this.tail = this.head; // tail is pointing to the same first node
    this.length = 1; // since we have only one node
  }
}

const linkedList = new LinkedList(1);
console.log(linkedList);

// Created a new linkedList with 3 parameters - head, tail and length
// LinkedList {
//   head: Node { head: 1, next: null },
//   tail: Node { head: 1, next: null },
//   length: 1
// }
