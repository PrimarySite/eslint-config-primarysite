module.exports = {
  env: {
    'cypress/globals': true,
    jest: true
  },
  plugins: ['cypress'],
  rules: {
    'cypress/assertion-before-screenshot': 'error',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
  }
};
