interface Operation {
    perform(a: number, b: number): number;
}

class Addition implements Operation {
    perform(a: number, b: number): number {
        return a + b;
    }
}

class Multiplication implements Operation {
    perform(a: number, b: number): number {
        return a * b;
    }
}

const add = new Addition();
const multiply = new Multiplication();

console.log(add.perform(11, 17));
console.log(multiply.perform(11, 17));


