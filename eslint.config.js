import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add your custom rules here
  // "eslint-plugin-astro/no-set-html-directive": "error",
  // "eslint-plugin-astro/no-deprecated-astro-fetch-content": "error",

  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
