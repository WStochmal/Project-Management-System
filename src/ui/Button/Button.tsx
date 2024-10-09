import { ButtonProps } from "@/interfaces/button-props";
import React from "react";
import style from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${style.defaultBtn} ${disabled ? style.disabledBtn : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
