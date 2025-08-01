function castToType<T>(value: any, constructorFn: { new(value: any): T } | ((value: any) => T)): T {
    return constructorFn(value);
}

const strNumber = "123";
const num = castToType<number>(strNumber, Number);
console.log(num);
console.log(typeof num);

const strBool = "true";
const bool = castToType<boolean>(strBool, Boolean);
console.log(bool);
console.log(typeof bool); 
