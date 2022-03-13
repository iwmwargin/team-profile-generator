const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
    test("create an instance of an employee", () => {
        const employee = new Employee();
        expect(employee).toBeInstanceof(Employee);
    })
    test("name property returns correct name", () => {
        const manager = new Manager("Eric");
        const actualManagersName = manager.name;
        const expectedManagersName = "Eric";
        expect(actualManagersName).toBe(expectedManagersName);
    });
});