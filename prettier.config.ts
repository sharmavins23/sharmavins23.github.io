import type { Config } from "prettier";

// ===== Constant Definitions ==================================================

/**
 * Defines configurations for Prettier.
 */
const prettierConfiguration: Config = {
    /**
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens: "always",
    /**
     * Put the `>` of a multi-line HTML element at the end of the last line
     * instead of being alone on the next line.
     */
    bracketSameLine: true,
    /**
     * Print spaces between brackets in object literals.
     */
    bracketSpacing: true,
    /**
     * Have Prettier allow individual files to opt out of formatting if they
     * contain a special comment at the top of the file.
     */
    checkIgnorePragma: false,
    /**
     * Control whether Prettier formats quoted code embedded in the file.
     */
    embeddedLanguageFormatting: "auto",
    /**
     * Specify the global whitespace sensitivity for HTML, Vue, Angular, and
     * Handlebars.
     */
    htmlWhitespaceSensitivity: "css",
    /**
     * Keep JSDoc comments as multilines rather than collapsing.
     */
    jsdocCommentLineStrategy: "multiline",
    /**
     * Use single quotes instead of double quotes in JSX.
     */
    jsxSingleQuote: false,
    /**
     * Configure how Prettier wraps object literals when they could fit on one
     * line or span multiple lines.
     */
    objectWrap: "collapse",
    /**
     * Configure overrides for Prettier.
     */
    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
    /**
     * Configure plugins for Prettier.
     */
    plugins: ["prettier-plugin-jsdoc", "prettier-plugin-svelte"],
    /**
     * Specify the line length that the printer will wrap on.
     */
    printWidth: 80,
    /**
     * Have Prettier wrap prose to the print width.
     */
    proseWrap: "always",
    /**
     * Change when properties in objects are quoted.
     */
    quoteProps: "as-needed",
    /**
     * Print semicolons at the ends of statements.
     */
    semi: true,
    /**
     * Enforce single attribute per line in HTML, Vue, and JSX.
     */
    singleAttributePerLine: true,
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote: false,
    /**
     * Specify the number of spaces per indentation-level.
     */
    tabWidth: 4,
    /**
     * Print trailing commas wherever possible in multi-line comma-separated
     * syntactic structures.
     */
    trailingComma: "all",
    /**
     * Indent lines with tabs instead of spaces.
     */
    useTabs: false,
};

// ===== Driver Code ===========================================================

export default prettierConfiguration;
