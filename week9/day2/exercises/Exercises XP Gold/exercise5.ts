interface Shape {
    color : string;
    getArea() : number;
}

interface Rectangle extends Shape {
    readonly width : number;
    readonly height : number;
    getPerimeter() : number;
}

class MyRectangle implements Rectangle {
    color: string;
    readonly width: number;
    readonly height: number;

    constructor (color : string , width :number , height : number) {
        this.color = color;
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const rect = new MyRectangle ('red' , 11 , 17)
console.log(rect.color);
console.log(rect.getArea());
console.log(rect.getPerimeter());


