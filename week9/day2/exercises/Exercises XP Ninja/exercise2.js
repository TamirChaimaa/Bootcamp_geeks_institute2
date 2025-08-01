var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
        Shape.totalShapes++;
    }
    Shape.getType = function () {
        return "Shape";
    };
    Shape.totalShapes = 0;
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.getType = function () {
        return "Circle";
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength) {
        var _this = _super.call(this) || this;
        _this.sideLength = sideLength;
        return _this;
    }
    Square.prototype.area = function () {
        return this.sideLength * this.sideLength;
    };
    Square.getType = function () {
        return 'Square';
    };
    return Square;
}(Shape));
var circle1 = new Circle(11);
var square1 = new Square(17);
console.log(Circle.getType());
console.log(Square.getType());
console.log(Shape.getType());
console.log(circle1.area());
console.log(square1.area());
console.log(Shape.totalShapes);
