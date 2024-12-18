import { useStore } from "@nanostores/preact";
import { GradienteSeleccion } from "@sections/GradienSection";
import {
  $qrOptions,
  onColorBgChange,
  onFirstGradientColorChange,
  onRotationChange,
  onSecondGradientColorChange,
  onTypeGradeiveChange,
  setGradienteBg,
} from "@utils/qrOptions";
import type { FC } from "preact/compat";
import type { PropsLang } from "./QrCodeGenerator";

export const BackGroundSections: FC<PropsLang> = ({ lang }) => {
  const { backgroundOptions } = useStore($qrOptions);

  const onRotationChangeInput = (event: any) => {
    onRotationChange(event.target.value);
  };
  return (
    <GradienteSeleccion
      lang={lang}
      onRadioChange={onRotationChangeInput}
      options={backgroundOptions}
      onLinearColorChange={onColorBgChange}
      setGradient={setGradienteBg}
      onRotationChange={onRotationChange}
      onTypeGradientChan={onTypeGradeiveChange}
      onFirstGradientColorChange={onFirstGradientColorChange}
      onSecondGradientColorChange={onSecondGradientColorChange}
    />
  );
};
