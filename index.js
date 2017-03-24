module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es2015',
    './rules/imports',
    './rules/node',
    './rules/react',
    './rules/react-a11y',
    './rules/style',
    './rules/variables'
  ].map(require.resolve)
};
