import type { FC } from "preact/compat";
import type { PropsLang } from "./QrCodeGenerator";
import { useTranslations } from "@i18n/utils";
import { useStore } from "@nanostores/preact";
import {
  $qrOptions,
  onErrorCorrectionChange,
  onModeChange,
  onTypeNumberChange,
} from "@utils/qrOptions";
import { Minus, PlusIcon } from "lucide-preact";

export const QROptions: FC<PropsLang> = ({ lang }) => {
  const t = useTranslations(lang);
  const { qrOptions } = useStore($qrOptions);

  const onTypeNumberChanges = (event: any) => {
    const number = Number(qrOptions?.typeNumber ?? 0);
    const newNumber = number + event;
    onTypeNumberChange(newNumber);
  };

  const onChangeTupeNumberInptu = (event: any) => {
    onTypeNumberChange(event.target.value);
  };
  return (
    <section class="options-image-section">
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("QRTYPENUMBER")}</p>
        <div
          class="rounded-lg border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-700"
          data-hs-input-number=""
        >
          <div class="flex w-full items-center justify-between gap-x-1">
            <div class="grow px-3 py-2">
              <input
                class="w-full border-0 bg-transparent p-0 text-gray-800 focus:ring-0 dark:text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                style="-moz-appearance: textfield;"
                type="number"
                aria-roledescription="Number field"
                value={qrOptions?.typeNumber ?? 0}
                data-hs-input-number-input=""
                onChange={onChangeTupeNumberInptu}
              />
            </div>
            <div class="-gap-y-px flex items-center divide-x divide-gray-200 border-s border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
              <button
                type="button"
                class="inline-flex size-10 items-center justify-center gap-x-2 bg-white text-sm font-medium text-gray-800 last:rounded-e-lg hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                aria-label="Decrease"
                data-hs-input-number-decrement=""
                onClick={() => onTypeNumberChanges(-1)}
              >
                <Minus />
              </button>
              <button
                type="button"
                class="inline-flex size-10 items-center justify-center gap-x-2 bg-white text-sm font-medium text-gray-800 last:rounded-e-lg hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                aria-label="Increase"
                data-hs-input-number-increment=""
                onClick={() => onTypeNumberChanges(+1)}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("QRMODE")}</p>
        <select
          onChange={onModeChange}
          value={qrOptions?.mode ?? "Byte"}
          class="select-drop-down"
        >
          {/* "Numeric" | "Alphanumeric" | "Byte" | "Kanji" */}
          <option value="Numeric">{t("QRMODENUMBER")}</option>
          <option value="Alphanumeric">{t("QRMODEANALPHANUMERIC")}</option>
          <option value="Byte">{t("QRMODEBYTE")}</option>
          <option value="Kanji">{t("QRMODEKANJI")}</option>
        </select>
      </div>
      <div class="flex flex-row items-center gap-4">
        <p class="w-52">{t("QRERROR")}</p>
        <select
          onChange={onErrorCorrectionChange}
          value={qrOptions?.errorCorrectionLevel ?? "Q"}
          class="select-drop-down"
        >
          {/*  "L" | "M" | "Q" | "H"*/}
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="Q">Q</option>
          <option value="H">H</option>
        </select>
      </div>
    </section>
  );
};
