
export const nav = [
  {
    name: 'DSA',
    Topic: []
  },
  {
    name: 'JavaScript',
    Topic: []
  },
  {
    name: 'ReactJs',
    Topic: []
  },
  // {
  //   name: 'NodeJs',
  //   Topic: []
  // },
  // {
  //   name: 'Projects',
  //   Topic: []
  // },

]

export const reactTopic = [
  {
    topic: "React Basics",
    questions: [
      "What is React?",
      "What is JSX? How does it differ from HTML?",
      "Explain the concept of virtual DOM in React.",
      "What are React components? How do you create a component?",
      "What is the significance of the ReactDOM.render() method in React?",
      "Explain the difference between functional components and class components in React.",
      "What are props in React? How do you pass data from a parent component to a child component using props?"
    ]
  },
  {
    topic: "State and Lifecycle",
    questions: [
      "What is state in React? How is it different from props?",
      "How do you initialize state in a React component?",
      "Explain the lifecycle methods in React and their purpose.",
      "What is the difference between componentWillMount() and componentDidMount() lifecycle methods?",
      "How do you update the state of a component? What method should you use?",
      "Explain the purpose of the shouldComponentUpdate() method."
    ]
  },
  {
    topic: "React Router",
    questions: [
      "What is React Router? Why is it used?",
      "How do you define routes in React Router?",
      "Explain the difference between <BrowserRouter> and <HashRouter> in React Router.",
      "How do you handle dynamic routes in React Router?",
      "What is the purpose of the Link component in React Router?"
    ]
  },
  {
    topic: "Hooks",
    questions: [
      "What are hooks in React? Why were they introduced?",
      "Explain the useState() hook and how it is used.",
      "How do you perform side effects in functional components using hooks?",
      "What is the useEffect() hook? When and why would you use it?",
      "Explain the useContext() hook and its significance."
    ]
  },
  {
    topic: "Redux",
    questions: [
      "What is Redux? Why is it used in React applications?",
      "Explain the core principles of Redux: store, actions, and reducers.",
      "What is the purpose of the Redux DevTools extension?",
      "How do you connect a React component to the Redux store?",
      "What is the difference between mapStateToProps and mapDispatchToProps?"
    ]
  },
  {
    topic: "React Testing",
    questions: [
      "What is the purpose of testing in React applications?",
      "Explain the concept of unit testing and integration testing in React.",
      "How do you perform unit tests in React using Jest?",
      "What is the significance of the render() method in React testing?",
      "How do you simulate user events in React testing?"
    ]
  },
  {
    topic: "Performance Optimization",
    questions: [
      "How can you optimize performance in React applications?",
      "Explain the concept of memoization in React.",
      "What are React Pure Components? How do they differ from regular components?",
      "How can you lazy load components in React?"
    ]
  },
  {
    topic: "Advanced React Concepts",
    questions: [
      "What are React Fragments and why are they used?",
      "Explain the concept of Higher-Order Components (HOC) and how it is used in React."
    ]
  }
];

export const jsTopic = [
  {
    topic: "JavaScript Basics",
    questions: [
      "What is JavaScript? How does it differ from Java?",
      "What are the data types in JavaScript?",
      "What is the difference between `undefined` and `null`?",
      "Explain the concept of hoisting in JavaScript.",
      "How does JavaScript handle inheritance?"]
  },
  {
    topic: "Variables and Scope",
    questions: [
      "What are the different ways to declare variables in JavaScript?",
      "Explain the scope chain in JavaScript.",
      "What is the difference between `let`, `const`, and `var`?",
      "How does variable hoisting work in JavaScript?",
      "What is the purpose of the `use strict` directive?"
    ]
  },
  {
    topic: "Functions",
    questions: [
      "What are the different ways to define functions in JavaScript?",
      "Explain the concepts of function hoisting and function expressions.",
      "What is a closure? How and why would you use it?",
      "What are the differences between call, apply, and bind?",
      "What is a higher-order function? Can you provide an example?"
    ]
  },
  {
    topic: "Object-Oriented Programming",
    questions: [
      "What is prototypal inheritance in JavaScript?",
      "How do you create objects in JavaScript?",
      "What is the difference between classical inheritance and prototypal inheritance?",
      "How do you achieve encapsulation in JavaScript?",
      "Explain the concept of 'this' in JavaScript."
    ]
  },
  {
    topic: "Asynchronous Programming",
    questions: [
      "What is asynchronous programming in JavaScript?",
      "How does JavaScript handle asynchronous operations?",
      "Explain the difference between callbacks, promises, and async/await.",
      "What are the drawbacks of using callbacks?",
      "How do you handle errors in asynchronous JavaScript?"
    ]
  },
  {
    topic: "DOM Manipulation and Events",
    questions: [
      "What is the DOM in JavaScript?",
      "How do you select elements in the DOM?",
      "Explain event bubbling and event delegation.",
      "How can you dynamically create and remove HTML elements?",
      "What are event listeners? How do they work?"
    ]
  },
  {
    topic: "Error Handling and Debugging",
    questions: [
      "How do you handle errors in JavaScript?",
      "What is the purpose of try-catch blocks?",
      "How do you debug JavaScript code?",
      "What are some common debugging techniques or tools?",
      "How do you prevent and handle memory leaks in JavaScript?"
    ]
  },
  {
    topic: "Promises and Async/Await",
    questions: [
      "Explain the concept of promises in JavaScript.",
      "How do you chain multiple promises together?",
      "What are the benefits of using async/await over promises?",
      "How do you handle errors in async/await functions?",
      "Can you provide an example of using async/await with error handling?"
    ]
  },
  {
    topic: "ES6 and Modern JavaScript",
    questions: [
      "What are the new features introduced in ES6 (ECMAScript 2015)?",
      "Explain the arrow functions in JavaScript and their benefits.",
      "How do you use template literals in JavaScript?",
      "What are destructuring assignments and how do you use them?",
      "What is the purpose of the spread syntax (...) in JavaScript?"
    ]
  }
]

export const dsaTopic = [
  {
    topic: "Arrays",
    questions: ["Given an array of integers, find the maximum subarray sum.",
      "Given an array of integers, return the two numbers that sum up to a specific target.",
      "Given an array of integers, return the index of the first two numbers that sum up to a specific target.",
      "Given an array of integers, rotate the array to the right by k steps.",
      "Given an array of integers, find the kth largest element in the array.",
      "Given two arrays of integers, find the intersection of the arrays.",
      "Given an array of integers, find the contiguous subarray with the largest sum.",
      "Given an array of integers, remove duplicates from the array and return the new length of the array.",
      "Given an array of integers, move all the zeros to the end of the array while maintaining the relative order of the other elements.",
      "Given an array of integers, return the majority element in the array (the element that appears more than n/2 times)."]
  },
  {
    topic: "Linked Lists",
    questions: [
      "Implement a linked list class with insert, delete, and search methods.",
      "Reverse a linked list.",
      "Given two linked lists representing two non-negative numbers, add the two numbers and return the sum as a linked list.",
      "Given a linked list, remove the nth node from the end of the list and return its head.",
      "Given a linked list, determine if it has a cycle.",
      "Given a linked list, remove duplicates from the list.",
      "Given two sorted linked lists, merge them into a single sorted linked list.",
      "Given a linked list, reorder the list to alternate the first half with the second half."
    ]
  },
  {
    topic: "Strings",
    questions: [
      "Given a string, reverse the order of the words in the string.",
      "Given two strings, check if one is a permutation of the other.",
      "Given a string, check if it is a palindrome.",
      "Given a string, find the longest substring without repeating characters.",
      "Given a string, find the longest palindromic substring.",
      "Given a string, find the longest common prefix of a set of strings.",
      "Given a string, find the shortest substring that contains all the characters in a set of characters.",
      "Given a string, check if it can be formed by concatenating a substring of itself multiple times.",
      "Given a string, count the number of palindromic substrings in the string."
    ]
  },
  {
    topic: "Trees",
    questions: [
      "Implement a binary search tree class with insert, delete, and search methods.",
      "Given a binary tree, find its maximum depth.",
      "Given a binary tree, check if it is a valid binary search tree.",
      "Given a binary tree, return its level order traversal.",
      "Given a binary tree, return its inorder traversal.",
      "Given a binary tree, return its postorder traversal.",
      "Given a binary tree, return its preorder traversal.",
      "Given two binary trees, check if they are identical.",
      "Given a binary tree, return its diameter (the length of the longest path between any two nodes).",
      "Given a binary tree, find the lowest common ancestor of two nodes.",
      "Given a binary tree, flatten it to a linked list in-place."
    ]
  },
  {
    topic: "Dynamic Programming",
    questions: [
      "Given a set of items, each with a weight and a value, determine the maximum value you can obtain by selecting a subset of the items with a total weight no greater than a given limit.",
      "Given two strings, find the length of the longest common subsequence.",
      "Given a string and a set of strings, find the minimum number of operations required to transform the string into one of the set of strings (insert, delete, or replace a character).",
      "Given a set of coins with different denominations and a total amount of money, determine the minimum number of coins needed to make up the amount.",
      "Given a matrix of integers, find the length of the longest increasing subsequence.",
      "Given a set of intervals, merge any overlapping intervals.",
      "Given a sequence of matrices, determine the minimum number of scalar multiplications required to multiply the matrices.",
      "Given a string, determine the minimum number of cuts needed to make all substrings palindrome.",
      "Given a set of jobs with start and end times, determine the maximum profit that can be obtained by scheduling a subset of the jobs that do not overlap.",
      "Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words."
    ]
  },
  {
    topic: "Sorting and Searching",
    questions: [
      "Implement a binary search algorithm.",
      "Implement a merge sort algorithm.",
      "Implement a quicksort algorithm.",
      "Given a sorted array of integers, find the index of a specific target element.",
      "Given a sorted array of integers with duplicates, find the index of the first occurrence of a specific target element.",
      "Given a sorted array of integers with duplicates, find the index of the last occurrence of a specific target element.",
      "Given a sorted array of integers, remove duplicates from the array and return the new length of the array.",
      "Given a rotated sorted array of integers, find the minimum element in the array.",
      "Given two sorted arrays of integers, merge them into a single sorted array.",
      "Given a set of intervals, insert a new interval and merge any overlapping intervals."
    ]
  },
  {
    topic: "Graphs",
    questions: [
      "Implement a graph class with addVertex, addEdge, and hasPath methods.",
      "Given a graph and two vertices, determine if there is a path between the vertices.",
      "Given a graph and a starting vertex, perform a depth-first search.",
      "Given a graph and a starting vertex, perform a breadth-first search.",
      "Given a directed graph, determine if there is a cycle in the graph.",
      "Given an undirected graph, determine if there is a cycle in the graph.",
      "Given a directed acyclic graph, determine the topological ordering of the graph.",
      "Given a graph and a starting vertex, find the shortest path to all other vertices using Dijkstra's algorithm.",
      "Given a graph and a starting vertex, find the shortest path to all other vertices using Bellman-Ford algorithm.",
      "Given a graph and two vertices, find the shortest path between the vertices using A* search algorithm."
    ]
  }


]


