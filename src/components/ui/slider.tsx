import type { FC } from "preact/compat";

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
  const valuec = prefix === "%" ? value * 100 : value;

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
          onChange={onChange}
        />
        <p class="flex-1 items-center justify-center gap-2">
          <span class="slider-value-text">
            {valuec}
            {prefix}
          </span>
        </p>
      </div>
    </div>
  );
};
