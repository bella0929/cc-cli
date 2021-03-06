module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "commonjs": true,
        "amd": true,
        "es6": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },

    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        '@typescript-eslint/no-var-requires': 0
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }


};