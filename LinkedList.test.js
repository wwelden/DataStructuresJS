const LinkedList = require('./Linked-List');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList(10);
  });

  test('should create with initial value', () => {
    expect(linkedList.head.value).toBe(10);
    expect(linkedList.length).toBe(1);
  });

  test('should append correctly', () => {
    linkedList.append(5);
    expect(linkedList.tail.value).toBe(5);
    expect(linkedList.length).toBe(2);
  });

  test('should prepend correctly', () => {
    linkedList.prepend(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.length).toBe(2);
  });
});