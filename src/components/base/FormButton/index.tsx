import React, { FC } from "react";

interface ButtonProps {
  className?: string;
  type: string;
  onClick: (e: React.FormEvent) => void;
  disabled?: boolean;
  name: string;
}

const Button: FC<ButtonProps> = ({
  className,
  type,
  name,
  onClick,
  disabled,
}) => {
  return (
    <div>
      <button
        className={`button form-item-button ${className}`}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
