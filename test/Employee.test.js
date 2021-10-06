//See act 11

const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("creates an employee object", () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toEqual("object");
  });
//   console.log("Employee created!");
  it("can create a name", () => {
    const name = "Manny";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toEqual(name);
  });
//   console.log("Name created!");
  it("can create an id", () => {
    const testId = 100;
    const newEmployee = new Employee("foobar", testId);
    expect(newEmployee.id).toEqual(testId);
  });
//   console.log("Id created!");
  it("can create an email", () => {
    const testEmail = "mail@email.com";
    const newEmployee = new Employee("foobar", 101, testEmail);
    expect(newEmployee.email).toEqual(testEmail);
  });
  //console.log("Email created!");
});
