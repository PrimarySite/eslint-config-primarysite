const rules = [
  './rules/best-practices',
  './rules/errors',
  './rules/es2015',
  './rules/imports',
  './rules/node',
  './rules/prettier',
  './rules/react',
  './rules/react-a11y',
  './rules/style',
  './rules/tests',
  './rules/variables'
].map(require.resolve);

module.exports = {
  extends: [...rules, 'prettier', 'prettier/react'],
  plugins: ['prettier']
};
