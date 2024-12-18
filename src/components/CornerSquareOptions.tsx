import type { FC } from "preact/compat";
import type { PropsLang } from "./QrCodeGenerator";
import { useTranslations } from "@i18n/utils";
import {
  $qrOptions,
  onCornerColorChange,
  onCornerTypeChange,
  onFirstCornersSquareColorChange,
  onRotationCornerTypeChange,
  onSecondCornersSquareColorChange,
  onTipeCornersSquareChange,
  setGradienteCornersSquare,
} from "@utils/qrOptions";
import { useStore } from "@nanostores/preact";
import { GradienteSeleccion } from "@sections/GradienSection";

export const CornerSquareOptions: FC<PropsLang> = ({ lang }) => {
  const t = useTranslations(lang);
  const { cornersSquareOptions } = useStore($qrOptions);
  return (
    <section class="options-image-section">
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("CORNERSQUARETYPE")}</p>
        <select
          onChange={onCornerTypeChange}
          value={cornersSquareOptions?.type}
          class="select-drop-down"
        >
          {/* "dot" | "square" | "extra-rounded" */}
          <option value="none">{t("CORNERTYPENONE")}</option>
          <option value="dot">{t("CORNERTYPEDOT")}</option>
          <option value="square">{t("CORNERTYPESQUARE")}</option>
          <option value="extra-rounded">{t("CORNERTYPEEXTRAROUNDED")}</option>
        </select>
      </div>
      <GradienteSeleccion
        lang={lang}
        options={cornersSquareOptions}
        onRadioChange={onRotationCornerTypeChange}
        onLinearColorChange={onCornerColorChange}
        setGradient={setGradienteCornersSquare}
        onRotationChange={onRotationCornerTypeChange}
        onTypeGradientChan={onTipeCornersSquareChange}
        onFirstGradientColorChange={onFirstCornersSquareColorChange}
        onSecondGradientColorChange={onSecondCornersSquareColorChange}
      />
    </section>
  );
};
