"use strict";
// Class and Inheritance
class Person {
    testUserAge(age) {
        if ((age > 150) || (age < 0)) {
            throw new Error("The age must be within range of (0 - 150)");
        }
    }
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.testUserAge(_age);
    }
    ;
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this.testUserAge(age);
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
const person = new Person("Thinh", 23);
person.age = 151;
console.log(person.age);
