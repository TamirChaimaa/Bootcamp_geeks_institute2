type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
}

type PersonWithAddress = Person & Address;

const personWithAddress : PersonWithAddress = {
    name : 'imane',
    age : 21,
    street : '123 IDK',
    city : 'casablanca'
}

console.log(`${personWithAddress.name} lives at ${personWithAddress.street}, ${personWithAddress.city}.`);
