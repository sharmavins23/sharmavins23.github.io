import js from "@eslint/js";
import { Linter } from "eslint";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import svelte from "eslint-plugin-svelte";
import { includeIgnoreFile } from "eslint/config";
import globals from "globals";
import path from "node:path";
import ts, { CompatibleConfigArray } from "typescript-eslint";

// ===== Constant Definitions ==================================================

/**
 * Resolved absolute path to the repository's gitignore file, whose entries
 * ESLint should also ignore.
 */
const gitignorePath: string = path.resolve(import.meta.dirname, ".gitignore");

/**
 * Options for configuring ESLint.
 */
const eslintOptions: (CompatibleConfigArray | Linter.Config)[] = [
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,
    perfectionist.configs["recommended-natural"],
    prettier,
    ...svelte.configs.prettier,
    {
        /**
         * Configure the global variables available to linted files.
         */
        languageOptions: { globals: { ...globals.browser, ...globals.node } },

        /**
         * Configure rule overrides applied to every linted file.
         */
        rules: {
            /**
             * Typescript-eslint strongly recommend that you do not use the
             * no-undef rule on TypeScript projects, as TypeScript already
             * covers it.
             */
            "no-undef": "off",
        },
    },
    {
        /**
         * Configure the TypeScript parser for Svelte files.
         */
        files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
        languageOptions: {
            parserOptions: {
                extraFileExtensions: [".svelte"],
                parser: ts.parser,
                projectService: true,
            },
        },
    },
];

// ===== Helper Functions ======================================================

/**
 * Creates and returns ESLint configurations for the application.
 */
function configureEslint(): (CompatibleConfigArray | Linter.Config)[] {
    return eslintOptions;
}

// ===== Driver Code ===========================================================

export default configureEslint();
