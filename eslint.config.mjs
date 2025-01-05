import globals from "globals";
import typeScriptParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends(
        "eslint:recommended",
        "plugin:react/recommended"
), {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["packages/**", "dist/**", "node_modules/**", "webpack.config.ts", "src/global.d.ts"],
    languageOptions: {
        globals: {
            ...globals.browser
        },

        parser: typeScriptParser,
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            requireConfigFile: false,
            ecmaFeatures: {
                jsx: true
            },
            ecmaVersion: 13
        }
    },
    rules: {
        "no-console": "warn",
        "no-unused-vars": "warn",

        quotes: ["error", "double", {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],

        "jsx-quotes": ["error", "prefer-double"],
        indent: ["error", 4],
        "comma-dangle": ["warn", "never"],
        semi: ["warn", "always"],
        "react/prop-types": "off",
        "no-constant-condition": "off",
        "no-undef": "off",
        "react/react-in-jsx-scope": "off"
    }
}];