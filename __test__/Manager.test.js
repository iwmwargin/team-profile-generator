const Manager = require("../lib/Manager");

test("Get school name via constructor", () => {
  const school = "J&W";
  const a = new Manager("Eric", 1, "turtle@turtle.com", school);
  expect(a.school).toBe(school);
});

test("Get School username via getSchool()", () => {
    const school = "J&W";
    const a = new Manager("iwmwargin", 1, "scrim@scram.com", school);
    expect(a.getSchool()).toBe(school);
  });

test("getRole() should return \"Manager\"", () => {
  const manager = "Manager";
  const a = new Manager("Eric", 1, "test@test.com", "ASU");
  expect(a.getRole()).toBe("Intern");
});