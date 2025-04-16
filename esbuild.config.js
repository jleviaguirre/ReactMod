/**
 * @type {import('esbuild').BuildOptions}
 */
export default {
        target: "es2022",
        loader: {
            ".js": "jsx",
            ".ts": "tsx",
            ".tsx": "tsx",
        },
        jsx: "automatic",
    };