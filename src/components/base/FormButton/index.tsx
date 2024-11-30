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
    <div className="flex justify-center">
      <button
        className={`p-2 px-5 text-base mt-3 rounded border-none cursor-pointer ${className} `}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

// ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-800 hover:-translate-y-1}
export default Button;
