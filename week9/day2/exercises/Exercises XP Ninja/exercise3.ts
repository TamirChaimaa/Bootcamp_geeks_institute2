interface Calculator {
    a: number;
    b: number;
    operate(operation: (x: number, y: number) => number): number;
}

class AdvancedCalculator implements Calculator {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    operate(operation: (x: number, y: number) => number): number {
        return operation(this.a, this.b)
    }

    add(): number {
        return this.operate((x, y) => x + y)
    }

    subtract(): number {
        return this.operate((x, y) => x - y);
    }

    multiply(): number {
        return this.operate((x, y) => x * y);
    }
}

const calc = new AdvancedCalculator (11, 17);

console.log(calc.add());
console.log(calc.subtract()); 
console.log(calc.multiply()); 
