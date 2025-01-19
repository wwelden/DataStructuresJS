class Queue {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[0];
    }

    enqueue(value) {
        this.array.push(value);
        return this;
    }

    dequeue() {
        this.array.shift();
        return this;
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

module.exports = Queue;

// Example usage:
const myQueue = new Queue();
myQueue.enqueue('Google');
myQueue.enqueue('Udemy');
myQueue.enqueue('Discord');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);
