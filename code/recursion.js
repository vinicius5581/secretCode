const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const add = (x,y) => x + y;
const sum = ([x, y,  ...ys]) => {
    if (x === undefined) {
        return 0;
    } else if (y === undefined) {
        return x;
    } else if (ys.length === 0) {
      return add(x, y);
    } else {
      return add(x, sum([y, ...ys]));
    }
};
const result = sum(nums);
