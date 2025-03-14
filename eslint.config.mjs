import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: ["**/.astro", "**/.sst", "**/.wrangler", "**/worker-configuration.d.ts"],
  lessOpinionated: true,
  stylistic: {
    overrides: {
      "style/arrow-parens": "off",
      "style/operator-linebreak": "off",
    },
    semi: true,
    quotes: "double",
  },
  isInEditor: false,
  formatters: {
    prettierOptions: {
      printWidth: 80,
      singleQuote: false,
    },
    astro: "prettier",
  },
  astro: {
    overrides: {
      "antfu/no-top-level-await": "off",
    },
  },
});
