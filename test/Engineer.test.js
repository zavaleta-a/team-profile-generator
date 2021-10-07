// extends from Employee
// will have github username, getGithub(),
// getRole() will return Engineer

const Engineer = require("../lib/Engineer");

it("creates GitHub username", () => {
  const testGitHub = "GitUsername";
  const newEngineer = new Engineer("foobar", 1, "mail@email.com", testGitHub);
  expect(newEngineer.github).toEqual(testGitHub);
  console.log("created GH username!");
});
it("gets GitHub username using getGithub()", () => {
  const testGitHubUser = "GitHub Username";
  const newEngineer = new Engineer(
    "foobar",
    1,
    "mail@email.com",
    testGitHubUser
  );
  expect(newEngineer.getGithub()).toEqual(testGitHubUser);
  console.log("got username!");
});
it("returns Engineer through getRole()", () => {
  const testRole = "Engineer";
  const newEngineer = new Engineer(
    "foobar",
    1,
    "mail@email.com",
    "GitHubUsername"
  );
  expect(newEngineer.getRole()).toEqual(testRole);
  console.log("Role added!");
});
