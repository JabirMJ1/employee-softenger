import React from "react";
import { TButtonProps } from "./Button";

const FillButton = ({
  type = "button",
  border = "2",
  buttonStyle = "primary",
  id = "",
  onClick,
  disabled = false,
  className,
  disabledClassName = "!border-primary-disabled !bg-primary-disabled",
  children,
  color,
}: TButtonProps) => {
  let _className = "!border-primary !bg-primary hover:!bg-primary-hover hover:!border-primary-hover"

  if(buttonStyle === "danger") _className = "!border-danger !bg-danger hover:!bg-danger-hover hover:!border-danger-hover"

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={` ${disabled && disabledClassName} ${_className}
        border rounded  box-border
        cursor-pointer inline-block font-noto-sans text-sm
        leading-5 min-h-[36px] m-0 focus:outline-none p-2 py-1 !min-w-[92px]
        relative text-center no-underline touch-manipulation select-none font-normal !text-white`}
      >
        {children}
      </button>
    </div>
  );
};


export default FillButton;
