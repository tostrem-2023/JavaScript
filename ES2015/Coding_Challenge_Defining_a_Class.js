class Car {
    constructor (make, year) {
        this.make = make;
        this.year = year;
    };
    ageOfCar (x) {
        return x - this.year;
    }
};

let date = new Date ();
let year = date.getFullYear();

let myCar = new Car ('Ford', 2012);
var ageOfCar = "My car is " + myCar.ageOfCar(year) + " years old.";
console.log(ageOfCar);