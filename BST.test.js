const BinarySearchTree = require('./BST');

describe('Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    test('insert should add nodes correctly', () => {
        bst.insert(9);
        bst.insert(4);
        bst.insert(20);
        expect(bst.root.value).toBe(9);
        expect(bst.root.left.value).toBe(4);
        expect(bst.root.right.value).toBe(20);
    });

    test('lookup should find existing nodes', () => {
        bst.insert(9);
        bst.insert(4);
        bst.insert(20);
        expect(bst.lookup(9).value).toBe(9);
        expect(bst.lookup(4).value).toBe(4);
        expect(bst.lookup(20).value).toBe(20);
    });

    test('lookup should return false for non-existing nodes', () => {
        bst.insert(9);
        expect(bst.lookup(5)).toBe(false);
    });

    test('remove should delete nodes correctly', () => {
        bst.insert(9);
        bst.insert(4);
        bst.insert(20);
        expect(bst.remove(4)).toBe(true);
        expect(bst.lookup(4)).toBe(false);
    });
});