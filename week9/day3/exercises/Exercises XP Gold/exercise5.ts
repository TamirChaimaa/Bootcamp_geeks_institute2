interface Item<T> {
    value: T;
}

class Queue<T extends Item<any>> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.shift();
    }
}

const numberQueue = new Queue<Item<number>>();
numberQueue.add({ value: 10 });
numberQueue.add({ value: 20 });
console.log(numberQueue.remove());

const stringQueue = new Queue<Item<string>>();
stringQueue.add({ value: "apple" });
stringQueue.add({ value: "banana" });
console.log(stringQueue.remove());
