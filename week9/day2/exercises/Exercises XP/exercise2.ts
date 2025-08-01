class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.price = price;
        this.name = name;
    }

    public getProductInfo(): string {
        return `Product : ${this.name}, Price : $${this.price}`
    }
}

const p1 = new Product (102 , 'TV' , 10999)
console.log(p1.getProductInfo());

p1.id = 202;
