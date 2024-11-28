import React, { FC } from "react";
import { Todo } from "../../model";
import ListItem from "../../base/ListItem";

interface ListProps {
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const List: FC<ListProps> = ({ allTask, setAllTask }) => {
  return (
    <div className="todos">
      {allTask?.map((task) =>
        task.isFinish ? null : (
          <ListItem
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

export default List;
