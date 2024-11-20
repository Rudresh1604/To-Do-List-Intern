import "./App.css";

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

function App() {
  return (
    <>
      <h1>Hello IN TS</h1>
    </>
  );
}

export default App;
