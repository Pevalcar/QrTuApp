import { useStore } from "@nanostores/preact";
import {
  $qrOptions,
  hideBackgroundDots,
  onFileChange,
  onImageSizeChange,
  onMaginImageChange,
} from "@utils/qrOptions";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { Delete, Trash } from "lucide-preact";

export const ImageOptionsSections = () => {
  const { image, imageOptions } = useStore($qrOptions);
  return (
    <section class="flex flex-col gap-4">
      <h3 class="text-primary-500 text-center font-bold">IMAGEN</h3>
      <div class="flex-row gap-4">
        <input
          type="file"
          onChange={onFileChange}
          value={image ?? ""}
          class="flex-1 rounded-md border px-4 py-2 focus:ring-primary-400 focus:outline-none focus:ring-2"
        />
        {image && (
          <button
            class="primary-button flex-1"
            onClick={() => onFileChange(null)}
          >
            <Trash className="icon" />
            Eliminar
          </button>
        )}
      </div>
      {image && (
        <>
          <div>
            <input
              type="checkbox"
              onChange={() => hideBackgroundDots()}
              checked={imageOptions?.hideBackgroundDots}
            />
            <span class="text-primary-500 text-center font-bold">
              {imageOptions?.hideBackgroundDots
                ? "Hide Background Dots"
                : "Background Dots"}
            </span>
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
        </>
      )}
    </section>
  );
};
