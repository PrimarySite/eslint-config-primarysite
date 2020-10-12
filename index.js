const rules = [
  './rules/best-practices',
  './rules/errors',
  './rules/es2015',
  './rules/imports',
  './rules/node',
  './rules/prettier',
  './rules/react',
  './rules/react-a11y',
  './rules/react-hooks',
  './rules/style',
  './rules/tests',
  './rules/variables'
].map(require.resolve);

const config = {
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  }
};

module.exports = {
  extends: [
    ...config,
    ...rules,
    'prettier',
    'prettier/react'
  ]
};
