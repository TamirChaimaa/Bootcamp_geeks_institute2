var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.add = function (item) {
        this.items.push(item);
    };
    Queue.prototype.remove = function () {
        return this.items.shift();
    };
    return Queue;
}());
var numberQueue = new Queue();
numberQueue.add({ value: 10 });
numberQueue.add({ value: 20 });
console.log(numberQueue.remove());
var stringQueue = new Queue();
stringQueue.add({ value: "apple" });
stringQueue.add({ value: "banana" });
console.log(stringQueue.remove());
