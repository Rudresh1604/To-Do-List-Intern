import React, { useState } from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  Todo: Todo;
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ Todo, allTask, setAllTask }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>(Todo.name);
  const handleDone = (id: number) => {
    setAllTask(
      allTask.map((task) =>
        task.id === id ? { ...task, isFinish: !task.isFinish } : task
      )
    );
  };
  const handleDelete = (id: number) => {
    setAllTask(allTask.filter((task) => task.id !== id));
  };
  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setAllTask(
      allTask.map((task) =>
        task.id === id ? { ...task, name: editName } : task
      )
    );
    setIsEdit(false);
  };

  return (
    <form className="todo-single" onSubmit={(e) => handleEdit(e, Todo.id)}>
      {isEdit ? (
        <input
          className="edit-input"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
      ) : (
        <span className="todo-single-head">{Todo.name}</span>
      )}

      <div className="todo-single-body">
        <span
          className="icon"
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(Todo.id)}>
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(Todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
