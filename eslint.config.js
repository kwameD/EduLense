import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import security from "eslint-plugin-security";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React/TypeScript source files
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { react, security },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "security/detect-object-injection": "off"
    }
  },

  // Node config files (allow module.exports)
  {
    files: ["babel.config.js", "jest.config.js"],
    languageOptions: {
      globals: {
        module: "writable",
        require: "writable"
      }
    }
  }
];
