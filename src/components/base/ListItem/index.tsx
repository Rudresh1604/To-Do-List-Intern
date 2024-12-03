import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../../model";
import FormInput from "../FormInput";
import FormIcon from "../Icon";

interface ListItemProps {
  Todo: Todo;
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListItem: React.FC<ListItemProps> = ({ Todo, allTask, setAllTask }) => {
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
  useEffect(() => {
    console.log(allTask);
  }, [allTask]);

  return (
    <form className="todo-single" onSubmit={(e) => handleEdit(e, Todo.id)}>
      {isEdit ? (
        <FormInput
          type="text"
          className="edit-input"
          value={editName}
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
      ) : (
        <span className="todo-single-head">{Todo.name}</span>
      )}

      <div className="todo-single-body">
        <FormIcon
          className="icon"
          onClick={() => setIsEdit(!isEdit)}
          Icon={<AiFillEdit />}
        />
        <FormIcon
          className="icon"
          onClick={() => handleDelete(Todo.id)}
          Icon={<AiFillDelete />}
        />
        <FormIcon
          className="icon"
          onClick={() => {
            handleDone(Todo.id);
          }}
          Icon={<MdDone />}
        />
      </div>
    </form>
  );
};

export default ListItem;
