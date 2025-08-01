var Container = /** @class */ (function () {
    function Container() {
        this.items = [];
    }
    Container.prototype.add = function (item) {
        this.items.push(item);
    };
    Container.prototype.remove = function (index) {
        this.items.splice(index, 1);
    };
    Container.prototype.list = function () {
        return this.items;
    };
    return Container;
}());
var userContainer = new Container();
userContainer.add({ id: 1, createdAt: new Date(), name: "Alice" });
userContainer.add({ id: 2, createdAt: new Date(), name: "Bob" });
console.log("All users:", userContainer.list());
userContainer.remove(0);
console.log("After removal:", userContainer.list());
