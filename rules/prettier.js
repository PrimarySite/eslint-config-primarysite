module.exports = {
  plugins: [
    'prettier',
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
