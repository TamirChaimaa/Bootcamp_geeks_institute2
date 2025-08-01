class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    get(index: number): T {
        return this.items[index] as T;
    }

    getAll(): T[] {
        return this.items;
    }
}

type Product = {
    id: number;
    name: string;
};

const productRepo = new Repository<Product>();

productRepo.add({ id: 1, name: "Shirt" });
productRepo.add({ id: 2, name: "Shoes" });

const product = productRepo.get(1);
console.log("Product:", product.name); 

console.log("All Products:", productRepo.getAll());
