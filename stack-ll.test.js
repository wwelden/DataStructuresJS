const StackLL = require('./stack-ll');

describe('StackLL', () => {
    let stackLL;

    beforeEach(() => {
        stackLL = new StackLL();
    });

    test('should push and peek correctly', () => {
        stackLL.push('test');
        expect(stackLL.peek()).toBe('test');
    });

    test('should pop correctly', () => {
        stackLL.push('test1');
        stackLL.push('test2');
        stackLL.pop();
        expect(stackLL.peek()).toBe('test1');
    });

    test('should check if empty correctly', () => {
        expect(stackLL.isEmpty()).toBeTruthy();
        stackLL.push('test');
        expect(stackLL.isEmpty()).toBeFalsy();
    });
});