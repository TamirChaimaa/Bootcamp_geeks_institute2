function castToType(value, constructorFn) {
    return constructorFn(value);
}
var strNumber = "123";
var num = castToType(strNumber, Number);
console.log(num);
console.log(typeof num);
var strBool = "true";
var bool = castToType(strBool, Boolean);
console.log(bool);
console.log(typeof bool);
