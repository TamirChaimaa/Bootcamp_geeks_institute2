var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarDetails = function () {
        return "Make : ".concat(this.make, ", Model : ").concat(this.model, ", Year : ").concat(this.year);
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarDetails());
myCar.make = "Honda";
myCar.model = "Civic";
