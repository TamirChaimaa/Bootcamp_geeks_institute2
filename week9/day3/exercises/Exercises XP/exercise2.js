function describeValue(value) {
    if (typeof value === "number") {
        return 'this is a number';
    }
    else if (typeof value === 'string') {
        return 'this is a string';
    }
    else {
        return 'unknown type';
    }
}
console.log(describeValue(17));
console.log(describeValue("hello"));
