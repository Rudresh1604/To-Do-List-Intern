import React, { FC } from "react";

interface FormIconProps {
  className?: string;
  onClick?: (e: React.FormEvent | null) => void;
  text?: string;
  Icon?: any;
}

const FormIcon: FC<FormIconProps> = ({ className, onClick, text, Icon }) => {
  return (
    <>
      <span className={`icon ${className}`} onClick={onClick}>
        {text}
        {Icon}
      </span>
    </>
  );
};

export default FormIcon;
