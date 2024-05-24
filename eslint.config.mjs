import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    ignores: [
      "*.config.*", 
      "commitlint.config.js",
      "node_modules/**/*"
    ],
    rules: {
      semi: "error",
      "prefer-const": "0",
      "no-undef": "0",
    },
  }
];