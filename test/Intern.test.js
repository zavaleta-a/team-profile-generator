// extends from Employee
// will have scool, getSchool(), getRole()
// getRole() will return Intern

const Intern = require("../lib/Intern");

it("creates school name", () => {
  const testSchool = "UTSA";
  const newIntern = new Intern("foobar", 1, "mail@email.com", testSchool);
  expect(newIntern.school).toBe(testSchool);
  console.log("School set!");
});
it("can get school name through getSchool()", () => {
  const testSchool = "UTSA";
  const newIntern = new Intern("foobar", 1, "mail@email.com", testSchool);
  expect(newInter.getSchool()).toEqual(testSchool);
  console.log("School retrieved!");
});
it("retunrs Intern using getRole()", () => {
  const testRole = "Intern";
  const newIntern = new Intern("foobar", 1, "mail@email.com", "UTSA");
  expect(newIntern.getRole()).toBe(testRole);
  console.log("Role added!");
});
