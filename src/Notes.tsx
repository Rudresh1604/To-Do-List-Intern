import React from "react";

// define basic variable with datatypes
let isStudent: boolean;
isStudent = true;
console.log(isStudent);

// array of string
let hobby: string[];
hobby = ["apple", "frueit"];
console.log(hobby);

// creating a tuple
let role: [number, string];
role = [1, "Singer"];
console.log(role);

// create a object
type Person = {
  name: string;
  surname?: string;
  // surname is optional field
  age: number;
};

let peson: Person = {
  name: "harry",
  age: 55,
};
console.log(peson);

// union type
let age: string | number;

// ! functions

// * method1
let printname: (name: string) => void;
// if return type is never then it either throw error or will never return
// let printname: (name: string) => never;
let myfun: Function;
myfun = (name: string) => {
  console.log(name);
};
printname = (name: string) => {
  console.log(name);
};
function print(name: string) {
  console.log(name);
}
// arrow function
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

print("Hrllo");
printname("Hello");
myfun("hrllo");

// type can be combined
type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: string;
};

let a: Y = {
  c: "mvp",
  a: "smldv",
  b: 55,
};
console.log(a);

// Combine for interface
interface Person {
  name: string;
  age?: number;
}
interface Employee extends Person {
  salary: number;
}

let p1: Employee = {
  salary: 550,
  name: "XYZ",
};
console.log(p1);

// ! combine interface and type
type P = Person & {
  salary: number;
};
let ti: P = {
  salary: 22,
  name: "my name",
};
console.log(ti);

// to define react functional components
const App: React.FC = () => {
  return (
    <>
      <h1>This support all types for react</h1>
    </>
  );
};

export default function TypeAndInterface() {
  return (
    <div>
      <h1>Type And INter</h1>
    </div>
  );
}
