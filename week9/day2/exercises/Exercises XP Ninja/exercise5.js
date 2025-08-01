var Smartphone = /** @class */ (function () {
    function Smartphone(name, price, warrantyPeriod, discount) {
        this.name = name;
        this.price = price;
        this.warrantyPeriod = warrantyPeriod;
        this.discount = discount;
    }
    Smartphone.prototype.getPriceAfterDiscount = function () {
        if (this.discount) {
            return this.price - (this.price * this.discount) / 100;
        }
        else {
            return this.price;
        }
    };
    return Smartphone;
}());
var phone1 = new Smartphone("Samsung Galaxy Z flip 5", 999, 24, 10);
var phone2 = new Smartphone("Samsung Galaxy S23", 899, 18);
console.log("Phone: ".concat(phone1.name));
console.log("Original Price: $".concat(phone1.price));
console.log("Price after discount: $".concat(phone1.getPriceAfterDiscount()));
console.log("Warranty: ".concat(phone1.warrantyPeriod, " months"));
console.log("--------");
console.log("Phone: ".concat(phone2.name));
console.log("Original Price: $".concat(phone2.price));
console.log("Price after discount: $".concat(phone2.getPriceAfterDiscount())); // no discount
console.log("Warranty: ".concat(phone2.warrantyPeriod, " months"));
