# General

### Memory Leak

#### What is a memory leak?

In computer science, a memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in a way that memory which is no longer needed is not released. 

A memory leak may also happen when an object is stored in memory but cannot be accessed by the running code.

Memory leak occurs when programmers create a memory in heap and forget to delete it.

Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate. To avoid memory leaks, memory allocated on heap should always be freed when no longer needed.

### Memoization

#### What is memoization?

In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. 

Memoization is the programmatic practice of making long recursive/iterative functions run much faster.
How, you ask? By caching the values that the function returns after its initial execution.
When we input the same value into our memoized function, it returns the value stored in the cache instead of running the function again, thus boosting performance. No longer does your program have to recalculate every number to get a result.

### Static Typing

#### What is a static typed programming language?

Static typed programming languages are those in which variables need not be defined before they're used. This implies that static typing has to do with the explicit declaration (or initialization) of variables before they're employed.

## Resources
1. https://www.geeksforgeeks.org/what-is-memory-leak-how-can-we-avoid/
2. https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19