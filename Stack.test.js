const Stack = require('./Stack-Arr');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should push and peek correctly', () => {
    stack.push('test');
    expect(stack.peek()).toBe('test');
  });

  test('should pop correctly', () => {
    stack.push('test1');
    stack.push('test2');
    stack.pop();
    expect(stack.peek()).toBe('test1');
  });

  test('should check if empty correctly', () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push('test');
    expect(stack.isEmpty()).toBeFalsy();
  });
});