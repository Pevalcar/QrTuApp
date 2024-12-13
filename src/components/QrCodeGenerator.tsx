"use client";

import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import QRCodeStyling, {
  type DotType,
  type FileExtension,
} from "qr-code-styling";
import { Slider } from "./ui/slider";
import { $qrOptions, hideBackgroundDots } from "@utils/qrOptions";
import { useStore } from "@nanostores/preact";
import { ImageOptionsSections } from "./ImageOptionsSections";

const qrCode = new QRCodeStyling($qrOptions.get());

export default function App() {
  const [fileExt, setFileExt] = useState<FileExtension>("png");
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
    setFileExt(event.target.value);
  }, []);

  const onDotTypeChange = useCallback((event: any) => {
    setDotType(event.target.value);
  }, []);
  const onSizeChange = useCallback((event: any) => {
    setSize(Number(event.target.value));
  }, []);

  const onColorBgChange = useCallback((event: any) => {
    setColorBg(event.target.value);
  }, []);

  const onColorDotChange = useCallback((event: any) => {
    setColorDot(event.target.value);
  }, []);
  const onMarginChange = useCallback((event: any) => {
    setMargin(Number(event.target.value));
  }, []);

  const onDownloadClick = useCallback(() => {
    qrCode.download({
      extension: fileExt,
    });
  }, []);

  return (
    <div class="qr-code-container hs-dark-mode">
      <div ref={ref} class="qr-code-view" />
      <div class="flex flex-col gap-4">
        <input
          value={options.data}
          onChange={onUrlChange}
          class="border-primary-200 mr-6 w-full flex-1 rounded-md border px-4 py-2 focus:ring-primary-400 focus:outline-none focus:ring-2"
          data-hs-theme-switch=""
        />
        <ImageOptionsSections />
        <div style={styles.inputWrapper}>
          <input
            type="range"
            min="100"
            max="300"
            value={size}
            onChange={onSizeChange}
            class="qr-code-slider"
            style={styles.inputBox}
          />
          <p>
            <span style={styles.inputBox}>{size}</span>
          </p>
          <select onChange={onExtensionChange} value={fileExt}>
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WEBP</option>
            <option value="svg">SVG</option>
          </select>
          <select onChange={onDotTypeChange} value={dotType}>
            {/* creacr iconos yque sea un selector multiple donde tenga el ejemplo a el lado dew cada uno de los iconos */}
            <option value="dot">Dot</option>
            <option value="rounded">Rounded</option>
            <option value="classy">Classy</option>
            <option value="classy-rounded">Classy Rounded</option>
            <option value="square">Square</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
          <button onClick={onDownloadClick}>Download</button>
        </div>
        <input
          value={colorDot}
          onChange={onColorDotChange}
          style={styles.inputBox}
          type="color"
        />
        <input
          value={colorBg}
          onChange={onColorBgChange}
          style={styles.inputBox}
          type="color"
        />
        <input
          type="number"
          min="0"
          max="100"
          value={margin}
          onChange={onMarginChange}
          style={styles.inputBox}
        />
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
