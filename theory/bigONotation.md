# Big O Notation and The Space/Time Trade Off

## Running Time and Memory Usage ... aka The Space for Time TradeOff.

An efficient computational process solves a problem in a reasonable amout of time, using a reasonable amount of computer memory. Some programmers may be willing to pay more for extra memory if this allows data to be processed more quickly, while other users may have to settle for a slower processing time in order to economize on memory.

One way to measure efficiency is to examine how long it actually takes a process to operate on different data sets and to examine how many memory cells are actually used by running the program on the computer.

A faster and much easier method (but maybe not as fun) is to simply examine the algorithm and data structures that describe the process with a pencil and paper analysis. Better understanding usually comes from this analysis and it is the method used by professional programmers to formally analyze an algorithm and associated data structure. This is what is used first in the real world with possiblly a final analysis done on the computer to confirm conclusions.

There is an unwritten rule which programmers use in analyzing the efficiency of an algorithm: 10% of the code runs 90% of the time and the other 90% of the code runs only 10% of the time. Guess which part of the code the programmer needs to analyze? Of course, the code that runs 90% of the time.

Some standard relationships between processing time, memory use, and data or problem size have been discovered over the years due to indepth analysis.

Algorithms express one of six kinds of behavior and we use what's called Big O notation to refer to the different kinds of behavior.

### constant

This kind of behavior is ideal. If we can access information immediately without searching a list, this is constant behavior. An example, is accessing the middle component of an array.

```
middle = IntArray [(first_index + last_index) / 2 ];

System.out.println("The middle index is " + middle);
```

It takes one line of code to access this element. This is O(1).


### linear

The behavior is linear if the number of instructions executed increases in direct proportion to the size of the problem. A sequential or linear search is an example of this. If we have n elements in an array, then in the worst case scenario the item we want to find is either in the last position or it is not in the array at all. In either case we have to check all n elements for the value from the first component to the last. In other words, n checks for n components. This is O(n).

---

### quadratic

The behavior is quadratic if the number of instructions executed increases in direct proportion to the square of the size of the problem. If we are performing a insertion sort or selection sort on an unsorted array we always have a loop with a nested loop which controls the sorting process. With an array of n elements, the loops' bounds are from 0 to n-1. The outside loop runs n times but the inner loop runs n times everytime the outside loop runs once. So we have approximately n x n executions or n2. No matter what the exact number of executions for a nested loop algorithm, we always approximate and just say n-squared. This is O(n2).

---

### logarithmic

The behavior is logarithmic if the number of instructions executed increases logarithmicly usually based on log2 n. An example is the binary search where the list being searched is successively divided in half. Therefore, it is O(log2 n), where the base is 2 not 3 or some other integer.

---

### n-log-n

The behavior is part logarithmic and part linear. Here one part of the algorithm behaves linearly and the other part behaves logarithmicly. Therefore, we have n * log2 n. Examples of this are MergeSort, QuickSort, and HeapSort. This is O(log2 n). A note about MergeSort and QuickSort. The part of MergeSort that is log2 n is when the recursiveSort method is successively dividing the array in half until there is only 1 or two items in each part of the subdivided array. The part of QuickSort that is log2 n is when the recursiveSort method is partitioning the array almost in half every time while it places each pivot value in its final position.

---

### exponential

The behavior is exponential if the number of instructions executed increases exponentially usually based on 2n. We will only mention that the possibility of these behaviors exist with no particular algorithm in mind. This is O(2n).

---

![big O Curves](http://ww2.kcd.org/ACP/Ch06/BigOCurves.jpg)

## The Costs and Benefits of Recursion.

First, lets look at memory. Remember we are talking about memory not time so its not the number of lines executed its how much stack memory is used.

In general, a recursive process that requires N recursive calls requires N + 1 units of stack memory and processor time to manage the process. The size of the recursive process grows in direct proportion to the size of the argument provided in the parameter list of the function. In other words, recursion is generally a linear behavior related to memory . This is not horrible but it is not as good as a logarithmic behavior or constant behavior.

An equivalent iterative process always requires only one unit of stack memory and processor time to manage the function call, regardless of the number of times the loop runs. This is constant behavior regarding the memory.

A plus to recursion is that a recursive approach to a problem may actually be the best way to a solution and the code may be shorter. For example, one of the fastest methods of sorting called the QuickSort uses a recursive algorithm. MergeSort also can be written recursively. Also, you will find out later that recursion can be a valuable tool when working with dynamic data structures particularly binary trees.


[source](http://ww2.kcd.org/ACP/Ch06/BigOCurves.html)
