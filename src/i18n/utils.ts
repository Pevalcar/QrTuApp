import type { langs } from "@env";
import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as langs;
  return defaultLang;
}

export function useTranslations(lang: langs) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
