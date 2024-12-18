import type { FC } from "preact/compat";
import type { PropsLang } from "./QrCodeGenerator";
import { useTranslations } from "@i18n/utils";
import { useStore } from "@nanostores/preact";
import {
  $qrOptions,
  onCornerDotTypeChange,
  onFirstCornersDotColorChange,
  onLinearColorDotCornerChange,
  onRotationCornerDotTypeChange,
  onSecondCornersDotColorChange,
  onTipeCornersDotChange,
  setGradienteCornersDot,
} from "@utils/qrOptions";
import { GradienteSeleccion } from "@sections/GradienSection";

export const CornerDotOptions: FC<PropsLang> = ({ lang }) => {
  const { cornersDotOptions } = useStore($qrOptions);
  const t = useTranslations(lang);
  return (
    <section class="options-image-section">
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("CORNERSQUARETYPE")}</p>
        <select
          onChange={onCornerDotTypeChange}
          value={cornersDotOptions?.type}
          class="select-drop-down"
        >
          {/*  "square" | "dot"*/}
          <option value="none">{t("CORNERTYPENONE")}</option>
          <option value="dot">{t("CORNERTYPEDOT")}</option>
          <option value="square">{t("CORNERTYPESQUARE")}</option>
        </select>
      </div>
      <GradienteSeleccion
        lang={lang}
        options={cornersDotOptions}
        onRadioChange={onRotationCornerDotTypeChange}
        setGradient={setGradienteCornersDot}
        onRotationChange={onRotationCornerDotTypeChange}
        onLinearColorChange={onLinearColorDotCornerChange}
        onFirstGradientColorChange={onFirstCornersDotColorChange}
        onSecondGradientColorChange={onSecondCornersDotColorChange}
        onTypeGradientChan={onTipeCornersDotChange}
      />
    </section>
  );
};
