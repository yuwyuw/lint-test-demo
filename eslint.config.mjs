import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {languageOptions: { globals: globals.browser }},
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
        "no-unused-vars": "2",
        "no-undef": "2"
    }
}   
];