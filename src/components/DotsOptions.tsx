import { useStore } from "@nanostores/preact";
import { GradienteSeleccion } from "@sections/GradienSection";
import {
  $qrOptions,
  onDotColorChange,
  onDotTypeChange,
  onFirstDotsColorChange,
  onRotationDotsChange,
  onSecondDotsColorChange,
  onTipeDotsChange,
  setGradioeDots,
} from "@utils/qrOptions";
import type { PropsLang } from "./QrCodeGenerator";
import type { FC } from "preact/compat";
import { useTranslations } from "@i18n/utils";

export const DotOptions: FC<PropsLang> = ({ lang }) => {
  const { dotsOptions } = useStore($qrOptions);
  const t = useTranslations(lang);
  return (
    <div>
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("DOTTIPES")}</p>
        <select
          onChange={onDotTypeChange}
          value={dotsOptions?.type}
          class="select-drop-down"
        >
          {/* creacr iconos yque sea un selector multiple donde tenga el ejemplo a el lado dew cada uno de los iconos "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded" */}
          <option value="dots">{t("DOTDOT")}</option>
          <option value="rounded">{t("DOTROUNDED")}</option>
          <option value="classy">{t("DOTCLASSY")}</option>
          <option value="classy-rounded">{t("DOTCLASSYROUNDED")}</option>
          <option value="square">{t("DOTSQUARE")}</option>
          <option value="extra-rounded">{t("DOTEXTRAROUNDED")}</option>
        </select>
      </div>
      <GradienteSeleccion
        lang={lang}
        options={dotsOptions}
        onRadioChange={onRotationDotsChange}
        onLinearColorChange={onDotColorChange}
        setGradient={setGradioeDots}
        onRotationChange={onRotationDotsChange}
        onTypeGradientChan={onTipeDotsChange}
        onFirstGradientColorChange={onFirstDotsColorChange}
        onSecondGradientColorChange={onSecondDotsColorChange}
      />
    </div>
  );
};
