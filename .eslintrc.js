
module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "rules": {
        "no-unused-vars": [2, { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    "indent": [2, 4, { "SwitchCase": 1 }],
    "max-len": [2, 120, 4],
    "comma-dangle": [2, "never"],
    "arrow-parens": [2, "always"],
    "import/no-extraneous-dependencies": ["error", { "peerDependencies": true }],
    "import/no-unresolved": ["warn", { "ignore": ["NavFrontendModules/"] }],
    "import/extensions": "warn",
    "import/no-cycle": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "react/no-find-dom-node": "warn",
    "react/no-unused-state": "warn",
    "react/destructuring-assignment": "off",
    "react/jsx-fragments": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-access-state-in-setstate": "warn",
    "no-undef": "warn",
    "no-restricted-globals": "off",
    "jsx-a11y/no-noninteractive-tabindex": "warn",
    "no-else-return": "off"
    },

    // TYpescript
    overrides: [{
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint", "jsx-a11y"],
        extends: [
            "airbnb",
            "plugin:jsx-a11y/strict"
        ],
        parserOptions: {
            ecmaversion: 2018,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            "camelcase": "error",
            "comma-dangle": "error",
            "id-blacklist": "error",
            "id-match": "error",
            "max-len": ["error", { "code": 120 }],
            "no-duplicate-imports": "off",
            "no-underscore-dangle": "error",
            "arrow-parens": [2, "always"],
            "indent": [2, 4, {"SwitchCase": 1}]
        }}]
}