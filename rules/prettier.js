module.exports = {
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: true,
        printWidth: 100,
        singleQuote: true
      }
    ]
  }
};
