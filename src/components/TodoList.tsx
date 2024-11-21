import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";

interface Props {
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ allTask, setAllTask }) => {
  return (
    <div className="todos">
      {allTask?.map((task) =>
        task.isFinish ? null : (
          <SingleTodo
            key={task.id}
            Todo={task}
            allTask={allTask}
            setAllTask={setAllTask}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
