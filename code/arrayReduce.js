const nums = [1,2,3,4,5,6,7,8,9,10];

const incrementedNums = nums.map((x) => x + 1);

const numSum = nums.reduce((x,y) => x + y, 0);

// how it works
// first call -> x = initial value (0); y = nums[0] (1)
// 0 + 1 = 1
// second call -> x = acccumulator (1); y = nums[1] (2)
// 1 + 2 = 3
// third call -> x = accumulator (3); y = nums[2] (3)
// 3 + 3 = 6
