import { FC } from "react";
import Form from "../../components/custom/Form";
import { Todo } from "../../components/model";
import List from "../../components/custom/List";

interface HomeViewProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  handleLogout?: (e: React.FormEvent) => void;
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const HomeView: FC<HomeViewProps> = ({
  todo,
  allTask,
  setAllTask,
  setTodo,
  handleLogout,
  handleAdd,
}) => {
  return (
    <div>
      <div className="flex ">
        <h1 className="text-4xl text-center">To Do List</h1>
        <span className="text-2xl m-2" onClick={handleLogout}>
          Logout
        </span>
      </div>
      <div>
        <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
      <div>
        <List allTask={allTask} setAllTask={setAllTask} />
      </div>
    </div>
  );
};

export default HomeView;
