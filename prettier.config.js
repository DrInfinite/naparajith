/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
module.exports = {
    plugins: ['prettier-plugin-tailwindcss'],
    trailingComma: 'es5',
    bracketSpacing: true,
    tabWidth: 4,
    semi: true,
    printWidth: 80,
    singleQuote: true,
    jsxSingleQuote: false,
    useTabs: false,
    arrowParens: 'always',
    /*  overrides: [
        {
            files: "Routes.*",
            options: {
                printWidth: 999,
            },
        },
    ], */
};
