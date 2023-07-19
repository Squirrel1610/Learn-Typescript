//Declare functions 

/*
function intro(name: string, age: number): string {
    return `My name is ${name} and age is ${age}`;
}

const intro2 = function (name: string, age: number): string {
    return `My name is ${name} and age is ${age}`;
}

const intro3 = (name: string, age: number): string => `My name is ${name} and age is ${age}`;
console.log(intro3("Thinh", 22));
*/

//////////////////////////////////////

//Default and optional params in function

/*
function intro(name: string, age: number = 22, country?: string): string {
    if(country) {
        return `My name is ${name} and age is ${age} and I live in ${country}`;
    }
    return `My name is ${name} and age is ${age}`;
}

console.log(intro("Thinh", 22, "Vietnam"));
*/

//////////////////////////////////////

//Custom params and return types

/*
enum ageUnit {
    years = "years",
    months = "months",
  }
  
  type Person = {
    name: string;
    age: number;
    ageUnit: ageUnit;
    country: string;
    greet: (greeting: string) => string;
  };
  
  let person: Person = {
    name: "Scott",
    age: 30,
    ageUnit: ageUnit.years,
    country: "USA",
    greet: (greeting) => {
      return `${greeting} ${person.name}`;
    },
  };
  
  function convertAgeToMonths(person: Person): Person {
    person.age = person.age * 12;
    person.ageUnit = ageUnit.months;
    return person;
  }
  
  console.log(convertAgeToMonths(person));
  console.log(person.greet("Good Morning"));
*/

//////////////////////////////////////

//Function Overloading and using same function with difference params

type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    destination: string;
  };
  
  type Reserve = {
    (
      departureDate: Date,
      returnDate: Date,
      departingFrom: string,
      destination: string
    ): Reservation | never;
    (departureDate: Date, departingFrom: string, destination: string):
      | Reservation
      | never;
  };
  
  const reserve: Reserve = (
    departureDate: Date,
    returnDateOrDepartingFrom: Date | string,
    departingFromOrDestination: string,
    destination?: string
  ) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
      return {
        departureDate: departureDate,
        returnDate: returnDateOrDepartingFrom,
        departingFrom: departingFromOrDestination,
        destination: destination,
      };
    } else if (typeof returnDateOrDepartingFrom === "string") {
      return {
        departureDate: departureDate,
        departingFrom: returnDateOrDepartingFrom,
        destination: departingFromOrDestination,
      };
    }
    throw new Error("Please provide valid details to reserve a ticket");
  };
  
  console.log(reserve(new Date(), new Date(), "New York", "Washington"));
  console.log(reserve(new Date(), "New York", "Washington"));