import { ArrowBigDownDash, ArrowBigUpDashIcon, PlusIcon } from "lucide-preact";
import type { FC, ReactNode } from "preact/compat";
import { useCallback, useState } from "preact/hooks";

interface Props {
  children: ReactNode;
  title: string;
  size?: "sm" | "md" | "lg";
}

export const Seccion: FC<Props> = ({ children, title, size }) => {
  const [show, setShow] = useState(true);

  const altura =
    size === "sm" ? "h-[200px]" : size === "md" ? "h-[300px]" : "h-[400px]";

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <div class="w-full">
      <hr class="divider" />
      <div class="flex flex-row items-center justify-between gap-4">
        <h3 class="subtitle">{title}</h3>
        <button class="btn-ghost" onClick={() => handleClick()}>
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
      <hr class="divider" />
    </div>
  );
};
