import type { langs } from "@env";
import { languages, ui } from "@i18n/ui";
import { useTranslations } from "@i18n/utils";
import { useCallback, useState, type FC } from "preact/compat";

interface Props {
  lang: langs;
}

export const UrlInput: FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const [url, setUrl] = useState("");
  const [request, setRequest] = useState("");
  const [loading, setLoading] = useState(false);

  const Suibmid = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/urlshorter`, {
      method: "POST",
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    setLoading(false);
    setRequest(data.message);
  };
  const onUrlChgane = (e: Event) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setUrl(target.value);
  };

  return (
    <div>
      <form class="flex w-full gap-2" onSubmit={Suibmid}>
        <input
          onChange={onUrlChgane}
          type="url"
          class="input w-full flex-1 flex-grow"
          placeholder={t("URL-PLACEHOLDER")}
          value={url}
          required
        />
        <button onClick={Suibmid} class="btn-solid">
          {t("URL-BTN")}
        </button>
      </form>
      <div>
        <h1>{loading ? "Loading..." : request}</h1>
      </div>
    </div>
  );
};
