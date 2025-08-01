class Device {
    readonly serialNumber: string;

    constructor(serialNumber: string) {
        this.serialNumber = serialNumber
    }

    getDeviceInfo(): string {
        return `Serial Number: ${this.serialNumber}`;
    }
}

class Laptop extends Device {
    model: string;
    price: number;

    constructor (serialNumber : string ,model: string, price: number ){
        super (serialNumber);
        this.model = model;
        this.price = price;
    }

    getDeviceInfo(): string {
        return `${super.getDeviceInfo()}, Model: ${this.model}, Price: $${this.price}`
    }
}

const mine = new Laptop ('SN123456' , 'HP Elite BOOK' , 2600)
console.log(mine.getDeviceInfo());

mine.model = 'MacBook Pro';
mine.price = 10000;

console.log(mine.getDeviceInfo());

