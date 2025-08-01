function logLength<T extends { length: number }>(param: T): void {
    console.log(param.length);
}

logLength("Hello");
logLength([10, 20, 30]);


