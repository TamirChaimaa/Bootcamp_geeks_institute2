function getArrayLength<T extends number | string>(arr: T[]): number {
    return arr.length;
}

const numArray = [1, 2, 3, 4];
const strArray = ["a", "b", "c"];

console.log(getArrayLength(numArray)); // 4
console.log(getArrayLength(strArray)); // 3

// const boolArray = [true, false];
// console.log(getArrayLength(boolArray));

