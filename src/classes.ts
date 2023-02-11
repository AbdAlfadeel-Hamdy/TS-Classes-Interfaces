abstract class Department {
  // private name: string;
  protected employees: string[] = [];
  constructor(protected readonly id: string, protected name: string) {
    // this.name = name;
  }
  static createDepartment(name: string) {
    return {
      name,
    };
  }
  // describe(this: Department): void {
  //   console.log(`Department(${this.id}): ` + this.name);
  //   // this.id = "p2"; // Invalid code because its readonly
  // }
  abstract describe(this: Department): void;
  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
  printEmployeesInformation(): void {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

console.log(Department.createDepartment("Tadawi"));
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(this: Department): void {
    console.log("IT Department");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new AccountingDepartment("d1", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No reports found!");
  }
  set mostRecentReport(value: string) {
    if (!value) throw new Error("invalid value!");
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }

  // Overriding
  addEmployee(employee: string): void {
    if (employee === "Max") return;
    this.employees.push(employee);
  }

  describe(this: Department): void {
    console.log("Accounting Department");
  }
}

const it = new ITDepartment("d1", ["Max"]);
it.describe();
it.addEmployee("Max");
it.addEmployee("Stephen");
// accounting.employees[2] = "Hossam"; Not the best practice
it.printEmployeesInformation();
// console.log(accounting);

const accountingCopy = {
  name: "Gonzalo",
  describe: it.describe,
};

accountingCopy.describe.bind(it);
// accountingCopy.describe(); // It has to be of type Department to avoid errors

// const accounting = new AccountingDepartment("d1", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.addReport("Problem");
accounting.printReports();
accounting.mostRecentReport = "End year";
accounting.printReports();

console.log(accounting, accounting2);
