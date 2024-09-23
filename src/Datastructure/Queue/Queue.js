//First in first out (FIFO)
//https://www.youtube.com/watch?v=ex8EHl5fq1o&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=7

//enqueue: add an element to the queue
// dequeue: remove the oldest element from the queue
//peek: get the value at the front of the queue without removing it
//isempty: check if the queue is empty
//size: get the number of elements in queue
//print: visualize the element in queue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    //removes from the front
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());

console.log(queue.print());

queue.dequeue();

console.log(queue.print());

console.log(queue.peek());
