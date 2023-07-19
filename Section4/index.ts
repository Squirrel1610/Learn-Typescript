//Generic

/*
type Filter = {
    <T> (array: T[], predicate: (item: T) => boolean ) : T[]; 
}

const filter: Filter = (array, predicate) => {
    let result = [];
    for(let i = 0; i < array.length ; i++) {
        let item = array[i];
        if(predicate(item)) {
            result.push(item);
        }
    }

    return result;
}

let numbers = [1,2,3,4,5,6];
let divisibleByTwo = (num: number): boolean => {
    return num % 2 === 0;
}
console.log(filter(numbers, divisibleByTwo));


let animals = ["cat", "dog", "horse"];
let isCat = (animal: string): boolean => {
    return animal === "cat";
}
console.log(filter(animals, isCat));
*/

type MapType = {
    <T, U> (array: T[], fnMap: (item: T) => U ) : U[]
}

const map: MapType = (arr, fnMap) => {
    let result = [];
    for(let i = 0; i< arr.length; i++) { 
        result[i] = fnMap(arr[i]);
    }
    return result;
}

let numbers = [1,2,3,4,5,6];
let multiByTwo = (num: number) => {
    return num * 2;
}
console.log(map(numbers, multiByTwo));
