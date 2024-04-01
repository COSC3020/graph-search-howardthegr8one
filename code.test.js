// Looked at a few other student's testing files to double-check my work

const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const test1 = [
    [1, 2],
    [5],
    [3],
    [4]
];
assert(JSON.stringify(depthFirstSearch(test1, 0, 5)) == JSON.stringify([0, 1, 5]));
assert(JSON.stringify(depthFirstSearch(test1, 0, 4)) == JSON.stringify([0, 2, 3, 4]));
assert(JSON.stringify(depthFirstSearch(test1, 0, 8)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(test1, 0, 3)) == JSON.stringify([0, 2, 3]));
assert(JSON.stringify(depthFirstSearch(test1, 0, 2)) == JSON.stringify([0, 2]));

const test2 = [
    [1, 4, 5],
    [2, 3],
    [],
    [5],
    [], 
    []
];
assert(JSON.stringify(depthFirstSearch(test2, 0, 2)) == JSON.stringify([0, 1, 2]));
assert(JSON.stringify(depthFirstSearch(test2, 0, 3)) == JSON.stringify([0, 1, 3]));
assert(JSON.stringify(depthFirstSearch(test2, 0, 4)) == JSON.stringify([0, 4]));
assert(JSON.stringify(depthFirstSearch(test2, 0, 5)) == JSON.stringify([0, 1, 3, 5]));
assert(JSON.stringify(depthFirstSearch(test2, 0, 10)) == JSON.stringify([]));

const test3 = [
    [1], 
    [2], 
    [3], 
    [4], 
    [5]
];
assert(JSON.stringify(depthFirstSearch(test3, 0, 5)) == JSON.stringify([0, 1, 2, 3, 4, 5]));
assert(JSON.stringify(depthFirstSearch(test3, 0, 4)) == JSON.stringify([0, 1, 2, 3, 4]));
assert(JSON.stringify(depthFirstSearch(test3, 0, 3)) == JSON.stringify([0, 1, 2, 3]));
assert(JSON.stringify(depthFirstSearch(test3, 0, 2)) == JSON.stringify([0, 1, 2]));
assert(JSON.stringify(depthFirstSearch(test3, 0, 1)) == JSON.stringify([0, 1]));

const test4 = [];
assert(JSON.stringify(depthFirstSearch(test4, 0, 2)) == JSON.stringify([]));
