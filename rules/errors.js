module.exports = {
  rules: {
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: false }],
    'no-async-promise-executor': 'error',
    'no-constant-condition': ['error', { checkLoops: true }],
    'no-cond-assign': ['error', 'always'],
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [
      'error',
      'all',
      {
        enforceForNewInMemberExpressions: true,
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false
      }
    ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'require-atomic-updates': 'error',
    'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
    'valid-typeof': ['error', { requireStringLiterals: true }]
  }
};
