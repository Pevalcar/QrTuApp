import type React from "preact/compat";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
} & React.HTMLAttributes<HTMLButtonElement>) => {
  const classes = ["inline-flex", "items-center", "justify-center", "gap-2"];

  if (variant === "primary") {
    classes.push("bg-primary-500", "text-white", "hover:bg-primary-600");
  } else if (variant === "secondary") {
    classes.push("bg-white", "text-primary-500", "hover:bg-primary-50");
  } else if (variant === "outline") {
    classes.push("border", "border-primary-500", "text-primary-500");
  }

  return (
    <button
      type={type}
      className={classes.join(" ")}
      {...props}
      children={children}
    />
  );
};
