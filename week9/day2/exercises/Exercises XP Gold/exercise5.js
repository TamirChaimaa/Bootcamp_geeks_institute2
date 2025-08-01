var MyRectangle = /** @class */ (function () {
    function MyRectangle(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
    MyRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    MyRectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return MyRectangle;
}());
var rect = new MyRectangle('red', 11, 17);
console.log(rect.color);
console.log(rect.getArea());
console.log(rect.getPerimeter());
