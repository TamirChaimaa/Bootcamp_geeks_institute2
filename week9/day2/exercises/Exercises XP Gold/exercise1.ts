class Employee {
    protected name : string;
    protected salary : number;

    constructor (name : string , salary : number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() : string {
        return `Name : ${this.name} , Salary : $${this.salary}`
    }
}

class Manager extends Employee {
    public department : string;

    constructor (name : string , salary : number , department : string) {
        super (name , salary);
        this.department = department;
    }

    getDetails() : string {
        return `${super.getDetails()} , Department : ${this.department}`
    }
}

const m1 = new Manager ("Alice", 90000, "Marketing")
console.log(m1.getDetails());

