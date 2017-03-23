module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],
    'camelcase': ['error', {
      properties: 'always'
    }],
    'capitalized-comments': ['error', 'always', {
      ignoreConsecutiveComments: true
    }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      after: true,
      before: false
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', 'always', {
      includeCommonJSModuleExports: true
    }],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration'],
    'id-blacklist': ['error', 'id'],
    'id-length': ['error', {
      min: 3,
      exceptions: ['e']
    }],
    'indent': ['error', 2, {
      CallExpression: { 'arguments': 1 },
      FunctionDeclaration: { 'body': 1, 'parameters': 0 },
      MemberExpression: 1,
      SwitchCase: 1
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', {
      afterColon: true,
      beforeColon: false,
      mode: strict
    }],
    'keyword-spacing': ['error', {
      after: true,
      before: true
    }],
    'line-comment-position': ['error', {
      position: 'above'
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      allowArrayEnd: true,
      allowArrayStar: true,
      allowBlockEnd: true,
      allowBlockStart: true,
      allowObjectEnd: true,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true
    }],
    'lines-around-directive': ['error', {
      before: 'never',
      after: 'always'
    }],
    'max-depth': ['error', {
      max: 4
    }],
    'max-len': ['error', {
      code: 99,
      comments: 79,
      ignoreUrls: true,
      ignoreRegExpLiterals: true
    }],
    'max-lines': ['error', 500],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 15],
    'max-statements-per-line': ['error', 1],
    'new-cap': ['error', {
      capIsNew: true,
      newIsCap: true,
      properties: true
    }],
    'new-parens': 'error',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2
    }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': ['error', {
      allowSamePrecedence: false
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    // http://eslint.org/docs/rules/#stylistic-issues
    // http://eslint.org/docs/rules/no-restricted-syntax
    // Double check this
    'no-restricted-syntax': ['error', 'FunctionExpression'],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error', {
      allowAfterSuper: false,
      allowAfterThis: false
    }],
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false
    }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {
      multiline: true
    }],
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: false
    }],
    'object-property-newline': 'error',
    'one-var': ['error', 'never', {
      initialized: 'always',
      uninitialized: 'never'
    }],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed', {
      keywords: false,
      numbers: false,
      unnecessary: true
    }],
    'quotes': ['error', 'single', {
      avoidEscape: true
    }],
    'require-jsdoc': 'off',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      after: true,
      before: false
    }],
    'sort-keys': ['error', 'asc', {
      caseSensitive: false,
      natural: true
    }],
    'sort-vars': 'off',
    'space-before-blocks': ['error', {
      classes: 'never',
      functions: 'never',
      keywords: 'always'
    }],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {},
    }],
    'spaced-comment': ['error', 'always'],
    'template-tag-spacing': 'error',
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off'
  }
};
