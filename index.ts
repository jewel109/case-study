
interface IEmploy {
  calculateSalary(): number
}
class Employ implements IEmploy {
  private hour: number

  constructor(hour: number) {
    this.hour = hour
  }
  calculateSalary() {
    console.log("calculating salary for regular Employ for " + this.hour)
    return this.hour
  }
}

class ContractEmploy implements IEmploy {
  private fixedRate: number
  constructor(fixedRate: number) {
    this.fixedRate = fixedRate
  }
  calculateSalary() {
    console.log("calculating salary for ContractEmploy on fixedRate " + this.fixedRate)
    return this.fixedRate
  }
}

type EmployType = "regular" | "contract"
class Salary {

  employType?: EmployType
  hours?: number
  fixedRate?: number
  salary?: number


  constructor(employType: EmployType, secondArg: number) {
    if (this.employType == "regular") {
      this.hours = secondArg
    } else if (this.employType == "contract") {
      this.fixedRate = secondArg
    }
    else {
      throw new Error("Invalid employType provided")
    }

  }

  generateSalary(): number {
    if (this.employType == "regular") {
      return this.salary = new Employ(2).calculateSalary()
    } else {
      return this.salary = new ContractEmploy(4).calculateSalary()

    }
  }
}

const salary = new Salary("regular", 2)

const salary2 = new Salary("contract", 40)

