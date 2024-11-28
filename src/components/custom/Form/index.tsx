import React, { useRef } from "react";
import Button from "../../base/FormButton";
import FormInput from "../../base/FormInput";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="">
      <form
        className="input-container"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <FormInput
          ref={inputRef}
          className="form-item input-form"
          placeholder="Enter a task"
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button type="submit" name="Add" disabled={false} onClick={handleAdd} />
      </form>
    </div>
  );
};

export default Form;
