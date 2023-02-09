class Department {
  // private name: string;
  private employees: string[] = [];
  constructor(private readonly id: string, private name: string) {
    // this.name = name;
  }
  describe(this: Department): void {
    console.log(`Department(${this.id}): ` + this.name);
    // this.id = "p2"; // Invalid code because its readonly
  }
  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
  printEmployeesInformation(): void {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Stephen");
// accounting.employees[2] = "Hossam"; Not the best practice
accounting.printEmployeesInformation();
// console.log(accounting);

const accountingCopy = {
  name: "Gonzalo",
  describe: accounting.describe,
};

accountingCopy.describe.bind(accounting);
// accountingCopy.describe(); // It has to be of type Department to avoid errors
