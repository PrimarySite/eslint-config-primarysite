module.exports = {
  extends: [
    [
      './rules/best-practices',
      './rules/errors',
      './rules/es2015',
      './rules/imports',
      './rules/node',
      './rules/react',
      './rules/react-a11y',
      './rules/style',
      './rules/tests',
      './rules/variables'
    ].map(require.resolve),
    'prettier',
    'prettier/react'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: true,
        printWidth: 99,
        singleQuote: true
      }
    ]
  }
};
