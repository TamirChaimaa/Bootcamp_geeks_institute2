var Employee = /** @class */ (function () {
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "Name : ".concat(this.name, ", Position : ").concat(this.position);
    };
    return Employee;
}());
var emp1 = new Employee("Alice", 50000, "Developer", "Engineering");
console.log(emp1.getEmployeeInfo());
