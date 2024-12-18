"use client";

import { useStore } from "@nanostores/preact";
import {
  $qrOptions,
  onMarginChange,
  onMarginInputChange,
  onSizeChange,
  onUrlChange,
} from "@utils/qrOptions";
import { Minus, PlusIcon, Save } from "lucide-preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import QRCodeStyling, { type FileExtension } from "qr-code-styling";
import { BackGroundSections } from "./BackGroundSections";
import { DotOptions } from "./DotsOptions";
import { ImageOptionsSections } from "./ImageOptionsSections";
import { Seccion } from "./Section";
import { Slider } from "./ui/slider";

import type { ui } from "@i18n/ui";
import { useTranslations } from "../i18n/utils";
import { CornerDotOptions } from "./CornerDotOptions";
import { CornerSquareOptions } from "./CornerSquareOptions";
import { QROptions } from "./QROptions";

const qrCode = new QRCodeStyling($qrOptions.get());

export interface PropsLang {
  lang: keyof typeof ui;
}

export default function App({ lang }: PropsLang) {
  const [fileExt, setFileExt] = useState<FileExtension>("webp");
  const ref = useRef<HTMLDivElement | null>(null);
  const options = useStore($qrOptions);
  const t = useTranslations(lang);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.update(options);
  }, [options]);

  const onExtensionChange = useCallback((event: any) => {
    event.preventDefault();
    setFileExt(event.target.value);
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

      <div class="flex w-full flex-col gap-4">
        <hr class="divider" />
        <div>
          <p>{t("URL")}</p>
          <input value={options.data} onChange={onUrlChange} class="input" />
        </div>
        <Slider
          id="slider-size"
          title={t("SIZE")}
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
          <p>{t("MARGIN")}</p>
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
        <Seccion title={t("IMAGETITLE")} size="md">
          <ImageOptionsSections lang={lang} />
        </Seccion>
        <Seccion
          title={t("BACKGROUNDTITLE")}
          size={options.backgroundOptions?.gradient ? "md" : "sm"}
        >
          <BackGroundSections lang={lang} />
        </Seccion>
        <Seccion
          title={t("DOTSTITLE")}
          size={options.dotsOptions?.gradient ? "lg" : "sm"}
        >
          <DotOptions lang={lang} />
        </Seccion>
        <Seccion title={t("CORNERSQUARETITLEOPTION")} size="xl">
          <CornerSquareOptions lang={lang} />
        </Seccion>
        <Seccion title={t("CORNERDOTTITLEOPTION")} size="xl">
          <CornerDotOptions lang={lang} />
        </Seccion>
        <Seccion title={t("QROPTIONSTITLE")} size="sm">
          <QROptions lang={lang} />
        </Seccion>
        <section class="flex flex-row gap-4">
          <button
            class="btn-solid flex flex-grow items-center justify-center text-center"
            onClick={onDownloadClick}
          >
            <Save />
            {<span class="capitalize">{t("DOWNLOAD")}</span>}
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
