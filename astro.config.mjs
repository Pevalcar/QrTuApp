// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  adapter: netlify(),
});