type AirPlane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer
}

type Caterer = {
    name: string;
    address: string;
    phone: number;
}

const airplane: AirPlane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 1452125
    }
}