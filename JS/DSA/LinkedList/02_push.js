class Node {
  // Each node object should have two parameters - data/value and next
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value); // creating a new node with new value

    // Condition to check if the linked list is completely null
    // say if there are no items, then this new node becomes the first node and becomes head and tail
    if (!this.head) {
      // similar to what we did it constructor
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode; // tail is now first node, next of first node is second node
    this.tail = newNode; // then we change the tail to second node
    this.length++; // increasing the length of the linked list
  }
}

const linkedList = new LinkedList(1);
linkedList.push(2);
console.log(linkedList);
