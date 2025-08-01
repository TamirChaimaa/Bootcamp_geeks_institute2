class Shape {
    static totalShapes: number = 0;

    constructor() {
        Shape.totalShapes++;
    }

    static getType(): string {
        return "Shape";
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    static getType(): string {
        return "Circle";
    }
}

class Square extends Shape {
    sideLength: number;

    constructor (sideLength: number) {
        super();
        this.sideLength = sideLength;
    }

    area() : number {
        return this.sideLength * this.sideLength
    }

    static getType(): string {
        return 'Square'
    }
}

const circle1 = new Circle(11);
const square1 = new Square(17);

console.log(Circle.getType());
console.log(Square.getType());
console.log(Shape.getType());

console.log(circle1.area());
console.log(square1.area());

console.log(Shape.totalShapes);






