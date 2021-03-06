module.exports = {
  rules: {
    'accessor-pairs': [
      'error',
      {
        getWithoutSet: true
      }
    ],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    complexity: ['error', 8],
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions']
      }
    ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: false,
          BinaryExpression: false,
          VariableDeclarator: false,
          ImportDeclaration: false
        }
      }
    ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true
      }
    ],
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: true
      }
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    // Turn this back on when we support Node 10
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'error',
    radix: ['error', 'as-needed'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: true
      }
    ],
    yoda: ['error', 'never']
  }
};
