var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.price = price;
        this.name = name;
    }
    Product.prototype.getProductInfo = function () {
        return "Product : ".concat(this.name, ", Price : $").concat(this.price);
    };
    return Product;
}());
var p1 = new Product(102, 'TV', 10999);
console.log(p1.getProductInfo());
p1.id = 202;
