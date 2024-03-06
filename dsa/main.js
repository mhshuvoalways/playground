// Time complexity
// 1. Assignment operator (0)1
// 2. Comparison operator (0)1
// 3. Mathematical operator (0)1
// 4. Function call
// 5. Inside the function

// Linear search
// * O(n) - time complexity
// function main(arr, n, x) {
//   for (let i = 0; i < n; j++) {
//     if (arr[0] === x) {
//       return i;
//     }
//   }
// }

// Binary search
// * must be sorted
// * log2n(log base 2 n) - time complexity
// function main(arr, x) {
//   let left, right, mid;
//   left = 0;
//   right = arr.length - 1;

//   while (left <= right) {
//     mid = (left + right) / 2;
//     if (arr[mid] === x) {
//       return mid; //result will be index
//     }
//     if (arr[mid] < x) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(main([1, 3, 5, 7, 8, 12, 56, 77, 91], 3));

// Selection sort
// * O(n²) - time complexity
// function main(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let indexMin = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexMin]) {
//         indexMin = j;
//       }
//     }
//     if (indexMin !== i) {
//       let temp = arr[i];
//       arr[i] = arr[indexMin];
//       arr[indexMin] = temp;
//     }
//   }
//   console.log(arr);
// }
// main([6, 1, 4, 7, 2, 5, 8, 9, 3]);

// Bubble sort
// * O(n²) - time complexity
// function main(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr
// }
// main([6, 1, 4, 7, 2, 5, 8, 9, 3]);

// Insertation sort
// * must be sorted
// * If there are almost sorted we will use this sort
// function main(arr, n) {
//   let i, key, j;
//   for (i = 1; i < n; i++) {
//     key = arr[i];
//     j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
// }

// Stack

// pointer
// Pointer will work with memory address

// class Stack {
//   constructor() {
//     this.items = {};
//     this.count = 0;
//   }

//   push(element) {
//     this.items[this.count] = element;
//     this.count++;
//   }
// }

// const stack = new Stack();
// stack.push(15);
// stack.push(11);
// console.log(stack.items);



// Queue
// head/front
// tail/rear
// enqueue and dequeue


// Linked List
// concept
// We need to know the starting point called head, next address of the data
// Different between array and linked list
// use of memory (array - fixed size and linked list - dynamic size)
// memory allocation (array - compile time and linked list - run time)
// add data
// random access
// data/node change


// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null; // Reference to the next node, initially set to null
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null; // The head points to the first node in the list
//     }
  
//     // Add a new node to the end of the linked list
//     append(data) {
//       const newNode = new Node(data);
//       if (!this.head) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//     }
  
//     // Display the elements of the linked list
//     display() {
//       let current = this.head;
//       console.log(current);
//       // while (current) {
//       //   current = current.next;
//       // }
//     }
//   }
  
//   // Example usage
//   const linkedList = new LinkedList();
//   linkedList.append(1);
//   linkedList.display();
//   linkedList.append(2);
//   linkedList.display();
//   linkedList.append(3);
//   linkedList.display();



// Binary Tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(callback) {
    this.inOrderTraversalHelper(this.root, callback);
  }

  inOrderTraversalHelper(node, callback) {
    if (node !== null) {
      this.inOrderTraversalHelper(node.left, callback);
      callback(node.data);
      this.inOrderTraversalHelper(node.right, callback);
    }
  }
}

// Example Usage:

const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(11);
binaryTree.insert(7);

binaryTree.inOrderTraversal((data) => console.log(data));

