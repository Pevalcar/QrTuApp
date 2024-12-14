import { useStore } from "@nanostores/preact";
import { $qrOptions, onColorBgChange } from "@utils/qrOptions";
import { useState } from "preact/hooks";

export const BackGroundSections = () => {
  const { backgroundOptions } = useStore($qrOptions);
  const [solid, setSolid] = useState(false);
  return (
    <section class="options-image-section">
      <div class="flex flex-row items-center gap-4">
        <p>Tipo de color</p>
        <ul class="radio-group">
          <li class="radio-item">
            <div class="relative flex w-full items-start">
              <div class="flex h-5 items-center">
                <input
                  type="radio"
                  name="color"
                  value="black"
                  checked={solid}
                  onChange={() => setSolid(true)}
                  class="radio-item-input"
                />
              </div>
              <label class="radio-item-label" for="black">
                Solido
              </label>
            </div>
          </li>
          <li class="radio-item">
            <div class="relative flex w-full items-start">
              <div class="flex h-5 items-center">
                <input
                  type="radio"
                  name="color"
                  value="white"
                  checked={!solid}
                  onChange={() => setSolid(false)}
                  class="radio-item-input"
                />
              </div>
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
    </section>
  );
};

const GradientColorSection = () => {
  const { backgroundOptions } = useStore($qrOptions);
  const [gradient, setGradient] = useState(false);
  return (
    <div class="flex flex-row items-center justify-center gap-4">
      <p>Fondo transparente</p>
      <input
        type="checkbox"
        class="checkbox"
        id="hs-default-checkbox"
        onChange={() => setGradient(!gradient)}
        checked={gradient}
      />
      <label for="hs-default-checkbox" class="checkbox-label">
        {gradient ? "Gradient" : "Solid"}
      </label>
    </div>
  );
};
