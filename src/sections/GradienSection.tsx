import type { PropsLang } from "@components/QrCodeGenerator";
import type { ui } from "@i18n/ui";
import { useTranslations } from "@i18n/utils";
import { Minus, PlusIcon } from "lucide-preact";
import { memo } from "preact/compat";
import { useState, useEffect } from "preact/hooks";
import type { Gradient } from "qr-code-styling";

interface Props extends PropsLang {
  onRadioChange(event: any): void;
  options: any;
  onLinearColorChange(event: any): void;
  setGradient(object: Gradient | undefined): void;
  onRotationChange(event: any): void;
  onTypeGradientChan(event: any): void;
  onFirstGradientColorChange(event: any): void;
  onSecondGradientColorChange(event: any): void;
}

export const GradienteSeleccion = memo(
  ({
    onRadioChange,
    options,
    onLinearColorChange,
    setGradient,
    onRotationChange,
    onTypeGradientChan,
    onFirstGradientColorChange,
    onSecondGradientColorChange,
    lang,
  }: Props) => {
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

    const t = useTranslations(lang);

    useEffect(() => {
      if (options?.gradient) {
        setGradienteColor(options?.gradient);
        return;
      }
    }, [options?.gradient]);

    return (
      <section class="options-image-section">
        <div class="flex flex-row items-center gap-4">
          <p class="w-52">{t("TYPECOLORS")}</p>
          <ul class="radio-group">
            <li class="radio-item">
              <div class="relative flex w-full items-start">
                <div class="flex h-5 items-center">
                  <input
                    type="radio"
                    value="black"
                    checked={solid}
                    onChange={() => {
                      setSolid(true);
                      setGradient(undefined);
                    }}
                    class="radio-item-input"
                  />
                </div>
                <label class="radio-item-label" for="black">
                  {t("SOLID")}
                </label>
              </div>
            </li>
            <li class="radio-item">
              <div class="relative flex w-full items-center justify-center gap-4">
                <input
                  type="radio"
                  value="white"
                  checked={!solid}
                  onChange={() => {
                    setSolid(false);
                    setGradient(gradienteColor);
                  }}
                  class="radio-item-input"
                />
                <label radio-item-label for="white">
                  {t("GRADIENT")}
                </label>
              </div>
            </li>
          </ul>
        </div>
        {solid ? (
          <div class="flex flex-row items-center justify-start gap-4">
            <p class="w-52">{t("COLOR")}</p>

            <input
              value={options?.color}
              onChange={onLinearColorChange}
              type="color"
              class="input-color"
            />
          </div>
        ) : (
          <GradientColorSection
            lang={lang}
            onRotationChangeInput={onRadioChange}
            options={options}
            onRotationChange={onRotationChange}
            onTypeGradientChang={onTypeGradientChan}
            onFirstGradientColorChange={onFirstGradientColorChange}
            onSecondGradientColorChange={onSecondGradientColorChange}
          />
        )}
        {/* 
      
      <div class="w-full items-center justify-center p-2">
        {/* //TODO colocarle unos iconso que representen que tan redoddeado posiblemente ponele mejor unos check con distinto tampmaños preseleccionados */}
        {/* <Slider
          title="Redondeado"
          id="redodneado"
          min={0}
          max={100}
          value={options?.round ?? 0}
          onChange={onRoundChange}
        />
      </div> */}
        {/* } */}
      </section>
    );
  },
);

const GradientColorSection = ({
  options,
  onRotationChangeInput,
  onRotationChange,
  onTypeGradientChang,
  onFirstGradientColorChange,
  onSecondGradientColorChange,
  lang,
}: {
  options: any;
  onRotationChangeInput(event: any): void;
  onRotationChange(event: any): void;
  onTypeGradientChang(event: any): void;
  onFirstGradientColorChange(event: any): void;
  onSecondGradientColorChange(event: any): void;
  lang: keyof typeof ui;
}) => {
  const onMarginChange = (number: number) => {
    const correction = ((options?.gradient?.rotation ?? 0) * 180) / Math.PI;
    onRotationChange(Math.round(correction + number));
  };
  const t = useTranslations(lang);

  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("TYPEGRADIENT")}</p>
        <ul class="radio-group">
          <li class="radio-item">
            <div class="relative flex w-full items-start">
              <div class="flex h-5 items-center">
                <input
                  type="radio"
                  value="linear"
                  checked={options?.gradient?.type === "linear"}
                  onChange={onTypeGradientChang}
                  class="radio-item-input"
                />
              </div>
              <label class="radio-item-label" for="black">
                {t("LINEAR")}
              </label>
            </div>
          </li>
          <li class="radio-item">
            <div class="relative flex w-full items-center justify-center gap-4">
              <input
                type="radio"
                value="radial"
                checked={options?.gradient?.type === "radial"}
                onChange={onTypeGradientChang}
                class="radio-item-input"
              />
              <label radio-item-label for="white">
                {t("RADIAL")}
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("COLORGRADIENT")}</p>
        <input
          value={options?.gradient?.colorStops[0].color}
          onChange={onFirstGradientColorChange}
          type="color"
          class="input-color"
        />
        <input
          value={options?.gradient?.colorStops[1].color}
          onChange={onSecondGradientColorChange}
          type="color"
          class="input-color"
        />
      </div>
      <div
        class="inline-block w-fit rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        data-hs-input-number=""
      >
        <p>{t("ROTATION")}</p>
        <div class="flex items-center gap-x-8">
          <button
            type="button"
            class="btn-icon"
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
                ((options?.gradient?.rotation ?? 0) * 180) / Math.PI,
              ) ?? 0
            }
            data-hs-input-number-input=""
            onChange={onRotationChangeInput}
          />
          <button
            type="button"
            class="btn-icon"
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
