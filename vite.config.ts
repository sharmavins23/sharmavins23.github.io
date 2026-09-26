import type { KitConfig } from "@sveltejs/kit";
import type { Options, SvelteConfig } from "@sveltejs/vite-plugin-svelte";

import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import path from "node:path";
import { type UserConfig } from "vite";

// ===== Constant Definitions ==================================================

/**
 * Directory whose contents the compiler should auto-detect when checking for
 * runes mode.
 */
const LIBRARY_DIRECTORY: string = "node_modules";

/**
 * Options for configuring SvelteKit.
 */
const svelteKitOptions: KitConfig &
    Omit<Options, "onwarn"> &
    Pick<SvelteConfig, "vitePlugin"> = {
    /**
     * Configure static output for GitHub Pages deployments.
     */
    adapter: adapter(),

    /**
     * Configure options for the Vite compiler.
     */
    compilerOptions: {
        /**
         * Force Svelte 5 runes mode in repository code.
         *
         * @note Can be removed in Svelte 6.
         */
        runes: forceRunesMode,
    },
};

// ===== Helper Functions ======================================================

/**
 * Creates and returns vite configurations for the SvelteKit application.
 */
function configureSvelteKit(): UserConfig {
    return { plugins: [sveltekit(svelteKitOptions)] };
}

// ===== Driver Code ===========================================================

/**
 * Decide whether the Svelte compiler forces runes mode for a given file.
 *
 * @param options Options passed by the compiler.
 * @param options.filename The filename to check.
 * @returns `true` to force runes mode, or `undefined` to auto-detect.
 */
function forceRunesMode(options: { filename: string }): boolean | undefined {
    // Separate the file's path into segments.
    const segments: string[] = options.filename.split(path.sep);
    // Test if any segments are library files.
    const isLibraryFile: boolean = segments.includes(LIBRARY_DIRECTORY);

    // The file is a library file; Auto-detect.
    if (isLibraryFile) return undefined;

    // The file is not a library file; Force runes mode.
    return true;
}

export default configureSvelteKit;
