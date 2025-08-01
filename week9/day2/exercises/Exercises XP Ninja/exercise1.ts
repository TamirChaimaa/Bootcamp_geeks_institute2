class Employee {
    public name : string;
    private age : number;
    protected salary : number;

    constructor (name : string , age : number , salary : number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    protected calculateBonus() : number {
        return this.salary * 0.1;
    }
}

class Manager extends Employee {
    getSalaryDetails() : string {
        const bonus = this.calculateBonus();
        return `Salary: ${this.salary}, Bonus: ${bonus}`
    }
}

class ExecutiveManager extends Manager {
    approveBudget(): string {
        return "Budget approved";
    }
}

const exec = new ExecutiveManager("Alice", 40, 100000);
console.log(exec.name);
console.log(exec.getSalaryDetails());
console.log(exec.approveBudget());

console.log(exec.age);    
console.log(exec.salary);   
exec.calculateBonus(); 



