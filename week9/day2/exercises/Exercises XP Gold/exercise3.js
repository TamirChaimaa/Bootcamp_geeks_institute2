var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.circumference = function (radius) {
        return 2 * MathUtils.PI * radius;
    };
    MathUtils.PI = 3.14159;
    return MathUtils;
}());
var result = MathUtils.circumference(17);
console.log(result);
