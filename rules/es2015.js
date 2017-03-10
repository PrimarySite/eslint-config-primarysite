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

    'no-const-assign': 'error',

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
