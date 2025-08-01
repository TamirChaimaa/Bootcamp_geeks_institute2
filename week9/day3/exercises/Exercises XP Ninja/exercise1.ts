interface Identifiable {
    id: number;
}

interface Timestamped {
    createdAt: Date;
}

class Container<T extends Identifiable & Timestamped> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(index: number): void {
        this.items.splice(index, 1);
    }

    list(): T[] {
        return this.items;
    }
}

type User = Identifiable & Timestamped & {
    name: string;
};

const userContainer = new Container<User>();

userContainer.add({ id: 1, createdAt: new Date(), name: "Alice" });
userContainer.add({ id: 2, createdAt: new Date(), name: "Bob" });

console.log("All users:", userContainer.list());

userContainer.remove(0);

console.log("After removal:", userContainer.list());
