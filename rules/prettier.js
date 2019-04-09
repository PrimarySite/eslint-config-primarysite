module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        jsxBracketSameLine: true,
        printWidth: 100,
        singleQuote: true
      }
    ]
  }
};
