import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  stage?: "default" | "success" | "error";
  containerClassName?: string;
  inputDescription?: string;
}

const Input: FC<InputProps> = ({
  label,
  containerClassName,
  className,
  stage = "default",
  inputDescription,
  ...props
}) => {
  return (
    <div className={`flex flex-col mb-3 ${containerClassName}`}>
      <label className={`text-[#9CA3AF] mb-1 `}>{label}</label>
      <input
        className={`peer border px-2 py-1 placeholder-transparent ${className}`}
        {...props}
      />
      <small className={`${stage === "error" && "text-red-500"}`}>
        {inputDescription}
      </small>
    </div>
  );
};

Input.displayName = "Myinput";

export default Input;
