module.exports = {
  env: {
    'cypress/globals': true,
    jest: true
  },
  plugins: ['cypress'],
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'error'
  }
};
