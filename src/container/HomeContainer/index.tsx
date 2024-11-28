import { FC, useState } from "react";
import { Todo } from "../../components/model";
import HomeView from "../../views/HomeView";

const HomeContainer: FC = () => {
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
    <div className="w-full h-full">
      <HomeView
        todo={todo}
        handleAdd={handleAdd}
        setTodo={setTodo}
        allTask={allTask}
        setAllTask={setAllTask}
      />
    </div>
  );
};

export default HomeContainer;
