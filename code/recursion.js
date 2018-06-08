const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const add = (x,y) => x + y;
const sum = ([x, y,  ...ys]) => x === undefined ? 0
    : y === undefined ? 0
    : ys.length === 0 ? add(x,y)
    : add(x, sum([y, ...ys]));
const result = sum(nums);


const words =  ['I', 'know', 'recursion'];
const joinWithSpace = (x,y) => `${x} ${y}`;
const join = ([x, y,  ...ys]) => x === undefined ? ''
    : y === undefined ? x
    : ys.length === 0 ? `${joinWithSpace(x,y)}!`
    : joinWithSpace(x, join([y, ...ys]));


const sentence = join(words);
