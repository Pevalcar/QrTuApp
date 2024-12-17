import { useStore } from "@nanostores/preact";
import {
  $qrOptions,
  onColorBgChange,
  onFirstGradientColorChange,
  onRotationChange,
  onSecondGradientColorChange,
  onTypeGradeiveChange,
  setGradiente,
} from "@utils/qrOptions";
import { useEffect, useState } from "preact/hooks";
import type { Gradient } from "qr-code-styling";
import { Slider } from "./ui/slider";
import { Minus, PlusIcon } from "lucide-preact";

export const BackGroundSections = () => {
  const { backgroundOptions } = useStore($qrOptions);
  const [solid, setSolid] = useState(true);
  const [gradienteColor, setGradienteColor] = useState<Gradient>({
    type: "linear",
    colorStops: [
      {
        offset: 0,
        color: "#ffffff",
      },
      {
        offset: 100,
        color: "#777777",
      },
    ],
  });

  useEffect(() => {
    if (backgroundOptions?.gradient) {
      setGradienteColor(backgroundOptions?.gradient);
      return;
    }
  }, [backgroundOptions?.gradient]);

  return (
    <section class="options-image-section">
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">Tipo de color</p>
        <ul class="radio-group">
          <li class="radio-item">
            <div class="relative flex w-full items-start">
              <div class="flex h-5 items-center">
                <input
                  type="radio"
                  name="color"
                  value="black"
                  checked={solid}
                  onChange={() => {
                    setSolid(true);
                    setGradiente(undefined);
                  }}
                  class="radio-item-input"
                />
              </div>
              <label class="radio-item-label" for="black">
                Solido
              </label>
            </div>
          </li>
          <li class="radio-item">
            <div class="relative flex w-full items-center justify-center gap-4">
              <input
                type="radio"
                name="color"
                value="white"
                checked={!solid}
                onChange={() => {
                  setSolid(false);
                  setGradiente(gradienteColor);
                }}
                class="radio-item-input"
              />
              <label radio-item-label for="white">
                Gradiente
              </label>
            </div>
          </li>
        </ul>
      </div>
      {solid ? (
        <div class="flex flex-row items-center justify-start gap-4">
          <p>Color de fondo</p>

          <input
            value={backgroundOptions?.color}
            onChange={onColorBgChange}
            type="color"
            class="input-color"
          />
        </div>
      ) : (
        <GradientColorSection />
      )}
      {/* 
      
      <div class="w-full items-center justify-center p-2">
        {/* //TODO colocarle unos iconso que representen que tan redoddeado posiblemente ponele mejor unos check con distinto tampmaños preseleccionados */}
      {/* <Slider
          title="Redondeado"
          id="redodneado"
          min={0}
          max={100}
          value={backgroundOptions?.round ?? 0}
          onChange={onRoundChange}
        />
      </div> */}
      {/* } */}
    </section>
  );
};

const GradientColorSection = () => {
  const { backgroundOptions } = useStore($qrOptions);

  const onMarginChange = (number: number) => {
    const correction =
      ((backgroundOptions?.gradient?.rotation ?? 0) * 180) / Math.PI;
    onRotationChange(Math.round(correction + number));
  };

  const onRotationChangeInput = (event: any) => {
    onRotationChange(event.target.value);
  };

  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">Tipo de Gradiente</p>
        <ul class="radio-group">
          <li class="radio-item">
            <div class="relative flex w-full items-start">
              <div class="flex h-5 items-center">
                <input
                  type="radio"
                  name="gradien-type"
                  value="linear"
                  checked={backgroundOptions?.gradient?.type === "linear"}
                  onChange={onTypeGradeiveChange}
                  class="radio-item-input"
                />
              </div>
              <label class="radio-item-label" for="black">
                Linear
              </label>
            </div>
          </li>
          <li class="radio-item">
            <div class="relative flex w-full items-center justify-center gap-4">
              <input
                type="radio"
                name="gradien-type"
                value="radial"
                checked={backgroundOptions?.gradient?.type === "radial"}
                onChange={onTypeGradeiveChange}
                class="radio-item-input"
              />
              <label radio-item-label for="white">
                Radial
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">Color de Gradiente</p>
        <input
          value={backgroundOptions?.gradient?.colorStops[0].color}
          onChange={onFirstGradientColorChange}
          type="color"
          class="input-color"
        />
        <input
          value={backgroundOptions?.gradient?.colorStops[1].color}
          onChange={onSecondGradientColorChange}
          type="color"
          class="input-color"
        />
      </div>
      <div
        class="inline-block w-fit rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        data-hs-input-number=""
      >
        <p>Rotación</p>
        <div class="flex items-center gap-x-8">
          <button
            type="button"
            class="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onMouseDown={() => onMarginChange(-1)}
            aria-label="Decrease"
            data-hs-input-number-decrement=""
          >
            <Minus className="icon" />
          </button>
          <input
            class="w-16 border-0 bg-transparent p-0 text-center text-gray-800 focus:ring-0 dark:text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            style="-moz-appearance: textfield;"
            type="number"
            aria-roledescription="Number field"
            value={
              Math.round(
                ((backgroundOptions?.gradient?.rotation ?? 0) * 180) / Math.PI,
              ) ?? 0
            }
            data-hs-input-number-input=""
            onChange={onRotationChangeInput}
          />
          <button
            type="button"
            class="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onClick={() => onMarginChange(1)}
            aria-label="Increase"
            data-hs-input-number-increment=""
          >
            <PlusIcon class="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
