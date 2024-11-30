import { FC } from "react";
import Form from "../../components/custom/Form";
import { Todo } from "../../components/model";
import List from "../../components/custom/List";

interface HomeViewProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const HomeView: FC<HomeViewProps> = ({
  todo,
  allTask,
  setAllTask,
  setTodo,
  handleAdd,
}) => {
  return (
    <div>
      <h1>To Do List</h1>
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
