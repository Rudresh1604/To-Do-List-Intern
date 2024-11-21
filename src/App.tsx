import { useState } from "react";
import "./App.css";
import InputForm from "./components/inputForm";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

function App() {
  const [allTask, setAllTask] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setAllTask([...allTask, { id: Date.now(), name: todo, isFinish: false }]);
    }
    setTodo("");
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList allTask={allTask} setAllTask={setAllTask} />
    </div>
  );
}

export default App;
