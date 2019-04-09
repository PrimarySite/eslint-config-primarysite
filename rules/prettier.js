module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'strict',
        jsxBracketSameLine: true,
        printWidth: 100,
        singleQuote: true
      }
    ]
  }
};
