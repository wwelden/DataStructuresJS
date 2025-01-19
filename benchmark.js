const HashTable = require('./Hash-Map');
const Stack = require('./Stack-Arr');
const StackLL = require('./Stack-ll');
const LinkedList = require('./Linked-List');
const CircularLinkedList = require('./Circular-Linked-List');
const QueueArray = require('./Queue-Arr');
const QueueLL = require('./Queue-LL');
const BST = require('./BST');

function runBenchmark() {
  const results = [];
  const iterations = 100000;

  // Benchmark HashTable
  console.log('\nRunning HashTable benchmark...');
  const hashTable = new HashTable(iterations);
  const hashTableStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    hashTable.set(`key${i}`, i);
  }
  const hashTableTime = performance.now() - hashTableStart;
  results.push({ structure: 'HashTable', time: hashTableTime });

  // Benchmark Stack (Array)
  console.log('Running Stack (Array) benchmark...');
  const stack = new Stack();
  const stackStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    stack.push(i);
  }
  const stackTime = performance.now() - stackStart;
  results.push({ structure: 'Stack (Array)', time: stackTime });

  // Benchmark Stack (LinkedList)
  console.log('Running Stack (LinkedList) benchmark...');
  const stackLL = new StackLL();
  const stackLLStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    stackLL.push(i);
  }
  const stackLLTime = performance.now() - stackLLStart;
  results.push({ structure: 'Stack (LinkedList)', time: stackLLTime });

  // Benchmark Queue (Array)
  console.log('Running Queue (Array) benchmark...');
  const queueArr = new QueueArray();
  const queueArrStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    queueArr.enqueue(i);
  }
  const queueArrTime = performance.now() - queueArrStart;
  results.push({ structure: 'Queue (Array)', time: queueArrTime });

  // Benchmark Queue (LinkedList)
  console.log('Running Queue (LinkedList) benchmark...');
  const queueLL = new QueueLL();
  const queueLLStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    queueLL.enqueue(i);
  }
  const queueLLTime = performance.now() - queueLLStart;
  results.push({ structure: 'Queue (LinkedList)', time: queueLLTime });

  // Benchmark LinkedList
  console.log('Running LinkedList benchmark...');
  const linkedList = new LinkedList(0);
  const linkedListStart = performance.now();
  for (let i = 1; i < iterations; i++) {
    linkedList.append(i);
  }
  const linkedListTime = performance.now() - linkedListStart;
  results.push({ structure: 'LinkedList', time: linkedListTime });

  // Benchmark CircularLinkedList
  console.log('Running CircularLinkedList benchmark...');
  const circularList = new CircularLinkedList(0);
  const circularListStart = performance.now();
  for (let i = 1; i < iterations; i++) {
    circularList.append(i);
  }
  const circularListTime = performance.now() - circularListStart;
  results.push({ structure: 'CircularLinkedList', time: circularListTime });

  // Benchmark BST
  console.log('Running Binary Search Tree benchmark...');
  const bst = new BST();
  const bstStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    bst.insert(i);
  }
  const bstTime = performance.now() - bstStart;
  results.push({ structure: 'Binary Search Tree', time: bstTime });

  // Sort and print results
  results.sort((a, b) => a.time - b.time);
  console.log('\nPerformance Rankings (adding 100,000 items):');
  console.log('----------------------------------------');
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.structure}: ${result.time.toFixed(2)}ms`);
  });
}

runBenchmark();