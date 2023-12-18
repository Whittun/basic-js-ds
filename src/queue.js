const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.arr = null
  }

  getUnderlyingList() {
    return this.arr
  }

  enqueue(value) {
    let current = this.arr

    if (current) {
      while(current.next) {
        current = current.next
      }

      current.next = new ListNode(value)
    } else {
      this.arr = new ListNode(value)
    }
  }

  dequeue() {
    let cur = this.arr
    this.arr = this.arr.next
    return cur.value
  }
}

module.exports = {
  Queue
};
