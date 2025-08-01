var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.calculateBonus = function () {
        return this.salary * 0.1;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getSalaryDetails = function () {
        var bonus = this.calculateBonus();
        return "Salary: ".concat(this.salary, ", Bonus: ").concat(bonus);
    };
    return Manager;
}(Employee));
var ExecutiveManager = /** @class */ (function (_super) {
    __extends(ExecutiveManager, _super);
    function ExecutiveManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecutiveManager.prototype.approveBudget = function () {
        return "Budget approved";
    };
    return ExecutiveManager;
}(Manager));
var exec = new ExecutiveManager("Alice", 40, 100000);
console.log(exec.name);
console.log(exec.getSalaryDetails());
console.log(exec.approveBudget());
console.log(exec.age);
console.log(exec.salary);
exec.calculateBonus();
