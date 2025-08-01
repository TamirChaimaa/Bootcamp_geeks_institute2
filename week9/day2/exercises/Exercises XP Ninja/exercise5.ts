interface Product {
    readonly name: string;
    price: number;
    discount?: number;
}

interface Electronics extends Product {
    warrantyPeriod: number;
}

class Smartphone implements Electronics {
    readonly name: string;
    price: number;
    discount?: number;
    warrantyPeriod: number;

    constructor(name: string, price: number, warrantyPeriod: number, discount?: number) {
        this.name = name;
        this.price = price;
        this.warrantyPeriod = warrantyPeriod;
        this.discount = discount
    }

    getPriceAfterDiscount() : number {
        if (this.discount) {
            return this.price - (this.price * this.discount) / 100;
        }else{
            return this.price
        }
    }

}

const phone1 = new Smartphone("Samsung Galaxy Z flip 5", 999, 24, 10);
const phone2 = new Smartphone("Samsung Galaxy S23", 899, 18);

console.log(`Phone: ${phone1.name}`);
console.log(`Original Price: $${phone1.price}`);
console.log(`Price after discount: $${phone1.getPriceAfterDiscount()}`);
console.log(`Warranty: ${phone1.warrantyPeriod} months`);

console.log("--------");

console.log(`Phone: ${phone2.name}`);
console.log(`Original Price: $${phone2.price}`);
console.log(`Price after discount: $${phone2.getPriceAfterDiscount()}`); // no discount
console.log(`Warranty: ${phone2.warrantyPeriod} months`);
