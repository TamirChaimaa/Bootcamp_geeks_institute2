function formatInput(input) {
    var str = input.toString();
    var formatted = "\"".concat(str, "\"");
    return formatted;
}
console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput({ toString: function () { return "custom object"; } }));
console.log(formatInput("hello"));
