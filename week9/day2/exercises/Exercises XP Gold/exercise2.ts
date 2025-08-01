class Car {
    public readonly  make : string;
    private readonly model : string;
    public year : number;

    constructor (make : string , model : string , year :number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarDetails() : string {
        return `Make : ${this.make}, Model : ${this.model}, Year : ${this.year}`
    }
}

const myCar = new Car ("Toyota", "Corolla", 2020)
console.log(myCar.getCarDetails());

myCar.make = "Honda";
myCar.model = "Civic";