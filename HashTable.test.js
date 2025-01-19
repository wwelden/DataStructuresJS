const HashTable = require('./Hash-Map');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(50);
  });

  test('should set and get values correctly', () => {
    hashTable.set('grapes', 10000);
    expect(hashTable.get('grapes')).toBe(10000);
  });

  test('should handle collisions', () => {
    hashTable.set('grapes', 10000);
    hashTable.set('apples', 54);
    expect(hashTable.get('grapes')).toBe(10000);
    expect(hashTable.get('apples')).toBe(54);
  });

  test('should return all keys', () => {
    hashTable.set('grapes', 10000);
    hashTable.set('apples', 54);
    hashTable.set('oranges', 2);
    expect(hashTable.keys()).toEqual(expect.arrayContaining(['grapes', 'apples', 'oranges']));
  });

  test('should remove items correctly', () => {
    hashTable.set('grapes', 10000);
    expect(hashTable.remove('grapes')).toBe(10000);
    expect(hashTable.get('grapes')).toBeUndefined();
  });
});