//See act 11
const Employee = require("../lib/Employee");

describe ("Employee", () => {
    it("creates an employee object", () => {
        const newEmployee = new Employee ();
        expect(typeof(newEmployee)).toBe("object");
    });
    it("can create a name", () => {
        const name = "Manny";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe(name);
    }
});