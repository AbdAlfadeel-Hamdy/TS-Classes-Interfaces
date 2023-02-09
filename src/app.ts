class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department): void {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();
console.log(accounting);

const accountingCopy = {
  name: "Gonzalo",
  describe: accounting.describe,
};

accountingCopy.describe.bind(accounting);
accountingCopy.describe();
