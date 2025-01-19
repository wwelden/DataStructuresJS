const QueueArray = require('./Queue-Arr');
const QueueLinkedList = require('./Queue-LL');

describe('Queue Array Implementation', () => {
    let queue;

    beforeEach(() => {
        queue = new QueueArray();
    });

    test('enqueue should add elements', () => {
        queue.enqueue('test1');
        expect(queue.peek()).toBe('test1');
    });

    test('dequeue should remove elements', () => {
        queue.enqueue('test1');
        queue.enqueue('test2');
        queue.dequeue();
        expect(queue.peek()).toBe('test2');
    });

    test('isEmpty should return correct state', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue('test');
        expect(queue.isEmpty()).toBe(false);
    });
});

describe('Queue Linked List Implementation', () => {
    let queue;

    beforeEach(() => {
        queue = new QueueLinkedList();
    });

    test('enqueue should add elements', () => {
        queue.enqueue('test1');
        expect(queue.peek().value).toBe('test1');
    });

    test('dequeue should remove elements', () => {
        queue.enqueue('test1');
        queue.enqueue('test2');
        queue.dequeue();
        expect(queue.peek().value).toBe('test2');
    });

    test('isEmpty should return correct state', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue('test');
        expect(queue.isEmpty()).toBe(false);
    });
});