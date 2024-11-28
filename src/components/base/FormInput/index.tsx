import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

interface FormInputProps {
  type: string;
  placeholder?: string;
  name?: string;
  ref?: React.RefObject<HTMLInputElement>;
  className?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  ref,
  placeholder,
  value,
  className,
  name,
  onChange,
}) => {
  return (
    <div className="">
      <input
        ref={ref}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
