class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
    }

    remove(index){
        if(index >= this.length){
            return this.append(value);
        }
    }

    reverse(){
        if(!this.head.next){
            return this;
        }
    }
}

module.exports = LinkedList;
