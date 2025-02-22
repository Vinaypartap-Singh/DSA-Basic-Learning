class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    removedNode.next = null;
    return removedNode;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail - this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= 0) {
      return null;
    }

    var counter = 0;
    var current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) return !!this.unshift(val); // It will boolean

    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);

    var prev = this.get(index - 1);

    var temp = prev.next;

    prev.next = newNode;

    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);

    var removed = previousNode.next;

    return removed;
  }

  reverse() {
    var node = this.head;
    var head = this.tail;
    var tail = node;
    var next;
    var prev;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

// Big 0

// Insertion -> O(1)
// Removal -> O(1) or O(n) it depends
// searching -> O(n)
// Access O(n)
