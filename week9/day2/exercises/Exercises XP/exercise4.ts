class Calculator {
    static add (a : number , b:number) : number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b
    }
}

console.log(Calculator.add(5, 19));
console.log(Calculator.subtract (50 , 30));

