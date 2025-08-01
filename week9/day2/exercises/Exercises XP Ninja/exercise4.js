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
var Device = /** @class */ (function () {
    function Device(serialNumber) {
        this.serialNumber = serialNumber;
    }
    Device.prototype.getDeviceInfo = function () {
        return "Serial Number: ".concat(this.serialNumber);
    };
    return Device;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(serialNumber, model, price) {
        var _this = _super.call(this, serialNumber) || this;
        _this.model = model;
        _this.price = price;
        return _this;
    }
    Laptop.prototype.getDeviceInfo = function () {
        return "".concat(_super.prototype.getDeviceInfo.call(this), ", Model: ").concat(this.model, ", Price: $").concat(this.price);
    };
    return Laptop;
}(Device));
var mine = new Laptop('SN123456', 'HP Elite BOOK', 2600);
console.log(mine.getDeviceInfo());
mine.model = 'MacBook Pro';
mine.price = 10000;
console.log(mine.getDeviceInfo());
