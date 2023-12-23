import React from "react";
import PropTypes from "prop-types";
import { TButtonProps } from "./Button";

const BorderlessButton = ({
  type = "button",
  id = "",
  onClick,
  disabled = false,
  disabledClassName = "!text-primary-disabled",
  className="text-primary",
  children,
  color,
}: TButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className={`bg-transparent border hover:!text-primary-hover font-normal !border-transparent ${disabled && disabledClassName} ${className} 
          focus:outline-none p-2 py-1 font-medium leading-5 min-h-[36px] m-0 min-w-[92px]
          cursor-pointer inline-block font-noto-sans text-sm`}
        id={id}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default BorderlessButton;