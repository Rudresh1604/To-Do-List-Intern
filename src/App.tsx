import { useState } from "react";
import "./App.css";
import { Todo } from "./components/model";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>

      <HomePage />
    </div>
  );
}

export default App;
