type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

type Data = User | Product | Order

function isUser(item:Data)  : item is User{
    return item.type === 'user';
}

function isProduct(item:Data)  : item is Product{
    return item.type === 'product';
}

function isOrder(item:Data)  : item is Order{
    return item.type === 'order';
}


function handleData(data:Data[]) : string[] {
    return data.map(item => {
        if (isUser(item)) {
            return `Hello, ${item.name}! u are ${item.age} years old`;
        }else if(isProduct(item)){
            return `Product ID: ${item.id}, Price: $${item.price}`;
        }else if(isOrder(item)){
            return `Order ID: ${item.orderId}, Amount: $${item.amount}`
        }else{
            return 'Unknown data type'
        }
    })   
}


const mixedData : Data[] = [
    {type : 'user', name : 'imane', age : 21},
    {type : 'product', id : 101, price : 17.11},
    {type : 'order', orderId : 'ord-001', amount : 30.01},
    {type : 'user', name : 'sanaa', age : 22},
]

const result = handleData(mixedData)
console.log(result.join('\n'));
