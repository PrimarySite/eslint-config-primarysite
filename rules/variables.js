module.exports = {
  rules: {
    'init-declarations': ['error', 'always'],
    'no-delete-var': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all'
      }
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', { typeof: true }],
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'all'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ]
  }
};
