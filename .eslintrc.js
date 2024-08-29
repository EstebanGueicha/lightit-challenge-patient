module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    'react-native/react-native': true
  },
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_.*?$"
      }
    ],
    "import/order": ["warn", {
      "groups": ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [{
        "pattern": "~/**",
        "group": "external",
        "position": "after"
      }],
      "newlines-between": "always"
    }],
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "noSortAlphabetically": false,
        "reservedFirst": true
      }
    ],
    "padding-line-between-statements": [
      "warn",
      {"blankLine": "always", "prev": "*", "next": "return"},
      {"blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      {"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}
    ],
    'react-native/no-color-literals': "off",
    'import/order': "off",
    'react-native/no-inline-styles': "off",
    'react/no-unescaped-entities': "off",
    'react-native/no-raw-text': "off",
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
