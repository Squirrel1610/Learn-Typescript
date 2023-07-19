"use strict";
//Generic
const map = (arr, fnMap) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = fnMap(arr[i]);
    }
    return result;
};
let numbers = [1, 2, 3, 4, 5, 6];
let multiByTwo = (num) => {
    return num * 2;
};
console.log(map(numbers, multiByTwo));
