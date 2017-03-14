modules.exports = {
  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  rules: {
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],

    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],

    'constructor-super': 'error',
    'class-methods-use-this', 'error',
    'no-const-assign': 'error',
    'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',

    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    'prefer-template': 'error',

    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all']
    }]
  }
};
