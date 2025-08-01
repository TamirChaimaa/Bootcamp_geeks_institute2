function isUser(item) {
    return item.type === 'user';
}
function isProduct(item) {
    return item.type === 'product';
}
function isOrder(item) {
    return item.type === 'order';
}
function handleData(data) {
    return data.map(function (item) {
        if (isUser(item)) {
            return "Hello, ".concat(item.name, "! u are ").concat(item.age, " years old");
        }
        else if (isProduct(item)) {
            return "Product ID: ".concat(item.id, ", Price: $").concat(item.price);
        }
        else if (isOrder(item)) {
            return "Order ID: ".concat(item.orderId, ", Amount: $").concat(item.amount);
        }
        else {
            return 'Unknown data type';
        }
    });
}
var mixedData = [
    { type: 'user', name: 'imane', age: 21 },
    { type: 'product', id: 101, price: 17.11 },
    { type: 'order', orderId: 'ord-001', amount: 30.01 },
    { type: 'user', name: 'sanaa', age: 22 },
];
var result = handleData(mixedData);
console.log(result.join('\n'));
