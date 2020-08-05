"use strict";
function simpleAdd(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    cb(simpleAdd(n1, n2));
}
printResult(simpleAdd(5, 12));
var combineValues;
combineValues = simpleAdd;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});
