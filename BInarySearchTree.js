class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        return current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        return current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    var current = this.root;

    if (value === current.value) return current;

    if (value < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }

    return false;
  }
}
