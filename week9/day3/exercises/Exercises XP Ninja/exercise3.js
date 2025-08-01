var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.get = function (index) {
        return this.items[index];
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
var productRepo = new Repository();
productRepo.add({ id: 1, name: "Shirt" });
productRepo.add({ id: 2, name: "Shoes" });
var product = productRepo.get(1);
console.log("Product:", product.name);
console.log("All Products:", productRepo.getAll());
