module.exports = {
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
      requireForBlockBody: false,
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {
      after: false,
      before: true
    }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      allowParens: true
    }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
   'no-duplicate-imports': 'off',
   'no-new-symbol': 'error',
   'no-restricted-imports': 'off',
   'no-this-before-super': 'error',
   'no-useless-computed-key': 'error',
   'no-useless-constructor': 'error',
   'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-var': 'off',
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    'prefer-const': 'error',
    'prefer-destructuring': ['error', {
      array: true,
      object: true
    }, {
      enforceForRenamedProperties: false
    }],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'sort-imports': ['off'],
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'before']
  }
};
