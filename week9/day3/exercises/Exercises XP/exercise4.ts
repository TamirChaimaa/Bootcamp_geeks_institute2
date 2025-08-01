function getFirstElement(arr: (number | string) []) : string {
    const first = arr[0]
    return first.toString();
}

console.log(getFirstElement(["apple", 11, "banana"]));
console.log(getFirstElement([17, "green", 11]));  