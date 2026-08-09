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

  pop() {
    // say if there are no items
    if (!this.head) {
      return undefined;
    }

    // Start from the head of the linked list
    let temp = this.head;
    let prev = this.head;

    // Iterating over the linked list to find the last element
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev; // Now tail is the prev of the last element
    this.tail.next = null; // Pointing the tail to null so that the last element is cut off
    this.length--;

    // If we removed the last element of the linked list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp; // to show the last element removed
  }

  unshift(value) {
    let newNode = new Node(value);

    // say if there are no items
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head; // added first node next will be the head node
    this.head = newNode; // head node will be the added first node
    this.length++;

    return this;
  }

  shift() {
    // say if there are no items
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = temp.next; // Second element becomes the head
    temp.next = null; // Removing the first element by cutting off
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // say if there are no items
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }

    return temp;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
// myLinkedList.unshift(0); // Add 0 as the first element
// myLinkedList.shift(); // Remove the first element 0
// console.log(myLinkedList);
console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());
