// extends from Employee
// also needs officeNumber and getRole() returns Manager

const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("creates officeNumber", () => {
    const testOfficeNum = 5551234;
    const newManager = new Manager(
      "foobar",
      1,
      "mail@email.com",
      testOfficeNum
    );
    expect(newManager.officeNumber).toEqual(testOfficeNum);
  });
  console.log("Office number added!");
  it("getRole() should return 'Manager'", () => {
    const testRole = "Manager";
    const newManager = new Manager("foobar", 1, "mail@email.com", 100);
    expect(newManager.getRole()).toEqual(testRole);
  });
  console.log("Role added!");
});
