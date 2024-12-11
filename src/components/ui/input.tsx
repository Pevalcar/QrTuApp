import type React from "preact/compat";

export const Input = ({
  type = "text",
  onChange,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input type={type} {...props} />;
};
