module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es2015',
    './rules/node',
    './rules/react',
    './rules/style',
    './rules/variables'
  ].map(require.resolve)
};
