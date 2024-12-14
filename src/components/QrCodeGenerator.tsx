"use client";

import { useStore } from "@nanostores/preact";
import {
  $qrOptions,
  onMarginChange,
  onMarginInputChange,
  onSizeChange,
} from "@utils/qrOptions";
import { Minus, PlusIcon, Save } from "lucide-preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import QRCodeStyling, {
  type DotType,
  type FileExtension,
} from "qr-code-styling";
import { BackGroundSections } from "./BackGroundSections";
import { ImageOptionsSections } from "./ImageOptionsSections";
import { Seccion } from "./Section";
import { Slider } from "./ui/slider";

const qrCode = new QRCodeStyling($qrOptions.get());

export default function App() {
  const [fileExt, setFileExt] = useState<FileExtension>("webp");
  const [dotType, setDotType] = useState<DotType>("classy");
  const [colorDot, setColorDot] = useState("#333333");
  const [colorBg, setColorBg] = useState("#FFFFFF");
  const [margin, setMargin] = useState(0);
  const [size, setSize] = useState(200);
  const ref = useRef<HTMLDivElement | null>(null);
  const options = useStore($qrOptions);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.update(options);
  }, [options]);

  const onUrlChange = useCallback((event: any) => {
    event.preventDefault();
    $qrOptions.set({
      ...$qrOptions.get(),
      data: event.target.value,
    });
  }, []);

  const onExtensionChange = useCallback((event: any) => {
    event.preventDefault();
    setFileExt(event.target.value);
  }, []);

  const onDotTypeChange = useCallback((event: any) => {
    setDotType(event.target.value);
  }, []);

  const onColorBgChange = useCallback((event: any) => {
    setColorBg(event.target.value);
  }, []);

  const onColorDotChange = useCallback((event: any) => {
    setColorDot(event.target.value);
  }, []);

  const onDownloadClick = useCallback(() => {
    qrCode.download({
      extension: fileExt,
    });
  }, [fileExt]);

  return (
    <div class="qr-code-container">
      <div class="mx-auto w-full">
        <div ref={ref} class="qr-code-view" />
      </div>

      <div class="w-full">
        <hr class="divider" />
        <input value={options.data} onChange={onUrlChange} class="input" />
        <Slider
          id="slider-size"
          title="Tamaño"
          min="1"
          max="300"
          step="1"
          value={options.width ?? 0}
          onChange={onSizeChange}
          prefix="px"
        />
        <div
          class="inline-block w-fit rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
          data-hs-input-number=""
        >
          <p>Margen</p>
          <div class="flex items-center gap-x-1.5">
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
              class="w-6 border-0 bg-transparent p-0 text-center text-gray-800 focus:ring-0 dark:text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              style="-moz-appearance: textfield;"
              type="number"
              aria-roledescription="Number field"
              value={options.margin ?? 0}
              data-hs-input-number-input=""
              onChange={onMarginInputChange}
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
        <Seccion title="IMAGEN" size="md">
          <ImageOptionsSections />
        </Seccion>
        <Seccion title="BACKGROUND" size="sm">
          <BackGroundSections />
        </Seccion>
        <div>
          <select
            onChange={onDotTypeChange}
            value={dotType}
            class="select-drop-down"
          >
            {/* creacr iconos yque sea un selector multiple donde tenga el ejemplo a el lado dew cada uno de los iconos */}
            <option value="dot">Dot</option>
            <option value="rounded">Rounded</option>
            <option value="classy">Classy</option>
            <option value="classy-rounded">Classy Rounded</option>
            <option value="square">Square</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
        </div>
        <input
          value={colorDot}
          onChange={onColorDotChange}
          style={styles.inputBox}
          type="color"
        />

        <section class="flex flex-row gap-4">
          <button
            class="btn-solid flex flex-grow items-center justify-center text-center"
            onClick={onDownloadClick}
          >
            <Save />
            Download
          </button>
          <select
            onChange={onExtensionChange}
            value={fileExt}
            class="select-drop-down flex-1"
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WEBP</option>
            <option value="svg">SVG</option>
          </select>
        </section>
      </div>
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
  },
};
