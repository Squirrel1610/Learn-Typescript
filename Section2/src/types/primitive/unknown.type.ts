function multiByTwo1(number: unknown) {
    if(typeof number === "number"){
        return number * 2;
    }
    return "Please provide a valid number";
}

console.log(multiByTwo1(2));
console.log(multiByTwo1("string"));

