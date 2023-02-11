// Interfaces
interface Named {
  readonly name: string;
  outputName?: string; // Optional Property
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}
  greet(phrase: string): void {
    console.log(phrase);
  }
}

let user: Greetable;

user = new Person("Adham", 12);

user.greet("Hi there!");

// Interfaces with Functions
interface AddFn {
  (num1: number, num2s: number): number;
}

let add: AddFn;
add = (num1: number, num2: number): number => {
  return num1 + num2;
};
