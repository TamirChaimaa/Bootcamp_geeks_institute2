var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.perform = function (a, b) {
        return a + b;
    };
    return Addition;
}());
var Multiplication = /** @class */ (function () {
    function Multiplication() {
    }
    Multiplication.prototype.perform = function (a, b) {
        return a * b;
    };
    return Multiplication;
}());
var add = new Addition();
var multiply = new Multiplication();
console.log(add.perform(11, 17));
console.log(multiply.perform(11, 17));
