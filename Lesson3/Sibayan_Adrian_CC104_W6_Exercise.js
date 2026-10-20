'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

/**
 * Stack class implementing Last-In, First-Out (LIFO) behavior.
 */
class Stack {
  constructor() {
    // Internal array storage for stack elements
    this.items = [];
  }

  // Adds an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Removes and returns the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Returns true if the stack contains no elements
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the total number of elements in the stack
  size() {
    return this.items.length;
  }

  // Returns all elements formatted as a comma-separated string
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// 1. Push all three actions in arrival order
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// 2. Display the current top action using peek()
console.log('Top Action: ' + actionHistory.peek());

// 3. Undo the most recent action using pop()
const undoneAction = actionHistory.pop();
console.log('Undo Action: ' + undoneAction);

// 4. Display remaining actions
console.log('Remaining Actions: ' + actionHistory.toString());

// 5. Display current stack size
console.log('Stack Size: ' + actionHistory.size());


// ================================================================
// PART B: QUEUE
// ================================================================

/**
 * Queue class implementing First-In, First-Out (FIFO) behavior.
 */
class Queue {
  constructor() {
    // Internal array storage for queue elements
    this.items = [];
  }

  // Adds an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Removes and returns the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Returns the front element without removing it
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Returns true if the queue contains no elements
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the total number of elements in the queue
  size() {
    return this.items.length;
  }

  // Returns all elements formatted as a comma-separated string
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// 1. Enqueue all four requests in arrival order
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// 2. Display the request at the front
console.log('Next Request: ' + waitingRequests.front());

// 3. Process two requests using dequeue() twice
const processed1 = waitingRequests.dequeue();
console.log('Processed: ' + processed1);

const processed2 = waitingRequests.dequeue();
console.log('Processed: ' + processed2);

// 4. Display remaining queue
console.log('Remaining Requests: ' + waitingRequests.toString());

// 5. Display current queue size
console.log('Queue Size: ' + waitingRequests.size());


// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

/**
 * PriorityQueue class where items with lower priority numbers 
 * are inserted ahead of items with higher priority numbers.
 * Equal priorities preserve FIFO arrival order.
 */
class PriorityQueue {
  constructor() {
    // Internal array storage for queue objects
    this.items = [];
  }

  // Inserts a request into the position designated by its priority
  enqueue(request, priority) {
    const queueElement = { request: request, priority: priority };
    let added = false;

    // Find insertion position (smaller number = higher priority)
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    // If priority is equal to or lower than existing items, add at end
    if (!added) {
      this.items.push(queueElement);
    }
  }

  // Removes and returns the highest priority request item
  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.shift();
  }

  // Returns the number of items in the priority queue
  size() {
    return this.items.length;
  }

  // Displays all requests alongside their priorities
  print() {
    this.items.forEach(function(item) {
      console.log(item.request + ', Priority ' + item.priority);
    });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// 1. Enqueue the four required requests with their priorities
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// 2. Display initial priority order
console.log('Initial Priority Order:');
urgentRequests.print();

// 3. Process the first request
const processedUrgent = urgentRequests.dequeue();
console.log('\nProcessed Priority Request: ' + processedUrgent.request + ', Priority ' + processedUrgent.priority);

// 4. Display remaining priority queue
console.log('\nRemaining Priority Requests:');
urgentRequests.print();


// ================================================================
// PART D: LINKED LIST
// ================================================================

/**
 * Node class representing a single element in a singly linked list.
 */
class Node {
  constructor(element) {
    this.element = element; // Data stored in the node
    this.next = null;       // Pointer to the next node
  }
}

/**
 * Singly LinkedList class implementation without using arrays.
 */
class LinkedList {
  constructor() {
    this.length = 0; // Number of elements in the list
    this.head = null; // Pointer to the first node
  }

  // Appends an element to the end of the list
  append(element) {
    const node = new Node(element);
    
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // Inserts an element at a specific zero-based index position
  insert(position, element) {
    // Check for out-of-bounds position
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);
    let current = this.head;

    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      node.next = current;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  // Removes a node at a specific zero-based index position
  removeAt(position) {
    // Check for out-of-bounds position
    if (position < 0 || position >= this.length || this.head === null) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }

  // Returns the position index of an element, or -1 if not found
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // Removes an element matching the given value
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // Returns true if the linked list contains no nodes
  isEmpty() {
    return this.length === 0;
  }

  // Returns the total number of nodes in the list
  size() {
    return this.length;
  }

  // Traverses the linked list and returns all values formatted as text
  toString() {
    let current = this.head;
    let stringResult = '';

    while (current !== null) {
      stringResult += current.element + (current.next ? '\n' : '');
      current = current.next;
    }

    return stringResult;
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// 1-3. Append initial tickets
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// 4. Insert Ticket #400 at position 0
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// 5. Insert Ticket #405 at the end using insert()
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// 6. Display complete list
console.log('Complete List:');
console.log(completedRequests.toString());

// 7. Find index of Ticket #402
const targetTicket = 'Ticket #402 - Printer Connected';
const indexFound = completedRequests.indexOf(targetTicket);
console.log('\nIndex of "' + targetTicket + '": ' + indexFound);

// 8. Remove item at position 1
const removedAtPos1 = completedRequests.removeAt(1);
console.log('Removed at Position 1: ' + removedAtPos1);

// 9. Remove Ticket #403 using remove()
const targetToRemove = 'Ticket #403 - Antivirus Updated';
const removedByValue = completedRequests.remove(targetToRemove);
console.log('Removed by Value: ' + removedByValue);

// 10. Display final list and size
console.log('\nFinal List:');
console.log(completedRequests.toString());
console.log('\nFinal Size: ' + completedRequests.size());