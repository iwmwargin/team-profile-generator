const Manager = require("../lib/Manager");

test("Get Office number via constructor", () => {
  const officeNum = "4";
  const a = new Manager("Eric", 1, "turtle@turtle.com", "4");
  expect(a.officeNum).toBe(officeNum);
});

test("Get office number via getOffice()", () => {
    const officeNum = "4";
    const a = new Manager("iwmwargin", 1, "scrim@scram.com", "4");
    expect(a.getOffice()).toBe(officeNum);
  });

test("getRole() should return \"Manager\"", () => {
  const manager = "Manager";
  const a = new Manager("Eric", 1, "test@test.com", "Manager");
  expect(a.getRole()).toBe("Manager");
});