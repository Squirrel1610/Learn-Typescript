"use strict";
// enum Manufacturers {
//     boeing = "boeing",
//     airbus = "airbus"
// }
// interface AircraftI {
//     _aircraftModel: string,
//     prototype?: any,
//     origin?: string,
//     manufacturer?: string,
//     type?: string,
//     airbusMethod?: () => void,
//     boeingMethod?: () => void
// }
// //class decorator define
// function AircraftManufacturer(manufacturer: Manufacturers) {
//     return (contructor: Function) => {
//         if(manufacturer == Manufacturers.airbus) {
//             contructor.prototype.origin = 'United States Of America';
//             contructor.prototype.manufacturer = Manufacturers.airbus;
//             contructor.prototype.type = 'Jet';
//             contructor.prototype.airbusMethod = () => {
//                 console.log('Function performed by Airbus');
//             }
//         }else {
//             contructor.prototype.origin = 'France';
//             contructor.prototype.manufacturer = Manufacturers.boeing;
//             contructor.prototype.type = 'Helicopter';
//             contructor.prototype.boeingMethod = () => {
//                 console.log('Function performed by Boeing');
//             }
//         }
//     } 
// }
// @AircraftManufacturer(Manufacturers.airbus)
// class Airplane implements AircraftI {
//     constructor( public _aircraftModel: string, private pilot: string ) {}
//     public pilotName() {
//         console.log(this.pilot);
//     };
//     public get aircraftModel() {
//         return this._aircraftModel;
//     }
// }
// const airplane: AircraftI = new Airplane("Airbus A380", "Thinh");
// console.log(airplane.manufacturer);
// airplane.airbusMethod
//   ? airplane.airbusMethod()
//   : console.log('Method Does not Exist');
