import type React from "preact/compat";

export const Label = ({
  htmlFor,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};
