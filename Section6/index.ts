//Abstract class

/*
type Holidays = {
    date: Date,
    reason: string
}[];

abstract class Department {
    protected abstract holidays: Holidays;
    
    protected constructor(protected name: string) {};

    public addHolidays(holidays: Holidays) {
        if (Array.isArray(holidays)) {
          for (const holiday of holidays) {
            this.holidays.push(holiday);
          }
        }
    };

    public abstract printHolidays(): void;
}

class ItDepartment extends Department {
    protected holidays: Holidays = [];

    constructor() {
        super("IT Department");
    }
    
    public printHolidays(): void {
        if(this.holidays.length == 0 ){
            return console.log("There is no holidays");
        }
        console.log(`${this.name} Holidays`);
        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);           
        })
    }
}

const itHolidays = [
    {
        date: new Date(2023, 6, 28),
        reason: "Company Trip"
    }
];

const itDepartment = new ItDepartment();
itDepartment.addHolidays(itHolidays);
itDepartment.printHolidays();
*/

///////////////////////////////////////////

//Interface inheriting multiple interfaces

/*
enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor"
};

interface Role {
    role: Roles;
}

enum PermissionsList { 
    read = "read",
    write = "write"
}

interface UserPermissions {
    premissions: PermissionsList[]
}

interface User {
    name: string,
    email: string,
}

interface Admin extends User, Role, UserPermissions {
    numOfUsersReporting: number
}

const admin: Admin = {
    name: "Thinh",
    email: "thinh@gmail.com",
    role: Roles.admin,
    premissions: [ PermissionsList.read, PermissionsList.write ],
    numOfUsersReporting: 1
}
*/

///////////////////////////////////////////

//Interface with object and generic

/*
enum Types {
    car = "car",
    truck = "truck",
    motor = "motor"
};

enum Brands {
    Honda = "Honda",
    KIA = "KIA",
    Vinfast = "Vinfast"
};

enum Colors {
    black = "black",
    white = "white"
};

interface AutoMobile<Type, Brand, Color> {
    type: Type,
    brand: Brand,
    color: Color[],
    description: string
}


const honda: AutoMobile<Types, Brands, Colors> = {
    type: Types.motor,
    brand: Brands.Honda,
    color: [Colors.black, Colors.white],
    description: "This is honda"
}

const kiaMorning: AutoMobile<Types, Brands, number> = {
    type: Types.car,
    brand: Brands.KIA,
    color: [1, 2],
    description: "This is KIA Morning"
}
*/

///////////////////////////////////////////

//Interface with class

enum Types {
    car = "car",
    truck = "truck",
    motor = "motor"
};

enum Brands {
    Honda = "Honda",
    KIA = "KIA",
    Vinfast = "Vinfast"
};

enum Colors {
    black = "black",
    white = "white"
};

interface AutoMobile<Type, Brand, Colors> {
    type: Type,
    brand: Brand,
    colors: Colors[],
    description: string
};

interface ServiceVehicle {
    capacity: number
}

class Car implements AutoMobile<Types, Brands, Colors>, ServiceVehicle {
    public type = Types.car;

    constructor(public brand: Brands, public colors: Colors[], public description: string, public capacity: number) {};
}

const vinfastTaxi = new Car(Brands.Vinfast, [Colors.white], "new Vinfast car", 4);
console.log(vinfastTaxi);




