module.exports = {
    "extends": [
        "airbnb",
        "airbnb/hooks",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "prettier",
        "plugin:prettier/recommended"
    ],
    "plugins": ["@typescript-eslint", "react", "prettier"],
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaFeatures": {
        "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "import/no-unresolved": 0,
        "react/jsx-filename-extension": [1, {
        "extensions": [
            ".ts",
            ".tsx"
        ]
        }],
        "prettier/prettier": [
        "error",
        {
            "singleQuote": true,
            "trailingComma": "all",
            "arrowParens": "avoid",
            "endOfLine": "auto"
        }
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "import/extensions": ["error", "never"],
        "react/prop-types": 0,
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "camelcase": "off",
        "@typescript-eslint/no-namespace": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "no-param-reassign": "off",
        "react/destructuring-assignment": "off",
        "@typescript-eslint/no-empty-function": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
};



