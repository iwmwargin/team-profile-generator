const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
       super(name, id, email)
        this.officeNum = officeNum;
        this.role = "Manager"
        
    }
    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.officeNum
    }
}


module.exports = Manager