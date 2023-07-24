// Class and Inheritance

class Person {
    private testUserAge(age: number){
        if((age > 150) || (age < 0)){
            throw new Error("The age must be within range of (0 - 150)");
        }
    }

    constructor(private _name: string, private _age: number) {
        this.testUserAge(_age);
    };

    public set name(name: string) {
        this._name = name;
    }

    public get name() {
        return this._name;
    }

    public set age(age: number) {
        this.testUserAge(age);
        this._age = age;
    }

    public get age() {
        return this._age;
    }
}

const person = new Person("Thinh", 23);
console.log(person);

