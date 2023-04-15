// 1.
// Algorithms
// 1. Big o notation
// 2. Performance and optimization
// 3. Problem solving approach
// 4. Recursion
// 5. Searching algorithms
// 6. Bubble sort
// 7. Selection sort
// 8. Insertion sort
// 9. Merge sort
// 10. Quick sort

// Data structure
// 1. Singly LinkedList
// 2. Doubly LinkedList
// 3. Stack
// 4. Queue
// 5. Binary search tree
// 6. Tree traversal
// 7. Binary heaps
// 8. Hash Tables
// 9. Graphs
// 10. Graphs traversal


// 2.
function sumOfAll(n) {
  // Much time complexity
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let time1 = performance.now();
console.log(sumOfAll(1000000000));
let time2 = performance.now();
console.log(`Time is ${(time2 - time1) / 1000}`);

function sumOfAll(n) {
  // Less time complexity
  return (n * (n + 1)) / 2;
}
console.log(sumOfAll(10));
