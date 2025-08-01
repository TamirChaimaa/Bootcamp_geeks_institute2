type Person = {
    name: string;
    age: number;
};

type Job = {
    position: string;
    department: string;
}

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === 'Manager') {
        return `${employee.name} is a Manager in the ${employee.department} department`
    } else if (employee.position === 'Developer') {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    } else {
        return `${employee.name} holds the position of ${employee.position} in the ${employee.department} department.`;
    }
}


const emp1: Employee = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "Sales"
};

const emp2: Employee = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "Engineering"
};

const emp3: Employee = {
    name: "Eve",
    age: 40,
    position: "HR",
    department: "Human Resources"
};

console.log(describeEmployee(emp1));  
console.log(describeEmployee(emp2)); 
console.log(describeEmployee(emp3)); 

