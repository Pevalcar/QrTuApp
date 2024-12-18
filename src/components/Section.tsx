import { ArrowBigDownDash, ArrowBigUpDashIcon, PlusIcon } from "lucide-preact";
import type { FC, ReactNode } from "preact/compat";
import { useCallback, useState } from "preact/hooks";

interface Props {
  children: ReactNode;
  title: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Seccion: FC<Props> = ({ children, title, size }) => {
  const [show, setShow] = useState(false);

  const altura =
    size === "sm"
      ? "h-[200px]"
      : size === "md"
        ? "h-[300px]"
        : size === "lg"
          ? "h-[350px]"
          : "h-[400px]";

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <div class="w-full rounded-md border border-blue-500 p-4 dark:border-neutral-700 dark:bg-neutral-900">
      <div class="flex flex-row items-center justify-between gap-4">
        <button
          class="btn-ghost flex w-full flex-row items-center justify-between gap-4"
          onClick={() => handleClick()}
        >
          <h3 class="subtitle">{title}</h3>
          {show ? (
            <ArrowBigUpDashIcon className="icon" />
          ) : (
            <ArrowBigDownDash className="icon" />
          )}
        </button>
      </div>
      <div
        class={
          "w-ful overflow-hidden transition-all delay-150 duration-300 ease-in-out " +
          (show ? altura : `h-0`)
        }
        id="hs-basic-collapse-heading"
        aria-labelledby="hs-basic-collapse"
      >
        {children}
      </div>
    </div>
  );
};
