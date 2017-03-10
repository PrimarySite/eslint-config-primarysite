module.exports = {
  extends: [
    './rules/es2015',
    './rules/react'
  ].map(require.resolve)
};
