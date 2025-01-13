import type { langs } from "@env";
import { useTranslations } from "@i18n/utils";
import { useStore } from "@nanostores/preact";
import { $userInfo } from "@utils/userInfo";
import { useState, type FC } from "preact/compat";

interface Props {
  lang: langs;
}

export const UrlInput: FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const user = useStore($userInfo);

  const [url, setUrl] = useState("");
  const [request, setRequest] = useState("");
  const [loading, setLoading] = useState(false);

  const Suibmid = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const response = await fetch(`/api/urlshorter`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.message) {
      setRequest(data.message);
    }
    setLoading(false);
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
          id="url"
          name="url"
          class="input w-full flex-1 flex-grow"
          placeholder={t("URL-PLACEHOLDER")}
          value={url}
          required
        />
        <button type={"submit"} class="btn-solid">
          {t("URL-BTN")}
        </button>
      </form>
      <div>
        <h1>{loading ? "Loading..." : request}</h1>
      </div>
    </div>
  );
};
