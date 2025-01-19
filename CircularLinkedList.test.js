const CircularLinkedList = require('./Circular-Linked-List');

describe('Circular Linked List', () => {
    let list;

    beforeEach(() => {
        list = new CircularLinkedList(10);
    });

    test('should create list with initial value', () => {
        expect(list.head.value).toBe(10);
        expect(list.tail.next).toBe(list.head);
    });

    test('append should add elements to the end', () => {
        list.append(20);
        expect(list.tail.value).toBe(20);
        expect(list.tail.next).toBe(list.head);
    });

    test('prepend should add elements to the start', () => {
        list.prepend(5);
        expect(list.head.value).toBe(5);
        expect(list.tail.next).toBe(list.head);
    });

    test('insert should add elements at specific position', () => {
        list.append(20);
        list.insert(1, 15);
        expect(list.printList()).toEqual([10, 15, 20]);
    });

    test('remove should delete elements at specific position', () => {
        list.append(20);
        list.append(30);
        list.remove(1);
        expect(list.printList()).toEqual([10, 30]);
    });

    test('should maintain circular structure after operations', () => {
        list.append(20);
        list.append(30);
        list.prepend(5);
        list.insert(2, 15);
        list.remove(1);

        let current = list.head;
        const values = [];
        do {
            values.push(current.value);
            current = current.next;
        } while (current !== list.head);

        expect(list.tail.next).toBe(list.head);
        expect(values.length).toBe(list.length);
    });
});