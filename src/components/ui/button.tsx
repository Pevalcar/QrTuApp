import type React from "preact/compat";

export const Button = ({
  children,
  onClick,
  variant = "solid",
  type = "button",
  ...props
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost" | "link" | "soft" | "white";
  type?: "button" | "submit" | "reset";
} & React.HTMLAttributes<HTMLButtonElement>) => {
  const classes = ["inline-flex", "items-center", "justify-center", "gap-2"];

  if (variant === "solid") {
    classes.push("btn-solid");
  } else if (variant === "outline") {
    classes.push(
      "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600",
    );
  } else if (variant === "ghost") {
    classes.push("btn-ghost ");
  } else if (variant === "soft") {
    classes.push(
      "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900",
    );
  } else if (variant === "white") {
    classes.push(
      "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
    );
  } else if (variant === "link") {
    classes.push(
      "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400",
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes.join(" ")}
      {...props}
      children={children}
    />
  );
};
