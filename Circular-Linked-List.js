class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.tail.next = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = this.head;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            return this;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.tail.next = this.head;
            this.length--;
            return this;
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        if (index === this.length - 1) {
            this.tail = leader;
        }
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

module.exports = CircularLinkedList;

// Example usage:
const myList = new CircularLinkedList(10);
myList.append(5);
myList.append(16);
myList.prepend(1);
myList.insert(2, 99);
console.log(myList.printList()); // [1, 10, 99, 5, 16]
myList.remove(2);
console.log(myList.printList()); // [1, 10, 5, 16]
