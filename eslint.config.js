const js = require('@eslint/js');
const globals = require('globals');
const prettierConfigRecommended = require('eslint-config-prettier');
const prettierLinter = require('eslint-plugin-prettier');

module.exports = [
    js.configs.recommended,
    prettierConfigRecommended,
    {
        languageOptions: { globals: { ...globals.node } },
        plugins: { prettierLinter },
        rules: { 'prettierLinter/prettier': 'warn' },
    },
    {
        files: ['src/Chapter2/2.2/2.2.4/**/*.js'],
        languageOptions: { globals: { ...globals.browser } },
    },
];
