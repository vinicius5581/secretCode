
/**
 * Assume that rand() is O(1) time, O(1) space function.
 * Notice that the 2 loops are independent and not nested. So, we can look at them separately and then add the result.
 * Assume that you do not know the relation between N and M. So, try to suggest your answer as a function of N and M ( max or addition maybe ).
 * Remember that space complexity is measured in terms of the largest amount of memory used during runtime.
 *
 * The first loop is O(N) and the second loop is O(M). Since you don’t know which is bigger, you say this is O(N + M). This can also be written as O(max(N, M)).
 * Since there is no additional space being utilised, the space complexity is constant / O(1)
 * O(N + M) time, O(1) space
 */
int a = 0,
b = 0;
for (i = 0; i < N; i++) {
  a = a + rand();
}
for (j = 0; j < M; j++) {
  b = b + rand();
}

/**
 *
 * Notice how the nested loop behaves. The j loop iterates for N times and the j loop itself is run N times.
 * So, the total number of runs would be N + N + …. N times
 *
 * The first set of nested loops is O(N^2) and the second loop is O(N).
 * This is O(max(N^2,N)) which is O(N^2).
 *
 * O(N * N) time, O(1) space
 */

int a = 0,
b = 0;
for (i = 0; i < N; i++) {
  for (j = 0; j < N; j++) {
    a = a + j;
  }
}
for (k = 0; k < N; k++) {
  b = b + k;
}


/**
 * Total number of runs = N + (N - 1) + (N - 2) + … 1 + 0
 * = N * (N + 1) / 2
 * = 1/2 * N^2 + 1/2 * N
 * O(N^2) times.
 *
 * O(N*N)
 */

int a = 0;
for (i = 0; i < N; i++) {
  for (j = N; j > i; j--) {
    a = a + i + j;
  }
}


/**
 * Notice that in every iteration, i goes to i / 2
 * So, after x iterations, i will be N / 2^x
 * We have to find first x such that N / 2^x < 1 OR 2^x > N
 *
 * We have to find the smallest x such that N / 2^x < 1 OR 2^x > N
 * x = log(N)
 *
 * O(log N)
 */

int a = 0,
i = N;
while (i > 0) {
  a += i;
  i /= 2;
}

/**
 *
 * In the first iteration, the j loop runs N times.
 * In the second iteration, the j loop runs N / 2 times.
 * In the ith iteration, the j loop runs N / 2^i times.
 * So, the total number of runs of loop = N + N / 2 + N / 4 + … 1
 * = N * ( 1 + 1/2 + 1/4 + 1/8 + … ) < 2 * N
 *
 *  O(N)
 */

int count = 0;
for (int i = N; i > 0; i /= 2) {
  for (int j = 0; j < i; j++) {
    count += 1;
  }
}
