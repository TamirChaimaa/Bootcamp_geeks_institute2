function formatInput<T extends { toString(): string }>(input: T): string {
    const str = input.toString() as string; 
    const formatted = `"${str}"`;          
    return formatted;
}


console.log(formatInput(123));           
console.log(formatInput(true));          
console.log(formatInput({ toString: () => "custom object" }));
console.log(formatInput("hello"));   
