import { useStore } from "@nanostores/preact";
import {
  $qrOptions,
  hideBackgroundDots,
  onFileChange,
  onImageSizeChange,
  onMaginImageChange,
} from "@utils/qrOptions";
import { Trash } from "lucide-preact";
import { Slider } from "./ui/slider";

export const ImageOptionsSections = () => {
  const { image, imageOptions } = useStore($qrOptions);
  return (
    <section class="options-image-section">
      <div class="flex flex-row items-center justify-between gap-4">
        <form class="flex">
          <label for="file-input" class="sr-only">
            Choose file
          </label>
          <input
            type="file"
            onChange={onFileChange}
            value={image ?? ""}
            name="file-input"
            id="file-input"
            class="imput-file overflow-hidden"
          />
        </form>
        {image && (
          <button class="btn-ghost" onClick={() => onFileChange(null)}>
            <Trash className="icon" />
            Eliminar
          </button>
        )}
      </div>
      {image && (
        <div class="flex flex-col gap-4">
          <div>
            <input
              type="checkbox"
              class="checkbox"
              id="hs-default-checkbox"
              onChange={() => hideBackgroundDots()}
              checked={imageOptions?.hideBackgroundDots}
            />
            <label for="hs-default-checkbox" class="checkbox-label">
              {imageOptions?.hideBackgroundDots
                ? "Hide Background Dots"
                : "Background Dots"}
            </label>
          </div>
          <Slider
            id="basic-range-slider-borderimage"
            title="Margen de imagen"
            min="0"
            max="100"
            value={imageOptions?.margin ?? 0}
            onChange={onMaginImageChange}
            prefix="px"
          />
          <Slider
            id="basic-range-slider-sizeimage"
            title="Tamaño de la imagen"
            min={0.0}
            max={1.0}
            step={0.1}
            value={imageOptions?.imageSize ?? 0}
            onChange={onImageSizeChange}
            prefix="%"
          />
        </div>
      )}
    </section>
  );
};
