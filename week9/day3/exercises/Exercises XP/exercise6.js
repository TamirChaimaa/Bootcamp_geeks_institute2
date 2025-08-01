function describeEmployee(employee) {
    if (employee.position === 'Manager') {
        return "".concat(employee.name, " is a Manager in the ").concat(employee.department, " department");
    }
    else if (employee.position === 'Developer') {
        return "".concat(employee.name, " is a Developer in the ").concat(employee.department, " department.");
    }
    else {
        return "".concat(employee.name, " holds the position of ").concat(employee.position, " in the ").concat(employee.department, " department.");
    }
}
var emp1 = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "Sales"
};
var emp2 = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "Engineering"
};
var emp3 = {
    name: "Eve",
    age: 40,
    position: "HR",
    department: "Human Resources"
};
console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));
console.log(describeEmployee(emp3));
