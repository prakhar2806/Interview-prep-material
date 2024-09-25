class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //add to front (new_node-->x-->y-->z)
  //Time complexity : O(1) constant time complexity
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // add at the end  (x-->y-->z-->new_Node)
  //Time complexity: O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  //add at a certain index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
    // if (index === this.size) {
    //   this.append(value);
    // }
  }

  //remove node by index
  //Time complexity: O(1)
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  //remove node by value
  //Time complexity: O(n)
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.head;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      let removedNode;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    //https://www.youtube.com/watch?v=S9kMVEUg-x4&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=21
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("list is empty ? ", list.isEmpty());
console.log("list size : ", list.getSize());

// list.prepend(10);
// list.prepend(20);
// list.prepend(25);
// list.prepend(30);

list.append(10);
list.append(20);
list.append(25);
list.append(30);

list.print();

// list.append(40);

// list.print();

// list.insert(10, 0);
// list.print();

// list.insert(20, 0);
// list.print();

// list.insert(30, 1);
// list.print();

// list.insert(40, 2);
// list.print();

// console.log(list.getSize());

// list.removeFrom(0);

// list.print();

// list.removeFrom(2);

list.print();

// console.log(list.removeValue(30));

list.print();

console.log(list.search(40));

list.reverse();

list.print();
