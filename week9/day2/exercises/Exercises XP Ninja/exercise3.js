var AdvancedCalculator = /** @class */ (function () {
    function AdvancedCalculator(a, b) {
        this.a = a;
        this.b = b;
    }
    AdvancedCalculator.prototype.operate = function (operation) {
        return operation(this.a, this.b);
    };
    AdvancedCalculator.prototype.add = function () {
        return this.operate(function (x, y) { return x + y; });
    };
    AdvancedCalculator.prototype.subtract = function () {
        return this.operate(function (x, y) { return x - y; });
    };
    AdvancedCalculator.prototype.multiply = function () {
        return this.operate(function (x, y) { return x * y; });
    };
    return AdvancedCalculator;
}());
var calc = new AdvancedCalculator(11, 17);
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
