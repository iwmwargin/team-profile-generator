const Engineer = require("../lib/Engineer");

test("Get Github name via constructor", () => {
  const gitName = "GitHubUser";
  const a = new Engineer("Eric", 1, "turtle@turtle.com", gitName);
  expect(a.github).toBe(gitName);
});

test("Get GitHub username via getGithub()", () => {
    const user = "GitHubUser";
    const a = new Engineer("iwmwargin", 1, "scrim@scram.com", user);
    expect(a.getGithub()).toBe(user);
  });

test("getRole() should return \"Engineer\"", () => {
  const engineer = "Engineer";
  const a = new Engineer("Eric", 1, "test@test.com", "GitHubUser");
  expect(a.getRole()).toBe(engineer);
});