import type { ui } from "@i18n/ui";

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export type langs = keyof typeof ui;

export interface urls {
  id: number;
  created_at: string;
  user_id: string;
  url_seed: string;
  url_gen: string;
  views: number;
}
