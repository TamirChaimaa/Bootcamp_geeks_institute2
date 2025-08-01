class Animal {
    public name : string;

    constructor (name : string) {
        this.name = name;
    }

    public makeSound() : string {
        return 'Some generic animal sound';
    }
}

class Dog extends Animal {
    public makeSound(): string {
        return 'bark'
    }
}

const myDog = new Dog ('bob');

console.log(myDog.name);
console.log(myDog.makeSound());

