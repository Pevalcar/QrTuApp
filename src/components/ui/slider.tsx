import type { JSXInternal } from "node_modules/preact/src/jsx";
import type { FC } from "preact/compat";
import { useCallback, useState } from "preact/compat";

interface Props {
  value: number;
  min: number | string;
  max: number | string;
  step?: number | string | undefined;
  id: string;
  title: string;
  onChange: (event: any) => void;
  prefix?: string;
  class?: string;
}

export const Slider: FC<Props> = ({
  value,
  onChange,
  min,
  max,
  step = undefined,
  id,
  title,
  prefix,
  class: clase,
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const onChangeInternal = (event: any) => {
    onChange(event);
    setInternalValue(event.target?.value);
  };
  return (
    <div class={"flex-col items-center justify-center gap-4" + clase}>
      <p>{title}</p>
      <div class="flex items-center justify-center gap-4">
        <input
          class="slider"
          id={id}
          aria-orientation="horizontal"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChangeInternal(event)}
        />
        <p class="flex-1 items-center justify-center gap-2">
          <span class="slider-value-text">
            {prefix === "%" ? internalValue * 100 : internalValue}
            {prefix}
          </span>
        </p>
      </div>
    </div>
  );
};
