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


const strings = ['John', 'Mary', 'Sebastian', 'Isabel'];
const listThings = (acc, val, i) => `${acc}\n${i}. ${val}`}
const listString = strings.reduce(listThings, '');

const arrOfArrs = [
    ['Mike', 'Jordan', 'Frontend'],
    ['Steve', 'Smith', 'Backend'],
    ['Jonny', 'Mendel', 'Fullstack'],
    ['Maxuel', 'Gibson'],
];

const flattened = arrOfArrs.reduce((acc, val) => acc.concat(val));

const makeCSV = arrOfArrs.reduce((acc, val) => `${acc}\n${val[0]}, ${val[1]}`, 'FirstName, LastName');

const makeCSVRow = (acc, val) => `${acc},${val}`;
const makeCSV2 = arrOfArrs.reduce((acc1, val1) => {
    const row = val1.slice(1).reduce(makeCSVRow, val1.slice(0,1));
    return `${acc1}\n${row}`;
}, 'firstName, lastName, Position');
